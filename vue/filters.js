/**
 * vue 过滤器
 */

import Vue from 'vue'

/**
 * 数字小于10 自动补0
 */
Vue.filter("tens", val => {
  if (val < 10)
    return '0' + val
  else
    return val
});

/**
 * 	保留小数位数 + 金钱符号
 * 		params
 * 			num 	保留小数位数 默认2
 * 			sign	金币的符号 ￥ $... 		
 */
Vue.filter("currency", (val, num, sign) => {
  let pre = sign ? sign + ' ' : ''
  if (isNaN(num))
    return pre + val.toFixed(2)
  else
    return pre + val.toFixed(num)
});

/**
 * 	时间戳转化成日期格式
 * 		params
 * 			stamp 	时间戳
 * 			format	转化格式 默认 'yyyy-mm-dd'
 * 			sign	符号 默认 '-'
 */

Vue.filter("dateFormat", (stamp, format, sign) => {
  function tens(n) {
    if (n < 10)
      return '0' + n
    else
      return n
  }
  let symbol = sign ? sign : '-',
    oD = new Date(+stamp),
    y = oD.getFullYear(),
    M = oD.getMonth(),
    d = oD.getDate(),
    h = oD.getHours(),
    m = oD.getMinutes(),
    s = oD.getSeconds(),
    D = `${y}${symbol}${tens(M)}${symbol}${tens(d)}`,
    T = `${tens(h)}:${tens(m)}:${tens(s)}`;
  if (format || '' || null) {
    switch (format) {
      case 'yyyy-mm-dd':
        return D
        break;
      case 'hh-mm-ss':
        return T
        break;
      default:
        return D + ' ' + T
        break;
    }
  } else {
    return D + T
  }
});

/**
 * 	首字母大写 capitalize. 		
 */

Vue.filter("capitalize", (val) => {
  if (typeof(val) === 'string')
    return val.slice(0, 1).toUpperCase() + val.slice(1)
  else
    return
});

/**
 * 	转成大写 uppercase	
 */

Vue.filter("uppercase", (val) => {
  if (typeof(val) === 'string')
    return val.toUpperCase()
  else
    return
});

/**
 * 	转成小写 lowercase	
 */

Vue.filter("lowercase", (val) => {
  if (typeof(val) === 'string')
    return val.toLowerCase()
  else
    return
});
