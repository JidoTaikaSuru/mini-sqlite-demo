"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    schema: "./src/schema.ts",
    out: "./drizzle",
    driver: "better-sqlite",
    dbCredentials: {
        url: "./sqlite.db",
    },
};
