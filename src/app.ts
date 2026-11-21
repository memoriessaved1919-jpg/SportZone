import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // Traditional API
app.use(express.json()); // REST API
app.use(morgan(MORGAN_FORMAT)); // Logging standartlari

/** 2-SESSIONS **/

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // SSR: EJS
app.use("/", router); // SPA: React

export default app;
