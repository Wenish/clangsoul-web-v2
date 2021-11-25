const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../layouts/LayoutBasic.vue'),
        children: [
            { path: '', component: () => import('../views/PageHome.vue') }
        ]
    },
    {
        path: '/sample-packs',
        name: 'SamplePacks',
        component: () => import('../layouts/LayoutBasic.vue'),
        children: [
            { path: '', component: () => import('../views/PageSamplePacks.vue') }
        ]
    },
    {
        path: '/impressum',
        name: 'Impressum',
        component: () => import('../layouts/LayoutBasic.vue'),
        children: [
            { path: '', component: () => import('../views/PageImpressum.vue') }
        ]
    },

]

export default routes