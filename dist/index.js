// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  subject: true,
  message: true
});

// server/routes.ts
import { z } from "zod";

// server/models/Contact.ts
import mongoose, { Schema } from "mongoose";
var ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  subject: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
var Contact_default = mongoose.model("Contact", ContactSchema);

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await Contact_default.create(validatedData);
      res.status(201).json({
        success: true,
        message: "Xabaringiz yuborildi!",
        data: contact
      });
    } catch (error) {
      console.error("Kontakt yuborishda xato:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Noto'g'ri ma'lumot",
          errors: error.errors
        });
      }
      res.status(500).json({
        success: false,
        message: "Xabarni yuborishda xato yuz berdi"
      });
    }
  });
  app2.get("/api/contacts", async (req, res) => {
    try {
      const contacts2 = await Contact_default.find().sort({ createdAt: -1 });
      res.json({ success: true, data: contacts2 });
    } catch (error) {
      res.status(500).json({ success: false, message: "Kontaktlarni olishda xato" });
    }
  });
  return createServer(app2);
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
import mongoose2 from "mongoose";
import dotenv from "dotenv";
var app = express2();
dotenv.config();
async function connectDB() {
  try {
    await mongoose2.connect(process.env.MONGODB_URI || "", {
      serverSelectionTimeoutMS: 5e3,
      socketTimeoutMS: 45e3
    });
    mongoose2.connection.on("connected", () => {
      log("\u2705 MongoDB-ga ulandi");
    });
    mongoose2.connection.on("error", (err) => {
      log("\u274C MongoDB connection error:", err instanceof Error ? err.message : String(err));
    });
    mongoose2.connection.on("disconnected", () => {
      log("\u26A0\uFE0F MongoDB-ga ulanish uzildi");
    });
    process.on("SIGINT", async () => {
      await mongoose2.connection.close();
      log("MongoDB ulanishi yopildi");
      process.exit(0);
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Noma'lum xato";
    log("\u274C MongoDB-ga ulanmadi:", errorMessage);
    console.error("To'liq xato tafsilotlari:", error);
    process.exit(1);
  }
}
app.use(express2.json());
app.use(express2.urlencoded({ extended: true }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      log(`${req.method} ${path3} ${res.statusCode} - ${duration}ms`);
    }
  });
  next();
});
(async () => {
  try {
    await connectDB();
    const server = await registerRoutes(app);
    app.use((err, req, res, next) => {
      console.error("\u274C Xato:", err);
      res.status(500).json({ success: false, message: "Server xatosi" });
    });
    if (process.env.NODE_ENV === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }
    const port = process.env.PORT || 5e3;
    server.listen(port, () => {
      log(`\u{1F680} Server http://localhost:${port} da ishga tushdi`);
    });
  } catch (error) {
    console.error("\u274C Server ishga tushmadi:", error);
    process.exit(1);
  }
})();
