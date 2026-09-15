import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";

// Đọc file sidebar.html
const htmlPath = path.resolve(process.cwd(), "docs/sidebar.html");

const server = new Server(
    {
        name: "project-docs-mcp",
        version: "1.0.0",
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

// Định nghĩa các Tool mà Antigravity có thể gọi
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "get_docs_menu",
                description: "Lấy danh sách toàn bộ menu và các đường dẫn (href) từ hệ thống tài liệu Docusaurus.",
                inputSchema: { type: "object", properties: {} },
            },
            {
                name: "fetch_doc_content",
                description: "Lấy nội dung chi tiết của một trang tài liệu dựa trên đường dẫn href (ví dụ: /docs/MA/api/basics/getSystemInfo).",
                inputSchema: {
                    type: "object",
                    properties: {
                        href: { type: "string", description: "Đường dẫn href của trang docs cần đọc" }
                    },
                    required: ["href"]
                },
            },
        ],
    };
});

// Xử lý logic khi Antigravity gọi tool
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    if (name === "get_docs_menu") {
        if (!fs.existsSync(htmlPath)) {
            return { content: [{ type: "text", text: "Không tìm thấy file sidebar.html trong thư mục docs!" }] };
        }
        const htmlContent = fs.readFileSync(htmlPath, "utf-8");
        const $ = cheerio.load(htmlContent);
        const menuItems = [];

        // Duyệt qua các thẻ a chứa link docs
        $("a[href^='/docs/']").each((_, el) => {
            const href = $(el).attr("href") ?? "";
            const title = $(el).find("span[title]").attr("title") || $(el).text().trim();
            menuItems.push({ title, url: `https://docs.zaloplatforms.com${href}` });
        });

        return {
            content: [{ type: "text", text: JSON.stringify(menuItems, null, 2) }],
        };
    }

    if (name === "fetch_doc_content") {
        const { href } = args;
        // Ở đây bạn có thể cấu hình để fetch nội dung từ trang web thực tế hoặc đọc file markdown tương ứng nếu có.
        // Ví dụ giả lập trả về thông tin đường dẫn đang cần:
        return {
            content: [{ type: "text", text: `Đang giả lập nội dung cho đường dẫn: ${href}. Hãy thực hiện code logic xử lý dựa trên API này.` }],
        };
    }

    throw new Error(`Tool không tồn tại: ${name}`);
});

// Khởi động server qua Stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);