import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/inicio'
    },
    {
        path: '*',
        component: ()=> import('../views/ErrorPages/Error404.vue')
    },
    {
        path: '/formulario',
        component: ()=> import('../components/Formulario.vue')
    },
    {
        path: '/inicio',
        component: ()=> import('../components/Inicio.vue'),
        //los componentes se renderizaran en router-vue
        children: [
            {
                path: '/main',
                name: 'main',
                component: () => import('../components/Main.vue')
            },
            {
                path: '/tercero',
                name: 'tercero',
                component: () => import('../components/Tercero.vue')
            },
            {
                path: '/iniciolandpage',
                name: 'iniciolandage',
                component: () => import('../components/InicioLandpage.vue')
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
    },
]

const router = new VueRouter({routes, })
export default router;

// {
//     path:'*',
//     component: ()=> import('../views/ErrorPages/Error404.vue')
// },
// {
//     path: '/inicio',
//     component: ()=> import('../components/Inicio.vue'),
//     //los componentes se renderizaran en router-vue
//     children: [
//         {
//             path: '/main',
//             name: 'main',
//             component: () =>('../components/Main.vue')
//         },
        // {
        //     path: '/tercero',
        //     name: 'tercero',
        //     component: () =>('../components/Tercero.vue')
        // },
        // {
        //     path: '/iniciolandpage',
        //     name: 'iniciolandage',
        //     component: () => import('../components/InicioLandpage.vue')
        // },
        // {
        //     path: '/vuelosdisponibles',
        //     name: 'vuelosdisponibles',
        //     component: () => import('../components/VuelosDisponibles.vue')
        // },
        // {
        //     path: '/lineasdevuelo',
        //     name: 'lineasdevuelo',
        //     component: () => import('../components/LineasVuelo.vue')
        // },
        // {
        //     path: '/reservasvuelo',
        //     name: 'reservasvuelo',
        //     component: () => import('../components/ReservasVuelos.vue')
        // },
        // {
        //     path: '/asientosreservados',
        //     name: 'asientosreservados',
        //     component: () => import('../components/AsientosReservados.vue')
        // },
        // {
        //     path: '/vueloscancelados',
        //     name: 'vueloscancelados',
        //     component: () => import('../components/VuelosCancelados.vue')
        // },
        // {
        //     path: '/proximosvuelos',
        //     name: 'proximosvuelos',
        //     component: () => import('../components/ProximosVuelos.vue')
        // },
//     ]
// }