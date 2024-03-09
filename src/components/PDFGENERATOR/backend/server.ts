import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
const mysql = require("mysql");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.get("/helo", (request: Request, response: Response, next: NextFunction) => {
  response.send("<h1>Hello world!</h1>");
});


app.listen(PORT,
    () => {
      console.info("API Listening on port " + PORT);
    }
  );
