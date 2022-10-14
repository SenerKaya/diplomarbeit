import {createRouter, createWebHistory} from "vue-router";

import FertigePcs from "@/pages/FertigePcs.vue";
import PcSelberKonfigurieren from "@/pages/PcSelberKonfigurieren.vue";
import UebersichtCpuKompabilitaet from "@/pages/UebersichtCpuKompabilitaet.vue";
import PcKonfigurator from "@/pages/PcKonfigurator";
import login from "@/pages/login";


const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: PcKonfigurator,
            name:'Startseite'
        },
        {
            path: "/FertigePcs",
            component: FertigePcs,
            name: "fertig"
        },
        {
            path: "/PcSelberKonfigurieren",
            component: PcSelberKonfigurieren,
            name:'PcSelberKonfigurieren'
        },
        {
            path: "/UebersichtCpuKompabilitaet",
            component: UebersichtCpuKompabilitaet,
        },
        {
            path: "/Login",
            component: login,
            name:'loginForm'
        },
    ]
});

export default router;