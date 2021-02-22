import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false
Vue.config.silent = true
Vue.config.devtools = true

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')