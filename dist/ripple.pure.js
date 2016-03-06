(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = features;/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Extend Components with Features
// -------------------------------------------
function features(ripple) {
  if (!true) return;
  log('creating');
  ripple.render = render(ripple)(ripple.render);
  return ripple;
}

var render = function render(ripple) {
  return function (next) {
    return function (el) {
      var features = (0, str)((0, attr)(el, 'is')).split(' ').map((0, from)(ripple.resources)).filter((0, header)('content-type', 'application/javascript')),
          css = (0, str)((0, attr)('css')(el)).split(' ');

      features.filter((0, by)('headers.needs', (0, includes)('[css]'))).map((0, key)('name')).map((0, append)('.css')).filter((0, not)(is.in(css))).map(function (d) {
        return (0, attr)('css', ((0, str)((0, attr)('css')(el)) + ' ' + d).trim())(el);
      });

      var node = next(el);

      return !node || !node.state ? undefined : features.map((0, key)('body')).map(function (d) {
        return d.call(node, node.state);
      });
    };
  };
};

var log = window.log('[ri/features]');
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = create;

var _rijs = require('rijs.components');

var _rijs2 = _interopRequireDefault(_rijs);

var _rijs3 = require('rijs.singleton');

var _rijs4 = _interopRequireDefault(_rijs3);

var _rijs5 = require('rijs.versioned');

var _rijs6 = _interopRequireDefault(_rijs5);

var _rijs7 = require('rijs.features');

var _rijs8 = _interopRequireDefault(_rijs7);

var _rijs9 = require('rijs.helpers');

var _rijs10 = _interopRequireDefault(_rijs9);

var _rijs11 = require('rijs.precss');

var _rijs12 = _interopRequireDefault(_rijs11);

var _rijs13 = require('rijs.needs');

var _rijs14 = _interopRequireDefault(_rijs13);

var _rijs15 = require('rijs.core');

var _rijs16 = _interopRequireDefault(_rijs15);

var _rijs17 = require('rijs.data');

var _rijs18 = _interopRequireDefault(_rijs17);

var _rijs19 = require('rijs.css');

var _rijs20 = _interopRequireDefault(_rijs19);

var _rijs21 = require('rijs.fn');

var _rijs22 = _interopRequireDefault(_rijs21);

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

!window.ripple && create();

function create(opts) {
  var ripple = (0, _rijs16.default)(); // empty base collection of resources

  // enrich..
  (0, _rijs4.default)(ripple); // exposes a single instance
  (0, _rijs18.default)(ripple); // register data types
  (0, _rijs20.default)(ripple); // register css types
  (0, _rijs22.default)(ripple); // register fn types
  (0, _rijs10.default)(ripple); // expose helper functions and constants
  (0, _rijs2.default)(ripple); // invoke web components, fn.call(<el>, data)
  (0, _rijs8.default)(ripple); // extend components with features
  (0, _rijs14.default)(ripple); // define default attrs for components
  (0, _rijs12.default)(ripple); // preapplies scoped css
  (0, _rijs6.default)(ripple); // versioning info and time travel
  return ripple;
}
},{"rijs.components":5,"rijs.core":8,"rijs.css":10,"rijs.data":11,"rijs.features":1,"rijs.fn":12,"rijs.helpers":13,"rijs.needs":3,"rijs.precss":14,"rijs.singleton":16,"rijs.versioned":4}],3:[function(require,module,exports){
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = needs;
/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Define Default Attributes for Components
// -------------------------------------------
function needs(ripple) {
  if (!true) return;
  log('creating');
  ripple.render = render(ripple)(ripple.render);
  return ripple;
}

var render = function render(ripple) {
  return function (next) {
    return function (el) {
      var component = (0, lo)(el.nodeName);
      if (!(component in ripple.resources)) return;

      var headers = ripple.resources[component].headers,
          attrs = headers.attrs = headers.attrs || parse(headers.needs, component);

      return attrs.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var name = _ref2[0];
        var values = _ref2[1];

        return values.some(function (v, i) {
          var from = (0, attr)(el, name) || '';
          return (0, includes)(v)(from) ? false : (0, attr)(el, name, (from + ' ' + v).trim());
        });
      }).some(Boolean) ? el.draw() : next(el);
    };
  };
};

var parse = function parse() {
  var attrs = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var component = arguments[1];
  return attrs.split('[').slice(1).map((0, replace)(']', '')).map((0, split)('=')).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2);

    var k = _ref4[0];
    var v = _ref4[1];
    return v ? [k, v.split(' ')] : k == 'css' ? [k, [component + '.css']] : [k, []];
  });
};

var log = window.log('[ri/needs]'),
    err = window.err('[ri/needs]');
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = version;
/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Global Versioning and Time Travel
// -------------------------------------------
function version(ripple) {
  log('creating');

  ripple.on('change.version', commit(ripple));
  ripple.version = checkout(ripple);
  ripple.version.log = [];
  return ripple;
}

var commit = function commit(ripple) {
  return function (name, change) {
    return logged(ripple.resources[name]) && ripple.version.log.push((0, values)(ripple.resources).filter((0, by)('body.log')).map(index));
  };
};

var index = function index(_ref) {
  var name = _ref.name;
  var body = _ref.body;
  return { name: name, index: body.log.length - 1 };
};

var checkout = function checkout(ripple) {
  return function (name, index) {
    return arguments.length == 2 ? resource(ripple)({ name: name, index: index }) : arguments.length == 1 && is.str(name) ? ripple.resources[name].body.log.length - 1 : arguments.length == 1 && is.num(name) ? application(ripple)(name) : arguments.length == 0 ? ripple.version.log.length - 1 : err('could not rollback', name, index);
  };
};

var application = function application(ripple) {
  return function (index) {
    return ripple.version.log[rel(ripple.version, index)].map(resource(ripple));
  };
};

var resource = function resource(ripple) {
  return function (_ref2) {
    var name = _ref2.name;
    var index = _ref2.index;
    return ripple(name, ripple.resources[name].body.log[rel(ripple.resources[name].body, index)].value.toJS());
  };
};

var rel = function rel(_ref3, index) {
  var log = _ref3.log;
  return index < 0 ? log.length + index - 1 : index;
};

var logged = (0, key)('body.log');

var log = window.log('[ri/versioned]'),
    err = window.err('[ri/versioned]');
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = components;

var _data = require('./types/data');

var _data2 = _interopRequireDefault(_data);

var _fn = require('./types/fn');

var _fn2 = _interopRequireDefault(_fn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: Renders specific nodes, resources or everything
// -------------------------------------------
// ripple.draw()                 - redraw all components on page
// ripple.draw(element)          - redraw specific element
// ripple.draw.call(element)     - redraw specific element
// ripple.draw.call(selection)   - redraw D3 selection
// ripple.draw('name')           - redraw elements that depend on resource
// ripple.draw({ ... })          - redraw elements that depend on resource
// MutationObserver(ripple.draw) - redraws element being observed

function components(ripple) {
  if (!true) return ripple;
  log('creating');

  if (!customs) (0, ready)(polyfill(ripple));
  (0, values)(ripple.types).map(function (type) {
    return type.parse = (0, proxy)(type.parse, clean(ripple));
  });
  (0, key)('types.application/javascript.render', function (d) {
    return (0, _fn2.default)(ripple);
  })(ripple);
  (0, key)('types.application/data.render', function (d) {
    return (0, _data2.default)(ripple);
  })(ripple);
  ripple.draw = draw(ripple);
  ripple.render = render(ripple);
  ripple.on('change.draw', ripple.draw);
  return ripple;
}

// public draw api
function draw(ripple) {
  return function (thing) {
    return this && this.nodeName ? invoke(ripple)(this) : this && this.node ? invoke(ripple)(this.node()) : !thing ? everything(ripple) : thing instanceof mutation ? invoke(ripple)(thing.target) : thing[0] instanceof mutation ? invoke(ripple)(thing[0].target) : thing.nodeName ? invoke(ripple)(thing) : thing.node ? invoke(ripple)(thing.node()) : thing.name ? resource(ripple)(thing.name) : is.str(thing) ? resource(ripple)(thing) : err('could not update', thing);
  };
}

// render all components
var everything = function everything(ripple) {
  var selector = (0, values)(ripple.resources).filter((0, header)('content-type', 'application/javascript')).map((0, key)('name')).join(',');

  return !selector ? [] : (0, all)(selector).map(invoke(ripple));
};

// render all elements that depend on the resource
var resource = function resource(ripple) {
  return function (name) {
    var res = ripple.resources[name],
        type = (0, header)('content-type')(res);

    return (ripple.types[type].render || noop)(res);
  };
};

// batch renders on render frames
var batch = function batch(ripple) {
  return function (el) {
    return !el.pending && (el.pending = requestAnimationFrame(function (d) {
      return delete el.pending, ripple.render(el);
    }));
  };
};

// main function to render a particular custom element with any data it needs
var invoke = function invoke(ripple) {
  return function (el) {
    if (el.nodeName == '#document-fragment') return invoke(ripple)(el.host);
    if (el.nodeName == '#text') return invoke(ripple)(el.parentNode);
    if (!el.matches(isAttached)) return;
    if ((0, attr)(el, 'inert') != null) return;
    if (!el.on) (0, emitterify)(el);
    if (!el.draw) el.draw = function (d) {
      return ripple.draw(el);
    };
    return batch(ripple)(el), el;
  };
};

var render = function render(ripple) {
  return function (el) {
    var name = (0, lo)(el.tagName),
        deps = (0, attr)(el, 'data'),
        fn = (0, body)(ripple)(name),
        data = bodies(ripple)(deps);

    if (!fn) return el;
    if (deps && !data) return el;

    try {
      fn.call(el.shadowRoot || el, defaults(el, data), index(el));
    } catch (e) {
      err(e, e.stack);
    }

    return el;
  };
};

// polyfill
var polyfill = function polyfill(ripple) {
  return function (d) {
    if (typeof MutationObserver == 'undefined') return;
    if (document.body.muto) document.body.muto.disconnect();
    var muto = document.body.muto = new MutationObserver(drawCustomEls(ripple)),
        conf = { childList: true, subtree: true };

    muto.observe(document.body, conf);
  };
};

// clean local headers for transport
var clean = function clean(ripple) {
  return function (res) {
    return delete res.headers.pending, res;
  };
};

// helpers
var defaults = function defaults(el, data) {
  el.state = el.state || {};
  (0, overwrite)(el.state)(data);
  (0, overwrite)(el.state)(el.__data__);
  el.__data__ = el.state;
  return el.state;
};

var onlyIfDifferent = function onlyIfDifferent(m) {
  return (0, attr)(m.target, m.attributeName) != m.oldValue;
};

var drawCustomEls = function drawCustomEls(ripple) {
  return function (mutations) {
    return mutations.map((0, key)('addedNodes')).map(to.arr).reduce(flatten).filter((0, by)('nodeName', (0, includes)('-'))).map(ripple.draw) | 0;
  };
};

var bodies = function bodies(ripple) {
  return function (deps) {
    var o = {},
        names = deps ? deps.split(' ') : [];

    names.map(function (d) {
      return o[d] = (0, body)(ripple)(d);
    });

    return !names.length ? undefined : (0, values)(o).some(is.falsy) ? undefined : o;
  };
};

var index = function index(el) {
  return Array.prototype.indexOf.call((0, key)('parentNode.children')(el) || [], el);
};

var log = window.log('[ri/components]'),
    err = window.err('[ri/components]'),
    mutation = true && window.MutationRecord || noop,
    customs = true && !!document.registerElement,
    isAttached = customs ? 'html *, :host-context(html) *' : 'html *';
true && (Element.prototype.matches = Element.prototype.matches || Element.prototype.msMatchesSelector);
},{"./types/data":6,"./types/fn":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = data;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// render all elements that require the specified data
function data(ripple) {
  return function (res) {
    return (0, all)('[data~="' + res.name + '"]:not([inert])').map(ripple.draw);
  };
}
},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fn;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// register custom element prototype (render is automatic)
function fn(ripple) {
  return function (res) {
    if (!customs || !customEl(res) || registered(res)) return (0, all)(res.name + ':not([inert])\n                 ,[is="' + res.name + '"]:not([inert])').map(ripple.draw);

    var proto = Object.create(HTMLElement.prototype),
        opts = { prototype: proto },
        extend = res.headers['extends'];

    extend && (opts.extends = extend);
    proto.attachedCallback = ripple.draw;
    document.registerElement(res.name, opts);
  };
}

function registered(res) {
  var extend = (0, header)('extends')(res);

  return extend ? document.createElement(extend, res.name).attachedCallback : document.createElement(res.name).attachedCallback;
}

var customs = true && !!document.registerElement,
    customEl = function customEl(d) {
  return (0, includes)('-')(d.name);
};
},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = core;

var _text = require('./types/text');

var _text2 = _interopRequireDefault(_text);

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: Gets or sets a resource
// -------------------------------------------
// ripple('name')     - returns the resource body if it exists
// ripple('name')     - creates & returns resource if it doesn't exist
// ripple('name', {}) - creates & returns resource, with specified name and body
// ripple({ ... })    - creates & returns resource, with specified name, body and headers
// ripple.resources   - returns raw resources
// ripple.resource    - alias for ripple, returns ripple instead of resource for method chaining
// ripple.register    - alias for ripple
// ripple.on          - event listener for changes - all resources
// ripple('name').on  - event listener for changes - resource-specific

function core() {
  log('creating');

  var resources = {};
  ripple.resources = resources;
  ripple.resource = (0, chainable)(ripple);
  ripple.register = ripple;
  ripple.types = types();
  return (0, emitterify)(ripple);

  function ripple(name, body, headers) {
    return !name ? ripple : is.arr(name) ? name.map(ripple) : is.obj(name) && !name.name ? ripple : is.fn(name) && name.resources ? ripple((0, values)(name.resources)) : is.str(name) && !body && resources[name] ? resources[name].body : is.str(name) && !body && !resources[name] ? register(ripple)({ name: name }) : is.str(name) && body ? register(ripple)({ name: name, body: body, headers: headers }) : is.obj(name) && !is.arr(name) ? register(ripple)(name) : (err('could not find or create resource', name), false);
  }
}

var register = function register(ripple) {
  return function (_ref) {
    var name = _ref.name;
    var body = _ref.body;
    var _ref$headers = _ref.headers;
    var headers = _ref$headers === undefined ? {} : _ref$headers;

    log('registering', name);
    var res = normalise(ripple)({ name: name, body: body, headers: headers });

    if (!res) return err('failed to register', name), false;
    ripple.resources[name] = res;
    ripple.emit('change', [name, { type: 'update', value: res.body }]);
    return ripple.resources[name].body;
  };
};

var normalise = function normalise(ripple) {
  return function (res) {
    if (!(0, header)('content-type')(res)) (0, values)(ripple.types).sort((0, za)('priority')).some(contentType(res));
    if (!(0, header)('content-type')(res)) return err('could not understand resource', res), false;
    return parse(ripple)(res);
  };
};

var parse = function parse(ripple) {
  return function (res) {
    var type = (0, header)('content-type')(res);
    if (!ripple.types[type]) return err('could not understand type', type), false;
    return (ripple.types[type].parse || identity)(res);
  };
};

var contentType = function contentType(res) {
  return function (type) {
    return type.check(res) && (res.headers['content-type'] = type.header);
  };
};

var types = function types() {
  return [_text2.default].reduce(to.obj('header'), 1);
};

var err = window.err('[ri/core]'),
    log = window.log('[ri/core]');
},{"./types/text":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  header: 'text/plain',
  check: function check(res) {
    return !(0, includes)('.html')(res.name) && !(0, includes)('.css')(res.name) && is.str(res.body);
  }
};
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = css;
/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Exposes a convenient global instance
// -------------------------------------------
function css(ripple) {
  log('creating');
  ripple.types['text/css'] = {
    header: 'text/css',
    check: function check(res) {
      return (0, includes)('.css')(res.name);
    }
  };

  return ripple;
}

var log = window.log('[ri/types/css]');
},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = data;

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Adds support for data resources
// -------------------------------------------
function data(ripple) {
  log('creating');
  ripple.on('change.data', trickle(ripple));
  ripple.types['application/data'] = {
    header: 'application/data',
    check: function check(res) {
      return is.obj(res.body) || !res.body ? true : false;
    },
    parse: function parse(res) {
      var existing = ripple.resources[res.name] || {};

      !res.body && (res.body = []);
      !res.body.on && (res.body = (0, emitterify)(res.body, null));

      (0, extend)(res.headers)(existing.headers);
      (0, overwrite)(res.body.on)(existing.body && existing.body.on || {});

      if (logged(existing)) logged(res) ? res.body.log = existing.body.log.reset(res.body) : (0, def)(res.body, 'log', existing.body.log.reset(res.body), 1);

      res.body.on('change.bubble', function (change) {
        return ripple.emit('change', [res.name, change], (0, not)(is.in(['data'])));
      });
      res.body.on('log.bubble', function (change) {
        return res.body.emit('change', change);
      });

      return res;
    }
  };

  return ripple;
}

var trickle = function trickle(ripple) {
  return function (name, change) {
    return (0, header)('content-type', 'application/data')(ripple.resources[name]) && ripple.resources[name].body.emit('change', [change || null], (0, not)(is.in(['bubble'])));
  };
};

var log = window.log('[ri/types/data]'),
    logged = (0, key)('body.log');
},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fnc;

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Adds support for function resources
// -------------------------------------------
function fnc(ripple) {
  log('creating');
  ripple.types['application/javascript'] = { header: header, check: check, parse: parse, to: to };
  return ripple;
}

var header = 'application/javascript';
var check = function check(res) {
  return is.fn(res.body);
};
var parse = function parse(res) {
  return res.body = (0, fn)(res.body), res;
};
var log = window.log('[ri/types/fn]');
var to = function to(res) {
  return res.body = (0, str)(res.body), res;
};
},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = helpers;/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Attach Helper Functions for Resources
// -------------------------------------------
function helpers(ripple) {
  log('creating');

  var type = ripple.types['application/data'];
  type.parse = attach(type.parse);
  if (!true) type.to = serialise(type.to);
  return ripple;
}

var attach = function attach(next) {
  return function (res) {
    if (next) res = next(res);
    var helpers = res.headers.helpers;

    (0, keys)(helpers).map(function (name) {
      return helpers[name] = (0, fn)(helpers[name]), name;
    }).map(function (name) {
      return (0, def)(res.body, name, helpers[name]);
    });

    return res;
  };
};

var serialise = function serialise(next) {
  return function (res, change) {
    if (change) return next ? next.call(this, res, change) : true;
    var helpers = res.headers.helpers;

    (0, keys)(helpers).filter(function (name) {
      return is.fn(helpers[name]);
    }).map(function (name) {
      return helpers[name] = (0, str)(helpers[name]);
    });

    return next ? next.call(this, res, change) : res;
  };
};

var log = window.log('[ri/helpers]');
},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = precss;var _cssscope = require('cssscope');

var _cssscope2 = _interopRequireDefault(_cssscope);

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: Pre-applies Scoped CSS [css=name]
// -------------------------------------------
function precss(ripple) {
  if (!true) return;
  log('creating');

  ripple.render = render(ripple)(ripple.render);

  (0, values)(ripple.types).filter((0, by)('header', 'text/css')).map(function (type) {
    return type.render = (0, proxy)(type.render, css(ripple));
  });

  return ripple;
}

var render = function render(ripple) {
  return function (next) {
    return function (host) {
      var css = (0, str)((0, attr)(host, 'css')).split(' ').filter(Boolean),
          root = host.shadowRoot || host,
          head = document.head,
          shadow = head.createShadowRoot && host.shadowRoot,
          styles;

      // this host does not have a css dep, continue with rest of rendering pipeline
      if (!css.length) return next(host);

      // this host has a css dep, but it is not loaded yet - stop rendering this host
      if (css.some((0, not)(is.in(ripple.resources)))) return;

      // retrieve styles
      styles = css.map((0, from)(ripple.resources)).map((0, key)('body')).map(shadow ? identity : transform(css));

      // reuse or create style tag
      css.map(function (d) {
        return (0, raw)('style[resource="' + d + '"]', shadow ? root : head) || (0, el)('style[resource=' + d + ']');
      }).map((0, key)('innerHTML', function (d, i) {
        return styles[i];
      })).filter((0, not)((0, by)('parentNode'))).map(function (d) {
        return shadow ? root.insertBefore(d, root.firstChild) : head.appendChild(d);
      });

      // continue with rest of the rendering pipeline
      return next(host);
    };
  };
};

var transform = function transform(names) {
  return function (styles, i) {
    return (0, _cssscope2.default)(styles, '[css~="' + names[i] + '"]');
  };
};

var css = function css(ripple) {
  return function (res) {
    return (0, all)('[css~="' + res.name + '"]:not([inert])').map(ripple.draw);
  };
};

var log = window.log('[ri/precss]'),
    err = window.err('[ri/precss]');
},{"cssscope":15}],15:[function(require,module,exports){
module.exports = function scope(styles, prefix) {
  return styles
    .replace(/^(?!.*:host)([^@%\n]*){/gim, function($1){ return prefix+' '+$1 })       // ... {                 -> tag ... {
    .replace(/^(?!.*:host)(.*?),\s*$/gim, function($1){ return prefix+' '+$1 })        // ... ,                 -> tag ... ,
    .replace(/:host\((.*?)\)/gi, function($1, $2){ return prefix+$2 })                 // :host(...)            -> tag...
    .replace(/:host /gi, prefix + ' ')                                                 // :host ...             -> tag ...
    .replace(/^.*:host-context\((.*)\)/gim, function($1, $2){ return $2+' ' +prefix }) // ... :host-context(..) -> ... tag..
}
},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = singleton;
/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Exposes a convenient global instance
// -------------------------------------------
function singleton(ripple) {
  log('creating');
  if (!owner.ripple) owner.ripple = ripple;
  return ripple;
}

var log = window.log('[ri/singleton]');
},{}]},{},[2]);
