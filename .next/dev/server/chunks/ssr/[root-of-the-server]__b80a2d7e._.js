module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/dev-enterprises/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navLinks = [
        {
            href: '/',
            label: 'Home'
        },
        {
            href: '/products',
            label: 'Products'
        },
        {
            href: '/about',
            label: 'About'
        },
        {
            href: '/contact',
            label: 'Contact'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center hover:opacity-80 transition-opacity",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/logo.png",
                                alt: "Dev Tech Enterprises",
                                width: 180,
                                height: 48,
                                className: "h-10 sm:h-11 md:h-12 w-auto object-contain",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/dev-enterprises/components/Navbar.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/dev-enterprises/components/Navbar.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex space-x-8",
                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${pathname === link.href ? 'text-gray-900 bg-gray-100' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`,
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/dev-enterprises/components/Navbar.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/dev-enterprises/components/Navbar.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            className: "md:hidden text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 rounded-md p-2 transition-colors",
                            "aria-label": "Toggle menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-6 w-6",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/dev-enterprises/components/Navbar.tsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M4 6h16M4 12h16M4 18h16"
                                }, void 0, false, {
                                    fileName: "[project]/dev-enterprises/components/Navbar.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dev-enterprises/components/Navbar.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/dev-enterprises/components/Navbar.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev-enterprises/components/Navbar.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden py-4 space-y-2 border-t border-gray-200",
                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            onClick: ()=>setIsMenuOpen(false),
                            className: `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${pathname === link.href ? 'text-gray-900 bg-gray-100' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`,
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/dev-enterprises/components/Navbar.tsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/dev-enterprises/components/Navbar.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dev-enterprises/components/Navbar.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dev-enterprises/components/Navbar.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/dev-enterprises/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "footer",
        className: "bg-white border-t border-gray-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-gray-900 mb-4",
                                    children: "Dev Tech Enterprises"
                                }, void 0, false, {
                                    fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                    lineNumber: 10,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-6 leading-relaxed",
                                    children: "Your trusted partner for semiconductors, sensors, cables & wires, switches, and lab equipment."
                                }, void 0, false, {
                                    fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 mr-3 text-[#3b82f6] flex-shrink-0",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                                        lineNumber: 17,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                                    lineNumber: 16,
                                                    columnNumber: 17
                                                }, this),
                                                "devtech944423@gmail.com"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                            lineNumber: 15,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 mr-3 text-[#3b82f6] flex-shrink-0",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                                        lineNumber: 23,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                                    lineNumber: 22,
                                                    columnNumber: 17
                                                }, this),
                                                "+91 9255000022"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev-enterprises/components/Footer.tsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-gray-900 mb-4",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "block text-gray-600 hover:text-[#3b82f6] transition-colors",
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/products",
                                            className: "block text-gray-600 hover:text-[#3b82f6] transition-colors",
                                            children: "Products"
                                        }, void 0, false, {
                                            fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/about",
                                            className: "block text-gray-600 hover:text-[#3b82f6] transition-colors",
                                            children: "About"
                                        }, void 0, false, {
                                            fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            className: "block text-gray-600 hover:text-[#3b82f6] transition-colors",
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev-enterprises/components/Footer.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev-enterprises/components/Footer.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev-enterprises/components/Footer.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Dev Tech Enterprises. All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev-enterprises/components/Footer.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dev-enterprises/components/Footer.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dev-enterprises/components/Footer.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dev-enterprises/components/Footer.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/dev-enterprises/lib/firebase/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAnalyticsInstance",
    ()=>getAnalyticsInstance,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/firebase/storage/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/@firebase/storage/dist/node-esm/index.node.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$firebase$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/firebase/analytics/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyCWHhCAiLXes2hdhDlHRiZR_UX3oLu7MT0") || "AIzaSyCWHhCAiLXes2hdhDlHRiZR_UX3oLu7MT0",
    authDomain: ("TURBOPACK compile-time value", "dev-tech-enterprise.firebaseapp.com") || "dev-tech-enterprise.firebaseapp.com",
    projectId: ("TURBOPACK compile-time value", "dev-tech-enterprise") || "dev-tech-enterprise",
    storageBucket: ("TURBOPACK compile-time value", "dev-tech-enterprise.firebasestorage.app") || "dev-tech-enterprise.firebasestorage.app",
    messagingSenderId: ("TURBOPACK compile-time value", "494367292674") || "494367292674",
    appId: ("TURBOPACK compile-time value", "1:494367292674:web:4188fa9e9eca01b080161b") || "1:494367292674:web:4188fa9e9eca01b080161b",
    measurementId: ("TURBOPACK compile-time value", "G-LDKNR9EG9F") || "G-LDKNR9EG9F"
};
// Initialize Firebase
let app;
if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApps"])().length) {
    app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
} else {
    app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApps"])()[0];
}
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStorage"])(app);
const getAnalyticsInstance = async ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
};
const __TURBOPACK__default__export__ = app;
}),
"[project]/dev-enterprises/lib/firebase/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImageUrl",
    ()=>getImageUrl,
    "getImagesFromFolder",
    ()=>getImagesFromFolder,
    "getStorageUrl",
    ()=>getStorageUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/firebase/storage/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/@firebase/storage/dist/node-esm/index.node.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/lib/firebase/config.ts [app-ssr] (ecmascript)");
;
;
async function getImageUrl(imagePath) {
    try {
        const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"], imagePath);
        const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDownloadURL"])(imageRef);
        return url;
    } catch (error) {
        console.error('Error getting image URL:', error);
        return null;
    }
}
async function getImagesFromFolder(folderPath) {
    try {
        const folderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"], folderPath);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listAll"])(folderRef);
        const urls = [];
        for (const itemRef of result.items){
            const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDownloadURL"])(itemRef);
            urls.push(url);
        }
        return urls;
    } catch (error) {
        console.error('Error getting images from folder:', error);
        return [];
    }
}
function getStorageUrl(imagePath) {
    const bucket = ("TURBOPACK compile-time value", "dev-tech-enterprise.firebasestorage.app");
    return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(imagePath)}?alt=media`;
}
}),
"[project]/dev-enterprises/components/ProductCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/lib/firebase/storage.ts [app-ssr] (ecmascript)");
;
;
;
// Generate placeholder image URL based on product name
const getPlaceholderImage = (name)=>{
    // Using Unsplash API with electronics/technology themed images
    // Different image IDs for variety based on product name hash
    const imageIds = [
        '1518770660439-4636190af475',
        '1558618666-fcd25c85cd64',
        '1555949963-aa79dcee981c',
        '1550751827-4bd374c3f58b',
        '1581091226825-a6a2a5aee158'
    ];
    // Simple hash to get consistent image for same product name
    const hash = name.split('').reduce((acc, char)=>acc + char.charCodeAt(0), 0);
    const imageId = imageIds[hash % imageIds.length];
    return `https://images.unsplash.com/photo-${imageId}?w=400&h=300&fit=crop&q=80`;
};
// Check if imageUrl is a Firebase Storage path (doesn't start with http)
const isFirebaseStoragePath = (url)=>{
    return !url.startsWith('http://') && !url.startsWith('https://');
};
function ProductCard({ name, description, imageUrl, className = '' }) {
    // If imageUrl is provided and is a Firebase Storage path, convert it to full URL
    // Otherwise, use the URL as-is or fallback to placeholder
    let imageSrc;
    if (imageUrl) {
        if (isFirebaseStoragePath(imageUrl)) {
            imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStorageUrl"])(imageUrl);
        } else {
            imageSrc = imageUrl; // Already a full URL
        }
    } else {
        imageSrc = getPlaceholderImage(name);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        bg-white rounded-lg overflow-hidden border border-gray-200 
        hover:border-[#3b82f6] hover:shadow-lg transition-all duration-200 
        shadow-sm group
        ${className}
      `,
        role: "article",
        "aria-label": `Product: ${name}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-48 md:h-56 bg-gray-100 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: imageSrc,
                    alt: name,
                    fill: true,
                    className: "object-cover group-hover:scale-105 transition-transform duration-200",
                    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }, void 0, false, {
                    fileName: "[project]/dev-enterprises/components/ProductCard.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dev-enterprises/components/ProductCard.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 md:p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/dev-enterprises/components/ProductCard.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 leading-relaxed text-sm md:text-base line-clamp-3",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/dev-enterprises/components/ProductCard.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dev-enterprises/components/ProductCard.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dev-enterprises/components/ProductCard.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/dev-enterprises/lib/firebase/categories-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectionNamesToCheck",
    ()=>collectionNamesToCheck,
    "createCategoryFromCollectionName",
    ()=>createCategoryFromCollectionName
]);
const collectionNamesToCheck = [
    'Electronics',
    'Sweets',
    'Beverage'
];
/**
 * Smart defaults for category metadata based on collection name
 */ function getCategoryDefaults(collectionName) {
    const name = collectionName;
    const lowerName = collectionName.toLowerCase();
    // Icon mapping based on collection name
    const iconMap = {
        'electronics': '🔌',
        'sweets': '🍬',
        'beverage': '🥤',
        'beverages': '🥤',
        'drink': '🥤',
        'drinks': '🥤',
        'clothing': '👕',
        'books': '📚',
        'home': '🏠',
        'appliances': '🏠',
        'food': '🍔',
        'toys': '🧸',
        'sports': '⚽',
        'beauty': '💄',
        'health': '💊',
        'garden': '🌱',
        'automotive': '🚗'
    };
    // Find matching icon
    let icon = '📦'; // default
    for (const [key, value] of Object.entries(iconMap)){
        if (lowerName.includes(key)) {
            icon = value;
            break;
        }
    }
    // Gradient colors - black gradient variations
    const gradients = [
        'from-gray-900 to-black',
        'from-black to-gray-900',
        'from-gray-800 to-black',
        'from-gray-900 to-gray-800',
        'from-black to-gray-800',
        'from-gray-800 to-gray-900',
        'from-gray-700 to-black',
        'from-black to-gray-700'
    ];
    // Use collection name to pick a consistent gradient
    const hash = collectionName.split('').reduce((acc, char)=>acc + char.charCodeAt(0), 0);
    const gradient = gradients[hash % gradients.length];
    return {
        name: name,
        icon: icon,
        gradient: gradient,
        description: `Explore our ${name.toLowerCase()} collection`
    };
}
/**
 * Create category ID from collection name (URL-friendly)
 */ function createCategoryId(collectionName) {
    return collectionName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function createCategoryFromCollectionName(collectionName, order = 999) {
    const defaults = getCategoryDefaults(collectionName);
    return {
        id: createCategoryId(collectionName),
        collectionName: collectionName,
        order: order,
        ...defaults
    };
}
}),
"[project]/dev-enterprises/lib/firebase/products.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyCategoryFilter",
    ()=>applyCategoryFilter,
    "getAllCategories",
    ()=>getAllCategories,
    "getAllProducts",
    ()=>getAllProducts,
    "getProductById",
    ()=>getProductById,
    "getProductsByCategory",
    ()=>getProductsByCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/lib/firebase/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$categories$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/lib/firebase/categories-config.ts [app-ssr] (ecmascript)");
;
;
;
/**
 * Check if error is a permission denied error
 */ function isPermissionError(error) {
    return error?.code === 'permission-denied' || error?.code === 7 || error?.message?.toLowerCase().includes('permission') || error?.message?.toLowerCase().includes('missing or insufficient');
}
async function getAllProducts() {
    try {
        console.log('🔄 Fetching ALL products from all category collections...');
        // First, get all categories to know which collections to fetch from
        const categories = await getAllCategories();
        if (categories.length === 0) {
            console.warn('⚠️ No categories found. Cannot fetch products without categories.');
            return [];
        }
        console.log(`📋 Found ${categories.length} categories. Fetching products from each collection...`);
        console.log(`📋 Category to Collection mapping:`, categories.map((cat)=>({
                categoryName: cat.name,
                categoryId: cat.id,
                collectionName: cat.collectionName || cat.name
            })));
        const allProducts = [];
        const collectionNames = categories.map((cat)=>cat.collectionName || cat.name);
        // Log all collections that will be checked
        console.log(`📦 Collections to fetch from:`, collectionNames);
        // Fetch products from each category collection in parallel
        const fetchPromises = collectionNames.map(async (collectionName)=>{
            try {
                console.log(`  📦 Fetching from collection: "${collectionName}"`);
                const productsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], collectionName);
                // Try to fetch with orderBy first
                try {
                    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(productsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
                    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
                    const categoryProducts = [];
                    querySnapshot.forEach((doc)=>{
                        const data = doc.data();
                        // Ensure categoryId is set from the collection name or category ID
                        const category = categories.find((cat)=>(cat.collectionName || cat.name) === collectionName);
                        categoryProducts.push({
                            id: doc.id,
                            categoryId: category?.id || collectionName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                            ...data
                        });
                    });
                    console.log(`  ✅ Fetched ${categoryProducts.length} products from "${collectionName}"`);
                    return categoryProducts;
                } catch (orderByError) {
                    // If orderBy fails, try without it
                    if (orderByError?.code === 'failed-precondition' || isPermissionError(orderByError)) {
                        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(productsRef);
                        const categoryProducts = [];
                        querySnapshot.forEach((doc)=>{
                            const data = doc.data();
                            const category = categories.find((cat)=>(cat.collectionName || cat.name) === collectionName);
                            categoryProducts.push({
                                id: doc.id,
                                categoryId: category?.id || collectionName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                                ...data
                            });
                        });
                        // Sort client-side
                        categoryProducts.sort((a, b)=>{
                            const aDate = a.createdAt?.toMillis?.() || 0;
                            const bDate = b.createdAt?.toMillis?.() || 0;
                            return bDate - aDate;
                        });
                        console.log(`  ✅ Fetched ${categoryProducts.length} products from "${collectionName}" (without ordering)`);
                        return categoryProducts;
                    }
                    throw orderByError;
                }
            } catch (error) {
                if (isPermissionError(error)) {
                    console.warn(`  ⚠️ Permission denied for collection: "${collectionName}"`);
                    console.warn(`     Make sure Firestore security rules allow reading from this collection`);
                    return [];
                }
                console.error(`  ❌ Error fetching from "${collectionName}":`, error);
                console.error(`     Collection might not exist or have a different name`);
                return []; // Return empty array for this collection, continue with others
            }
        });
        // Wait for all collections to be fetched
        const results = await Promise.all(fetchPromises);
        // Track which collections had products and which didn't
        const collectionSummary = [];
        // Flatten all products into a single array
        results.forEach((products, index)=>{
            const collectionName = collectionNames[index];
            collectionSummary.push({
                name: collectionName,
                productCount: products.length
            });
            allProducts.push(...products);
        });
        // Sort all products by createdAt (newest first)
        allProducts.sort((a, b)=>{
            const aDate = a.createdAt?.toMillis?.() || 0;
            const bDate = b.createdAt?.toMillis?.() || 0;
            return bDate - aDate;
        });
        // Log detailed summary
        console.log(`\n📊 Product Fetch Summary:`);
        console.log(`   Total collections checked: ${collectionNames.length}`);
        console.log(`   Total products fetched: ${allProducts.length}`);
        collectionSummary.forEach((summary)=>{
            if (summary.productCount === 0) {
                console.warn(`   ⚠️ "${summary.name}": 0 products (collection might be empty or not exist)`);
            } else {
                console.log(`   ✅ "${summary.name}": ${summary.productCount} products`);
            }
        });
        // Check for collections with zero products
        const emptyCollections = collectionSummary.filter((s)=>s.productCount === 0);
        if (emptyCollections.length > 0) {
            console.warn(`\n⚠️ ${emptyCollections.length} collection(s) had 0 products:`);
            emptyCollections.forEach((col)=>{
                console.warn(`   - "${col.name}"`);
                console.warn(`     Possible reasons:`);
                console.warn(`       1. Collection doesn't exist in Firestore`);
                console.warn(`       2. Collection name in _categories doesn't match exactly`);
                console.warn(`       3. Collection is empty (no product documents)`);
                console.warn(`       4. Permission denied (check Firestore security rules)`);
            });
        }
        console.log(`✅ Successfully fetched ${allProducts.length} total products from ${categories.length} categories`);
        return allProducts;
    } catch (error) {
        console.error('❌ Error fetching all products:', error);
        if (isPermissionError(error)) {
            return [];
        }
        return [];
    }
}
async function getProductsByCategory(categoryId, categoryCollectionName) {
    try {
        if (categoryId === 'all') {
            return await getAllProducts();
        }
        // Use collectionName if provided, otherwise default to 'products' collection with categoryId filter
        const collectionName = categoryCollectionName || 'products';
        const productsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], collectionName);
        console.log(`\n🔍 Fetching products for category:`);
        console.log(`   Category ID: ${categoryId}`);
        console.log(`   Collection Name: "${collectionName}"`);
        console.log(`   Collection Name provided: ${!!categoryCollectionName}`);
        if (!categoryCollectionName) {
            console.warn(`⚠️ No collectionName provided for category ${categoryId}`);
            console.warn(`   This means the category document in _categories is missing the 'collectionName' field`);
            console.warn(`   Using default 'products' collection (which may not exist)`);
        }
        // Try with orderBy first (if rules allow it and we're using a dedicated collection)
        try {
            const q = categoryCollectionName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(productsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc')) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(productsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('categoryId', '==', categoryId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const products = [];
            querySnapshot.forEach((doc)=>{
                products.push({
                    id: doc.id,
                    categoryId: categoryId,
                    ...doc.data()
                });
            });
            console.log(`✅ Fetched ${products.length} products from collection "${collectionName}"`);
            if (products.length === 0) {
                console.warn(`⚠️ No products found in collection "${collectionName}"`);
                console.warn(`   Please verify:`);
                console.warn(`   1. Collection "${collectionName}" exists in Firestore`);
                console.warn(`   2. Collection has product documents`);
                console.warn(`   3. Firestore rules allow reading from this collection`);
                console.warn(`   4. Category's collectionName matches the actual Firestore collection name exactly`);
            }
            return products;
        } catch (orderByError) {
            // If orderBy fails, try without it
            if (orderByError?.code === 'failed-precondition' || isPermissionError(orderByError)) {
                try {
                    const q = categoryCollectionName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(productsRef) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(productsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('categoryId', '==', categoryId));
                    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
                    const products = [];
                    querySnapshot.forEach((doc)=>{
                        products.push({
                            id: doc.id,
                            categoryId: categoryId,
                            ...doc.data()
                        });
                    });
                    // Sort client-side as fallback
                    products.sort((a, b)=>{
                        const aDate = a.createdAt?.toMillis?.() || 0;
                        const bDate = b.createdAt?.toMillis?.() || 0;
                        return bDate - aDate;
                    });
                    console.log(`Fetched ${products.length} products from ${collectionName} (without ordering)`);
                    if (products.length === 0) {
                        console.warn(`⚠️ No products found in collection "${collectionName}"`);
                        console.warn(`   Please verify:`);
                        console.warn(`   1. Collection "${collectionName}" exists in Firestore`);
                        console.warn(`   2. Collection has product documents`);
                        console.warn(`   3. Firestore rules allow reading from this collection`);
                        console.warn(`   4. Category's collectionName matches the actual Firestore collection name exactly`);
                    }
                    return products;
                } catch (fallbackError) {
                    console.error(`Error fetching from ${collectionName}:`, fallbackError);
                    if (isPermissionError(fallbackError)) {
                        return [];
                    }
                    throw fallbackError;
                }
            }
            throw orderByError;
        }
    } catch (error) {
        if (isPermissionError(error)) {
            return [];
        }
        console.error('Error fetching products by category:', error);
        return [];
    }
}
async function getProductById(productId) {
    try {
        const productRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'products', productId);
        const productSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(productRef);
        if (!productSnap.exists()) {
            return null;
        }
        return {
            id: productSnap.id,
            ...productSnap.data()
        };
    } catch (error) {
        if (isPermissionError(error)) {
            // Permission denied - return null gracefully
            return null;
        }
        console.error('Error fetching product by ID:', error);
        return null;
    }
}
/**
 * Fetch categories directly from _categories collection in Firestore
 * This reads category documents with all their metadata (name, icon, gradient, etc.)
 */ async function getCategoriesFromFirestore() {
    // Declare categories outside try block so it's accessible in catch
    const categories = [];
    const skippedDocs = [];
    try {
        console.log('🔍 Fetching categories from _categories collection...');
        const categoriesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], '_categories');
        // Query without orderBy first to avoid index issues - we'll sort client-side
        const categoriesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(categoriesRef);
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(categoriesQuery);
        console.log(`📊 Query returned ${querySnapshot.size} documents from _categories collection`);
        // Process each document - use regular loop for better error handling
        const docs = querySnapshot.docs;
        for(let i = 0; i < docs.length; i++){
            const doc = docs[i];
            try {
                const data = doc.data();
                console.log(`📄 Processing document ${doc.id} (${i + 1}/${docs.length}):`, {
                    fields: Object.keys(data),
                    hasName: !!data.name,
                    hasCategoryName: !!data.categoryName,
                    hasCollectionName: !!data.collectionName
                });
                // Create category from document data
                // Support various field name formats - be flexible
                let categoryName = data.name || data.categoryName || data.title || data.collectionName || doc.id;
                // Convert to string and trim
                if (typeof categoryName !== 'string') {
                    categoryName = String(categoryName || doc.id);
                }
                categoryName = categoryName.trim();
                // Final fallback to document ID if name is empty
                const finalCategoryName = categoryName || doc.id;
                // Collection name can be separate or same as category name
                // IMPORTANT: This must match the exact Firestore collection name
                const hasExplicitCollectionName = !!(data.collectionName || data.collection);
                const finalCollectionName = data.collectionName || data.collection || finalCategoryName;
                // Log collection name mapping for debugging
                console.log(`   Category: "${finalCategoryName}" → Collection: "${finalCollectionName}"`);
                if (!hasExplicitCollectionName) {
                    console.warn(`   ⚠️ No collectionName field found - using category name "${finalCategoryName}" as collection name`);
                    console.warn(`   ⚠️ Make sure your Firestore collection is named exactly "${finalCategoryName}" (case-sensitive)`);
                    console.warn(`   ⚠️ OR add a "collectionName" field to this document with the exact collection name`);
                }
                // Only skip if we truly have no name at all
                if (!finalCategoryName || finalCategoryName.trim() === '') {
                    console.warn(`⚠️ Skipping document ${doc.id} - no valid name found. Available fields:`, Object.keys(data));
                    skippedDocs.push(doc.id);
                    continue;
                }
                // Create category ID from name (URL-friendly)
                const categoryId = data.id || finalCategoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                // Get gradient with error handling
                let gradient = 'from-gray-900 to-black'; // Default gradient
                if (data.gradient) {
                    gradient = data.gradient;
                } else {
                    try {
                        gradient = getCategoryDefaults(finalCategoryName).gradient;
                    } catch (gradientError) {
                        console.warn(`Could not get gradient for ${finalCategoryName}, using default`);
                    }
                }
                // Create category object - use data from document or smart defaults
                const category = {
                    id: categoryId,
                    name: finalCategoryName,
                    collectionName: finalCollectionName,
                    icon: data.icon || '📦',
                    gradient: gradient,
                    description: data.description || `Explore our ${finalCategoryName.toLowerCase()} collection`,
                    order: typeof data.order === 'number' ? data.order : 999
                };
                categories.push(category);
                console.log(`✅ Added category: ${finalCategoryName} (id: ${categoryId}, collection: ${finalCollectionName})`);
            } catch (docError) {
                const errorMsg = docError?.message || String(docError) || 'Unknown error';
                console.error(`❌ Error processing document ${doc.id} (${i + 1}/${docs.length}):`, errorMsg);
                console.error(`   Error details:`, {
                    message: docError?.message,
                    code: docError?.code,
                    name: docError?.name
                });
                skippedDocs.push(doc.id);
            // Continue processing other documents
            }
        }
        // Log summary
        try {
            console.log(`\n📋 Category processing summary:`);
            console.log(`   Total documents: ${querySnapshot.size}`);
            console.log(`   Categories created: ${categories.length}`);
            if (skippedDocs.length > 0) {
                console.warn(`   Documents skipped: ${skippedDocs.length}`, skippedDocs);
            }
        } catch (logError) {
            console.warn('Error logging summary, but continuing...', logError);
        }
        // Sort by order (client-side) - wrap in try-catch to ensure we return categories even if sorting fails
        try {
            if (categories.length > 0) {
                categories.sort((a, b)=>(a.order || 999) - (b.order || 999));
            }
        } catch (sortError) {
            console.warn('Error sorting categories, but returning unsorted categories', sortError);
        }
        // Return categories even if there were errors - as long as we have at least one
        if (categories.length > 0) {
            console.log(`\n✅ Successfully loaded ${categories.length} categories:`, categories.map((c)=>`${c.name} (id: ${c.id})`));
            return categories;
        }
        console.warn('⚠️ No categories were created from _categories collection');
        return [];
    } catch (error) {
        // Log error details in a readable format
        const errorMessage = error?.message || String(error) || 'Unknown error';
        const errorCode = error?.code || 'NO_CODE';
        const errorName = error?.name || 'Error';
        console.error('❌ Error fetching from _categories collection:');
        console.error(`   Error: ${errorName}`);
        console.error(`   Message: ${errorMessage}`);
        console.error(`   Code: ${errorCode}`);
        if (error?.stack) {
            console.error(`   Stack:`, error.stack);
        }
        if (isPermissionError(error)) {
            console.error('⚠️ Permission denied accessing _categories collection');
        } else {
            console.error('⚠️ Failed to access _categories collection');
        }
        // Return any categories that were successfully processed before the error
        if (categories.length > 0) {
            console.log(`⚠️ Returning ${categories.length} categories that were successfully processed before error:`, categories.map((c)=>c.name));
            // Try to sort them before returning
            try {
                categories.sort((a, b)=>(a.order || 999) - (b.order || 999));
            } catch (sortError) {
                console.warn('Could not sort categories, returning unsorted');
            }
            return categories;
        }
        return [];
    }
}
/**
 * Get smart defaults for category (for fallback)
 */ function getCategoryDefaults(collectionName) {
    const gradients = [
        'from-gray-900 to-black',
        'from-black to-gray-900',
        'from-gray-800 to-black',
        'from-gray-900 to-gray-800',
        'from-black to-gray-800',
        'from-gray-800 to-gray-900',
        'from-gray-700 to-black',
        'from-black to-gray-700'
    ];
    const hash = collectionName.split('').reduce((acc, char)=>acc + char.charCodeAt(0), 0);
    const gradient = gradients[hash % gradients.length];
    return {
        gradient
    };
}
async function getAllCategories() {
    try {
        console.log(`🔍 Starting automatic category detection...`);
        // Method 1: Try to get categories directly from _categories collection (automatic from database)
        console.log(`📋 Attempting to fetch categories from _categories collection...`);
        const firestoreCategories = await getCategoriesFromFirestore();
        console.log(`📊 Result: Found ${firestoreCategories.length} categories from Firestore`);
        if (firestoreCategories.length > 0) {
            console.log(`✅ Using ${firestoreCategories.length} categories from _categories collection in Firestore`);
            console.log(`   Category names:`, firestoreCategories.map((c)=>c.name).join(', '));
            console.log(`   Category details:`, firestoreCategories.map((c)=>({
                    id: c.id,
                    name: c.name,
                    collectionName: c.collectionName
                })));
            return firestoreCategories;
        }
        console.warn(`⚠️ No categories found in _categories collection, checking if collection exists...`);
        // Method 2: Fallback to config file approach (for backward compatibility)
        console.log(`📝 _categories collection not found, using fallback method (checking collections from config)`);
        const collectionNamesToCheckList = __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$categories$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectionNamesToCheck"];
        if (collectionNamesToCheckList.length === 0) {
            console.warn('⚠️ No categories found. Please either:');
            console.warn('   1. Create a "_categories" collection in Firestore with category documents');
            console.warn('   2. Or add collection names to lib/firebase/categories-config.ts');
            return [];
        }
        console.log(`Checking ${collectionNamesToCheckList.length} collections...`);
        const detectedCategories = [];
        // Check each collection name to see if it exists and has documents
        for(let i = 0; i < collectionNamesToCheckList.length; i++){
            const collectionName = collectionNamesToCheckList[i];
            try {
                // Try to read from the collection (limit to 1 document for efficiency)
                const collectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], collectionName);
                const testQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(collectionRef);
                const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(testQuery);
                // If collection exists and has at least one document, create a category
                if (querySnapshot.size > 0) {
                    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$categories$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCategoryFromCollectionName"])(collectionName, i + 1);
                    detectedCategories.push(category);
                    console.log(`✓ Detected collection: ${collectionName} (${querySnapshot.size} documents)`);
                } else {
                    console.log(`○ Collection "${collectionName}" exists but is empty`);
                }
            } catch (error) {
                if (isPermissionError(error)) {
                    console.warn(`⚠ Permission denied for collection: ${collectionName}`);
                    // Still create category - might work when fetching products
                    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$categories$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCategoryFromCollectionName"])(collectionName, i + 1);
                    detectedCategories.push(category);
                } else {
                    // Collection doesn't exist or other error - skip it
                    console.log(`✗ Collection "${collectionName}" not found or inaccessible`);
                }
            }
        }
        console.log(`\n✅ Auto-detection complete:`);
        console.log(`   Categories detected: ${detectedCategories.length}`);
        if (detectedCategories.length > 0) {
            console.log(`   Category names:`, detectedCategories.map((c)=>`${c.name} (collection: ${c.collectionName || 'none'})`).join(', '));
        } else {
            console.warn(`   No categories were detected. Please check:`);
            console.warn(`   1. Create "_categories" collection in Firestore with category documents`);
            console.warn(`   2. Or collection names in lib/firebase/categories-config.ts`);
            console.warn(`   3. Firestore security rules allow reading from those collections`);
        }
        return detectedCategories;
    } catch (error) {
        console.error('Error auto-detecting categories:', error);
        return [];
    }
}
function applyCategoryFilter(allProducts, selectedCategory, categories) {
    // FIX: "All Products not showing all items" - If "all" is selected, return all products
    if (selectedCategory === 'all') {
        console.log(`🔍 Showing all ${allProducts.length} products`);
        return allProducts;
    }
    // Find the selected category to get its collectionName and id
    const selectedCategoryData = categories.find((cat)=>cat.id === selectedCategory);
    if (!selectedCategoryData) {
        console.warn(`⚠️ Category "${selectedCategory}" not found in categories list`);
        return [];
    }
    // FIX: "Category shows no products" - Improved matching logic
    // Filter products that match the selected category
    const filtered = allProducts.filter((product)=>{
        // Standardize category field name - check multiple possible field names
        const productCategoryId = product.categoryId || product.category || product.Category || product.catagory; // Handle typo
        // Match by category ID (primary match)
        if (productCategoryId === selectedCategory) {
            return true;
        }
        // Also check if product's categoryId matches the category's id
        // This handles cases where categoryId was set during getAllProducts()
        if (productCategoryId && selectedCategoryData.id === productCategoryId) {
            return true;
        }
        // Match by collection name (fallback for products without categoryId)
        const productCollectionName = product.collectionName;
        const categoryCollectionName = selectedCategoryData.collectionName || selectedCategoryData.name;
        if (productCollectionName === categoryCollectionName) {
            return true;
        }
        return false;
    });
    console.log(`🔍 Filtered ${filtered.length} products for category "${selectedCategoryData.name}" (id: ${selectedCategory})`);
    if (filtered.length === 0 && allProducts.length > 0) {
        console.warn(`⚠️ No products matched category "${selectedCategoryData.name}". Checking product category fields...`);
        // Debug: Show sample product category fields
        const sampleProducts = allProducts.slice(0, 3);
        sampleProducts.forEach((p)=>{
            console.log(`   Sample product: ${p.name}, categoryId: ${p.categoryId}, category: ${p.category}`);
        });
    }
    return filtered;
}
}),
"[project]/dev-enterprises/app/products/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Products
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/components/ProductCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev-enterprises/lib/firebase/products.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Products() {
    // FIX: State management - separate allProducts and filteredProducts
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [allProducts, setAllProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Complete list from Firebase
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [categoriesLoading, setCategoriesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // FIX: Client-side filtering - compute filteredProducts from allProducts based on selectedCategory
    // This ensures "All Products" shows all items and categories filter correctly
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (categories.length === 0 || allProducts.length === 0) {
            return [];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyCategoryFilter"])(allProducts, selectedCategory, categories);
    }, [
        allProducts,
        selectedCategory,
        categories
    ]);
    // Handle URL hash to filter by category when page loads or hash changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleHashChange = ()=>{
            const hash = window.location.hash.slice(1); // Remove the '#' symbol
            if (hash) {
                // Check if the hash matches any category ID or 'all'
                if (hash === 'all' || categories.some((cat)=>cat.id === hash)) {
                    setSelectedCategory(hash);
                    // Scroll to top of product list
                    setTimeout(()=>{
                        const productList = document.getElementById('product-list');
                        if (productList) {
                            productList.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }, 100);
                }
            }
        };
        // Check hash on initial load
        handleHashChange();
        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        return ()=>{
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [
        categories
    ]);
    // Fetch categories on mount from database
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchCategories = async ()=>{
            setCategoriesLoading(true);
            try {
                const fetchedCategories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllCategories"])();
                console.log('📋 Categories auto-detected:', fetchedCategories.length, fetchedCategories);
                setCategories(fetchedCategories);
                if (fetchedCategories.length === 0) {
                    console.warn('⚠️ No categories found. Please add your collection names to lib/firebase/categories-config.ts');
                }
            } catch (err) {
                console.error('❌ Error fetching categories from database:', {
                    error: err,
                    message: err?.message,
                    code: err?.code
                });
                setCategories([]);
            } finally{
                setCategoriesLoading(false);
            }
        };
        fetchCategories();
    }, []);
    // FIX: Fetch ALL products once on mount (after categories are loaded)
    // This is the single source of truth for products
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Wait for categories to be loaded first (needed for getAllProducts to know which collections to fetch)
        if (categoriesLoading || categories.length === 0) {
            return;
        }
        const fetchAllProducts = async ()=>{
            setLoading(true);
            setError(null);
            try {
                console.log('\n🔄 Fetching ALL products from all category collections...');
                // FIX: "All Products not showing all items" - Fetch all products from all category collections
                const fetchedProducts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$lib$2f$firebase$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllProducts"])();
                console.log('✅ All products fetched:', {
                    totalCount: fetchedProducts.length,
                    productsByCategory: categories.map((cat)=>{
                        const count = fetchedProducts.filter((p)=>{
                            const productCategoryId = p.categoryId || p.category || p.Category;
                            return productCategoryId === cat.id || p.collectionName === cat.collectionName;
                        }).length;
                        return {
                            category: cat.name,
                            count
                        };
                    })
                });
                setAllProducts(fetchedProducts);
                if (fetchedProducts.length === 0) {
                    console.warn('⚠️ No products found. This could be due to:');
                    console.warn('1. Firestore security rules blocking read access to collections');
                    console.warn('2. Collections are empty or do not exist');
                    console.warn('3. Permission denied errors (check browser console for details)');
                    setError('No products found. Please check your Firebase configuration.');
                }
            } catch (err) {
                console.error('❌ Error fetching all products:', {
                    error: err,
                    message: err?.message,
                    code: err?.code
                });
                const errorMessage = err?.message?.includes('Access denied') ? 'Access denied. Please check Firestore security rules configuration.' : 'Failed to load products. Please check your Firebase configuration.';
                setError(errorMessage);
            } finally{
                setLoading(false);
            }
        };
        fetchAllProducts();
    }, [
        categories,
        categoriesLoading
    ]); // Re-fetch if categories change
    const selectedCategoryData = categories.find((cat)=>cat.id === selectedCategory);
    const handleCategoryChange = (categoryId)=>{
        setSelectedCategory(categoryId);
        // Update URL hash without scrolling
        window.history.replaceState(null, '', `#${categoryId}`);
    };
    const handleKeyDown = (e, categoryId)=>{
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCategoryChange(categoryId);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#f9fafb] text-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/dev-enterprises/app/products/page.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8 md:mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                                children: "Our Products"
                            }, void 0, false, {
                                fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl text-gray-600 max-w-3xl mx-auto",
                                children: "Explore our comprehensive range of electronic components and equipment"
                            }, void 0, false, {
                                fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev-enterprises/app/products/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-8 md:mb-12",
                        "aria-label": "Product categories",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg p-4 md:p-6 border border-gray-200 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold text-gray-900 mb-4 md:mb-6",
                                    children: "Filter by Category"
                                }, void 0, false, {
                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                categoriesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3 md:gap-4",
                                    children: [
                                        1,
                                        2,
                                        3,
                                        4,
                                        5
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-12 w-32 bg-gray-200 rounded-lg animate-pulse",
                                            "aria-hidden": "true"
                                        }, i, false, {
                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this) : categories.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3 md:gap-4",
                                    role: "tablist",
                                    "aria-label": "Product category filters",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleCategoryChange('all'),
                                            onKeyDown: (e)=>handleKeyDown(e, 'all'),
                                            role: "tab",
                                            "aria-selected": selectedCategory === 'all',
                                            "aria-controls": "product-list",
                                            tabIndex: selectedCategory === 'all' ? 0 : -1,
                                            className: `
                    flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base
                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
                    ${selectedCategory === 'all' ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-md scale-105' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-sm border border-gray-200'}
                  `,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg md:text-xl",
                                                    "aria-hidden": "true",
                                                    children: "📦"
                                                }, void 0, false, {
                                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "All Products"
                                                }, void 0, false, {
                                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this),
                                        categories.map((category)=>{
                                            const isSelected = selectedCategory === category.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleCategoryChange(category.id),
                                                onKeyDown: (e)=>handleKeyDown(e, category.id),
                                                role: "tab",
                                                "aria-selected": isSelected,
                                                "aria-controls": "product-list",
                                                tabIndex: isSelected ? 0 : -1,
                                                className: `
                        flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base
                        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
                        ${isSelected ? `bg-gradient-to-r ${category.gradient} text-white shadow-md scale-105` : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-sm border border-gray-200'}
                      `,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg md:text-xl",
                                                        "aria-hidden": "true",
                                                        children: category.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: category.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, category.id, true, {
                                                fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 font-medium",
                                            children: "No categories detected."
                                        }, void 0, false, {
                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 text-left max-w-2xl mx-auto bg-gray-50 p-4 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 text-sm mb-2 font-semibold",
                                                    children: "Auto-Detection Setup:"
                                                }, void 0, false, {
                                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                    className: "text-gray-600 text-sm space-y-2 list-decimal list-inside",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "Open ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "bg-gray-200 px-1 rounded",
                                                                    children: "lib/firebase/categories-config.ts"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 30
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "Add your Firestore collection names to the ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "bg-gray-200 px-1 rounded",
                                                                    children: "collectionNamesToCheck"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 68
                                                                }, this),
                                                                " array"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "Just add the collection names (e.g., ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "bg-gray-200 px-1 rounded",
                                                                    children: "'Electronics'"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 62
                                                                }, this),
                                                                ", ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "bg-gray-200 px-1 rounded",
                                                                    children: "'Sweets'"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 127
                                                                }, this),
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "The app will automatically:",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "ml-6 mt-1 space-y-1 list-disc",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Detect which collections exist"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                                            lineNumber: 258,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Create categories automatically"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                                            lineNumber: 259,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Assign icons and colors automatically"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                                            lineNumber: 260,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Save the file and refresh this page"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-xs mt-3 italic",
                                                    children: "Check browser console (F12) to see which collections were detected"
                                                }, void 0, false, {
                                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dev-enterprises/app/products/page.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "product-list",
                        role: "tabpanel",
                        "aria-labelledby": `category-${selectedCategory}`,
                        children: [
                            selectedCategoryData && selectedCategory !== 'all' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 md:mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-12 h-12 rounded-lg bg-gradient-to-br ${selectedCategoryData.gradient} flex items-center justify-center text-2xl shadow-md`,
                                            children: selectedCategoryData.icon
                                        }, void 0, false, {
                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl md:text-3xl font-bold text-gray-900",
                                                    children: selectedCategoryData.name
                                                }, void 0, false, {
                                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm md:text-base",
                                                    children: loading ? 'Loading...' : `${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'} found`
                                                }, void 0, false, {
                                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg p-8 md:p-12 border border-gray-200 shadow-sm text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-lg md:text-xl",
                                    children: "Loading products..."
                                }, void 0, false, {
                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg p-8 md:p-12 border border-gray-200 shadow-sm text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 text-lg md:text-xl",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mt-2",
                                        children: "Please check your Firebase configuration."
                                    }, void 0, false, {
                                        fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                        lineNumber: 303,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this) : filteredProducts.length > 0 ? // FIX: "Category shows no products" - Display filteredProducts instead of products
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
                                children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        id: product.id,
                                        name: product.name,
                                        description: product.description,
                                        imageUrl: product.imageUrl
                                    }, product.id, false, {
                                        fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg p-8 md:p-12 border border-gray-200 shadow-sm text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-lg md:text-xl",
                                    children: selectedCategory === 'all' ? 'No products found. Please check your Firebase configuration.' : `No products found in "${selectedCategoryData?.name || selectedCategory}" category.`
                                }, void 0, false, {
                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev-enterprises/app/products/page.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-16 md:mt-24 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-gray-900 to-black rounded-lg p-8 md:p-12 shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-white mb-4",
                                    children: "Need Custom Solutions?"
                                }, void 0, false, {
                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed",
                                    children: "Contact us for bulk orders, custom specifications, or technical consultation"
                                }, void 0, false, {
                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/contact",
                                    className: "inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent",
                                    children: "Get in Touch"
                                }, void 0, false, {
                                    fileName: "[project]/dev-enterprises/app/products/page.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev-enterprises/app/products/page.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dev-enterprises/app/products/page.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dev-enterprises/app/products/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2d$enterprises$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/dev-enterprises/app/products/page.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dev-enterprises/app/products/page.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b80a2d7e._.js.map