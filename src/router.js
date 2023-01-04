import Vue from 'vue';
import Router from 'vue-router'
import MHome from './views/MHome.vue'
import MProfile from './views/MProfile.vue'
import MAchievement from './views/MAchievement.vue'
import MHeaderHome from './views/MHeaderHome.vue'
import MHeaderProfile from './views/MHeaderProfile.vue'
import MHeaderAchievement from './views/MHeaderAchievement.vue'
import MFooterHome from './views/MFooterHome.vue'
import MFooterProfile from './views/MFooterProfile.vue'
import MFooterAchievement from './views/MFooterAchievement.vue'

Vue.use(Router);

export default new Router ({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      default: MHome,
      header: MHeaderHome,
      footer: MFooterHome
    }
  },{
    path: '/profile',
    components: {
      default: MProfile,
      header: MHeaderProfile,
      footer: MFooterProfile
    }
  },{
    path: '/achievement',
    components: {
      default: MAchievement,
      header: MHeaderAchievement,
      footer: MFooterAchievement
    }
  }]
})