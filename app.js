import express from "express";
import helmet from "helmet";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

var corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Middleware
app.use(notFound);
app.use(errorHandler);

export { app };
