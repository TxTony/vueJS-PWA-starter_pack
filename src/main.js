// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'vuetify/dist/vuetify.css'
import App from './App'
import router from './router'
import services from './services.js'
import plugins from './plugins.js'

Vue.config.productionTip = false

/* eslint-disable no-undef */
var Root = services.addServices(Vue)
Root = plugins.addPlugins(Root)
var store = plugins.getVuexInstance()
const i18n = plugins.getI18nInstance()
/* eslint-disable no-new */
new Root({
    el: '#app',
    store,
    router,
    i18n,
    render: h => h(App),
    template: '<App/>',
    components: { App }
})
