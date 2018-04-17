import Vue from 'vue'
import Router from 'vue-router'
import Settings from '@/components/Settings'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Settings',
            component: Settings
        },
        {
            path: '/game/',
            name: 'Game',
            component: Game
        }
    ]
})
