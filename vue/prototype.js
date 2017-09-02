import Vue from 'vue'
// 全局引入 日期转化
Vue.prototype.getLocalTime = function (ns) {
  let date = new Date(ns)
  let Y = date.getFullYear() + '.'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '.'
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  return Y + M + D
}

// 判断是否是微信浏览器 全局引入 在vue中用this.isWeiXin 来使用
Vue.prototype.isWeiXin = function () {
  let ua = window.navigator.userAgent
  if (/MicroMessenger/i.test(ua)) {
    return true
  } else {
    return false
  }
}

// 全局引入 改变title 适用于一个模块承当多个页面的情况
Vue.prototype.changeTitle = function (title) {
  let eleTitle = document.getElementsByTagName('title')[0]
  eleTitle.innerHTML = title
}

// 对象转为请求字符串
Vue.prototype.objTurnQuery = function (param) {
  let str = ''
  for (let key in param) {
    str += key + '=' + param[key] + '&'
  }
  return '?' + str.slice(0, -1)
};
// 日期转化
Vue.prototype.formatDate = {
  format: function (date, pattern) {
    if (!date) return;
    if((typeof date) == 'string') return date;
    pattern = pattern || DEFAULT_PATTERN;
    return pattern.replace(SIGN_REGEXP, function ($0) {
      switch ($0.charAt(0)) {
        case 'y':
          return padding(date.getFullYear(), $0.length);
        case 'M':
          return padding(date.getMonth() + 1, $0.length);
        case 'd':
          return padding(date.getDate(), $0.length);
        case 'w':
          return date.getDay() + 1;
        case 'h':
          return padding(date.getHours(), $0.length);
        case 'm':
          return padding(date.getMinutes(), $0.length);
        case 's':
          return padding(date.getSeconds(), $0.length);
      }
    });
  },
  formatUtc: function (date, pattern) {
    pattern = pattern || DEFAULT_PATTERN;
    return pattern.replace(SIGN_REGEXP, function ($0) {
      switch ($0.charAt(0)) {
        case 'y':
          return padding(date.getUTCFullYear(), $0.length);
        case 'M':
          return padding(date.getUTCMonth() + 1, $0.length);
        case 'd':
          return padding(date.getUTCDate(), $0.length);
        case 'w':
          return date.getDay() + 1;
        case 'h':
          return padding(date.getUTCHours(), $0.length);
        case 'm':
          return padding(date.getUTCMinutes(), $0.length);
        case 's':
          return padding(date.getUTCSeconds(), $0.length);
      }
    });
  },
  parse: function (dateString, pattern) {
    var matchs1 = pattern.match(SIGN_REGEXP);
    var matchs2 = dateString.match(/(\d)+/g);
    if (matchs1.length == matchs2.length) {
      var _date = new Date(1970, 0, 1);
      for (var i = 0; i < matchs1.length; i++) {
        var _int = parseInt(matchs2[i]);
        var sign = matchs1[i];
        switch (sign.charAt(0)) {
          case 'y':
            _date.setFullYear(_int);
            break;
          case 'M':
            _date.setMonth(_int - 1);
            break;
          case 'd':
            _date.setDate(_int);
            break;
          case 'h':
            _date.setHours(_int);
            break;
          case 'm':
            _date.setMinutes(_int);
            break;
          case 's':
            _date.setSeconds(_int);
            break;
        }
      }
      return _date;
    }
    return null;
  }
}
var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd hh:mm';
function padding(s, len) {
  var len = len - (s + '').length;
  for (var i = 0; i < len; i++) {
    s = '0' + s;
  }
  return s;
};

// 初始化对象
Vue.prototype.initObj = function (obj) {
  for (let x in obj) {
    obj[x] = ''
  }
}

// post 发送数据 转成 URLSearchParams()对象;
Vue.prototype.postData = function (obj,pre) {
  let params = new URLSearchParams()
  if (pre) {
    for (let key in obj) {
      if(obj[key]) {
        params.append(pre + '.' + key, obj[key])
      }
    }
  } else {
    for (let key in obj) {
      if(obj[key]) {
        params.append(key, obj[key])
      }
    }
  }
  return params
}

// get 发送数据 添加前缀;
Vue.prototype.getData = function (obj,pre) {
  let params = {}
  if (pre) {
    for (let key in obj) {
      if(obj[key]) {
        params[pre + '.' + key] = obj[key]
      }
    }
  } else {
    for (let key in obj) {
      if(obj[key]) {
        params[key] = obj[key]
      }
    }
  }
  return params
}

// 字符号转数组 并把数组item转成数字
Vue.prototype.cloneObj = function (newObj,oldObj) {
  for (let key in oldObj) {
    newObj[key] = oldObj[key]
  }
}

// 字符号转数组 并把数组item转成数字
Vue.prototype.strTurnArr = function (str) {
  let arr = []
  arr = str.split(',')
  for (let i = 0;i<arr.length; i++) {
    arr[i] = +arr[i]
  }
  return arr
}

