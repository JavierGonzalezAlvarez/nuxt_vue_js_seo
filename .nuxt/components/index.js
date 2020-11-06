export { default as Contactar } from '../../components/Contactar.vue'
export { default as FooterNav } from '../../components/FooterNav.vue'
export { default as MainNav } from '../../components/MainNav.vue'
export { default as Trabajar } from '../../components/Trabajar.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyContactar = import('../../components/Contactar.vue' /* webpackChunkName: "components/Contactar" */).then(c => c.default || c)
export const LazyFooterNav = import('../../components/FooterNav.vue' /* webpackChunkName: "components/FooterNav" */).then(c => c.default || c)
export const LazyMainNav = import('../../components/MainNav.vue' /* webpackChunkName: "components/MainNav" */).then(c => c.default || c)
export const LazyTrabajar = import('../../components/Trabajar.vue' /* webpackChunkName: "components/Trabajar" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/VuetifyLogo" */).then(c => c.default || c)
