import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const publicRoutes = [
        "/",
        "/about",
        "/services",
        "/contact",
        "/login",
        "/register",
        "/api/auth",
        "/favican.ico",
        "_next",
    ];

    // Routes that need exact match (not including sub-paths)
    const exactMatchRoutes = ["/scan"];

    // Check for exact match routes or public routes
    if (
        pathname === "/" ||
        exactMatchRoutes.includes(pathname) ||
        publicRoutes.some((path) => path !== "/" && pathname.startsWith(path))
    ) {
        return NextResponse.next();
    }

    const token = await getToken({
        req: request,
        secret: process.env.NEXT_AUTH_SECRET,
    });

    if (!token) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("callbackUrl", request.url);

        return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
