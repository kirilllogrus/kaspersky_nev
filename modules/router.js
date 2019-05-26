import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const addData = import('~/pages/addData').then(m => m || m.default);
const Logs = import('~/pages/Logs').then(m => m || m.default );
const Data = import('~/pages/Data').then(m || m.default);
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/#/addData',
        name: 'addData',
        component: addData,
      },
      {
        path: '/#/addData',
        name: 'addData',
        component: addData,
      },
      {
        path: '/#/Logs',
        name: 'Logs',
        component: Logs,
      },
      {
        path: '/#/Data',
        name: 'Data',
        component: Data,
      }
    ]
  })
}
