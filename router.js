import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import addData from '~/pages/addData';

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/addData', 
        component: addData,
      }
    ]
  })
}
