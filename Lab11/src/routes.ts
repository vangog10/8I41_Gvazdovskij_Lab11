import { createRouter, createWebHistory } from "vue-router";
import AuthView from "./views/AuthView.vue";
import MainView from "./views/MainView.vue";
import Contact from "./views/Contact.vue";
import About from "./views/About.vue";


export const router = createRouter({
    routes: [
        {
            path: "/",
            component: AuthView
        },
        {
            path: "/main",
            component: MainView,
            children: [
                {
                    path: "contact",
                    component: Contact
                },
                {
                    path: "about",
                    component: About
                }
            ]
        }
    ],
    history: createWebHistory()
})