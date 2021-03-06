!function e(t, n, r) {
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
                return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
    return s;
}({
    1: [ function(require, module, exports) {}, {} ],
    2: [ function(require, module, exports) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function create(opts) {
            var ripple = (0, _rijs16.default)();
            return (0, _rijs4.default)(ripple), (0, _rijs18.default)(ripple), (0, _rijs20.default)(ripple), 
            (0, _rijs22.default)(ripple), (0, _rijs10.default)(ripple), (0, _rijs2.default)(ripple), 
            (0, _rijs8.default)(ripple), (0, _rijs14.default)(ripple), (0, _rijs12.default)(ripple), 
            (0, _rijs6.default)(ripple), ripple;
        }
        require("utilise"), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = create;
        var _rijs = require("rijs.components"), _rijs2 = _interopRequireDefault(_rijs), _rijs3 = require("rijs.singleton"), _rijs4 = _interopRequireDefault(_rijs3), _rijs5 = require("rijs.versioned"), _rijs6 = _interopRequireDefault(_rijs5), _rijs7 = require("rijs.features"), _rijs8 = _interopRequireDefault(_rijs7), _rijs9 = require("rijs.helpers"), _rijs10 = _interopRequireDefault(_rijs9), _rijs11 = require("rijs.precss"), _rijs12 = _interopRequireDefault(_rijs11), _rijs13 = require("rijs.needs"), _rijs14 = _interopRequireDefault(_rijs13), _rijs15 = require("rijs.core"), _rijs16 = _interopRequireDefault(_rijs15), _rijs17 = require("rijs.data"), _rijs18 = _interopRequireDefault(_rijs17), _rijs19 = require("rijs.css"), _rijs20 = _interopRequireDefault(_rijs19), _rijs21 = require("rijs.fn"), _rijs22 = _interopRequireDefault(_rijs21);
        !window.ripple && create();
    }, {
        "rijs.components": 4,
        "rijs.core": 7,
        "rijs.css": 9,
        "rijs.data": 10,
        "rijs.features": 11,
        "rijs.fn": 12,
        "rijs.helpers": 13,
        "rijs.needs": 14,
        "rijs.precss": 15,
        "rijs.singleton": 16,
        "rijs.versioned": 17,
        utilise: 53
    } ],
    3: [ function(require, module, exports) {
        module.exports = function(styles, prefix) {
            return styles.replace(/^(?!.*:host)([^@%\n]*){/gim, function($1) {
                return prefix + " " + $1;
            }).replace(/^(?!.*:host)(.*?),\s*$/gim, function($1) {
                return prefix + " " + $1;
            }).replace(/:host\((.*?)\)/gi, function($1, $2) {
                return prefix + $2;
            }).replace(/:host /gi, prefix + " ").replace(/^.*:host-context\((.*)\)/gim, function($1, $2) {
                return $2 + " " + prefix;
            });
        };
    }, {} ],
    4: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function components(ripple) {
            return log("creating"), (0, _values2.default)(ripple.types).map(function(type) {
                return type.parse = (0, _proxy2.default)(type.parse, clean(ripple));
            }), (0, _key2.default)("types.application/javascript.render", function(d) {
                return (0, _fn2.default)(ripple);
            })(ripple), (0, _key2.default)("types.application/data.render", function(d) {
                return (0, _data2.default)(ripple);
            })(ripple), ripple.draw = Node.prototype.draw = draw(ripple), ripple.render = render(ripple), 
            ripple.on("change.draw", ripple.draw), (0, _time2.default)(0, ripple.draw), ripple;
        }
        function draw(ripple) {
            return function(thing) {
                return this && this.nodeName ? invoke(ripple)(this) : this && this.node ? invoke(ripple)(this.node()) : thing ? thing instanceof mutation ? invoke(ripple)(thing.target) : thing[0] instanceof mutation ? invoke(ripple)(thing[0].target) : thing.nodeName ? invoke(ripple)(thing) : thing.node ? invoke(ripple)(thing.node()) : thing.name ? resource(ripple)(thing.name) : _is2.default.str(thing) ? resource(ripple)(thing) : err("could not update", thing) : everything(ripple);
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = components;
        var _overwrite = require("utilise/overwrite"), _overwrite2 = _interopRequireDefault(_overwrite), _includes = require("utilise/includes"), _includes2 = _interopRequireDefault(_includes), _header = require("utilise/header"), _header2 = _interopRequireDefault(_header), _values = require("utilise/values"), _values2 = _interopRequireDefault(_values), _proxy = require("utilise/proxy"), _proxy2 = _interopRequireDefault(_proxy), _attr = require("utilise/attr"), _attr2 = _interopRequireDefault(_attr), _noop = require("utilise/noop"), _noop2 = _interopRequireDefault(_noop), _time = require("utilise/time"), _time2 = _interopRequireDefault(_time), _key = require("utilise/key"), _key2 = _interopRequireDefault(_key), _all = require("utilise/all"), _all2 = _interopRequireDefault(_all), _is = require("utilise/is"), _is2 = _interopRequireDefault(_is), _lo = require("utilise/lo"), _lo2 = _interopRequireDefault(_lo), _data = require("./types/data"), _data2 = _interopRequireDefault(_data), _fn = require("./types/fn"), _fn2 = _interopRequireDefault(_fn), everything = function(ripple) {
            var selector = (0, _values2.default)(ripple.resources).filter((0, _header2.default)("content-type", "application/javascript")).map((0, 
            _key2.default)("name")).join(",");
            return selector ? (0, _all2.default)(selector).map(invoke(ripple)) : [];
        }, resource = function(ripple) {
            return function(name) {
                var res = ripple.resources[name], type = (0, _header2.default)("content-type")(res);
                return (ripple.types[type].render || _noop2.default)(res);
            };
        }, batch = function(ripple) {
            return function(el) {
                return el.pending ? el.pending.push(ripple.change) : (el.pending = [ ripple.change ], 
                requestAnimationFrame(function(d) {
                    el.change = el.pending, delete el.pending, ripple.render(el);
                }));
            };
        }, invoke = function invoke(ripple) {
            return function(el) {
                if ((0, _includes2.default)("-")(el.nodeName)) {
                    if ("#document-fragment" == el.nodeName) return invoke(ripple)(el.host);
                    if ("#text" == el.nodeName) return invoke(ripple)(el.parentNode);
                    if (el.matches(isAttached) && null == (0, _attr2.default)(el, "inert")) return batch(ripple)(el), 
                    el;
                }
            };
        }, render = function(ripple) {
            return function(el) {
                var name = (0, _lo2.default)(el.tagName), deps = (0, _attr2.default)(el, "data"), fn = body(ripple)(name), data = bodies(ripple)(deps), root = el.shadowRoot || el;
                if (!fn) return el;
                if (deps && !data) return el;
                try {
                    fn.call(root, root, defaults(el, data));
                } catch (e) {
                    err(e, e.stack);
                }
                return el;
            };
        }, clean = function(ripple) {
            return function(res) {
                return delete res.headers.pending, res;
            };
        }, defaults = function(el, data) {
            return el.state = el.state || {}, (0, _overwrite2.default)(el.state)(data), (0, 
            _overwrite2.default)(el.state)(el.__data__), el.__data__ = el.state, el.state;
        }, bodies = function(ripple) {
            return function(deps) {
                var o = {}, names = deps ? deps.split(" ") : [];
                return names.map(function(d) {
                    return o[d] = body(ripple)(d);
                }), names.length ? (0, _values2.default)(o).some(_is2.default.falsy) ? void 0 : o : void 0;
            };
        }, body = function(ripple) {
            return function(name) {
                return ripple.resources[name] && ripple.resources[name].body;
            };
        }, log = require("utilise/log")("[ri/components]"), err = require("utilise/err")("[ri/components]"), mutation = window.MutationRecord || _noop2.default, customs = !!document.registerElement, isAttached = customs ? "html *, :host-context(html) *" : "html *";
        Element.prototype.matches = Element.prototype.matches || Element.prototype.msMatchesSelector;
    }, {
        "./types/data": 5,
        "./types/fn": 6,
        "utilise/all": 18,
        "utilise/attr": 21,
        "utilise/err": 36,
        "utilise/header": 49,
        "utilise/includes": 52,
        "utilise/is": 54,
        "utilise/key": 56,
        "utilise/lo": 59,
        "utilise/log": 60,
        "utilise/noop": 62,
        "utilise/overwrite": 66,
        "utilise/proxy": 74,
        "utilise/time": 88,
        "utilise/values": 92
    } ],
    5: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function data(ripple) {
            return function(res) {
                return (0, _all2.default)('[data~="' + res.name + '"]:not([inert])').map(ripple.draw);
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = data;
        var _all = require("utilise/all"), _all2 = _interopRequireDefault(_all);
    }, {
        "utilise/all": 18
    } ],
    6: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function fn(ripple) {
            return function(res) {
                if (!customs || !customEl(res) || registered(res)) return (0, _all2.default)(res.name + ':not([inert])\n                 ,[is="' + res.name + '"]:not([inert])').map(ripple.draw);
                var proto = Object.create(HTMLElement.prototype), opts = {
                    prototype: proto
                };
                proto.attachedCallback = ripple.draw, document.registerElement(res.name, opts);
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = fn;
        var _includes = require("utilise/includes"), _includes2 = _interopRequireDefault(_includes), _all = require("utilise/all"), _all2 = _interopRequireDefault(_all), registered = function(res) {
            return document.createElement(res.name).attachedCallback;
        }, customs = !!document.registerElement, customEl = function(d) {
            return (0, _includes2.default)("-")(d.name);
        };
    }, {
        "utilise/all": 18,
        "utilise/includes": 52
    } ],
    7: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function core() {
            function ripple(name, body, headers) {
                return name ? _is2.default.arr(name) ? name.map(ripple) : _is2.default.obj(name) && !name.name ? ripple((0, 
                _values2.default)(name)) : _is2.default.fn(name) && name.resources ? ripple((0, 
                _values2.default)(name.resources)) : _is2.default.str(name) && !body && resources[name] ? resources[name].body : !_is2.default.str(name) || body || resources[name] ? _is2.default.str(name) && body ? register(ripple)({
                    name: name,
                    body: body,
                    headers: headers
                }) : _is2.default.obj(name) && !_is2.default.arr(name) ? register(ripple)(name) : (err("could not find or create resource", name), 
                !1) : register(ripple)({
                    name: name
                }) : ripple;
            }
            log("creating");
            var resources = {};
            return ripple.resources = resources, ripple.resource = chainable(ripple), ripple.register = ripple, 
            ripple.types = types(), (0, _emitterify2.default)(ripple);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = core;
        var _emitterify = require("utilise/emitterify"), _emitterify2 = _interopRequireDefault(_emitterify), _colorfill = require("utilise/colorfill"), _identity = (_interopRequireDefault(_colorfill), 
        require("utilise/identity")), _identity2 = _interopRequireDefault(_identity), _header = require("utilise/header"), _header2 = _interopRequireDefault(_header), _values = require("utilise/values"), _values2 = _interopRequireDefault(_values), _key = require("utilise/key"), _key2 = _interopRequireDefault(_key), _is = require("utilise/is"), _is2 = _interopRequireDefault(_is), _to = require("utilise/to"), _to2 = _interopRequireDefault(_to), _za = require("utilise/za"), _za2 = _interopRequireDefault(_za), _text = require("./types/text"), _text2 = _interopRequireDefault(_text), register = function(ripple) {
            return function(_ref) {
                var name = _ref.name, body = _ref.body, _ref$headers = _ref.headers, headers = void 0 === _ref$headers ? {} : _ref$headers;
                log("registering", name);
                var res = normalise(ripple)({
                    name: name,
                    body: body,
                    headers: headers
                });
                return res ? (ripple.resources[name] = res, ripple.emit("change", [ name, {
                    type: "update",
                    value: res.body,
                    time: now(res)
                } ]), ripple.resources[name].body) : (err("failed to register", name), !1);
            };
        }, normalise = function(ripple) {
            return function(res) {
                return (0, _header2.default)("content-type")(res) || (0, _values2.default)(ripple.types).sort((0, 
                _za2.default)("priority")).some(contentType(res)), (0, _header2.default)("content-type")(res) ? parse(ripple)(res) : (err("could not understand resource", res), 
                !1);
            };
        }, parse = function(ripple) {
            return function(res) {
                var type = (0, _header2.default)("content-type")(res);
                return ripple.types[type] ? (ripple.types[type].parse || _identity2.default)(res) : (err("could not understand type", type), 
                !1);
            };
        }, contentType = function(res) {
            return function(type) {
                return type.check(res) && (res.headers["content-type"] = type.header);
            };
        }, types = function() {
            return [ _text2.default ].reduce(_to2.default.obj("header"), 1);
        }, chainable = function(fn) {
            return function() {
                return fn.apply(this, arguments), fn;
            };
        }, err = require("utilise/err")("[ri/core]"), log = require("utilise/log")("[ri/core]"), now = function(d, t) {
            return t = (0, _key2.default)("body.log.length")(d), _is2.default.num(t) ? t - 1 : t;
        };
    }, {
        "./types/text": 8,
        "utilise/colorfill": 26,
        "utilise/emitterify": 35,
        "utilise/err": 36,
        "utilise/header": 49,
        "utilise/identity": 50,
        "utilise/is": 54,
        "utilise/key": 56,
        "utilise/log": 60,
        "utilise/to": 89,
        "utilise/values": 92,
        "utilise/za": 95
    } ],
    8: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _includes = require("utilise/includes"), _includes2 = _interopRequireDefault(_includes), _is = require("utilise/is"), _is2 = _interopRequireDefault(_is);
        exports.default = {
            header: "text/plain",
            check: function(res) {
                return !(0, _includes2.default)(".html")(res.name) && !(0, _includes2.default)(".css")(res.name) && _is2.default.str(res.body);
            }
        };
    }, {
        "utilise/includes": 52,
        "utilise/is": 54
    } ],
    9: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function css(ripple) {
            return log("creating"), ripple.types["text/css"] = {
                header: "text/css",
                check: function(res) {
                    return (0, _includes2.default)(".css")(res.name);
                }
            }, ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = css;
        var _includes = require("utilise/includes"), _includes2 = _interopRequireDefault(_includes), log = require("utilise/log")("[ri/types/css]");
    }, {
        "utilise/includes": 52,
        "utilise/log": 60
    } ],
    10: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function data(ripple) {
            return log("creating"), ripple.on("change.data", trickle(ripple)), ripple.types["application/data"] = {
                header: "application/data",
                check: function(res) {
                    return !(!_is2.default.obj(res.body) && res.body);
                },
                parse: function(res) {
                    var existing = ripple.resources[res.name] || {};
                    return (0, _extend2.default)(res.headers)(existing.headers), res.body = (0, _set2.default)()(res.body || [], existing.body && existing.body.log, _is2.default.num(res.headers.log) ? res.headers.log : -1), 
                    (0, _overwrite2.default)(res.body.on)(listeners(existing)), res.body.on("change.bubble", function(change) {
                        ripple.emit("change", ripple.change = [ res.name, change ], (0, _not2.default)(_is2.default.in([ "data" ]))), 
                        delete ripple.change;
                    }), res;
                }
            }, ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = data;
        var _overwrite = require("utilise/overwrite"), _overwrite2 = _interopRequireDefault(_overwrite), _header = require("utilise/header"), _header2 = _interopRequireDefault(_header), _extend = require("utilise/extend"), _extend2 = _interopRequireDefault(_extend), _not = require("utilise/not"), _not2 = _interopRequireDefault(_not), _key = require("utilise/key"), _key2 = _interopRequireDefault(_key), _set = require("utilise/set"), _set2 = _interopRequireDefault(_set), _is = require("utilise/is"), _is2 = _interopRequireDefault(_is), trickle = function(ripple) {
            return function(name, change) {
                return (0, _header2.default)("content-type", "application/data")(ripple.resources[name]) && ripple.resources[name].body.emit("change", [ change || null ], (0, 
                _not2.default)(_is2.default.in([ "bubble" ])));
            };
        }, log = require("utilise/log")("[ri/types/data]"), listeners = (0, _key2.default)("body.on");
    }, {
        "utilise/extend": 38,
        "utilise/header": 49,
        "utilise/is": 54,
        "utilise/key": 56,
        "utilise/log": 60,
        "utilise/not": 63,
        "utilise/overwrite": 66,
        "utilise/set": 80
    } ],
    11: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function features(ripple) {
            return log("creating"), ripple.render = render(ripple)(ripple.render), ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = features;
        var _includes = require("utilise/includes"), _includes2 = _interopRequireDefault(_includes), _header = require("utilise/header"), _header2 = _interopRequireDefault(_header), _append = require("utilise/append"), _append2 = _interopRequireDefault(_append), _attr = require("utilise/attr"), _attr2 = _interopRequireDefault(_attr), _from = require("utilise/from"), _from2 = _interopRequireDefault(_from), _not = require("utilise/not"), _not2 = _interopRequireDefault(_not), _str = require("utilise/str"), _str2 = _interopRequireDefault(_str), _key = require("utilise/key"), _key2 = _interopRequireDefault(_key), _by = require("utilise/by"), _by2 = _interopRequireDefault(_by), _is = require("utilise/is"), _is2 = _interopRequireDefault(_is), render = function(ripple) {
            return function(next) {
                return function(el) {
                    var features = (0, _str2.default)((0, _attr2.default)(el, "is")).split(" ").map((0, 
                    _from2.default)(ripple.resources)).filter((0, _header2.default)("content-type", "application/javascript")), css = (0, 
                    _str2.default)((0, _attr2.default)("css")(el)).split(" ");
                    features.filter((0, _by2.default)("headers.needs", (0, _includes2.default)("[css]"))).map((0, 
                    _key2.default)("name")).map((0, _append2.default)(".css")).filter((0, _not2.default)(_is2.default.in(css))).map(function(d) {
                        return (0, _attr2.default)("css", ((0, _str2.default)((0, _attr2.default)("css")(el)) + " " + d).trim())(el);
                    });
                    var node = next(el);
                    return node && node.state ? (features.map((0, _key2.default)("body")).map(function(d) {
                        return d.call(node.shadowRoot || node, node.shadowRoot || node, node.state);
                    }), node) : void 0;
                };
            };
        }, log = require("utilise/log")("[ri/features]");
    }, {
        "utilise/append": 19,
        "utilise/attr": 21,
        "utilise/by": 23,
        "utilise/from": 45,
        "utilise/header": 49,
        "utilise/includes": 52,
        "utilise/is": 54,
        "utilise/key": 56,
        "utilise/log": 60,
        "utilise/not": 63,
        "utilise/str": 84
    } ],
    12: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function fnc(ripple) {
            return log("creating"), ripple.types["application/javascript"] = {
                header: header,
                check: check,
                parse: parse,
                to: to
            }, ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = fnc;
        var _str = require("utilise/str"), _str2 = _interopRequireDefault(_str), _is = require("utilise/is"), _is2 = _interopRequireDefault(_is), _fn = require("utilise/fn"), _fn2 = _interopRequireDefault(_fn), header = "application/javascript", check = function(res) {
            return _is2.default.fn(res.body);
        }, parse = function(res) {
            return res.body = (0, _fn2.default)(res.body), res;
        }, log = require("utilise/log")("[ri/types/fn]"), to = function(res) {
            return res.value = (0, _str2.default)(res.value), res;
        };
    }, {
        "utilise/fn": 43,
        "utilise/is": 54,
        "utilise/log": 60,
        "utilise/str": 84
    } ],
    13: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function helpers(ripple) {
            log("creating");
            var type = ripple.types["application/data"];
            return type.parse = attach(type.parse), ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = helpers;
        var _identity = require("utilise/identity"), _values = (_interopRequireDefault(_identity), 
        require("utilise/values")), _keys = (_interopRequireDefault(_values), require("utilise/keys")), _keys2 = _interopRequireDefault(_keys), _def = require("utilise/def"), _def2 = _interopRequireDefault(_def), _str = require("utilise/str"), _by = (_interopRequireDefault(_str), 
        require("utilise/by")), _is = (_interopRequireDefault(_by), require("utilise/is")), _fn = (_interopRequireDefault(_is), 
        require("utilise/fn")), _fn2 = _interopRequireDefault(_fn), attach = function(next) {
            return function(res) {
                next && (res = next(res));
                var helpers = res.headers.helpers;
                return (0, _keys2.default)(helpers).map(function(name) {
                    return helpers[name] = (0, _fn2.default)(helpers[name]), name;
                }).map(function(name) {
                    return (0, _def2.default)(res.body, name, helpers[name]);
                }), res;
            };
        }, log = require("utilise/log")("[ri/helpers]");
    }, {
        "utilise/by": 23,
        "utilise/def": 31,
        "utilise/fn": 43,
        "utilise/identity": 50,
        "utilise/is": 54,
        "utilise/keys": 57,
        "utilise/log": 60,
        "utilise/str": 84,
        "utilise/values": 92
    } ],
    14: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function needs(ripple) {
            return log("creating"), ripple.render = render(ripple)(ripple.render), ripple;
        }
        var _slicedToArray = function() {
            function sliceIterator(arr, i) {
                var _arr = [], _n = !0, _d = !1, _e = void 0;
                try {
                    for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                    !i || _arr.length !== i); _n = !0) ;
                } catch (err) {
                    _d = !0, _e = err;
                } finally {
                    try {
                        !_n && _i.return && _i.return();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            return function(arr, i) {
                if (Array.isArray(arr)) return arr;
                if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = needs;
        var _includes = require("utilise/includes"), _includes2 = _interopRequireDefault(_includes), _replace = require("utilise/replace"), _replace2 = _interopRequireDefault(_replace), _split = require("utilise/split"), _split2 = _interopRequireDefault(_split), _attr = require("utilise/attr"), _attr2 = _interopRequireDefault(_attr), _key = require("utilise/key"), _lo = (_interopRequireDefault(_key), 
        require("utilise/lo")), _lo2 = _interopRequireDefault(_lo), render = function(ripple) {
            return function(next) {
                return function(el) {
                    var component = (0, _lo2.default)(el.nodeName);
                    if (component in ripple.resources) {
                        var headers = ripple.resources[component].headers, attrs = headers.attrs = headers.attrs || parse(headers.needs, component);
                        return attrs.map(function(_ref) {
                            var _ref2 = _slicedToArray(_ref, 2), name = _ref2[0], values = _ref2[1];
                            return values.some(function(v, i) {
                                var from = (0, _attr2.default)(el, name) || "";
                                return !(0, _includes2.default)(v)(from) && (0, _attr2.default)(el, name, (from + " " + v).trim());
                            });
                        }).some(Boolean) ? el.draw() : next(el);
                    }
                };
            };
        }, parse = function() {
            var attrs = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0], component = arguments[1];
            return attrs.split("[").slice(1).map((0, _replace2.default)("]", "")).map((0, _split2.default)("=")).map(function(_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2), k = _ref4[0], v = _ref4[1];
                return v ? [ k, v.split(" ") ] : "css" == k ? [ k, [ component + ".css" ] ] : [ k, [] ];
            });
        }, log = require("utilise/log")("[ri/needs]");
        require("utilise/err")("[ri/needs]");
    }, {
        "utilise/attr": 21,
        "utilise/err": 36,
        "utilise/includes": 52,
        "utilise/key": 56,
        "utilise/lo": 59,
        "utilise/log": 60,
        "utilise/replace": 79,
        "utilise/split": 83
    } ],
    15: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function precss(ripple) {
            return log("creating"), ripple.render = render(ripple)(ripple.render), (0, _values2.default)(ripple.types).filter((0, 
            _by2.default)("header", "text/css")).map(function(type) {
                return type.render = (0, _proxy2.default)(type.render, css(ripple));
            }), ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = precss;
        var _identity = require("utilise/identity"), _identity2 = _interopRequireDefault(_identity), _values = require("utilise/values"), _values2 = _interopRequireDefault(_values), _proxy = require("utilise/proxy"), _proxy2 = _interopRequireDefault(_proxy), _attr = require("utilise/attr"), _attr2 = _interopRequireDefault(_attr), _from = require("utilise/from"), _from2 = _interopRequireDefault(_from), _all = require("utilise/all"), _all2 = _interopRequireDefault(_all), _raw = require("utilise/raw"), _raw2 = _interopRequireDefault(_raw), _str = require("utilise/str"), _str2 = _interopRequireDefault(_str), _not = require("utilise/not"), _not2 = _interopRequireDefault(_not), _by = require("utilise/by"), _by2 = _interopRequireDefault(_by), _is = require("utilise/is"), _is2 = _interopRequireDefault(_is), _el = require("utilise/el"), _el2 = _interopRequireDefault(_el), _cssscope = require("cssscope"), _cssscope2 = _interopRequireDefault(_cssscope), render = function(ripple) {
            return function(next) {
                return function(host) {
                    var styles, css = (0, _str2.default)((0, _attr2.default)(host, "css")).split(" ").filter(Boolean), root = host.shadowRoot || host, head = document.head, shadow = head.createShadowRoot && host.shadowRoot;
                    if (!css.length) return next(host);
                    if (!css.some((0, _not2.default)(_is2.default.in(ripple.resources)))) return styles = css.map((0, 
                    _from2.default)(ripple.resources)).map(function(d) {
                        return d.body;
                    }).map(shadow ? _identity2.default : transform(css)), css.map(function(d) {
                        return (0, _raw2.default)('style[resource="' + d + '"]', shadow ? root : head) || (0, 
                        _el2.default)("style[resource=" + d + "]");
                    }).map(function(d, i) {
                        return d.innerHTML = styles[i], d;
                    }).filter((0, _not2.default)((0, _by2.default)("parentNode"))).map(function(d) {
                        return shadow ? root.insertBefore(d, root.firstChild) : head.appendChild(d);
                    }), next(host);
                };
            };
        }, transform = function(names) {
            return function(styles, i) {
                return (0, _cssscope2.default)(styles, '[css~="' + names[i] + '"]');
            };
        }, css = function(ripple) {
            return function(res) {
                return (0, _all2.default)('[css~="' + res.name + '"]:not([inert])').map(ripple.draw);
            };
        }, log = require("utilise/log")("[ri/precss]");
        require("utilise/err")("[ri/precss]");
    }, {
        cssscope: 3,
        "utilise/all": 18,
        "utilise/attr": 21,
        "utilise/by": 23,
        "utilise/el": 34,
        "utilise/err": 36,
        "utilise/from": 45,
        "utilise/identity": 50,
        "utilise/is": 54,
        "utilise/log": 60,
        "utilise/not": 63,
        "utilise/proxy": 74,
        "utilise/raw": 76,
        "utilise/str": 84,
        "utilise/values": 92
    } ],
    16: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function singleton(ripple) {
            return log("creating"), _owner2.default.ripple || (_owner2.default.ripple = ripple), 
            ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = singleton;
        var _owner = require("utilise/owner"), _owner2 = _interopRequireDefault(_owner), log = require("utilise/log")("[ri/singleton]");
    }, {
        "utilise/log": 60,
        "utilise/owner": 67
    } ],
    17: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function version(ripple) {
            log("creating");
            ripple.types["application/data"];
            return ripple.on("change.version", commit(ripple)), ripple.version = checkout(ripple), 
            ripple.version.calc = calc(ripple), ripple.version.log = [], ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = version;
        var _values = require("utilise/values"), _values2 = _interopRequireDefault(_values), _clone = require("utilise/clone"), _clone2 = _interopRequireDefault(_clone), _set = require("utilise/set"), _set2 = _interopRequireDefault(_set), _key = require("utilise/key"), _def = (_interopRequireDefault(_key), 
        require("utilise/def")), _def2 = _interopRequireDefault(_def), _by = require("utilise/by"), _by2 = _interopRequireDefault(_by), _is = require("utilise/is"), _is2 = _interopRequireDefault(_is), commit = function(ripple) {
            return function(name, change) {
                return logged(ripple.resources[name]) && ripple.version.log.push((0, _values2.default)(ripple.resources).filter((0, 
                _by2.default)(logged)).map(index));
            };
        }, index = function(_ref) {
            var name = _ref.name, body = _ref.body;
            return {
                name: name,
                index: body.log.length - 1
            };
        }, checkout = function(ripple) {
            return function(name, index) {
                return 2 == arguments.length ? resource(ripple)({
                    name: name,
                    index: index
                }) : 1 == arguments.length && _is2.default.str(name) ? ripple.resources[name].body.log.length - 1 : 1 == arguments.length && _is2.default.num(name) ? application(ripple)(name) : 0 == arguments.length ? ripple.version.log.length - 1 : err("could not rollback", name, index);
            };
        }, application = function(ripple) {
            return function(index) {
                return ripple.version.log[rel(ripple.version.log, index)].map(resource(ripple));
            };
        }, resource = function(ripple) {
            return function(_ref2) {
                var name = _ref2.name, index = _ref2.index;
                return ripple(name, ripple.version.calc(name, index));
            };
        }, calc = function(ripple) {
            return function(name, index) {
                var log = ripple.resources[name].body.log, end = rel(log, index), i = end;
                if (log[end].cache) return log[end].cache;
                for (;_is2.default.def(log[i].key); ) i--;
                for (var root = (0, _clone2.default)(log[i].value); i !== end; ) (0, _set2.default)(log[++i])(root);
                return (0, _def2.default)(log[end], "cache", root);
            };
        }, rel = function(log, index) {
            return index < 0 ? log.length + index - 1 : index;
        }, logged = function(res) {
            return res.body.log && res.body.log.max > 0;
        }, log = require("utilise/log")("[ri/versioned]"), err = require("utilise/err")("[ri/versioned]");
    }, {
        "utilise/by": 23,
        "utilise/clone": 25,
        "utilise/def": 31,
        "utilise/err": 36,
        "utilise/is": 54,
        "utilise/key": 56,
        "utilise/log": 60,
        "utilise/set": 80,
        "utilise/values": 92
    } ],
    18: [ function(require, module, exports) {
        var to = require("./to");
        module.exports = function(selector, doc) {
            var prefix = !doc && document.head.createShadowRoot ? "html /deep/ " : "";
            return to.arr((doc || document).querySelectorAll(prefix + selector));
        };
    }, {
        "./to": 89
    } ],
    19: [ function(require, module, exports) {
        module.exports = function(v) {
            return function(d) {
                return d + v;
            };
        };
    }, {} ],
    20: [ function(require, module, exports) {
        var to = require("./to"), is = require("./is");
        module.exports = function(indices) {
            return function(fn, ctx) {
                return function() {
                    var i = is.arr(indices) ? indices : [ indices ], a = to.arr(arguments).filter(function(d, x) {
                        return is.in(i)(x);
                    });
                    return fn.apply(ctx || this, a);
                };
            };
        };
    }, {
        "./is": 54,
        "./to": 89
    } ],
    21: [ function(require, module, exports) {
        var is = require("./is");
        module.exports = function attr(name, value) {
            var args = arguments.length;
            return is.str(name) || 2 != args ? is.str(name) || 3 != args ? function(el) {
                var ctx = this || {};
                return el = ctx.nodeName || is.fn(ctx.node) ? ctx : el, el = el.node ? el.node() : el, 
                el = el.host || el, args > 1 && value === !1 ? el.removeAttribute(name) : args > 1 ? (el.setAttribute(name, value), 
                value) : el.attributes.getNamedItem(name) && el.attributes.getNamedItem(name).value;
            } : attr(arguments[1], arguments[2]).call(this, arguments[0]) : attr(arguments[1]).call(this, arguments[0]);
        };
    }, {
        "./is": 54
    } ],
    22: [ function(require, module, exports) {
        var key = require("./key");
        module.exports = function(k) {
            return function(a, b) {
                var ka = key(k)(a) || "", kb = key(k)(b) || "";
                return ka > kb ? 1 : ka < kb ? -1 : 0;
            };
        };
    }, {
        "./key": 56
    } ],
    23: [ function(require, module, exports) {
        var key = require("./key"), is = require("./is");
        module.exports = function(k, v) {
            var exists = 1 == arguments.length;
            return function(o) {
                var d = is.fn(k) ? k(o) : key(k)(o);
                return d && v && d.toLowerCase && v.toLowerCase ? d.toLowerCase() === v.toLowerCase() : exists ? Boolean(d) : is.fn(v) ? v(d) : d == v;
            };
        };
    }, {
        "./is": 54,
        "./key": 56
    } ],
    24: [ function(require, module, exports) {
        module.exports = "undefined" != typeof window;
    }, {} ],
    25: [ function(require, module, exports) {
        var parse = require("./parse"), str = require("./str"), is = require("./is");
        module.exports = function(d) {
            return is.fn(d) || is.str(d) ? d : parse(str(d));
        };
    }, {
        "./is": 54,
        "./parse": 68,
        "./str": 84
    } ],
    26: [ function(require, module, exports) {
        function colorfill() {
            [ "red", "green", "bold", "grey", "strip" ].forEach(function(color) {
                !is.str(String.prototype[color]) && Object.defineProperty(String.prototype, color, {
                    get: function() {
                        return String(this);
                    }
                });
            });
        }
        var is = (require("./client"), require("./has"), require("./is"));
        module.exports = colorfill();
    }, {
        "./client": 24,
        "./has": 47,
        "./is": 54,
        colors: 1
    } ],
    27: [ function(require, module, exports) {
        module.exports = function(from, to) {
            return function(d) {
                return to[d] = from[d], d;
            };
        };
    }, {} ],
    28: [ function(require, module, exports) {
        module.exports = function(node) {
            return node.__data__;
        };
    }, {} ],
    29: [ function(require, module, exports) {
        function matches(ns) {
            return ns = strip(ns).split("/"), function(arr) {
                return 1 == arr.length ? arr[0] == ns[0] : 2 == arr.length && (arr[0] == ns[0] && arr[1] == ns[1]);
            };
        }
        function strip(str) {
            return str.replace(/(\[|\])/g, "");
        }
        var is = require("./is"), to = require("./to"), owner = (require("./key"), require("./owner")), split = require("./split"), identity = (require("./client"), 
        require("./identity")), DEBUG = strip((owner.location.search.match(/debug=(.*?)(&|$)/) || [])[1] || ""), whitelist = DEBUG.split(",").map(split("/"));
        module.exports = function(ns) {
            function out(d) {
                if (!owner.console || !console.log.apply) return d;
                is.arr(arguments[2]) && (arguments[2] = arguments[2].length);
                var args = to.arr(arguments), prefix = "[deb][" + new Date().toISOString() + "]" + ns;
                return args.unshift(prefix.grey ? prefix.grey : prefix), console.log.apply(console, args), 
                d;
            }
            return "*" == DEBUG || whitelist.some(matches(ns)) ? out : identity;
        };
    }, {
        "./client": 24,
        "./identity": 50,
        "./is": 54,
        "./key": 56,
        "./owner": 67,
        "./split": 83,
        "./to": 89
    } ],
    30: [ function(require, module, exports) {
        var is = require("./is");
        module.exports = function(d) {
            function next(fn) {
                return function() {
                    var ctx = this, args = arguments;
                    pending && clearTimeout(pending), pending = setTimeout(function() {
                        fn.apply(ctx, args);
                    }, wait);
                };
            }
            var pending, wait = is.num(d) ? d : 100;
            return is.fn(d) ? next(d) : next;
        };
    }, {
        "./is": 54
    } ],
    31: [ function(require, module, exports) {
        var has = require("./has");
        module.exports = function(o, p, v, w) {
            return o.host && o.host.nodeName && (o = o.host), p.name && (v = p, p = p.name), 
            !has(o, p) && Object.defineProperty(o, p, {
                value: v,
                writable: w
            }), o[p];
        };
    }, {
        "./has": 47
    } ],
    32: [ function(require, module, exports) {
        var keys = require("./keys"), is = require("./is");
        module.exports = function(o, k, v) {
            function set(k, v) {
                is.def(o[k]) || (o[k] = v);
            }
            return o.host && (o = o.host), is.obj(k) ? (keys(k).map(function(i) {
                set(i, k[i]);
            }), o) : (set(k, v), o[k]);
        };
    }, {
        "./is": 54,
        "./keys": 57
    } ],
    33: [ function(require, module, exports) {
        module.exports = function(o) {
            return function(then) {
                o.once("response._" + (o.log.length - 1), then);
            };
        };
    }, {} ],
    34: [ function(require, module, exports) {
        var attr = require("./attr"), prepend = (require("./split"), require("./replace"), 
        require("./prepend"));
        module.exports = function(selector) {
            var attrs = [], css = selector.replace(/\[(.+?)=(.*?)\]/g, function($1, $2, $3) {
                return attrs.push([ $2, $3 ]), "";
            }).split("."), tag = css.shift(), elem = document.createElement(tag);
            return attrs.forEach(function(d) {
                attr(elem, d[0], d[1]);
            }), css.forEach(function(d) {
                elem.classList.add(d);
            }), elem.toString = function() {
                return tag + css.map(prepend(".")).join("");
            }, elem;
        };
    }, {
        "./attr": 21,
        "./prepend": 72,
        "./replace": 79,
        "./split": 83
    } ],
    35: [ function(require, module, exports) {
        var err = require("./err")("[emitterify]"), keys = require("./keys"), def = require("./def"), not = require("./not"), is = require("./is");
        module.exports = function(body, dparam) {
            function emit(type, param, filter) {
                var ns = type.split(".")[1], id = type.split(".")[0], li = body.on[id] || [], tp = (li.length - 1, 
                is.def(param) ? param : is.def(dparam) ? dparam : [ body ]), pm = tp && tp.length && !is.str(tp) ? tp : [ tp ];
                if (ns) return invoke(li, ns, pm), body;
                for (var i = li.length; i >= 0; i--) invoke(li, i, pm);
                return keys(li).filter(not(isFinite)).filter(filter || Boolean).map(function(n) {
                    return invoke(li, n, pm);
                }), body;
            }
            function invoke(o, k, p) {
                if (o[k]) {
                    var fn = o[k];
                    o[k].once && (isFinite(k) ? o.splice(k, 1) : delete o[k]);
                    try {
                        fn.apply(body, p);
                    } catch (e) {
                        err(e, e.stack);
                    }
                }
            }
            function on(type, callback) {
                var ns = type.split(".")[1], id = type.split(".")[0];
                return body.on[id] = body.on[id] || [], callback || ns ? !callback && ns ? body.on[id][ns] : ns ? (body.on[id][ns] = callback, 
                body) : (body.on[id].push(callback), body) : body.on[id];
            }
            function once(type, callback) {
                return callback.once = !0, body.on(type, callback), body;
            }
            return def(body, "emit", emit, 1), def(body, "once", once, 1), def(body, "on", on, 1), 
            body;
        };
    }, {
        "./def": 31,
        "./err": 36,
        "./is": 54,
        "./keys": 57,
        "./not": 63
    } ],
    36: [ function(require, module, exports) {
        var is = require("./is"), to = require("./to"), owner = require("./owner");
        module.exports = function(ns) {
            return function(d) {
                if (!owner.console || !console.error.apply) return d;
                is.arr(arguments[2]) && (arguments[2] = arguments[2].length);
                var args = to.arr(arguments), prefix = "[err][" + new Date().toISOString() + "]" + ns;
                return args.unshift(prefix.red ? prefix.red : prefix), console.error.apply(console, args), 
                d;
            };
        };
    }, {
        "./is": 54,
        "./owner": 67,
        "./to": 89
    } ],
    37: [ function(require, module, exports) {
        module.exports = function(str) {
            return str.replace(/[&<>'"]/g, function(char) {
                return safe[char];
            });
        };
        var safe = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
    }, {} ],
    38: [ function(require, module, exports) {
        var is = require("./is"), not = require("./not"), keys = require("./keys"), copy = require("./copy");
        module.exports = function(to) {
            return function(from) {
                return keys(from).filter(not(is.in(to))).map(copy(from, to)), to;
            };
        };
    }, {
        "./copy": 27,
        "./is": 54,
        "./keys": 57,
        "./not": 63
    } ],
    39: [ function(require, module, exports) {
        module.exports = function() {
            return !1;
        };
    }, {} ],
    40: [ function(require, module, exports) {
        module.exports = function(name) {
            return require("fs").readFileSync(name, {
                encoding: "utf8"
            });
        };
    }, {
        fs: void 0
    } ],
    41: [ function(require, module, exports) {
        module.exports = function(d) {
            return d && d[0];
        };
    }, {} ],
    42: [ function(require, module, exports) {
        var is = require("./is");
        module.exports = function flatten(p, v) {
            return is.arr(v) && (v = v.reduce(flatten, [])), p = p || [], p.concat(v);
        };
    }, {
        "./is": 54
    } ],
    43: [ function(require, module, exports) {
        var is = require("./is");
        module.exports = function(candid) {
            return is.fn(candid) ? candid : new Function("return " + candid)();
        };
    }, {
        "./is": 54
    } ],
    44: [ function(require, module, exports) {
        var includes = require("./includes"), attr = require("./attr"), all = require("./all");
        module.exports = function(root) {
            var name = attr("name"), values = {}, invalid = [];
            return all("[name]", root).map(function(el) {
                var n = name(el);
                values[n] = el.state ? el.state.value : el.files ? el.files : "checkbox" == el.type ? (values[n] || []).concat(el.checked ? el.value : []) : "radio" == el.type ? el.checked ? el.value : values[n] : el.value;
                includes("is-invalid")(el.className) && invalid.push(el);
            }), {
                values: values,
                invalid: invalid
            };
        };
    }, {
        "./all": 18,
        "./attr": 21,
        "./includes": 52
    } ],
    45: [ function(require, module, exports) {
        function from(o) {
            return function(k) {
                return key(k)(o);
            };
        }
        function fromParent(k) {
            return datum(this.parentNode)[k];
        }
        var datum = require("./datum"), key = require("./key");
        module.exports = from, from.parent = fromParent;
    }, {
        "./datum": 28,
        "./key": 56
    } ],
    46: [ function(require, module, exports) {
        function polyfill() {
            console.groupCollapsed = console.groupEnd = function(d) {
                (console.log || noop)("*****", d, "*****");
            };
        }
        var owner = (require("./client"), require("./owner")), noop = require("./noop");
        module.exports = function(prefix, fn) {
            if (!owner.console) return fn();
            console.groupCollapsed || polyfill(), console.groupCollapsed(prefix);
            var ret = fn();
            return console.groupEnd(prefix), ret;
        };
    }, {
        "./client": 24,
        "./noop": 62,
        "./owner": 67
    } ],
    47: [ function(require, module, exports) {
        module.exports = function(o, k) {
            return k in o;
        };
    }, {} ],
    48: [ function(require, module, exports) {
        module.exports = function(str) {
            var hash = 0;
            if (!str) return hash;
            for (var i = 0; i < str.length; i++) {
                var char = str.charCodeAt(i);
                hash = (hash << 5) - hash + char, hash &= hash;
            }
            return hash;
        };
    }, {} ],
    49: [ function(require, module, exports) {
        var key = require("./key");
        module.exports = function header(header, value) {
            var getter = 1 == arguments.length;
            return function(d) {
                return d && d.headers ? getter ? key(header)(d.headers) : key(header)(d.headers) == value : null;
            };
        };
    }, {
        "./key": 56
    } ],
    50: [ function(require, module, exports) {
        module.exports = function(d) {
            return d;
        };
    }, {} ],
    51: [ function(require, module, exports) {
        module.exports = function(condition) {
            return function(handler) {
                return function() {
                    if (condition.apply(this, arguments)) return handler.apply(this, arguments);
                };
            };
        };
    }, {} ],
    52: [ function(require, module, exports) {
        module.exports = function(pattern) {
            return function(d) {
                return d && d.indexOf && ~d.indexOf(pattern);
            };
        };
    }, {} ],
    53: [ function(require, module, exports) {
        require("./owner").all = require("./all"), require("./owner").append = require("./append"), 
        require("./owner").args = require("./args"), require("./owner").attr = require("./attr"), 
        require("./owner").az = require("./az"), require("./owner").by = require("./by"), 
        require("./owner").client = require("./client"), require("./owner").clone = require("./clone"), 
        require("./owner").colorfill = require("./colorfill"), require("./owner").copy = require("./copy"), 
        require("./owner").datum = require("./datum"), require("./owner").debounce = require("./debounce"), 
        require("./owner").deb = require("./deb"), require("./owner").def = require("./def"), 
        require("./owner").defaults = require("./defaults"), require("./owner").done = require("./done"), 
        require("./owner").el = require("./el"), require("./owner").emitterify = require("./emitterify"), 
        require("./owner").err = require("./err"), require("./owner").escape = require("./escape"), 
        require("./owner").extend = require("./extend"), require("./owner").falsy = require("./falsy"), 
        require("./owner").file = require("./file"), require("./owner").first = require("./first"), 
        require("./owner").flatten = require("./flatten"), require("./owner").fn = require("./fn"), 
        require("./owner").form = require("./form"), require("./owner").from = require("./from"), 
        require("./owner").grep = require("./grep"), require("./owner").group = require("./group"), 
        require("./owner").has = require("./has"), require("./owner").hashcode = require("./hashcode"), 
        require("./owner").header = require("./header"), require("./owner").identity = require("./identity"), 
        require("./owner").iff = require("./iff"), require("./owner").includes = require("./includes"), 
        require("./owner").is = require("./is"), require("./owner").join = require("./join"), 
        require("./owner").key = require("./key"), require("./owner").keys = require("./keys"), 
        require("./owner").last = require("./last"), require("./owner").lo = require("./lo"), 
        require("./owner").log = require("./log"), require("./owner").mo = require("./mo"), 
        require("./owner").noop = require("./noop"), require("./owner").not = require("./not"), 
        require("./owner").nullify = require("./nullify"), require("./owner").once = require("./once"), 
        require("./owner").overwrite = require("./overwrite"), require("./owner").owner = require("./owner"), 
        require("./owner").parse = require("./parse"), require("./owner").pause = require("./pause"), 
        require("./owner").patch = require("./patch"), require("./owner").perf = require("./perf"), 
        require("./owner").pop = require("./pop"), require("./owner").prepend = require("./prepend"), 
        require("./owner").promise = require("./promise"), require("./owner").proxy = require("./proxy"), 
        require("./owner").push = require("./push"), require("./owner").raw = require("./raw"), 
        require("./owner").ready = require("./ready"), require("./owner").remove = require("./remove"), 
        require("./owner").replace = require("./replace"), require("./owner").send = require("./send"), 
        require("./owner").set = require("./set"), require("./owner").slice = require("./slice"), 
        require("./owner").sort = require("./sort"), require("./owner").split = require("./split"), 
        require("./owner").str = require("./str"), require("./owner").stripws = require("./stripws"), 
        require("./owner").tdraw = require("./tdraw"), require("./owner").th = require("./th"), 
        require("./owner").time = require("./time"), require("./owner").to = require("./to"), 
        require("./owner").unique = require("./unique"), require("./owner").update = require("./update"), 
        require("./owner").values = require("./values"), require("./owner").via = require("./via"), 
        require("./owner").wait = require("./wait"), require("./owner").wrap = require("./wrap"), 
        require("./owner").za = require("./za");
    }, {
        "./all": 18,
        "./append": 19,
        "./args": 20,
        "./attr": 21,
        "./az": 22,
        "./by": 23,
        "./client": 24,
        "./clone": 25,
        "./colorfill": 26,
        "./copy": 27,
        "./datum": 28,
        "./deb": 29,
        "./debounce": 30,
        "./def": 31,
        "./defaults": 32,
        "./done": 33,
        "./el": 34,
        "./emitterify": 35,
        "./err": 36,
        "./escape": 37,
        "./extend": 38,
        "./falsy": 39,
        "./file": 40,
        "./first": 41,
        "./flatten": 42,
        "./fn": 43,
        "./form": 44,
        "./from": 45,
        "./grep": 1,
        "./group": 46,
        "./has": 47,
        "./hashcode": 48,
        "./header": 49,
        "./identity": 50,
        "./iff": 51,
        "./includes": 52,
        "./is": 54,
        "./join": 55,
        "./key": 56,
        "./keys": 57,
        "./last": 58,
        "./lo": 59,
        "./log": 60,
        "./mo": 61,
        "./noop": 62,
        "./not": 63,
        "./nullify": 64,
        "./once": 65,
        "./overwrite": 66,
        "./owner": 67,
        "./parse": 68,
        "./patch": 69,
        "./pause": 1,
        "./perf": 70,
        "./pop": 71,
        "./prepend": 72,
        "./promise": 73,
        "./proxy": 74,
        "./push": 75,
        "./raw": 76,
        "./ready": 77,
        "./remove": 78,
        "./replace": 79,
        "./send": 1,
        "./set": 80,
        "./slice": 81,
        "./sort": 82,
        "./split": 83,
        "./str": 84,
        "./stripws": 85,
        "./tdraw": 86,
        "./th": 87,
        "./time": 88,
        "./to": 89,
        "./unique": 90,
        "./update": 91,
        "./values": 92,
        "./via": 1,
        "./wait": 93,
        "./wrap": 94,
        "./za": 95
    } ],
    54: [ function(require, module, exports) {
        function is(v) {
            return function(d) {
                return d == v;
            };
        }
        function isFunction(d) {
            return "function" == typeof d;
        }
        function isBoolean(d) {
            return "boolean" == typeof d;
        }
        function isString(d) {
            return "string" == typeof d;
        }
        function isNumber(d) {
            return "number" == typeof d;
        }
        function isObject(d) {
            return "object" == typeof d;
        }
        function isLiteral(d) {
            return "object" == typeof d && !(d instanceof Array);
        }
        function isTruthy(d) {
            return 1 == !!d;
        }
        function isFalsy(d) {
            return 0 == !!d;
        }
        function isArray(d) {
            return d instanceof Array;
        }
        function isNull(d) {
            return null === d;
        }
        function isDef(d) {
            return "undefined" != typeof d;
        }
        function isPromise(d) {
            return d instanceof Promise;
        }
        function isIn(set) {
            return function(d) {
                return !!set && (set.indexOf ? ~set.indexOf(d) : d in set);
            };
        }
        module.exports = is, is.fn = isFunction, is.str = isString, is.num = isNumber, is.obj = isObject, 
        is.lit = isLiteral, is.bol = isBoolean, is.truthy = isTruthy, is.falsy = isFalsy, 
        is.arr = isArray, is.null = isNull, is.def = isDef, is.in = isIn, is.promise = isPromise;
    }, {} ],
    55: [ function(require, module, exports) {
        var key = (require("./clone"), require("./key")), by = require("./by"), is = require("./is");
        module.exports = function(left, right) {
            return 1 == arguments.length && (right = left, left = null), function(d, uid) {
                if (null !== d && void 0 !== d) {
                    var table = right || [], field = null;
                    if (uid && !is.num(uid) || (uid = "id"), is.str(right)) {
                        var array = right.split(".");
                        table = ripple(array.shift()), field = array.join(".");
                    }
                    var id = key(left)(d), val = table.filter(by(uid, id)).map(key(field)).pop() || {};
                    return left ? key(left, val)(d) : val;
                }
            };
        };
    }, {
        "./by": 23,
        "./clone": 25,
        "./is": 54,
        "./key": 56
    } ],
    56: [ function(require, module, exports) {
        var str = require("./str"), is = require("./is");
        module.exports = function key(k, v) {
            var set = arguments.length > 1, keys = is.fn(k) ? [] : str(k).split("."), root = keys.shift();
            return function(o, i) {
                function copy(k) {
                    var val = key(k)(o);
                    void 0 != val && key(k, val)(masked);
                }
                var masked = {};
                return o ? is.num(k) || k ? is.arr(k) ? (k.map(copy), masked) : o[k] || !keys.length ? set ? (o[k] = is.fn(v) ? v(o[k], i) : v, 
                o) : is.fn(k) ? k(o) : o[k] : set ? (key(keys.join("."), v)(o[root] ? o[root] : o[root] = {}), 
                o) : key(keys.join("."))(o[root]) : o : void 0;
            };
        };
    }, {
        "./is": 54,
        "./str": 84
    } ],
    57: [ function(require, module, exports) {
        var is = require("./is");
        module.exports = function(o) {
            return Object.keys(is.obj(o) || is.fn(o) ? o : {});
        };
    }, {
        "./is": 54
    } ],
    58: [ function(require, module, exports) {
        module.exports = function(d) {
            return d && d[d.length - 1];
        };
    }, {} ],
    59: [ function(require, module, exports) {
        module.exports = function(d) {
            return (d || "").toLowerCase();
        };
    }, {} ],
    60: [ function(require, module, exports) {
        var is = require("./is"), to = require("./to"), owner = require("./owner");
        module.exports = function(ns) {
            return function(d) {
                if (!owner.console || !console.log.apply) return d;
                is.arr(arguments[2]) && (arguments[2] = arguments[2].length);
                var args = to.arr(arguments), prefix = "[log][" + new Date().toISOString() + "]" + ns;
                return args.unshift(prefix.grey ? prefix.grey : prefix), console.log.apply(console, args), 
                d;
            };
        };
    }, {
        "./is": 54,
        "./owner": 67,
        "./to": 89
    } ],
    61: [ function(require, module, exports) {
        function mo(d) {
            return owner.moment(d);
        }
        function moFormat(format) {
            return function(d) {
                return mo(d).format(format);
            };
        }
        function moIso(d) {
            return mo(d).format("YYYY-MM-DD");
        }
        var owner = require("./owner");
        module.exports = mo, mo.format = moFormat, mo.iso = moIso;
    }, {
        "./owner": 67
    } ],
    62: [ function(require, module, exports) {
        module.exports = function() {};
    }, {} ],
    63: [ function(require, module, exports) {
        module.exports = function(fn) {
            return function() {
                return !fn.apply(this, arguments);
            };
        };
    }, {} ],
    64: [ function(require, module, exports) {
        var is = require("./is");
        module.exports = function(fn) {
            return is.fn(fn) ? function() {
                return !!fn.apply(this, arguments) || null;
            } : !!fn || null;
        };
    }, {
        "./is": 54
    } ],
    65: [ function(require, module, exports) {
        "use strict";
        function once(nodes, enter, exit) {
            function c(s, d, k, b) {
                var selector, data, tnodes = [], tenter = [], texit = [], j = -1, p = -1, l = -1, t = -1;
                if (1 === arguments.length) {
                    if ("string" != typeof s) return once(s);
                    for (;n[++p]; ) tnodes = tnodes.concat(Array.prototype.slice.call(n[p].querySelectorAll(s), 0));
                    return once(tnodes);
                }
                if (1 === d && 2 == arguments.length) {
                    for (;n[++p]; ) {
                        for (j = n[p].children.length, selector = s.call ? s(n[p].__data__ || 1, 0) : s; n[p].children[--j]; ) if (n[p].children[j].matches(selector)) {
                            (tnodes[++t] = n[p].children[j]).__data__ = n[p].__data__ || 1;
                            break;
                        }
                        j < 0 && n[p].appendChild(tnodes[++t] = tenter[tenter.length] = create(selector, [ n[p].__data__ || 1 ], 0)), 
                        "function" == typeof tnodes[t].draw && tnodes[t].draw();
                    }
                    return once(tnodes, tenter, texit);
                }
                for (;n[++p]; ) if (selector = "function" == typeof s ? s(n[p].__data__) : s, data = "function" == typeof d ? d(n[p].__data__) : d, 
                1 === d && (data = n[p].__data__ || [ 1 ]), "string" == typeof data && (data = [ data ]), 
                data || (data = []), data.constructor !== Array && (data = [ data ]), k) byKey(selector, data, k, b, n[p], tnodes, tenter, texit); else {
                    for (l = -1, j = -1; n[p].children[++j]; ) n[p].children[j].matches(selector) && (++l >= data.length ? (n[p].removeChild(texit[texit.length] = n[p].children[j]), 
                    --j) : ((tnodes[++t] = n[p].children[j]).__data__ = data[l], "function" == typeof n[p].children[j].draw && n[p].children[j].draw()));
                    if ("string" == typeof selector) for (n[p].templates = n[p].templates || {}, n[p].templates[selector] = n[p].templates[selector] || create(selector, [], 0); ++l < data.length; ) (b ? n[p].insertBefore(tnodes[++t] = tenter[tenter.length] = n[p].templates[selector].cloneNode(!1), n[p].querySelector(b)) : n[p].appendChild(tnodes[++t] = tenter[tenter.length] = n[p].templates[selector].cloneNode(!1))).__data__ = data[l], 
                    "function" == typeof tnodes[t].draw && tnodes[t].draw(); else for (;++l < data.length; ) b ? n[p].insertBefore(tnodes[++t] = tenter[tenter.length] = create(selector, data, l), n[p].querySelector(b)) : n[p].appendChild(tnodes[++t] = tenter[tenter.length] = create(selector, data, l)), 
                    "function" == typeof tnodes[t].draw && tnodes[t].draw();
                }
                return once(tnodes, tenter, texit);
            }
            for (var n = c.nodes = Array === nodes.constructor ? nodes : "string" == typeof nodes ? document.querySelectorAll(nodes) : [ nodes ], p = n.length; p-- > 0; ) n[p].evented || event(n[p], p);
            return c.node = function() {
                return n[0];
            }, c.enter = function() {
                return once(enter);
            }, c.exit = function() {
                return once(exit);
            }, c.size = function() {
                return n.length;
            }, c.text = function(value) {
                var fn = "function" == typeof value;
                return 0 === arguments.length ? n[0].textContent : (this.each(function(n, d, i) {
                    var t, r = "" + (fn ? value.call(this, d, i) : value);
                    this.textContent !== r && ((t = this.firstChild) ? "#text" === t.nodeName ? t.nodeValue = r : this.textContent = r : this.appendChild(document.createTextNode(r)));
                }), this);
            }, c.html = function(value) {
                var fn = "function" == typeof value;
                return 0 === arguments.length ? n[0].innerHTML : (this.each(function(n, d, i) {
                    var r = "" + (fn ? value.call(this, d, i) : value);
                    this.innerHTML !== r && (this.innerHTML = r);
                }), this);
            }, c.attr = function(key, value) {
                var fn = "function" == typeof value;
                return 1 === arguments.length ? n[0].getAttribute(key) : (this.each(function(n, d, i) {
                    var r = fn ? value.call(this, d, i) : value;
                    !r && this.hasAttribute(key) ? this.removeAttribute(key) : r && this.getAttribute(key) !== r && this.setAttribute(key, r);
                }), this);
            }, c.classed = function(key, value) {
                var fn = "function" == typeof value;
                return 1 === arguments.length ? n[0].classList.contains(key) : (this.each(function(n, d, i) {
                    var r = fn ? value.call(this, d, i) : value;
                    r && !this.classList.contains(key) ? this.classList.add(key) : !r && this.classList.contains(key) && this.classList.remove(key);
                }), this);
            }, c.property = function(key, value) {
                var fn = "function" == typeof value;
                return 1 === arguments.length ? deep(key)(n[0]) : (this.each(function(n, d, i) {
                    var r = fn ? value.call(this, d, i) : value;
                    void 0 !== r && deep(key)(this) !== r && deep(key, function() {
                        return r;
                    })(this);
                }), this);
            }, c.each = function(fn) {
                for (p = -1; n[++p]; ) fn.call(n[p], n[p], n[p].__data__, p);
                return this;
            }, c.remove = function() {
                return this.each(function() {
                    var el = this.host || this;
                    el.parentNode.removeChild(el);
                }), this;
            }, c.closest = function(tag) {
                return once(n.map(function(d) {
                    return d.closest(tag);
                }).filter(Boolean));
            }, c.draw = proxy("draw", c), c.once = proxy("once", c), c.emit = proxy("emit", c), 
            c.on = proxy("on", c), c;
        }
        function event(node, index) {
            function reemit(event) {
                "object" == typeof window.d3 && (window.d3.event = event), emit(event.type, [ this.__data__, index, this, event ]);
            }
            if (node = node.host && node.host.nodeName ? node.host : node, !node.evented) {
                node.on || emitterify(node);
                var on = node.on, emit = node.emit, old = keys(node.on);
                node.evented = !0, node.on = function(type) {
                    return node.addEventListener(type.split(".").shift(), reemit), on.apply(node, arguments), 
                    node;
                }, node.emit = function(event, detail) {
                    return node.dispatchEvent(event instanceof window.Event ? event : new window.CustomEvent(event, {
                        detail: detail,
                        bubbles: !1,
                        cancelable: !0
                    })), node;
                }, old.map(function(event) {
                    node.on[event] = on[event], node.on(event);
                });
            }
        }
        function proxy(fn, c) {
            return function() {
                var args = arguments;
                return c.each(function() {
                    var node = this.host || this;
                    node[fn] && node[fn].apply(node, args);
                }), c;
            };
        }
        function create(s, d, j) {
            var i = 0, attrs = [], css = [], sel = s.call ? s(d[j], j) : s, tag = rsplit.exec(sel)[1] || "div", node = document.createElement(tag);
            for ((s.call ? s.toString() : s).replace(/\[(.+?)="(.*?)"\]/g, function($1, $2, $3) {
                return attrs[attrs.length] = [ $2, $3 ], "";
            }).replace(/\.([^.]+)/g, function($1, $2) {
                return css[css.length] = $2, "";
            }), i = 0; i < attrs.length; i++) node.setAttribute(attrs[i][0], attrs[i][1]);
            for (i = 0; i < css.length; i++) node.classList.add(css[i]);
            return node.__data__ = d[j] || 1, node;
        }
        function byKey(selector, data, key, b, parent, tnodes, tenter, texit) {
            for (var k, child, next, c = -1, d = data.length, indexNodes = {}; parent.children[++c]; ) {
                if (!parent.children[c].matches(selector)) continue;
                indexNodes[key(parent.children[c].__data__)] = parent.children[c];
            }
            for (next = b ? parent.querySelector(b) : null; d--; ) {
                if (child = indexNodes[k = key(data[d])]) {
                    if (child === !0) continue;
                    child.__data__ = data[d];
                } else tenter.unshift(child = create(selector, data, d));
                indexNodes[k] = !0, d != data.length - 1 && next === child.nextSibling || parent.insertBefore(child, next), 
                tnodes.unshift(next = child), "function" == typeof child.draw && child.draw();
            }
            for (c in indexNodes) indexNodes[c] !== !0 && texit.unshift(parent.removeChild(indexNodes[c]));
        }
        var emitterify = require("./emitterify"), keys = require("./keys"), key = require("./key"), deep = key, rsplit = /([^\.\[]*)/;
        module.exports = once;
    }, {
        "./emitterify": 35,
        "./key": 56,
        "./keys": 57
    } ],
    66: [ function(require, module, exports) {
        var keys = (require("./is"), require("./keys")), copy = require("./copy");
        module.exports = function(to) {
            return function(from) {
                return keys(from).map(copy(from, to)), to;
            };
        };
    }, {
        "./copy": 27,
        "./is": 54,
        "./keys": 57
    } ],
    67: [ function(require, module, exports) {
        (function(global) {
            require("./client");
            module.exports = window;
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
        "./client": 24
    } ],
    68: [ function(require, module, exports) {
        module.exports = function(d) {
            return d && JSON.parse(d);
        };
    }, {} ],
    69: [ function(require, module, exports) {
        var keys = require("./keys"), set = require("./set");
        module.exports = function(key, values) {
            return function(o) {
                return keys(values).map(function(k) {
                    return set({
                        key: key + "." + k,
                        value: values[k],
                        type: "update"
                    })(o);
                }), o;
            };
        };
    }, {
        "./keys": 57,
        "./set": 80
    } ],
    70: [ function(require, module, exports) {
        var log = require("./log")("[perf]");
        require("./client");
        module.exports = function(fn, msg) {
            return function() {
                var start = performance.now(), retval = fn.apply(this, arguments), diff = performance.now() - start;
                return diff = Math.round(100 * diff) / 100, log(msg || fn.name, diff, "ms"), diff, 
                retval;
            };
        };
    }, {
        "./client": 24,
        "./log": 60
    } ],
    71: [ function(require, module, exports) {
        var last = require("./last"), set = require("./set"), is = require("./is");
        module.exports = function(o) {
            return is.arr(o) ? set({
                key: o.length - 1,
                value: last(o),
                type: "remove"
            })(o) : o;
        };
    }, {
        "./is": 54,
        "./last": 58,
        "./set": 80
    } ],
    72: [ function(require, module, exports) {
        module.exports = function(v) {
            return function(d) {
                return v + d;
            };
        };
    }, {} ],
    73: [ function(require, module, exports) {
        function promise() {
            var resolve, reject, p = new Promise(function(res, rej) {
                resolve = res, reject = rej;
            });
            return arguments.length && resolve(arguments[0]), p.resolve = resolve, p.reject = reject, 
            p;
        }
        function promiseArgs(i) {
            return function() {
                return promise(arguments[i]);
            };
        }
        function promiseSync(arg) {
            return function() {
                var a = arguments, o = {
                    then: function(cb) {
                        return cb(a[arg]), o;
                    }
                };
                return o;
            };
        }
        function promiseNoop() {
            return promise();
        }
        function promiseNull() {
            return promise(null);
        }
        promise.sync = promiseSync, promise.null = promiseNull, promise.noop = promiseNoop, 
        promise.args = promiseArgs, module.exports = promise;
    }, {} ],
    74: [ function(require, module, exports) {
        var is = require("./is"), identity = require("./identity");
        module.exports = function(fn, ret, ctx) {
            return function() {
                var result = (fn || identity).apply(ctx || this, arguments);
                return is.fn(ret) ? ret.call(ctx || this, result) : ret || result;
            };
        };
    }, {
        "./identity": 50,
        "./is": 54
    } ],
    75: [ function(require, module, exports) {
        var set = require("./set"), is = require("./is");
        module.exports = function(value) {
            return function(o) {
                return is.arr(o) ? set({
                    key: o.length,
                    value: value,
                    type: "add"
                })(o) : o;
            };
        };
    }, {
        "./is": 54,
        "./set": 80
    } ],
    76: [ function(require, module, exports) {
        module.exports = function(selector, doc) {
            var prefix = !doc && document.head.createShadowRoot ? "html /deep/ " : "";
            return (doc ? doc : document).querySelector(prefix + selector);
        };
    }, {} ],
    77: [ function(require, module, exports) {
        module.exports = function(fn) {
            return document.body ? fn() : document.addEventListener("DOMContentLoaded", fn.bind(this));
        };
    }, {} ],
    78: [ function(require, module, exports) {
        var set = require("./set"), key = require("./key");
        module.exports = function(k) {
            return function(o) {
                return set({
                    key: k,
                    value: key(k)(o),
                    type: "remove"
                })(o);
            };
        };
    }, {
        "./key": 56,
        "./set": 80
    } ],
    79: [ function(require, module, exports) {
        module.exports = function(from, to) {
            return function(d) {
                return d.replace(from, to);
            };
        };
    }, {} ],
    80: [ function(require, module, exports) {
        function apply(body, type, path, value) {
            var next = path.shift();
            if (path.length) {
                if (!(next in body)) {
                    if ("remove" == type) return;
                    body[next] = {};
                }
                apply(body[next], type, path, value);
            } else act[type](body, next, value);
        }
        function add(o, k, v) {
            is.arr(o) ? o.splice(k, 0, v) : o[k] = v;
        }
        function update(o, k, v) {
            o[k] = v;
        }
        function remove(o, k, v) {
            is.arr(o) ? o.splice(k, 1) : delete o[k];
        }
        var act = {
            add: add,
            update: update,
            remove: remove
        }, emitterify = require("./emitterify"), def = require("./def"), is = require("./is"), str = JSON.stringify, parse = JSON.parse;
        module.exports = function(d) {
            return function(o, existing, max) {
                if (!is.obj(o)) return o;
                if (!is.obj(d)) {
                    var log = existing || o.log || [], root = o;
                    if (is.def(max) || (max = log.max || 0), max || (log = []), max < 0 && (log = log.concat(null)), 
                    max > 0) {
                        var s = str(o);
                        root = parse(s), log = log.concat({
                            type: "update",
                            value: parse(s),
                            time: log.length
                        });
                    }
                    return def(log, "max", max), root.log ? root.log = log : def(emitterify(root, null), "log", log, 1), 
                    root;
                }
                return is.def(d.key) && apply(o, d.type, (d.key = "" + d.key).split("."), d.value), 
                o.log && o.log.max && o.log.push((d.time = o.log.length, o.log.max > 0 ? d : null)), 
                o.emit && o.emit("change", d), o;
            };
        };
    }, {
        "./def": 31,
        "./emitterify": 35,
        "./is": 54
    } ],
    81: [ function(require, module, exports) {
        module.exports = function(from, to) {
            return function(d) {
                return d.slice(from, to);
            };
        };
    }, {} ],
    82: [ function(require, module, exports) {
        module.exports = function(fn) {
            return function(arr) {
                return arr.sort(fn);
            };
        };
    }, {} ],
    83: [ function(require, module, exports) {
        module.exports = function(delimiter) {
            return function(d) {
                return d.split(delimiter);
            };
        };
    }, {} ],
    84: [ function(require, module, exports) {
        var is = require("./is");
        module.exports = function(d) {
            return 0 === d ? "0" : d ? is.fn(d) ? "" + d : is.obj(d) ? JSON.stringify(d) : String(d) : "";
        };
    }, {
        "./is": 54
    } ],
    85: [ function(require, module, exports) {
        var is = require("./is");
        module.exports = function(d) {
            return (is.arr(d) ? d[0] : d).replace(/([\s]{2,}|[\n])/gim, "");
        };
    }, {
        "./is": 54
    } ],
    86: [ function(require, module, exports) {
        module.exports = function(host, fn, state) {
            var el = host.node ? host.node() : host;
            return el.state = state || {}, el.draw = function(d) {
                return fn && fn.call(el, el, el.state);
            }, el.draw(), host;
        };
    }, {} ],
    87: [ function(require, module, exports) {
        module.exports = function(fn) {
            return function() {
                return fn(this).apply(this, arguments);
            };
        };
    }, {} ],
    88: [ function(require, module, exports) {
        module.exports = function(ms, fn) {
            return 1 === arguments.length ? setTimeout(ms) : setTimeout(fn, ms);
        };
    }, {} ],
    89: [ function(require, module, exports) {
        function toArray(d) {
            return Array.prototype.slice.call(d, 0);
        }
        function toObject(d) {
            function reduce(p, v, i) {
                return 0 === i && (p = {}), p[v[by]] = v, p;
            }
            var by = "id";
            return 1 == arguments.length ? (by = d, reduce) : reduce.apply(this, arguments);
        }
        module.exports = {
            arr: toArray,
            obj: toObject
        };
    }, {} ],
    90: [ function(require, module, exports) {
        var is = require("./is");
        module.exports = function unique(d, i) {
            return i || (unique.matched = []), !is.in(unique.matched)(d) && unique.matched.push(d);
        };
    }, {
        "./is": 54
    } ],
    91: [ function(require, module, exports) {
        var set = require("./set");
        module.exports = function(key, value) {
            return function(o) {
                return set({
                    key: key,
                    value: value,
                    type: "update"
                })(o);
            };
        };
    }, {
        "./set": 80
    } ],
    92: [ function(require, module, exports) {
        var keys = require("./keys"), from = require("./from");
        module.exports = function(o) {
            return o ? keys(o).map(from(o)) : [];
        };
    }, {
        "./from": 45,
        "./keys": 57
    } ],
    93: [ function(require, module, exports) {
        module.exports = function wait(condition) {
            return function(handler) {
                return function() {
                    var result = condition.apply(this, arguments);
                    result ? handler.apply(this, arguments) : this.once("change", wait(condition)(handler));
                };
            };
        };
    }, {} ],
    94: [ function(require, module, exports) {
        module.exports = function(d) {
            return function() {
                return d;
            };
        };
    }, {} ],
    95: [ function(require, module, exports) {
        var key = require("./key");
        module.exports = function(k) {
            return function(a, b) {
                var ka = key(k)(a) || "", kb = key(k)(b) || "";
                return ka > kb ? -1 : ka < kb ? 1 : 0;
            };
        };
    }, {
        "./key": 56
    } ]
}, {}, [ 2 ]);