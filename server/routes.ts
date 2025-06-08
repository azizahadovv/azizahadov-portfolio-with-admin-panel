import { Express } from "express";
import { createServer, Server } from "http";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import Contact from "./models/Contact.ts";

export async function registerRoutes(app: Express): Promise<Server> {
  // Kontakt yuborish
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await Contact.create(validatedData);
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

  // Barcha kontaktlar
app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts }); // data array bo'lishi kerak
  } catch (error) {
    res.status(500).json({ success: false, message: "Kontaktlarni olishda xato" });
  }
});

  return createServer(app);
}