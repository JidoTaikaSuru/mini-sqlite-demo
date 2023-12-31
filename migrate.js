"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const better_sqlite3_1 = require("drizzle-orm/better-sqlite3");
const migrator_1 = require("drizzle-orm/better-sqlite3/migrator");
const better_sqlite3_2 = __importDefault(require("better-sqlite3"));
const sqlite = new better_sqlite3_2.default("sqlite.db");
const db = (0, better_sqlite3_1.drizzle)(sqlite);
// this will automatically run needed migrations on the database
(0, migrator_1.migrate)(db, { migrationsFolder: "./drizzle" });
