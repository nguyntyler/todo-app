require("dotenv").config();

const http = require("http");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const server = http.createServer(app);
const PORT = 3000;
const es6Renderer = require("express-es6-template-engine");

const session = require("express-session");
const FileStore = require("session-file-store")(session);

const { homeRouter, userRouter } = require("./routers");

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");
const logger = morgan("tiny");

app.use(
	session({
		store: new FileStore(),
		secret: process.env.SESSION_SECRET,
		saveUninitialized: false,
		resave: true,
		rolling: true,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 7,
		},
	})
);

app.use(logger);
// app.use(helmet());
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);

app.use("/user", userRouter);

server.listen(PORT, () => {
	console.log("Listening at:", PORT);
});
