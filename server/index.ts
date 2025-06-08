import express, { Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import mongoose from "mongoose";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
// MongoDB ulanish
// index.ts faylida MongoDB ulanish qismiga qo'shing
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "", {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    mongoose.connection.on("connected", () => {
      log("✅ MongoDB-ga ulandi");
    });
    
    mongoose.connection.on("error", (err) => {
      log("❌ MongoDB connection error:", err instanceof Error ? err.message : String(err));
    });
    
    mongoose.connection.on("disconnected", () => {
      log("⚠️ MongoDB-ga ulanish uzildi");
    });
    
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      log("MongoDB ulanishi yopildi");
      process.exit(0);
    });

  } catch (error: unknown) {
    // Xatoni xavfsiz tarzda ishlovchi kod
    const errorMessage = error instanceof Error ? error.message : 'Noma\'lum xato';
    log("❌ MongoDB-ga ulanmadi:", errorMessage);
    
    // Qo'shimcha debug ma'lumotlari
    console.error('To\'liq xato tafsilotlari:', error);
    
    process.exit(1);
  }
}

// Asosiy middleware'lar
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      log(`${req.method} ${path} ${res.statusCode} - ${duration}ms`);
    }
  });

  next();
});

// Server ishga tushirish
(async () => {
  try {
    await connectDB();
    const server = await registerRoutes(app);

    // Xato ishlovchi middleware
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      console.error("❌ Xato:", err);
      res.status(500).json({ success: false, message: "Server xatosi" });
    });

    // Vite yoki static fayllar
    if (process.env.NODE_ENV === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    const port = process.env.PORT || 5000;
    server.listen(port, () => {
      log(`🚀 Server http://localhost:${port} da ishga tushdi`);
    });

  } catch (error) {
    console.error("❌ Server ishga tushmadi:", error);
    process.exit(1);
  }
})();