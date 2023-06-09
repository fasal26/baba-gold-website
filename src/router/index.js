/**
 * @name Router Base File
 * @author Fasal
 * @description Base config file for Vue Router 4
 */
import {
    createRouter as _createRouter,
    createWebHistory
} from 'vue-router'

const HomePage = () => import("../components/HomePage.vue")
const About = () => import("../components/About.vue")
const Story = () => import("../components/Story.vue")
const Services = () => import("../components/Services.vue")
export function createRouter() {
    const router =  _createRouter({
        history: createWebHistory(),
        base: '/baba-gold-website/',
        routes: [
            { path: "/", name: 'HomePage', component: HomePage },
            { path: "/about", name: 'About', component: About },
            { path: "/our-story", name: 'OurStory', component: Story },
            { path: "/services", name: 'Services', component: Services },
            // { path: '/:pathMatch(.*)*', redirect: "/" },
        ],
        scrollBehavior() {
            let element = document.getElementById('app')
            element.scrollIntoView({
                behavior: 'smooth'
            })
        }
    })
    return router;
}
