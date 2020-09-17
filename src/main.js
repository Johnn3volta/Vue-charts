import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import Stock from 'highcharts/modules/stock';
import Vue from 'vue';
import App from './App.vue';

Stock(Highcharts);
Vue.use(HighchartsVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
