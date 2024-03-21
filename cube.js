"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var upcommonNode = document.createElement('script');
cb.utils = {};
cb.temp = {
  isEsn: window.location.pathname.indexOf("esnlogin") > -1,
  backBtnCount: 0,
  toolMenusDom: Dom7('#dynamicMenus').html()
};
if (!window.navigator.onLine) {
  alert(lang.templateByUuid("UID:P_UDHMC_17EC591E058805AD", "你的网络信号好像飞走了...") /* "你的网络信号好像飞走了..." */);
}
//企业空间自动登录
var query = Dom7.parseUrlQuery(window.location.href);
if (cb.temp.isEsn && query.code) {
  cb.rest.appContext.clear();
}
cb.rest.status = {
  notData: 404,
  // 请求完成，但没有数据
  ajaxErrorCode: 100 // 请求发生异常
};

cb.rest.isType = function (obj, type) {
  var _t = Object.prototype.toString.call(obj);
  return type ? _t === '[object ' + type + ']' : _t.split(' ')[1].split(']')[0];
};
cb.rest.appContext.lang = cb["native"].localStorage.get('langCode') || window.__config__.udhLocale || (cb.rest.runtime.isOpenMultilingual && cb.rest.runtime.env != 'u8c' ? 'en-us' : 'zh-cn');
var xsrfNow = new Date().getTime();
var xsrfTimespan = new Date().getTime();
var xsrfToken = '';
cb["native"].setMainDomainCookie('mdd_source', 'yonbip-mkt-mkc2b');
cb.rest.initToolbars = function (callback, isChooseOrg) {
  var esnSteadAgent = cb.utils.getUrlParam("functionType") == 2 || cb.utils.getUrlParam("functionType") == 3; //代下单、渠道代下单标记
  // if (cb.rest.appContext.agentContentHtml && cb.rest.appContext.corpContentHtml) {
  //     cb.rest.appContext.initApp(!!cb.rest.appContext.corpUser);
  //     if (callback) callback();
  //     return;
  // }
  // 是否开启店铺装修
  var shopDecoration = window.__config__.newHome && cb.FunctionOptions.OPENSHOPDECORATION;
  cb.rest.appContext.shopDecoration = shopDecoration;
  var menus = cb.rest.appContext.viewMenus = {
    agentMenus: [{
      viewId: 'view-1',
      url: 'pages/home.html',
      code: 'home',
      pagesClass: 'navbar-fixed tabbar-labels-fixed fixed-through',
      pageContentClass: 'p-t-0',
      icon: 'footer-icon-1',
      name: lang.templateByUuid("UID:P_UDHMC_17EC591E0588058A", "首页") /* "首页" */,
      isMainView: true
    }, {
      viewId: 'view-2',
      shopDecoration: shopDecoration,
      shopDecorationUrl: '/render/udinghuo/category',
      url: 'pages/category.html',
      code: 'category',
      pagesClass: 'tabbar-labels-fixed',
      icon: 'footer-icon-2',
      name: lang.templateByUuid("UID:P_UDHMC_17EC591E0588058E", "分类") /* "分类" */
    }, {
      viewId: 'view-3',
      shopDecoration: shopDecoration,
      shopDecorationUrl: '/render/udinghuo/quickOrder',
      url: 'pages/quickOrder.html',
      code: 'order',
      icon: 'footer-icon-5',
      name: lang.templateByUuid("UID:P_UDHMC_17EC591E05880590", "闪订") /* "闪订" */
    }, {
      viewId: 'view-4',
      url: 'pages/scart.html?ref=index',
      code: 'scart',
      pagesClass: 'tabbar-labels-fixed',
      icon: 'footer-icon-3 upShoppingCount',
      name: lang.templateByUuid("UID:P_UDHMC_17EC591E05880594", "购物车") /* "购物车" */
    }, {
      viewId: 'view-5',
      url: 'pages/user.html',
      code: 'user',
      icon: 'footer-icon-4',
      name: lang.templateByUuid("UID:P_UDHMC_17EC591E05880597", "我的") /* "我的" */
    }],

    corpMenus: [{
      viewId: 'view-1',
      url: 'corpPages/indexManage.html',
      code: 'indexManage',
      pagesClass: 'toolbar-through',
      pageContentClass: 'p-t-0',
      icon: 'footer-icon-1',
      name: lang.templateByUuid("UID:P_UDHMC_17EC591E0588058A", "首页") /* "首页" */,
      isMainView: true,
      auth: 'orderDetail'
    }, {
      viewId: 'view-2',
      url: 'corpPages/orderListManage.html',
      code: 'category',
      icon: 'footer-icon-2',
      name: lang.templateByUuid("UID:P_UDHMC_17EC591E058805A3", "订单") /* "订单" */,
      auth: 'orderList|expenseOrderList|returnedPurchaseList'
    }, {
      viewId: 'view-5',
      url: 'corpPages/receipt.html',
      code: 'receipt',
      pagesClass: 'toolbar-through',
      icon: 'footer-icon-9',
      name: lang.templateByUuid("UID:P_UDHMC_17EC591E058805AA", "收款") /* "收款" */,
      auth: 'receivablesDetail',
      isHide: cb.rest.appContext.context && (cb.rest.appContext.context.bizMode == 2 || cb.rest.appContext.context.bizMode == 4) && (cb.rest.appContext.context.userType == 1 || cb.rest.appContext.context.userType == 3)
    }, {
      viewId: 'view-3',
      url: 'corpPages/customer.html',
      code: 'customer',
      pagesClass: 'toolbar-through',
      icon: 'footer-icon-7',
      name: lang.templateByUuid("UID:P_UDHMC_17EC591E058805B0", "客户") /* "客户" */,
      auth: 'agentList'
    }, {
      viewId: 'view-4',
      url: 'corpPages/productManage.html',
      code: 'productManage',
      pagesClass: 'toolbar-through',
      icon: 'footer-icon-8',
      name: lang.templateByUuid("UID:P_UDHMC_17EC591E058805B7", "商品") /* "商品" */,
      auth: 'commodityList'
    }, {
      viewId: 'view-6',
      url: 'corpPages/channelIndex.html',
      code: 'channelIndex',
      icon: 'footer-icon-channel',
      name: lang.templateByUuid("UID:P_UDHMC_17EC591E058805BD", "渠道") /* "渠道" */,
      isHide: !(cb.rest.appContext.context && (cb.rest.appContext.context.bizMode == 2 || cb.rest.appContext.context.bizMode == 4) && (cb.rest.appContext.context.userType == 1 || cb.rest.appContext.context.userType == 3))
    }]
  };
  if (callback && !isChooseOrg && !esnSteadAgent) {
    cb.rest.getLimitOrderTime();
  }
  // 把cube.config.js中配置的agentMenus 从底部菜单中去除掉
  if (cb.rest.runtime.agentMenus) {
    menus.agentMenus = menus.agentMenus.filter(function (item) {
      return !cb.rest.runtime.agentMenus.includes(item.name);
    });
  }
  menus.corpMenus = menus.corpMenus.filter(function (item) {
    return !item.isHide;
  });
  var toolMenusTpl = Template7.compile(cb.temp.toolMenusDom);
  cb.rest.appContext.agentContentHtml = toolMenusTpl({
    isShowLimitInfo: cb.rest.isShowLimitInfo,
    limitOrderInfo: cb.rest.limitOrderInfo,
    menus: menus.agentMenus,
    shopDecoration: shopDecoration,
    isAgent: true
  });
  if (isChooseOrg || esnSteadAgent) {
    var selectCustomer; //此字段用于友空间代下单或代渠道下单的时候隐藏页面底部菜单栏
    //url参数functionType值为2--友空间代平台下单、3--友空间代渠道下单、4--友空间代商家客户下单
    var functionType = cb.utils.getUrlParam("functionType") == 2 || cb.utils.getUrlParam("functionType") == 3 || cb.utils.getUrlParam("functionType") == 4;
    if (functionType) {
      selectCustomer = true;
    }
    cb.rest.appContext.corpContentHtml = toolMenusTpl({
      menus: menus.corpMenus,
      isAgent: false,
      isYs: cb.rest.runtime.env === 'u8c',
      selectCustomer: selectCustomer
    });
    cb.rest.appContext.initApp(!!cb.rest.appContext.corpUser);
  }
  if (callback) callback();
};
cb.rest.appContext.initApp = function (isCorp) {
  document.querySelector("#upContentViews").innerHTML = isCorp ? cb.rest.appContext.corpContentHtml : cb.rest.appContext.agentContentHtml;
  cb.rest.setJSUrl(isCorp);
  var showCallBack = function showCallBack(e) {
    var ds = $$(this).dataset();
    if (!ds.url) return;
    if (cb.rest.defineRouters && cb.rest.defineRouters.pages) {
      var current = cb.rest.defineRouters.pages.find(function (item) {
        return item.router && item.path == ds.url;
      });
      if (current) {
        window.location.href = upcommon.format.url(current.router);
        return;
      }
    }
    var viewId = e.target.id;
    if (!window.navigator.onLine) {
      myApp.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E058805AD", "你的网络信号好像飞走了...") /* "你的网络信号好像飞走了..." */, 'error').show(true);
      return false;
    }
    cb.temp.addView(viewId);
  };
  $$('#upContentViews div.view.tab').off("show", showCallBack).on('show', showCallBack);
};
cb.utils.getUrlParam = function (key, url) {
  //通过key获取url中的参数值
  var strHref = url || window.location.href.toString();
  var intPos = strHref.indexOf("?");
  var strRight = strHref.substr(intPos + 1); //==========获取到右边的参数部分
  var arrTmp = strRight.split("&"); //=============以&分割成数组

  for (var i = 0; i < arrTmp.length; i++)
  //===========循环数组
  {
    var dIntPos = arrTmp[i].indexOf("=");
    var paraName = arrTmp[i].substr(0, dIntPos);
    var paraData = arrTmp[i].substr(dIntPos + 1);
    if (paraName.toUpperCase() == key.toUpperCase()) {
      return paraData;
    }
  }
  return "";
};
cb.rest.setJSUrl = function (isCorp) {
  var jsPath = "/js/pages/";
  var jsMinPath = "/min/jsmin/pages/";
  if (isCorp) {
    jsPath = "/js/corpPages/";
    jsMinPath = "/min/jsmin/corpPages/";
  }
  cb.rest.jsPath = cb.rest.isMin ? jsMinPath : jsPath;
  cb.rest.jsBasePath = cb.rest.isMin ? "/min/jsmin/" : "/js/";
};
var esnSteadAgent = cb.utils.getUrlParam("functionType") == 2 || cb.utils.getUrlParam("functionType") == 3;
esnSteadAgent ? cb.rest.setJSUrl(true) : cb.rest.setJSUrl(); //代下单、渠道代下单走的是corppages/

upcommonNode.src = cb.rest.appContext.serviceUrl + cb.rest.jsBasePath + 'upcommon.js';
document.head.appendChild(upcommonNode);

//判断当前登录状态
cb.rest.checkLoginStatus = function () {
  var status = false;
  if (cb.rest.appContext.corpUser !== void 0 && cb.rest.appContext.corpUser !== null) {
    status = true;
  }
  return status;
};

//判断是否体验登陆
cb.rest.checkDemoLogin = function () {
  return cb["native"].localStorage.get('isDemoLogin') === '1';
};

//执行登录的后续操作
cb.rest.appContext.doLogin = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var appVersionStr, agreeApp, agreeAppVersion, agreeTerminal, agreePrivacyPolicyData, isshowImage, showHomePage, insteadAgent;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        if ($$(".popup.popup-login").css('display') == 'block' && (cb["native"].isWxMiniProgram() || cb["native"].isApiCloudApp())) {
          //登录后调用签署协议服务
          //app版本号
          appVersionStr = "", agreeApp = "", agreeAppVersion = "", agreeTerminal = "";
          if (cb["native"].isWxMiniProgram()) {
            appVersionStr = "WX YonBIPDinghuo 2.0.4";
            agreeAppVersion = "2.0.4";
            agreeTerminal = "WX";
          } else if (cb["native"].isApiCloudApp()) {
            appVersionStr = "IOS YonBIPDinghuo 1.0.2";
            agreeAppVersion = "1.0.2";
            agreeTerminal = "IOS";
          }
          agreeApp = 'YonBIPDinghuo';
          agreePrivacyPolicyData = {
            userId: cb.rest.appContext.context.agentName,
            agreedVersionId: cb["native"].localStorage.get("privacyId"),
            appVersion: appVersionStr,
            isPopWindow: cb.temp.isPopWindow,
            ytenantid: cb.rest.appContext.context.yhtTenantId,
            agreeApp: agreeApp,
            agreeAppVersion: agreeAppVersion,
            agreeTerminal: agreeTerminal
          };
          cb.rest.privacyPolicyAgree(agreePrivacyPolicyData);
        }
        //是否显示商品图片
        isshowImage = cb["native"].localStorage.get("showImage");
        if (isshowImage) {
          cb.rest.appContext.showImage = isshowImage == 'true';
        } else {
          cb["native"].localStorage.set("showImage", 'true');
          cb.rest.appContext.showImage = true;
        }
        ;

        //获取自定义菜单
        cb.rest.loadDefineMenus();
        _context.next = 7;
        return cb.rest.loadFunctionOptions();
      case 7:
        //加载业务选项
        if (cb.FunctionOptions.ORDERSHOWWAY) {
          cb["native"].localStorage.remove('storageRelationId');
        }
        // cb.rest.loadBizsFunctionOptions();
        cb.mult.loadMultResource();
        cb.rest.yiguanAnalysis();
        if (cb["native"].isWeiXin()) {
          cb.rest.initWxConfig();
          setTimeout(function () {
            var query = $$.parseUrlQuery(location.search);
            var wid = query.wid || cb["native"].localStorage.get('wid');
            if (cb.rest.runtime.bindWxUser && wid) {
              cb.rest.getJSON({
                url: cb.router.HTTP_COMMON_WXUSERSTATUS,
                params: {
                  weId: wid,
                  userId: cb.rest.appContext.context.userId
                },
                success: function success(data) {
                  var isWxBinded = Array.isArray(data.data) && data.data.length;
                  if (isWxBinded) return;
                  cb.rest.wxBindUser(cb.rest.appContext.context);
                },
                error: function error(e) {
                  myApp.toast(e.message, 'error').show(true);
                }
              });
            }
          }, 3500);
        }
        //权限
        if (cb.rest.appContext.corpUser) {
          cb.rest.loadAuths(function () {
            $$(".homeNavBarCorp#homeNavBar a").each(function () {
              if ($$(this).data('aut')) {
                var autDefault = upcommon.testCorpAut($$(this).data('aut'));
                if (!autDefault.state) {
                  if (!autDefault.handle) {
                    $$(this).attr('href', '#');
                    $$(this).on('click', function () {
                      myApp.toast(autDefault.errMessage, 'tips').show(true);
                    });
                  } else {
                    autDefault.handle();
                  }
                }
              }
            });
          });
        }

        //是否有促销
        // cb.rest.getJSON({
        //     url: cb.router.HTTP_PRODUCT_ISHAVEPROMOTION,
        //     success: function (data) {
        //         if (data.code == 200)
        //             cb.rest.appContext.isHavePromotion = !!data.data;
        //     }
        // });
        showHomePage = function showHomePage() {
          myApp.closeModal('.login-screen.modal-in'); //该代码是因为纠正安卓2.0版登录bug
          myApp.closeModal('.popup.popup-login');
          var user = cb.rest.appContext.context;
          if ((!user.relations || user.relations.length <= 0) && cb.rest.appContext.context.isAgent) {
            cb.utils.CookieParser.delCookie('userId');
            cb.utils.CookieParser.delCookie('tenantId');
            myApp.modal({
              title: '<div class="common-tips-title warning-tips">' + '<i class="icon icon-warning"></i><span  class="font-23">' + lang.templateByUuid("UID:P_UDHMC_17EC591E05880576", "提示信息") /* "提示信息" */ + '</span>' + '</div>',
              text: '<div class="common-tips-content">' + '<div class="tips-info">' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805A5", "企业和当前客户之间没有有效的交易关系，请联系企业管理员设置") /* "企业和当前客户之间没有有效的交易关系，请联系企业管理员设置" */ + '</div>' + '</div>',
              buttons: [{
                text: lang.templateByUuid("UID:P_UDHMC_17EC591E058805A9", "确定") /* "确定" */,
                onClick: function onClick() {
                  cb.rest.outLogin();
                }
              }]
            });
            return false;
          }
          if (cb.rest.appContext.context.isAgent) {
            cb.rest.getJSON({
              url: cb.router.HTTP_AGENT_HEARTBEAT + '&date=' + new Date().getTime(),
              success: function success(res) {
                if (res.data.status === 'EXCEEDED' || res.data.status === 'EXPIRED') {
                  myApp.modal({
                    title: '<div class="common-tips-title warning-tips">' + '<i class="icon icon-warning"></i><span  class="font-23">' + lang.templateByUuid("UID:P_UDHMC_17EC591E05880576", "提示信息") /* "提示信息" */ + '</span>' + '</div>',
                    text: '<div class="common-tips-content">' + '<div class="tips-info">' + res.data.message + '</div>' + '</div>',
                    buttons: [{
                      text: lang.templateByUuid("UID:P_UDHMC_17EC591E058805A9", "确定") /* "确定" */,
                      onClick: function onClick() {
                        cb.utils.CookieParser.delCookie('userId');
                        cb.utils.CookieParser.delCookie('tenantId');
                        //清除心跳服务定时器
                        if (cb.rest.appContext.hearBeat) {
                          clearInterval(cb.rest.appContext.hearBeat);
                        }
                        if (cb["native"].isEsnApp()) {
                          //友空间中 退出应用
                          mtl.closeCurrentWebview({
                            'success': function success(res) {
                              console.log('success');
                            },
                            'fail': function fail(err) {
                              console.log('fail');
                            },
                            'complete': function complete(res) {
                              console.log('complete');
                            }
                          });
                        } else {
                          cb.rest.appContext.clear();
                          cb.rest.checkWXLogin();
                        }
                      }
                    }]
                  });
                } else {
                  var time = window.__config__.heartbeatTime ? window.__config__.heartbeatTime * 60 * 1000 : 600000;
                  cb.rest.appContext.hearBeat = setInterval(function () {
                    cb.rest.getJSON({
                      url: cb.router.HTTP_AGENT_HEARTBEAT + '&date=' + new Date().getTime(),
                      success: function success(res) {
                        if (res.data.status === 'EXCEEDED' || res.data.status === 'EXPIRED') {
                          myApp.modal({
                            title: '<div class="common-tips-title warning-tips">' + '<i class="icon icon-warning"></i><span  class="font-23">' + lang.templateByUuid("UID:P_UDHMC_17EC591E05880576", "提示信息") /* "提示信息" */ + '</span>' + '</div>',
                            text: '<div class="common-tips-content">' + '<div class="tips-info">' + res.data.message + '</div>' + '</div>',
                            buttons: [{
                              text: lang.templateByUuid("UID:P_UDHMC_17EC591E058805A9", "确定") /* "确定" */,
                              onClick: function onClick() {
                                //清除心跳服务定时器
                                if (cb.rest.appContext.hearBeat) {
                                  clearInterval(cb.rest.appContext.hearBeat);
                                }
                                if (cb["native"].isEsnApp()) {
                                  //友空间中 退出应用
                                  mtl.closeCurrentWebview({
                                    'success': function success(res) {
                                      console.log('success');
                                    },
                                    'fail': function fail(err) {
                                      console.log('fail');
                                    },
                                    'complete': function complete(res) {
                                      console.log('complete');
                                    }
                                  });
                                } else {
                                  cb.rest.appContext.clear();
                                  cb.rest.checkWXLogin();
                                }
                              }
                            }]
                          });
                        }
                      },
                      error: function error(e) {
                        myApp.toast(e.message, 'error').show(true);
                      }
                    });
                  }, time);
                }
              },
              error: function error(e) {
                myApp.toast(e.message, 'error').show(true);
              }
            });
          }
          var redirectUrl = cb.utils.getUrlParam("redirectUrl");
          var param = cb.utils.getUrlParam("redirectUrlparam");
          var hasLive = false;
          if (param) {
            var paramArray = param.split("*");
            var hasLiveParam = paramArray.filter(function (item) {
              return item.indexOf('hasLive') > -1;
            });
            if (hasLiveParam.length > 0) {
              var value = hasLiveParam[0].slice(hasLiveParam[0].indexOf('~') + 1) === 'true';
              if (value) {
                hasLive = true;
              }
            }
          }
          if (redirectUrl) {
            //自动登录 //redirectUrl=pages_user   //redirectUrl=pages_productDetail&redirectUrlparam=pid~33164
            redirectUrl = redirectUrl.replace(/_/g, "/") + ".html";
            myApp.showIndicator();
            if (window.__config__.productLine && window.__config__.productLine == 'u8c') {
              cb.rest.checkAgentHome();
            }
            cb.rest.appContext.isAutoRedirect = true; // 自动跳转标志

            if (cb.rest.appContext.insteadAgent) cb.rest.appContext.initApp(false);
            var isFind = false;
            $$("#upContentViews .view").each(function () {
              var $this = $$(this);
              if ($this.data("url").indexOf(redirectUrl) >= 0) {
                $$('#' + $this.attr("id")).trigger('show');
                isFind = true;
              }
            });
            if (!isFind) {
              if (cb.rest.defineRouters && cb.rest.defineRouters.pages && !cb.rest.defineRouters.pageCode && cb.FunctionOptions.OPENSHOPDECORATION) {
                $$('#view-2').trigger('show');
              } else {
                if (redirectUrl) {
                  if (param) {
                    redirectUrl += "?";
                    var paramKV = param.split("*");
                    for (var i = 0; i < paramKV.length; i++) {
                      redirectUrl += paramKV[i].replace("~", "=") + "&";
                    }
                    redirectUrl = redirectUrl.substr(0, redirectUrl.length - 1);
                    redirectUrl += '&noback=true';
                  } else {
                    redirectUrl += '?noback=true';
                  }
                  if (hasLive) {
                    myApp.hideIndicator();
                    localStorage.setItem('isShowHomeLoading', true);
                    $$('#view-1').attr('data-url', 'pages/home.html');
                    $$('#view-1').trigger('show');
                    var loadChackTimeMark = setInterval(function () {
                      if ($$(myApp.mainView.selector).data("page")) {
                        clearInterval(loadChackTimeMark);
                        setTimeout(function () {
                          var reload = cb.utils.getUrlParam('reload', redirectUrl);
                          myApp.mainView.router.loadPage({
                            url: redirectUrl,
                            reload: reload ? reload == 'true' : true
                          });
                        }, 500);
                      }
                    }, 100);
                  } else {
                    $$('#view-1').attr('data-url', redirectUrl);
                  }
                }
                if (!hasLive) {
                  $$('#view-1').trigger('show');
                  setTimeout(function () {
                    myApp.hideIndicator();
                    $$('#view-1').attr('data-url', 'pages/home.html');
                  }, 300);
                }
              }

              // var loadChackTimeMark = setInterval(function () {
              //     if ($$(myApp.mainView.selector).data("page")) {
              //         clearInterval(loadChackTimeMark);
              //         setTimeout(function () {
              //             var reload = cb.utils.getUrlParam('reload', redirectUrl);

              //             myApp.mainView.router.loadPage({
              //                 url: redirectUrl,
              //                 reload: reload ? (reload == 'true') : true
              //             });
              //             setTimeout(function () {
              //                 myApp.hideIndicator();
              //                 $$('.switch.allWhitebg').addClass('hide');
              //             }, 300);
              //         }, 500);
              //     }
              // }, 100);
            } else {
              myApp.hideIndicator();
            }
            cb.rest.reloadShoppingCartCount();
          } else {
            cb.rest.appContext.isAutoRedirect = false; // 自动跳转标志
            if (cb.rest.runtime.env && cb.rest.runtime.env == 'u8c') {
              //如果url中functionType字段值为2或4跳转到选择客户页 
              if (cb.utils.getUrlParam("functionType") == 2 || cb.utils.getUrlParam("functionType") == 4) {
                var defaultOptions = {
                  preprocess: function preprocess(content, url, next) {
                    return cb.preprocess(content, url, next);
                  }
                };
                $$("#view-1").addClass("active");
                myApp.addView('.view-main', defaultOptions).router.loadPage({
                  url: 'corpPages/generationOfOrder.html'
                });
              } //如果url中functionType字段值为3跳转到渠道交易关系页 
              else if (cb.utils.getUrlParam("functionType") == 3) {
                var defaultOptions = {
                  preprocess: function preprocess(content, url, next) {
                    return cb.preprocess(content, url, next);
                  }
                };
                $$("#view-1").addClass("active");
                myApp.addView('.view-main', defaultOptions).router.loadPage({
                  url: 'corpPages/generationOfOrderForChannel.html'
                });
              } else {
                cb.rest.checkAgentHome(function () {
                  if (cb.FunctionOptions.OPENSHOPDECORATION && window.__config__.newHome) {
                    var arr = cb.rest.appContext.lang && cb.rest.appContext.lang.split('-');
                    var langStr = arr[0] + '_' + arr[1].toUpperCase();
                    var query = Object.assign({}, $$.parseUrlQuery(window.location.search) || {}, {
                      // corpid: cb.rest.appContext.context,
                      locale: langStr,
                      timestamp: Math.random()
                    });
                    window.location.replace(window.location.origin + '/render/udinghuo/home');
                  } else {
                    $$('#view-1').trigger('show');
                    myApp.showToolbar('.toolbar.homeNavBar');
                    myApp.closePanel();
                  }
                });
              }
            } else {
              $$('#view-1').trigger('show');
              myApp.showToolbar('.toolbar.homeNavBar');
              myApp.closePanel();
            }
            if (cb["native"].isWeiXin()) cb.rest.execWxTask();
          }
          if (cb.rest.appContext.context.isAgent && !cb["native"].localStorage.getExpire('initOrder')) {
            var relationIdArr = [];
            if (cb.FunctionOptions && !cb.FunctionOptions.ORDERSHOWWAY) {
              relationIdArr.push(cb["native"].localStorage.get('relationId'));
              cb.rest.postData({
                url: cb.router.HTTP_ORDER_INITORDERHEADERS,
                params: relationIdArr,
                success: function success(data) {
                  cb["native"].localStorage.setExpire('initOrder', 'true', 1000 * 60 * 2);
                },
                error: function error(err) {
                  myApp.toast(err.message, 'error').show(true);
                }
              });
            }
          }
        };
        cb.rest.appContext.showHomePage = showHomePage;
        //隐藏价格查询
        cb.rest.getJSON({
          url: cb.router.HTTP_AGENT_GETUSESETTINGFORHIDEPRICE,
          success: function success(data) {
            if (!data.data || data.data.length == 0) {
              cb.rest.appContext.hidePrice = cb.rest.status.notData;
            } else {
              data.data.forEach(function (item) {
                if (item.fieldsCode === 'fPromotionMoney' || item.fieldsCode === 'fParticularlyMoney' || item.fieldsCode === 'fRebateMoney') {
                  item.checkZero = true;
                }
              });
              cb.rest.appContext.hidePrice = data.data;
            }
          },
          error: function error() {
            cb.rest.appContext.hidePrice = cb.rest.status.ajaxErrorCode;
          }
        });
        if (cb["native"].localStorage.get("insteadAgent") || cb.rest.appContext.corpUser == false || !cb.rest.appContext.corpUser) {
          //订货用户
          insteadAgent = cb["native"].localStorage.get("insteadAgent");
          if (insteadAgent && cb.utils.isJson(insteadAgent) && window.location.href.indexOf('defineRouter') > 0) {
            cb.rest.appContext.insteadAgent = JSON.parse(insteadAgent);
            cb.rest.appContext.isAgentOrder = true;
            cb.rest.appContext.iAgentId = cb.rest.appContext.insteadAgent.agentId;
          }
          //bizMode  1:单组织单级经销商  2:单组织多级经销商  3:多组织单级经销商  4:多组织多级经销商
          //用户类型: 0:经销商用户 1:企业注册者 2:经销商 3:企业自己的人 5:运营管理员 6:租户游客 9:商家管理员 10:商家业务员 99:未知用户

          upmodels.queryAuths(cb.rest.appContext.insteadAgent && cb.rest.appContext.insteadAgent.agentId || cb.rest.appContext.context.agentId, function () {
            cb.rest.initToolbars(function () {
              showHomePage();
            });
          });
        } else {
          //企业用户
          cb.rest.appContext.isAgentOrder = cb.rest.appContext.isRelationOrder = false;
          cb["native"].localStorage.remove("insteadAgent");
          cb.rest.initToolbars(function () {
            showHomePage();
          });
        }

        //隐藏注册图标
        if (!cb.rest.checkDemoLogin()) {
          $$('.experience-envir2').addClass('hide');
        }
      case 17:
      case "end":
        return _context.stop();
    }
  }, _callee);
}));
cb.rest.getLimitOrderTime = function (bizId) {
  var __user = cb.rest.appContext.context;
  var bizIdArr = [];
  if (cb.FunctionOptions && cb.FunctionOptions.ORDERSHOWWAY) {
    __user && __user.relations && __user.relations.forEach(function (v) {
      bizIdArr.push(v.bizId);
    });
  } else {
    if (bizId) {
      bizIdArr.push(bizId);
    } else {
      bizIdArr.push(cb["native"].localStorage.get('currentBizId'));
    }
  }
  var orgIds = [cb.FunctionOptions && cb.FunctionOptions.ORDERSHOWWAY ? '666666' : cb["native"].localStorage.get('currentOrgId')];
  cb.rest.postData({
    url: cb.router.HTTP_ORDER_GETLIMITTIME,
    params: {
      bizIds: bizIdArr,
      orgIds: orgIds
    },
    success: function success(res) {
      if (res.code === 200) {
        if (res.data && res.data.length > 0) {
          var limitOrderInfo = [];
          (cb.FunctionOptions && cb.FunctionOptions.ORDERSHOWWAY ? bizIdArr : orgIds).map(function (item) {
            var _index = limitOrderInfo.filter(function (val) {
              return String(val.limitId) === item;
            });
            var weekMap = new Map([['1', lang.templateByUuid('UID:P_UDHMC_17EC591E05880119', '一')], ['2', lang.templateByUuid('UID:P_UDHMC_17EC591E0588011A', '二')], ['3', lang.templateByUuid('UID:P_UDHMC_17EC591E0588011B', '三')], ['4', lang.templateByUuid('UID:P_UDHMC_17EC591E05880116', '四')], ['5', lang.templateByUuid('UID:P_UDHMC_17EC591E0588011C', '五')], ['6', lang.templateByUuid('UID:P_UDHMC_17EC591E05880117', '六')], ['7', lang.templateByUuid('UID:P_UDHMC_17EC591E05880118', '日')]]);
            if (_index.length === 0) {
              var limitOrderInfo1 = [];
              var limitOrderInfoTime = [];
              var limitOrderInfo2 = res.data.filter(function (val) {
                return cb.FunctionOptions && cb.FunctionOptions.ORDERSHOWWAY ? val.bizId === item : val.orgId === item || val.orgId === '666666';
              });
              limitOrderInfo2 && limitOrderInfo2.map(function (val2, key) {
                limitOrderInfoTime.push({
                  id: key,
                  limtStartTime: val2.startTime,
                  limtEndTime: val2.endTime,
                  limtDateDay: val2.dateDay || '',
                  limitWeekDay: weekMap.get(val2.weekDay) || ''
                });
              });
              if (limitOrderInfo2.length > 0 || limitOrderInfoTime > 0) {
                limitOrderInfo1.push({
                  limitId: item,
                  limtShopName: limitOrderInfo2[0].shopName,
                  limitOrderInfoTime: limitOrderInfoTime
                });
              }
              limitOrderInfo = limitOrderInfo.concat(limitOrderInfo1);
            }
          });
          cb.rest.isShowLimitInfo = true;
          cb.rest.limitOrderInfo = limitOrderInfo;
          cb.rest.initToolbars(function () {
            cb.rest.appContext.showHomePage();
          }, true);
        } else {
          cb.rest.isShowLimitInfo = false;
          cb.rest.limitOrderInfo = [];
          cb.rest.initToolbars(function () {
            cb.rest.appContext.showHomePage();
          }, true);
        }
      }
    },
    error: function error(err) {
      myApp.toast(err.message, 'error').show(true);
    }
  });
};
cb.rest.wxBindUser = function (loginInfo, callback) {
  if (cb["native"].isWeiXin()) {
    var query = $$.parseUrlQuery(location.search);
    var params = [];
    var wid = query.wid || cb["native"].localStorage.get('wid');
    var OpenID = query.OpenID || cb["native"].localStorage.getCookie('OpenID');
    if (wid && OpenID) {
      params.push({
        userId: loginInfo.userId,
        openId: OpenID,
        weId: wid
      });
      cb.confirm(lang.templateByUuid("UID:P_UDHMC_17EC591E058805DA", "是否与公众号建立绑定，以便获得单据消息推送？") /* "是否与公众号建立绑定，以便获得单据消息推送？" */, lang.templateByUuid("UID:P_UDHMC_17EC591E05880576", "提示信息") /* "提示信息" */, function () {
        cb.rest.postData({
          url: cb.router.HTTP_COMMON_BINDUSER,
          params: params,
          success: function success(data) {
            if (callback && data.code == 200) {
              callback();
            }
          },
          error: function error(err) {
            myApp.toast(err.message, 'tips').show(true);
          }
        });
      }, null, lang.templateByUuid("UID:P_UDHMC_17EC591E058805E0", "立即绑定") /* "立即绑定" */, lang.templateByUuid("UID:P_UDHMC_17EC591E058805DF", "下次再说") /* "下次再说" */);
    }
  }
};

cb.rest.bindUserOpenId = function () {
  var query = $$.parseUrlQuery(location.search);
  var OpenID = query.OpenID || cb["native"].localStorage.getCookie('OpenID');
  if (!cb["native"].isWeiXin() || !cb.rest.appContext.context.isAgent || !OpenID) return;
  cb.rest.postData({
    url: cb.router.HTTP_AGENT_BINDAGENTUSEROPENID,
    params: {
      open_id: OpenID
    },
    success: function success(data) {
      if (data.code) console.log('openId bind sucess!!');
    },
    error: function error(e) {
      console.log(e.message);
    }
  });
};
cb.rest.yiguanAnalysis = function () {
  cb.rest.getJSON({
    url: cb.router.HTTP_AGENT_YIGUANANS.format(cb.rest.appContext.context.userId),
    success: function success(data) {
      if (data.data && window.AnalysysAgent) {
        window.AnalysysAgent.alias(cb.rest.appContext.context.userId.toString());
        var property = {
          tenant_id: data.data.tenantId,
          company: data.data.corpInfo && data.data.corpInfo.name,
          user_id: cb.rest.appContext.context.userId.toString(),
          user_name: data.data.userInfo && data.data.userInfo.userName,
          product_id: "Uorder",
          product_name: lang.templateByUuid("UID:P_UDHMC_17EC591E05880581", "U订货") /* "U订货" */,
          terminal: cb.rest.appContext.context.isAgent ? 'orderAPP_0' : 'manageAPP_1'
        };
        window.AnalysysAgent.profileSet(property);
        window.AnalysysAgent.registerSuperProperties(property);
        window.AnalysysAgent.track('login_in');
      }
    },
    error: function error(e) {
      myApp.toast(e.message, 'error').show(true);
    }
  });
};
cb.rest.loadExtendScript = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params, callback) {
    var query, param;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (window.navigator.onLine) {
            _context2.next = 3;
            break;
          }
          myApp.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E058805AD", "你的网络信号好像飞走了...") /* "你的网络信号好像飞走了..." */, 'error').show(true);
          return _context2.abrupt("return", false);
        case 3:
          if (params.controllerName === 'DefineJoinController') {
            //申请加盟页需要那些参数
            query = $$.parseUrlQuery(params.router);
          } else {
            query = $$.parseUrlQuery(location.href);
          }
          param = {
            rotues: params.router
          };
          if (param.rotues && param.rotues.indexOf('?') > 0) param.rotues = param.rotues.substr(0, param.rotues.indexOf('?'));
          if (query.comKey || query.alias) {
            param.yhtTenantId = param.alias = query.comKey || query.alias;
          }
          cb.rest.getJSON({
            url: cb.router.HTTP_BASE_EXTAPIREGISTER,
            params: param,
            success: function success(data) {
              if (Array.isArray(data.data) && data.data.length) {
                if (!upcommon.regs.url.test(data.data[0].extApiUrl)) {
                  if (callback) callback();
                  return;
                }
                $$.ajax({
                  url: cb.rest.getUrl(cb.router.HTTP_DEFINES_GETEXTENDJS),
                  method: 'POST',
                  timeout: 30000,
                  data: JSON.stringify({
                    url: data.data[0].extApiUrl
                  }),
                  contentType: 'application/json',
                  success: function success(extendData) {
                    if (extendData && typeof extendData === 'string') {
                      try {
                        var events = new Function(extendData)();
                        if (events && _typeof(events) === 'object') {
                          for (var attr in events) {
                            UOrderApp.pages[params.controllerName].prototype[attr] = events[attr];
                          }
                        }
                      } catch (e) {
                        console.error('扩展脚本异常：url: [{0}] control:[{1}]'.format(data.data[0].extApiUrl, params.controllerName));
                        console.error('error maeesage: ' + e.message.toString());
                      }
                    }
                    if (callback) callback();
                  },
                  error: function error(xhr, status) {
                    console.error("扩展脚本加载失败:" + status);
                    if (callback) callback();
                  }
                });
              } else if (callback) callback.call(this);
            },
            error: function error(e) {
              myApp.toast(e.message, 'error').show(true);
              if (callback) callback.call(this);
            }
          });
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
cb.rest.execWxTask = function () {
  if (!cb["native"].wxTask || !cb["native"].wxTask.length) return;
  var task = cb["native"].wxTask.pop();
  var userId = cb["native"].localStorage.get("userId");
  var callback = function callback() {
    cb.rest.wxSetInterval = setInterval(function () {
      var url = '';
      if (myApp.mainView && myApp.mainView.allowPageChange) {
        clearInterval(cb.rest.wxSetInterval);
        switch (task.orderType) {
          case "ORDER":
            url = 'pages/orderDetail.html?oid=' + task.no;
            break;
          case "PAYMENT": //支付单
          case "REFUND":
            //退款单
            url = "pages/orderStatus-pay.html?cPayNo=" + task.no;
            break;
          case 'NOTICE':
            url = 'pages/noticeDetail.html?id=' + task.no;
            break;
          case 'REBATE':
            url = 'pages/noticeDetail.html?id=' + task.no;
            break;
          case 'SALERETURN':
            url = 'pages/orderCancelInfo.html?oid=' + task.no;
            break;
          default:
            //其他的提示不支持   //费用单,退款单 之类的
            myApp.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E058805BA", "暂不支持该类型消息查看,未来版本会支持") /* "暂不支持该类型消息查看,未来版本会支持" */, 'tips').show(true);
        }
        setTimeout(function () {
          myApp.mainView.router.loadPage({
            url: url
          });
        }, 400);
      }
    }, 100);
  };
  if (task.userId == userId) callback();else {
    cb.rest.switchAccent(userId, callback);
  }
};
//打开外部链接
cb.rest.openLink = function (menu) {
  var self = this;
  if (menu.url) {
    var cloneMenu = cb.utils.extend(true, {}, menu);
    cloneMenu.isNativeShow = cloneMenu.openType == 3;
    if (menu.url.startWith('pages/')) {
      myApp.mainView.router.load({
        url: menu.url
      });
    } else {
      if (window.plus && cloneMenu.isNativeShow) {
        cb["native"].openNewView(cloneMenu);
      } else {
        if (cloneMenu.openType == 0) {
          if (cb["native"].isWeiXin()) {
            if (window.location.href.indexOf('wid') > 0) {
              var oid = cb.utils.getUrlParam('OpenID') || cb["native"].localStorage.getCookie('OpenID') || ''; //判断是否存储了OpenId
              var cLinkToken = cb.utils.getUrlParam('cLinkToken') || cb["native"].localStorage.getCookie('cLinkToken') || '';
              cloneMenu.url += '&wid={0}&oid={1}&cLinkToken={2}'.format(cb.utils.getUrlParam('wid'), oid, cLinkToken);
            } else cloneMenu.url += '&env=weixin';
          }
          window.location.href = cloneMenu.url;
        } else {
          cloneMenu.data = {};
          cb.rest.getJSON({
            url: cb.router.HTTP_AGENT_INITIFRAMEURL.format(cloneMenu.id),
            success: function success(data) {
              if (data.code == 200 && menu.url) {
                cb["native"].setMainDomainCookie('yht_access_token', cb.rest.appContext.token);
                if (cb.FunctionOptions && !cb.FunctionOptions.ORDERSHOWWAY) {
                  data.data.url = "".concat(data.data.url, "&bizId=").concat(cb.rest.appContext.context.currentBizId, "&orgId=").concat(cb.rest.appContext.context.currentOrgId);
                }
                if (menu.code.indexOf('ausaBiddingHallMobile') > -1) {
                  cb["native"].localStorage.set('ausaBiddingHallMobileUrl', data.data.url);
                }
                if (cb["native"].isEsnApp() && mtl && menu.code.indexOf('ausaBiddingHallMobile') > -1) {
                  mtl.navigateTo({
                    url: "".concat(data.data.url, "&url=").concat(window.location.href)
                  });
                } else {
                  cb["native"].frames({
                    url: data.data.url,
                    name: data.data.name
                  }, function (data) {
                    console.log(data);
                    cb["native"].setMainDomainCookie('yht_access_token', '', -1, '/');
                  });
                }
              }
            }
          });
        }
      }
    }
  }
};
cb.rest.switchAccent = function (userId, callback) {
  cb.rest.getJSON({
    url: cb.router.HTTP_AGENT_SWITCHLOGININFO.format(userId),
    success: function success(data) {
      if (data.code == 200 && data.data) {
        cb.utils.CookieParser.setCookie('userId', userId);
        var loginUser = data.data.detail[0];
        if (Array.isArray(data.data.relations) && data.data.relations.length) {
          loginUser.relations = data.data.relations;
          cb.rest.appContext.context.currentRelationId = loginUser.relations[0].id;
          cb["native"].localStorage.set('relationId', cb.rest.appContext.context.currentRelationId);
        }
        cb.rest.appContext.token = data.data.token;
        if (cb["native"].isWxMiniProgram()) {
          mtl && mtl.setStorage({
            key: "udhToken",
            data: cb.rest.appContext.token,
            success: function success() {
              // 成功回调
              console.log("存储成功！！！");
            }
          });
        }
        cb["native"].setMainDomainCookie('yht_udh_access_token', cb.rest.appContext.token);
        cb.rest.appContext.context = loginUser;
        cb.rest.appContext.context.isShowOrgs = (loginUser.bizMode == 3 || loginUser.bizMode == 4) && loginUser.userType != 9 && loginUser.userType != 10;
        cb.rest.appContext.context.isMultBizs = loginUser.bizMode == 2 || loginUser.bizMode == 4;
        cb.rest.appContext.userId = loginUser.userId;
        cb.rest.appContext.corpUser = loginUser.isAgent ? false : true;
        cb.rest.appContext.context.isOpenYht = !!data.data.isOpenYht;
        cb["native"].localStorage.set("uptoken", cb.rest.appContext.token);
        cb["native"].localStorage.set("cUserName", loginUser.cUserName);
        cb["native"].localStorage.set('userId', loginUser.userId);
        cb["native"].localStorage.set("loginContext", JSON.stringify(cb.rest.appContext.context));
        cb["native"].localStorage.set('corpUser', cb.rest.appContext.corpUser); // 账户类型

        //清除Url数据缓存
        cb.rest.clearUrlCache();
        cb.rest.appContext.doLogin();
        if (callback) callback();
      }
    },
    error: function error(err) {
      myApp.toast(err.message, 'error').show(true);
    }
  });
};
cb.rest.outLogin = function () {
  //清除订货端心跳服务定时器
  if (cb.rest.runtime.env === 'u8c') {
    if (cb.rest.appContext.context && cb.rest.appContext.context.isAgent) {
      clearInterval(cb.rest.appContext.hearBeat);
    }
  }
  var loginOutFunc = function loginOutFunc() {
    var deliveryDeviceType = function deliveryDeviceType() {
      var deviceType;
      if (cb["native"].isEsnApp()) {
        deviceType = 1;
      } else if (cb["native"].isApiCloudApp() || window.plus) {
        // 苹果app或安卓app
        deviceType = 2;
      } else if (cb["native"].isWxMiniProgram()) {
        deviceType = 3;
      } else if (cb["native"].isWeiXin()) {
        deviceType = 4;
      }
      return deviceType;
    };
    cb.rest.postData({
      url: cb.router.HTTP_AGENT_MLOGOUT,
      params: {
        loginDeviceType: deliveryDeviceType(),
        originalLoginUrl: location.href.indexOf('?') > -1 ? location.href.split('?')[0] : location.href
      },
      success: function success(data) {
        if (data.code == 200) {
          cb.rest.appContext.clear(function () {
            cb.rest.clearUrlCache();
            if (cb.rest.defineRouters && cb.rest.defineRouters.login) {
              window.location.href = cb.rest.defineRouters.login;
              return;
            }
            //myApp.mainView.router.back();
            myApp.loginScreen();
            myApp.popup('.popup.popup-login');
            cb.cache.showLogin();

            //解决忘记密码页面出现bottom-bar的问题
            $$('.bottom-bar.row').hide();
            $$('.icon-count.order').hide();

            //体验用户登陆，删除注册图标
            if (cb.rest.checkDemoLogin()) {
              $$('.experience-envir2').addClass('hide');
            }
            if (!cb.utils.getUrlParam("title")) {
              // 这个title是小程序webview src h5 上挂的title  一般是专属化小程序要求一直显示自己的title 才会配置，注意配置的时候title的value不要写字符串
              window.document.title = lang.templateByUuid("UID:P_UDHMC_17EC591E05880586", "订货门户"); /* "订货门户" */
            }
          });
        }
      },

      error: function error(data) {
        myApp.toast(data.message, 'error').show(true);
      }
    });
  };
  if (window.plus) {
    //如果是在手机中,则需要清空用户和设备的绑定关系
    var cDeviceId = plus.push.getClientInfo().clientid;
    if (cDeviceId) {
      cb.rest.postData({
        url: cb.router.HTTP_AGENT_DELMOBILEDEVICE,
        params: {
          clientId: cDeviceId
        },
        success: function success(data) {
          loginOutFunc();
        },
        error: function error(data) {
          myApp.toast(data.message, 'error').show(true);
        }
      });
    }
  } else loginOutFunc();
};

// 用于判断是否冻结当前账号
// 该功能用于订货端，非订货端上下文不会返回交易关系，所以直接给false;
cb.rest.isfreezeAccount = function (bizId) {
  var __user = cb.rest.appContext.context;
  if (__user.corpUser) return false;
  if (__user.bizMode === 1) {
    var relation = __user.relations[0];
    if (relation) return relation.freezeAccountFlag;
    return false;
  }
  if (bizId) {
    var relation = __user.relations.find(function (relation) {
      return relation.bizId === bizId;
    });
    if (relation) return relation.freezeAccountFlag;
    console.error('has not relations for biz' + bizId);
    return false;
  }
  var ORDERSHOWWAY = cb.FunctionOptions.ORDERSHOWWAY;
  if (ORDERSHOWWAY === true) return false; //平台模式不冻结
  // 商家模式根据当前交易关系判断是否冻结
  var relationId = __user.currentRelationId || cb["native"].localStorage.get('relationId');
  var relation = __user.relations.find(function (relation) {
    return relation.id === relationId;
  });
  if (relation) return relation.freezeAccountFlag;
  console.error('has not relation for' + relationId);
  return false;
};
cb.rest.isNonfreezeAccount = function (bizId) {
  return !cb.rest.isfreezeAccount(bizId);
};
cb.cache = {
  get: function get(cacheName) {
    return this[cacheName];
  },
  set: function set(cacheName, value) {
    this[cacheName] = value;
  },
  del: function del(cacheName) {
    if (cacheName.indexOf(',') > 0) {
      var cacheNameList = cacheName.split(',');
      for (var attr in cacheNameList) {
        var attrValue = cacheNameList[attr];
        delete this[attrValue];
      }
    } else delete this[cacheName];
  },
  clear: function clear() {
    for (var attr in this) if (attr != "get" && attr != "set" && attr != "del" && attr != "clear" && attr != 'showLogin') delete this[attr];
  },
  showLogin: function showLogin() {
    // 小程序和移动工作台打包出来的ios app 获取隐私协议最新版本 来判断是否弹窗
    if (cb["native"].isWxMiniProgram() || cb["native"].isApiCloudApp()) {
      cb.rest.getPrivacyPolicyLastversion();
    }
    var timer = setInterval(function () {
      if ($$(".popup.popup-login").css('display') == 'none') {
        clearInterval(timer);
        $$(".popup.popup-login").css('display', 'block');
      }
    }, 30);
    setTimeout(function () {
      clearInterval(timer);
    }, 2000);
  }
};
cb.rest.appContext.clear = function (callback) {
  $$("#loginState").val('fasle'); //登录状态变为false
  cb["native"].localStorage.remove("corpUser");
  cb["native"].localStorage.remove("userId");
  cb["native"].localStorage.remove("userId");
  cb["native"].localStorage.remove("cUserName");
  cb["native"].localStorage.remove("isDemoLogin");
  cb["native"].localStorage.remove("loginContext");
  cb["native"].localStorage.remove("relationId");
  cb["native"].localStorage.remove("dataCenterAndOriginRepeat");
  cb["native"].localStorage.remove("originUrl");
  if (cb.FunctionOptions && cb.FunctionOptions.ORDERSHOWWAY) {
    cb["native"].localStorage.remove('storageRelationId');
  }
  cb["native"].localStorage.remove("insteadAgent");
  cb["native"].localStorage.remove("currentOnlinePayType");
  cb["native"].localStorage.remove('ausaBiddingHallMobileUrl');
  cb["native"].localStorage.remove('initOrder');
  cb.rest.appContext.userId = null;
  cb.rest.appContext.corpUser = null;
  cb["native"].localStorage.remove("uptoken");
  cb["native"].localStorage.remove("recommendProducts");
  cb["native"].localStorage.remove("allProducts");
  cb["native"].localStorage.remove("scartSelected");
  cb["native"].localStorage.remove("mbScartInvalid");
  cb["native"].localStorage.remove('storeMudhOrder');
  cb.utils.CookieParser.delCookie('a10');
  delete cb.rest.appContext.context;
  delete cb.rest.appContext.insteadAgent;
  cb.rest.appContext.isAgentOrder = cb.rest.appContext.isRelationOrder = cb.temp.closePopNotices = false;
  cb.rest.appContext.token = null;
  cb.rest.appContext.autData = null;
  cb.rest.appContext.hidePrice = null;
  cb.rest.appContext.iAgentId = null;
  cb.rest.appContext.orderDetailAut = null;
  cb.rest.appContext.agentContentHtml = cb.rest.appContext.corpContentHtml = null;
  if (cb["native"].isWxMiniProgram()) {
    mtl && mtl.removeStorage({
      key: "udhToken",
      success: function success() {
        // 成功回调
        console.log('移除成功udhToken成功!!!');
      }
    });
  }
  cb.cache.clear();
  cb["native"].setMainDomainCookie('yht_udh_access_token', '', -1, '/');
  if (window.applicationCache && window.applicationCache.status == window.applicationCache.UPDATEREAD) {
    window.applicationCache.update();
  }
  if (cb["native"].isWxMiniProgram() && cb.utils.getUrlParam("useWxStore") && !cb["native"].localStorage.get("dataCenterUrl")) {
    wx.miniProgram.redirectTo({
      url: "/pages/logs/logs"
    });
    return;
  }
  setTimeout(function () {
    if (callback && typeof callback === 'function') {
      callback();
    }
    ;
  }, 100);
};
cb.utils.upFormatDate = function (strDateTime, intType) {
  var years, month, days, hours, minutes, seconds;
  var newDate,
    arrDate = new Array(),
    arrTime = new Array();
  if (strDateTime != undefined && strDateTime != null && strDateTime != "") {
    if (strDateTime instanceof Date) {
      newDate = strDateTime;
    } else {
      //获取日期和时间数组 
      if (strDateTime.indexOf("-") != -1) {
        var item = strDateTime.split(" ");
        arrDate = item[0].toString().split("-");
        arrTime = item[1].toString().split(":");
      } else if (strDateTime.indexOf("/") != -1) {
        var item = strDateTime.split(" ");
        arrDate = item[0].toString().split("/");
        arrTime = item[1].toString().split(":");
      }
      newDate = new Date(parseInt(arrDate[0]), parseInt(cb.utils.FloatCalc.sub(arrDate[1], 1)), parseInt(arrDate[2]), parseInt(arrTime[0]), parseInt(arrTime[1]), parseInt(arrTime[2]));
    }

    //处理数据 
    years = newDate.getFullYear();
    month = newDate.getMonth();
    month = month + 1;
    if (Number(month) < 10) month = "0" + month;
    days = newDate.getDate();
    if (Number(days) < 10) days = "0" + days;
    hours = newDate.getHours();
    if (Number(hours) < 10) hours = "0" + hours;
    minutes = newDate.getMinutes();
    if (Number(minutes) < 10) minutes = "0" + minutes;
    seconds = newDate.getSeconds();
    if (Number(seconds) < 10) seconds = "0" + seconds;
    switch (intType) {
      case 'yyyy-MM-dd':
        newDate = years + "-" + month + "-" + days;
        break;
      case 'MM-dd HH:mm':
        newDate = month + "-" + days + " " + hours + ":" + minutes;
        break;
      case 'HH:mm:ss':
        newDate = hours + ":" + minutes + ":" + seconds;
        break;
      case 'HH:mm':
        newDate = hours + ":" + minutes;
        break;
      case 'yyyy-MM-dd HH:mm':
        newDate = years + "-" + month + "-" + days + " " + hours + ":" + minutes;
        break;
      case 'yyyy/MM/dd':
        newDate = years + "/" + month + "/" + days;
        break;
      case 'MM/dd HH:mm':
        newDate = month + "/" + days + " " + hours + ":" + minutes;
        break;
      case 'yyyy/MM/dd HH:mm':
        newDate = years + "/" + month + "/" + days + " " + hours + ":" + minutes;
        break;
      case 'yy-MM-dd':
        years = years.toString().substr(2, 2);
        newDate = years + "-" + month + "-" + days;
        break;
      case 'yy/MM/dd':
        years = years.toString().substr(2, 2);
        newDate = years + "/" + month + "/" + days;
        break;
      case 'yyyy' + lang.templateByUuid("UID:P_UDHMC_17EC591E0588057A", "年") /* "年" */ + 'MM' + lang.templateByUuid("UID:P_UDHMC_17EC591E0588057C", "月") /* "月" */ + 'dd hh' + lang.templateByUuid("UID:P_UDHMC_17EC591E0588057B", "时") /* "时" */ + 'mm' + lang.templateByUuid("UID:P_UDHMC_17EC591E05880579", "分") /* "分" */:
        newDate = years + lang.templateByUuid("UID:P_UDHMC_17EC591E0588057A", "年") /* "年" */ + month + lang.templateByUuid("UID:P_UDHMC_17EC591E0588057C", "月") /* "月" */ + days + " " + hours + lang.templateByUuid("UID:P_UDHMC_17EC591E0588057B", "时") /* "时" */ + minutes + lang.templateByUuid("UID:P_UDHMC_17EC591E05880579", "分") /* "分" */;
        break;
      case 'yyyy-MM-dd HH:mm:ss':
        newDate = years + "-" + month + "-" + days + " " + hours + ":" + minutes + ":" + seconds;
        break;
    }
  }
  return newDate;
};
cb.utils.jsLoaded = function (url, callback) {
  (function (callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.head.appendChild(script);
    if (document.all) {
      //如果是IE
      script.onreadystatechange = function () {
        if (script.readyState == 'loaded' || script.readyState == 'complete') {
          callback();
        }
      };
    } else {
      script.onload = function () {
        callback();
      };
    }
  })(callback);
};
cb.utils.CookieParser = {
  setCookie: function setCookie(name, value, expireDays) {
    if (expireDays == null) expireDays = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + expireDays * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
  },
  getCookie: function getCookie(name) {
    var arr,
      reg = new RegExp('(^|)' + name + '=([^;]*)(;|$)');
    if (arr = document.cookie.match(reg)) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  },
  delCookie: function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var val = this.getCookie(name);
    if (val != null) {
      document.cookie = name + '=' + val + ';expires=' + exp.toGMTString();
    }
  }
};
cb.utils.getDecode = function (str) {
  return decodeURIComponent(window.atob(str).split("").map(function (c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
};
cb.confirm = function (msg, title, callbackOk, callbackCancel, okButtonText, calcelButtonText) {
  if (arguments.length === 2) {
    if (typeof msg === 'function') {
      callbackOk = msg;
      callbackCancel = callbackOk;
      msg = null;
    }
  }
  if (arguments.length === 1) {
    if (typeof msg === 'function') {
      callbackOk = msg;
      msg = lang.templateByUuid("UID:P_UDHMC_17EC591E0588059E", "确定要删除么？") /* "确定要删除么？" */;
    }
  }

  myApp.modal({
    title: '<div class="common-tips-title warning-tips">' + '<i class="icon icon-warning"></i><span  class="font-23">' + title + '</span>' + '</div>',
    text: '<div class="common-tips-content">' + '<div class="tips-info">' + msg + '</div>' + '</div>',
    buttons: [{
      text: calcelButtonText || lang.templateByUuid("UID:P_UDHMC_17EC591E058805A4", "取消") /* "取消" */,
      onClick: function onClick() {
        if (callbackCancel) callbackCancel();
      }
    }, {
      text: okButtonText || lang.templateByUuid("UID:P_UDHMC_17EC591E058805A9", "确定") /* "确定" */,
      onClick: function onClick() {
        if (callbackOk) callbackOk();
      }
    }]
  });
};
// 上传非照片文件
cb.rest.uploadPaper = function (url, file, successCallBack, errorCallBack) {
  cb.rest.isUploadFile = true;
  url = cb.rest.getUrl(url, {
    token: cb.rest.appContext.token
  });
  console.log(url);
  //test postfix
  var reg = /^(PDF|pdf|docx|DOCX|doc|DOC|zip|ZIP|rar|RAR|xls|XLS|xlsx|XLSX|txt|TXT|jpg|JPG|png|PNG|bmp|BMP|jpeg|JPEG|gif|GIF)$/g;
  var fileName = $$(file).val().split('\\');
  fileName = fileName[fileName.length - 1];
  var postfix = fileName.split('.');
  postfix = postfix[postfix.length - 1];
  if (!reg.test(postfix)) {
    cb.rest.isUploadFile = false;
    errorCallBack(lang.templateByUuid("UID:P_UDHMC_17EC591E058805B9", "不支持此类型的文件!") /* "不支持此类型的文件!" */);
    file.value = '';
    return false;
  }
  ;
  //create iframe and form
  var myIframe = document.createElement('iframe');
  var myForm = document.createElement('form');
  myForm.style.display = 'none';
  document.body.appendChild(myForm);
  myIframe.style.display = 'none';
  myIframe.id = 'uploadIframe';
  document.body.appendChild(myIframe);
  var upLoad = myIframe.contentWindow.document.body;

  //form attr
  myForm.action = url; //'mf/mobileFileUpload';
  myForm.method = "post";
  myForm.enctype = "multipart/form-data";
  myForm.appendChild(file);
  //token input
  var tokenInput = document.createElement('input');
  tokenInput.setAttribute('type', 'text');
  tokenInput.value = cb.rest.appContext.token;
  tokenInput.name = 'token';
  myForm.appendChild(tokenInput);
  //folderName input
  var folderNameInput = document.createElement('input');
  folderNameInput.setAttribute('type', 'text');
  folderNameInput.value = 'orderattm';
  folderNameInput.name = 'folderName';
  myForm.appendChild(folderNameInput);
  //form into iframe
  upLoad.appendChild(myForm);
  //submit
  $$(myForm).submit();
  var timer = setInterval(function () {
    var iframeInner = myIframe.contentWindow.document.body;
    if ($$(iframeInner).find('pre').length) {
      clearInterval(timer);
      clearInterval(timeout);
      setTimeout(function () {
        cb.rest.isUploadFile = false;
        try {
          var data = JSON.parse($$(iframeInner).find('pre').html());
          successCallBack(data);
        } catch (e) {
          console.log(e);
          errorCallBack(lang.templateByUuid("UID:P_UDHMC_17EC591E058805C9", "文件上传失败!") /* "文件上传失败!" */);
        }
        ;
      }, 30);
    }
    ;
  }, 100);
  var timeout = setTimeout(function () {
    myApp.hideIndicator();
    myApp.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E058805CC", "上传文件超时,请检查网络环境") /* "上传文件超时,请检查网络环境" */, 'error').show(true);
    $$('#uploadIframe').remove();
    clearInterval(timer);
    cb.rest.backStatus = true;
  }, 1000 * 60 * 5);
};
cb.rest.getUrl = function (url, params) {
  if (!url) return url;
  var serviceUrl = this.appContext.serviceUrl;
  if (!cb["native"].isWeiXin() && !cb["native"].isApp() && serviceUrl.indexOf(location.host) < 0) {
    if (serviceUrl.indexOf('?') < 0) serviceUrl = location.href.substr(0, location.href.length - 1);else serviceUrl = location.href + '?' + serviceUrl.split('?')[1];
  }
  var commonParams = params || {};
  if (url.indexOf('http://') < 0 && url.indexOf('https://') < 0) {
    url = serviceUrl + "/" + url;
  }
  if (cb.rest.appContext.userId) commonParams.userId = cb.rest.appContext.userId;
  if (cb.rest.appContext.iCorpId) commonParams.corpId = cb.rest.appContext.iCorpId;
  if (cb.rest.appContext.context && cb.rest.appContext.context.isOpenYht) commonParams.isOpenYht = cb.rest.appContext.context.isOpenYht;
  if (cb.rest.appContext.isAgentOrder) {
    if (cb.rest.appContext.iAgentId) commonParams.iAgentId = commonParams.agentId = cb.rest.appContext.iAgentId;
  }
  if (cb.rest.appContext.context && cb.rest.appContext.context.isAgent && cb.rest.appContext.context.agentId) commonParams.agentId = cb.rest.appContext.context.agentId;
  var httpHeader = cb.rest.setHttpHeader(url, true);
  var signIn = JSON.parse(httpHeader.SignIn);
  for (var attr in signIn) {
    var attrValue = signIn[attr];
    if (attrValue !== '' && attr != 'parameter' && attr != 'fullName') commonParams[attr] = attrValue;
  }
  return url + (url.indexOf("?") >= 0 ? '&' : '?') + $$.serializeObject(commonParams);
};
cb.rest.deliveryDevice = function (url, account) {
  if (url === cb.router.HTTP_AGENT_LOGIN) {
    if (Object.prototype.toString.call(account) === '[object Object]') {
      account.originalLoginUrl = location.href.indexOf('?') > -1 ? location.href.split('?')[0] : location.href;
      if (cb["native"].isEsnApp()) {
        account.loginDeviceType = 1;
      } else if (cb["native"].isApiCloudApp() || window.plus) {
        // 苹果app或安卓app
        account.loginDeviceType = 2;
      } else if (cb["native"].isWxMiniProgram()) {
        account.loginDeviceType = 3;
      } else if (cb["native"].isWeiXin()) {
        account.loginDeviceType = 4;
      }
    }
  }
};
//执行登陆操作(手动登录)
cb.rest.execYxyLogin = function (account, postUrl) {
  cb.rest.clearUrlCache(); //清理URL缓存
  $$(".popup-trade").removeClass("bounceInRight").hide(); //关闭立即体验
  //ys下url上有functionType字段就给入参带上
  if (cb.rest.runtime.env === 'u8c') {
    account.functionType = Number(cb.utils.getUrlParam("functionType")) || '';
  }
  cb.rest.appContext.token = '';
  if (account.password && cb.utils.encrypt(account.password)) {
    account.password = cb.utils.encrypt(account.password);
  }
  cb.rest.deliveryDevice(postUrl || cb.router.HTTP_AGENT_LOGIN, account);
  cb.rest.postData({
    url: postUrl || cb.router.HTTP_AGENT_LOGIN,
    params: account,
    showPreloader: true,
    success: function success(dataObj) {
      // 多账号
      if (dataObj.data && dataObj.data.needNextLogin) {
        var multiAccountFunc = Template7.compile($$('#tpl-select-accounts').html());
        var accentItem = multiAccountFunc({
          accounts: dataObj.data.detail
        });
        $$('.switch-account.js-switch-account').removeClass('hide');
        $$('.switch.pop_bg').removeClass('hide');
        $$('.switch-account.js-switch-account').find('ul').html(accentItem);
        $$('.switch-account.js-switch-account').find('.btn-close').on('click', function () {
          $$(this).parents('.switch-account.js-switch-account').addClass('hide');
          $$('.switch.pop_bg').addClass('hide');
        });
        $$('.switch-account.js-switch-account').find('li').on('change', function () {
          $$(this).parent().find('input').prop('checked', false);
          $$(this).find('input').prop('checked', true);
          var userId = $$(this).attr('data-id');
          if (userId) {
            $$(this).parents('.switch-account.js-switch-account').addClass('hide');
            $$('.switch.pop_bg').addClass('hide');
            account.userId = userId;
            if (dataObj.data.randomCode) account.randomCode = dataObj.data.randomCode;
            if (cb.utils.getUrlParam("yxyToken")) {
              account.loginType = 5;
              account.yhtToken = cb.utils.getUrlParam("yxyToken");
            }
            if (cb.rest.appContext.isTplogin) {
              var query = $$.parseUrlQuery(location.search);
              cb.rest.execLogin(account, cb.router.HTTP_AGENT_TPLOGIN.format(query.appkey, query.sign, query.userKey || query.userkey) + '&userId=' + userId + (query.format ? '&format=' + query.format : ''));
            } else cb.rest.execLogin(account);
          }
        });
        if (!$$('.popup.popup-login').hasClass('modal-in')) {
          myApp.popup('.popup.popup-login');
        }
        return false;
      }
      //普通登录流程
      if (!dataObj.data.needNextLogin) {
        var loginUser = dataObj.data.detail[0];
        if (dataObj.data.relations) loginUser.relations = dataObj.data.relations;
        cb.rest.appContext.token = dataObj.data.token;
        cb.rest.appContext.context = loginUser;
        if (dataObj.data.parameter) cb.rest.appContext.context.parameter = dataObj.data.parameter;

        //bizMode  1:单组织单级经销商  2:单组织多级经销商  3:多组织单级经销商  4:多组织多级经销商

        cb.rest.appContext.context.isShowOrgs = (loginUser.bizMode == 3 || loginUser.bizMode == 4) && loginUser.userType != 9 && loginUser.userType != 10;
        cb.rest.appContext.context.isMultBizs = loginUser.bizMode == 2 || loginUser.bizMode == 4;
        cb.rest.appContext.context.isOpenYht = !!dataObj.data.isOpenYht;
        cb["native"].localStorage.set("yhtRefreshTime", new Date());
        cb["native"].localStorage.set("loginContext", JSON.stringify(loginUser));
        if (Array.isArray(loginUser.relations) && loginUser.relations.length) {
          cb.rest.appContext.context.currentRelationId = loginUser.relations[0].id;
          cb.rest.appContext.context.currentOrgId = loginUser.relations[0].orgId;
          cb.rest.appContext.context.currentBizId = loginUser.relations[0].bizId;
          if (cb.rest.runtime.env === 'u8c') {
            cb["native"].localStorage.set('currencyId', loginUser.relations[0].currencyId);
          }
          cb["native"].localStorage.set('relationId', cb.rest.appContext.context.currentRelationId);
          cb["native"].localStorage.set('currentOrgId', cb.rest.appContext.context.currentOrgId);
          cb["native"].localStorage.set('currentBizId', cb.rest.appContext.context.currentBizId);
        }
        cb["native"].localStorage.set("uptoken", cb.rest.appContext.token);
        cb["native"].localStorage.set("cUserName", loginUser.cUserName);
        cb["native"].localStorage.set('userId', loginUser.userId);
        if (cb["native"].localStorage.get('accountList')) {
          var accountStr = cb["native"].localStorage.get('accountList');
          if (accountStr.indexOf(account.key) < 0) {
            accountStr += '|' + account.key;
          }
          cb["native"].localStorage.set('accountList', accountStr);
        } else {
          cb["native"].localStorage.set('accountList', account.key);
        }
        cb["native"].localStorage.set('corpUser', (!loginUser.isAgent).toString()); // 账户类型
        cb.rest.appContext.userId = cb["native"].localStorage.get('userId');
        cb.rest.appContext.corpUser = loginUser.isAgent ? false : true;
        cb.rest.appContext.isTourist = loginUser.userType == 6;
        $$("#mylogin input[name=validCode]").val('');
        if (loginUser && loginUser.hasAuthentication) cb.rest.dualAuthentication(loginUser);else {
          cb.rest.appContext.doLogin();
          cb.rest.bindUserOpenId();
          if (window.plus) {
            var cDeviceId = plus.push.getClientInfo().clientid;
            if (cDeviceId) {
              cb.rest.appContext.cDeviceId = cDeviceId;
              cb.rest.postData({
                url: cb.router.HTTP_AGENT_SAVEMOBILEDEVICE.format(cDeviceId, plus.os.name.toUpperCase()),
                success: function success(data) {},
                error: function error(data) {
                  myApp.toast(data.message, 'error').show(true);
                }
              });
            } else {
              plus.nativeUI.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E0588059A", "未获得推送权限!") /* "未获得推送权限!" */);
            }
          }
        }

        if (cb.rest.appContext.corpUser !== true) {
          $$("#loginState").val("");
        }
        return false;
      } else {
        myApp.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E058805A6", "登录未返回有效数据") /* "登录未返回有效数据" */, "tips").show(true);
      }
    },
    error: function error(data) {
      myApp.toast(data.message, "error").show(true);
      setTimeout(function () {
        cb.rest.appContext.clear();
        cb.rest.clearUrlCache();
        myApp.loginScreen();
        myApp.popup('.popup.popup-login');
        cb.cache.showLogin();
        //解决忘记密码页面出现bottom-bar的问题
        $$('.bottom-bar.row').hide();
        $$('.icon-count.order').hide();
        setTimeout(function () {
          myApp.closeModal('.modal.modal-preloader');
        }, 10);
      }, 1500);
    },
    netError: function netError(url) {
      myApp.modal({
        title: '<div class="common-tips-title error-tips">' + '<i class="icon icon-failure"></i><span class="font-23">' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805B5", "发生网络错误！") /* "发生网络错误！" */ + '</span>' + '</div>',
        text: '<div class="common-tips-content" style="padding:10px 0;"><div>' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805B8", "错误URL：") /* "错误URL：" */ + url + '</div>',
        buttons: [{
          text: lang.templateByUuid("UID:P_UDHMC_17EC591E05880588", "知道了") /* "知道了" */
        }]
      });
    }
  });
};
//执行登陆操作(手动登录)
cb.rest.execLogin = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(account, postUrl) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cb.rest.clearUrlCache(); //清理URL缓存
          $$(".popup-trade").removeClass("bounceInRight").hide(); //关闭立即体验
          //ys下url上有functionType字段就给入参带上
          if (cb.rest.runtime.env === 'u8c') {
            account.functionType = cb.utils.getUrlParam("functionType");
          }
          cb.rest.appContext.token = '';
          if (account.password && cb.utils.encrypt(account.password)) {
            account.password = cb.utils.encrypt(account.password);
          }
          cb.rest.deliveryDevice(postUrl || cb.router.HTTP_AGENT_LOGIN, account);
          _context3.next = 8;
          return cb.rest.postData({
            url: postUrl || cb.router.HTTP_AGENT_LOGIN,
            params: account,
            showPreloader: true,
            success: function success(dataObj) {
              if (dataObj.data.needHandle) {
                switch (dataObj.data.action) {
                  case 'REDIRECT':
                    window.location.href = dataObj.data.url;
                    break;
                  case 'WARN':
                    myApp.modal({
                      title: '<div class="common-tips-title warning-tips">' + '<i class="icon icon-warning"></i><span  class="font-23">' + lang.templateByUuid("UID:P_UDHMC_17EC591E05880576", "提示信息") /* "提示信息" */ + '</span>' + '</div>',
                      text: '<div class="common-tips-content">' + '<div class="tips-info">' + dataObj.data.msg + '</div>' + '</div>',
                      buttons: [{
                        text: lang.templateByUuid("UID:P_UDHMC_17EC591E058805A9", "确定") /* "确定" */,
                        onClick: function onClick() {}
                      }]
                    });
                    break;
                  case 'TIPS':
                    myApp.modal({
                      title: '<div class="common-tips-title warning-tips">' + '<i class="icon icon-warning"></i><span  class="font-23">' + lang.templateByUuid("UID:P_UDHMC_17EC591E05880576", "提示信息") /* "提示信息" */ + '</span>' + '</div>',
                      text: '<div class="common-tips-content">' + '<div class="tips-info">' + dataObj.data.msg + '</div>' + '</div>',
                      buttons: [{
                        text: lang.templateByUuid("UID:P_UDHMC_17EC591E058805A9", "确定") /* "确定" */,
                        onClick: function onClick() {
                          cb.rest.execLoginCallBack(dataObj, account);
                        }
                      }]
                    });
                    break;
                }
              } else {
                if (['900010000200031', '1031000050092'].includes(dataObj.data.code)) {
                  var cancelBtn = {
                    text: lang.templateByUuid("UID:P_UDHMC_17EC591E058805A4", "取消") /* "取消" */,
                    onClick: function onClick() {
                      return;
                    }
                  };
                  var laterAuthenticationBtn = {
                    text: lang.templateByUuid("UID:P_UDHMC_19200E0404500019", "以后认证") /* "以后认证" */,
                    onClick: function onClick() {
                      cb.rest.execLoginCallBack(dataObj, account);
                    }
                  };
                  var immediateAuthenticationBtn = {
                    text: lang.templateByUuid("UID:P_UDHMC_19200E0404500018", "立即认证") /* "立即认证" */,
                    onClick: function onClick() {
                      cb["native"].frames({
                        url: window.__config__.realNameUrl,
                        title: lang.templateByUuid("UID:P_UDHMC_19200E0404500018", "立即认证") /* "立即认证" */
                      }, function () {
                        setTimeout(function () {
                          myApp.popup('.popup.popup-login');
                          cb.cache.showLogin();
                        }, 0);
                      });
                    }
                  };
                  var buttons = [dataObj.data.status ? laterAuthenticationBtn : cancelBtn, immediateAuthenticationBtn];
                  var modal = myApp.modal({
                    title: '<div class="common-tips-title warning-tips">' + '<i class="icon icon-warning"></i><span  class="font-23">' + lang.templateByUuid("UID:P_UDHMC_192018AA04500019", "未实名认证提示") /* "未实名认证提示" */ + '</span>' + '</div>',
                    text: '<div class="common-tips-content" style="line-height: inherit;">' + '<div class="tips-info">' + lang.templateByUuid("UID:P_UDHMC_192018AA0450001A", "您的账号未进行实名认证，不符合相关法律法规要求，请及时完成实名认证。") /* "您的账号未进行实名认证，不符合相关法律法规要求，请及时完成实名认证。" */ + '</div><div>' + "".concat(Object.prototype.hasOwnProperty.call(dataObj.data, 'canLoginTimes') ? lang.templateByUuid("UID:P_UDHMC_192018AA0450001B", lang.templateByUuid("UID:P_UDHMC_192018AA0450001B", "温馨提示：您还可以登录") /* "温馨提示：您还可以登录" */) /* "温馨提示：您还可以登录" */ + '<span style="color: red;">' + dataObj.data.canLoginTimes + lang.templateByUuid("UID:P_UDHMC_181BEDD00440009A", lang.templateByUuid("UID:P_UDHMC_192DB34E04E00011", "次") /* "次" */) + '</span>' + lang.templateByUuid("UID:P_UDHMC_192018AA0450001C", lang.templateByUuid("UID:P_UDHMC_192018AA0450001C", "本产品") /* "本产品" */) /* "本产品" */ : '') + '</div><div>' + "<a id=\"copyUrl\">".concat(lang.templateByUuid("UID:P_UDHMC_192DB34E04E00010", "了解法律法规") /* "了解法律法规" */, "</a>") + '</div>',
                    buttons: buttons
                  });
                  $$(modal).find('#copyUrl').on('click', function () {
                    var urlToCopy = window.__config__.lawsUrl ? window.__config__.lawsUrl : 'https://flk.npc.gov.cn/detail2.html?MmM5MDlmZGQ2NzhiZjE3OTAxNjc4YmY4Mjc2ZjA5M2Q%';
                    console.log('ClipboardJS', document.querySelector('#copyUrl'));
                    var clipboard = new ClipboardJS(document.querySelector('#copyUrl'), {
                      text: function text() {
                        return urlToCopy;
                      }
                    });
                    clipboard.on('success', function (e) {
                      console.info('Text:', e.text);
                      upcommon.tipToDefine(lang.templateByUuid("UID:P_UDHMC_192DB34E04E0000E", "链接已成功复制到剪切板") /* "链接已成功复制到剪切板" */);
                      clipboard.destroy();
                    });
                    clipboard.on('error', function (e) {
                      upcommon.tipToDefine(lang.templateByUuid("UID:P_UDHMC_192DB34E04E0000F", "复制失败") /* "复制失败" */);
                      console.error('复制失败', e);
                      clipboard.destroy();
                    });
                  });
                  $$(modal).find('#copyUrl').click();
                  return;
                } else {
                  cb.rest.execLoginCallBack(dataObj, account);
                }
              }
            },
            error: function error(data) {
              myApp.toast(data.message, "error").show(true);
              setTimeout(function () {
                cb.rest.appContext.clear();
                cb.rest.clearUrlCache();
                myApp.loginScreen();
                myApp.popup('.popup.popup-login');
                cb.cache.showLogin();
                //解决忘记密码页面出现bottom-bar的问题
                $$('.bottom-bar.row').hide();
                $$('.icon-count.order').hide();
                setTimeout(function () {
                  myApp.closeModal('.modal.modal-preloader');
                }, 10);
              }, 1500);
            },
            netError: function netError(url) {
              myApp.modal({
                title: '<div class="common-tips-title error-tips">' + '<i class="icon icon-failure"></i><span class="font-23">' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805B5", "发生网络错误！") /* "发生网络错误！" */ + '</span>' + '</div>',
                text: '<div class="common-tips-content" style="padding:10px 0;"><div>' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805B8", "错误URL：") /* "错误URL：" */ + url + '</div>',
                buttons: [{
                  text: lang.templateByUuid("UID:P_UDHMC_17EC591E05880588", "知道了") /* "知道了" */
                }]
              });
            }
          });
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
cb.rest.execLoginCallBack = function (dataObj, account) {
  if (cb["native"].localStorage.get("dataCenterUrl")) {
    cb["native"].localStorage.remove("dataCenterUrl");
    cb["native"].setMainDomainCookie('originUrl', '', -1, '/');
  }
  if (dataObj.data.dataCenter && dataObj.data.dataCenter.workbenchUrl) {
    var dn = dataObj.data.dataCenter.workbenchUrl.slice(0, 8) + 'mdinghuo-' + dataObj.data.dataCenter.workbenchUrl.slice(8);
    cb.rest.appContext.dataCenterUrl = dn + '?accessToken=' + (dataObj.data.loginToken || '') + '&filterDataCenterCodes=' + (dataObj.data.filterDataCenterCodes || '') + '&originUrl=' + window.location.hostname;
    cb["native"].localStorage.set("dataCenterUrl", cb.rest.appContext.dataCenterUrl);
    if (cb["native"].localStorage.get("dataCenterUrl") && cb["native"].localStorage.get("dataCenterUrl").indexOf(window.location.origin) == -1) {
      cb["native"].setMainDomainCookie('originUrl', window.location.href);
      var url = cb["native"].localStorage.get("dataCenterUrl");
      //name是YonBIP订货门户小程序会挂载到url的标识，OpenID是YonBIP订货门户小程序挂载到url上的微信用户id用来微信支付的  platform是移动工作台打包的 YonBIP订货门户-ios-app挂载到url的标识。
      var needAddUrlParams = cb.utils.getUrlParam("redirectUrl") || cb.utils.getUrlParam("functionType") || cb.utils.getUrlParam("name") || cb.utils.getUrlParam("OpenID") || cb.utils.getUrlParam("platform");
      if (needAddUrlParams) {
        var arr = window.location.href.split('?');
        var urlParams = (url.indexOf('?') > -1 ? '&' : '?') + (arr && arr[1] || '');
        url += urlParams;
      }
      cb["native"].localStorage.set("dataCenterUrl", dn);
      window.location.replace(url);
      cb.rest.appContext.clear();
      return;
    }
  }

  // 多账号
  if (dataObj.data && !dataObj.data.isOwnLogin) {
    dataObj.data.userList.map(function (v) {
      if (v.corpLogo) {
        v.corpLogo = window.location.protocol + v.corpLogo;
      }
    });
    var multiAccountFunc = Template7.compile($$('#tpl-select-accounts').html());
    var accentItem = multiAccountFunc({
      accounts: dataObj.data.userList
    });
    $$('.switch-account.js-switch-account').removeClass('hide');
    $$('.switch.pop_bg').removeClass('hide');
    $$('.switch-account.js-switch-account').find('ul').html(accentItem);
    $$('.switch-account.js-switch-account').find('.btn-close').on('click', function () {
      $$(this).parents('.switch-account.js-switch-account').addClass('hide');
      $$('.switch.pop_bg').addClass('hide');
    });
    $$('.switch-account.js-switch-account').find('li').on('change', function () {
      $$(this).parent().find('input').prop('checked', false);
      $$(this).find('input').prop('checked', true);
      var userId = $$(this).attr('data-id');
      var tenantId = $$(this).attr('data-tenantid');
      if (tenantId) {
        cb.utils.CookieParser.setCookie('tenantId', tenantId);
      }
      if (userId) {
        $$(this).parents('.switch-account.js-switch-account').addClass('hide');
        $$('.switch.pop_bg').addClass('hide');
        account.userId = userId;
        cb.utils.CookieParser.setCookie('userId', userId);
        if (dataObj.data.randomCode) account.randomCode = dataObj.data.randomCode;
        if (cb.rest.appContext.isTplogin) {
          var query = $$.parseUrlQuery(location.search);
          cb.rest.execLogin(account, cb.router.HTTP_AGENT_TPLOGIN.format(query.appkey, query.sign, query.userKey || query.userkey) + '&userId=' + userId + (query.format ? '&format=' + query.format : ''));
        } else cb.rest.execLogin(account);
      }
    });
    if (!$$('.popup.popup-login').hasClass('modal-in')) {
      myApp.popup('.popup.popup-login');
    }
    return false;
  }
  //普通登录流程
  if (dataObj.data.isOwnLogin) {
    cb.rest.appContext.token = dataObj.data.token;
    if (cb["native"].isWxMiniProgram()) {
      mtl && mtl.setStorage({
        key: "udhToken",
        data: cb.rest.appContext.token,
        success: function success() {
          // 成功回调
          console.log("存储成功！！！");
        }
      });
      cb["native"].setMainDomainCookie('yht_udh_access_token', cb.rest.appContext.token);
      cb["native"].localStorage.set("uptoken", cb.rest.appContext.token);
      //如果是当前数据中心并且是小程序环境且url参数上带useWxStore才存储
      if (cb.utils.getUrlParam("useWxStore")) {
        wx.miniProgram.redirectTo({
          url: "/pages/logs/logs?wxUdhToken=".concat(cb.rest.appContext.token)
        });
        return;
      }
    }
    cb["native"].setMainDomainCookie('yht_udh_access_token', cb.rest.appContext.token);
    var loginUser1 = dataObj.data.userList && dataObj.data.userList[0];
    if (cb.utils.getUrlParam("functionType") == 2 || cb.utils.getUrlParam("functionType") == 3 || cb.utils.getUrlParam("functionType") == 4) {
      cb.rest.appContext.corpUser = true;
    }
    if (cb["native"].localStorage.get('accountList')) {
      var accountStr = cb["native"].localStorage.get('accountList');
      if (accountStr.indexOf(account.key) < 0) {
        accountStr += '|' + account.key;
      }
      cb["native"].localStorage.set('accountList', accountStr);
    } else {
      cb["native"].localStorage.set('accountList', account.key);
    }
    if (loginUser1 && loginUser1.hasAuthentication) {
      cb.rest.dualAuthentication(loginUser1);
    } else {
      cb.rest.getJSON({
        url: cb.router.HTTP_AGENT_GETUSERINFO,
        success: function success(data) {
          if (data.data) {
            var loginUser = data.data;
            cb.rest.appContext.context = loginUser;
            if (dataObj.data.parameter) cb.rest.appContext.context.parameter = dataObj.data.parameter;
            //bizMode  1:单组织单级经销商  2:单组织多级经销商  3:多组织单级经销商  4:多组织多级经销商

            cb.rest.appContext.context.isShowOrgs = (loginUser.bizMode == 3 || loginUser.bizMode == 4) && loginUser.userType != 9 && loginUser.userType != 10;
            cb.rest.appContext.context.isMultBizs = loginUser.bizMode == 2 || loginUser.bizMode == 4;
            cb.rest.appContext.context.isOpenYht = true;
            cb["native"].localStorage.set("yhtRefreshTime", new Date());
            cb["native"].localStorage.set("loginContext", JSON.stringify(loginUser));
            if (Array.isArray(loginUser.relations) && loginUser.relations.length) {
              var relationAgent = {};
              if (cb["native"].localStorage.get('storageRelationId')) {
                relationAgent = loginUser.relations.find(function (item) {
                  return item.id == cb["native"].localStorage.get('storageRelationId');
                });
              }
              cb.rest.appContext.context.currentRelationId = relationAgent.id || loginUser.relations[0].id;
              cb.rest.appContext.context.currentOrgId = relationAgent.orgId || loginUser.relations[0].orgId;
              cb.rest.appContext.context.currentBizId = relationAgent.bizId || loginUser.relations[0].bizId;
              if (cb.rest.runtime.env === 'u8c') {
                cb["native"].localStorage.set('currencyId', loginUser.relations[0].currencyId);
              }
              cb["native"].localStorage.set('relationId', cb.rest.appContext.context.currentRelationId);
              cb["native"].localStorage.set('storageRelationId', cb.rest.appContext.context.currentRelationId);
              cb["native"].localStorage.set('currentOrgId', cb.rest.appContext.context.currentOrgId);
              cb["native"].localStorage.set('currentBizId', cb.rest.appContext.context.currentBizId);
            }
            cb["native"].localStorage.set("uptoken", cb.rest.appContext.token);
            cb["native"].localStorage.set("cUserName", loginUser.cUserName);
            cb["native"].localStorage.set('userId', loginUser.userId);
            cb["native"].localStorage.set('corpUser', (!loginUser.isAgent).toString()); // 账户类型
            cb.rest.appContext.userId = cb["native"].localStorage.get('userId');
            cb.rest.appContext.corpUser = loginUser.isAgent ? false : true;
            cb.rest.appContext.isTourist = loginUser.userType == 6;
            $$("#mylogin input[name=validCode]").val('');
            if (cb.utils.getUrlParam("accessToken")) {
              var strHref = window.location.href;
              var intPos = strHref.indexOf("?");
              var adjustHref = strHref.substr(0, intPos);
              if (cb.utils.getUrlParam("name")) {
                adjustHref = adjustHref + "?name=".concat(cb.utils.getUrlParam("name"));
              }
              if (cb.utils.getUrlParam("OpenID")) {
                adjustHref = adjustHref + (adjustHref.indexOf("?") > 0 ? "&OpenID=".concat(cb.utils.getUrlParam("OpenID")) : "?openID=".concat(cb.utils.getUrlParam("OpenID")));
              }
              if (cb.utils.getUrlParam("platform")) {
                adjustHref = adjustHref + (adjustHref.indexOf("?") > 0 ? "&platform=".concat(cb.utils.getUrlParam("platform")) : "?platform=".concat(cb.utils.getUrlParam("platform")));
              }
              window.location.replace(adjustHref);
            } else {
              cb.rest.appContext.doLogin();
            }
            cb.rest.bindUserOpenId();
            if (window.plus) {
              var cDeviceId = plus.push.getClientInfo().clientid;
              if (cDeviceId) {
                cb.rest.appContext.cDeviceId = cDeviceId;
                cb.rest.postData({
                  url: cb.router.HTTP_AGENT_SAVEMOBILEDEVICE.format(cDeviceId, plus.os.name.toUpperCase()),
                  success: function success(data) {},
                  error: function error(data) {
                    myApp.toast(data.message, 'error').show(true);
                  }
                });
              } else {
                plus.nativeUI.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E0588059A", "未获得推送权限!") /* "未获得推送权限!" */);
              }
            }

            if (cb.rest.appContext.corpUser !== true) {
              $$("#loginState").val("");
            }
          }
        },
        error: function error(e) {
          myApp.toast(e.message, 'tips').show(true);
          cb.rest.appContext.clear();
        }
      });
    }
    return false;
  } else {
    myApp.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E058805A6", "登录未返回有效数据") /* "登录未返回有效数据" */, "tips").show(true);
  }
};
cb.rest.touristLogin = function (comkey, callback) {
  comkey = comkey == 'mailiantest' ? 'mailian' : comkey; // 临时修正脉链环境测试帐套被删除的问题

  var param = {
    data: comkey
  };
  cb.rest.postData({
    url: cb.router.HTTP_AGENT_TOURISTLOGIN,
    params: param,
    success: function success(dataObj) {
      if (callback) {
        callback(dataObj.data);
        return;
      }
      cb.rest.appContext.token = dataObj.data.token;
      cb.rest.appContext.context = dataObj.data.detail[0];
      if (dataObj.data.relations) cb.rest.appContext.context.relations = dataObj.data.relations;
      cb.rest.appContext.context.isShowOrgs = (cb.rest.appContext.context.bizMode == 3 || cb.rest.appContext.context.bizMode == 4) && cb.rest.appContext.context.userType != 9 && cb.rest.appContext.context.userType != 10;
      cb.rest.appContext.context.isMultBizs = cb.rest.appContext.context.bizMode == 2 || cb.rest.appContext.context.bizMode == 4;
      cb.rest.appContext.isTourist = cb.rest.appContext.context.userType == 6;
      cb.rest.appContext.userId = cb.rest.appContext.context.userId;
      cb.rest.appContext.corpUser = cb.rest.appContext.context.isAgent ? false : true;
      cb.rest.appContext.context.isOpenYht = !!dataObj.data.isOpenYht;
      cb["native"].localStorage.set("uptoken", cb.rest.appContext.token);
      cb["native"].localStorage.set("loginContext", JSON.stringify(cb.rest.appContext.context));
      cb["native"].localStorage.set('userId', cb.rest.appContext.context.userId);
      cb["native"].localStorage.set('corpUser', cb.rest.appContext.corpUser); // 账户类型

      cb.rest.appContext.doLogin();
    },
    error: function error(err) {
      myApp.toast(err.message, 'error').show(true);
    }
  });
};
cb.rest.demoLogin = function (userkey) {
  cb.rest.postData({
    url: cb.router.HTTP_AGENT_DEMOLOGIN.format(userkey),
    success: function success(dataObj) {
      var loginUser = dataObj.data.detail[0];
      cb.rest.appContext.token = dataObj.data.token;
      cb.rest.appContext.context = loginUser;
      cb.rest.appContext.userId = loginUser.userId;
      cb.rest.appContext.context.isOpenYht = !!dataObj.data.isOpenYht;
      cb["native"].localStorage.set("loginContext", JSON.stringify(loginUser));
      cb["native"].localStorage.set("uptoken", cb.rest.appContext.token);
      cb["native"].localStorage.set("cUserName", loginUser.userName);
      cb["native"].localStorage.set('userId', loginUser.userId);
      cb["native"].localStorage.set('corpUser', loginUser.isAgent); // 账户类型
      cb.rest.appContext.corpUser = !loginUser.isAgent;
      cb["native"].localStorage.set('isDemoLogin', '1');
      cb.rest.appContext.doLogin();
    }
  });
};
cb.rest.memberLogin = function (params, callback) {
  if (!params.source || !params.yxyToken) {
    callback();
    return;
  }
  //close welcome screen
  cb["native"].localStorage.set("systemUsed", true);
  cb.rest.appContext.yxyToken = cb.rest.appContext.yxyToken || params.yxyToken;
  cb.rest.appContext.clear();
  cb.rest.postData({
    url: cb.router.HTTP_AGENT_MEMBERJOIN,
    params: {
      bizId: params.bizId || null,
      mid: params.mid || null,
      mobile: params.mobile || null
    },
    success: function success(data) {
      if (data.data) {
        if (data.data.needJoin) {
          cb["native"].initMainView((cb.rest.isDefineJoin ? 'pages/defineJoin.html?' : 'pages/join.html?') + "alias={0}&bizId={1}".format(data.data.alias, params.bizId || ''), {
            noback: true,
            reload: true,
            data: data.data.potentialAgent
          });
        } else {
          if (data.data.context) {
            var loginUser = data.data.context.detail[0];
            if (data.data.context.relations) loginUser.relations = data.data.context.relations;
            cb.rest.appContext.token = data.data.context.token;
            cb.rest.appContext.context = loginUser;

            //bizMode  1:单组织单级经销商  2:单组织多级经销商  3:多组织单级经销商  4:多组织多级经销商

            cb.rest.appContext.context.isShowOrgs = (loginUser.bizMode == 3 || loginUser.bizMode == 4) && loginUser.userType != 9 && loginUser.userType != 10;
            cb.rest.appContext.context.isMultBizs = loginUser.bizMode == 2 || loginUser.bizMode == 4;
            cb.rest.appContext.context.isOpenYht = !!data.data.isOpenYht;
            cb["native"].localStorage.set("loginContext", JSON.stringify(loginUser));
            cb["native"].localStorage.set("uptoken", cb.rest.appContext.token);
            cb["native"].localStorage.set("cUserName", loginUser.cUserName);
            cb["native"].localStorage.set('userId', loginUser.userId);
          }
          if (callback) callback();
        }
      }
    },
    error: function error(e) {
      myApp.toast(e.message, 'error').show(true);
    }
  });
};
cb.rest.checkTourist = function (cancelEvent) {
  var isTourist = false;
  if (cb.rest.appContext.isTourist) {
    myApp.modal({
      cssClass: 'tourist-content-modal',
      title: '<div class="common-tips-title warning-tips">' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805E6", '<i class="icon icon-warning"></i><span  class="font-23">提示信息</span>') /* "<i class="icon icon-warning"></i><span  class="font-23">提示信息</span>" */ + '</div>',
      text: '<div class="common-tips-content">' + lang.templateByUuid("UID:P_UDHMC_17EC591E05880573", "<div class='tips-info'>游客账户不能发生交易，是否立即申请注册为该企业经销商？</div>") /* "<div class="tips-info">游客账户不能发生交易，是否立即申请注册为该企业经销商？</div>" */ + lang.templateByUuid("UID:P_UDHMC_17EC591E05880574", "<div class='tips-info-sub'>(已有账户请直接登录)</div>") /* "<div class="tips-info-sub">(已有账户请直接登录)</div>" */ + '</div>',
      buttons: [{
        text: '<i class="icon icon-close-white"></i>',
        onClick: function onClick() {
          if (cancelEvent) cancelEvent();
        }
      }, {
        text: lang.templateByUuid("UID:P_UDHMC_17EC591E0588057E", "立即登录") /* "立即登录" */,
        onClick: function onClick() {
          cb.rest.appContext.clear(function () {
            cb.rest.clearUrlCache();
            if (cb.rest.defineRouters && cb.rest.defineRouters.login) {
              window.location.href = cb.rest.defineRouters.login;
              return;
            }
            myApp.loginScreen();
            myApp.popup('.popup.popup-login');
            cb.cache.showLogin();
          });
        }
      }, {
        text: lang.templateByUuid("UID:P_UDHMC_17EC591E05880583", "申请加盟") /* "申请加盟" */,
        onClick: function onClick() {
          var query = $$.parseUrlQuery(location.href);
          myApp.mainView.router.loadPage({
            url: 'pages/join.html?alias=' + (query.comKey || query.alias)
          });
        }
      }]
    });
    isTourist = true;
  }
  return isTourist;
};

//检查是否微信自动登录
cb.rest.checkWXLogin = function () {
  var wxToken = cb.utils.getUrlParam("token");
  var wxSiteheader = cb.utils.getUrlParam("siteheader");
  //企业空间自动登录
  var code = cb.utils.getUrlParam("code");
  var corp = cb.utils.getUrlParam("corp");
  var type = cb.utils.getUrlParam("type");
  var voucherno = cb.utils.getUrlParam("voucherno");

  //第三方登录
  var tpLogin = window.location.pathname.indexOf("tplogin") > -1;
  var userkey = cb.utils.getUrlParam("userKey") || cb.utils.getUrlParam("userkey");
  var appkey = cb.utils.getUrlParam("appkey");
  var sign = cb.utils.getUrlParam("sign");
  var format = cb.utils.getUrlParam("format");
  var touristLogin = cb.utils.getUrlParam("touristLogin") === 'true';
  var alias = cb.utils.getUrlParam("comkey") || cb.utils.getUrlParam("alias");
  var yxyToken = cb.utils.getUrlParam("yxyToken");
  var source = cb.utils.getUrlParam("source");
  var accessToken = cb.utils.getUrlParam("accessToken");
  var filterDataCenterCodes = cb.utils.getUrlParam("filterDataCenterCodes") || '';
  var tenantId = cb.utils.getUrlParam("tenantId") || '';
  var urlShowImage = cb.utils.getUrlParam("showImage");
  if (urlShowImage) {
    cb["native"].localStorage.set("showImage", urlShowImage);
  }
  if (cb.temp.isEsn && code) {
    cb.rest.postData({
      url: cb.router.HTTP_AGENT_MESNLOGIN,
      params: {
        code: code,
        corp: corp,
        type: type,
        voucherno: voucherno
      },
      success: function success(data) {
        if (data.data) {
          cb.rest.appContext.token = data.data.token;
          cb["native"].localStorage.set("uptoken", cb.rest.appContext.token);
          cb.rest.appContext.doLogin();
        } else {
          this.error(data);
        }
      },
      error: function error(e) {
        myApp.hidePreloader();
        myApp.loginScreen();
        myApp.popup('.popup.popup-login');
        cb.cache.showLogin();
      }
    });
  } else if (wxToken && wxSiteheader) {
    cb.rest.postData({
      url: cb.router.HTTP_AGENT_WXLOGIN,
      params: {
        token: wxToken,
        siteheader: wxSiteheader
      },
      success: function success(data) {
        if (data.data) {
          cb.rest.appContext.token = data.data.token;
          cb["native"].localStorage.set("uptoken", cb.rest.appContext.token);
          cb.rest.appContext.doLogin();
        } else {
          this.error(data);
        }
      },
      error: function error(e) {
        myApp.hidePreloader();
        myApp.loginScreen();
        myApp.popup('.popup.popup-login');
        cb.cache.showLogin();
      }
    });
  } else if (tpLogin && userkey && appkey && sign) {
    cb.rest.appContext.clear();
    cb.rest.appContext.isTplogin = true;
    cb.rest.execLogin({}, cb.router.HTTP_AGENT_TPLOGIN.format(appkey, sign, userkey) + (format ? '&format=' + format : ''));
  } else if (touristLogin && alias) {
    cb.rest.touristLogin(alias);
  } else if (yxyToken && !source) {
    cb.rest.execYxyLogin({}, cb.router.HTTP_AGENT_YXYLOGIN.format(yxyToken));
  } else if (accessToken) {
    cb.rest.execLogin({
      accessToken: accessToken,
      filterDataCenterCodes: filterDataCenterCodes,
      tenantId: tenantId
    });
  } else {
    // url上的act和psw存在的情况是交给腾讯检测工具的安卓包，act是固定的手机号，psw是固定的密码。
    if (cb.utils.getUrlParam("act") && cb.utils.getUrlParam("psw")) {
      var loginParams = {
        clientType: 2,
        deviceId: cb.rest.appContext.deviceCode || cb["native"].getUDID(),
        key: cb.utils.getUrlParam("act"),
        password: cb.utils.getUrlParam("psw")
      };
      cb.rest.execLogin(loginParams);
      return;
    }
    myApp.hidePreloader();
    myApp.loginScreen();
    myApp.popup('.popup.popup-login');
    cb.cache.showLogin();
  }
};
cb.rest.forgetPwdFunc = function (data) {
  var defaultOptions = {
    preprocess: function preprocess(content, url, next) {
      return cb.preprocess(content, url, next);
    }
  };
  $$("#view-1").addClass("active");
  myApp.addView('.view-main', defaultOptions).router.loadPage({
    url: 'pages/forgetPwd.html',
    query: data
  });
  myApp.closeModal('.login-screen.modal-in');
  myApp.closeModal('.popup.popup-login');
};
var tempError = true; //此字段用于控制当错误码是900 / 909 （多个）的时候只出现一次弹框以供退出 
//错误码处理机制
cb.rest.resultFactory = function (data, successCallBack, errorCallBack, options) {
  if (options.showPreloader) {
    myApp.hidePreloader();
  }
  var myResultData = typeof data == 'string' ? JSON.parse(data) : data;
  switch (myResultData.code) {
    case 0:
    case 200: //成功
    case 201:
      successCallBack(data);
      break;
    case 901:
      myApp.toast(data.message, 'error').show(true);
      break;
    case 900: //登录失效
    case 909:
    case 401:
    case 302:
      if (tempError) {
        tempError = false;
        myApp.modal({
          title: '<div class="common-tips-title warning-tips">' + '<i class="icon icon-warning"></i><span  class="font-23">' + lang.templateByUuid("UID:P_UDHMC_17EC591E05880576", "提示信息") /* "提示信息" */ + '</span>' + '</div>',
          text: '<div class="common-tips-content">' + '<div class="tips-info">' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805CD", "登录失效，即将跳转登录页面") /* "登录失效，即将跳转登录页面" */ + '</div>' + '</div>',
          buttons: [{
            text: lang.templateByUuid("UID:P_UDHMC_17EC591E058805A9", "确定") /* "确定" */,
            onClick: function onClick() {
              //清除心跳服务定时器
              if (cb.rest.appContext.hearBeat) {
                clearInterval(cb.rest.appContext.hearBeat);
              }
              if (cb["native"].isEsnApp()) {
                //友空间中 退出应用
                mtl.closeCurrentWebview({
                  'success': function success(res) {
                    console.log('success');
                  },
                  'fail': function fail(err) {
                    console.log('fail');
                  },
                  'complete': function complete(res) {
                    console.log('complete');
                  }
                });
              } else {
                cb.rest.appContext.clear();
                cb.rest.checkWXLogin();
              }
            }
          }]
        });
      }
      break;
    case 944:
      //非法的请求
      if (!errorCallBack) {
        myApp.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E058805D6", "非法的请求（禁止访问)") /* "非法的请求（禁止访问)" */, 'error').show(true);
      } else {
        errorCallBack(data);
      }
      break;
    case 996:
      if (!errorCallBack) {
        myApp.toast(data.message || lang.templateByUuid("UID:P_UDHMC_17EC591E058805D9", "无效的数据") /* "无效的数据" */, 'error').show(true);
      } else {
        errorCallBack(data);
      }
      break;
    case 998:
      //数据不合法
      if (!errorCallBack) {
        myApp.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E058805DB", "数据不合法！") /* "数据不合法！" */, 'error').show(true);
      } else {
        errorCallBack(data);
      }
      break;
    //价盘校验
    case 986:
      vsdvsd
      errorCallBack(data, "".concat(options.url, "&isCyClePriceVerify=false"));
      break;
    //信用校验
    case 987:
      errorCallBack(data, "".concat(options.url, "&isVerify=false"));
      break;
    //合同余量校验
    case 990:
      errorCallBack(data, options.url);
      break;
    case 989:
      //许可过期提示
      myApp.modal({
        cssClass: 'permit-modal',
        title: '<div class="common-tips-title success-tips permit-tips">' + '<i class="icon icon-clock"></i>' + '</div>',
        text: '<div class="common-tips-content permit-content">' + '<div class="tips-content"><div class="permit-title">' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805E5", "贵公司的租约已过期啦！") /* "贵公司的租约已过期啦！" */ + '</div><div class="permit-content">' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805E4", "如需继续使用，请火速和您的客户经理联系续约事项") /* "如需继续使用，请火速和您的客户经理联系续约事项" */ + '</div></div></div>',
        buttons: [{
          text: '<i class="icon icon-close-white"></i>',
          onClick: function onClick() {}
        }]
      });
      break;
    case 997:
      //默认密码
      cb.confirm(lang.templateByUuid("UID:P_UDHMC_17EC591E05880577", "检测到密码是默认密码，请修改密码后登陆") /* "检测到密码是默认密码，请修改密码后登陆" */, lang.templateByUuid("UID:P_UDHMC_17EC591E05880576", "提示信息") /* "提示信息" */, function () {
        var userName = $$('#mylogin input[name="key"]').val();
        cb.rest.forgetPwdFunc(data.data);
      });
      break;
    case 993:
      cb.confirm(data.message, lang.templateByUuid("UID:P_UDHMC_17EC591E05880576", "提示信息") /* "提示信息" */, function () {
        cb.rest.forgetPwdFunc({
          user: data.data && Array.isArray(data.data.detail) ? data.data.detail[0] : null
        });
      });
      break;
    case 999:
      if (!data.message) data.message = lang.templateByUuid("UID:P_UDHMC_181BEDCE04400020", "服务响应数据异常：未返回错误消息！[") /* "服务响应数据异常：未返回错误消息！[" */ + options.url + ']';
      if (!errorCallBack) {
        myApp.toast(data.message, 'error').show(true);
      } else {
        errorCallBack(data);
      }
      break;
    case 404:
      if (cb.rest.runtime.isDev) myApp.toast(data.message, 'error').show(true);else myApp.toast(cb.rest.runtime.noport, 'tips').show(true);
      break;
    default:
      if (!errorCallBack) {
        if (cb.rest.runtime.isDev) myApp.toast(data.message, 'error').show(true);else myApp.toast(cb.rest.runtime.errorTips, 'tips').show(true);
      } else {
        if (cb.rest.runtime.isDev) errorCallBack(data);else errorCallBack({
          message: cb.rest.runtime.errorTips
        });
      }
      break;
  }
};

//全局禁止返回键
cb.rest.backStatus = true;

//URL缓存
cb.rest.urlCache = [{
  url: cb.router.HTTP_AGENT_GETCORPADIMAGES,
  timeLength: 600,
  time: null,
  data: null
}, {
  url: cb.router.HTTP_PRODUCT_GETHOTPRODUCTCLASS,
  timeLength: 600
}, {
  url: cb.router.HTTP_PRODUCT_GETMUPPRODUCTS,
  timeLength: 600
}, {
  url: cb.router.HTTP_PRODUCT_GETRECOMMENDEDPRODUCTS,
  timeLength: 600
}, {
  url: cb.router.HTTP_AGENT_GETAGENTNOTICES,
  //获取公告
  timeLength: 600
}, {
  url: cb.router.HTTP_PRODUCT_GETCLASSES,
  //获取分类
  timeLength: 600
}, {
  url: cb.router.HTTP_ORDER_GETORDERSTATUSCOUNTS,
  //获取订单各状态数量
  timeLength: 120
}, {
  url: cb.router.HTTP_AGENT_GETCORPRATION,
  //获取企业信息
  timeLength: 60
}, {
  url: cb.router.HTTP_PAYMENT_GETAGENTFUND,
  timeLength: 180
}, {
  url: cb.router.HTTP_PRODUCT_ADVERTISEMENTIMAGELIST,
  timeLength: 300
}];
cb.rest.clearUrlCache = function () {
  for (var i = 0; i < cb.rest.urlCache.length; i++) {
    cb.rest.urlCache[i].time = null;
    cb.rest.urlCache[i].data = null;
  }
};
cb.rest.setHttpHeader = function (url, isGetUrl) {
  var header = {
    SignIn: {
      language: cb.rest.appContext.lang,
      terminal: 2,
      clientType: 2,
      deviceId: cb.rest.appContext.deviceCode
    }
  };
  cb.rest.appContext.context = cb.rest.appContext.context || cb["native"].localStorage.get("loginContext") && JSON.parse(cb["native"].localStorage.get("loginContext"));
  if (!cb.utils.getUrlParam("title")) {
    // 这个title是小程序webview src h5 上挂的title  一般是专属化小程序要求一直显示自己的title 才会配置，注意配置的时候title的value不要写字符串
    if (cb.rest.appContext.token && cb.rest.appContext.context) {
      window.document.title = cb.rest.appContext.context.corpName;
    } else {
      window.document.title = lang.templateByUuid("UID:P_UDHMC_17EC591E05880586", "订货门户") /* "订货门户" */;
    }
  }

  if (cb.rest.appContext.yxyToken) header.authorization = 'YHT ' + cb.rest.appContext.yxyToken;
  if (cb.utils.getUrlParam("functionType")) {
    header.SignIn.functionType = cb.utils.getUrlParam("functionType");
  }
  if (cb.rest.appContext.token) {
    header['yht_access_token'] = cb.rest.appContext.token;
    if (cb["native"].localStorage.getCookie('a01')) {
      header['a01'] = cb["native"].localStorage.getCookie('a01');
    }
    if (cb["native"].localStorage.getCookie('x-change-info')) {
      header['x-change-info'] = cb["native"].localStorage.getCookie('x-change-info');
    }
    if (cb.rest.appContext.context && cb.rest.appContext.context.isOpenYht || cb.utils.getUrlParam("isOpenYht") == 'true') header['yht_udh_access_token'] = cb.rest.appContext.token;else header.authorization = (cb.rest.appContext.yht_token || cb.rest.runtime.env == 'u8c' ? 'YHT ' : 'Bearer ') + cb.rest.appContext.token;
    if (cb.utils.getUrlParam("functionType") == 2 || cb.utils.getUrlParam("functionType") == 3) {
      header.SignIn.terminal = 0;
    } else {
      header.SignIn.terminal = cb.rest.appContext.corpUser ? cb.rest.appContext.isAgentOrder ? 0 : 1 : 0;
    }
    header.SignIn.fullName = cb.rest.appContext.context ? encodeURIComponent(cb.rest.appContext.context.fullName) : '';
    header.SignIn.representAgent = !!cb.rest.appContext.isAgentOrder;
    if (!!cb.rest.appContext.isAgentOrder) {
      header.SignIn.representId = cb.rest.appContext.insteadAgent.agentId;
      header.SignIn.upAgentRelationId = header.SignIn.relationId = cb.rest.appContext.insteadAgent.agentRelationId;
    }
    if (cb.FunctionOptions && !cb.FunctionOptions.ORDERSHOWWAY && !cb.rest.appContext.corpUser) {
      header.SignIn.upAgentRelationId = header.SignIn.relationId = cb.rest.appContext.context && cb.rest.appContext.context.currentRelationId || cb["native"].localStorage.get('relationId');
      if (!header.SignIn.relationId) delete header.SignIn.relationId;
    }
    if (url && url.indexOf('archives/option/keyvalues/bizs') > -1) {
      if (header.SignIn.relationId) delete header.SignIn.relationId;
    }
    if (cb.rest.appContext.context && cb.rest.appContext.context.parameter) {
      //遍历 parameter中的data数据，如果有中文，则中文解码一下
      cb.rest.appContext.context.parameter.data && cb.rest.appContext.context.parameter.data.forEach(function (item) {
        if (item.value.match(/[\u4E00-\u9FA5]/g) != null) {
          item.value = encodeURIComponent(item.value);
        }
      });
      header.SignIn.parameter = cb.rest.appContext.context.parameter;
    }
  }
  if (!cb.rest.runtime.noxsrf) {
    xsrfToken = window.tnsSdk && window.tnsSdk.writeXscfToken('udh');
    header['X-XSRF-TOKEN'] = xsrfToken;
    document.cookie = "XSRF-TOKEN=".concat(xsrfToken, ";max-age=300;path=/");
  }
  if (url && url.indexOf('isChange=1') > -1) {
    header['x-from-mdf'] = 'public';
  }
  header.SignIn = JSON.stringify(header.SignIn);
  return header;
};
//url, params, callback,  
cb.rest.getJSON = function (paramObj) {
  if (!paramObj.url) return;
  if (!cb.rest.loading) cb.rest.loading = true;
  if (paramObj.params && paramObj.params.useCache) {
    var configUrlObj = cb.rest.urlCache.find(function (item) {
      return item.url == paramObj.url.split("?")[0];
    });
    if (configUrlObj) {
      //url被配置过
      if (!(!configUrlObj.time || new Date() - configUrlObj.time > configUrlObj.timeLength * 1000)) {
        cb.rest.resultFactory(configUrlObj.data, paramObj.success, paramObj.error, paramObj);
        cb.rest.loading = false;
        //paramObj.isList ? myApp.hideIndicator() : myApp.hidePreloader('.modal.modal-preloader');
        return false;
      }
    }
  }
  var header = cb.rest.setHttpHeader(paramObj.url);
  if (paramObj.params && paramObj.params._method) {
    header._method = paramObj.params._method;
    delete paramObj.params._method;
  }
  var async = true;
  if (paramObj.params && paramObj.params.async != "undefined" && paramObj.params.async == false) {
    async = false;
  }
  var dominUrl = this.getUrl(paramObj.url, paramObj.params);
  cb.dataLoop = function (data) {
    var state;
    for (var key in data) {
      if (_typeof(data[key]) == 'object' && key != "oldData") {
        cb.dataLoop(data[key]);
        state = false;
      } else {
        for (var o in cb.rest.appContext.hidePrice) {
          if (cb.rest.appContext.hidePrice[o].settingCode == "HIDPRICE" && key === cb.rest.appContext.hidePrice[o].fieldsCode) {
            if (!cb.rest.appContext.hidePrice[o].checkZero || cb.rest.appContext.hidePrice[o].checkZero && data[key] != 0) {
              data[key] = cb.rest.appContext.hidePrice[o].replaceValue;
            }
          }
        }
      }
    }
    return data;
  };
  $$.ajax({
    async: async,
    useCache: paramObj.params && paramObj.params.useCache,
    url: dominUrl,
    oldUrl: paramObj.url,
    method: "GET",
    dataType: "json",
    headers: header,
    success: function success(data) {
      var _this = this;
      cb.rest.loading = false;
      //paramObj.isList ? myApp.hideIndicator() : myApp.hidePreloader('.modal.modal-preloader');
      var getData = function getData(data) {
        var useCache = _this.useCache;
        try {
          if (useCache) {
            configUrlObj = null;
            for (var i = 0; i < cb.rest.urlCache.length; i++) {
              var curr = cb.rest.urlCache[i];
              if (_this.oldUrl.endsWith(curr.url)) {
                configUrlObj = curr;
                break;
              }
            }
            if (configUrlObj && data.code == 200) {
              configUrlObj.data = data;
              configUrlObj.time = new Date();
            }
          }
          cb.rest.resultFactory(data, paramObj.success, paramObj.error, paramObj);
        } catch (e) {
          var errorMsg = e.message;
          if (cb.rest.runtime.isDev) myApp.toast(errorMsg, 'error').show(true);else myApp.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E0588057F", "好像出了点小问题,请稍后再试") /* "好像出了点小问题,请稍后再试" */, "tips").show(true);
        }
      };
      if (this.oldUrl == cb.router.HTTP_AGENT_GETUSESETTINGFORHIDEPRICE) {
        // 判断是否是隐藏价格接口
        getData(data);
      } else {
        if (cb.rest.appContext.hidePrice != cb.rest.status.ajaxErrorCode && cb.rest.appContext.hidePrice != cb.rest.status.notData) {
          data.oldData = cb.utils.extend(true, {}, data);
          var _data = cb.dataLoop(data);
          getData(_data);
        } else {
          getData(data);
        }
      }
    },
    error: function error(xhr, status) {
      cb.rest.loading = false;
      paramObj.isList ? myApp.hideIndicator() : myApp.hidePreloader('.modal.modal-preloader');
      if (paramObj.netError && typeof paramObj.netError === 'function') {
        if (cb.rest.runtime.isDev) paramObj.netError(xhr, status);else {
          myApp.modal({
            title: '<div class="common-tips-title error-tips">' + '<i class="icon icon-failure"></i><span>' + lang.templateByUuid("UID:P_UDHMC_17EC591E05880576", "提示信息") /* "提示信息" */ + '</span>' + '<i class="icon icon-colse"></i>' + '</div>',
            text: '<div class="common-tips-content">' + '<div class="tips-info">' + cb.rest.runtime.netError + '</div>' + '<div class="tips-manage"><span>' + lang.templateByUuid("UID:P_UDHMC_17EC591E05880587", "您还可以") /* "您还可以" */ + '</span></div>' + '</div>',
            buttons: [{
              text: lang.templateByUuid("UID:P_UDHMC_17EC591E05880588", "知道了") /* "知道了" */,
              onClick: function onClick() {
                myApp.closeModal();
              }
            }]
          });
        }
      }
      console.error(paramObj.url + "发生http错误!");
    }
  });
};
cb.getajaxCount = 0;
cb.rest.postData = function (options) {
  //url, params, callback
  if (!options.url) return;
  var url = this.getUrl(options.url);
  var header = cb.rest.setHttpHeader();
  var postDataStr = options.params ? JSON.stringify(options.params) : '';

  //注：f7的ajax中 若 contentType !='application/x-www-form-urlencoded'  会将 & 替换为 /r/n
  //postDataStr = postDataStr.replace(/&/g, '').replace(/</g, '').replace(/>/g, '');
  postDataStr = cb.rest.xssFilter(postDataStr);
  if (options.showPreloader && !cb.rest.loading) {
    cb.rest.loading = true;
    myApp.showPreloader();
  }
  //var dominUrl = this.getUrl(options.url, options.params);
  $$.ajax({
    url: url,
    method: 'POST',
    data: postDataStr,
    headers: header,
    contentType: 'application/json',
    success: function success(data) {
      cb.rest.loading = false;
      if (options.showPreloader) {
        myApp.hidePreloader();
      }
      var _this = this;
      try {
        data = JSON.parse(data);
        cb.rest.resultFactory(data, options.success, options.error, options);
      } catch (e) {
        myApp.toast(e.message + "url:" + _this.url, 'error').show(true);
      }
    },
    error: function error(xhr, status) {
      cb.rest.loading = false;
      if (options.showPreloader) {
        myApp.hidePreloader();
      }
      if (options.netError && typeof options.netError === 'function') {
        options.netError(url);
      }
      myApp.modal({
        title: '<div class="common-tips-title error-tips">' + '<i class="icon icon-failure"></i><span>' + lang.templateByUuid("UID:P_UDHMC_17EC591E05880576", "提示信息") /* "提示信息" */ + '</span>' + '</div>',
        text: '<div class="common-tips-content">' + '<div class="tips-info">' + (cb.rest.runtime.isDev ? url + lang.templateByUuid("UID:P_UDHMC_17EC591E058805AE", "发生网络错误!") /* "发生网络错误!" */ + this.data : lang.templateByUuid("UID:P_UDHMC_17EC591E058805AD", "你的网络信号好像飞走了...") /* "你的网络信号好像飞走了..." */) + '</div>' + '<div class="tips-manage"><span>' + lang.templateByUuid("UID:P_UDHMC_17EC591E05880587", "您还可以") /* "您还可以" */ + '</span></div>' + '</div>',
        buttons: [{
          text: lang.templateByUuid("UID:P_UDHMC_17EC591E058805AF", "稍后再试") /* "稍后再试" */,
          onClick: function onClick() {
            myApp.closeModal();
          }
        }]
      });
    }
  });
};
cb.rest.xssFilter = function (str) {
  return str.replace(/&/g, '').replace(/</g, '').replace(/>/g, '').replace(/=/g, '');
};
//扩展脚本里跨域
cb.rest.postCross = function (options) {
  //url, params, callback
  if (!options.url) return;
  var postData = {
    url: options.url,
    data: options.params,
    type: options.type,
    headers: options.headers
  };
  var postDataStr = JSON.stringify(postData);
  //注：f7的ajax中 若 contentType !='application/x-www-form-urlencoded'  会将 & 替换为 /r/n
  if (options.url.indexOf('iuap-ymc-portal/proxy/server/monitor/record') > -1) {
    // 在不动用原来逻辑的基础傻瓜hubble特殊处理
    postDataStr = postDataStr.replace(/&/g, '~').replace(/</g, '').replace(/>/g, '');
  } else {
    postDataStr = postDataStr.replace(/&/g, '').replace(/</g, '').replace(/>/g, '');
  }
  // postDataStr = cb.rest.xssFilter(postDataStr);
  if (options.showPreloader && !cb.rest.loading) {
    cb.rest.loading = true;
    myApp.showPreloader();
  }
  $$.ajax({
    url: cb.rest.getUrl(cb.router.HTTP_DEFINES_POSTEXTENDCROSS),
    method: 'POST',
    async: options.async === undefined ? true : options.async,
    data: postDataStr,
    contentType: 'application/json',
    success: function success(data) {
      if (typeof data == 'string') data = JSON.parse(data);
      data.code == 200 ? options.success(data) : options.error(data);
    },
    error: function error(xhr, status) {
      console.error("接口请求失败:" + status);
    }
  });
};
cb.loader = {};
cb.loader.hasScript = function (src) {
  if (!src || !src.trim()) return true;
  var scriptNode = document.createElement("script");
  scriptNode.src = src;
  var loadedScripts = document.getElementsByTagName("script");
  for (var i = 0; i < loadedScripts.length; i++) {
    if (loadedScripts[i].src.trim().toLocaleLowerCase() == scriptNode.src.trim().toLocaleLowerCase()) return true;
  }
};
cb.loader.hasStyle = function (href) {
  if (!href || !href.trim()) return true;
  var linkNode = document.createElement("link");
  linkNode.href = href;
  linkNode.rel = "stylesheet";
  var loadedStyles = document.getElementsByTagName("link");
  for (var i = 0; i < loadedStyles.length; i++) {
    if (loadedStyles[i].href.trim().toLocaleLowerCase() == linkNode.href.trim().toLocaleLowerCase()) return true;
  }
};
cb.loader.getNode = function (content) {
  if (!content) return;
  var node = document.createElement("div");
  node.innerHTML = content;
  return node;
};
cb.loader.processNode = function (node, callback) {
  if (!node) return;
  var head = document.head || document.getElementsByTagName("head")[0];
  var scripts = node.getElementsByTagName("script");
  var scriptUrls = [];
  var scriptText = [];
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (script.type === "text/html" || script.type === "text/template7") {
      var scriptNode = script.cloneNode();
      scriptNode.innerHTML = script.innerHTML;
      head.appendChild(scriptNode);
      continue;
    }
    try {
      var potArr;
      if (script.src.indexOf('file:///') >= 0) {
        potArr = script.src.split('www/') || script.src.split('HBuilder/');
        var urlArr = potArr[1].split("/");
        var splitUrl = cb.rest.jsPath;
        if (urlArr.length == 2) {
          //是通用页面,有JS路径
          splitUrl = cb.rest.jsBasePath + urlArr[0] + "/"; //只拼接基础路径
        }
      } else {
        potArr = script.src.split("//");
        var urlArr = potArr[1].split("/");
        var splitUrl = cb.rest.jsPath;
        if (urlArr.length > 2) {
          //是通用页面,有JS路径
          splitUrl = cb.rest.jsBasePath + urlArr.slice(urlArr.length - (urlArr.length - 1), urlArr.length - 1).join("/") + "/"; //只拼接基础路径
        }
      }

      ;
      if (potArr[0].indexOf('file:///') >= 0) {
        potArr[0] = cb.rest.appContext.serviceUrl;
        script.src = potArr[0] + "//" + splitUrl + urlArr[urlArr.length - 1]; //urlArr[0];
      } else {
        script.src = potArr[0] + "//" + urlArr[0] + splitUrl + urlArr[urlArr.length - 1];
      }
    } catch (e) {
      console.log(e);
      console.log(script.src);
      //alert("JS加载异常");
    }

    if (script.src && !this.hasScript(script.src)) {
      var repeatSrc = false;
      script.src = cb.loader.changeSrc(script.src);
      for (var j = 0; j < scriptUrls.length; j++) {
        if (scriptUrls[j] == script.src) repeatSrc = true;
      }
      if (!repeatSrc) scriptUrls.push(script.src);
    } else if (script.text) scriptText.push(script.text);
  }
  for (var i = scripts.length - 1; i >= 0; i--) {
    scripts[i].parentNode.removeChild(scripts[i]);
  }
  var links = node.getElementsByTagName("link");
  for (var i = 0; i < links.length; i++) {
    if (!this.hasStyle(links[i].href)) head.appendChild(links[i].cloneNode()); //head.insertBefore(script, head.firstChild);
  }

  for (var i = links.length - 1; i >= 0; i--) {
    links[i].parentNode.removeChild(links[i]);
  }
  this.executeScript(scriptUrls, scriptText, callback);
};
cb.loader.executeScript = function (scriptUrls, scriptText, callback) {
  var cacheId = "ScriptsLoaded_none";
  if (scriptUrls && scriptUrls.length) {
    cacheId = this.loadScripts(scriptUrls);
  }
  this.executeScriptText(scriptText, cacheId, callback);
};
cb.loader.loadScripts = function (scripts) {
  var cacheId = "ScriptsLoaded_" + Math.random();
  cb.cache.set(cacheId, new Array(scripts.length));
  for (var i = 0; i < scripts.length; i++) {
    this.loadScript(scripts[i], function (i, cacheId) {
      return function () {
        cb.cache.get(cacheId)[i] = true;
      };
    }(i, cacheId), "script");
  }
  return cacheId;
};
cb.loader.loadScript = function (url, callback) {
  var script = document.createElement("script");
  if (script.scriptCharset) script.charset = script.scriptCharset || "utf-8";
  script.async = false;
  script.src = url;
  script.type = "text/javascript";
  script.onload = script.onreadystatechange = function () {
    if (!script.readyState || /complete|loaded/.test(script.readyState)) {
      script.onload = script.onreadystatechange = null;
      if (callback) callback();
      script = undefined;
    }
  };
  script.onabort = function () {
    if (script) {
      if (callback) callback();
      script = undefined;
    }
  };
  script.onerror = function () {
    if (script) {
      if (callback) callback();
      script = undefined;
    }
  };
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(script);
};
cb.loader.loadPageContent = function (url, callback) {
  var script = document.createElement("script");
  script.src = cb.utils.toAbsURL(url);
  script.type = "text/javascript";
  $$.ajax({
    async: false,
    url: script.src,
    method: 'GET',
    dataType: 'text',
    success: function success(data) {
      if (callback) callback(data);
    },
    error: function error(xhr, status) {
      if (callback) callback();
    }
  });
};
cb.loader.executeScriptText = function (scriptText, cacheId, callback) {
  var isAllScriptLoadCompleted = true;
  var scriptsLoad = cb.cache.get(cacheId) || [];
  var length = scriptsLoad.length;
  for (var i = 0; i < length; i++) isAllScriptLoadCompleted = isAllScriptLoadCompleted && scriptsLoad[i];
  if (isAllScriptLoadCompleted) {
    cb.cache.set(cacheId, null);
    if (scriptText && scriptText.length) {
      var text = scriptText.join("\r\n");
      cb.executeScript();
    }
    if (callback) callback();
  } else {
    setTimeout(cb.loader.executeScriptText, 100, scriptText, cacheId, callback);
  }
};
cb.loader.changeSrc = function (val) {
  if (val.indexOf('file:///') >= 0) {
    var index = val.indexOf('/js/pages/');
    var indexCoprUrl = val.indexOf('/js/corpPages/');
    if (index > 0) {
      val = cb.rest.appContext.serviceUrl + val.substr(index);
    } else if (indexCoprUrl > 0) {
      val = cb.rest.appContext.serviceUrl + val.substr(indexCoprUrl);
    }
  } else if (val.indexOf('file:///storage/') >= 0) {
    //debug model
    var IsDebugStr = 'Android/data/io.dcloud.HBuilder/.HBuilder/apps/HBuilder';
    //Release model
    var IsReleaseStr = 'Android/data/com.yonyou.Uorder/apps/wxe0ec2b64632588cb';
    var index = -1;
    if (val.indexOf(IsDebugStr) > 0) {
      index = val.indexOf(IsDebugStr);
      val = cb.rest.appContext.serviceUrl + val.substr(index + IsDebugStr.length);
    }
    if (val.indexOf(IsReleaseStr) > 0) {
      index = val.indexOf(IsReleaseStr);
      val = cb.rest.appContext.serviceUrl + val.substr(index + IsReleaseStr.length);
    }
  }
  return val;
};
cb.utils.isArray = function (arr) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(arr);
  }
  return Object.prototype.toString.call(arr) === '[object Array]';
};
cb.utils.toAbsURL = function (url) {
  if (cb["native"].isApp()) {
    if (url.startWith('./')) url = url.substr(1);
    if (!url.startWith('/')) url = '/' + url;
    return cb.rest.appContext.serviceUrl + url;
  } else {
    var a = document.createElement('a');
    a.href = url;
    return a.href;
  }
};
cb.utils.isPlainObject = function (obj) {
  if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
    return false;
  }
  var hasOwnConstructor = Object.prototype.hasOwnProperty.call(obj, 'constructor');
  var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf');
  // Not own constructor property must be Object
  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  }

  // Own properties are enumerated firstly, so to speed up,
  // if last one is own, then all properties are own.
  var key;
  for (key in obj) {/**/}
  return typeof key === 'undefined' || Object.prototype.hasOwnProperty.call(obj, key);
};
cb.utils.extend = function () {
  var options,
    name,
    src,
    copy,
    copyIsArray,
    clone,
    target = arguments[0],
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {};
    // skip the boolean and the target
    i = 2;
  } else if (_typeof(target) !== 'object' && typeof target !== 'function' || target == null) {
    target = {};
  }
  for (; i < length; ++i) {
    options = arguments[i];
    // Only deal with non-null/undefined values
    if (options != null) {
      // Extend the base object
      for (name in options) {
        src = target[name];
        copy = options[name];

        // Prevent never-ending loop
        if (target !== copy) {
          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && this.isArray(src) ? src : [];
            } else {
              clone = src && this.isPlainObject(src) ? src : {};
            }

            // Never move original objects, clone them
            target[name] = this.extend(deep, clone, copy);

            // Don't bring in undefined values
          } else if (typeof copy !== 'undefined') {
            target[name] = copy;
          }
        }
      }
    }
  }

  // Return the modified object
  return target;
};
cb.utils.nativeAjax = function (options) {
  options = options || {};
  options.type = (options.type || "GET").toUpperCase();
  options.dataType = options.dataType || "json";
  options.data = options.data || null;
  //创建 - 非IE6 - 第一步
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
  } else {
    //IE6及其以下版本浏览器
    var xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  //接收 - 第三步
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var status = xhr.status;
      if (status >= 200 && status < 300) {
        options.success && options.success(xhr.responseText, xhr.responseXML);
      } else {
        options.fail && options.fail(status);
      }
    }
  };
  //连接 和 发送 - 第二步
  xhr.open(options.type, options.url, true);
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhr.send(options.data);
};
cb.utils.styleOnload = function (node, callback) {
  var poll = function poll(node, callback) {
    if (callback.isCalled) {
      return;
    }
    var isLoaded = false;
    if (/webkit/i.test(navigator.userAgent)) {
      //webkit
      if (node['sheet']) {
        isLoaded = true;
      }
    }
    // for Firefox
    else if (node['sheet']) {
      try {
        if (node['sheet'].cssRules) {
          isLoaded = true;
        }
      } catch (ex) {
        // NS_ERROR_DOM_SECURITY_ERR
        if (ex.code === 1000) {
          isLoaded = true;
        }
      }
    }
    if (isLoaded) {
      // give time to render.
      setTimeout(function () {
        callback();
      }, 1);
    } else {
      setTimeout(function () {
        poll(node, callback);
      }, 1);
    }
  };
  if (node.attachEvent) {
    node.attachEvent('onload', callback);
  } else {
    setTimeout(function () {
      poll(node, callback);
    }, 0); // for cache
  }
};

cb.utils.removeLinkNode = function (filename, filetype) {
  var targetelement = filetype == "js" ? "script" : filetype == "css" ? "link" : "none";
  var targetattr = filetype == "js" ? "src" : filetype == "css" ? "href" : "none";
  var allsuspects = document.getElementsByTagName(targetelement);
  for (var i = allsuspects.length; i >= 0; i--) {
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1) allsuspects[i].parentNode.removeChild(allsuspects[i]);
  }
};
cb.utils.FormatHidePrice = function (data) {
  for (var key in data) {
    if (_typeof(data[key]) == 'object' && key != "oldData") {
      cb.utils.FormatHidePrice(data[key]);
    } else {
      for (var o in cb.rest.appContext.hidePrice) {
        if (cb.rest.appContext.hidePrice[o].settingCode == "HIDPRICE" && key === cb.rest.appContext.hidePrice[o].fieldsCode) {
          data[key] = cb.rest.appContext.hidePrice[o].replaceValue;
        }
      }
    }
  }
  return data;
};
cb.utils.removeScriptNode = function (content, filterType) {
  if (!content) return '';
  var node = cb.loader.getNode(content);
  var scripts = node.getElementsByTagName("script");
  for (var i = scripts.length - 1; i >= 0; i--) {
    if (!filterType) scripts[i].parentNode.removeChild(scripts[i]);else if (scripts[i].type === filterType) scripts[i].parentNode.removeChild(scripts[i]);
  }
  return node.innerHTML;
};
cb.utils.getGUID = function () {
  return new Date().getTime().toString().substr(4) + '-' + Math.random().toString().substr(2, 5);
};
cb.utils.isJson = function (str) {
  if (typeof str == 'string') {
    try {
      var obj = JSON.parse(str);
      if (_typeof(obj) == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log('error：' + str + '!!!' + e);
      return false;
    }
  }
  console.log('It is not a string!');
};
cb.utils.FloatCalc = {
  add: function add(arg1, arg2) {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var r1, r2, m;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (this.mult(arg1, m) + this.mult(arg2, m)) / m;
  },
  sub: function sub(arg1, arg2) {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var r1, r2, m, n;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度    
    n = r1 >= r2 ? r1 : r2;
    return ((this.mult(arg1, m) - this.mult(arg2, m)) / m).toFixed(n);
  },
  mult: function mult(arg1, arg2) {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
    try {
      m += s1.split(".")[1].length;
    } catch (e) {}
    try {
      m += s2.split(".")[1].length;
    } catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  },
  divide: function divide(arg1, arg2) {
    var t1 = 0,
      t2 = 0,
      r1,
      r2;
    try {
      t1 = arg1.toString().split(".")[1].length;
    } catch (e) {}
    try {
      t2 = arg2.toString().split(".")[1].length;
    } catch (e) {}
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    return r1 / r2 * Math.pow(10, t2 - t1);
  },
  compareDate: function compareDate(arg1, arg2) {
    var t1 = new Date(Date.parse(arg1.replace(/-/g, '/')));
    var t2 = new Date(Date.parse(arg2.replace(/-/g, '/')));
    return t1 > t2 ? arg1 : arg2;
  }
};
cb.utils.validMobile = function (mobile) {
  var result = {
    value: true,
    message: null
  };
  if (!mobile) {
    result.value = false;
    result.message = lang.templateByUuid("UID:P_UDHMC_17EC591E058805D3", "请输入手机号码") /* "请输入手机号码" */;
  } else {
    var current = cb.rest.appContext.countryCodes.find(function (item) {
      return item.isDefault;
    });
    if (current && current.pattern) {
      var rex = new RegExp(current.pattern);
      if (!rex.test(mobile)) {
        result.value = false;
        result.message = lang.templateByUuid("UID:P_UDHMC_17EC591E058805D7", "请输入正确的电话号码") /* "请输入正确的电话号码" */;
      }
    }
  }

  return result;
};
cb.utils.encrypt = function (txt) {
  var publicKey = window.__config__.publicKey;
  var encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey); // 设置公钥
  return encryptor.encrypt(txt); // 对数据进行加密
};

cb.rest.loadAuths = function (callback, params) {
  var param = params || {};
  cb.rest.getJSON({
    url: cb.router.HTTP_COMMON_QUERYAUTHS,
    params: param,
    success: function success(data) {
      cb.rest.appContext[cb.rest.appContext.corpUser ? 'corpAutData' : 'autData'] = new Object();
      if (Array.isArray(data.data)) {
        data.data.map(function (item) {
          cb.rest.appContext[cb.rest.appContext.corpUser ? 'corpAutData' : 'autData'][item.name] = true;
        });

        // 由于涉及权限影响的代码广泛
        // 所以权限接口中删除的权限全部放到白名单中 UDH-60163
        // 如果命中说明该功能已经不被权限收录默认返回true
        var whiteList = ['agentOrderReturnExeute', 'agentOrderSubmit', 'agentPrintOrder', 'agentExpenseOrderExport', 'agentExpenseOrderPay', 'agentExpenseOrderList'];
        whiteList.forEach(function (item) {
          cb.rest.appContext[cb.rest.appContext.corpUser ? 'corpAutData' : 'autData'][item] = true;
        });
      }
      if (cb.rest.appContext.corpUser) {
        cb.rest.appContext.corpAutData.commodityList = cb.rest.appContext.corpAutData.commodityList || cb.rest.appContext.context.isProductCenterEnv;
      }
      if (callback && typeof callback === 'function') {
        callback(data);
      }
    },
    error: function error(e) {
      myApp.toast(e.message, 'error').show(true);
      cb.rest.appContext[cb.rest.appContext.corpUser ? 'corpAutData' : 'autData'] = cb.rest.status.ajaxErrorCode;
    }
  });
};

// cb.rest.loadFunctionOptions = async function () {
//     cb.FunctionOptions = {};
//     let result = await new Promise(function (resolve, reject) {
//         cb.rest.getJSON({
//         url: cb.router.HTTP_COMMON_GETFUNCTIONOPTIONSBYCODES,
//         success: async function (data) {
//             if (data.code == 200 && data.data) {
//                 if (Array.isArray(data.data)) {
//                     data.data.forEach(function (item) {
//                         var attrValue = item.value;

//                         if (typeof attrValue == 'string') {
//                             if (attrValue === 'true')
//                                 attrValue = true;
//                             else if (attrValue === 'false')
//                                 attrValue = false;
//                         }

//                         cb.FunctionOptions[item.code] = attrValue; //
//                     });
//                     // 门户参数设置页面的业务选项 覆盖旧页面数据
//                     await cb.rest.loadFunctionByOptions().then(res => {
//                         cb.FunctionOptions = Object.assign({}, cb.FunctionOptions, res);
//                     });
//                     await cb.rest.quickorderByOptions().then(res => {
//                         cb.FunctionOptions = Object.assign({}, cb.FunctionOptions, res);
//                     });
//                 }
//                 if (cb.rest.runtime.env === 'u8c' && cb.rest.appContext.context.isAgent) {
//                     var user = JSON.parse(localStorage.getItem('loginContext'));
//                     var relationId = localStorage.relationId;
//                     if(user.relations && user.relations.length){
//                         var relation = user.relations.find(function (v) {
//                             return v.id + '' === relationId;
//                         });
//                         if (!relation) {
//                             relation = user.relations[0]
//                         }
//                         if(relation){
//                             cb.rest.getJSON({
//                                 url: cb.router.HTTP_COMMON_SPECIALOPTIONS,
//                                 params: {
//                                     salesOrgId: relation.orgId,
//                                     bizId: relation.bizId
//                                 },
//                                 success: function (res) {
//                                     cb.FunctionOptions['SHOWSALERETURNNONESOURCE'] = res.data
//                                 }
//                             })
//                         }
//                     }
//                 }
//                 resolve('loadFunctionOptions Success finish')
//             }
//         },
//         error: function (err) {
//             myApp.toast(err.message, 'error').show(true);
//             resolve('loadFunctionOptions Error finish')
//         }
//     })});
//     console.log("loadFunctionOptions-result:",result);
// };

cb.rest.loadFunctionOptions = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        //try delete HTTP_COMMON_GETFUNCTIONOPTIONSBYCODES
        cb.FunctionOptions = {};
        // 门户参数设置页面的业务选项 覆盖旧页面数据
        _context4.next = 3;
        return Promise.all([cb.rest.loadFunctionByOptions(), cb.rest.quickorderByOptions(), cb.rest.getOptionValueByCode('ENABLINGSERVICECOLLECTION')]).then(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 3),
            res1 = _ref6[0],
            res2 = _ref6[1],
            res3 = _ref6[2];
          cb.FunctionOptions = Object.assign({}, cb.FunctionOptions, res1, res2, res3);
        });
      case 3:
      case "end":
        return _context4.stop();
    }
  }, _callee4);
}));
cb.rest.loadFunctionByOptions = function () {
  var orgId = cb["native"].localStorage.get('currentOrgId');
  var bizId = cb["native"].localStorage.get('currentBizId');
  cb.bizFunctionOptions = new Object();
  return new Promise(function (resolve, reject) {
    cb.rest.postData({
      url: cb.router.HTTP_COMMON_QUICKORDER_OPTIONCODES,
      params: {
        optionId: 'portal_option',
        orgId: orgId
      },
      success: function success(data) {
        cb.bizFunctionOptions[bizId] = {};
        var ret = {};
        if (data.code == 200 && data.data) {
          data.data.map(function (item) {
            cb.bizFunctionOptions[bizId][item.code] = item.value;
            ret[item.code] = item.value; //重新赋值
          });

          resolve(ret);
        }
      },
      error: function error(err) {
        myApp.toast(err.message, 'error').show(true);
        reject(err);
      }
    });
  });
};
cb.rest.quickorderByOptions = function () {
  var orgId = cb["native"].localStorage.get('currentOrgId');
  var bizId = cb["native"].localStorage.get('currentBizId');
  return new Promise(function (resolve, reject) {
    cb.rest.postData({
      url: cb.router.HTTP_COMMON_QUICKORDER_OPTIONCODES,
      params: {
        optionId: 'flash_option',
        orgId: orgId
      },
      success: function success(data) {
        var ret = {};
        if (data.code == 200 && data.data) {
          data.data.map(function (item) {
            ret[item.code] = item.value; //重新赋值
          });

          resolve(ret);
        }
      },
      error: function error(err) {
        myApp.toast(err.message, 'error').show(true);
        reject(err);
      }
    });
  });
};
cb.rest.getOptionValueByCode = function (code) {
  var orgId = cb["native"].localStorage.get('currentOrgId');
  var bizId = cb["native"].localStorage.get('currentBizId');
  return new Promise(function (resolve, reject) {
    cb.rest.getJSON({
      url: cb.router.HTTP_COMMON_GETOPTIONCODE,
      params: {
        code: code
      },
      success: function success(data) {
        var res = {};
        if (data.code == 200) {
          res[code] = data.data;
          resolve(res);
        }
      },
      error: function error(err) {
        myApp.toast(err.message, 'error').show(true);
        reject(err);
      }
    });
  });
};
// 财务新老架构
cb.rest.isNewFinanceFi = function () {
  return new Promise(function (resolve, reject) {
    cb.rest.getJSON({
      url: cb.router.HTTP_PAYMENT_ISNEWFINANCEFI,
      success: function success(data) {
        if (data.code == 200) {
          resolve(data.data);
        }
      },
      error: function error(err) {
        myApp.toast(err.message, 'error').show(true);
        reject(err);
      }
    });
  });
};
cb.rest.loadBizsFunctionOptions = function () {
  var user = cb.rest.appContext.context;
  if ((!user.relations || user.relations.length <= 0) && cb.rest.appContext.context.isAgent) {
    return false;
  }
  cb.bizFunctionOptions = new Object();
  cb.rest.postData({
    url: cb.router.HTTP_COMMON_LOADBIZSOPTIONS,
    params: {
      conditions: [{
        name: "agentId",
        v1: JSON.parse(cb["native"].localStorage.get('loginContext')).agentId,
        valueType: "LONG",
        conditionType: "eq"
      }, {
        conditionType: "eq",
        isOuterField: false,
        isSkip: false,
        name: "isContainBiz",
        v1: true,
        valueType: "BOOLEAN"
      }, {
        conditionType: "eq",
        isOuterField: false,
        isSkip: false,
        name: "isContainOrg",
        v1: true,
        valueType: "BOOLEAN"
      }, {
        name: "activate",
        v1: true,
        valueType: "BOOLEAN",
        conditionType: "eq"
      }],
      pager: {
        pageIndex: 1,
        pageSize: 100
      }
    },
    success: function () {
      var _success = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
        var orgId;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (data.code == 200) {
                orgId = cb["native"].localStorage.get('currentOrgId');
                cb.bizFunctionOptions[data.data[orgId].bizId] = {};
                if (cb.rest.appContext.context.bizMode == 1) cb.rest.appContext.context.bizId = data.data[orgId].bizId;
                if (Array.isArray(data.data[orgId].pubOptionListData)) {
                  data.data[orgId].pubOptionListData.forEach(function (citem) {
                    if (typeof citem.value == 'string') {
                      if (citem.value === 'true') citem.value = true;else if (citem.value === 'false') citem.value = false;
                    }
                    cb.bizFunctionOptions[data.data[orgId].bizId][citem.code] = citem.value;
                  });
                }
              }
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function success(_x5) {
        return _success.apply(this, arguments);
      }
      return success;
    }(),
    error: function error(err) {
      myApp.toast(err.message, 'error').show(true);
    }
  });
};
cb.rest.loadDefineMenus = function (callback) {
  //获取自定义菜单
  cb.rest.appContext.context.defineMenus = [];
  cb.rest.getJSON({
    url: cb.router.HTTP_DEFINES_GETMENUS,
    params: {
      iCorpId: cb.rest.appContext.context.corpId
    },
    success: function success(data) {
      cb.rest.appContext.context.defineMenus = data.data || [];
      if (callback) callback();
    },
    error: function error() {
      cb.rest.appContext.context.defineMenus = [];
      if (callback) callback();
    }
  });
};
cb.rest.reloadShoppingCartCount = function (callback) {
  cb.rest.getJSON({
    url: cb.router.HTTP_SHOPPINGCART_COUNT,
    success: function success(data) {
      var span = '<span class="badge bg-red">' + data.data + '</span>';
      if (data.data == 0) span = '';
      $$('.upShoppingCount').each(function () {
        if ($$(this).parent().children('.badge.bg-red').length) {
          $$(this).parent().children('.badge.bg-red').text(data.data);
          if (data.data == 0) $$(this).parent().children('.badge.bg-red').remove();
        } else $$(span).insertBefore('.upShoppingCount');
      });
      if (callback && typeof callback === 'function') callback(data.data);
    }
  });
};
cb.rest.copy = function (e) {
  console.log(e, this.page);
  debugger;
};
cb.rest.loadPopNotices = function () {
  if (cb.temp.closePopNotices) return;
  cb.rest.getJSON({
    url: cb.router.HTTP_AGENT_GETAGENTPOPNOTICES,
    success: function success(data) {
      if (Array.isArray(data.data) && data.data.length) {
        var swipers = new Array();
        data.data.forEach(function (item) {
          var _item$attachments;
          item.preId = item.productPromotionId || item.entirePromotionId || item.combinationPromotionId;
          if (item.productPromotionId) {
            item.demensionType = 7;
          } else if (item.entirePromotionId) {
            item.demensionType = 8;
          } else if (item.combinationPromotionId) {
            item.demensionType = 9;
          }
          var html = '';
          var imgExts = ['.jpg', '.jpeg', '.png', '.bmp', 'gif'];
          var iconType = new Map([['.xls', 'xlsx'], ['.xlsx', 'xlsx'], ['.csv', 'xlsx'], ['.docx', 'doc'], ['.doc', 'doc'], ['.pdf', 'pdf'], ['.txt', 'txt'], ['.ppt', 'ppt']]);
          item === null || item === void 0 || (_item$attachments = item.attachments) === null || _item$attachments === void 0 || _item$attachments.map(function (file, i) {
            if (imgExts.includes(file.extName)) {
              file.fileTypeUrl = file.url;
            } else if (iconType.get(file.extName)) {
              file.fileTypeUrl = "../img/notice/".concat(iconType.get(file.extName), ".png");
            } else {
              file.fileTypeUrl = "../img/notice/file.png";
            }
            html += "<li class=\"item-content\" id=\"copyfile".concat(i, "\" data-copy=\"copyfile").concat(i, "\" data-clipboard-text=").concat(file.url, ">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title\">\n                                    <img style=\"width: 60px;height: 60px;\" src=").concat(file.fileTypeUrl, " alt=\"\" srcset=\"\">\n                                </div>\n                                <div class=\"item-input\">\n                                    ").concat(file.fileName, "\n                                </div>\n                            </div>\n                        </li>");
          });
          swipers.push('<div class="swiper-slide">');
          swipers.push('<div class="swiper-notice-title"><div class="item-text">' + item.title + '</div></div>');
          swipers.push('<div class="swiper-notice-content">' + (item.noticeDetail ? item.noticeDetail.content : '') + "<div class=\"list-block\"><ul id=\"copynotice\" style=\"text-align: left;\">".concat(html && lang.templateByUuid('UID:P_UDHMC_17EC592E04C80537', '附件:'), " <br/>").concat(html, "</ul></div>") + '</div>');
          if ((item.demensionType == 7 || item.demensionType == 8 || item.demensionType == 9) && cb.rest.runtime.env === 'u8c') {
            swipers.push('<div class="swiper-notice-footer"><a href="#" class="define-modal-button btn-show-promotion" data-demensiontype="' + item.demensionType + '" data-preid="' + item.preId + '">' + lang.templateByUuid("UID:P_UDHMC_17EC591E0588059B", "查看促销商品") /* "查看促销商品" */ + '</a><a href="#" class="define-modal-button btn-read" data-id="' + item.id + '">' + lang.templateByUuid("UID:P_UDHMC_17EC591E0588059C", "标为已读") /* "标为已读" */ + '</a></div>');
          } else {
            swipers.push('<div class="swiper-notice-footer"><a href="#" class="define-modal-button btn-read" data-id="' + item.id + '">' + lang.templateByUuid("UID:P_UDHMC_17EC591E0588059C", "标为已读") /* "标为已读" */ + '</a></div>');
          }
          swipers.push('</div>');
        });
        var modal = myApp.modal({
          afterText: '<div class="modal-advert">' + '<div class="swiper-after"><a href="pages/noticeList.html?notips=true" class="white-button ' + (swipers.length == 1 ? 'hide' : '') + '">' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805A2", "查看全部") /* "查看全部" */ + '</a></div>' + '<div class="swiper-pagination"></div>' + '<div class="swiper-container">' + '<div class="swiper-wrapper">' + swipers.join('') + '</div>' + '</div>' + '</div>',
          buttons: [{
            text: '<a href="#" class="define-modal-button btn-close"></a>',
            onClick: function onClick() {
              cb.temp.closePopNotices = true;
            }
          }]
        });
        myApp.swiper($$(modal).addClass('popup-notices').find('.swiper-container'), {
          pagination: '.swiper-pagination'
        });
        $$(modal).find('.swiper-notice-footer .btn-read').on('click', function () {
          var $this = $$(this);
          if ($this.hasClass('readed')) return;
          var ds = $this.dataset();
          cb.rest.postData({
            url: cb.router.HTTP_AGENT_AGENTPOPNOTICECONFIRM.format(ds.id),
            params: {},
            success: function success(data) {
              if (data.code == 200) $this.addClass('readed').text(lang.templateByUuid("UID:P_UDHMC_17EC591E058805B6", "已读") /* "已读" */);
            },

            error: function error(e) {
              myApp.toast(e.message, 'error').show(true);
            }
          });
        });
        $$(modal).find('.swiper-notice-footer .btn-show-promotion').on('click', function () {
          var $this = $$(this);
          var ds = $this.dataset();
          var url = '';
          if (ds.demensiontype == 7) {
            url = cb.router.HTTP_PROMOTION_PRODUCTPROMOTIONDETAIL;
          } else if (ds.demensiontype == 8) {
            url = cb.router.HTTP_PROMOTION_SINGLEDISCOUNTDETAIL;
          } else if (ds.demensiontype == 9) {
            url = cb.router.HTTP_PROMOTION_COMBINATIONDETAIL;
          }
          var compareDate = function compareDate(d1, d2) {
            var curDate = new Date();
            var date1 = new Date(d1);
            var date2 = new Date(d2);
            return curDate >= date1 && curDate <= date2;
          };
          cb.rest.getJSON({
            url: url.format(ds.preid),
            success: function success(data) {
              if (data.code == 200 && data.data) {
                if ((data.data.isValid || data.data.pValid) && compareDate(data.data.startDate || data.data.pStartDate, data.data.endDate || data.data.pEndDate)) {
                  var url = 'pages/promotionDetail.html?promotionId=' + ds.preid + '&promotionName=' + (data.data.name || data.data.pName) + '&isFromNotice=true';
                  if (ds.demensiontype == 8) {
                    url += '&isEntire=true';
                  }
                  if (ds.demensiontype == 9) {
                    url += '&isCombine=true';
                  }
                  myApp.mainView.router.loadPage({
                    url: url
                  });
                  myApp.closeModal(modal);
                } else {
                  myApp.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E058805C6", "促销活动已经结束！") /* "促销活动已经结束！" */, 'error').show(true);
                }
              }
            },
            error: function error(err) {
              console.error(err);
            }
          });
        });
        $$(modal).find('.white-button').on('click', function () {
          myApp.closeModal(modal);
        });
        $$(modal).find('#copynotice').on('click', 'li', function (e) {
          var copy = this.dataset.copy;
          var clipboard = new ClipboardJS('#' + copy);
          console.log('clipboard', '#' + copy, clipboard);
          clipboard.on('success', function (e) {
            console.info('Text:', e.text);
            myApp.toast(lang.templateByUuid("UID:P_UDHMC_18C3CFF205A80012", "复制链接成功，请转到浏览器下载") /* "复制链接成功，请转到浏览器下载" */, 'success').show(true);
            clipboard.destroy();
          });
          clipboard.on('error', function (e) {
            myApp.toast(lang.templateByUuid("UID:P_UDHMC_18C3CFF205A80011", "复制链接失败，请到电脑端下载") /* "复制链接失败，请到电脑端下载" */);
            clipboard.destroy();
          });
        });
      }
    }
  });
};
cb.rest.myBraodCast = setInterval(function () {
  cb.rest.getJSON({
    url: cb.router.HTTP_BROADCAST_GETBROADCAST,
    success: function success(data) {
      if (data.code == 200 && data.data) {
        var broadCast = data.data.broadCast;
        if (!myApp.mainView || $$('.modal .broadCast-tips').length) return;
        if (window.plus && plus.storage.getItem("broadId") == broadCast.id || cb.rest.appContext.broadId == broadCast.id) return;
        myApp.modal({
          title: '<div class="common-tips-title success-tips broadCast-tips">' + '<i class="icon icon-no-message"></i><span  class="font-23">' + broadCast.title + '</span>' + '</div>',
          text: '<div class="common-tips-content">' + '<div class="tips-info">' + broadCast.content + '</div>' + (broadCast.outhref ? '<div class="tips-info" data-url="' + broadCast.outhref + '">' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805D0", "请访问：") /* "请访问：" */ + broadCast.outhref + '</div>' : '') + '</div>',
          buttons: [{
            text: lang.templateByUuid("UID:P_UDHMC_17EC591E058805D2", "我知道了") /* "我知道了" */,
            onClick: function onClick() {
              window.clearInterval(cb.rest.myBraodCast);
              if (window.plus) {
                plus.storage.setItem("broadId", broadCast.id);
              } else cb.rest.appContext.broadId = broadCast.id;
            }
          }]
        });
        $$('.common-tips-title.broadCast-tips').parents('.modal.modal-in').on('click', '.tips-info', function (e) {
          if ($$(this).attr('data-url')) {
            var url = $$(this).attr('data-url');
            myApp.closeModal();
            cb["native"].openWebView(url, true);
          }
        });
      }
    },
    error: function error(err) {
      console.error(err);
    }
  });
}, 1000000);
cb.rest.initWxConfig = function () {
  // 小程序中使用mtl方式配置wxConfig
  if (cb["native"].isWeiXin()) {
    //公众号APPID、APPSECRET
    var APPID = '',
      APPSECRET = '';
    /*公众号APPID、APPSECRET取值逻辑：
      1、yms配置优先级最高，试用场景：客户专属化小程序（域名不是标品域名）且有自己公众号。yms配置项APPID对应公众号APPID、APPSECRET对应公众号APPSECRET
      2、由于一个公众号只能绑定5个js接口安全域名标品公众号已满，所以核心1新域名： mdinghuo-c1.yonyoucloud.com、 核心3店铺装修域名：  udhsdweb-c3.yonyoucloud.com 这两个域名使用会员的公众号APPID、APPSECRET
      3、默认情况标品小程序 或者 客户自建的小程序（但是域名还是标品的域名，一般是有微信支付功能的那些小程序）使用U订货标品公众号APPID、APPSECRET
    */
    if (window.__config__.wxgzhAppId && window.__config__.wxgzhAppSecret) {
      APPID = window.__config__.wxgzhAppId;
      APPSECRET = window.__config__.wxgzhAppSecret;
    } else if (location.href.indexOf('mdinghuo-c1.yonyoucloud.com') > 0 || location.href.indexOf('udhsdweb-c3.yonyoucloud.com') > 0) {
      // 目前借用了下会员的公众号帮助绑定这两个js接口安全域名（小程序扫码附件等功能使用）： 核心1新域名： mdinghuo-c1.yonyoucloud.com、 核心3店铺装修域名：  udhsdweb-c3.yonyoucloud.com
      APPID = "wxf50f3d16501149e5";
      APPSECRET = "1090d1af566d0e639644e86003006ba0";
    } else {
      //标品U订货的公众号
      APPID = 'wxbd2530aa25b2c0de';
      APPSECRET = '5c6b375bafe76e4f55c1b9dbbed635b5';
    }
    mtl && mtl.initWxConfig && mtl.initWxConfig({
      appId: APPID,
      secret: APPSECRET
    });
    cb.rest.initWxJSSDK = true;
  } else {
    if (!cb["native"].isWeiXin() || cb.rest.initWxJSSDK) return;
    var query = Dom7.parseUrlQuery(window.location.href);
    var url = encodeURIComponent(location.href.split('#')[0]);
    var params = {
      pageUrl: url,
      bizId: cb["native"].localStorage.get('currentBizId')
    };
    if (cb.rest.appContext.context && cb.rest.appContext.context.currentOrg) params.orgId = cb.rest.appContext.context.currentOrg.id;
    cb.rest.getJSON({
      url: cb["native"].isWxMiniProgram() ? cb.router.HTTP_COMMON_WXMINIPROGRAMGETJSAPITICKET : cb.router.HTTP_COMMON_GETJSAPITICKET,
      params: cb["native"].isWxMiniProgram() ? {
        pageUrl: url
      } : params,
      success: function success(data) {
        if (data.code == 200 && data.data) {
          cb.rest.initWxJSSDK = true;
          wx.config({
            debug: query.wxdebug,
            appId: data.data.appId,
            timestamp: data.data.timestamp,
            nonceStr: data.data.nonceStr,
            signature: data.data.signature,
            jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onRecordEnd", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem"]
          });
          wx.error(function (res) {
            if (query.wxdebug) {
              myApp.toast(JSON.stringify(res), 'error').show(true);
            }
          });
        }
      },
      error: function error(err) {
        if (query.wxdebug) {
          myApp.toast(err.message, 'error').show(true);
        }
        cb.rest.initWxJSSDK = false;
      }
    });
  }
};
cb.rest.loadMobileCountry = function (callback) {
  // cb.rest.getJSON({
  //     url: cb.router.HTTP_BASE_GETMOBILECOUNTRY,
  //     success: function (data) {
  //         if (data.code == 200) {
  //             cb.rest.appContext.countryCodes = data.data || [];
  //             if (callback) callback.call();
  //         }
  //     },
  //     error: function (e) {
  //         myApp.toast(e.message, 'tips').show(true);
  //     }
  // });
  var zhCnMobilecountry = [{
    "id": "27",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "86",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E0588058B", "中国大陆") /* "中国大陆" */,
    "pattern": "^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$",
    "isDefault": false,
    "order": "1",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E0588058D", "86(中国大陆)") /* "86(中国大陆)" */
  }, {
    "id": "28",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "852",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E05880591", "中国香港") /* "中国香港" */,
    "pattern": "^(5|6|9)[0-9]{7}$",
    "isDefault": false,
    "order": "3",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E05880593", "852(中国香港)") /* "852(中国香港)" */
  }, {
    "id": "29",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "853",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E05880596", "中国澳门") /* "中国澳门" */,
    "pattern": "^6[0-9]{7}$",
    "isDefault": false,
    "order": "5",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E05880599", "853(中国澳门)") /* "853(中国澳门)" */
  }, {
    "id": "30",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "886",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E0588059F", "中国台湾") /* "中国台湾" */,
    "pattern": "^(9|09)[0-9]{8}$",
    "isDefault": false,
    "order": "7",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805A1", "886(中国台湾)") /* "886(中国台湾)" */
  }, {
    "id": "31",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "60",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805A8", "马来西亚") /* "马来西亚" */,
    "pattern": "(^(10|010|12|012|13|013|14|014|16|016|17|017|18|018|19|019)[0-9]{7}$)|(^(11|011)[0-9]{8}$)",
    "isDefault": false,
    "order": "9",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805AC", "60(马来西亚)") /* "60(马来西亚)" */
  }, {
    "id": "32",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "63",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805B2", "菲律宾") /* "菲律宾" */,
    "pattern": "^(09|9)[0-9]{9}$",
    "isDefault": false,
    "order": "9",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805B4", "63(菲律宾)") /* "63(菲律宾)" */
  }, {
    "id": "33",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "61",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805BC", "澳大利亚") /* "澳大利亚" */,
    "pattern": "^(04|4)[0-9]{8}$",
    "isDefault": false,
    "order": "11",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805BF", "61(澳大利亚)") /* "61(澳大利亚)" */
  }, {
    "id": "34",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "62",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805C1", "印度尼西亚") /* "印度尼西亚" */,
    "pattern": "(^(81|081|82|082|83|083|85|085|87|087|89|089)[0-9]{7}$)|(^(81|081|82|082|83|083|85|085|87|087|89|089)[0-9]{8}$)|(^(81|081|82|082|83|083|85|085|87|087|89|089)[0-9]{9}$)",
    "isDefault": false,
    "order": "13",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805C3", "62(印度尼西亚)") /* "62(印度尼西亚)" */
  }, {
    "id": "35",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "65",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805A7", "新加坡") /* "新加坡" */,
    "pattern": "^(8|9)[0-9]{7}$",
    "isDefault": false,
    "order": "15",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805AB", "65(新加坡)") /* "65(新加坡)" */
  }, {
    "id": "36",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "66",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805C8", "泰国") /* "泰国" */,
    "pattern": "^(06|08|09|6|8|9)[0-9]{8}$",
    "isDefault": false,
    "order": "17",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805CB", "66(泰国)") /* "66(泰国)" */
  }, {
    "id": "37",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "84",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805BB", "越南") /* "越南" */,
    "pattern": "(^(09|9)[0-9]{7}$)|(^(03|3|08|8|09|9)[0-9]{8}$)|(^(01|1|09|9)[0-9]{9}$)",
    "isDefault": false,
    "order": "19",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805BE", "84(越南)") /* "84(越南)" */
  }, {
    "id": "38",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "95",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805D4", "缅甸") /* "缅甸" */,
    "pattern": "(^(09|9)[0-9]{7}$)|(^(09|9)[0-9]{8}$)|(^(09|9)[0-9]{9}$)",
    "isDefault": false,
    "order": "21",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805D5", "95(缅甸)") /* "95(缅甸)" */
  }, {
    "id": "39",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "855",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805C4", "柬埔寨") /* "柬埔寨" */,
    "pattern": "^(010|011|012|014|015|016|017|060|061|066|067|068|069|070|071|076|077|078|079|081|085|086|087|088|089|090|092|093|095|096|097|098|099)[0-9]*$",
    "isDefault": false,
    "order": "22",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805C5", "855(柬埔寨)") /* "855(柬埔寨)" */
  }, {
    "id": "79",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "00250",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805DC", "卢旺达") /* "卢旺达" */,
    "pattern": "[0-9]{9,11}",
    "isDefault": false,
    "order": "123",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805DD", "00250(卢旺达)") /* "00250(卢旺达)" */
  }];

  var zhTwMobilecountry = [{
    "id": "40",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "86",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805E2", "中國大陸") /* "中國大陸" */,
    "pattern": "^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$",
    "isDefault": false,
    "order": "1",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805E3", "86(中國大陸)") /* "86(中國大陸)" */
  }, {
    "id": "41",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "852",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E05880575", "中國香港") /* "中國香港" */,
    "pattern": "^(5|6|9)[0-9]{7}$",
    "isDefault": false,
    "order": "3",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E05880578", "852(中國香港)") /* "852(中國香港)" */
  }, {
    "id": "42",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "853",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E05880580", "中國澳門") /* "中國澳門" */,
    "pattern": "^6[0-9]{7}$",
    "isDefault": false,
    "order": "5",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E05880582", "853(中國澳門)") /* "853(中國澳門)" */
  }, {
    "id": "43",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "886",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E05880584", "中國台灣") /* "中國台灣" */,
    "pattern": "^(9|09)[0-9]{8}$",
    "isDefault": false,
    "order": "7",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E05880585", "886(中國台灣)") /* "886(中國台灣)" */
  }, {
    "id": "44",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "60",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E05880589", "馬拉西亞") /* "馬拉西亞" */,
    "pattern": "(^(10|010|12|012|13|013|14|014|16|016|17|017|18|018|19|019)[0-9]{7}$)|(^(11|011)[0-9]{8}$)",
    "isDefault": false,
    "order": "9",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E0588058C", "60(馬拉西亞)") /* "60(馬拉西亞)" */
  }, {
    "id": "45",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "63",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E0588058F", "菲律賓") /* "菲律賓" */,
    "pattern": "^(09|9)[0-9]{9}$",
    "isDefault": false,
    "order": "9",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E05880592", "63(菲律賓)") /* "63(菲律賓)" */
  }, {
    "id": "46",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "61",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E05880595", "澳大利亞") /* "澳大利亞" */,
    "pattern": "^(04|4)[0-9]{8}$",
    "isDefault": false,
    "order": "11",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E05880598", "61(澳大利亞)") /* "61(澳大利亞)" */
  }, {
    "id": "47",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "62",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E0588059D", "印度尼西亞") /* "印度尼西亞" */,
    "pattern": "(^(81|081|82|082|83|083|85|085|87|087|89|089)[0-9]{7}$)|(^(81|081|82|082|83|083|85|085|87|087|89|089)[0-9]{8}$)|(^(81|081|82|082|83|083|85|085|87|087|89|089)[0-9]{9}$)",
    "isDefault": false,
    "order": "13",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805A0", "62(印度尼西亞)") /* "62(印度尼西亞)" */
  }, {
    "id": "48",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "65",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805A7", "新加坡") /* "新加坡" */,
    "pattern": "^(8|9)[0-9]{7}$",
    "isDefault": false,
    "order": "15",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805AB", "65(新加坡)") /* "65(新加坡)" */
  }, {
    "id": "49",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "66",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805B1", "泰國") /* "泰國" */,
    "pattern": "^(06|08|09|6|8|9)[0-9]{8}$",
    "isDefault": false,
    "order": "17",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805B3", "66(泰國)") /* "66(泰國)" */
  }, {
    "id": "50",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "84",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805BB", "越南") /* "越南" */,
    "pattern": "(^(09|9)[0-9]{7}$)|(^(03|3|08|8|09|9)[0-9]{8}$)|(^(01|1|09|9)[0-9]{9}$)",
    "isDefault": false,
    "order": "19",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805BE", "84(越南)") /* "84(越南)" */
  }, {
    "id": "51",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "95",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805C0", "緬甸") /* "緬甸" */,
    "pattern": "(^(09|9)[0-9]{7}$)|(^(09|9)[0-9]{8}$)|(^(09|9)[0-9]{9}$)",
    "isDefault": false,
    "order": "21",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805C2", "95(緬甸)") /* "95(緬甸)" */
  }, {
    "id": "52",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "855",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805C4", "柬埔寨") /* "柬埔寨" */,
    "pattern": "^(010|011|012|014|015|016|017|060|061|066|067|068|069|070|071|076|077|078|079|081|085|086|087|088|089|090|092|093|095|096|097|098|099)[0-9]*$",
    "isDefault": false,
    "order": "22",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805C5", "855(柬埔寨)") /* "855(柬埔寨)" */
  }, {
    "id": "82",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "00250",
    "name": lang.templateByUuid("UID:P_UDHMC_17EC591E058805C7", "盧旺達") /* "盧旺達" */,
    "pattern": "[0-9]{9,11}",
    "isDefault": false,
    "order": "100",
    "viewName": lang.templateByUuid("UID:P_UDHMC_17EC591E058805CA", "00250(盧旺達)") /* "00250(盧旺達)" */
  }];

  var enUsMobilecountry = [{
    "id": "53",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "86",
    "name": "China",
    "pattern": "^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$",
    "isDefault": false,
    "order": "1",
    "viewName": "86(China)"
  }, {
    "id": "54",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "852",
    "name": "Hong Kong(China)",
    "pattern": "^(5|6|9)[0-9]{7}$",
    "isDefault": false,
    "order": "3",
    "viewName": "852(Hong Kong(China))"
  }, {
    "id": "55",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "853",
    "name": "Macau(China)",
    "pattern": "^6[0-9]{7}$",
    "isDefault": false,
    "order": "5",
    "viewName": "853(Macau(China))"
  }, {
    "id": "56",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "886",
    "name": "Taiwan(China)",
    "pattern": "^(9|09)[0-9]{8}$",
    "isDefault": false,
    "order": "7",
    "viewName": "886(Taiwan(China))"
  }, {
    "id": "57",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "60",
    "name": "Malaysia",
    "pattern": "(^(10|010|12|012|13|013|14|014|16|016|17|017|18|018|19|019)[0-9]{7}$)|(^(11|011)[0-9]{8}$)",
    "isDefault": false,
    "order": "9",
    "viewName": "60(Malaysia)"
  }, {
    "id": "58",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "63",
    "name": "Philippines",
    "pattern": "^(09|9)[0-9]{9}$",
    "isDefault": false,
    "order": "9",
    "viewName": "63(Philippines)"
  }, {
    "id": "59",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "61",
    "name": "Australia",
    "pattern": "^(04|4)[0-9]{8}$",
    "isDefault": false,
    "order": "11",
    "viewName": "61(Australia)"
  }, {
    "id": "60",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "62",
    "name": "Indonesia",
    "pattern": "(^(81|081|82|082|83|083|85|085|87|087|89|089)[0-9]{7}$)|(^(81|081|82|082|83|083|85|085|87|087|89|089)[0-9]{8}$)|(^(81|081|82|082|83|083|85|085|87|087|89|089)[0-9]{9}$)",
    "isDefault": false,
    "order": "13",
    "viewName": "62(Indonesia)"
  }, {
    "id": "61",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "65",
    "name": "Singapore",
    "pattern": "^(8|9)[0-9]{7}$",
    "isDefault": false,
    "order": "15",
    "viewName": "65(Singapore)"
  }, {
    "id": "62",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "66",
    "name": "Thailand",
    "pattern": "^(06|08|09|6|8|9)[0-9]{8}$",
    "isDefault": false,
    "order": "17",
    "viewName": "66(Thailand)"
  }, {
    "id": "63",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "84",
    "name": "Viet Nam",
    "pattern": "(^(09|9)[0-9]{7}$)|(^(03|3|08|8|09|9)[0-9]{8}$)|(^(01|1|09|9)[0-9]{9}$)",
    "isDefault": false,
    "order": "19",
    "viewName": "84(Viet Nam)"
  }, {
    "id": "64",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "95",
    "name": "Burma",
    "pattern": "(^(09|9)[0-9]{7}$)|(^(09|9)[0-9]{8}$)|(^(09|9)[0-9]{9}$)",
    "isDefault": false,
    "order": "21",
    "viewName": "95(Burma)"
  }, {
    "id": "65",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "855",
    "name": "Kampuchea",
    "pattern": "^(010|011|012|014|015|016|017|060|061|066|067|068|069|070|071|076|077|078|079|081|085|086|087|088|089|090|092|093|095|096|097|098|099)[0-9]*$",
    "isDefault": false,
    "order": "22",
    "viewName": "855(Kampuchea)"
  }, {
    "id": "80",
    "version": 0,
    "deletedValue": {
      "isDeleted": 0
    },
    "code": "00250",
    "name": "Rwanda",
    "pattern": "[0-9]{9,11}",
    "isDefault": false,
    "order": "123",
    "viewName": "00250(Rwanda)"
  }];
  var langData = localStorage.getItem('langCode') === 'en-us' ? enUsMobilecountry : localStorage.getItem('langCode') === 'zh-tw' ? zhTwMobilecountry : zhCnMobilecountry;
  cb.rest.appContext.countryCodes = langData || [];
  if (callback) callback.call();
};
cb.rest.agentInfoAuths = function (resolvedCallback, rejectedCallback) {
  var params = [];
  var queryParams = '';
  if (cb.rest.appContext.isAgentOrder) {
    if (cb.rest.appContext.iAgentId) {
      queryParams = '&agentId=' + cb.rest.appContext.iAgentId;
    }
  }
  cb.rest.postData({
    url: cb.router.HTTP_AGENT_AGENTADAPTABLE + queryParams,
    params: params,
    success: function success(data) {
      if (data.code == 200) {
        if (resolvedCallback) resolvedCallback(data.data);
      }
    },
    error: function error(e) {
      myApp.toast(e.message, 'tips').show(true);
      if (rejectedCallback) rejectedCallback(e);
    }
  });
};

//获取yxytoken
cb.rest.getYxyToken = function (callback) {
  cb.rest.getJSON({
    url: cb.router.HTTP_COMMON_YXYTOKEN,
    success: function success(data) {
      cb.rest.appContext.yxyToken = data.data;
      if (data.data) console.log('yxyToken:' + data.data);
      if (callback) callback(data);
    },
    error: function error(e) {
      myApp.toast(e.message, 'tips').show(true);
      if (callback) callback({
        code: 999
      });
    }
  });
};

//是否开启门户装修功能
cb.rest.checkAgentHome = function (callback) {
  if (!cb.rest.defineRouters) {
    cb.rest.defineRouters = new Object();
  }
  if (!Array.isArray(cb.rest.defineRouters.pages)) {
    cb.rest.defineRouters.pages = new Array();
  }
  if (cb.FunctionOptions.OPENSHOPDECORATION && window.__config__.newHome) {
    cb.rest.defineRouters.pageCode = 'udinghuo-gscmf';
    cb.rest.defineRouters.pages.push({
      path: 'pages/home.html',
      router: '/render/udinghuo/home'
    });
  }
  if (callback) callback();
};
cb.rest.dualAuthentication = function (params, callback) {
  var self = this;
  if (!params) return;
  var modal = myApp.modal({
    title: '<div class="common-tips-title auth-message">' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805CE", "短信验证") /* "短信验证" */ + '</div>',
    text: '<div class="common-tips-content auth-message">' + '<div class="input-field flex"><div class="item-title label">' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805CF", "手机号码") /* "手机号码" */ + '</div><div class="detail-content">' + (params.mobile && params.mobile.replace(/(\d{3})\d*(\d{4})/, '$1****$2')) + '</div></div>' + '<div class="input-field flex">' + '<input type="number" class="modal-text-input">' + '<a href="#" class="button get-auth-DynamicCode">' + lang.templateByUuid("UID:P_UDHMC_17EC591E058805D1", "获取验证码") /* "获取验证码" */ + '</a>' + '</div>' + '</div>',
    buttons: [{
      text: lang.templateByUuid("UID:P_UDHMC_17EC591E058805A4", "取消") /* "取消" */,
      onClick: function onClick() {
        cb.rest.appContext.clear();
      }
    }, {
      text: lang.templateByUuid("UID:P_UDHMC_17EC591E058805A9", "确定") /* "确定" */,

      // close: false,
      onClick: function onClick() {
        var dynamicCode = $$(modal).find('.modal-text-input').val();
        if (!dynamicCode) {
          myApp.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E058805D8", "请输入验证码") /* "请输入验证码" */, 'tips').show(true);
          return;
        }
        cb.rest.appContext.clear(function () {
          cb.rest.execLogin({
            userId: params.userId,
            key: params.mobile,
            validCode: dynamicCode,
            clientType: 2,
            countryCode: params.countryCode,
            deviceId: cb.rest.appContext.deviceCode || cb["native"].getUDID()
          });
        });
      }
    }]
  });
  //发送验证码
  $$(modal).find('.get-auth-DynamicCode').on('click', function () {
    var $this = $$(this);
    cb.rest.postData({
      url: cb.router.HTTP_AGENT_LOGINSENDMSGCODE.format(params.mobile, 'login', params.countryCode),
      success: function success(data) {
        $this.attr('disabled', 'disabled');
        myApp.toast(lang.templateByUuid("UID:P_UDHMC_17EC591E058805DE", "发送成功!") /* "发送成功!" */, 'success').show(true);
        var index = 75;
        self.setInter = window.setInterval(function () {
          if (index <= 0) {
            $this.removeAttr('disabled').text(lang.templateByUuid("UID:P_UDHMC_17EC591E058805D1", "获取验证码") /* "获取验证码" */);
            clearInterval(self.setInter);
          } else {
            $this.text(index + lang.templateByUuid("UID:P_UDHMC_17EC591E058805E1", "秒后获取") /* "秒后获取" */);
            index--;
          }
        }, 1000);
      },
      error: function error(data) {
        myApp.toast(data.message, 'error').show(true);
      }
    });
  });
};
cb.rest.getPrivacyPolicyLastversion = function () {
  cb.rest.getJSON({
    url: cb.router.HTTP_COMMON_GETPRIVACYPOLICYLASTVERSION,
    success: function success(data) {
      var _data$data = data.data,
        id = _data$data.id,
        version = _data$data.version,
        needPopWindow = _data$data.needPopWindow;
      if (id) {
        cb["native"].localStorage.set("privacyId", id);
      }
      if (needPopWindow) {
        var privacyVersion = cb["native"].localStorage.get("privacyVersion");
        if (privacyVersion !== version) {
          document.getElementById('privacyPolicyUpdateContent').innerText = window.__config__.privacyPolicyUpdateContent && cb.utils.getDecode(window.__config__.privacyPolicyUpdateContent) || lang.templateByUuid("UID:P_UDHMC_17EC591E0588057D", "为了加强对您个人信息的保护，根据最新法律法规要求，我们更新了隐私政策，我们将严格按照政策内容使用保护您的个人信息，为您提供更好的服务，感谢您的信任。") /* "为了加强对您个人信息的保护，根据最新法律法规要求，我们更新了隐私政策，我们将严格按照政策内容使用保护您的个人信息，为您提供更好的服务，感谢您的信任。" */;
          document.getElementById('ios-wrap').style.display = "block";
        }
      }
      cb.temp.privacy = {
        id: id,
        version: version
      };
    },
    error: function error(e) {
      myApp.toast(e.message, 'tips').show(true);
    }
  });
};
cb.rest.privacyPolicyAgree = function (param) {
  cb.rest.postData({
    url: cb.router.HTTP_COMMON_PRIVACYPOLICYAGREE,
    params: param,
    success: function success() {},
    error: function error(e) {
      myApp.toast(e.message, 'tips').show(true);
    }
  });
};
if (cb["native"].isEsnApp()) {
  var esStr = navigator.userAgent;
  var esArr = esStr.split(' ');
  var esobj = {};
  esArr.forEach(function (v) {
    var arr = [];
    if (v.indexOf('=') > -1) {
      arr = v.split('=');
      esobj[arr[0]] = arr[1];
    }
  });
  //友空间下
  if (esobj.youZoneLanguage == 'zh') {
    cb.rest.appContext.lang = 'zh-cn';
  } else if (esobj.youZoneLanguage == 'tw') {
    cb.rest.appContext.lang = 'zh-tw';
  } else if (esobj.youZoneLanguage == 'en') {
    cb.rest.appContext.lang = 'en-us';
  } else if (esobj.youZoneLanguage == 'id') {
    cb.rest.appContext.lang = 'id-id';
  }
  //小程序中从url中取yht_token、lang
  if (cb.utils.getUrlParam("platform") == 'wx') {
    var yht_access_tokenForWxMiniProgram = cb.utils.getUrlParam("yx_tk");
    var langForWxMiniProgram = cb.utils.getUrlParam("lang");
    if (langForWxMiniProgram == 'zh-CN') {
      cb.rest.appContext.lang = 'zh-cn';
    } else if (langForWxMiniProgram == 'zh-TW') {
      cb.rest.appContext.lang = 'zh-tw';
    } else if (langForWxMiniProgram == 'zh-en') {
      cb.rest.appContext.lang = 'en-us';
    } else if (langForWxMiniProgram == 'zh-id') {
      cb.rest.appContext.lang = 'id-id';
    }
  }
  cb.rest.appContext.youZoneToken = esobj.yht_access_token;
  if (yht_access_tokenForWxMiniProgram) {
    cb.rest.appContext.youZoneToken = yht_access_tokenForWxMiniProgram;
    esobj.yht_access_token = yht_access_tokenForWxMiniProgram;
  }
  if (cb.rest.appContext.lang != cb["native"].localStorage.get('langCode') || cb.rest.appContext.lang != cb.utils.CookieParser.getCookie('langCode')) {
    debugger;
    cb["native"].localStorage.set('langCode', cb.rest.appContext.lang);
    cb.utils.CookieParser.setCookie('langCode', cb.rest.appContext.lang);
    setTimeout(function () {
      window.location.reload();
    }, 100);
  }
}
setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
  var s1, s2, space;
  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        if (!cb.rest.appContext.token) {
          _context6.next = 4;
          break;
        }
        _context6.next = 3;
        return cb.rest.loadFunctionOptions();
      case 3:
        // cb.rest.loadBizsFunctionOptions();
        if (cb.rest.runtime.env == 'u8c' && cb["native"].localStorage.get('yhtRefreshTime')) {
          s1 = new Date();
          s2 = new Date(cb["native"].localStorage.get('yhtRefreshTime'));
          space = (s1 - s2) / 1000 / 60 / 60;
          if (space && space >= 0.5) {
            cb.rest.postData({
              url: cb.router.HTTP_COMMON_TOKENALIVE,
              params: {},
              success: function success(data) {
                if (data.code == 200) {
                  if (data.a10) {
                    cb.utils.CookieParser.setCookie('a10', data.a10);
                  }
                  cb["native"].localStorage.set("yhtRefreshTime", new Date());
                  console.log('token alive success');
                }
              },
              error: function error(data) {
                console.log(data.message);
              }
            });
          }
        }
      case 4:
      case "end":
        return _context6.stop();
    }
  }, _callee6);
})), 1000 * 60 * 10);
window.UOrderApp = {
  ns: function ns() {
    var a = arguments,
      o = null,
      i,
      j,
      d;
    for (i = 0; i < a.length; i = i + 1) {
      d = ("" + a[i]).split(".");
      o = UOrderApp;
      for (j = d[0] == "UOrderApp" ? 1 : 0; j < d.length; j = j + 1) {
        o[d[j]] = o[d[j]] || {};
        o = o[d[j]];
      }
    }
    return o;
  }
};
var getNetworkOnLineChange = function getNetworkOnLineChange() {
  // 对offline断网变更监听
  window.addEventListener("offline", function () {
    myApp.popup('.popup.popup-network');
  });
  window.addEventListener("online", function () {
    //const connection = navigator.connection || navigator.webkitConnection || navigator.mozConnection;
    myApp.closeModal('.popup.popup-network');
  });
};
if (cb["native"].isApiCloudApp() || cb["native"].isWxMiniProgram()) {
  getNetworkOnLineChange();
}
var isJSON = function isJSON(str) {
  if (typeof str === 'string') {
    try {
      var obj = JSON.parse(str);
      return !!(_typeof(obj) === 'object' && obj);
    } catch (e) {
      return false;
    }
  }
};
window.addEventListener('message', function (e) {
  var data = e.data;
  if (isJSON(e.data)) {
    data = JSON.parse(data);
  }
  cb.rest.jingpaiToOrder(data);
}, false);

//友空间内监听竞拍大厅回来
if (mtl && cb["native"].isEsnApp()) {
  mtl.registerLifeCycle({
    onShow: function onShow(res) {
      mtl.getStorage({
        domain: "yonbip-hy-smk-ausa",
        key: "transformorderMsg",
        success: function success(res) {
          console.log('竞拍大厅传参');
          console.log(res);
          var data = typeof res.data == 'string' ? JSON.parse(res.data) : res.data;
          cb.rest.jingpaiToOrder(data);
          mtl.removeStorage({
            domain: "yonbip-hy-smk-ausa",
            key: "transformorderMsg"
          });
        },
        fail: function fail() {}
      });
      console.log('mtl.registerLifeCycle onShow');
    },
    onHide: function onHide(res) {},
    success: function success(res) {},
    fail: function fail(res) {}
  });
}
cb.rest.jingpaiToOrder = function (data) {
  if (data.billType == 1) {
    if (data.redirectTo == 'Orders') {
      myApp.mainView.router.loadPage({
        url: "pages/ordersList.html?source=jingpai&orderSrcBillType=1&srcBillNO=".concat(data.billNo)
      });
      myApp.closeModal('.popup.popup-frame');
    } else if (data.redirectTo == 'aorder') {
      var salesOrgId = data.salesOrgId,
        iQuantity = data.iQuantity,
        iProductId = data.iProductId,
        iSKUId = data.iSKUId,
        billType = data.billType,
        billNo = data.billNo,
        billId = data.billId,
        unitPrice = data.unitPrice,
        sourceautoid = data.sourceautoid,
        firstlineno = data.firstlineno,
        uplineno = data.uplineno,
        inquiry = data.inquiry;
      var cur = cb.rest.appContext.context.relations.find(function (v) {
        return v.orgId == data.salesOrgId;
      });
      var postData = {
        srcbillType: billType,
        srcBillNO: billNo,
        srcBillId: billId,
        bizId: cur.bizId,
        salesOrgId: salesOrgId,
        oOrderDetails: [{
          sourceid: billId,
          sourceautoid: sourceautoid,
          firstsource: 'yonbip-hy-smk-ausa.ausa_auction_bill_card',
          source: 'yonbip-hy-smk-ausa.ausa_auction_bill_card',
          bizId: cur.bizId,
          salesOrgId: salesOrgId,
          iQuantity: iQuantity,
          iProductId: iProductId,
          iSKUId: iSKUId,
          firstsourceid: billId,
          firstupcode: billNo,
          // 值为 来源竞拍单单据号
          firstlineno: firstlineno,
          // 值为 来源竞拍单单据行号
          upcode: billNo,
          // 值为 来源竞拍单单据号
          uplineno: uplineno,
          // 值为 来源竞拍单单据行号
          fSalePrice: unitPrice || '',
          inquiry: Number(inquiry || '') //是否取价
        }]
      };

      cb.rest.postData({
        url: cb.router.HTTP_ORDER_GenerateOrderByBidding,
        params: postData,
        success: function success(res) {
          if (res.code == 200) {
            myApp.mainView.router.loadPage({
              url: 'pages/editOrderDetail.html?source=jingpai',
              query: data
            });
            myApp.closeModal('.popup.popup-frame');
          }
        }
      });
    }
  }
};
//# sourceMappingURL=cube.js.map
