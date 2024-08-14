const middleware = require("./middleware.js"),
  axios = require("axios"),
  FormData = require("form-data"),
  path = require("path"),
  senderID = middleware.getSenderID(),
  s = new middleware.Sender(senderID);
class AutAPI {
  constructor(_0x25a3a7, _0x6e81b8, _0x4ba4b7) {
    const _0x35b2db = {
      "Accept": "application/json, text/plain, */*",
      "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
      "Accept-Encoding": "gzip, compress, deflate, br"
    };
    this.get_instructions = () => {
      return _0x459f1d("get_instructions", {
        "url": this.host + "/open/instructions",
        "method": "get"
      });
    };
    this.get_gallery = () => {
      return _0x459f1d("get_instructions", {
        "url": this.host + "/open/gallery",
        "method": "get"
      });
    };
    this.post_gallery = _0x24d65e => {
      var _0x24d65e = new FormData();
      return _0x24d65e.append("imgfile", _0x24d65e), _0x459f1d("post_gallery", {
        "url": this.host + "/open/gallery",
        "method": "post",
        "data": _0x24d65e
      });
    };
    this.get_log = _0xf0c790 => {
      const _0x30b719 = /(?<=\/autMan\/task\/logs\/).*/.exec(_0xf0c790);
      if (Array.isArray(_0x30b719)) {
        const _0x29c646 = _0x30b719[0].split("/"),
          _0x3d2663 = encodeURIComponent(_0x29c646.pop()),
          _0x3f3b08 = encodeURIComponent(_0x29c646.join("/"));
        return _0x459f1d("get_log", {
          "url": this.host + "/open/logs/" + _0x3d2663 + "?path=" + _0x3f3b08,
          "method": "get"
        });
      } else return rebug("【AutAPI】 get_log: 路径错误：" + _0xf0c790, false);
    };
    this.get_logs_memu = () => {
      return _0x459f1d("get_logs_memu", {
        "url": this.host + "/open/logs/memu",
        "method": "get"
      });
    };
    this.require = async (..._0x18cca7) => {
      const _0x4eb9f1 = new Array();
      for (let _0x8b864f of _0x18cca7) {
        let _0x2acdfb;
        try {
          _0x2acdfb = require(_0x8b864f);
          rebug("【AutAPI】 载入模块: " + _0x8b864f, true);
        } catch (_0x36a15a) {
          _0x2acdfb = null;
          rebug("【AutAPI】 载入模块失败，尝试安装: " + _0x8b864f);
          if (_0x36a15a.code == "MODULE_NOT_FOUND") {
            await s.reply("尝试安装依赖: " + _0x8b864f);
            let _0x480ecc = await this.post_dependencies([{
              "name": _0x8b864f,
              "type": "nodejs"
            }]);
            if (_0x480ecc.code == 200) {
              await s.reply("开始安装");
              for (let _0x1357d8 = 1; _0x1357d8 <= 3; _0x1357d8++) {
                console.log(await sleep(5));
                await s.reply("依赖安装中 " + ".".repeat(_0x1357d8));
                _0x480ecc = await this.get_dependencies(_0x8b864f);
                rebug("【 AutAPI 】require: 查询依赖安装结果: " + JSON.stringify(_0x480ecc));
                if (_0x480ecc.code == 200) {
                  if (_0x480ecc.data[0].status == 1) {
                    await s.reply("依赖安装成功: " + _0x8b864f);
                    break;
                  }
                } else {
                  await s.reply("依赖状态检测失败, 跳过");
                  break;
                }
              }
              if (_0x480ecc.data[0].status != 1) await s.reply("依赖安装失败");
            } else await s.reply("依赖安装失败，跳过");
          } else rebug(JSON.stringify(_0x36a15a)), await s.reply("加载依赖失败，未知错误");
        }
        _0x4eb9f1.push(_0x2acdfb);
      }
      return _0x4eb9f1;
    };
    this.post_dependencies = _0x53bf6e => {
      return _0x459f1d("post_dependencies", {
        "url": this.host + "/open/dependencies",
        "method": "post",
        "data": _0x53bf6e
      });
    };
    this.get_dependencies = (_0x48807e = "") => {
      return _0x459f1d("get_dependencies", {
        "url": this.host + "/open/dependencies?searchValue=" + _0x48807e,
        "method": "get"
      });
    };
    this.get_dependencies_log = _0x378372 => {
      return _0x459f1d("get_dependencies_log", {
        "url": this.host + "/open/dependencies/" + _0x378372 + "/log",
        "method": "get"
      });
    };
    this.get_users = () => {
      return _0x459f1d("get_users", {
        "url": this.host + "/open/users?searchValue=",
        "method": "get"
      });
    };
    this.put_users = _0x1ffad7 => {
      return s.reply(JSON.stringify(_0x1ffad7)), _0x459f1d("put_users", {
        "url": this.host + "/open/users",
        "method": "PUT",
        "data": JSON.stringify(_0x1ffad7)
      });
    };
    this.get_nameids = (_0x4bd403 = "", _0x24bace = "", _0x33daea = "") => {
      return _0x459f1d("get_nameids", {
        "url": this.host + "/open/nameids?searchValue=" + _0x4bd403 + "&page=" + _0x24bace + "&pageSize=" + _0x33daea,
        "method": "get"
      });
    };
    this.get_varckmaps = (_0x631589 = null) => {
      return _0x459f1d("get_varckmaps", {
        "url": this.host + "/open/varckmaps" + (_0x631589 ? "/" + _0x631589 : ""),
        "method": "get"
      });
    };
    this.post_varckmaps = _0x217b7d => {
      return _0x459f1d("post_varckmaps", {
        "url": this.host + "/open/varckmaps",
        "method": "post",
        "data": _0x217b7d
      });
    };
    this.put_varckmaps = _0x4e0af9 => {
      return _0x459f1d("put_varckmaps", {
        "url": this.host + "/open/varckmaps",
        "method": "put",
        "data": _0x4e0af9
      });
    };
    this.put_varckmaps = _0x38966c => {
      return _0x459f1d("put_varckmaps", {
        "url": this.host + "/open/varckmaps/" + _0x38966c,
        "method": "put"
      });
    };
    this.delete_varckmaps = _0x1747cc => {
      return _0x459f1d("delete_varckmaps", {
        "url": this.host + "/open/varckmaps",
        "method": "delete",
        "data": _0x1747cc
      });
    };
    this.get_croncmds = (_0x2a18c5 = "") => {
      return _0x459f1d("get_croncmds", {
        "url": this.host + "/open/croncmds?searchValue=" + _0x2a18c5,
        "method": "get"
      });
    };
    this.get_croncmd_by_id = _0x3f8c65 => {
      return _0x459f1d("get_croncmd_by_id", {
        "url": this.host + "/open/croncmds/" + _0x3f8c65,
        "method": "get"
      });
    };
    this.put_croncmds = _0x133988 => {
      const {
        id: _0x3f8268,
        disable: _0xd4748f,
        cron: _0x5465e5,
        cmd: _0x40683c,
        to_self: _0x5994e,
        disguise_imtype: _0x60f7dd,
        disguise_group: _0x4014b6,
        disguise_user: _0x3002a3,
        to_others: _0x341654,
        memo: _0x32e74d
      } = _0x133988;
      return _0x459f1d("put_croncmds", {
        "url": this.host + "/open/croncmds",
        "method": "PUT",
        "data": {
          "id": _0x3f8268,
          "disable": _0xd4748f,
          "cron": _0x5465e5,
          "cmd": _0x40683c,
          "to_self": _0x5994e,
          "disguise_imtype": _0x60f7dd,
          "disguise_group": _0x4014b6,
          "disguise_user": _0x3002a3,
          "to_others": _0x341654,
          "memo": _0x32e74d
        }
      });
    };
    this.post_croncmds = (_0x2a89d2 = {
      "cron": cron,
      "cmd": cmd,
      "to_self": to_self,
      "to_others": to_others,
      "memo": memo
    }) => {
      return _0x459f1d("post_croncmds", {
        "url": this.host + "/open/croncmds",
        "method": "POST",
        "data": _0x2a89d2
      });
    };
    this.del_croncmds = (_0x14a33e = []) => {
      return _0x459f1d("del_croncmds", {
        "url": this.host + "/open/croncmds",
        "method": "DELETE",
        "data": _0x14a33e
      });
    };
    this.post_encrypt = _0x4705da => {
      return _0x459f1d("post_encrypt", {
        "url": this.host + "/open/js/encrypt",
        "method": "post",
        "data": JSON.stringify(_0x4705da)
      });
    };
    function _0x5cc034(_0x3530d7, _0x5aa2de, _0xccbfd8) {
      return _0x459f1d("get_token", {
        "url": _0x3530d7 + "/open/auth/token?client_id=" + _0x5aa2de + "&client_secret=" + _0xccbfd8,
        "method": "get"
      });
    }
    function _0x459f1d(_0x15b499, _0x3cb619) {
      return axios({
        ...{
          "headers": _0x35b2db,
          "redirect": "follow",
          "responseType": "json"
        },
        ..._0x3cb619
      }).then(({
        data: {
          message: _0x382afe,
          code: _0x4e635d,
          data: _0x30f709
        }
      }) => {
        return rebug("【AutAPI】 " + _0x15b499 + ": " + _0x4e635d + " - \"" + (_0x382afe ? _0x382afe : "") + "\"", true, _0x4e635d, _0x30f709);
      }).catch(_0x53442f => {
        return rebug("【AutAPI】 " + _0x15b499 + ": " + (_0x53442f.status || _0x53442f.code) + " - " + (_0x53442f.name + ": " || "") + (_0x53442f.statusText || _0x53442f.message || _0x53442f.msg || ""), false, _0x53442f.status, _0x53442f.stack || _0x53442f.data || null);
      });
    }
    return new Promise(async (_0x3ba6cd, _0x20286d) => {
      this.host = _0x25a3a7 || (await middleware.bucketGet("jusapi", "host"));
      this.client_id = _0x6e81b8 || (await middleware.bucketGet("jusapi", "client_id"));
      this.client_secret = _0x4ba4b7 || (await middleware.bucketGet("jusapi", "client_secret"));
      (!this.host || !this.client_id || !this.client_secret) && (console.error("【jusapi】请设置配参"), process.exit());
      await _0x5cc034(this.host, this.client_id, this.client_secret).then(_0x46a043 => {
        if (_0x46a043.success) _0x35b2db.Authorization = (_0x46a043.data.token_type || "") + " " + (_0x46a043.data.token || "");else _0x35b2db.Authorization = undefined;
        rebug("【AutAPI】 " + this.host + " - " + _0x35b2db.Authorization, true);
        _0x3ba6cd(this);
      }).catch(_0x20286d);
    });
  }
}
class QingLong {
  constructor(..._0x596a9a) {
    if (_0x596a9a.length == 3) var [_0x37d84c, _0x206633, _0x39fa17] = _0x596a9a;else {
      if (_0x596a9a.length == 1 && ["host", "client_id", "client_secret"].every(_0x527d8a => _0x527d8a in _0x596a9a[0])) {
        var {
          host: _0x37d84c,
          client_id: _0x206633,
          client_secret: _0x39fa17
        } = _0x596a9a[0];
      } else {
        console.error("【QingLong】输入参数有误:", JSON.stringify(_0x596a9a));
        throw new Error("青龙链接失败，详见实时日志");
      }
    }
    if (!(_0x37d84c && _0x206633 && _0x39fa17)) {
      console.error("【QingLong】输入参数有误:", JSON.stringify(_0x596a9a));
      throw new Error("青龙链接失败，详见实时日志");
    }
    const _0xd4a2e4 = new Object({
      "Content-Type": "application/json;charset=UTF-8"
    });
    this.getCrons = function (_0x1e2456 = "") {
      return rebug("【jusapi】【QingLong】搜索定时任务：" + (_0x1e2456 ? _0x1e2456 : "ALL")), request({
        "url": _0x37d84c + "/open/crons?searchValue=" + encodeURIComponent(_0x1e2456) + "&t=" + Date.now(),
        "method": "get",
        "headers": _0xd4a2e4
      }, function (_0x28356f, _0xd60fa6) {
        if (_0x28356f != null) return rebug("【jusapi】【QingLong】搜索任务失败A：" + url + "\n" + JSON.stringify(_0x28356f)), false;
        if (_0xd60fa6.statusCode != 200) return rebug("【jusapi】【QingLong】搜索任务失败B：" + _0xd60fa6.body), false;
        const _0x43246d = JSON.parse(_0xd60fa6.body);
        if (_0x43246d.code != 200) return rebug("【jusapi】【QingLong】搜索任务失败C：" + _0x43246d.message), false;
        if (_0x43246d.data == null) return rebug("【jusapi】【QingLong】搜索任务失败D：api返回：null"), false;
        if (Array.isArray(_0x43246d.data.data)) return rebug("【jusapi】【QingLong】新版搜索任务成功：" + _0x43246d.data.total + " 条记录"), _0x43246d.data.data;else {
          if (Array.isArray(_0x43246d.data)) return rebug("【jusapi】【QingLong】旧版搜索任务成功：" + _0x43246d.data.length + " 条记录"), _0x43246d.data;
        }
      });
    };
    this.saveCron = function (_0x368851) {
      return delete _0x368851.createdAt, delete _0x368851.isDisabled, delete _0x368851.isSystem, delete _0x368851.isPinned, delete _0x368851.last_execution_time, delete _0x368851.last_running_time, delete _0x368851.log_path, delete _0x368851.status, delete _0x368851.timestamp, delete _0x368851.updatedAt, delete _0x368851.pid, delete _0x368851.saved, request({
        "url": _0x37d84c + "/open/crons?t=" + Date.now(),
        "method": "PUT",
        "body": _0x368851,
        "headers": _0xd4a2e4,
        "dataType": "json"
      }, function (_0x903342, _0x3a120b, _0x363621, _0x280cb5) {
        if (_0x903342 != null) return rebug("【jusapi】【QingLong】修改任务失败A：" + url + "\n" + JSON.stringify(_0x903342));
        if (_0x3a120b.statusCode != 200) return rebug("【jusapi】【QingLong】修改任务失败B：" + _0x280cb5.validation.body.message);
        if (_0x280cb5.code != 200) return rebug("【jusapi】【QingLong】修改任务失败C：" + _0x280cb5.message);
        return rebug("【jusapi】【QingLong】修改任务成功：" + _0x280cb5.code, true);
      });
    };
    this.runCrons = function (_0x6ef74e = new Array()) {
      return rebug("【jusapi】【QingLong】运行定时任务：" + _0x6ef74e.toString()), request({
        "url": _0x37d84c + "/open/crons/run?t=" + Date.now(),
        "method": "PUT",
        "body": _0x6ef74e,
        "headers": _0xd4a2e4
      }, function (_0x54cd0d, _0x5a0506) {
        if (_0x54cd0d != null) return rebug("【jusapi】【QingLong】运行任务失败A：" + url + "\n" + JSON.stringify(_0x54cd0d)), false;
        if (_0x5a0506.statusCode != 200) return rebug("【jusapi】【QingLong】运行任务失败B：" + _0x5a0506.body), false;
        const _0x5581cc = JSON.parse(_0x5a0506.body);
        if (_0x5581cc.code != 200) return rebug("【jusapi】【QingLong】运行任务失败C：" + _0x5581cc.message), false;
        return rebug("【jusapi】【QingLong】运行任务成功：" + _0x5581cc.code, true);
      });
    };
    this.stopCrons = function (_0x2f7d9c = new Array()) {
      return rebug("【jusapi】【QingLong】终止定时任务：" + _0x2f7d9c.toString()), request({
        "url": _0x37d84c + "/open/crons/stop?t=" + Date.now(),
        "method": "PUT",
        "body": _0x2f7d9c,
        "headers": _0xd4a2e4
      }, function (_0x2085c3, _0x4a786e) {
        if (_0x2085c3 != null) return rebug("【jusapi】【QingLong】终止任务失败A：" + url + "\n" + JSON.stringify(_0x2085c3)), false;
        if (_0x4a786e.statusCode != 200) return rebug("【jusapi】【QingLong】终止任务失败B：" + _0x4a786e.body), false;
        const _0xf18afc = JSON.parse(_0x4a786e.body);
        if (_0xf18afc.code != 200) return rebug("【jusapi】【QingLong】终止任务失败C：" + _0xf18afc.message), false;
        return rebug("【jusapi】【QingLong】终止任务成功：" + _0xf18afc.code), false;
      });
    };
    this.getFiles = function (_0x54b6a1 = null) {
      return rebug("【jusapi】【QingLong】获取脚本：" + (_0x54b6a1 ? _0x54b6a1 : "ALL")), request({
        "url": _0x37d84c + "/open/scripts?t=" + Date.now(),
        "method": "GET",
        "headers": _0xd4a2e4,
        "dataType": "json"
      }, function (_0x28766d, _0x3e5ce5, _0x5355d5, _0x21ca88) {
        if (_0x28766d != null) return rebug("【jusapi】【QingLong】获取文件列表失败A：" + url + "\n" + JSON.stringify(_0x28766d));
        if (_0x3e5ce5.statusCode != 200) return rebug("【jusapi】【QingLong】获取文件列表失败B：" + _0x21ca88.message);
        if (_0x21ca88.code != 200) {
          return rebug("【jusapi】【QingLong】获取文件列表失败C：" + _0x21ca88.message);
        }
        if (_0x54b6a1) {
          const _0x3ac98e = _0x54b6a1.split("/");
          let _0x49f496 = _0x21ca88.data;
          return _0x3ac98e.forEach(_0x4e76df => {
            if (_0x49f496.children) _0x49f496 = _0x49f496.children;
            _0x49f496 = _0x49f496.filter(_0x51e17b => {
              return _0x51e17b.key.includes(_0x4e76df);
            })[0];
          }), rebug("【jusapi】【QingLong】搜索文件成功：[" + _0x21ca88.code + "]" + JSON.stringify(_0x49f496), true, [_0x49f496]);
        } else return rebug("【jusapi】【QingLong】获取文件列表成功：" + _0x21ca88.code, true, _0x21ca88.data);
      });
    };
    this.getFile = function (_0x16ec67) {
      const _0x2ea51c = _0x16ec67.split("/"),
        _0x49727e = _0x2ea51c[_0x2ea51c.length - 1];
      _0x2ea51c.pop();
      const _0x2a6595 = _0x2ea51c.join("/");
      return rebug("【jusapi】【QingLong】getFile获取文件内容：" + _0x2a6595 + "/" + _0x49727e), request({
        "url": _0x37d84c + "/open/scripts/" + _0x49727e + "?path=" + _0x2a6595 + "&t=" + Date.now(),
        "method": "GET",
        "headers": _0xd4a2e4,
        "dataType": "json"
      }, function (_0x16637f, _0xaf9671, _0x3165eb, _0x321fb9) {
        if (_0x16637f != null) return rebug("【jusapi】【QingLong】getFile获取文件内容失败A：" + url + "\n" + JSON.stringify(_0x16637f));
        if (_0xaf9671.statusCode != 200) return rebug("【jusapi】【QingLong】getFile获取文件内容失败B：" + _0x321fb9.message);
        if (_0x321fb9.code != 200) {
          return rebug("【jusapi】【QingLong】getFile获取文件内容失败C：" + _0x321fb9.message);
        }
        return rebug("【jusapi】【QingLong】getFile获取文件内容成功：" + _0x321fb9.code, true, _0x321fb9.data);
      });
    };
    this.saveFile = function (_0x36acd9, _0x572b10) {
      rebug("【jusapi】【QingLong】修改文件内容：" + _0x36acd9);
      const _0x34a631 = _0x36acd9.split("/"),
        _0x4d7004 = _0x34a631[_0x34a631.length - 1];
      _0x34a631.pop();
      const _0x5dcb46 = _0x34a631.join("/");
      return rebug("【jusapi】【QingLong】修改文件内容：" + _0x5dcb46 + "/" + _0x4d7004), request({
        "url": _0x37d84c + "/open/scripts?t=" + Date.now(),
        "method": "PUT",
        "headers": _0xd4a2e4,
        "body": {
          "filename": _0x4d7004,
          "path": _0x5dcb46,
          "content": _0x572b10
        },
        "dataType": "json"
      }, function (_0x3f4e4b, _0x8ce5d7, _0x36bdf6, _0x51ad2b) {
        if (_0x3f4e4b != null) return rebug("【jusapi】【QingLong】修改文件内容失败A：" + url + "\n" + JSON.stringify(_0x3f4e4b));
        if (_0x8ce5d7.statusCode != 200) return rebug("【jusapi】【QingLong】修改文件内容失败B：" + _0x51ad2b.message);
        if (_0x51ad2b.code != 200) return rebug("【jusapi】【QingLong】修改文件内容失败C：" + _0x51ad2b.message);
        return rebug("【jusapi】【QingLong】修改文件内容成功：" + _0x51ad2b.code, true, _0x51ad2b.data);
      });
    };
    this.getEnvs = function (_0x5afe5c = "") {
      return _0x4d89aa({
        "url": _0x37d84c + "/open/envs?searchValue=" + encodeURIComponent(_0x5afe5c) + "&t=" + Date.now()
      });
    };
    this.createEnvs = function (..._0x248a19) {
      let _0x2a6804;
      if (_0x248a19.length == 3 && _0x248a19.every(_0x5b47d1 => typeof _0x5b47d1 == "string" || typeof _0x5b47d1 == "number")) {
        let [_0x1c2f44, _0x369067, _0x5c0b08] = _0x248a19;
        _0x2a6804 = [{
          "name": _0x1c2f44,
          "value": _0x369067,
          "remarks": _0x5c0b08
        }];
      } else {
        if (_0x248a19.every(_0x49aef5 => Array.isArray(_0x49aef5) && _0x49aef5.every(_0x496b9b => Object.keys(_0x496b9b).every(_0xf1cc94 => ["name", "value", "remarks"].includes(_0xf1cc94))))) _0x2a6804 = _0x248a19.flat();else {
          if (_0x248a19.every(_0x3218d0 => typeof _0x3218d0 == "object" && Object.keys(_0x3218d0).every(_0x32b707 => ["name", "value", "remarks"].includes(_0x32b707)))) _0x2a6804 = _0x248a19;else return rebug("【QingLong/createEnvs】入参有误: " + JSON.stringify(_0x248a19));
        }
      }
      return _0x4d89aa({
        "url": _0x37d84c + "/open/envs?t=" + Date.now(),
        "method": "post",
        "data": _0x2a6804
      });
    };
    this.putEnv = function (..._0x30325b) {
      let _0x23344a;
      if (_0x30325b.length == 4 && _0x30325b.every(_0x129a95 => typeof _0x129a95 == "string" || typeof _0x129a95 == "number")) _0x23344a = {
        "id": _0x30325b[0],
        "name": _0x30325b[1],
        "value": _0x30325b[2],
        "remarks": _0x30325b[3]
      };else {
        if (_0x30325b.length == 1 && ["id", "name", "value", "remarks"].every(_0x19c596 => Object.keys(_0x30325b[0]).includes(_0x19c596))) _0x23344a = {
          "id": _0x30325b[0].id,
          "name": _0x30325b[0].name,
          "value": _0x30325b[0].value,
          "remarks": _0x30325b[0].remarks
        };else return rebug("【QingLong/putEnv】入参有误: " + JSON.stringify(_0x30325b));
      }
      return _0x4d89aa({
        "url": _0x37d84c + "/open/envs?t=" + Date.now(),
        "method": "put",
        "data": _0x23344a
      });
    };
    this.delEnvs = function (..._0x51525b) {
      let _0x487886;
      if (_0x51525b.every(_0x55984d => typeof _0x55984d == "number" || typeof _0x55984d == "string" && _0x55984d + 1)) _0x487886 = _0x51525b;else {
        if (_0x51525b.length == 1 && typeof _0x51525b[0] == "string" && /^\d+(,\d+)*$/.test(_0x51525b[0])) _0x487886 = _0x51525b[0].split(",");else {
          if (_0x51525b.length == 1 && Array.isArray(_0x51525b[0]) && _0x51525b[0].every(_0x418809 => typeof _0x418809 == "number" || typeof +_0x418809 == "number")) _0x487886 = _0x51525b[0];else return rebug("【QingLong/delEnvs】入参有误: " + JSON.stringify(_0x51525b));
        }
      }
      return _0x4d89aa({
        "url": _0x37d84c + "/open/envs?t=" + Date.now(),
        "method": "delete",
        "data": JSON.stringify(_0x487886)
      });
    };
    this.getLogsByName = function (_0x11880b) {
      const _0x567557 = _0x3b03fc();
      if (_0x567557 == false) return false;
      if (_0x567557.length == 0) {
        rebug("【jusapi】【QingLong】获取日志列表为空");
      }
      const _0x5e35fe = new Array();
      return this.version > 21500 ? (rebug("【jusapi】【QingLong】新版青龙搜索日志：" + _0x11880b), _0x567557.forEach(_0x144d41 => {
        Array.isArray(_0x144d41.children) && _0x144d41.children.forEach(_0x2b7945 => {
          _0x2b7945.parent.includes(_0x11880b) && _0x5e35fe.push({
            "parent": _0x2b7945.parent,
            "title": _0x2b7945.title
          });
        });
      })) : (rebug("【jusapi】【QingLong】旧版青龙搜索日志：" + _0x11880b), _0x567557.forEach(_0x412a37 => {
        Array.isArray(_0x412a37.files) && _0x412a37.files.forEach(_0x26df5b => {
          if (_0x26df5b.parent.includes(_0x11880b)) {
            _0x5e35fe.push({
              "parent": _0x412a37.name,
              "title": _0x26df5b
            });
          }
        });
      })), rebug("【jusapi】【QingLong】搜索日志：" + _0x11880b + "，共找到 " + _0x5e35fe.length + " 条记录"), _0x5e35fe;
    };
    this.getLog = function (_0x4ab3f8, _0x595036) {
      let _0x3cf2a9 = _0x37d84c + "/open/logs/";
      return this.version > 21500 ? (rebug("【jusapi】【QingLong】获取新版青龙日志：" + _0x4ab3f8 + "/" + _0x595036), _0x3cf2a9 += _0x595036 + "?path=" + _0x4ab3f8 + "&t=" + Date.now()) : (rebug("【jusapi】【QingLong】获取旧版青龙日志：" + _0x4ab3f8 + "/" + _0x595036), _0x3cf2a9 += _0x4ab3f8 + "/" + _0x595036 + "?t=" + Date.now()), request({
        "url": _0x3cf2a9,
        "method": "get",
        "headers": _0xd4a2e4
      }, function (_0x260d1d, _0x170ee0) {
        if (_0x260d1d != null) return rebug("【jusapi】【QingLong】获取日志失败A：" + _0x3cf2a9 + "\n" + JSON.stringify(_0x260d1d)), false;
        if (_0x170ee0.statusCode != 200) return rebug("【jusapi】【QingLong】获取日志失败B：" + _0x170ee0.body), false;
        const _0x86dd4a = JSON.parse(_0x170ee0.body);
        if (_0x86dd4a.code != 200) return rebug("【jusapi】【QingLong】获取日志失败C：" + _0x86dd4a.message), false;
        if (_0x86dd4a.data == null) return rebug("【jusapi】【QingLong】获取日志失败D：api返回：null"), false;
        return rebug("【QingLong】获取日志成功"), _0x86dd4a.data;
      });
    };
    function _0x3b03fc() {
      return rebug("【jusapi】【QingLong】获取日志列表"), request({
        "url": _0x37d84c + "/open/logs?t=" + Date.now(),
        "method": "get",
        "headers": _0xd4a2e4
      }, function (_0x544f4c, _0x1ea093) {
        if (_0x544f4c != null) {
          return rebug("【jusapi】【QingLong】获取日志列表失败A：" + url + "\n" + JSON.stringify(_0x544f4c)), false;
        }
        if (_0x1ea093.statusCode != 200) return rebug("【jusapi】【QingLong】获取日志列表失败B：" + _0x1ea093.body), false;
        const _0x400ed5 = JSON.parse(_0x1ea093.body);
        if (_0x400ed5.code != 200) return rebug("【jusapi】【QingLong】获取日志列表失败C：" + _0x400ed5.message), false;
        if (Array.isArray(_0x400ed5.data)) return rebug("【jusapi】【QingLong】新版青龙获取日志列表成功：" + _0x400ed5.data.length + " 个脚本合集"), _0x400ed5.data;else {
          if (Array.isArray(_0x400ed5.dirs)) return rebug("【jusapi】【QingLong】旧版青龙获取日志列表成功：" + _0x400ed5.dirs.length + " 个脚本合集"), _0x400ed5.dirs;
        }
      });
    }
    function _0x554837(_0x5424e2, _0x58db1e, _0x23805e) {
      return _0x4d89aa({
        "url": _0x5424e2 + "/open/auth/token?client_id=" + _0x58db1e + "&client_secret=" + _0x23805e
      });
    }
    function _0x584090() {
      return _0x4d89aa({
        "url": _0x37d84c + "/open/system"
      });
    }
    function _0x4d89aa(_0x18389f) {
      return _0x18389f.headers = {
        ..._0xd4a2e4,
        ..._0x18389f.headers
      }, axios({
        ...{
          "method": "get",
          "timeout": 3000
        },
        ..._0x18389f
      }).then(({
        status: _0x454d71,
        statusText: _0x43dd96,
        headers: _0x56b1ab,
        config: _0x42ae8b,
        request: _0x31c190,
        data: _0x45e3b8
      }) => rebug("【QingLong/" + _0x42ae8b.method + "/" + new URL(_0x42ae8b.url).pathname.split("/").pop() + "】" + (_0x45e3b8?.["code"] || _0x454d71) + " - " + _0x43dd96, true, _0x454d71, _0x45e3b8?.["data"] || _0x45e3b8)).catch(({
        message: _0xf7038,
        name: _0x32f369,
        code: _0x2bf75b,
        config: _0x540526,
        request: _0x1ed7ce,
        response: _0x1c01b1
      }) => rebug("【QingLong/" + _0x540526.method + "/" + new URL(_0x540526.url).pathname.split("/").pop() + "】[" + _0x32f369 + "]" + (_0x1c01b1?.["data"]?.["code"] || _0x1c01b1?.["status"] || _0x2bf75b) + " - " + (_0x1c01b1?.["data"]?.["message"] || _0x1c01b1?.["statusText"] || _0xf7038), false, _0x1c01b1?.["data"]?.["code"] || _0x1c01b1?.["status"] || _0x2bf75b, _0x1c01b1?.["data"]));
    }
    return new Promise(async (_0x2c60d2, _0x552403) => {
      rebug("【QingLong】连接青龙：" + _0x37d84c, 1);
      await _0x554837(_0x37d84c, _0x206633, _0x39fa17).then(_0x3bcdd9 => {
        if (_0x3bcdd9.code !== 200) _0x552403(_0x3bcdd9.message);
        this.host = _0x37d84c;
        _0xd4a2e4.Authorization = _0x3bcdd9.data?.["token_type"] + " " + _0x3bcdd9.data?.["token"];
        _0x584090().then(({
          message: _0x100c20,
          success: _0x2deb29,
          code: _0x5e5356,
          data: _0x86a41b
        }) => {
          if (_0x5e5356 !== 200) _0x552403(_0x100c20);
          this.isInitialized = _0x86a41b?.["isInitialized"];
          this.version = _0x86a41b?.["version"];
          this.publishTime = _0x86a41b?.["publishTime"];
          this.branch = _0x86a41b?.["branch"];
          this.changeLog = _0x86a41b?.["changeLog"];
          this.changeLogLink = _0x86a41b?.["changeLogLink"];
          _0x2c60d2(this);
        });
      });
    });
  }
}
async function getQLS(_0x43fa7a = null) {
  let _0x14a063 = new Array(),
    _0x3beb65 = await middleware.bucketAllKeys("qls");
  if (Array.isArray(_0x3beb65) && _0x3beb65.length) {
    for (let _0x231866 of _0x3beb65) _0x14a063.push(JSON.parse(await middleware.bucketGet("qls", _0x231866)));
  } else try {
    _0x14a063 = JSON.parse(await middleware.bucketGet("qinglong", "QLS"));
  } catch (_0x2feb54) {
    throw new Error("【jusapi】【getQLS】青龙列表读取错误，请检查系统配置\n .");
  }
  return rebug("【getQLS】查找青龙：" + (_0x43fa7a ? _0x43fa7a : "ALL"), true, 1, _0x43fa7a ? _0x14a063.filter(_0x41f105 => _0x41f105.name.includes(_0x43fa7a)) : _0x14a063);
}
class DDDDOCR {
  constructor(_0x17740b = null) {
    this.capcode = function (_0x5063b1 = {
      "slidingImage": null,
      "backImage": null
    }) {
      return _0x353c29({
        "url": this.host + "/capcode",
        "method": "post",
        "data": _0x5063b1
      });
    };
    this.classification = function (_0x10344d = {
      "image": null
    }) {
      return _0x353c29({
        "url": this.host + "/classification",
        "method": "post",
        "data": _0x10344d
      });
    };
    this.detection = function (_0x4d9c4e = {
      "image": null
    }) {
      return _0x353c29({
        "url": this.host + "/detection",
        "method": "post",
        "data": _0x4d9c4e
      });
    };
    this.calculate = function (_0x35de15 = {
      "image": null
    }) {
      return _0x353c29({
        "url": this.host + "/calculate",
        "method": "post",
        "data": _0x35de15
      });
    };
    this.slideComparison = function (_0x27f143 = {
      "slidingImage": null,
      "backImage": null
    }) {
      return _0x353c29({
        "url": this.host + "/slideComparison",
        "method": "post",
        "data": _0x27f143
      });
    };
    this.crop = function (_0x52b817 = {
      "image": null,
      "y_coordinate": null
    }) {
      return _0x353c29({
        "url": this.host + "/crop",
        "method": "post",
        "data": _0x52b817
      });
    };
    function _0x353c29(_0x507dd6) {
      return _0x507dd6.headers = {
        ...{
          "Content-Type": "application/json"
        },
        ..._0x507dd6.headers
      }, axios({
        ...{
          "method": "get"
        },
        ..._0x507dd6
      }).then(({
        status: _0x2418f9,
        statusText: _0x21d089,
        headers: _0x426a2b,
        config: _0x52cc83,
        request: _0x2c2eb9,
        data: _0x10672a
      }) => rebug("【 DDDDOCR/" + new URL(_0x52cc83.url).pathname.split("/").pop() + " 】" + _0x2418f9 + " - " + _0x21d089, true, _0x2418f9, _0x10672a)).catch(({
        message: _0x211362,
        name: _0x9c187c,
        code: _0x75cfab,
        config: _0x22ada7,
        request: _0x463a05,
        response: _0x4a9947
      }) => rebug("【 DDDDOCR/" + new URL(_0x22ada7.url).pathname.split("/").pop() + " 】[" + _0x9c187c + "]" + _0x75cfab + " - " + _0x211362, false, _0x75cfab, null));
    }
    return new Promise(async (_0x20d760, _0x35a394) => {
      this.host = _0x17740b || (await middleware.bucketGet("jusapi", "ddddocr"));
      this.host || _0x35a394("【 DDDDOCR 】请设置配参 ddddocr")(await _0x353c29({
        "url": this.host
      })).code == 200 ? _0x20d760(this) : _0x35a394("【 DDDDOCR 】DDDDOCR 连接失败");
    });
  }
}
async function sendNotify(_0x200d90, _0x439e70) {
  if (!/([a-z]+:[a-z\d\-]+,?)+/.test(_0x200d90)) return rebug("【sendNotify】目标参数格式错误", false, 401, _0x439e70);
  return await Promise.all(_0x200d90.split(",").map(_0x3d8c30 => {
    const [_0x50f695, _0x2f4eb2] = _0x3d8c30.split(":");
    return {
      "im": _0x50f695,
      "id": _0x2f4eb2
    };
  }).map(_0x4bbef2 => {
    if (_0x4bbef2.im) {
      let _0x159838, _0x33661f, _0x451326;
      _0x159838 = /^.*(?=(group|indiv))/i.exec(_0x4bbef2.im)[0];
      _0x33661f = /group/i.test(_0x4bbef2.im) ? _0x4bbef2.id : null;
      _0x451326 = /indiv/i.test(_0x4bbef2.im) ? _0x4bbef2.id : null;
      rebug("【sendNotify】[" + _0x159838 + "]" + _0x4bbef2.id + " 开始推送", true);
      try {
        return middleware.push(_0x159838, _0x33661f, _0x451326, "", _0x439e70);
      } catch (_0x3bd8c8) {
        rebug("【sendNotify】[" + _0x159838 + "]" + _0x4bbef2.id + " 推送异常");
      }
    }
  })), rebug("【sendNotify】推送完成", true, 200, _0x439e70);
}
function rebug(_0x490157, _0x153e7c = false, _0x55c382 = 0, _0x48b271 = null) {
  let _0x524162 = /^【.*】\s?/.exec(_0x490157);
  _0x524162 = _0x524162 ? _0x524162[0] : "【rebug】";
  let _0x5326ef = _0x490157.replace(/^【[^】]+】/, "");
  if (module.exports.isDebug) {
    let _0x5e2f03 = typeof _0x490157;
    if (_0x5e2f03 == "object") {
      if (Array.isArray(_0x490157)) _0x5e2f03 = "array";else {
        if (_0x490157 instanceof RegExp) _0x5e2f03 = "regexp";else _0x490157 == null && (_0x5e2f03 = "null");
      }
    }
    if (_0x153e7c) {
      console.log("[40;32m", _0x524162, "[42;30m", _0x5e2f03, ":", _0x5326ef, "[0m");
    } else console.error(_0x490157);
  }
  return {
    "message": _0x5326ef.replace(/^【.+?】 /, ""),
    "success": _0x153e7c,
    "code": _0x55c382,
    "data": _0x48b271
  };
}
async function encodeQR(_0x5593f9) {
  const _0x4a00b6 = await new AutAPI(),
    [_0x292373, _0x2c145a] = await _0x4a00b6.require("qr-image", "uuid"),
    _0x4772ac = _0x2c145a.v4() + ".png",
    _0x2e0f74 = await middleware.bucketGet("jusapi", "host"),
    _0x496ac2 = _0x2e0f74 + "/tmp/static/" + _0x4772ac,
    _0xb640e1 = path.resolve("../web/tmp/static") + "/" + _0x4772ac,
    _0x126595 = _0x292373.image(_0x5593f9, {
      "ec_level": "H",
      "type": "png",
      "size": 10
    });
  return _0x126595.pipe(fs.createWriteStream(_0xb640e1)), rebug("【 encodeQR 】URL: " + _0x496ac2 + "，本地路径: " + _0xb640e1, true, 200, {
    "local": _0xb640e1,
    "lan": _0x496ac2
  });
}
async function resend(_0x43ede5, _0x1cf544 = false, _0x44ec43 = 0, _0x5480e5 = null) {
  const _0x161ea7 = await s.reply(_0x43ede5);
  if (module.exports.recallTime && _0x161ea7) setTimeout(() => {
    s.recallMessage(_0x161ea7[0]).catch(_0x4a8dca => rebug("【 resend 】撤回用户消息失败"));
  }, module.exports.recallTime * 1000);
  return rebug("【 resend 】 success: " + _0x1cf544, _0x1cf544, _0x44ec43, _0x5480e5);
}
function sleep(_0x272c58) {
  return new Promise(_0x188767 => setTimeout(() => _0x188767(), _0x272c58 * 1000));
}
async function inputReg(_0x529f86 = null, _0x2a9e84 = null) {
  module.exports.recallTime && _0x529f86 && s.recallMessage(await s.getMessageID()).catch(_0x1630dc => rebug("【 inputReg 】撤回用户消息失败"));
  try {
    var _0x24c6a6 = _0x529f86 ? s.reply(_0x529f86) : null;
  } catch (_0x57f04a) {
    return rebug("【inputReg】 系统错误", false, 500, _0x57f04a);
  }
  let _0x1f90c6 = await s.input(module.exports.inputTime * 1000, 1, false).then(_0x3ffeb7 => {
    if (!_0x3ffeb7) return rebug("【inputReg】 输入超时", true, 408, e);
    if (/^q$/i.test(_0x3ffeb7)) return rebug("【inputReg】 用户取消");
    if (_0x2a9e84) {
      if (!_0x2a9e84.test(_0x3ffeb7)) return rebug("【inputReg】 输入错误（" + _0x2a9e84 + "）: " + _0x3ffeb7, false, 401, _0x3ffeb7);
    }
    return rebug("【inputReg】 输入: " + _0x3ffeb7, true, 200, _0x3ffeb7);
  }).catch(_0x468e16 => rebug("【inputReg】 输入超时", false, 408, _0x468e16));
  if (module.exports.recallTime && _0x529f86) {
    rebug("【 inputReg 】撤回 tip");
    s.recallMessage(_0x24c6a6[0]).catch(_0x431ae7 => rebug("【 inputReg 】撤回机器人消息失败，ID: " + _0x24c6a6[0]));
    s.recallMessage(await s.getMessageID()).catch(_0x40bb93 => rebug("【 inputReg 】撤回用户消息失败"));
  }
  return _0x1f90c6;
}
async function waitPay(_0x5af79f = null) {
  let _0x100aba = module.exports.appreciate;
  if (!_0x100aba) return rebug("【waitPay】 获取收款码失败", false, 502, false);
  if (await s.atWaitPay()) return rebug("【waitPay】 他人支付中，请稍后重试", false, 503, false);
  const _0x3e53a6 = await s.getImtype();
  if (/^(qb)|(tb)|(ds)|(kk)|(dd)|(ss)$/i.test(_0x3e53a6)) {
    rebug("【waitPay】 当前平台【" + _0x3e53a6 + "】需要转链", 1);
    _0x100aba = await img2aut(_0x100aba);
    if (_0x100aba.success) _0x100aba = _0x100aba.data;else return _0x100aba;
  }
  const _0x330241 = _0x5af79f || "请在 " + module.exports.payTime + " 秒内使用微信扫码完成支付（q 退出）";
  try {
    var _0x201136 = await s.reply(_0x330241),
      _0x34d9ee = await s.replyImage(_0x100aba);
  } catch (_0x522acf) {
    return rebug("【 waitPay 】 系统错误", false, 500, _0x522acf);
  }
  rebug("【waitPay】 等待支付，收款码: " + _0x100aba, 1);
  let _0x34be17;
  const _0x3fa9b3 = await s.waitPay("q", module.exports.payTime * 1000).then(async _0xb6f2eb => {
    _0x34be17 = await s.getMessageID();
    if (typeof _0xb6f2eb == "string") return rebug("【waitPay】退出", false, 0, "退出");else return rebug("【waitPay】支付完成", true, 200, _0xb6f2eb);
  }).catch(_0x253ce6 => {
    if (_0x253ce6.data) return rebug("【waitPay_ed】" + _0x253ce6.data.message, false, _0x253ce6.data.status, _0x253ce6.data);else return rebug("【waitPay_e】" + _0x253ce6.message, false, _0x253ce6.status || _0x253ce6.code, _0x253ce6);
  });
  return module.exports.recallTime && _0x201136 && (console.log(_0x34be17), await s.recallMessage(_0x34be17), await s.recallMessage(_0x34d9ee[0]), await s.recallMessage(_0x201136[0])), _0x3fa9b3;
}
async function img2aut(_0x51976c) {
  const _0x3ba5e8 = await file2stream(_0x51976c);
  if (_0x3ba5e8.success == false) return rebug("【 img2aut 】 读取文件失败", false, 0, null);
  const _0x3394dc = await s.bucketGet("cloud", "username"),
    _0x21ebf3 = await s.bucketGet("cloud", "password");
  if (!(_0x3394dc && _0x21ebf3)) return rebug("【 img2aut 】 获取 autman 账号失败", false, 0, null);
  const _0x198296 = new FormData();
  return _0x198296.append("imgfile", _0x3ba5e8.data), _0x198296.append("username", _0x3394dc), _0x198296.append("password", _0x21ebf3), await axios({
    "method": "post",
    "url": "http://aut.zhelee.cn/imgUpload",
    "headers": {
      "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
      ..._0x198296.getHeaders()
    },
    "data": _0x198296
  }).then(function (_0x204662) {
    return rebug("【 img2aut 】 " + _0x204662.data.msg, _0x204662.data.code == 200, _0x204662.data.code, _0x204662.data.code == 200 ? _0x204662.data.result.path : _0x204662.data);
  }).catch(function (_0x152a69) {
    return rebug("【 img2aut 】 " + JSON.stringify(_0x152a69), false, 0, _0x152a69);
  });
}
async function file2stream(_0x5173d7) {
  let _0x4f6e97;
  if (isURL(encodeURI(_0x5173d7))) {
    const _0x31d4d6 = await axios.get(encodeURI(_0x5173d7), {
      "responseType": "stream"
    });
    return _0x4f6e97 = _0x31d4d6.data, rebug("【 file2stream 】 网络文件: " + (_0x31d4d6.code || _0x31d4d6.status) + "} - " + (_0x31d4d6.message || _0x31d4d6.status || ""), true, _0x31d4d6.code || _0x31d4d6.status, _0x4f6e97 || _0x31d4d6);
  } else {
    if (fs.existsSync(encodeURI(_0x5173d7))) return await fs.promises.readFile(encodeURI(_0x5173d7), "utf8").then(_0xf8b080 => rebug("【 file2stream 】 本地文件 - 读取文件成功", true, 1, _0xf8b080)).catch(_0x30c142 => rebug("【 file2stream 】 本地文件:" + _0x30c142.name + "[" + _0x30c142.code + "] - " + _0x30c142.message));else {
      if (isBase64(_0x5173d7)) {
        const _0x24edf1 = Buffer.from(_0x5173d7, "base64");
        return await fs.promises.readFile(_0x24edf1, "utf8").then(_0x546f50 => rebug("【 file2stream 】 BASE64文件 - 读取文件成功", true, 1, _0x546f50)).catch(_0x570826 => rebug("【 file2stream 】 BASE64文件:" + _0x570826.name + "[" + _0x570826.code + "] - " + _0x570826.message));
      } else return _0x5173d7 instanceof stream.Readable ? (_0x4f6e97 = _0x5173d7, rebug("【 file2stream 】 文件流", true, 1, _0x4f6e97)) : rebug("【 file2stream 】 Unsupported image source type", false, 0, _0x5173d7);
    }
  }
}
async function file2local(_0x514c98) {}
function isURL(_0x21a34b) {
  try {
    return new URL(_0x21a34b), true;
  } catch (_0x4f8040) {
    return false;
  }
}
function isBase64(_0x418517) {
  try {
    return Buffer.from(_0x418517, "base64").toString("base64") === _0x418517;
  } catch (_0x5854e2) {
    return false;
  }
}
async function sendFile(_0x1b71dc, _0x5bc9a8 = "") {
  const _0x50612f = await s.getImtype();
  let _0x11b0f4;
  if (_0x5bc9a8) _0x11b0f4 = _0x5bc9a8;else {
    _0x11b0f4 = /(?<=[\/\\]?)[^\/\\]+?\.\w+$/.exec(_0x1b71dc);
    _0x11b0f4 = _0x11b0f4 ? _0x11b0f4[0] : "未知文件 by jusapi";
  }
  rebug("【 sendFile 】" + _0x50612f + " - 发送文件: " + _0x11b0f4, 1);
  if (/^qq$/i.test(_0x50612f)) return await s.reply("[CQ:file,file=" + _0x1b71dc + "]").then(_0x28d953 => rebug("【 sendFile 】" + _0x50612f + " 发送完成", true, 200, _0x28d953[0]));
  if (/^wx$/i.test(_0x50612f)) return await xyo_sendFile(_0x1b71dc, _0x11b0f4);
  const _0x36d38d = await file2stream(_0x1b71dc);
  if (_0x36d38d.success == false) return rebug("【 sendFile 】" + _0x50612f + " - 读取文件失败");
  if (/^tb$/i.test(_0x50612f)) return await tb_sendFile(_0x36d38d.data, _0x11b0f4);else {
    if (/^dc$/i.test(_0x50612f)) return await dc_sendFile(_0x36d38d.data, _0x11b0f4);else {
      if (/^sk$/i.test(_0x50612f)) return await sk_sendFile(_0x36d38d.data, _0x11b0f4);else {
        if (/^kk$/i.test(_0x50612f)) return await kk_sendFile(_0x36d38d.data, _0x11b0f4);else return await s.reply("[CQ:file,file=" + _0x1b71dc + "]");
      }
    }
  }
}
async function xyo_sendFile(_0x4cc0d5, _0x3b430c, _0x471731 = "", _0x430965 = "", _0x8b562e = "", _0x527216 = "") {
  const _0x32f32b = await file2win(_0x4cc0d5, _0x3b430c),
    _0x2fd360 = await s.getImtype();
  if (!_0x32f32b.success) return rebug("【 xyo_sendFile 】" + _0x2fd360 + " - 上传文件失败");
  const _0x55d54f = _0x430965 || (await middleware.bucketGet("wx", "vlw_addr")),
    _0x367af4 = _0x8b562e || (await middleware.bucketGet("wx", "vlw_token")),
    _0x3f268c = _0x527216 || (await middleware.bucketGet("wx", "robot_wxid"));
  if (!(_0x3f268c && _0x55d54f && _0x367af4)) return rebug("【 xyo_sendFile 】" + _0x2fd360 + " - 未获取到 vlw 配置");
  const _0x5309e9 = await s.getChatID(),
    _0x28f221 = _0x471731 || _0x5309e9 ? _0x5309e9 + "@chatroom" : await s.getUserID();
  return await axios({
    "url": _0x55d54f,
    "method": "post",
    "data": {
      "token": _0x367af4,
      "api": "SendFileMsg",
      "robot_wxid": _0x3f268c,
      "to_wxid": _0x28f221,
      "path": _0x32f32b.data
    }
  }).then(_0x18778d => rebug("【 xyo_sendFile 】" + (_0x18778d.code || _0x18778d.status) + " - " + (_0x18778d.message || _0x18778d.statusText), true, _0x18778d.code || _0x18778d.status, _0x18778d.data || _0x18778d)).catch(_0x1a0917 => _0x1a0917.response ? _0x1a0917.response.data ? rebug("【 xyo_sendFile 】" + (_0x1a0917.response.data.code || _0x1a0917.response.data.status) + " - " + (_0x1a0917.response.data.message || _0x1a0917.response.data.statusText), false, _0x1a0917.response.data.code || _0x1a0917.response.data.status, _0x1a0917.response.data) : rebug("【 xyo_sendFile 】" + (_0x1a0917.response.code || _0x1a0917.response.status) + " - " + (_0x1a0917.response.message || _0x1a0917.response.statusText), false, _0x1a0917.response.code || _0x1a0917.response.status, _0x1a0917.response) : rebug("【 xyo_sendFile 】" + (_0x1a0917.code || _0x1a0917.status) + " - " + (_0x1a0917.message || _0x1a0917.statusText), false, _0x1a0917.code || _0x1a0917.status, _0x1a0917));
}
async function kk_sendFile(_0x2e24d4, _0x3b0dfc, _0x367297 = "", _0x2b8d8f = "") {
  const _0xa721db = _0x367297 || (await s.getChatID());
  if (!_0xa721db) return rebug("【 dc_sendFile 】未找到 channelId，目前仅支持群聊发送文件");
  const _0x1e9150 = _0x2b8d8f || (await middleware.bucketGet("kk", "token"));
  if (!_0x1e9150) return rebug("【 kk_sendFile 】未找到 token");
  const _0x36c8b7 = new FormData();
  _0x36c8b7.append("file", _0x2e24d4, {
    "filename": _0x3b0dfc
  });
  _0x36c8b7.append("target_id", _0xa721db);
  _0x36c8b7.append("guild_id", _0xa721db);
  const _0x5a0553 = await axios({
    "url": "https://www.kookapp.cn/api/v3/asset/create",
    "method": "post",
    "headers": {
      "Content-type": "form-data",
      "Authorization": "Bot " + _0x1e9150
    },
    "data": _0x36c8b7
  }).then(_0x547804 => _0x547804.data ? rebug("【 kk_asset_create 】" + (_0x547804.data.code + 1 ? _0x547804.data.code : null) + " - " + (_0x547804.data.message || _0x547804.data.statusText), true, _0x547804.data.code || _0x547804.data.status, _0x547804.data.data || _0x547804.data) : rebug("【 kk_asset_create 】" + (_0x547804.code || _0x547804.status) + " - " + (_0x547804.message || _0x547804.statusText), true, _0x547804.code || _0x547804.status, _0x547804.data || _0x547804)).catch(_0x380fd2 => _0x380fd2.response ? _0x380fd2.response.data ? rebug("【 kk_asset_create 】" + (_0x380fd2.response.data.code || _0x380fd2.response.data.status) + " - " + (_0x380fd2.response.data.message || _0x380fd2.response.data.statusText), false, _0x380fd2.response.data.code || _0x380fd2.response.data.status, _0x380fd2.response.data) : rebug("【 kk_asset_create 】" + (_0x380fd2.response.code || _0x380fd2.response.status) + " - " + (_0x380fd2.response.message || _0x380fd2.response.statusText), false, _0x380fd2.response.code || _0x380fd2.response.status, _0x380fd2.response) : rebug("【 kk_asset_create 】" + (_0x380fd2.code || _0x380fd2.status) + " - " + (_0x380fd2.message || _0x380fd2.statusText), false, _0x380fd2.code || _0x380fd2.status, _0x380fd2));
  if (!_0x5a0553.success || _0x5a0553.code) return _0x5a0553;
  return rebug("【 kk_asset_create 】" + _0x5a0553.data.url, 1), axios({
    "method": "post",
    "url": "https://www.kookapp.cn/api/v3/message/create",
    "headers": {
      "Content-type": "application/json",
      "Authorization": "Bot " + _0x1e9150
    },
    "data": {
      "content": JSON.stringify([{
        "type": "card",
        "theme": "secondary",
        "size": "lg",
        "modules": [{
          "type": "file",
          "title": _0x3b0dfc,
          "src": _0x5a0553.data.url,
          "size": "?"
        }]
      }]),
      "target_id": _0xa721db,
      "type": 10
    }
  }).then(_0x239045 => _0x239045.data ? rebug("【 kk_asset_create 】" + (_0x239045.data.code + 1 ? _0x239045.data.code : null) + " - " + (_0x239045.data.message || _0x239045.data.statusText), true, _0x239045.data.code || _0x239045.data.status, _0x239045.data.data || _0x239045.data) : rebug("【 kk_asset_create 】" + (_0x239045.code || _0x239045.status) + " - " + (_0x239045.message || _0x239045.statusText), true, _0x239045.code || _0x239045.status, _0x239045.data || _0x239045)).catch(_0x549eb1 => _0x549eb1.response ? _0x549eb1.response.data ? rebug("【 kk_sendFile 】" + (_0x549eb1.response.data.code || _0x549eb1.response.data.status) + " - " + (_0x549eb1.response.data.message || _0x549eb1.response.data.statusText), false, _0x549eb1.response.data.code || _0x549eb1.response.data.status, _0x549eb1.response.data) : rebug("【 kk_sendFile 】" + (_0x549eb1.response.code || _0x549eb1.response.status) + " - " + (_0x549eb1.response.message || _0x549eb1.response.statusText), false, _0x549eb1.response.code || _0x549eb1.response.status, _0x549eb1.response) : rebug("【 kk_sendFile 】" + (_0x549eb1.code || _0x549eb1.status) + " - " + (_0x549eb1.message || _0x549eb1.statusText), false, _0x549eb1.code || _0x549eb1.status, _0x549eb1));
}
async function sk_sendFile(_0x349a49, _0xef00bd, _0x1b75df = "", _0x406c09 = "") {
  const _0x561fc0 = _0x1b75df || (await s.getChatID()) || (await s.getUserID()),
    _0x408a58 = _0x406c09 || (await middleware.bucketGet("sk", "SLACK_BOT_TOKEN"));
  if (!_0x408a58) return rebug("【 sk_sendFile 】未找到 SLACK_BOT_TOKEN");
  const _0x44e269 = new FormData();
  return _0x44e269.append("file", _0x349a49, {
    "filename": _0xef00bd
  }), _0x44e269.append("channels", _0x561fc0), axios({
    "method": "post",
    "url": "https://slack.com/api/files.upload",
    "headers": {
      "Content-Type": "multipart/form-data",
      "Authorization": "Bearer " + _0x408a58
    },
    "data": _0x44e269
  }).then(_0x38390d => rebug("【 sk_sendFile 】" + (_0x38390d.code || _0x38390d.status) + " - " + (_0x38390d.message || _0x38390d.statusText), true, _0x38390d.code || _0x38390d.status, _0x38390d.data || _0x38390d)).catch(_0x34de09 => _0x34de09.response ? _0x34de09.response.data ? rebug("【 sk_sendFile 】" + (_0x34de09.response.data.code || _0x34de09.response.data.status) + " - " + (_0x34de09.response.data.message || _0x34de09.response.data.statusText), false, _0x34de09.response.data.code || _0x34de09.response.data.status, _0x34de09.response.data) : rebug("【 sk_sendFile 】" + (_0x34de09.response.code || _0x34de09.response.status) + " - " + (_0x34de09.response.message || _0x34de09.response.statusText), false, _0x34de09.response.code || _0x34de09.response.status, _0x34de09.response) : rebug("【 sk_sendFile 】" + (_0x34de09.code || _0x34de09.status) + " - " + (_0x34de09.message || _0x34de09.statusText), false, _0x34de09.code || _0x34de09.status, _0x34de09));
}
async function dc_sendFile(_0x54b719, _0x410192, _0x3ef493 = "", _0x5d4a9f = "") {
  const _0x2a827c = _0x3ef493 || (await s.getChatID());
  if (!_0x2a827c) return rebug("【 dc_sendFile 】未找到 channelId，目前仅支持群聊发送文件");
  const _0x40a09c = _0x5d4a9f || (await middleware.bucketGet("dc", "token"));
  if (!_0x40a09c) return rebug("【 dc_sendFile 】未找到 token");
  const _0x3dd4c0 = new FormData();
  return _0x3dd4c0.append("file", _0x54b719, {
    "filename": _0x410192
  }), await axios({
    "url": "https://discord.com/api/v9/channels/" + _0x2a827c + "/messages",
    "method": "post",
    "headers": {
      "Content-Type": " multipart/form-data; boundary=" + _0x3dd4c0.getBoundary(),
      "Authorization": "Bot " + _0x40a09c
    },
    "data": _0x3dd4c0
  }).then(_0x53f4fa => rebug("【 dc_sendFile 】" + (_0x53f4fa.code || _0x53f4fa.status) + " - " + (_0x53f4fa.message || _0x53f4fa.statusText), true, _0x53f4fa.code || _0x53f4fa.status, _0x53f4fa.data || _0x53f4fa)).catch(_0x4c436f => _0x4c436f.response ? _0x4c436f.response.data ? rebug("【 dc_sendFile 】" + (_0x4c436f.response.data.code || _0x4c436f.response.data.status) + " - " + (_0x4c436f.response.data.message || _0x4c436f.response.data.statusText), false, _0x4c436f.response.data.code || _0x4c436f.response.data.status, _0x4c436f.response.data) : rebug("【 dc_sendFile 】" + (_0x4c436f.response.code || _0x4c436f.response.status) + " - " + (_0x4c436f.response.message || _0x4c436f.response.statusText), false, _0x4c436f.response.code || _0x4c436f.response.status, _0x4c436f.response) : rebug("【 dc_sendFile 】" + (_0x4c436f.code || _0x4c436f.status) + " - " + (_0x4c436f.message || _0x4c436f.statusText), false, _0x4c436f.code || _0x4c436f.status, _0x4c436f));
}
async function tb_sendFile(_0x44e860, _0x527d62, _0x3202f1 = "", _0x2c4df2 = "") {
  const _0x5799a1 = _0x3202f1 || (await s.getChatID()) || (await s.getUserID()),
    _0x2d384b = _0x2c4df2 || (await middleware.bucketGet("tb", "token"));
  if (!_0x2d384b) return rebug("【 tb_sendFile 】未找到 token");
  const _0x2f93b5 = new FormData();
  return _0x2f93b5.append("document", _0x44e860, {
    "filename": _0x527d62
  }), await axios.post("https://api.telegram.org/bot" + _0x2d384b + "/sendDocument", _0x2f93b5, {
    "headers": {
      ..._0x2f93b5.getHeaders()
    },
    "params": {
      "chat_id": _0x5799a1
    }
  }).then(_0x49e3f9 => rebug("【 tb_sendFile 】" + (_0x49e3f9.code || _0x49e3f9.status) + " - " + (_0x49e3f9.message || _0x49e3f9.statusText), true, _0x49e3f9.code || _0x49e3f9.status, _0x49e3f9.data || _0x49e3f9)).catch(_0x7bac16 => _0x7bac16.response ? _0x7bac16.response.data ? rebug("【 tb_sendFile 】" + (_0x7bac16.response.data.code || _0x7bac16.response.data.status) + " - " + (_0x7bac16.response.data.message || _0x7bac16.response.data.statusText), false, _0x7bac16.response.data.code || _0x7bac16.response.data.status, _0x7bac16.response.data) : rebug("【 tb_sendFile 】" + (_0x7bac16.response.code || _0x7bac16.response.status) + " - " + (_0x7bac16.response.message || _0x7bac16.response.statusText), false, _0x7bac16.response.code || _0x7bac16.response.status, _0x7bac16.response) : rebug("【 tb_sendFile 】" + (_0x7bac16.code || _0x7bac16.status) + " - " + (_0x7bac16.message || _0x7bac16.statusText), false, _0x7bac16.code || _0x7bac16.status, _0x7bac16));
}
async function file2win(_0x5a3d36, _0x57c468) {
  const _0x433fed = await middleware.bucketGet("jusapi", "win_server");
  if (!_0x433fed) return rebug("【 file2win 】 获取win_server_host失败");
  const _0x2c23ca = await file2stream(_0x5a3d36);
  if (_0x2c23ca.success == false) return rebug("【 file2win 】 读取文件失败");
  return await axios({
    "method": "post",
    "url": _0x433fed,
    "headers": {
      "Content-Type": "application/octet-stream",
      "x-file-name": encodeURI(_0x57c468)
    },
    "data": _0x2c23ca.data
  }).then(function (_0x4d4a7f) {
    return rebug("【 file2win 】 " + (_0x4d4a7f.code || _0x4d4a7f.status) + " - " + (_0x4d4a7f.message || _0x4d4a7f.statusText) + ": " + _0x4d4a7f.data, true, _0x4d4a7f.code || _0x4d4a7f.status, _0x4d4a7f.data);
  }).catch(function (_0x1e408e) {
    return rebug("【 file2win 】 " + (_0x1e408e.code || _0x1e408e.status) + " - " + (_0x1e408e.message || _0x1e408e.statusText));
  });
}
module.exports = {
  "version": "1.1.0",
  "isDebug": false,
  "inputTime": 120,
  "payTime": 60,
  "recallTime": 1,
  "sleep": sleep,
  "rebug": rebug,
  "resend": resend,
  "inputReg": inputReg,
  "waitPay": waitPay,
  "img2aut": img2aut,
  "file2stream": file2stream,
  "sendFile": sendFile,
  "encodeQR": encodeQR,
  "sendNotify": sendNotify,
  "AutAPI": AutAPI,
  "QingLong": QingLong,
  "DDDDOCR": DDDDOCR,
  "getQLS": getQLS
};
!(async () => {
  module.exports.isDebug = await middleware.bucketGet("jusapi", "isDebug");
  module.exports.appreciate = await middleware.bucketGet("jusapi", "appreciate");
  if (/^true$/i.test(module.exports.isDebug)) rebug("【jusapi】 已开启调试功能", true);
  const _0x33f58e = await s.isAdmin(),
    _0x4208b8 = await s.getChatID();
  _0x33f58e && !_0x4208b8 && axios.get("https://raw.githubusercontent.com/iCouldFly/autman_plugins/scripts/jusapi.js").then(({
    status: _0x4608ed,
    statusText: _0x4f9cf7,
    headers: _0x1a83db,
    config: _0x1afff3,
    request: _0x5f5008,
    data: _0x15e054
  }) => {
    const _0x104021 = _0x15e054.match(/(?<=\/\/\s*\[version\:\s*)[\d\.]+/g);
    if (!_0x104021) return console.log("jusapi 版本号获取失败");
    if (+_0x104021[0].split(".").join("") > module.exports.version.split(".").join("")) {
      console.log("jusapi 发现新版本，尝试更新，版本:", _0x104021[0]);
      const _0x46b812 = path.join(path.resolve(__dirname), "jusapi.js");
      fs.writeFile(_0x46b812, _0x15e054, _0x50f11e => _0x50f11e ? console.error("jusapi 更新失败:", _0x50f11e) : (s.reply("jusapi 已更新至: " + _0x104021[0]), console.log("保存路径:", _0x46b812.toString())));
    }
  }).catch(({
    port: _0x5cde78,
    address: _0x1ce6c9,
    syscall: _0x5b0258,
    code: _0x4409f2,
    errno: _0x1b7eb4,
    message: _0x3814b4,
    stack: _0x38dc46,
    name: _0x276f63,
    config: _0x3c0b31,
    request: _0xa2e924
  }) => console.error("jusapi 检查更新失败:", _0x3814b4));
})();