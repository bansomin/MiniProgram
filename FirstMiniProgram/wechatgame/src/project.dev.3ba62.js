require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = "function" == typeof require && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }
      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, l, l.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof require && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  GameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41876SpwwxJKquptFq4H1SY", "GameScene");
    "use strict";
    var DEBUG_NODE_SHOW = true;
    cc.Class({
      extends: cc.Component,
      properties: {
        sprite: cc.Node
      },
      onLoad: function onLoad() {
        this.sprite.setPosition(480, 320);
        this.sprite.runAction(cc.sequence(cc.delayTime(5 * Math.random()), cc.moveTo(3 * Math.random(), this.getPosition()[0], this.getPosition()[1])));
      },
      getPosition: function getPosition() {
        return [ 960 * Math.random(), 640 * Math.random() ];
      },
      onClickBackBtn: function onClickBackBtn() {
        cc.director.loadScene("helloworld");
      }
    });
    cc._RF.pop();
  }, {} ],
  HelloWorld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      onClickStartGameBtn: function onClickStartGameBtn() {
        cc.director.loadScene("gameScene");
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "GameScene", "HelloWorld" ]);