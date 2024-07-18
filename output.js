const $ = new Env("缓存token");
let proenv_0x465f36 = false;
if (!process.env.API_PROXY_URL) {
  if (process.env.GLOBAL_AGENT_HTTP_PROXY_URL) {
    proenv_0x465f36 = true;
    require("global-agent/bootstrap");
    global.GLOBAL_AGENT.HTTP_PROXY = process.env.GLOBAL_AGENT_HTTP_PROXY_URL || "";
  }
}
let proenv_0x10c374 = false;
if (process.env.API_PROXY_URL) {
  proenv_0x10c374 = true;
  your_proxy_url = process.env.API_PROXY_URL;
}
console.log("全局代理: " + proenv_0x465f36);
console.log("api代理: " + proenv_0x10c374);
if (proenv_0x10c374 == true) {
  tunnel = require("tunnel");
}
const proenv_0x431f2e = require("crypto-js");
const proenv_0x285bde = $.isNode() ? require("./jdCookie.js") : "";
const proenv_0x2089d8 = require("axios");
let proenv_0x114a4b = [],
  proenv_0x75f462 = "";
let proenv_0x1c8a8e = "jdapp;android;11.1.4;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM00 Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36";
let proenv_0x3406ae = "http://hz.feverrun.top:99/share/card/getToken";
let proenv_0x2f8c98 = process.env.jd_token_waitTime ? process.env.jd_token_waitTime : "";
if ($.isNode()) {
  Object.keys(proenv_0x285bde).forEach(_0xca95ae => {
    proenv_0x114a4b.push(proenv_0x285bde[_0xca95ae]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  proenv_0x114a4b = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...proenv_0x4e0ab8($.getdata("CookiesJD") || "[]").map(_0x30ed01 => _0x30ed01.cookie)].filter(_0x18cdfe => !!_0x18cdfe);
}
allMessage = "";
message = "";
$.hotFlag = false;
$.outFlag = false;
$.activityEnd = false;
$.drawOne = false;
let proenv_0x392dd0 = "";
!(async () => {
  if (process.env.PRO_REDIS_URL) {
    try {
      $.redis = require("redis");
      pro_redis_url = process.env.PRO_REDIS_URL;
      const _0x4b6547 = {
        url: pro_redis_url
      };
      $.client = $.redis.createClient(_0x4b6547);
      if ($.client) {
        console.log("本地Redis已检测到配置链接");
        await $.client.connect();
      }
    } catch (_0x29f82f) {
      console.log(_0x29f82f);
      console.log("本地Redis连接失败, 退出执行！！！");
      process.exit(1);
    }
  }
  if (!proenv_0x114a4b[0]) {
    console.log("未检测到cookie");
    process.exit(1);
    return;
  }
  console.log();
  console.log("问题反馈: https://t.me/proenvc");
  console.log();
  for (let _0x176094 = 0; _0x176094 < proenv_0x114a4b.length; _0x176094++) {
    proenv_0x75f462 = proenv_0x114a4b[_0x176094];
    if (proenv_0x75f462) {
      $.UserName = decodeURIComponent(proenv_0x75f462.match(/pt_pin=([^; ]+)(?=;?)/) && proenv_0x75f462.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x176094 + 1;
      message = "";
      $.bean = 0;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      console.log("******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********");
      await proenv_0x1ad7d2();
      await proenv_0x43d4b1();
      if ($.outFlag || $.activityEnd) {
        break;
      }
    }
    if (proenv_0x10c374 == true || proenv_0x465f36 == true) {
      await $.wait(parseInt(Math.random() * 250 + 250, 10));
    } else {
      await $.wait(parseInt(Math.random() * 2500 + 2500, 10));
    }
  }
  $.outFlag;
  allMessage;
  process.exit(1);
})().catch(_0xe42452 => $.logErr(_0xe42452)).finally(() => $.done());
async function proenv_0x43d4b1() {
  try {
    $.ERR_BAD_REQUEST = 0;
    $.hasEnd = false;
    $.openFlag = false;
    $.endTime = 0;
    proenv_0x392dd0 = "";
    $.Token = "";
    $.IsvToken = "";
    $.Pin = "";
    $.openCardStatus = true;
    $.isvObfuscator = "";
    await proenv_0x4968e9();
    if (!$.IsvToken) {
      console.log("获取[token]失败！");
      return;
    }
    if ($.outFlag) {
      console.log("此ip已被限制，请过10分钟后再执行脚本\n");
      return;
    }
  } catch (_0x16214e) {
    console.log(_0x16214e.message);
  }
}
async function proenv_0x1ad7d2() {
  try {
    let _0x5dfea3 = ["jdapp;android;12.2.0;;;M/5.0;appBuild/2397;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jd.jdlite%22%7D;Mozilla/5.0(Linux;Android10;BKL-AL20Build/HUAWEIBKL-AL20;wv)AppleWebKit/537.36(KHTML,likeGecko)Version/4.0Chrome/89.0.4389.72MQQBrowser/6.2TBS/046249MobileSafari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/2397;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jd.jdlite%22%7D;Mozilla/5.0(Linux;U;Android10;zh-CN;TAS-AL00Build/HUAWEITAS-AL00)AppleWebKit/537.36(KHTML,likeGecko)Version/4.0Chrome/78.0.3904.108UCBrowser/13.1.8.1098MobileSafari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/2397;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jd.jdlite%22%7D;Mozilla/5.0(Linux;Android10;MI9Build/QKQ1.190825.002;wv)AppleWebKit/537.36(KHTML,likeGecko)Version/4.0Chrome/77.0.3865.120MQQBrowser/6.2TBS/045415MobileSafari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 9; ONEPLUS A3000 Build/PKQ1.181203.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 12; Redmi Note 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 11; RMX2001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 13; M2012K11C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.117 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 10; Redmi 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.28 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 10; Redmi Note 7) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/89.0.4389.86 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 9; MI 9) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/88.0.4324.96 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 8.0.0; Pixel C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.111 Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x1b9bab(proenv_0x431f2e.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 8.1.0; OPPO R11; Build/OPM1.171019.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.4280.141 Mobile Safari/537.36 Firefox-KiToBrowser/115.0"];
    let _0x3f8cd4 = parseInt(Math.random() * _0x5dfea3.length);
    let _0x4b844b = _0x5dfea3[_0x3f8cd4];
    $.UA = _0x4b844b;
    return _0x4b844b;
  } catch (_0xd9532b) {
    console.log(_0xd9532b);
  }
}
function proenv_0x1b9bab(_0x41aa56, _0xa603e6) {
  _0x3e8f87 = _0x3e8f87 || "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/";
  var _0x1d2b6f = "";
  var _0x29d296, _0x2c773c, _0x1edd59, _0x1aca2e, _0x4a1519, _0x3015aa;
  var _0x1406f2 = 0;
  _0x41aa56 = _0x41aa56.replace(/rn/g, "n");
  var _0x3e8f87 = "";
  for (var _0x1d2b6f = 0; _0x1d2b6f < _0x41aa56.length; _0x1d2b6f++) {
    {
      var _0x3900d2 = _0x41aa56.charCodeAt(_0x1d2b6f);
      if (_0x3900d2 < 128) {
        _0x3e8f87 += String.fromCharCode(_0x3900d2);
      } else {
        _0x3900d2 > 127 && _0x3900d2 < 2048 ? (_0x3e8f87 += String.fromCharCode(_0x3900d2 >> 6 | 192), _0x3e8f87 += String.fromCharCode(_0x3900d2 & 63 | 128)) : (_0x3e8f87 += String.fromCharCode(_0x3900d2 >> 12 | 224), _0x3e8f87 += String.fromCharCode(_0x3900d2 >> 6 & 63 | 128), _0x3e8f87 += String.fromCharCode(_0x3900d2 & 63 | 128));
      }
    }
  }
  while (_0x1406f2 < _0x41aa56.length) {
    _0x3900d2 = _0x41aa56.charCodeAt(_0x1406f2++);
    _0x29d296 = _0x41aa56.charCodeAt(_0x1406f2++);
    _0x2c773c = _0x41aa56.charCodeAt(_0x1406f2++);
    _0x1edd59 = _0x3900d2 >> 2;
    _0x1aca2e = (_0x3900d2 & 3) << 4 | _0x29d296 >> 4;
    _0x4a1519 = (_0x29d296 & 15) << 2 | _0x2c773c >> 6;
    _0x3015aa = _0x2c773c & 63;
    if (isNaN(_0x29d296)) {
      _0x4a1519 = _0x3015aa = 64;
    } else {
      isNaN(_0x2c773c) && (_0x3015aa = 64);
    }
    _0x1d2b6f = _0x1d2b6f + _0x3e8f87.charAt(_0x1edd59) + _0x3e8f87.charAt(_0x1aca2e) + _0x3e8f87.charAt(_0x4a1519) + _0x3e8f87.charAt(_0x3015aa);
  }
  while (_0x1d2b6f.length % 4 > 1) {
    _0x1d2b6f += "=";
  }
  return _0x1d2b6f;
}
function proenv_0x262d87(_0x2ec7de) {
  _0x2ec7de = _0x2ec7de || 32;
  let _0x3dd75f = "abcdef0123456789",
    _0x27cf68 = _0x3dd75f.length,
    _0x376255 = "";
  for (i = 0; i < _0x2ec7de; i++) {
    _0x376255 += _0x3dd75f.charAt(Math.floor(Math.random() * _0x27cf68));
  }
  return _0x376255;
}
function proenv_0x4e0ab8(_0xa2a628) {
  if (typeof _0xa2a628 == "string") {
    try {
      return JSON.parse(_0xa2a628);
    } catch (_0x23b7fd) {
      console.log(_0x23b7fd);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function proenv_0x395d1a(_0x4ba0c2) {
  if (_0x4ba0c2.status == 200 && _0x4ba0c2.data) {
    _0x4ba0c2 = _0x4ba0c2.data;
    if (typeof _0x4ba0c2 == "object") {
      return JSON.stringify(_0x4ba0c2);
    } else {
      return _0x4ba0c2;
    }
  } else {
    return "";
  }
}
function proenv_0x383e55(_0x1b0e9f = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0x4b9163 = 0) {
  return _0x1b0e9f.replace(/[xy]/g, function (_0x21e948) {
    var _0x8d5558 = 16 * Math.random() | 0,
      _0x54df8c = "x" == _0x21e948 ? _0x8d5558 : 3 & _0x8d5558 | 8;
    uuid = _0x4b9163 ? _0x54df8c.toString(36).toUpperCase() : _0x54df8c.toString(36);
    return uuid;
  });
}
function proenv_0x236fee(_0x346e4d, _0x2c47ba) {
  return Math.floor(Math.random() * (_0x2c47ba - _0x346e4d)) + _0x346e4d;
}
async function proenv_0x1dd642() {
  options = {};
  if (proenv_0x10c374 == true) {
    const _0x125bb9 = {
      Accept: "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8;",
      Cookie: proenv_0x75f462,
      "User-Agent": $.UA,
      "X-Requested-With": "XMLHttpRequest"
    };
    const _0xc0a6d8 = {
      host: $.ip,
      port: $.ipo
    };
    const _0x5ce9ae = {
      proxy: _0xc0a6d8
    };
    const _0x504f8f = {
      host: $.ip,
      port: $.ipo
    };
    const _0x2274f6 = {
      proxy: _0x504f8f
    };
    const _0x33fd16 = {
      headers: _0x125bb9,
      timeout: 30000,
      proxy: false,
      httpAgent: tunnel.httpOverHttp(_0x5ce9ae),
      httpsAgent: tunnel.httpsOverHttp(_0x2274f6)
    };
    options = _0x33fd16;
  } else {
    const _0x3281a0 = {
      Accept: "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8;",
      Cookie: proenv_0x75f462,
      "User-Agent": $.UA,
      "X-Requested-With": "XMLHttpRequest"
    };
    const _0x191bf2 = {
      headers: _0x3281a0,
      timeout: 30000
    };
    options = _0x191bf2;
  }
  return proenv_0x2089d8.post("https://api.m.jd.com/client.action?functionId=isvObfuscator&lmt=0", await proenv_0x5f4e71(), options).then(function (_0x578ee8) {
    _0x578ee8 = JSON.parse(proenv_0x395d1a(_0x578ee8));
    if (_0x578ee8 && _0x578ee8.code == 0 && _0x578ee8.token) {
      $.IsvToken = _0x578ee8.token || "";
    } else {
      console.log(_0x578ee8.message);
      $.isvObfuscator = _0x578ee8.message || "";
    }
  }).catch(async function (_0x15de39) {
    try {
      if (!(_0x15de39.code == "ECONNABORTED")) {
        if (!(_0x15de39.code == "ECONNRESET")) {
          console.log("错误码: " + _0x15de39.code + " - " + _0x15de39.response.status);
        }
      }
    } catch (_0x40a085) {
      console.log(_0x15de39.code);
    }
    if (proenv_0x10c374 == true && _0x15de39.code == "ECONNABORTED") {
      $.tryIp = true;
      await proenv_0x1dd642();
    }
    if (proenv_0x10c374 == true && _0x15de39.code == "ECONNRESET") {
      $.tryIp = true;
      await proenv_0x31f86a();
      await proenv_0x1dd642();
    }
  });
}
async function proenv_0x31f86a() {
  return new Promise(async _0xdd2d79 => {
    try {
      await $.wait(parseInt(Math.random() * 250 + 150, 10));
      let _0x21f7c5 = await proenv_0x3495d1();
      if (_0x21f7c5 != "") {
        $.getIpStatus = true;
        console.log("当前: " + _0x21f7c5);
        ips = _0x21f7c5.split(":");
        $.ip = ips[0];
        $.ipo = ips[1];
        await $.wait(parseInt(Math.random() * 250 + 150, 10));
      } else {
        $.getIpStatus = false;
        console.log("代理获取失败");
      }
    } catch (_0x124476) {
      $.getIpStatus = false;
      console.log("代理获取失败");
    }
    if ($.getIpStatus == false) {
      try {
        await $.wait(parseInt(Math.random() * 250 + 150, 10));
        let _0x3dafb1 = await proenv_0x3495d1();
        if (_0x3dafb1 != "") {
          $.getIpStatus = true;
          console.log("当前: " + _0x3dafb1);
          ips = _0x3dafb1.split(":");
          $.ip = ips[0];
          $.ipo = ips[1];
          await $.wait(parseInt(Math.random() * 250 + 150, 10));
        } else {
          $.getIpStatus = false;
          console.log("代理获取失败");
        }
      } catch (_0x2efdac) {
        $.getIpStatus = false;
        console.log("代理获取失败");
      }
    }
    if ($.getIpStatus == false) {
      console.log("代理获取失败，跳过此次执行！");
      _0xdd2d79(false);
    } else {
      _0xdd2d79(true);
    }
  });
}
function proenv_0x3495d1() {
  try {
    return new Promise(_0x3791e7 => {
      const _0x3b1d55 = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/538.38"
      };
      const _0x3d5c3c = {
        url: your_proxy_url,
        headers: _0x3b1d55,
        timeout: 30000
      };
      $.get(_0x3d5c3c, (_0x216c6b, _0x105dfa, _0x21cd5f) => {
        try {
          if (_0x216c6b) {
            console.log("获取Ip失败");
          } else {
            try {
              if (_0x21cd5f.indexOf("\r\n") > -1) {
                _0x21cd5f = _0x21cd5f.split("\r\n");
                if (_0x21cd5f.length >= 1) {
                  _0x21cd5f = _0x21cd5f[0];
                }
              } else {
                if (_0x21cd5f.indexOf("\n") > -1) {
                  _0x21cd5f = _0x21cd5f.split("\n");
                  if (_0x21cd5f.length >= 1) {
                    _0x21cd5f = _0x21cd5f[0];
                  }
                } else {
                  if (_0x21cd5f.indexOf("\r") > -1) {
                    _0x21cd5f = _0x21cd5f.split("\r");
                    if (_0x21cd5f.length >= 1) {
                      _0x21cd5f = _0x21cd5f[0];
                    }
                  } else {
                    if (_0x21cd5f.indexOf("\t") > -1) {
                      _0x21cd5f = _0x21cd5f.split("\t");
                      if (_0x21cd5f.length >= 1) {
                        _0x21cd5f = _0x21cd5f[0];
                      }
                    }
                  }
                }
              }
            } catch (_0x40dd17) {
              _0x21cd5f = "";
            }
          }
        } catch (_0x4693bc) {} finally {
          _0x3791e7(_0x21cd5f || "");
        }
      });
    });
  } catch (_0x5ed78b) {
    console.log(_0x5ed78b.message);
  }
}
async function proenv_0x5f4e71() {
  return new Promise(_0x5bc808 => {
    const _0x592577 = {
      "User-Agent": proenv_0x1c8a8e
    };
    const _0x4b7ad8 = {
      url: proenv_0x3406ae + "?type=lzdz1",
      headers: _0x592577,
      timeout: 60000
    };
    $.get(_0x4b7ad8, (_0x179001, _0x22ef48, _0x2f3389) => {
      try {
        if (_0x179001) {
          console.log("请求失败，请检查网路");
        } else {
          try {
            _0x2f3389 = JSON.parse(_0x2f3389);
            if (_0x2f3389.code == 0) {
              _0x2f3389 = _0x2f3389.data;
            } else {
              _0x2f3389 = "";
            }
          } catch (_0x102519) {
            _0x2f3389 = "";
          }
        }
      } catch (_0x4e91c7) {} finally {
        _0x5bc808(_0x2f3389 || "");
      }
    });
  });
}
async function proenv_0x2e7657(_0x25387c, _0x2e15ce) {
  await $.wait(parseInt(Math.random() * 350 + 300, 10));
  return new Promise(_0x41116b => {
    const _0x4373ce = {
      url: "http://hz.feverrun.top:99/share/sub/subIsvToken",
      body: "pin=" + encodeURIComponent(_0x25387c) + "&token=" + _0x2e15ce,
      headers: {},
      timeout: 60000
    };
    _0x4373ce.headers["User-Agent"] = "jdapp;android;11.5.0;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36";
    $.post(_0x4373ce, (_0x3d5a2d, _0x5caee6, _0x13ee14) => {
      try {
        if (_0x3d5a2d) {
          console.log("缓存token失败2");
          _0x13ee14 = "";
        } else {
          try {
            _0x13ee14 = _0x13ee14;
          } catch (_0xd71e3d) {
            _0x13ee14 = "";
          }
        }
      } catch (_0x4ea6a3) {
        _0x13ee14 = "";
      } finally {
        _0x41116b(_0x13ee14 || "");
      }
    });
  });
}
async function proenv_0x43080d(_0x5a5da3) {
  await $.wait(parseInt(Math.random() * 350 + 300, 10));
  if ($.client) {
    return new Promise(async _0x5b7e29 => {
      data = await $.client.get(_0x5a5da3);
      _0x5b7e29(data || "");
    });
  } else {
    return new Promise(_0x226c19 => {
      const _0x57b91f = {
        url: "http://hz.feverrun.top:99/share/get/getIsvToken",
        body: "pin=" + encodeURIComponent(_0x5a5da3),
        headers: {},
        timeout: 60000
      };
      _0x57b91f.headers["User-Agent"] = "jdapp;android;11.5.0;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36";
      $.post(_0x57b91f, (_0x370264, _0x1fb0da, _0x1a8022) => {
        try {
          if (_0x370264) {
            console.log("缓存token失败1");
            _0x1a8022 = "";
          } else {
            try {
              _0x1a8022 = _0x1a8022;
            } catch (_0x3cd22c) {
              _0x1a8022 = "";
            }
          }
        } catch (_0x1cd515) {
          _0x1a8022 = "";
        } finally {
          _0x226c19(_0x1a8022 || "");
        }
      });
    });
  }
}
async function proenv_0x4968e9() {
  if ($.client) {
    return new Promise(async _0x29dc49 => {
      $token = await proenv_0x43080d(encodeURIComponent($.UserName));
      if ($token != "") {
        console.log("读取缓存token成功");
        $.IsvToken = $token;
      } else {
        if (proenv_0x10c374 == true) {
          await proenv_0x31f86a();
          if ($.getIpStatus == false) {
            await proenv_0x31f86a();
            console.log("代理获取失败，跳过此次执行！");
            return;
          }
        }
        for (let _0x236bc1 = 0; _0x236bc1 < 3; _0x236bc1++) {
          await proenv_0x1dd642();
          if ($.IsvToken != "" && $.IsvToken != undefined) {
            console.log("缓存token成功");
            await $.client.set(encodeURIComponent($.UserName), $.IsvToken);
            await $.client.expire(encodeURIComponent($.UserName), 1740);
            break;
          } else {
            console.log("缓存token失败" + (_0x236bc1 + 1));
            await $.wait(parseInt(Math.random() * 250 + 250, 10));
            if (proenv_0x10c374 == true) {
              await proenv_0x31f86a();
            }
          }
          if ($.isvObfuscator.indexOf("参数异常") > -1) {
            break;
          }
        }
        if (proenv_0x10c374 == true) {
          await $.wait(parseInt(Math.random() * 500 + 250, 10));
        } else {
          if (proenv_0x465f36 == true) {
            await $.wait(parseInt(Math.random() * 500 + 250, 10));
          } else {
            if (proenv_0x2f8c98) {
              await $.wait(parseInt(proenv_0x2f8c98 * 1000, 10));
            } else {
              await $.wait(parseInt(Math.random() * 35000 + 25000, 10));
            }
          }
        }
      }
      _0x29dc49();
    });
  } else {
    return new Promise(async _0x3120a => {
      $token = await proenv_0x43080d(encodeURIComponent($.UserName));
      if ($token != "") {
        console.log("读取缓存token成功");
        $.IsvToken = $token;
      } else {
        if (proenv_0x10c374 == true) {
          await proenv_0x31f86a();
          if ($.getIpStatus == false) {
            await proenv_0x31f86a();
            console.log("代理获取失败，跳过此次执行！");
            return;
          }
        }
        for (let _0x413456 = 0; _0x413456 < 3; _0x413456++) {
          await proenv_0x1dd642();
          if ($.IsvToken != "" && $.IsvToken != undefined) {
            console.log("缓存token成功");
            await proenv_0x2e7657(encodeURIComponent($.UserName), $.IsvToken);
            break;
          } else {
            console.log("缓存token失败" + (_0x413456 + 1));
            await $.wait(parseInt(Math.random() * 250 + 250, 10));
            if (proenv_0x10c374 == true) {
              await proenv_0x31f86a();
            }
          }
          if ($.isvObfuscator.indexOf("参数异常") > -1) {
            break;
          }
        }
        if (proenv_0x10c374 == true) {
          await $.wait(parseInt(Math.random() * 500 + 250, 10));
        } else {
          if (proenv_0x465f36 == true) {
            await $.wait(parseInt(Math.random() * 500 + 250, 10));
          } else {
            if (proenv_0x2f8c98) {
              await $.wait(parseInt(proenv_0x2f8c98 * 1000, 10));
            } else {
              await $.wait(parseInt(Math.random() * 35000 + 25000, 10));
            }
          }
        }
      }
      _0x3120a();
    });
  }
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}