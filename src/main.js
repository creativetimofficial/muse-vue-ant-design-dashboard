/*
=========================================================
Muse - Vue Ant Design Dashboard - v1.0.0
=========================================================

Product Page: https://www.creative-tim.com/product/vue-ant-design-dashboard
Copyright 2021 Creative Tim (https://www.creative-tim.com)
Coded by Creative Tim

=========================================================
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 
*/

import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import DashboardRTLLayout from './layouts/DashboardRTL.vue'
import router from './router'
// import './plugins/click-away'

import './scss/app.scss';
const app = createApp(App)
app.use(Antd).use(router);
app.config.productionTip = false

// Adding template layouts to the vue components.
app.component("layout-default", DefaultLayout);
app.component("layout-dashboard", DashboardLayout);
app.component("layout-dashboard-rtl", DashboardRTLLayout);

app.mount('#app')
