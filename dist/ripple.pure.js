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
    1: [ function(require, module, exports) {
        "use strict";
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
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = create;
        var _rijs = require("rijs.components"), _rijs2 = _interopRequireDefault(_rijs), _rijs3 = require("rijs.singleton"), _rijs4 = _interopRequireDefault(_rijs3), _rijs5 = require("rijs.versioned"), _rijs6 = _interopRequireDefault(_rijs5), _rijs7 = require("rijs.features"), _rijs8 = _interopRequireDefault(_rijs7), _rijs9 = require("rijs.helpers"), _rijs10 = _interopRequireDefault(_rijs9), _rijs11 = require("rijs.precss"), _rijs12 = _interopRequireDefault(_rijs11), _rijs13 = require("rijs.needs"), _rijs14 = _interopRequireDefault(_rijs13), _rijs15 = require("rijs.core"), _rijs16 = _interopRequireDefault(_rijs15), _rijs17 = require("rijs.data"), _rijs18 = _interopRequireDefault(_rijs17), _rijs19 = require("rijs.css"), _rijs20 = _interopRequireDefault(_rijs19), _rijs21 = require("rijs.fn"), _rijs22 = _interopRequireDefault(_rijs21);
        !window.ripple && create();
    }, {
        "rijs.components": 3,
        "rijs.core": 6,
        "rijs.css": 8,
        "rijs.data": 9,
        "rijs.features": 10,
        "rijs.fn": 11,
        "rijs.helpers": 12,
        "rijs.needs": 13,
        "rijs.precss": 14,
        "rijs.singleton": 15,
        "rijs.versioned": 16
    } ],
    2: [ function(require, module, exports) {
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
    3: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function components(ripple) {
            return log("creating"), values(ripple.types).map(function(type) {
                return type.parse = proxy(type.parse, clean(ripple));
            }), key("types.application/javascript.render", function(d) {
                return (0, _fn2.default)(ripple);
            })(ripple), key("types.application/data.render", function(d) {
                return (0, _data2.default)(ripple);
            })(ripple), ripple.draw = Node.prototype.draw = draw(ripple), ripple.render = render(ripple), 
            ripple.on("change.draw", ripple.draw), time(0, ripple.draw), ripple;
        }
        function draw(ripple) {
            return function(thing) {
                return this && this.nodeName ? invoke(ripple)(this) : this && this.node ? invoke(ripple)(this.node()) : thing ? thing instanceof mutation ? invoke(ripple)(thing.target) : thing[0] instanceof mutation ? invoke(ripple)(thing[0].target) : thing.nodeName ? invoke(ripple)(thing) : thing.node ? invoke(ripple)(thing.node()) : thing.name ? resource(ripple)(thing.name) : is.str(thing) ? resource(ripple)(thing) : err("could not update", thing) : everything(ripple);
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = components;
        var _data = require("./types/data"), _data2 = _interopRequireDefault(_data), _fn = require("./types/fn"), _fn2 = _interopRequireDefault(_fn), everything = function(ripple) {
            var selector = values(ripple.resources).filter(header("content-type", "application/javascript")).map(key("name")).join(",");
            return selector ? all(selector).map(invoke(ripple)) : [];
        }, resource = function(ripple) {
            return function(name) {
                var res = ripple.resources[name], type = header("content-type")(res);
                return (ripple.types[type].render || noop)(res);
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
                if (includes("-")(el.nodeName)) {
                    if ("#document-fragment" == el.nodeName) return invoke(ripple)(el.host);
                    if ("#text" == el.nodeName) return invoke(ripple)(el.parentNode);
                    if (el.matches(isAttached) && null == attr(el, "inert")) return batch(ripple)(el), 
                    el;
                }
            };
        }, render = function(ripple) {
            return function(el) {
                var name = lo(el.tagName), deps = attr(el, "data"), fn = body(ripple)(name), data = bodies(ripple)(deps), root = el.shadowRoot || el;
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
            return el.state = el.state || {}, overwrite(el.state)(data), overwrite(el.state)(el.__data__), 
            el.__data__ = el.state, el.state;
        }, bodies = function(ripple) {
            return function(deps) {
                var o = {}, names = deps ? deps.split(" ") : [];
                return names.map(function(d) {
                    return o[d] = body(ripple)(d);
                }), names.length ? values(o).some(is.falsy) ? void 0 : o : void 0;
            };
        }, body = function(ripple) {
            return function(name) {
                return ripple.resources[name] && ripple.resources[name].body;
            };
        }, log = window.log("[ri/components]"), err = window.err("[ri/components]"), mutation = window.MutationRecord || noop, customs = !!document.registerElement, isAttached = customs ? "html *, :host-context(html) *" : "html *";
        Element.prototype.matches = Element.prototype.matches || Element.prototype.msMatchesSelector;
    }, {
        "./types/data": 4,
        "./types/fn": 5
    } ],
    4: [ function(require, module, exports) {
        "use strict";
        function data(ripple) {
            return function(res) {
                return all('[data~="' + res.name + '"]:not([inert])').map(ripple.draw);
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = data;
    }, {} ],
    5: [ function(require, module, exports) {
        "use strict";
        function fn(ripple) {
            return function(res) {
                if (!customs || !customEl(res) || registered(res)) return all(res.name + ':not([inert])\n                 ,[is="' + res.name + '"]:not([inert])').map(ripple.draw);
                var proto = Object.create(HTMLElement.prototype), opts = {
                    prototype: proto
                };
                proto.attachedCallback = ripple.draw, document.registerElement(res.name, opts);
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = fn;
        var registered = function(res) {
            return document.createElement(res.name).attachedCallback;
        }, customs = !!document.registerElement, customEl = function(d) {
            return includes("-")(d.name);
        };
    }, {} ],
    6: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function core() {
            function ripple(name, body, headers) {
                return name ? is.arr(name) ? name.map(ripple) : is.obj(name) && !name.name ? ripple(values(name)) : is.fn(name) && name.resources ? ripple(values(name.resources)) : is.str(name) && !body && resources[name] ? resources[name].body : !is.str(name) || body || resources[name] ? is.str(name) && body ? register(ripple)({
                    name: name,
                    body: body,
                    headers: headers
                }) : is.obj(name) && !is.arr(name) ? register(ripple)(name) : (err("could not find or create resource", name), 
                !1) : register(ripple)({
                    name: name
                }) : ripple;
            }
            log("creating");
            var resources = {};
            return ripple.resources = resources, ripple.resource = chainable(ripple), ripple.register = ripple, 
            ripple.types = types(), emitterify(ripple);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = core;
        var _text = require("./types/text"), _text2 = _interopRequireDefault(_text), register = function(ripple) {
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
                return header("content-type")(res) || values(ripple.types).sort(za("priority")).some(contentType(res)), 
                header("content-type")(res) ? parse(ripple)(res) : (err("could not understand resource", res), 
                !1);
            };
        }, parse = function(ripple) {
            return function(res) {
                var type = header("content-type")(res);
                return ripple.types[type] ? (ripple.types[type].parse || identity)(res) : (err("could not understand type", type), 
                !1);
            };
        }, contentType = function(res) {
            return function(type) {
                return type.check(res) && (res.headers["content-type"] = type.header);
            };
        }, types = function() {
            return [ _text2.default ].reduce(to.obj("header"), 1);
        }, chainable = function(fn) {
            return function() {
                return fn.apply(this, arguments), fn;
            };
        }, err = window.err("[ri/core]"), log = window.log("[ri/core]"), now = function(d, t) {
            return t = key("body.log.length")(d), is.num(t) ? t - 1 : t;
        };
    }, {
        "./types/text": 7
    } ],
    7: [ function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = {
            header: "text/plain",
            check: function(res) {
                return !includes(".html")(res.name) && !includes(".css")(res.name) && is.str(res.body);
            }
        };
    }, {} ],
    8: [ function(require, module, exports) {
        "use strict";
        function css(ripple) {
            return log("creating"), ripple.types["text/css"] = {
                header: "text/css",
                check: function(res) {
                    return includes(".css")(res.name);
                }
            }, ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = css;
        var log = window.log("[ri/types/css]");
    }, {} ],
    9: [ function(require, module, exports) {
        "use strict";
        function data(ripple) {
            return log("creating"), ripple.on("change.data", trickle(ripple)), ripple.types["application/data"] = {
                header: "application/data",
                check: function(res) {
                    return !(!is.obj(res.body) && res.body);
                },
                parse: function(res) {
                    var existing = ripple.resources[res.name] || {};
                    return extend(res.headers)(existing.headers), res.body = set()(res.body || [], existing.body && existing.body.log, is.num(res.headers.log) ? res.headers.log : -1), 
                    overwrite(res.body.on)(listeners(existing)), res.body.on("change.bubble", function(change) {
                        ripple.emit("change", ripple.change = [ res.name, change ], not(is.in([ "data" ]))), 
                        delete ripple.change;
                    }), res;
                }
            }, ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = data;
        var trickle = function(ripple) {
            return function(name, change) {
                return header("content-type", "application/data")(ripple.resources[name]) && ripple.resources[name].body.emit("change", [ change || null ], not(is.in([ "bubble" ])));
            };
        }, log = window.log("[ri/types/data]"), listeners = key("body.on");
    }, {} ],
    10: [ function(require, module, exports) {
        "use strict";
        function features(ripple) {
            return log("creating"), ripple.render = render(ripple)(ripple.render), ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = features;
        var render = function(ripple) {
            return function(next) {
                return function(el) {
                    var features = str(attr(el, "is")).split(" ").map(from(ripple.resources)).filter(header("content-type", "application/javascript")), css = str(attr("css")(el)).split(" ");
                    features.filter(by("headers.needs", includes("[css]"))).map(key("name")).map(append(".css")).filter(not(is.in(css))).map(function(d) {
                        return attr("css", (str(attr("css")(el)) + " " + d).trim())(el);
                    });
                    var node = next(el);
                    return node && node.state ? (features.map(key("body")).map(function(d) {
                        return d.call(node.shadowRoot || node, node.shadowRoot || node, node.state);
                    }), node) : void 0;
                };
            };
        }, log = window.log("[ri/features]");
    }, {} ],
    11: [ function(require, module, exports) {
        "use strict";
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
        var header = "application/javascript", check = function(res) {
            return is.fn(res.body);
        }, parse = function(res) {
            return res.body = fn(res.body), res;
        }, log = window.log("[ri/types/fn]"), to = function(res) {
            return res.value = str(res.value), res;
        };
    }, {} ],
    12: [ function(require, module, exports) {
        "use strict";
        function helpers(ripple) {
            log("creating");
            var type = ripple.types["application/data"];
            return type.parse = attach(type.parse), ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = helpers;
        var attach = function(next) {
            return function(res) {
                next && (res = next(res));
                var helpers = res.headers.helpers;
                return keys(helpers).map(function(name) {
                    return helpers[name] = fn(helpers[name]), name;
                }).map(function(name) {
                    return def(res.body, name, helpers[name]);
                }), res;
            };
        }, log = window.log("[ri/helpers]");
    }, {} ],
    13: [ function(require, module, exports) {
        "use strict";
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
        var render = function(ripple) {
            return function(next) {
                return function(el) {
                    var component = lo(el.nodeName);
                    if (component in ripple.resources) {
                        var headers = ripple.resources[component].headers, attrs = headers.attrs = headers.attrs || parse(headers.needs, component);
                        return attrs.map(function(_ref) {
                            var _ref2 = _slicedToArray(_ref, 2), name = _ref2[0], values = _ref2[1];
                            return values.some(function(v, i) {
                                var from = attr(el, name) || "";
                                return !includes(v)(from) && attr(el, name, (from + " " + v).trim());
                            });
                        }).some(Boolean) ? el.draw() : next(el);
                    }
                };
            };
        }, parse = function() {
            var attrs = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0], component = arguments[1];
            return attrs.split("[").slice(1).map(replace("]", "")).map(split("=")).map(function(_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2), k = _ref4[0], v = _ref4[1];
                return v ? [ k, v.split(" ") ] : "css" == k ? [ k, [ component + ".css" ] ] : [ k, [] ];
            });
        }, log = window.log("[ri/needs]");
        window.err("[ri/needs]");
    }, {} ],
    14: [ function(require, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function precss(ripple) {
            return log("creating"), ripple.render = render(ripple)(ripple.render), values(ripple.types).filter(by("header", "text/css")).map(function(type) {
                return type.render = proxy(type.render, css(ripple));
            }), ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = precss;
        var _cssscope = require("cssscope"), _cssscope2 = _interopRequireDefault(_cssscope), render = function(ripple) {
            return function(next) {
                return function(host) {
                    var styles, css = str(attr(host, "css")).split(" ").filter(Boolean), root = host.shadowRoot || host, head = document.head, shadow = head.createShadowRoot && host.shadowRoot;
                    if (!css.length) return next(host);
                    if (!css.some(not(is.in(ripple.resources)))) return styles = css.map(from(ripple.resources)).map(function(d) {
                        return d.body;
                    }).map(shadow ? identity : transform(css)), css.map(function(d) {
                        return raw('style[resource="' + d + '"]', shadow ? root : head) || el("style[resource=" + d + "]");
                    }).map(function(d, i) {
                        return d.innerHTML = styles[i], d;
                    }).filter(not(by("parentNode"))).map(function(d) {
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
                return all('[css~="' + res.name + '"]:not([inert])').map(ripple.draw);
            };
        }, log = window.log("[ri/precss]");
        window.err("[ri/precss]");
    }, {
        cssscope: 2
    } ],
    15: [ function(require, module, exports) {
        "use strict";
        function singleton(ripple) {
            return log("creating"), owner.ripple || (owner.ripple = ripple), ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = singleton;
        var log = window.log("[ri/singleton]");
    }, {} ],
    16: [ function(require, module, exports) {
        "use strict";
        function version(ripple) {
            log("creating");
            ripple.types["application/data"];
            return ripple.on("change.version", commit(ripple)), ripple.version = checkout(ripple), 
            ripple.version.calc = calc(ripple), ripple.version.log = [], ripple;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = version;
        var commit = function(ripple) {
            return function(name, change) {
                return logged(ripple.resources[name]) && ripple.version.log.push(values(ripple.resources).filter(by(logged)).map(index));
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
                }) : 1 == arguments.length && is.str(name) ? ripple.resources[name].body.log.length - 1 : 1 == arguments.length && is.num(name) ? application(ripple)(name) : 0 == arguments.length ? ripple.version.log.length - 1 : err("could not rollback", name, index);
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
                for (;is.def(log[i].key); ) i--;
                for (var root = clone(log[i].value); i !== end; ) set(log[++i])(root);
                return def(log[end], "cache", root);
            };
        }, rel = function(log, index) {
            return index < 0 ? log.length + index - 1 : index;
        }, logged = function(res) {
            return res.body.log && res.body.log.max > 0;
        }, log = window.log("[ri/versioned]"), err = window.err("[ri/versioned]");
    }, {} ]
}, {}, [ 1 ]);