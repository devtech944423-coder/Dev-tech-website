(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__923f1b27._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/dev-enterprises/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Next.js Middleware
 * Purpose: Apply rate limiting and security headers at the edge
 * 
 * This file already exists, but we're adding rate limiting here
 */ __turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
// Simple in-memory rate limiter (for production, use Redis)
const rateLimitMap = new Map();
function checkRateLimit(ip, limit, windowMs) {
    const now = Date.now();
    const record = rateLimitMap.get(ip);
    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, {
            count: 1,
            resetTime: now + windowMs
        });
        return true;
    }
    if (record.count >= limit) {
        return false;
    }
    record.count++;
    return true;
}
// Clean up old entries periodically
setInterval(()=>{
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()){
        if (now > record.resetTime) {
            rateLimitMap.delete(ip);
        }
    }
}, 60000); // Clean up every minute
function middleware(request) {
    // Get IP from headers (NextRequest doesn't have .ip property)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown';
    const pathname = request.nextUrl.pathname;
    // Apply rate limiting to API routes
    if (pathname.startsWith('/api/')) {
        // Stricter limits for contact form
        if (pathname.startsWith('/api/contact')) {
            if (!checkRateLimit(ip, 3, 60 * 60 * 1000)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'Too many requests. Please try again later.'
                }, {
                    status: 429
                });
            }
        } else {
            // General API rate limit
            if (!checkRateLimit(ip, 100, 15 * 60 * 1000)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'Too many requests. Please try again later.'
                }, {
                    status: 429
                });
            }
        }
    }
    // Security headers (already configured in next.config.ts, but adding here for edge)
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    // Add security headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'SAMEORIGIN');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    // HTTPS redirect (if not already in production)
    if (("TURBOPACK compile-time value", "development") === 'production' && request.headers.get('x-forwarded-proto') !== 'https') //TURBOPACK unreachable
    ;
    return response;
}
const config = {
    matcher: [
        '/api/:path*',
        '/((?!_next/static|_next/image|favicon.ico).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__923f1b27._.js.map