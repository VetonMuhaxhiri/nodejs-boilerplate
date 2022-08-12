import express, { Application, Request, Response } from "express";
// this shim is required
import { useExpressServer } from "routing-controllers";
import path from "path";
import "reflect-metadata";

require("dotenv").config();

const app: Application = express();
const port = 5000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

useExpressServer(app, {
  controllers: [path.join(__dirname + "/controllers/*.ts")],
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(error);
}
