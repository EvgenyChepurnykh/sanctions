// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Orders from './components/Orders'
import Commands from'./components/Orders'
import '@progress/kendo-ui'
import '@progress/kendo-theme-material/dist/all.css'
import {
  Button,
  ButtonsInstaller
} from '@progress/kendo-buttons-vue-wrapper'

import {
  DataSource,
  DataSourceInstaller
} from '@progress/kendo-datasource-vue-wrapper'

import {
  Grid,
  GridColumn,
  GridInstaller
} from '@progress/kendo-grid-vue-wrapper'

Vue.config.productionTip = false
Vue.use(GridInstaller)
Vue.use(ButtonsInstaller)
Vue.use(DataSourceInstaller)

/* eslint-disable no-new */
/*
schemaModelFields: {
      OrderID: { type: 'number', editable: false},
      Customer: {type:'string', editable:false},
      Product: { type: 'string'},
      Quantity: { type: 'number', validation: {min: 0, required : true} },
      Status: { type: 'string' }
     },
*/
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, Commands, Orders, Grid, GridColumn, DataSource, Button }
})
