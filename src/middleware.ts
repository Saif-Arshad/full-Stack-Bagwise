import { NextRequest,NextResponse } from "next/server";
export {default} from 'next-auth/middleware'
import { getToken } from "next-auth/jwt";

export async function middleware (request:NextRequest){
    const token = await getToken({req:request})
    const url = request.nextUrl

   
}

export const config = {
    matcher:[
        "/register-account"
    ]
}