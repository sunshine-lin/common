import axios from 'axios'
import Vue from 'vue'

/*
*   设置axios的baseURL 全局通用 Vue添加全局方法axios
* */

axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Vue.prototype.axios = axios
//
// // 添加一个请求拦截器
// axios.interceptors.request.use(function(config){
//   // 在请求发出之前进行一些操作
//   console.log('---请求---',config)
//   return config;
// },function(err){
//   //Do something with request error
//   return Promise.reject(error);
// })
//
// // 添加一个响应拦截器
// axios.interceptors.response.use(function(res){
//   // 在这里对返回的数据进行处理
//   console.log('---响应---',res)
//   return res;
// },function(err){
//   //Do something with response error
//   return Promise.reject(err);
// })
