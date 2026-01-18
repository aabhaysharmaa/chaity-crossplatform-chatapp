import app from "./src/app";
import express, { type NextFunction, type Request, type Response } from "express";
import { connectDB } from "./src/config/database";
export const PORT = process.env.PORT

connectDB().then(() => {
	app.listen(PORT || 3000, () => {
		console.log("Express Server is up running on the PORT : ", PORT)
		console.log(`http://localhost:3000`)
	})
})

app.use((err : Error, req: Request, res: Response, next: NextFunction) => {
	res.send({ error: err.message || "Internal Server Error" }).status(500)
})