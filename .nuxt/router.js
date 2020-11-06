import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c350ba0 = () => interopDefault(import('../pages/contactar.vue' /* webpackChunkName: "pages/contactar" */))
const _b56707b0 = () => interopDefault(import('../pages/empresa.vue' /* webpackChunkName: "pages/empresa" */))
const _1dbe649e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contactar",
    component: _2c350ba0,
    name: "contactar"
  }, {
    path: "/empresa",
    component: _b56707b0,
    name: "empresa"
  }, {
    path: "/",
    component: _1dbe649e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
