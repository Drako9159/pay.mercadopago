import express from "express";
import paymentRoutes from "./src/routes/payment.routes.js";
import { PORT } from "./config.js";
import morgan from "morgan";
import path from "node:path";

const app = express();

app.use(morgan("dev"));
app.use(paymentRoutes);
app.use(express.static(path.join(process.cwd(), "./public")));

app.listen(PORT);
console.log("[server] is running in port ", PORT);
