import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/vuelosdisponibles'
    },
    {
        path: '/',
        component:{
            render(c) {
                return c('router-view');
            }
        },
        children: [
            {
                path: '/iniciolandpage',
                name: 'iniciolandpage',
                component: () => import('../components/iniciolandpage.vue')
            },
            {
                path: '/vuelosdisponibles',
                name: 'vuelosdisponibles',
                component: () => import('../components/VuelosDisponibles.vue')
            },
            {
                path: '/lineasdevuelo',
                name: 'lineasdevuelo',
                component: () => import('../components/LineasVuelo.vue')
            },
            {
                path: '/reservasvuelo',
                name: 'reservasvuelo',
                component: () => import('../components/ReservasVuelos.vue')
            },
            {
                path: '/asientosreservados',
                name: 'asientosreservados',
                component: () => import('../components/AsientosReservados.vue')
            },
            {
                path: '/vueloscancelados',
                name: 'vueloscancelados',
                component: () => import('../components/VuelosCancelados.vue')
            },
            {
                path: '/proximosvuelos',
                name: 'proximosvuelos',
                component: () => import('../components/ProximosVuelos.vue')
            },
        ]
    }
]

const router = new VueRouter({routes, })
export default router;