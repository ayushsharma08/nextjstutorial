import { NextRequest } from 'next/server'
import jwt from "jsonwebtoken"

export const getDataFromToken = (request: NextRequest) => {

    try {
        const token = request.cookies.get("user")?.value || ""

        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!)
        return decodedToken.id

    } catch (error: any) {
        console.log("error while fetching data from token", error.message);
        throw new Error(error.message)

    }
} 