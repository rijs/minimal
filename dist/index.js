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