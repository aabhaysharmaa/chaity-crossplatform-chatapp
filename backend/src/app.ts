import express, { type Request, type Response } from "express";

const app = express();

import authRoutes from "./routes/auth-route";
import chatRoutes from "./routes/auth-route";
import messageRoutes from "./routes/auth-route";
import userRoutes from "./routes/auth-route";


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/auth", authRoutes)
app.use("/api/chats", chatRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)



app.get("/", (req: Request, res: Response) => {
	res.send({ message: "Server is working fine" })
})


export default app