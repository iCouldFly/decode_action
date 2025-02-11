const axios = require("axios");
module.exports = class Gewechat {
  constructor(_0x4a9e90, _0x1c6a0c, _0x5cd21d) {
    const _0x575d70 = axios.create({
        "baseURL": _0x4a9e90 + "/v2/api",
        "headers": {
          "X-GEWE-TOKEN": _0x1c6a0c,
          "Content-Type": "application/json"
        }
      }),
      _0x1e9d7f = (_0x1a8a5d, _0x13d9f8) => _0x575d70.post(_0x1a8a5d, {
        ...{
          "appId": _0x5cd21d
        },
        ..._0x13d9f8
      }).then(_0x33520f => console.log("【" + _0x1a8a5d + "】", JSON.stringify(_0x13d9f8), "==>", JSON.stringify(_0x33520f?.["data"])) || _0x33520f?.["data"]).catch(_0x598864 => console.error(_0x598864));
    this.message_downloadImage = (_0x4209c2, _0x246d91 = 2) => _0x1e9d7f("/message/downloadImage", {
      "xml": _0x4209c2,
      "type": _0x246d91
    });
    class _0x5d8716 {
      constructor(_0x434879 = "") {
        this.toWxid = _0x434879;
        const _0x73c7e7 = (_0x51e956, _0x346ede) => _0x575d70.post(_0x51e956, {
          ...{
            "appId": _0x5cd21d,
            "toWxid": _0x434879
          },
          ..._0x346ede
        }).then(_0x45bb99 => console.log("【" + _0x51e956 + "】", JSON.stringify(_0x346ede), "==>", JSON.stringify(_0x45bb99?.["data"])) || _0x45bb99?.["data"]).catch(_0x529e2d => console.error("【" + _0x51e956 + "】", _0x529e2d));
        this.message_postText = (_0x401f4a, _0x166c46 = null) => _0x73c7e7("/message/postText", {
          "content": _0x401f4a,
          "ats": _0x166c46
        });
        this.message_postFile = (_0x50a315, _0x450cc1) => _0x73c7e7("/message/postFile", {
          "fileUrl": _0x50a315,
          "fileName": _0x450cc1
        });
        this.message_postImage = _0x3f9486 => _0x73c7e7("/message/postImage", {
          "imgUrl": _0x3f9486
        });
        this.message_postVoice = (_0x5322db, _0x24e328) => _0x73c7e7("/message/postVoice", {
          "voiceUrl": _0x5322db,
          "voiceDuration": _0x24e328
        });
        this.message_postVideo = (_0x5ee985, _0x3b5a24, _0x45b58f) => _0x73c7e7("/message/postVideo", {
          "videoUrl": _0x5ee985,
          "thumbUrl": _0x3b5a24,
          "videoDuration": _0x45b58f
        });
        this.message_postLink = (_0x45df10, _0x561ddf, _0x3261af, _0x1c4e52) => _0x73c7e7("/message/postLink", {
          "title": _0x45df10,
          "desc": _0x561ddf,
          "linkUrl": _0x3261af,
          "thumbUrl": _0x1c4e52
        });
        this.message_postNameCard = (_0x13f7f0, _0x515262) => _0x73c7e7("/message/postNameCard", {
          "nickName": _0x13f7f0,
          "nameCardWxid": _0x515262
        });
        this.message_postEmoji = (_0x432f77, _0x172384) => _0x73c7e7("/message/postEmoji", {
          "emojiMd5": _0x432f77,
          "emojiSize": _0x172384
        });
        this.message_postAppMsg = _0x17a8e1 => _0x73c7e7("/message/postAppMsg", {
          "appmsg": _0x17a8e1
        });
        this.message_postMiniApp = (_0x4f0a91, _0x199b27, _0x55e61e, _0x1aeb9d, _0x2a387b, _0x10f091) => _0x73c7e7("/message/postMiniApp", {
          "miniAppId": _0x4f0a91,
          "displayName": _0x199b27,
          "pagePath": _0x55e61e,
          "coverImgUrl": _0x1aeb9d,
          "title": _0x2a387b,
          "userName": _0x10f091
        });
        this.message_forwardFile = _0x3f09a5 => _0x73c7e7("/message/forwardFile", {
          "xml": _0x3f09a5
        });
        this.message_forwardImage = _0x5d0e2b => _0x73c7e7("/message/forwardImage", {
          "xml": _0x5d0e2b
        });
        this.message_forwardVideo = _0x397470 => _0x73c7e7("/message/forwardVideo", {
          "xml": _0x397470
        });
        this.message_forwardUrl = _0x52d96f => _0x73c7e7("/message/forwardUrl", {
          "xml": _0x52d96f
        });
        this.message_forwardMiniApp = (_0x9dad5, _0x264d4c) => _0x73c7e7("/message/forwardMiniApp", {
          "xml": _0x9dad5,
          "coverImgUrl": _0x264d4c
        });
        this.message_revokeMsg = (_0x2bd589, _0x49cd2d, _0x40b241) => _0x73c7e7("/message/revokeMsg", {
          "msgId": _0x2bd589,
          "newMsgId": _0x49cd2d,
          "createTime": _0x40b241
        });
      }
    }
    return this.messageModule = _0x5d8716, this;
  }
};