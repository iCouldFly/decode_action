const $ = new Env("直播抽奖");
console.log("配置代理池: OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL");
console.log("配置api代理: OPENCARD_API_PROXY_URL");
let proenv_0x4f153c = false;
if (!process.env.OPENCARD_API_PROXY_URL) {
  if (process.env.OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL) {
    proenv_0x4f153c = true;
    require("global-agent/bootstrap");
    global.GLOBAL_AGENT.HTTP_PROXY = process.env.OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL || "";
  }
}
let proenv_0x561ff8 = false;
if (process.env.OPENCARD_API_PROXY_URL) {
  proenv_0x561ff8 = true;
  your_proxy_url = process.env.OPENCARD_API_PROXY_URL;
}
console.log("配置代理池: " + (proenv_0x4f153c == true ? "已配置" : "未配置") + " ");
console.log("配置api代理: " + (proenv_0x561ff8 == true ? "已配置" : "未配置"));
let proenv_0x1501d7 = [];
$.noDraw = 0;
const proenv_0x271c78 = $.isNode() ? require("./jdCookie.js") : "";
const proenv_0x4acfba = $.isNode() ? require("./sendNotify") : "";
const proenv_0x25cac0 = require("axios");
const proenv_0x7f8148 = require("tunnel");
const proenv_0x5b4ade = require("crypto-js");
let proenv_0x5d5293 = [],
  proenv_0x363126 = "";
$.liveLotteryPanelFlag = false;
let proenv_0x2cf81b = process.env.jd_live_ids ? process.env.jd_live_ids : "";
let proenv_0x36449a = process.argv[1];
if ($.isNode()) {
  Object.keys(proenv_0x271c78).forEach(_0x352b5b => {
    proenv_0x5d5293.push(proenv_0x271c78[_0x352b5b]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  proenv_0x5d5293 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...proenv_0x5a09bf($.getdata("CookiesJD") || "[]").map(_0x2c8641 => _0x2c8641.cookie)].filter(_0x4edaee => !!_0x4edaee);
}
if (!(proenv_0x36449a.indexOf("feverrun") > -1)) {
  console.log("请去拉取完整库: https://t.me/proenvc");
  process.exit(1);
}
allMessage = "";
message = "";
$.hotFlag = false;
$.outFlag = false;
$.continueFlag = false;
$.activityEnd = false;
!(async () => {
  if (!proenv_0x5d5293[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    process.exit(1);
    return;
  }
  if (!proenv_0x2cf81b) {
    console.log("【问题反馈】https://t.me/proenvc ");
    console.log("export jd_live_ids=\"id1&id2&id3...\" 未设置 退出！");
    process.exit(1);
  }
  proenv_0x1501d7 = proenv_0x2cf81b.split("&");
  if (proenv_0x561ff8 == true || proenv_0x4f153c == true) {
    await $.wait(parseInt(Math.random() * 250 + 250, 10));
  } else {
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
  }
  if (!(proenv_0x1501d7.length >= 1)) {
    console.log("没有liveId, 退出执行！！！");
    process.exit(1);
  }
  console.log();
  console.log("问题反馈: https://t.me/proenvc");
  console.log();
  for (let _0x33086e of proenv_0x1501d7) {
    allMessage = "";
    message = "";
    $.liveId = _0x33086e;
    $.activityUrl = "https://h5.m.jd.com/dev/3pbY8ZuCx4ML99uttZKLHC2QcAMn/live.html?id=" + $.liveId;
    console.log("直播id: " + _0x33086e);
    for (let _0x324aa2 = 0; _0x324aa2 < proenv_0x5d5293.length; _0x324aa2++) {
      proenv_0x363126 = proenv_0x5d5293[_0x324aa2];
      if (proenv_0x363126) {
        $.UserName = decodeURIComponent(proenv_0x363126.match(/pt_pin=([^; ]+)(?=;?)/) && proenv_0x363126.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x324aa2 + 1;
        message = "";
        $.bean = 0;
        $.hotFlag = false;
        $.nickName = "";
        $.isLogin = true;
        await proenv_0x5151fb();
        console.log("******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********");
        await proenv_0x367483();
        await proenv_0x3beb2b();
        if ($.liveLotteryPanelFlag == true) {
          console.log("跳过执行此liveId");
          break;
        }
        if ($.outFlag || $.activityEnd) {
          break;
        }
        if (proenv_0x561ff8 == true || proenv_0x4f153c == true) {
          await $.wait(parseInt(Math.random() * 250 + 250, 10));
        } else {
          await $.wait(parseInt(Math.random() * 1500 + 1000, 10));
        }
      }
    }
    if (proenv_0x561ff8 == true || proenv_0x4f153c == true) {
      await $.wait(parseInt(Math.random() * 250 + 250, 10));
    } else {
      await $.wait(parseInt(Math.random() * 1500 + 1000, 10));
    }
    if ($.isNode() && allMessage) {
      allMessage += "\n活动地址:" + $.activityUrl + "\n";
      $.msg($.name, "", "" + allMessage);
      if ($.isNode()) {
        await proenv_0x4acfba.sendNotify("" + $.name, "" + allMessage);
      }
      allMessage = "";
    }
  }
  if ($.outFlag) {
    let _0x562f30 = "此ip已被限制，请过10分钟后再执行脚本";
    $.msg($.name, "", "" + _0x562f30);
  }
  process.exit(1);
})().catch(_0x58d246 => $.logErr(_0x58d246)).finally(() => $.done());
async function proenv_0x367483() {
  try {
    $.ERR_BAD_REQUEST = 0;
    $.hasEnd = false;
    $.lotteryId = "";
    $.liveLotteryPanelFlag = false;
    if (proenv_0x561ff8 == true) {
      await proenv_0xbfe2ef();
      if ($.getIpStatus == false) {
        await proenv_0xbfe2ef();
        console.log("代理获取失败，跳过此次执行！");
        return;
      }
    }
    try {
      await proenv_0x49b1ec("liveActivityV946");
      if (proenv_0x561ff8 == true || proenv_0x4f153c == true) {
        await $.wait(parseInt(Math.random() * 250 + 250, 10));
      } else {
        await $.wait(parseInt(Math.random() * 500 + 350, 10));
      }
      if (!$.lotteryId) {
        console.log("抽奖id不存在， 退出此id");
        $.noDraw++;
        if ($.noDraw >= 15) {
          console.log("抽奖id不存在， 连续15个不存在， 退出执行此id!!!");
          $.liveLotteryPanelFlag = true;
        }
        return;
      } else {
        $.noDraw = 0;
      }
      await proenv_0x49b1ec("liveLotteryPanelV1012");
      await proenv_0x49b1ec("liveDrawLotteryV1012");
    } catch (_0x4f723a) {
      console.log(_0x4f723a.message);
    }
  } catch (_0x27649b) {
    console.log(_0x27649b);
  }
}
async function proenv_0x49b1ec(_0x258f7e) {
  if ($.outFlag || $.continueFlag) {
    return;
  }
  let _0x3d87ff = "";
  let _0x4564c0 = "post";
  switch (_0x258f7e) {
    case "liveActivityV946":
      _0x4564c0 = "post";
      const _0x3ab180 = {
        itemId: null,
        liveId: $.liveId,
        masterPin: null,
        pageId: "Live_Room",
        showCoupon: "0"
      };
      _0x3d87ff = _0x3ab180;
      sign = await proenv_0x2a0dea(_0x258f7e, _0x3d87ff);
      await $.wait(parseInt(Math.random() * 500 + 250, 10));
      url = "https://api.m.jd.com/client.action?" + sign + "&body=" + encodeURIComponent(JSON.stringify(_0x3d87ff));
      _0x3d87ff = {};
      break;
    case "liveLotteryPanelV1012":
      _0x4564c0 = "post";
      const _0x10c8bb = {
        liveId: $.liveId,
        lotteryId: $.lotteryId,
        pageId: "Live_Room",
        shared: 1
      };
      _0x3d87ff = _0x10c8bb;
      sign = await proenv_0x2a0dea(_0x258f7e, _0x3d87ff);
      await $.wait(parseInt(Math.random() * 500 + 250, 10));
      url = "https://api.m.jd.com/client.action?" + sign + "&body=" + encodeURIComponent(JSON.stringify(_0x3d87ff));
      _0x3d87ff = {};
      break;
    case "liveDrawLotteryV1012":
      _0x4564c0 = "post";
      const _0x100e61 = {
        fansLevel: 0,
        liveId: $.liveId,
        lotteryId: $.lotteryId,
        nickName: $.UserName,
        pageId: "Live_Room",
        plus: 0
      };
      _0x3d87ff = _0x100e61;
      sign = await proenv_0x2a0dea(_0x258f7e, _0x3d87ff);
      await $.wait(parseInt(Math.random() * 500 + 250, 10));
      url = "https://api.m.jd.com/client.action?" + sign + "&body=" + encodeURIComponent(JSON.stringify(_0x3d87ff));
      _0x3d87ff = {};
      break;
    default:
      console.log("" + _0x258f7e);
  }
  let _0x2d6c70 = proenv_0x3c26e4(_0x258f7e, url, _0x3d87ff, _0x4564c0);
  if (proenv_0x561ff8 == true || proenv_0x4f153c == true) {
    await $.wait(parseInt(Math.random() * 250 + 250, 10));
  } else {
    await $.wait(parseInt(Math.random() * 1000 + 550, 10));
  }
  options = {};
  if (proenv_0x561ff8 == true) {
    const _0x66b735 = {
      host: $.ip,
      port: $.ipo
    };
    const _0x593c50 = {
      proxy: _0x66b735
    };
    httpAgent = proenv_0x7f8148.httpOverHttp(_0x593c50);
    const _0x410e8e = {
      host: $.ip,
      port: $.ipo
    };
    const _0x504ee8 = {
      proxy: _0x410e8e
    };
    httpsAgent = proenv_0x7f8148.httpsOverHttp(_0x504ee8);
    const _0x815942 = {
      headers: _0x2d6c70.headers,
      timeout: _0x2d6c70.timeout,
      proxy: false,
      httpAgent: httpAgent,
      httpsAgent: httpsAgent
    };
    options = _0x815942;
  } else {
    const _0x14c7e6 = {
      headers: _0x2d6c70.headers,
      timeout: _0x2d6c70.timeout
    };
    options = _0x14c7e6;
  }
  if (_0x4564c0.toLowerCase().includes("post")) {
    return proenv_0x25cac0.post(url, _0x3d87ff, options).then(function (_0x16859a) {
      _0x16859a = proenv_0x17df44(_0x16859a);
      if (_0x16859a) {
        proenv_0x226bc6(_0x258f7e, _0x16859a);
      }
    }).catch(async function (_0x4f328b) {
      if (_0x4f328b.response) {
        console.log(_0x4f328b.response.status);
        if (!(proenv_0x561ff8 == true || proenv_0x4f153c == true)) {
          if (_0x4f328b.response.status == "493") {
            console.log("ip可能已经被限制， 过十分钟再来！！！");
            $.outFlag = true;
            process.exit(1);
          }
        }
        _0x4f328b.response.status == "403";
      }
      console.log("错误码1: " + _0x258f7e + " - " + _0x4f328b.code);
      if (_0x4f328b.code == "ECONNABORTED" || _0x4f328b.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x258f7e) || _0x4f328b.code == "ERR_BAD_RESPONSE") {
        if ($.ERR_BAD_REQUEST >= 5) {
          $.ERR_BAD_REQUEST = 0;
        } else {
          $.ERR_BAD_REQUEST += 1;
          await $.wait(parseInt(Math.random() * 500 + 350, 10));
          await proenv_0x49b1ec(_0x258f7e);
        }
      }
      if (_0x4f328b.code == "ECONNRESET") {
        await $.wait(parseInt(Math.random() * 500 + 350, 10));
        if (proenv_0x561ff8 == true) {
          await proenv_0xbfe2ef();
          await proenv_0x49b1ec(_0x258f7e);
        }
      }
    });
  } else {
    if (_0x4564c0 == "get" || _0x4564c0 == "GET") {
      return proenv_0x25cac0.get(url, options).then(function (_0x5f3114) {
        _0x5f3114 = proenv_0x17df44(_0x5f3114);
        if (_0x5f3114) {
          proenv_0x226bc6(_0x258f7e, _0x5f3114);
        }
      }).catch(async function (_0x85a18b) {
        if (_0x85a18b.response) {
          console.log(_0x85a18b.response.status);
          if (!(proenv_0x561ff8 == true || proenv_0x4f153c == true)) {
            if (_0x85a18b.response.status == "493") {
              console.log("ip可能已经被限制， 过十分钟再来！！！");
              $.outFlag = true;
              process.exit(1);
            }
          }
          _0x85a18b.response.status == "403";
        }
        console.log("错误码2: " + _0x258f7e + " - " + _0x85a18b.code);
        if (_0x85a18b.code == "ECONNABORTED" || _0x85a18b.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x258f7e) || _0x85a18b.code == "ERR_BAD_RESPONSE") {
          if ($.ERR_BAD_REQUEST >= 5) {
            $.ERR_BAD_REQUEST = 0;
          } else {
            $.ERR_BAD_REQUEST += 1;
            await $.wait(parseInt(Math.random() * 500 + 350, 10));
            await proenv_0x49b1ec(_0x258f7e);
          }
        }
        if (_0x85a18b.code == "ECONNRESET") {
          await $.wait(parseInt(Math.random() * 500 + 350, 10));
          if (proenv_0x561ff8 == true) {
            await proenv_0xbfe2ef();
            await proenv_0x49b1ec(_0x258f7e);
          }
        }
      });
    }
  }
}
function proenv_0x226bc6(_0x856a9, _0x1969d8) {
  let _0x1f5e65 = "";
  try {
    if (!["accessLog", "attendLog", "getCk", "drawContent", "accessLogWithAD", "accessLog"].includes(_0x856a9)) {
      if (_0x1969d8) {
        _0x1f5e65 = JSON.parse(_0x1969d8);
      }
    }
  } catch (_0x2dba51) {
    console.log(_0x856a9 + " 执行任务异常");
    console.log(_0x1969d8 + "===>" + _0x2dba51);
    $.runFalag = false;
  }
  try {
    switch (_0x856a9) {
      case "liveActivityV946":
        if (_0x1f5e65.code == 0 && _0x1f5e65.subCode == 0) {
          $.lotteryId = _0x1969d8.match(/\"lotteryId\":(\d+)/) && _0x1969d8.match(/\"lotteryId\":(\d+)/)[1];
          $.lotteryId = $.lotteryId || "";
        } else {
          $.lotteryId = "";
        }
        break;
      case "liveLotteryPanelV1012":
        if (_0x1f5e65.code == 0 && _0x1f5e65.subCode == 0) {
          if (_0x1f5e65.data.lotteryRewardDetail.rewardType != 13) {
            console.log("奖品不是京豆，退出此liveId: " + $.liveId);
            $.liveLotteryPanelFlag = true;
          } else {
            $.liveLotteryPanelFlag = false;
            console.log("liveId: " + $.liveId);
            console.log("lotteryId: " + $.lotteryId);
            console.log("奖品: " + _0x1f5e65.data.lotteryRewardDetail.rewardValue + " 京豆");
          }
        } else {
          console.log(_0x1969d8);
        }
        break;
      case "liveDrawLotteryV1012":
        if (_0x1f5e65.code == 0 && _0x1f5e65.subCode == 0) {
          rewardTitle = _0x1f5e65.data.rewardTitle || "";
          console.log("获得: " + rewardTitle);
          if ($.liveId != "" && $.lotteryId != "" && $.liveLotteryPanelFlag == false) {
            message += "获得: " + (rewardTitle || "空气");
          }
        } else {
          console.log(_0x1969d8);
        }
        break;
      default:
        console.log(_0x856a9 + "-> " + _0x1969d8);
    }
  } catch (_0x222854) {
    console.log(_0x222854.message);
  }
}
function proenv_0x3c26e4(_0x1aa815, _0x43bc30, _0x2bf9c3, _0x362929 = "post") {
  words = proenv_0x5b4ade.enc.Utf8.parse($.UserName);
  encP = proenv_0x5b4ade.enc.Base64.stringify(words);
  const _0x4a2427 = {
    pin: encP
  };
  let _0x237226 = {
    charset: "UTF-8",
    "Accept-Encoding": "gzip,deflate",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Cookie: proenv_0x363126,
    "User-Agent": $.UAA,
    "X-Requested-With": "com.jingdong.app.mall",
    "j-e-c": JSON.stringify({
      hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
      ts: Date.now(),
      ridx: -1,
      cipher: _0x4a2427,
      ciphertype: 5,
      version: "1.2.0",
      appname: "com.jingdong.app.mall"
    }),
    "x-rp-client": "android_2.0.0",
    "x-referer-page": "com.jd.lib.mylive.view.activity.VideoLiveRoomActivity",
    "x-referer-package": "com.jingdong.app.mall"
  };
  const _0x3ab593 = {
    url: _0x43bc30,
    headers: _0x237226,
    body: _0x2bf9c3,
    timeout: 15000
  };
  return _0x3ab593;
}
async function proenv_0x29ef03() {
  let _0x30cd11 = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5845.111 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5790.171 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Iron Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5759.201 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5748.222 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.5666.197 Safari/537.36"];
  let _0x2b0f86 = parseInt(Math.random() * _0x30cd11.length);
  let _0x10ee19 = _0x30cd11[_0x2b0f86];
  $.UA = _0x10ee19;
  return _0x10ee19;
}
async function proenv_0x5151fb() {
  let _0x54baca = ["Dalvik/2.1.0 (Linux; U; Android 9; ONEPLUS A3000 Build/PKQ1.181203.001)", "Dalvik/2.1.0 (Linux; Android 8.1.0; OPPO R11; Build/OPM1.171019.011)", "Dalvik/2.1.0 (Linux; Android 11; CPH2099)", "Dalvik/2.1.0 (Linux; Android 12; 21081111RG)", "Dalvik/2.1.0 (Linux; Android 11; M2006C3LG)", "Dalvik/2.1.0 (Linux; Android 13; 22041216UC)"];
  let _0x3a6598 = parseInt(Math.random() * _0x54baca.length);
  let _0x46860a = _0x54baca[_0x3a6598];
  $.UAA = _0x46860a;
  return _0x46860a;
}
function proenv_0x59ecb8(_0x36658f, _0x49bd3e) {
  _0x36658f = _0x36658f || 32;
  let _0x26b05d = _0x49bd3e,
    _0x5ab2be = _0x26b05d.length,
    _0x333a3e = "";
  for (i = 0; i < _0x36658f; i++) {
    _0x333a3e += _0x26b05d.charAt(Math.floor(Math.random() * _0x5ab2be));
  }
  return _0x333a3e;
}
function proenv_0x4eaf2f(_0x328fd6) {
  try {
    if (typeof JSON.parse(_0x328fd6) == "object") {
      return true;
    }
  } catch (_0x55b0bc) {
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function proenv_0x5a09bf(_0x2ccf64) {
  if (typeof _0x2ccf64 == "string") {
    try {
      return JSON.parse(_0x2ccf64);
    } catch (_0x1ed0b6) {
      console.log(_0x1ed0b6);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function proenv_0x5cd9d3(_0x5f3f19) {
  if (_0x5f3f19.status == 200 && _0x5f3f19.data) {
    _0x5f3f19 = _0x5f3f19.data;
    if (typeof _0x5f3f19 == "object") {
      return JSON.stringify(_0x5f3f19);
    } else {
      return _0x5f3f19;
    }
  } else {
    return "";
  }
}
function proenv_0x136308(_0x1c4c3d = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0x234fd5 = 0) {
  return _0x1c4c3d.replace(/[xy]/g, function (_0x54e042) {
    var _0x367f80 = 16 * Math.random() | 0,
      _0x313263 = "x" == _0x54e042 ? _0x367f80 : 3 & _0x367f80 | 8;
    uuid = _0x234fd5 ? _0x313263.toString(36).toUpperCase() : _0x313263.toString(36);
    return uuid;
  });
}
function proenv_0x49150d(_0x252746, _0x3c7dd1) {
  return Math.floor(Math.random() * (_0x3c7dd1 - _0x252746)) + _0x252746;
}
function proenv_0x17df44(_0x5b698d) {
  if (_0x5b698d.status == 200 && _0x5b698d.data) {
    _0x5b698d = _0x5b698d.data;
    if (typeof _0x5b698d == "object") {
      return JSON.stringify(_0x5b698d);
    } else {
      return _0x5b698d;
    }
  } else {
    return "";
  }
}
async function proenv_0x2a0dea(_0x1d7228, _0x11f637) {
  const _0x13d6a8 = {
    "User-Agent": "jdapp;android;11.3.4;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36"
  };
  const _0x5e52c3 = {
    url: "http://hz.feverrun.top:99/share/card/getSign",
    body: "fn=" + _0x1d7228 + "&body=" + JSON.stringify(_0x11f637),
    headers: _0x13d6a8,
    timeout: 30000
  };
  myRequest = _0x5e52c3;
  return proenv_0x25cac0.post(myRequest.url, myRequest.body, {
    headers: myRequest.headers,
    timeout: myRequest.timeout
  }).then(function (_0xef04a9) {
    try {
      data = _0xef04a9.data;
    } catch (_0x5bf4ae) {
      data = "";
    }
    return data;
  }).catch(async function (_0x22d440) {
    console.log("错误码:" + _0x22d440.code);
    if (_0x22d440.code == "ECONNABORTED") {
      await proenv_0x2a0dea(_0x1d7228, _0x11f637);
    }
    if (_0x22d440.code == "ECONNRESET") {
      await proenv_0x2a0dea(_0x1d7228, _0x11f637);
    }
  });
}
async function proenv_0xbfe2ef() {
  return new Promise(async _0x3075bc => {
    try {
      await $.wait(parseInt(Math.random() * 250 + 150, 10));
      let _0x3d821e = await proenv_0x36aa45();
      if (_0x3d821e != "") {
        $.getIpStatus = true;
        console.log("当前: " + _0x3d821e);
        ips = _0x3d821e.split(":");
        $.ip = ips[0];
        $.ipo = ips[1];
        await $.wait(parseInt(Math.random() * 250 + 150, 10));
      } else {
        $.getIpStatus = false;
        console.log("代理获取失败");
      }
    } catch (_0x3130a4) {
      $.getIpStatus = false;
      console.log("代理获取失败");
    }
    if ($.getIpStatus == false) {
      try {
        await $.wait(parseInt(Math.random() * 250 + 150, 10));
        let _0x2b78dd = await proenv_0x36aa45();
        if (_0x2b78dd != "") {
          $.getIpStatus = true;
          console.log("当前: " + _0x2b78dd);
          ips = _0x2b78dd.split(":");
          $.ip = ips[0];
          $.ipo = ips[1];
          await $.wait(parseInt(Math.random() * 250 + 150, 10));
        } else {
          $.getIpStatus = false;
          console.log("代理获取失败");
        }
      } catch (_0x4ca18b) {
        $.getIpStatus = false;
        console.log("代理获取失败");
      }
    }
    if ($.getIpStatus == false) {
      console.log("代理获取失败，跳过此次执行！");
      _0x3075bc(false);
    } else {
      _0x3075bc(true);
    }
  });
}
function proenv_0x36aa45() {
  try {
    return new Promise(_0x2a4c30 => {
      const _0x58701e = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/538.38"
      };
      const _0x475d23 = {
        url: your_proxy_url,
        headers: _0x58701e,
        timeout: 30000
      };
      $.get(_0x475d23, (_0x1886e9, _0x2a1e94, _0x5cf529) => {
        try {
          if (_0x1886e9) {
            console.log("获取Ip失败");
          } else {
            try {
              if (_0x5cf529.indexOf("\r\n") > -1) {
                _0x5cf529 = _0x5cf529.split("\r\n");
                if (_0x5cf529.length >= 1) {
                  _0x5cf529 = _0x5cf529[0];
                }
              } else {
                if (_0x5cf529.indexOf("\n") > -1) {
                  _0x5cf529 = _0x5cf529.split("\n");
                  if (_0x5cf529.length >= 1) {
                    _0x5cf529 = _0x5cf529[0];
                  }
                } else {
                  if (_0x5cf529.indexOf("\r") > -1) {
                    _0x5cf529 = _0x5cf529.split("\r");
                    if (_0x5cf529.length >= 1) {
                      _0x5cf529 = _0x5cf529[0];
                    }
                  } else {
                    if (_0x5cf529.indexOf("\t") > -1) {
                      _0x5cf529 = _0x5cf529.split("\t");
                      if (_0x5cf529.length >= 1) {
                        _0x5cf529 = _0x5cf529[0];
                      }
                    }
                  }
                }
              }
            } catch (_0x1996e3) {
              _0x5cf529 = "";
            }
          }
        } catch (_0x23457f) {} finally {
          _0x2a4c30(_0x5cf529 || "");
        }
      });
    });
  } catch (_0xb83e52) {
    console.log(_0xb83e52.message);
  }
}
async function proenv_0x3beb2b() {
  if ($.isNode()) {
    if (message) {
      $.msg($.name, "", "【京东账号" + $.index + "】" + $.UserName + " " + message + " \n");
      allMessage += "【京东账号" + $.index + "】" + $.UserName + " " + message + ($.index !== proenv_0x5d5293.length ? "\n" : "");
    } else {
      allMessage += "";
    }
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