import type { NextFunction, Request, Response } from "express"
import type { AuthRequest } from "../middleware/auth"
import { User } from "../models/User"
import { clerkClient, getAuth } from "@clerk/express"


export const getMe = async (req: AuthRequest, res: Response, next: NextFunction) => {
	try {
		const user = await User.findById({
			clerkId: req.userId
		})
		if (!user) {
			return res.status(404).json({ message: "User not found" })
		}
		res.status(200).json(user);
	} catch (error) {
		console.log("Error in getMe :", error)
		res.status(500)
		next()
	}
}

export const authCallback = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { userId: clerkId } = getAuth(req);
		if (!clerkId) {
			return res.status(500).json({ message: "Unauthorized" })
		}
		let newUser = await User.findOne({ clerkId })
		if (!newUser) {
			// get user info form clerk and save into database
			const clerkUser = await clerkClient.users.getUser(clerkId);
			newUser = await User.create({
				clerkId,
				name: clerkUser.firstName ? `${clerkUser.firstName} ${clerkUser.lastName || ""}`.trim() : clerkUser.emailAddresses[0]?.emailAddress.split("@")[0],
				email: clerkUser.emailAddresses[0]?.emailAddress,
				avatar: clerkUser.imageUrl
			})
		}
		return res.status(200).json(newUser)
	} catch (error) {
		console.log("error in authCallback :", error)
		console.log("Error in getMe :", error)
		res.status(500)
		next(error)
	}
}