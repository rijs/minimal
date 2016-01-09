(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = features;

var _includes = require('utilise/includes');

var _includes2 = _interopRequireDefault(_includes);



var _header = require('utilise/header');

var _header2 = _interopRequireDefault(_header);

var _append = require('utilise/append');

var _append2 = _interopRequireDefault(_append);

var _attr = require('utilise/attr');

var _attr2 = _interopRequireDefault(_attr);

var _from = require('utilise/from');

var _from2 = _interopRequireDefault(_from);

var _not = require('utilise/not');

var _not2 = _interopRequireDefault(_not);

var _str = require('utilise/str');

var _str2 = _interopRequireDefault(_str);

var _key = require('utilise/key');

var _key2 = _interopRequireDefault(_key);

var _by = require('utilise/by');

var _by2 = _interopRequireDefault(_by);

var _is = require('utilise/is');

var _is2 = _interopRequireDefault(_is);

/* istanbul ignore next */
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
      var features = (0, _str2.default)((0, _attr2.default)(el, 'is')).split(' ').map((0, _from2.default)(ripple.resources)).filter((0, _header2.default)('content-type', 'application/javascript')),
          css = (0, _str2.default)((0, _attr2.default)('css')(el)).split(' ');

      features.filter((0, _by2.default)('headers.needs', (0, _includes2.default)('[css]'))).map((0, _key2.default)('name')).map((0, _append2.default)('.css')).filter((0, _not2.default)(_is2.default.in(css))).map(function (d) {
        return (0, _attr2.default)('css', ((0, _str2.default)((0, _attr2.default)('css')(el)) + ' ' + d).trim())(el);
      });

      var node = next(el);

      return !node || !node.state ? undefined : features.map((0, _key2.default)('body')).map(function (d) {
        return d.call(node, node.state);
      });
    };
  };
};

var log = require('utilise/log')('[ri/features]');
},{"utilise/append":3,"utilise/attr":4,"utilise/by":5,"utilise/from":7,"utilise/header":9,"utilise/includes":10,"utilise/is":11,"utilise/key":12,"utilise/log":13,"utilise/not":14,"utilise/str":17}],3:[function(require,module,exports){
module.exports = function append(v) {
  return function(d){
    return d+v
  }
}
},{}],4:[function(require,module,exports){
var is = require('utilise/is')

module.exports = function attr(d, name, value) {
  d = d.node ? d.node() : d
  d = d.host || d
  var args = arguments.length

  if (is.str(d)) return function(el){ 
    var node = this.nodeName || this.node ? this : el
    return attr.apply(this, args > 1 ? [node, d, name] : [node, d]) 
  }

  return args > 2 && value === false ? d.removeAttribute(name)
       : args > 2                    ? (d.setAttribute(name, value), value)
       : d.attributes.getNamedItem(name) 
      && d.attributes.getNamedItem(name).value
}

},{"utilise/is":11}],5:[function(require,module,exports){
var key = require('utilise/key')
  , is  = require('utilise/is')

module.exports = function by(k, v){
  var exists = arguments.length == 1
  return function(o){
    var d = key(k)(o)
    
    return d && v && d.toLowerCase && v.toLowerCase ? d.toLowerCase() === v.toLowerCase()
         : exists ? Boolean(d)
         : is.fn(v) ? v(d)
         : d == v
  }
}
},{"utilise/is":11,"utilise/key":12}],6:[function(require,module,exports){
var sel = require('utilise/sel')

module.exports = function datum(node){
  return sel(node).datum()
}
},{"utilise/sel":16}],7:[function(require,module,exports){
var datum = require('utilise/datum')
  , key = require('utilise/key')

module.exports = from
from.parent = fromParent

function from(o){
  return function(k){
    return key(k)(o)
  }
}

function fromParent(k){
  return datum(this.parentNode)[k]
}
},{"utilise/datum":6,"utilise/key":12}],8:[function(require,module,exports){
module.exports = function has(o, k) {
  return k in o
}
},{}],9:[function(require,module,exports){
var has = require('utilise/has')

module.exports = function header(header, value) {
  var getter = arguments.length == 1
  return function(d){ 
    return !d                      ? null
         : !has(d, 'headers')      ? null
         : !has(d.headers, header) ? null
         : getter                  ? d['headers'][header]
                                   : d['headers'][header] == value
  }
}
},{"utilise/has":8}],10:[function(require,module,exports){
module.exports = function includes(pattern){
  return function(d){
    return d && d.indexOf && ~d.indexOf(pattern)
  }
}
},{}],11:[function(require,module,exports){
module.exports = is
is.fn     = isFunction
is.str    = isString
is.num    = isNumber
is.obj    = isObject
is.lit    = isLiteral
is.bol    = isBoolean
is.truthy = isTruthy
is.falsy  = isFalsy
is.arr    = isArray
is.null   = isNull
is.def    = isDef
is.in     = isIn

function is(v){
  return function(d){
    return d == v
  }
}

function isFunction(d) {
  return typeof d == 'function'
}

function isBoolean(d) {
  return typeof d == 'boolean'
}

function isString(d) {
  return typeof d == 'string'
}

function isNumber(d) {
  return typeof d == 'number'
}

function isObject(d) {
  return typeof d == 'object'
}

function isLiteral(d) {
  return typeof d == 'object' 
      && !(d instanceof Array)
}

function isTruthy(d) {
  return !!d == true
}

function isFalsy(d) {
  return !!d == false
}

function isArray(d) {
  return d instanceof Array
}

function isNull(d) {
  return d === null
}

function isDef(d) {
  return typeof d !== 'undefined'
}

function isIn(set) {
  return function(d){
    return !set ? false  
         : set.indexOf ? ~set.indexOf(d)
         : d in set
  }
}
},{}],12:[function(require,module,exports){
var is = require('utilise/is')
  , str = require('utilise/str')

module.exports = function key(k, v){ 
  var set = arguments.length > 1
    , keys = str(k).split('.')
    , root = keys.shift()

  return function deep(o, i){
    var masked = {}
    return !o ? undefined 
         : !k ? o
         : is.arr(k) ? (k.map(copy), masked)
         : o[k] || !keys.length ? (set ? ((o[k] = is.fn(v) ? v(o[k], i) : v), o)
                                       :   o[k])
                                : (set ? (key(keys.join('.'), v)(o[root] ? o[root] : (o[root] = {})), o)
                                       : key(keys.join('.'))(o[root]))

    function copy(k){
      var val = key(k)(o)
      ;(val != undefined) && key(k, val)(masked)
    }
  }
}
},{"utilise/is":11,"utilise/str":17}],13:[function(require,module,exports){
var is = require('utilise/is')
  , to = require('utilise/to')
  , owner = require('utilise/owner')

module.exports = function log(prefix){
  return function(d){
    if (!owner.console || !console.log.apply) return d;
    is.arr(arguments[2]) && (arguments[2] = arguments[2].length)
    var args = to.arr(arguments)
    args.unshift(prefix.grey ? prefix.grey : prefix)
    return console.log.apply(console, args), d
  }
}
},{"utilise/is":11,"utilise/owner":15,"utilise/to":18}],14:[function(require,module,exports){
module.exports = function not(fn){
  return function(){
    return !fn.apply(this, arguments)
  }
}
},{}],15:[function(require,module,exports){
(function (global){
module.exports = true ? /* istanbul ignore next */ window : global
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],16:[function(require,module,exports){
module.exports = function sel(el){
  return el.node ? el : d3.select(el)
}
},{}],17:[function(require,module,exports){
var is = require('utilise/is') 

module.exports = function str(d){
  return d === 0 ? '0'
       : !d ? ''
       : is.fn(d) ? '' + d
       : is.obj(d) ? JSON.stringify(d)
       : String(d)
}
},{"utilise/is":11}],18:[function(require,module,exports){
module.exports = { 
  arr: toArray
, obj: toObject
}

function toArray(d){
  return Array.prototype.slice.call(d, 0)
}

function toObject(d) {
  var by = 'id'
    , o = {}

  return arguments.length == 1 
    ? (by = d, reduce)
    : reduce.apply(this, arguments)

  function reduce(p,v,i){
    if (i === 0) p = {}
    p[v[by]] = v
    return p
  }
}
},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = create;

var _rijs = require('rijs.components');

var _rijs2 = _interopRequireDefault(_rijs);

var _rijs3 = require('rijs.singleton');

var _rijs4 = _interopRequireDefault(_rijs3);

var _rijs5 = require('rijs.features');

var _rijs6 = _interopRequireDefault(_rijs5);

var _rijs7 = require('rijs.helpers');

var _rijs8 = _interopRequireDefault(_rijs7);

var _rijs9 = require('rijs.precss');

var _rijs10 = _interopRequireDefault(_rijs9);

var _rijs11 = require('rijs.needs');

var _rijs12 = _interopRequireDefault(_rijs11);

var _rijs13 = require('rijs.core');

var _rijs14 = _interopRequireDefault(_rijs13);

var _rijs15 = require('rijs.data');

var _rijs16 = _interopRequireDefault(_rijs15);

var _rijs17 = require('rijs.css');

var _rijs18 = _interopRequireDefault(_rijs17);

var _rijs19 = require('rijs.fn');

var _rijs20 = _interopRequireDefault(_rijs19);

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

!window.ripple && create();

function create(opts) {
  var ripple = (0, _rijs14.default)(); // empty base collection of resources

  // enrich..
  (0, _rijs4.default)(ripple); // exposes a single instance
  (0, _rijs16.default)(ripple); // register data types
  (0, _rijs18.default)(ripple); // register css types
  (0, _rijs20.default)(ripple); // register fn types
  (0, _rijs8.default)(ripple); // expose helper functions and constants
  (0, _rijs2.default)(ripple); // invoke web components, fn.call(<el>, data)
  (0, _rijs6.default)(ripple); // extend components with features
  (0, _rijs12.default)(ripple); // define default attrs for components
  (0, _rijs10.default)(ripple); // preapplies scoped css

  return ripple;
}
},{"rijs.components":73,"rijs.core":76,"rijs.css":78,"rijs.data":79,"rijs.features":2,"rijs.fn":80,"rijs.helpers":81,"rijs.needs":20,"rijs.precss":82,"rijs.singleton":83}],20:[function(require,module,exports){
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = needs;

var _includes = require('utilise/includes');

var _includes2 = _interopRequireDefault(_includes);

var _replace = require('utilise/replace');

var _replace2 = _interopRequireDefault(_replace);



var _split = require('utilise/split');

var _split2 = _interopRequireDefault(_split);

var _attr = require('utilise/attr');

var _attr2 = _interopRequireDefault(_attr);

var _key = require('utilise/key');

var _key2 = _interopRequireDefault(_key);

var _lo = require('utilise/lo');

var _lo2 = _interopRequireDefault(_lo);

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
      var component = (0, _lo2.default)(el.nodeName);
      if (!(component in ripple.resources)) return;

      var headers = ripple.resources[component].headers,
          attrs = headers.attrs = headers.attrs || parse(headers.needs, component);

      return attrs.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var name = _ref2[0];
        var values = _ref2[1];

        return values.some(function (v, i) {
          var from = (0, _attr2.default)(el, name) || '';
          return (0, _includes2.default)(v)(from) ? false : (0, _attr2.default)(el, name, (from + ' ' + v).trim());
        });
      }).some(Boolean) ? el.draw() : next(el);
    };
  };
};

var parse = function parse() {
  var attrs = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var component = arguments[1];
  return attrs.split('[').slice(1).map((0, _replace2.default)(']', '')).map((0, _split2.default)('=')).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2);

    var k = _ref4[0];
    var v = _ref4[1];
    return v ? [k, v.split(' ')] : k == 'css' ? [k, [component + '.css']] : [k, []];
  });
};

var log = require('utilise/log')('[ri/needs]'),
    err = require('utilise/err')('[ri/needs]');
},{"utilise/attr":21,"utilise/err":22,"utilise/includes":23,"utilise/key":25,"utilise/lo":26,"utilise/log":27,"utilise/replace":29,"utilise/split":30}],21:[function(require,module,exports){
var is = require('utilise/is')

module.exports = function attr(d, name, value) {
  d = d.node ? d.node() : d
  var args = arguments.length

  if (is.str(d)) return function(el){ 
    var node = this.nodeName || this.node ? this : el
    return attr.apply(this, args > 1 ? [node, d, name] : [node, d]) 
  }

  return args > 2 && value === false ? d.removeAttribute(name)
       : args > 2                    ? (d.setAttribute(name, value), value)
       : d.attributes.getNamedItem(name) 
      && d.attributes.getNamedItem(name).value
}

},{"utilise/is":24}],22:[function(require,module,exports){
var owner = require('utilise/owner')
  , to = require('utilise/to')

module.exports = function err(prefix){
  return function(d){
    if (!owner.console || !console.error.apply) return d;
    var args = to.arr(arguments)
    args.unshift(prefix.red ? prefix.red : prefix)
    return console.error.apply(console, args), d
  }
}
},{"utilise/owner":28,"utilise/to":32}],23:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"dup":10}],24:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}],25:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"dup":12,"utilise/is":24,"utilise/str":31}],26:[function(require,module,exports){
module.exports = function lo(d){
  return (d || '').toLowerCase()
}

},{}],27:[function(require,module,exports){
arguments[4][13][0].apply(exports,arguments)
},{"dup":13,"utilise/is":24,"utilise/owner":28,"utilise/to":32}],28:[function(require,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"dup":15}],29:[function(require,module,exports){
module.exports = function replace(from, to){
  return function(d){
    return d.replace(from, to)
  }
}
},{}],30:[function(require,module,exports){
module.exports = function split(delimiter){
  return function(d){
    return d.split(delimiter)
  }
}

},{}],31:[function(require,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"dup":17,"utilise/is":24}],32:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"dup":18}],33:[function(require,module,exports){
var to = require('utilise/to')

module.exports = function all(selector, doc){
  var prefix = !doc && document.head.createShadowRoot ? 'html /deep/ ' : ''
  return to.arr((doc || document).querySelectorAll(prefix+selector))
}
},{"utilise/to":69}],34:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"dup":4,"utilise/is":53}],35:[function(require,module,exports){
module.exports = function body(ripple){
  return function(name){
    var res = ripple.resources[name]
    return res && res.body
  }
}
},{}],36:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5,"utilise/is":53,"utilise/key":54}],37:[function(require,module,exports){
module.exports = function chainable(fn) {
  return function(){
    return fn.apply(this, arguments), fn
  }
}
},{}],38:[function(require,module,exports){
var client = true
  , colors = !client && require('colors')
  , has = require('utilise/has')
  , is = require('utilise/is')

module.exports = colorfill()

function colorfill(){
  /* istanbul ignore next */
  ['red', 'green', 'bold', 'grey', 'strip'].forEach(function(color) {
    !is.str(String.prototype[color]) && Object.defineProperty(String.prototype, color, {
      get: function() {
        return String(this)
      } 
    })
  })
}


},{"colors":1,"utilise/has":49,"utilise/is":53}],39:[function(require,module,exports){
module.exports = function copy(from, to){ 
  return function(d){ 
    return to[d] = from[d], d
  }
}
},{}],40:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6,"utilise/sel":66}],41:[function(require,module,exports){
var has = require('utilise/has')

module.exports = function def(o, p, v, w){
  !has(o, p) && Object.defineProperty(o, p, { value: v, writable: w })
  return o[p]
}

},{"utilise/has":49}],42:[function(require,module,exports){
var attr = require('utilise/attr')
  , split = require('utilise/split')
  , replace = require('utilise/replace')
  , prepend = require('utilise/prepend')

module.exports = function el(selector){
  var attrs = []
    , css = selector.replace(/\[(.+?)=(.*?)\]/g, function($1, $2, $3){ attrs.push([$2, $3]); return '' }).split('.')
    , tag  = css.shift()
    , elem = document.createElement(tag)

  attrs.forEach(function(d){ attr(elem, d[0], d[1]) })
  css.forEach(function(d){ elem.classList.add(d)})
  elem.toString = function(){ return tag + css.map(prepend('.')).join('') }

  return elem
}
},{"utilise/attr":34,"utilise/prepend":61,"utilise/replace":65,"utilise/split":67}],43:[function(require,module,exports){
var err  = require('utilise/err')('[emitterify]')
  , keys = require('utilise/keys')
  , def  = require('utilise/def')
  , not  = require('utilise/not')
  , is   = require('utilise/is')
  
module.exports = function emitterify(body) {
  return def(body, 'on', on, 1)
       , def(body, 'once', once, 1)
       , def(body, 'emit', emit, 1)
       , body

  function emit(type, param, filter) {
    var ns = type.split('.')[1]
      , id = type.split('.')[0]
      , li = body.on[id] || []
      , tt = li.length-1
      , pm = is.arr(param) ? param : [param || body]

    if (ns) return invoke(li, ns, pm), body

    for (var i = li.length; i >=0; i--)
      invoke(li, i, pm)

    keys(li)
      .filter(not(isFinite))
      .filter(filter || Boolean)
      .map(function(n){ return invoke(li, n, pm) })

    return body
  }

  function invoke(o, k, p){
    if (!o[k]) return
    var fn = o[k]
    o[k].once && (isFinite(k) ? o.splice(k, 1) : delete o[k])
    try { fn.apply(body, p) } catch(e) { err(e, e.stack)  }
   }

  function on(type, callback) {
    var ns = type.split('.')[1]
      , id = type.split('.')[0]

    body.on[id] = body.on[id] || []
    return !callback && !ns ? (body.on[id])
         : !callback &&  ns ? (body.on[id][ns])
         :  ns              ? (body.on[id][ns] = callback, body)
                            : (body.on[id].push(callback), body)
  }

  function once(type, callback){
    return callback.once = true, body.on(type, callback), body
  }
}
},{"utilise/def":41,"utilise/err":44,"utilise/is":53,"utilise/keys":55,"utilise/not":59}],44:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"dup":22,"utilise/owner":60,"utilise/to":69}],45:[function(require,module,exports){
var is = require('utilise/is')
  , not = require('utilise/not')
  , keys = require('utilise/keys')
  , copy = require('utilise/copy')

module.exports = function extend(to){ 
  return function(from){
    keys(from)
      .filter(not(is.in(to)))
      .map(copy(from, to))

    return to
  }
}
},{"utilise/copy":39,"utilise/is":53,"utilise/keys":55,"utilise/not":59}],46:[function(require,module,exports){
var is = require('utilise/is')  

module.exports = function flatten(p,v){ 
  is.arr(v) && (v = v.reduce(flatten, []))
  return (p = p || []), p.concat(v) 
}

},{"utilise/is":53}],47:[function(require,module,exports){
var is = require('utilise/is')

module.exports = function fn(candid){
  return is.fn(candid) ? candid
       : (new Function("return " + candid))()
}
},{"utilise/is":53}],48:[function(require,module,exports){
arguments[4][7][0].apply(exports,arguments)
},{"dup":7,"utilise/datum":40,"utilise/key":54}],49:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],50:[function(require,module,exports){
arguments[4][9][0].apply(exports,arguments)
},{"dup":9,"utilise/has":49}],51:[function(require,module,exports){
module.exports = function identity(d) {
  return d
}
},{}],52:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"dup":10}],53:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}],54:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"dup":12,"utilise/is":53,"utilise/str":68}],55:[function(require,module,exports){
module.exports = function keys(o) {
  return Object.keys(o || {})
}
},{}],56:[function(require,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"dup":26}],57:[function(require,module,exports){
arguments[4][13][0].apply(exports,arguments)
},{"dup":13,"utilise/is":53,"utilise/owner":60,"utilise/to":69}],58:[function(require,module,exports){
module.exports = function noop(){}
},{}],59:[function(require,module,exports){
arguments[4][14][0].apply(exports,arguments)
},{"dup":14}],60:[function(require,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"dup":15}],61:[function(require,module,exports){
module.exports = function prepend(v) {
  return function(d){
    return v+d
  }
}
},{}],62:[function(require,module,exports){
var is = require('utilise/is')
  , identity = require('utilise/identity')

module.exports = function proxy(fn, ret, ctx){ 
  return function(){
    var result = (fn || identity).apply(ctx || this, arguments)
    return is.fn(ret) ? ret.call(ctx || this, result) : ret || result
  }
}
},{"utilise/identity":51,"utilise/is":53}],63:[function(require,module,exports){
module.exports = function raw(selector, doc){
  var prefix = !doc && document.head.createShadowRoot ? 'html /deep/ ' : ''
  return (doc ? doc : document).querySelector(prefix+selector)
}
},{}],64:[function(require,module,exports){
module.exports = function ready(fn){
  return document.body ? fn() : document.addEventListener('DOMContentLoaded', fn)
}

},{}],65:[function(require,module,exports){
arguments[4][29][0].apply(exports,arguments)
},{"dup":29}],66:[function(require,module,exports){
arguments[4][16][0].apply(exports,arguments)
},{"dup":16}],67:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],68:[function(require,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"dup":17,"utilise/is":53}],69:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"dup":18}],70:[function(require,module,exports){
var keys = require('utilise/keys')
  , from = require('utilise/from')

module.exports = function values(o) {
  return !o ? [] : keys(o).map(from(o))
}
},{"utilise/from":48,"utilise/keys":55}],71:[function(require,module,exports){
module.exports = function wrap(d){
  return function(){
    return d
  }
}
},{}],72:[function(require,module,exports){
var key = require('utilise/key')

module.exports = function za(k) {
  return function(a, b){
    var ka = key(k)(a) || ''
      , kb = key(k)(b) || ''

    return ka > kb ? -1 
         : ka < kb ?  1 
                   :  0
  }
}

},{"utilise/key":54}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = components;

var _emitterify = require('utilise/emitterify');

var _emitterify2 = _interopRequireDefault(_emitterify);

var _includes = require('utilise/includes');

var _includes2 = _interopRequireDefault(_includes);

var _identity = require('utilise/identity');

var _identity2 = _interopRequireDefault(_identity);

var _flatten = require('utilise/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _header = require('utilise/header');

var _header2 = _interopRequireDefault(_header);



var _values = require('utilise/values');

var _values2 = _interopRequireDefault(_values);

var _proxy = require('utilise/proxy');

var _proxy2 = _interopRequireDefault(_proxy);

var _ready = require('utilise/ready');

var _ready2 = _interopRequireDefault(_ready);

var _attr = require('utilise/attr');

var _attr2 = _interopRequireDefault(_attr);

var _body = require('utilise/body');

var _body2 = _interopRequireDefault(_body);

var _noop = require('utilise/noop');

var _noop2 = _interopRequireDefault(_noop);

var _wrap = require('utilise/wrap');

var _wrap2 = _interopRequireDefault(_wrap);

var _copy = require('utilise/copy');

var _copy2 = _interopRequireDefault(_copy);

var _keys = require('utilise/keys');

var _keys2 = _interopRequireDefault(_keys);

var _key = require('utilise/key');

var _key2 = _interopRequireDefault(_key);

var _all = require('utilise/all');

var _all2 = _interopRequireDefault(_all);

var _is = require('utilise/is');

var _is2 = _interopRequireDefault(_is);

var _by = require('utilise/by');

var _by2 = _interopRequireDefault(_by);

var _lo = require('utilise/lo');

var _lo2 = _interopRequireDefault(_lo);

var _to = require('utilise/to');

var _to2 = _interopRequireDefault(_to);

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

  if (!customs) (0, _ready2.default)(polyfill(ripple));
  (0, _values2.default)(ripple.types).map(function (type) {
    return type.parse = (0, _proxy2.default)(type.parse, clean(ripple));
  });
  (0, _key2.default)('types.application/javascript.render', (0, _wrap2.default)((0, _fn2.default)(ripple)))(ripple);
  (0, _key2.default)('types.application/data.render', (0, _wrap2.default)((0, _data2.default)(ripple)))(ripple);
  ripple.draw = draw(ripple);
  ripple.render = render(ripple);
  ripple.on('change', ripple.draw);
  return ripple;
}

// public draw api
function draw(ripple) {
  return function (thing) {
    return this && this.nodeName ? invoke(ripple)(this) : this && this.node ? invoke(ripple)(this.node()) : !thing ? everything(ripple) : thing instanceof mutation ? invoke(ripple)(thing.target) : thing[0] instanceof mutation ? invoke(ripple)(thing[0].target) : thing.nodeName ? invoke(ripple)(thing) : thing.node ? invoke(ripple)(thing.node()) : thing.name ? resource(ripple)(thing.name) : _is2.default.str(thing) ? resource(ripple)(thing) : err('could not update', thing);
  };
}

// render all components
function everything(ripple) {
  var selector = (0, _values2.default)(ripple.resources).filter((0, _header2.default)('content-type', 'application/javascript')).map((0, _key2.default)('name')).join(',');

  return !selector ? [] : (0, _all2.default)(selector).map(invoke(ripple));
}

// render all elements that depend on the resource
function resource(ripple) {
  return function (name) {
    var res = ripple.resources[name],
        type = (0, _header2.default)('content-type')(res);

    return (ripple.types[type].render || _noop2.default)(res);
  };
}

// batch renders on render frames
function batch(ripple) {
  return function (el) {
    return !el.pending && (el.pending = requestAnimationFrame(function (d) {
      return delete el.pending, ripple.render(el);
    }));
  };
}

// main function to render a particular custom element with any data it needs
function invoke(ripple) {
  return function (el) {
    if (el.nodeName == '#document-fragment') return invoke(ripple)(el.host);
    if (el.nodeName == '#text') return invoke(ripple)(el.parentNode);
    if (!el.matches(isAttached)) return;
    if ((0, _attr2.default)(el, 'inert') != null) return;
    if (!el.on) (0, _emitterify2.default)(el);
    if (!el.draw) el.draw = function (d) {
      return ripple.draw(el);
    };
    return batch(ripple)(el), el;
  };
}

function render(ripple) {
  return function (el) {
    var name = (0, _lo2.default)(el.tagName),
        deps = (0, _attr2.default)(el, 'data'),
        fn = (0, _body2.default)(ripple)(name),
        data = bodies(ripple)(deps);

    if (!fn) return el;
    if (deps && !data) return el;

    try {
      fn.call(el.shadowRoot || el, defaults(el, data));
    } catch (e) {
      err(e, e.stack);
    }

    return el;
  };
}

// polyfill
function polyfill(ripple) {
  return function (d) {
    if (typeof MutationObserver == 'undefined') return;
    if (document.body.muto) document.body.muto.disconnect();
    var muto = document.body.muto = new MutationObserver(drawCustomEls(ripple)),
        conf = { childList: true, subtree: true };

    muto.observe(document.body, conf);
  };
}

// clean local headers for transport
function clean(ripple) {
  return function (res) {
    delete res.headers.pending;
    return res;
  };
}

// helpers
function defaults(el, data) {
  el.state = el.state || {};
  overwrite(el.state)(data);
  overwrite(el.state)(el.__data__);
  el.__data__ = el.state;
  return el.state;
}

function overwrite(to) {
  return function (from) {
    return (0, _keys2.default)(from).map((0, _copy2.default)(from, to));
  };
}

function onlyIfDifferent(m) {
  return (0, _attr2.default)(m.target, m.attributeName) != m.oldValue;
}

function drawCustomEls(ripple) {
  return function (mutations) {
    return mutations.map((0, _key2.default)('addedNodes')).map(_to2.default.arr).reduce(_flatten2.default).filter((0, _by2.default)('nodeName', (0, _includes2.default)('-'))).map(ripple.draw) | 0;
  };
}

function bodies(ripple) {
  return function (deps) {
    var o = {},
        names = deps ? deps.split(' ') : [];

    names.map(function (d) {
      return o[d] = (0, _body2.default)(ripple)(d);
    });

    return !names.length ? undefined : (0, _values2.default)(o).some(_is2.default.falsy) ? undefined : o;
  };
}

var log = require('utilise/log')('[ri/components]'),
    err = require('utilise/err')('[ri/components]'),
    mutation = true && window.MutationRecord || _noop2.default,
    customs = true && !!document.registerElement,
    isAttached = customs ? 'html *, :host-context(html) *' : 'html *';
true && (Element.prototype.matches = Element.prototype.matches || Element.prototype.msMatchesSelector);
},{"./types/data":74,"./types/fn":75,"utilise/all":33,"utilise/attr":34,"utilise/body":35,"utilise/by":36,"utilise/copy":39,"utilise/emitterify":43,"utilise/err":44,"utilise/flatten":46,"utilise/header":50,"utilise/identity":51,"utilise/includes":52,"utilise/is":53,"utilise/key":54,"utilise/keys":55,"utilise/lo":56,"utilise/log":57,"utilise/noop":58,"utilise/proxy":62,"utilise/ready":64,"utilise/to":69,"utilise/values":70,"utilise/wrap":71}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = data;

var _all = require('utilise/all');

var _all2 = _interopRequireDefault(_all);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// render all elements that require the specified data
function data(ripple) {
  return function (res) {
    return (0, _all2.default)('[data~="' + res.name + '"]:not([inert])').map(ripple.draw);
  };
}
},{"utilise/all":33}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fn;

var _includes = require('utilise/includes');

var _includes2 = _interopRequireDefault(_includes);

var _header = require('utilise/header');

var _header2 = _interopRequireDefault(_header);



var _all = require('utilise/all');

var _all2 = _interopRequireDefault(_all);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// register custom element prototype (render is automatic)
function fn(ripple) {
  return function (res) {
    if (!customs || !customEl(res) || registered(res)) return (0, _all2.default)(res.name + ':not([inert])\n                 ,[is="' + res.name + '"]:not([inert])').map(ripple.draw);

    var proto = Object.create(HTMLElement.prototype),
        opts = { prototype: proto },
        extend = res.headers['extends'];

    extend && (opts.extends = extend);
    proto.attachedCallback = ripple.draw;
    document.registerElement(res.name, opts);
  };
}

function registered(res) {
  var extend = (0, _header2.default)('extends')(res);

  return extend ? document.createElement(extend, res.name).attachedCallback : document.createElement(res.name).attachedCallback;
}

var customs = true && !!document.registerElement,
    customEl = function customEl(d) {
  return (0, _includes2.default)('-')(d.name);
};
},{"utilise/all":33,"utilise/header":50,"utilise/includes":52}],76:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = core;

var _emitterify = require('utilise/emitterify');

var _emitterify2 = _interopRequireDefault(_emitterify);

var _colorfill = require('utilise/colorfill');

var _colorfill2 = _interopRequireDefault(_colorfill);

var _chainable = require('utilise/chainable');

var _chainable2 = _interopRequireDefault(_chainable);

var _identity = require('utilise/identity');

var _identity2 = _interopRequireDefault(_identity);

var _header = require('utilise/header');

var _header2 = _interopRequireDefault(_header);

var _values = require('utilise/values');

var _values2 = _interopRequireDefault(_values);

var _is = require('utilise/is');

var _is2 = _interopRequireDefault(_is);

var _to = require('utilise/to');

var _to2 = _interopRequireDefault(_to);

var _za = require('utilise/za');

var _za2 = _interopRequireDefault(_za);

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
  ripple.resource = (0, _chainable2.default)(ripple);
  ripple.register = ripple;
  ripple.types = types();
  return (0, _emitterify2.default)(ripple);

  function ripple(name, body, headers) {
    return !name ? ripple : _is2.default.arr(name) ? name.map(ripple) : _is2.default.obj(name) && !name.name ? ripple : _is2.default.fn(name) && name.resources ? ripple((0, _values2.default)(name.resources)) : _is2.default.str(name) && !body && resources[name] ? resources[name].body : _is2.default.str(name) && !body && !resources[name] ? register(ripple)({ name: name }) : _is2.default.str(name) && body ? register(ripple)({ name: name, body: body, headers: headers }) : _is2.default.obj(name) && !_is2.default.arr(name) ? register(ripple)(name) : (err('could not find or create resource', name), false);
  }
}

var register = function register(ripple) {
  return function (_ref) {
    var name = _ref.name;
    var body = _ref.body;
    var _ref$headers = _ref.headers;
    var headers = _ref$headers === undefined ? {} : _ref$headers;

    log('registering', name);
    var res = normalise(ripple)({ name: name, body: body, headers: headers }),
        type = !ripple.resources[name] ? 'load' : '';

    if (!res) return err('failed to register', name), false;
    ripple.resources[name] = res;
    ripple.emit('change', [ripple.resources[name], { type: type }]);
    return ripple.resources[name].body;
  };
};

var normalise = function normalise(ripple) {
  return function (res) {
    if (!(0, _header2.default)('content-type')(res)) (0, _values2.default)(ripple.types).sort((0, _za2.default)('priority')).some(contentType(res));
    if (!(0, _header2.default)('content-type')(res)) return err('could not understand resource', res), false;
    return parse(ripple)(res);
  };
};

var parse = function parse(ripple) {
  return function (res) {
    var type = (0, _header2.default)('content-type')(res);
    if (!ripple.types[type]) return err('could not understand type', type), false;
    return (ripple.types[type].parse || _identity2.default)(res);
  };
};

var contentType = function contentType(res) {
  return function (type) {
    return type.check(res) && (res.headers['content-type'] = type.header);
  };
};

var types = function types() {
  return [_text2.default].reduce(_to2.default.obj('header'), 1);
};

var err = require('utilise/err')('[ri/core]'),
    log = require('utilise/log')('[ri/core]');
},{"./types/text":77,"utilise/chainable":37,"utilise/colorfill":38,"utilise/emitterify":43,"utilise/err":44,"utilise/header":50,"utilise/identity":51,"utilise/is":53,"utilise/log":57,"utilise/to":69,"utilise/values":70,"utilise/za":72}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _includes = require('utilise/includes');

var _includes2 = _interopRequireDefault(_includes);

var _is = require('utilise/is');

var _is2 = _interopRequireDefault(_is);

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  header: 'text/plain',
  check: function check(res) {
    return !(0, _includes2.default)('.html')(res.name) && !(0, _includes2.default)('.css')(res.name) && _is2.default.str(res.body);
  }
};
},{"utilise/includes":52,"utilise/is":53}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = css;

var _includes = require('utilise/includes');

var _includes2 = _interopRequireDefault(_includes);

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
      return (0, _includes2.default)('.css')(res.name);
    }
  };

  return ripple;
}

var log = require('utilise/log')('[ri/types/css]');
},{"utilise/includes":52,"utilise/log":57}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = data;

var _emitterify = require('utilise/emitterify');

var _emitterify2 = _interopRequireDefault(_emitterify);

var _header = require('utilise/header');

var _header2 = _interopRequireDefault(_header);

var _extend = require('utilise/extend');

var _extend2 = _interopRequireDefault(_extend);

var _not = require('utilise/not');

var _not2 = _interopRequireDefault(_not);

var _is = require('utilise/is');

var _is2 = _interopRequireDefault(_is);

var _to = require('utilise/to');

var _to2 = _interopRequireDefault(_to);

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
      return _is2.default.obj(res.body) || !res.body ? true : false;
    },
    parse: function parse(res) {
      var existing = ripple.resources[res.name] || {};
      delete res.headers.listeners;
      (0, _extend2.default)(res.headers)(existing.headers);

      !res.body && (res.body = []);
      !res.body.on && (res.body = (0, _emitterify2.default)(res.body));
      res.body.on.change = res.headers.listeners = res.headers.listeners || [];
      res.body.on('change.bubble', function () {
        return ripple.emit('change', [res], (0, _not2.default)(_is2.default.in(['data'])));
      });

      return res;
    }
  };

  return ripple;
}

function trickle(ripple) {
  return function (res) {
    var args = [arguments[0].body, arguments[1]];
    return (0, _header2.default)('content-type', 'application/data')(res) && ripple.resources[res.name].body.emit('change', _to2.default.arr(args), (0, _not2.default)(_is2.default.in(['bubble'])));
  };
}

var log = require('utilise/log')('[ri/types/data]');
},{"utilise/emitterify":43,"utilise/extend":45,"utilise/header":50,"utilise/is":53,"utilise/log":57,"utilise/not":59,"utilise/to":69}],80:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fnc;

var _is = require('utilise/is');

var _is2 = _interopRequireDefault(_is);

var _fn = require('utilise/fn');

var _fn2 = _interopRequireDefault(_fn);

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Adds support for function resources
// -------------------------------------------
function fnc(ripple) {
  log('creating');
  ripple.types['application/javascript'] = { header: header, check: check, parse: parse };
  return ripple;
}

var header = 'application/javascript';

var check = function check(res) {
  return _is2.default.fn(res.body);
};

var parse = function parse(res) {
  return res.body = (0, _fn2.default)(res.body), res;
};

var log = require('utilise/log')('[ri/types/fn]');
},{"utilise/fn":47,"utilise/is":53,"utilise/log":57}],81:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = helpers;

var _values = require('utilise/values');

var _values2 = _interopRequireDefault(_values);

var _proxy = require('utilise/proxy');

var _proxy2 = _interopRequireDefault(_proxy);

var _keys = require('utilise/keys');

var _keys2 = _interopRequireDefault(_keys);

var _def = require('utilise/def');

var _def2 = _interopRequireDefault(_def);

var _str = require('utilise/str');

var _str2 = _interopRequireDefault(_str);

var _by = require('utilise/by');

var _by2 = _interopRequireDefault(_by);

var _is = require('utilise/is');

var _is2 = _interopRequireDefault(_is);

var _fn = require('utilise/fn');

var _fn2 = _interopRequireDefault(_fn);

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Attach Helper Functions for Resources
// -------------------------------------------
function helpers(ripple) {
  log('creating');

  (0, _values2.default)(ripple.types).filter((0, _by2.default)('header', 'application/data')).filter(function (type) {
    return type.parse = (0, _proxy2.default)(type.parse, attach);
  }).filter(function (type) {
    return type.to = (0, _proxy2.default)(type.to, serialise);
  });

  return ripple;
}

function attach(res) {
  var helpers = res.headers.helpers;

  (0, _keys2.default)(helpers).map(function (name) {
    return helpers[name] = (0, _fn2.default)(helpers[name]), name;
  }).map(function (name) {
    return (0, _def2.default)(res.body, name, helpers[name]);
  });

  return res;
}

function serialise(res) {
  var helpers = res.headers.helpers;

  (0, _keys2.default)(helpers).filter(function (name) {
    return _is2.default.fn(helpers[name]);
  }).map(function (name) {
    return helpers[name] = (0, _str2.default)(helpers[name]);
  });

  return res;
}

var log = require('utilise/log')('[ri/helpers]');
},{"utilise/by":36,"utilise/def":41,"utilise/fn":47,"utilise/is":53,"utilise/keys":55,"utilise/log":57,"utilise/proxy":62,"utilise/str":68,"utilise/values":70}],82:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = precss;

var _identity = require('utilise/identity');

var _identity2 = _interopRequireDefault(_identity);



var _values = require('utilise/values');

var _values2 = _interopRequireDefault(_values);

var _proxy = require('utilise/proxy');

var _proxy2 = _interopRequireDefault(_proxy);

var _attr = require('utilise/attr');

var _attr2 = _interopRequireDefault(_attr);

var _from = require('utilise/from');

var _from2 = _interopRequireDefault(_from);

var _all = require('utilise/all');

var _all2 = _interopRequireDefault(_all);

var _raw = require('utilise/raw');

var _raw2 = _interopRequireDefault(_raw);

var _str = require('utilise/str');

var _str2 = _interopRequireDefault(_str);

var _key = require('utilise/key');

var _key2 = _interopRequireDefault(_key);

var _not = require('utilise/not');

var _not2 = _interopRequireDefault(_not);

var _by = require('utilise/by');

var _by2 = _interopRequireDefault(_by);

var _is = require('utilise/is');

var _is2 = _interopRequireDefault(_is);

var _el = require('utilise/el');

var _el2 = _interopRequireDefault(_el);

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: Pre-applies Scoped CSS [css=name]
// -------------------------------------------
function precss(ripple) {
  if (!true) return;
  log('creating');

  ripple.render = render(ripple)(ripple.render);

  (0, _values2.default)(ripple.types).filter((0, _by2.default)('header', 'text/css')).map(function (type) {
    return type.render = (0, _proxy2.default)(type.render, css(ripple));
  });

  return ripple;
}

var render = function render(ripple) {
  return function (next) {
    return function (host) {
      var css = (0, _str2.default)((0, _attr2.default)(host, 'css')).split(' ').filter(Boolean),
          root = host.shadowRoot || host,
          head = document.head,
          shadow = head.createShadowRoot && host.shadowRoot,
          styles;

      // this host does not have a css dep, continue with rest of rendering pipeline
      if (!css.length) return next(host);

      // this host has a css dep, but it is not loaded yet - stop rendering this host
      if (css.some((0, _not2.default)(_is2.default.in(ripple.resources)))) return;

      // retrieve styles
      styles = css.map((0, _from2.default)(ripple.resources)).map((0, _key2.default)('body')).map(scope(host, shadow, css));

      // reuse or create style tag
      css.map(function (d) {
        return (0, _raw2.default)('style[resource="' + d + '"]', shadow ? root : head) || (0, _el2.default)('style[resource=' + d + ']');
      }).map((0, _key2.default)('innerHTML', function (d, i) {
        return styles[i];
      })).filter((0, _not2.default)((0, _by2.default)('parentNode'))).map(function (d) {
        return shadow ? root.insertBefore(d, root.firstChild) : head.appendChild(d);
      });

      // continue with rest of the rendering pipeline
      return next(host);
    };
  };
};

var scope = function scope(el, shadow, names) {
  return shadow ? _identity2.default : function (styles, i) {
    var prefix = '[css~="' + names[i] + '"]',
        escaped = '\\[css~="' + names[i] + '"\\]';

    return styles.replace(/^(?!.*:host)([^@%\n]*){/gim, function ($1) {
      return prefix + ' ' + $1;
    }) // ... {      -> tag ... {
    .replace(/^(?!.*:host)(.*?),\s*$/gim, function ($1) {
      return prefix + ' ' + $1;
    }) // ... ,      -> tag ... ,
    .replace(/:host\((.*?)\)/gi, function ($1, $2) {
      return prefix + $2;
    }) // :host(...) -> tag...
    .replace(/:host /gi, prefix + " ") // :host      -> tag
    .replace(/\/deep\/ /gi, '') // /deep/     ->
    .replace(/^.*:host-context\((.*)\)/gim, function ($1, $2) {
      return $2 + " " + prefix;
    }); // :host(...) -> tag...
  };
};

var css = function css(ripple) {
  return function (res) {
    return (0, _all2.default)('[css~="' + res.name + '"]:not([inert])').map(ripple.draw);
  };
};

var log = require('utilise/log')('[ri/precss]'),
    err = require('utilise/err')('[ri/precss]');
},{"utilise/all":33,"utilise/attr":34,"utilise/by":36,"utilise/el":42,"utilise/err":44,"utilise/from":48,"utilise/identity":51,"utilise/is":53,"utilise/key":54,"utilise/log":57,"utilise/not":59,"utilise/proxy":62,"utilise/raw":63,"utilise/str":68,"utilise/values":70}],83:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = singleton;

var _owner = require('utilise/owner');

var _owner2 = _interopRequireDefault(_owner);

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Exposes a convenient global instance
// -------------------------------------------
function singleton(ripple) {
  log('creating');
  if (!_owner2.default.ripple) _owner2.default.ripple = ripple;
  return ripple;
}

var log = require('utilise/log')('[ri/singleton]');
},{"utilise/log":57,"utilise/owner":60}]},{},[19]);
