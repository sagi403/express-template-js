import express from "express";
import helmet from "helmet";

import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(helmet());

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Middleware
// app.use(notFound);
// app.use(errorHandler);

export { app };
