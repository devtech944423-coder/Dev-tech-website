module.exports = [
"[project]/dev-enterprises/lib/firebase/categories-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categoryConfig",
    ()=>categoryConfig,
    "getCategoriesFromConfig",
    ()=>getCategoriesFromConfig
]);
const categoryConfig = [
    {
        id: 'electronics',
        name: 'Electronics',
        icon: '🔌',
        gradient: 'from-blue-500 to-teal-500',
        collectionName: 'Electronics',
        order: 1,
        description: 'Electronic components and devices'
    },
    {
        id: 'sweets',
        name: 'Sweets',
        icon: '🍬',
        gradient: 'from-pink-500 to-purple-500',
        collectionName: 'Sweets',
        order: 2,
        description: 'Delicious sweets and confectionery'
    }
];
function getCategoriesFromConfig() {
    return categoryConfig.sort((a, b)=>(a.order || 999) - (b.order || 999));
}
}),
];

//# sourceMappingURL=dev-enterprises_lib_firebase_categories-config_ts_c7058a84._.js.map