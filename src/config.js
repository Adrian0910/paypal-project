import { config } from "dotenv";
config();

export const PORT = 3000;
export const CLIENT_PAYPAL = process.env.CLIENT_PAYPAL_ID;
export const SECRET_PAYPAL = process.env.SECRET_PAYPAL_ID;
export const PAYPAL_API = `https://api-m.sandbox.paypal.com`
//export const HOST = `http://localhost:` + PORT;
export const HOST = "https://paypal-project-production.up.railway.app";

