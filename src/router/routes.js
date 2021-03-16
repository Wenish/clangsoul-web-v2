const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../layouts/LayoutBasic.vue'),
        children: [
            { path: '', component: () => import('../views/Home.vue') }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../layouts/LayoutBasic.vue'),
        children: [
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            { path: '', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') }
        ]
    }
]

export default routes