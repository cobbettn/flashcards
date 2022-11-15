import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/user/Login.vue'
import Register from './components/user/Register.vue'
import Activate from './components/user/Activate.vue'
import Cards from './components/cards/Cards.vue'
import CardViewer from './components/cards/CardViewer.vue'
import CardsEditor from './components/cards/CardEditor'


const routes = [
    { path: '/work/flashcards', component: Home },
    { path: '/work/flashcards/login', component: Login },
    { path: '/work/flashcards/register', component: Register },
    { path: '/work/flashcards/activate/:id', component: Activate },
    { path: '/work/flashcards/cards', component: Cards },
    { path: '/work/flashcards/cards/create', component: CardsEditor },
    { path: '/work/flashcards/cards/:id', component: CardViewer },
    { path: '/work/flashcards/cards/:id/edit', component: CardsEditor },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
Vue.use(VueRouter)


export default router