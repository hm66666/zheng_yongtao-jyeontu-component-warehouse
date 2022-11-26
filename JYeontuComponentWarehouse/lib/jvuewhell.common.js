module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "112a");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00f2":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("e99b");

$export($export.P, 'Array', { fill: __webpack_require__("a740") });

__webpack_require__("87b2")('fill');


/***/ }),

/***/ "024f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "02e0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JSteps_vue_vue_type_style_index_0_id_ef66963a_prod_lang_less_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f92e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JSteps_vue_vue_type_style_index_0_id_ef66963a_prod_lang_less_scoped_scoped___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JSteps_vue_vue_type_style_index_0_id_ef66963a_prod_lang_less_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0353":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("6bf8");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "0451":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("9cff");
var isArray = __webpack_require__("d1cb");
var SPECIES = __webpack_require__("839a")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "05fd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("baa7")('native-function-to-string', Function.toString);


/***/ }),

/***/ "0658":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JAppsLock_vue_vue_type_style_index_0_id_afafd868_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("024f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JAppsLock_vue_vue_type_style_index_0_id_afafd868_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JAppsLock_vue_vue_type_style_index_0_id_afafd868_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "065d":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("bb8b");
var createDesc = __webpack_require__("5edc");
module.exports = __webpack_require__("26df") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "065e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "078c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b34");
var core = __webpack_require__("76e3");
var LIBRARY = __webpack_require__("3d8a");
var wksExt = __webpack_require__("1a58");
var defineProperty = __webpack_require__("bb8b").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "0848":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0856":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "085b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("e99b");
var $indexOf = __webpack_require__("52a4")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__("95b6")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "0926":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "0b28":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("9cff");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "0b34":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "0bca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("0b34");
var $export = __webpack_require__("e99b");
var redefine = __webpack_require__("84e8");
var redefineAll = __webpack_require__("6f45");
var meta = __webpack_require__("49f2");
var forOf = __webpack_require__("2b37");
var anInstance = __webpack_require__("8b5a");
var isObject = __webpack_require__("9cff");
var fails = __webpack_require__("0926");
var $iterDetect = __webpack_require__("1a9a");
var setToStringTag = __webpack_require__("bac3");
var inheritIfRequired = __webpack_require__("a83a");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "0c29":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "0c84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("1663")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("120f")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "0ce2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0e37":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JBarrage_vue_vue_type_style_index_0_id_21ad0371_prod_vars_7B_20width_20_7D_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7a72");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JBarrage_vue_vue_type_style_index_0_id_21ad0371_prod_vars_7B_20width_20_7D_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JBarrage_vue_vue_type_style_index_0_id_21ad0371_prod_vars_7B_20width_20_7D_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0fc6":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "0fc6";

/***/ }),

/***/ "1084":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("e99b");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("26df"), 'Object', { defineProperty: __webpack_require__("bb8b").f });


/***/ }),

/***/ "112a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (false) {}

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("1084");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.object.define-properties.js
var es6_object_define_properties = __webpack_require__("159a");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("ac67");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("246f");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("4890");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("1bc7");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("25ba");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("32ea");

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.20.1@@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("a450");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("566e");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("fc02");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JCalendar/src/JCalendar.vue?vue&type=template&id=2bbd0648&scoped=true&

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "template j-calendar",
    attrs: {
      "id": _vm.id
    }
  }, [_c('div', {
    staticClass: "j-header",
    attrs: {
      "id": "j-header"
    }
  }, [_c('div', {
    staticClass: "j-header-title"
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    staticClass: "j-btn-list"
  }, [_c('div', {
    staticClass: "j-btn-list-left"
  }, [_c('div', {
    staticClass: "btn-pre",
    on: {
      "click": function click($event) {
        return _vm.toPreMonth();
      }
    }
  }, [_vm._v("<")]), _c('div', {
    staticClass: "select-month"
  }, [_vm._v(_vm._s(_vm.selectMonth))]), _c('div', {
    staticClass: "btn-next",
    on: {
      "click": function click($event) {
        return _vm.toNextMonth();
      }
    }
  }, [_vm._v(">")])]), _c('div', {
    staticClass: "btn-today",
    on: {
      "click": function click($event) {
        return _vm.toNowDay();
      }
    }
  }, [_vm._v("回到今天")])])]), _c('div', {
    staticClass: "j-content",
    attrs: {
      "id": "j-content"
    }
  }, [_c('div', {
    staticClass: "calendar-j-content"
  }, [_vm._l(_vm.weeks, function (item, index) {
    return _c('div', {
      key: index + 'week',
      staticClass: "grid-week grid"
    }, [_vm._v("\n                周" + _vm._s(item) + "\n            ")]);
  }), _vm._l(_vm.days, function (item, index) {
    return _c('div', {
      key: index + 'day',
      staticClass: "grid-day grid",
      class: _vm.gridClass(item),
      on: {
        "click": function click($event) {
          return _vm.clickDay(item);
        }
      }
    }, [_vm._v("\n                " + _vm._s(item.split("-")[2]) + "\n            ")]);
  })], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JCalendar/src/JCalendar.vue?vue&type=template&id=2bbd0648&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JCalendar/src/JCalendar.vue?vue&type=script&lang=js&

/* harmony default export */ var JCalendarvue_type_script_lang_js_ = ({
  name: "JCalendar",
  props: {
    id: {
      type: String,
      default: "j-canlendar"
    },
    title: {
      type: String,
      default: "日历"
    },
    bgSrc: {
      type: String,
      default: "https://images8.alphacoders.com/992/992329.jpg"
    }
  },
  data: function data() {
    return {
      weeks: ["日", "一", "二", "三", "四", "五", "六"],
      days: [],
      selectDay: "",
      selectMonth: ""
    };
  },
  methods: {
    gridClass: function gridClass(item) {
      if (item == this.selectDay) {
        return "selected";
      }
      if (item.split("-")[1] != this.selectMonth.split("-")[1]) {
        return "gray";
      }
      return "";
    },
    setBg: function setBg() {
      var src = this.bgSrc;
      // const dom = document.getElementById(this.id);
      // console.log("----", dom);
      var box = document.getElementById("j-header");
      box.style.backgroundImage = "url(" + src + ")";
      box.style.backgroundRepeat = "no-repeat";
      box.style.backgroundSize = "100%";
    },
    /**
     * 判断润年
     * @param {string} year 需要判断的年份
     * @return {Boolean}
     */
    isLeap: function isLeap(year) {
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
      }
      return false;
    },
    /**
     * 获取星期
     * @param {string} date 需要获取星期的日期
     * @return {string}
     */
    getWeek: function getWeek(date) {
      var Stamp = new Date(date);
      // return weeks[Stamp.getDay()];
      return Stamp.getDay();
    },
    /**
     * 获取月份天数
     * @param {string} year  年份
     * @param {string} month 月份
     * @return {string}
     */
    getMonthDays: function getMonthDays(year, month) {
      month = parseInt(month) - 1;
      if (month < 0 || month > 11) return "";
      var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (this.isLeap(year)) {
        months[1] = 29;
      }
      return months[month];
    },
    zero: function zero(str) {
      str = parseInt(str);
      return str > 9 ? str : "0" + str;
    },
    /**
     * 补充满天数
     * @param {string} year  年份
     * @param {string} month 月份
     * @return {string}
     */
    fillDays: function fillDays(year, month) {
      var months = this.getMonthDays(year, month);
      var startWeek = this.getWeek(year + "-" + month + "-" + "01");
      var endWeek = this.getWeek(year + "-" + month + "-" + months);
      this.selectMonth = year + "-" + this.zero(month);
      year = parseInt(year);
      month = parseInt(month);
      var preYear = year;
      var preMonth = month - 1;
      if (preMonth === 0) {
        preMonth = 12;
        preYear = parseInt(year) - 1;
      }
      var preMonths = this.getMonthDays(preYear, preMonth);
      var nextYear = year;
      var nextMonth = month + 1;
      if (nextMonth === 13) {
        nextMonth = 1;
        nextYear = parseInt(year) + 1;
      }
      // const nextMonths = this.getMonthDays(nextYear, nextMonth)
      var days = [];
      for (var i = 0; i < startWeek; i++) {
        days.unshift(preYear + "-" + this.zero(preMonth) + "-" + this.zero(preMonths - i));
      }
      for (var _i = 1; _i <= months; _i++) {
        days.push(year + "-" + this.zero(month) + "-" + this.zero(_i));
      }
      for (var _i2 = 0; _i2 < 6 - endWeek; _i2++) {
        days.push(nextYear + "-" + this.zero(nextMonth) + "-" + this.zero(_i2 + 1));
      }
      return days;
    },
    clickDay: function clickDay(day) {
      var clickMonth = parseInt(day.split("-")[1]),
        selectMonth = parseInt(this.selectMonth.split("-")[1]);
      if (clickMonth == selectMonth - 1) {
        this.toPreMonth();
      }
      if (clickMonth == selectMonth + 1) {
        this.toNextMonth();
      }
      this.selectDay = day;
      this.$emit("selectDay", day);
    },
    toNowDay: function toNowDay() {
      var tempDate = new Date();
      var year = tempDate.getFullYear();
      var month = this.zero(tempDate.getMonth() + 1);
      var day = this.zero(tempDate.getDate());
      this.days = this.fillDays(year, month);
      this.clickDay(year + "-" + month + "-" + day);
    },
    toPreMonth: function toPreMonth() {
      var year = this.selectMonth.split("-")[0];
      var month = this.selectMonth.split("-")[1];
      month = parseInt(month) - 1;
      if (month === 0) {
        month = 12;
        year = parseInt(year) - 1;
      }
      this.days = this.fillDays(year, month);
      this.$emit("changeMonth", year + "-" + this.zero(month));
    },
    toNextMonth: function toNextMonth() {
      var year = this.selectMonth.split("-")[0];
      var month = this.selectMonth.split("-")[1];
      month = parseInt(month) + 1;
      if (month === 13) {
        month = 1;
        year = parseInt(year) + 1;
      }
      this.days = this.fillDays(year, month);
      this.$emit("changeMonth", year + "-" + this.zero(month));
    }
  },
  mounted: function mounted() {
    this.toNowDay();
    this.setBg();
  }
});
// CONCATENATED MODULE: ./packages/JCalendar/src/JCalendar.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JCalendarvue_type_script_lang_js_ = (JCalendarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JCalendar/src/JCalendar.vue?vue&type=style&index=0&id=2bbd0648&prod&lang=less&scoped=true&
var JCalendarvue_type_style_index_0_id_2bbd0648_prod_lang_less_scoped_true_ = __webpack_require__("d4aa");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.10.1@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/JCalendar/src/JCalendar.vue






/* normalize component */

var component = normalizeComponent(
  src_JCalendarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2bbd0648",
  null
  
)

/* harmony default export */ var JCalendar = (component.exports);
// CONCATENATED MODULE: ./packages/JCalendar/index.js


JCalendar.install = function (Vue) {
  return Vue.component(JCalendar.name, JCalendar);
}; //注册组件

/* harmony default export */ var packages_JCalendar = (JCalendar);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JTable/src/JTable.vue?vue&type=template&id=017a7698&scoped=true&
var JTablevue_type_template_id_017a7698_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "j-table-content",
    attrs: {
      "id": _vm.tableId
    }
  }, [_c('table', {
    staticClass: "j-table"
  }, [_c('j-tr', {
    key: _vm.tableId,
    attrs: {
      "tableId": _vm.tableId,
      "tableData": _vm.tableData,
      "title": _vm.title,
      "showTitle": true
    }
  })], 1)]);
};
var JTablevue_type_template_id_017a7698_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JTable/src/JTable.vue?vue&type=template&id=017a7698&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__("eec3");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("9f60");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("94f0");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("0c84");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("2843");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("4057");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__("3f5b");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("3441");

// CONCATENATED MODULE: ./packages/utils/strTool.js

/**
 * @description '-'连接命名转换成小驼峰命名
 * @param {String} str 需要转换的字符串
 * @return {String} 小驼峰形式字符串
 **/
var _toLittleCamel = function _toLittleCamel(str) {
  var newStr = str.split("-");
  if (newStr.length <= 1) return str;
  var res = newStr[0];
  for (var i = 1; i < newStr.length; i++) {
    res += newStr[i][0].toUpperCase() + newStr[i].substr(1);
  }
  return res;
};
/**
 * @description '-'连接命名转换成大驼峰命名
 * @param {String} str 需要转换的字符串
 * @return {String} 大驼峰形式字符串
 **/
var _toBigCamel = function _toBigCamel(str) {
  var newStr = str.split("-");
  if (newStr.length <= 1) return str;
  var res = "";
  for (var i = 0; i < newStr.length; i++) {
    res += newStr[i][0].toUpperCase() + newStr[i].substr(1);
  }
  return res;
};
/**
 * @description 驼峰命名转换成'-'连接命名
 * @param {String} str 需要转换的字符串
 * @return {String} '-'连接形式字符串
 **/
var camelTo_ = function camelTo_(str) {
  var res = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      if (i == 0) res += str[i].toLowerCase();else {
        res += "-" + str[i].toLowerCase();
      }
    } else {
      res += str[i];
    }
  }
  return res;
};
var getRandomLetter = function getRandomLetter() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var res = "";
  for (var i = 0; i < size; i++) {
    var ind = Math.floor(Math.random() * 26);
    res += String.fromCharCode(ind + 65);
  }
  return res;
};
var getUId = function getUId() {
  var letterNums = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var numberNums = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  var uId = getRandomLetter(letterNums) + "-" + Math.ceil(Math.random() * Math.pow(10, numberNums));
  return uId;
};
// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("085b");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JTable/src/JTr.vue?vue&type=template&id=9260af16&scoped=true&


var JTrvue_type_template_id_9260af16_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', {
    staticClass: "j-tr-content",
    style: _vm.getPadding(),
    attrs: {
      "colspan": _vm.title.length
    }
  }, [_vm._l(_vm.tableData, function (item, index) {
    return [_vm.showTitle && index === 0 ? _c('tr', {
      key: _vm.tableId + '-' + index + 'title',
      staticClass: "j-table-tr j-table-title"
    }, _vm._l(_vm.title, function (item, index) {
      return _c('td', {
        key: item.key,
        staticClass: "j-table-tr-th",
        attrs: {
          "width": item.width
        }
      }, [_vm._v("\n                " + _vm._s(item.title) + "\n                "), item.sort ? _c('button', {
        staticClass: "sort-btn",
        attrs: {
          "title": _vm.getSortWay(item)
        },
        on: {
          "click": function click($event) {
            return _vm.sortByKey(item.key, index);
          }
        }
      }, [_vm._v("\n                    sort\n                ")]) : _vm._e()]);
    }), 0) : _vm._e(), _c('tr', {
      key: _vm.tableId + '-' + index + 'tr',
      staticClass: "j-tr-tr"
    }, _vm._l(_vm.title, function (item1, index1) {
      return _c('td', {
        key: index1,
        staticClass: "j-tr-tr-td",
        style: _vm.getStyle(item1)
      }, [!item1.readOnly ? _c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: item[item1.key],
          expression: "item[item1.key]"
        }],
        staticClass: "j-tr-tr-td-input",
        domProps: {
          "value": item[item1.key]
        },
        on: {
          "input": function input($event) {
            if ($event.target.composing) return;
            _vm.$set(item, item1.key, $event.target.value);
          }
        }
      }) : _c('span', {
        attrs: {
          "title": item[item1.key]
        }
      }, [item.children && index1 == 0 ? _c('span', {
        staticStyle: {
          "cursor": "pointer",
          "color": "skyblue",
          "font-weight": "bold"
        },
        on: {
          "click": function click($event) {
            return _vm.cellClick(index);
          }
        }
      }, [_vm._v("\n                        " + _vm._s(_vm.expendList.indexOf(_vm.tableId + "-" + index) == -1 ? ">" : "v") + "\n                    ")]) : _vm._e(), _vm._v("\n                    " + _vm._s(item[item1.key]) + "\n                ")])]);
    }), 0), _vm.expendList.indexOf(_vm.tableId + '-' + index) != -1 ? [item.children.type == 'text' ? _c('tr', {
      key: _vm.tableId + '-' + index + 'tr1',
      style: _vm.getPadding(1) + 'border-top: 1px solid skyblue;'
    }, [_c('td', {
      staticStyle: {
        "white-space": "break-spaces"
      },
      attrs: {
        "colspan": _vm.title.length
      }
    }, [_vm._v("\n                    " + _vm._s(item.children.text) + "\n                ")])]) : _c('j-tr', {
      key: _vm.tableId + '-' + index + 'jtr',
      attrs: {
        "tableId": _vm.tableId + '-' + index,
        "tableData": item.children.data,
        "title": item.children.title
      }
    })] : _vm._e()];
  })], 2);
};
var JTrvue_type_template_id_9260af16_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JTable/src/JTr.vue?vue&type=template&id=9260af16&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JTable/src/JTr.vue?vue&type=script&lang=js&














function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ var JTrvue_type_script_lang_js_ = ({
  name: "JTr",
  props: {
    tableId: {
      type: String,
      default: "1"
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    title: {
      //表格头
      type: Array,
      default: function _default() {
        return [];
      }
    },
    tableData: {
      //表格数据
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      expendList: []
    };
  },
  methods: {
    getPadding: function getPadding() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var ind = this.tableId.split("-").length - 1 + n;
      return "padding-left:" + 0.4 * ind + "rem;";
    },
    getShow: function getShow(index) {
      var flag = this.tableId + "-" + index;
      return flag; //this.expendList.indexOf(flag) != -1;
    },
    cellClick: function cellClick(index) {
      var flag = this.tableId + "-" + index;
      var ind = this.expendList.indexOf(flag);
      // console.log(flag, ind, this.expendList);
      if (ind == -1) {
        this.expendList.push(flag);
      } else {
        this.expendList.splice(ind, 1);
      }
    },
    //指定列排序
    sortByKey: function sortByKey(key, ind) {
      var tableData = this.tableData;
      var title = this.title;
      // console.log(key,title[ind]);
      if (title[ind].sortWay == "desc") {
        tableData = tableData.sort(function (a, b) {
          return b[key].localeCompare(a[key]);
        });
        title[ind].sortWay = "asc";
      } else {
        tableData = tableData.sort(function (a, b) {
          return a[key].localeCompare(b[key]);
        });
        title[ind].sortWay = "desc";
      }
    },
    //获取当前排序方式
    getSortWay: function getSortWay(item) {
      if (item.sortWay == "desc") {
        return "降序";
      }
      return "升序";
    },
    initTitle: function initTitle() {
      var title = this.title;
      if (title.length === 0) {
        this.showTitle = false;
        var key = Object.keys(this.tableData[0]);
        var width = 1 / key.length * 100;
        width = width.toFixed(2) + "vw";
        for (var k in this.tableData[0]) {
          var obj = {
            title: k,
            //展示列名
            key: k,
            //字段名
            type: "text",
            // 列类型
            readOnly: "true",
            //是否只读
            width: width,
            //列宽度
            columnStyle: "",
            // 列样式
            fixed: false,
            //是否固定
            sort: false,
            // 是否支持排序
            sortWay: "asc" //asc:升序,desc:降序
          };

          title.push(obj);
        }
      }
      this.title = title;
    },
    //初始化表格
    initTable: function initTable() {
      var th = document.getElementsByClassName("j-table-tr-th");
      var title = this.title;
      // console.log("initTable", th, title);
      for (var i = 0; i < title.length; i++) {
        if (title[i].width) {
          th[i].style.maxWidth = title[i].width;
          th[i].style.width = title[i].width;
        } else {
          // th[i].style.width = title[i].width;
        }
        if (title[i].columnStyle) {
          var style = title[i].columnStyle.split(";");
          // console.log('style',style);
          var _iterator = _createForOfIteratorHelper(style),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              if (item == "") break;
              item = item.split(":");
              // console.log('item',_toLittleCamel(item[0]),item[1]);
              th[i].style[_toLittleCamel(item[0])] = item[1];
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {}
      }
    },
    //转化columnStyle的格式
    getStyle: function getStyle(item1) {
      var style = item1.columnStyle.split(";");
      var res = "";
      if (item1.width != "") {
        res = "max-width:" + item1.width + ";";
        res += "width:" + item1.width + ";";
      }
      var _iterator2 = _createForOfIteratorHelper(style),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          if (item == "") break;
          item = item.split(":");
          res += camelTo_(item[0]) + ":" + item[1] + ";";
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return res;
    }
  },
  mounted: function mounted() {
    this.initTitle();
    this.initTable();
  }
});
// CONCATENATED MODULE: ./packages/JTable/src/JTr.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JTrvue_type_script_lang_js_ = (JTrvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JTable/src/JTr.vue?vue&type=style&index=0&id=9260af16&prod&lang=less&scoped=true&
var JTrvue_type_style_index_0_id_9260af16_prod_lang_less_scoped_true_ = __webpack_require__("9f5f");

// CONCATENATED MODULE: ./packages/JTable/src/JTr.vue






/* normalize component */

var JTr_component = normalizeComponent(
  src_JTrvue_type_script_lang_js_,
  JTrvue_type_template_id_9260af16_scoped_true_render,
  JTrvue_type_template_id_9260af16_scoped_true_staticRenderFns,
  false,
  null,
  "9260af16",
  null
  
)

/* harmony default export */ var JTr = (JTr_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JTable/src/JTable.vue?vue&type=script&lang=js&










function JTablevue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = JTablevue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function JTablevue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return JTablevue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return JTablevue_type_script_lang_js_arrayLikeToArray(o, minLen); }
function JTablevue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ var JTablevue_type_script_lang_js_ = ({
  name: "JTable",
  components: {
    JTr: JTr
  },
  props: {
    tableId: {
      type: String,
      default: "1"
    },
    id: {
      type: String,
      default: "t"
    },
    title: {
      //表格头
      type: Array,
      default: function _default() {
        return [{
          title: "",
          //展示列名
          key: "",
          //字段名
          type: "",
          // 列类型
          readOnly: "true",
          //是否只读
          width: "",
          //列宽度
          columnStyle: "",
          // 列样式
          fixed: false,
          //是否固定
          sort: false,
          // 是否支持排序
          sortWay: "asc" //asc:升序,desc:降序
        }];
      }
    },

    tableData: {
      //表格数据
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    //指定列排序
    sortByKey: function sortByKey(key, ind) {
      var tableData = this.tableData;
      var title = this.title;
      // console.log(key,title[ind]);
      if (title[ind].sortWay == "desc") {
        tableData = tableData.sort(function (a, b) {
          return b[key].localeCompare(a[key]);
        });
        title[ind].sortWay = "asc";
      } else {
        tableData = tableData.sort(function (a, b) {
          return a[key].localeCompare(b[key]);
        });
        title[ind].sortWay = "desc";
      }
      // console.log(tableData);
    },
    //获取当前排序方式
    getSortWay: function getSortWay(item) {
      if (item.sortWay == "desc") {
        return "降序";
      }
      return "升序";
    },
    //初始化表格
    initTable: function initTable() {
      var title = this.title;
      var t = document.getElementById(this.tableId);
      var th = t.getElementsByClassName("j-table-tr-th");
      // console.log(this.id, th);
      // console.log("initTable", th, title);
      for (var i = 0; i < title.length; i++) {
        if (title[i].width) {
          th[i].style.maxWidth = title[i].width;
          th[i].style.width = title[i].width;
        } else {
          // th[i].style.width = title[i].width;
        }
        if (title[i].columnStyle) {
          var style = title[i].columnStyle.split(";");
          // console.log('style',style);
          var _iterator = JTablevue_type_script_lang_js_createForOfIteratorHelper(style),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              if (item == "") break;
              item = item.split(":");
              // console.log('item',_toLittleCamel(item[0]),item[1]);
              th[i].style[_toLittleCamel(item[0])] = item[1];
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {}
      }
    },
    //转化columnStyle的格式
    getStyle: function getStyle(item1) {
      var style = item1.columnStyle.split(";");
      var res = "";
      if (item1.width != "") {
        res = "max-width:" + item1.width + ";";
        res += "width:" + item1.width + ";";
      }
      var _iterator2 = JTablevue_type_script_lang_js_createForOfIteratorHelper(style),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          if (item == "") break;
          item = item.split(":");
          res += camelTo_(item[0]) + ":" + item[1] + ";";
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return res;
    }
  },
  mounted: function mounted() {
    this.initTable();
  }
});
// CONCATENATED MODULE: ./packages/JTable/src/JTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JTablevue_type_script_lang_js_ = (JTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JTable/src/JTable.vue?vue&type=style&index=0&id=017a7698&prod&lang=less&scoped=true&
var JTablevue_type_style_index_0_id_017a7698_prod_lang_less_scoped_true_ = __webpack_require__("4723");

// CONCATENATED MODULE: ./packages/JTable/src/JTable.vue






/* normalize component */

var JTable_component = normalizeComponent(
  src_JTablevue_type_script_lang_js_,
  JTablevue_type_template_id_017a7698_scoped_true_render,
  JTablevue_type_template_id_017a7698_scoped_true_staticRenderFns,
  false,
  null,
  "017a7698",
  null
  
)

/* harmony default export */ var JTable = (JTable_component.exports);
// CONCATENATED MODULE: ./packages/JTable/index.js


JTable.install = function (Vue) {
  return Vue.component(JTable.name, JTable);
}; //注册组件

/* harmony default export */ var packages_JTable = (JTable);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JCanvasBroad/src/JCanvasBroad.vue?vue&type=template&id=f3415862&scoped=true&
var JCanvasBroadvue_type_template_id_f3415862_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "canvas-broad"
    }
  }, [_c('canvas', {
    attrs: {
      "id": "canvas",
      "width": _vm.canvasWidth,
      "height": _vm.canvasHeight
    }
  }, [_vm._v("浏览器不支持canvas")]), _vm.toolsTabList ? _c('j-tab-bar', {
    attrs: {
      "tabList": _vm.tabList,
      "showTab": _vm.showTab
    },
    scopedSlots: _vm._u([{
      key: "back-ground-color",
      fn: function fn() {
        return [_c('div', {
          staticClass: "section"
        }, [_c('span', {
          staticClass: "info"
        }, [_vm._v("设置背景颜色：")]), _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.brackGroudColor,
            expression: "brackGroudColor"
          }],
          staticClass: "btn input-color",
          attrs: {
            "type": "color"
          },
          domProps: {
            "value": _vm.brackGroudColor
          },
          on: {
            "input": function input($event) {
              if ($event.target.composing) return;
              _vm.brackGroudColor = $event.target.value;
            }
          }
        })])];
      },
      proxy: true
    }, {
      key: "pen-color",
      fn: function fn() {
        return [_c('div', {
          staticClass: "section"
        }, [_c('span', {
          staticClass: "info"
        }, [_vm._v("选择画笔颜色：")]), _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.penColor,
            expression: "penColor"
          }],
          staticClass: "btn input-color",
          attrs: {
            "type": "color"
          },
          domProps: {
            "value": _vm.penColor
          },
          on: {
            "input": function input($event) {
              if ($event.target.composing) return;
              _vm.penColor = $event.target.value;
            }
          }
        })])];
      },
      proxy: true
    }, {
      key: "eraser",
      fn: function fn() {
        return [_c('div', {
          staticClass: "section"
        }, [_c('span', {
          staticClass: "info"
        }, [_vm._v("选择橡皮擦：")]), _c('button', {
          staticClass: "btn colorBtn",
          style: 'background-color:' + _vm.brackGroudColor + ';',
          on: {
            "click": function click($event) {
              return _vm.setPenColor();
            }
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.brackGroudColor) + "\n                ")])]), _c('div', {
          staticClass: "section"
        }, [_c('button', {
          staticClass: "btn",
          on: {
            "click": function click($event) {
              return _vm.setBackGround();
            }
          }
        }, [_vm._v("\n                    清空画布\n                ")])])];
      },
      proxy: true
    }, {
      key: "pen-size",
      fn: function fn() {
        return [_c('div', {
          staticClass: "section"
        }, [_c('span', {
          staticClass: "info"
        }, [_vm._v("选择画笔大小：")]), _c('progress', {
          staticStyle: {
            "cursor": "pointer"
          },
          attrs: {
            "id": "progress",
            "max": "1",
            "title": _vm.progressValue * 100 + '%'
          },
          domProps: {
            "value": _vm.progressValue
          },
          on: {
            "click": _vm.setPenWidth
          }
        }), _c('span', {
          staticStyle: {
            "margin-left": "0.3125rem"
          }
        }, [_vm._v(_vm._s(20 * _vm.progressValue) + "px")])])];
      },
      proxy: true
    }, {
      key: "export",
      fn: function fn() {
        return [_c('div', {
          staticClass: "section"
        }, [_c('span', {
          staticClass: "info"
        }, [_vm._v("输出画板内容到下面的图片：")]), _c('button', {
          staticClass: "btn",
          on: {
            "click": function click($event) {
              return _vm.createImage();
            }
          }
        }, [_vm._v("EXPORT")])]), _c('img', {
          attrs: {
            "id": "image_png"
          }
        })];
      },
      proxy: true
    }], null, false, 832973881)
  }) : _vm._e(), !_vm.toolsTabList ? [_c('div', {
    staticClass: "section"
  }, [_c('button', {
    staticClass: "btn",
    on: {
      "click": function click($event) {
        return _vm.setBackGround();
      }
    }
  }, [_vm._v("清空画布")])]), _c('div', {
    staticClass: "section"
  }, [_c('span', {
    staticClass: "info"
  }, [_vm._v("选择画笔颜色：")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.penColor,
      expression: "penColor"
    }],
    staticClass: "input-color",
    attrs: {
      "type": "color"
    },
    domProps: {
      "value": _vm.penColor
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.penColor = $event.target.value;
      }
    }
  })]), _c('div', {
    staticClass: "section"
  }, [_c('span', {
    staticClass: "info"
  }, [_vm._v("设置背景颜色：")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.brackGroudColor,
      expression: "brackGroudColor"
    }],
    staticClass: "input-color",
    attrs: {
      "type": "color"
    },
    domProps: {
      "value": _vm.brackGroudColor
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.brackGroudColor = $event.target.value;
      }
    }
  })]), _c('div', {
    staticClass: "section"
  }, [_c('span', {
    staticClass: "info"
  }, [_vm._v("选择橡皮擦：")]), _c('button', {
    staticClass: "btn colorBtn",
    style: 'background-color:' + _vm.brackGroudColor + ';',
    on: {
      "click": function click($event) {
        return _vm.setPenColor();
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.brackGroudColor) + "\n            ")])]), _c('div', {
    staticClass: "section"
  }, [_c('span', {
    staticClass: "info"
  }, [_vm._v("选择画笔大小：")]), _c('progress', {
    staticStyle: {
      "cursor": "pointer"
    },
    attrs: {
      "id": "progress",
      "max": "1",
      "title": _vm.progressValue * 100 + '%'
    },
    domProps: {
      "value": _vm.progressValue
    },
    on: {
      "click": _vm.setPenWidth
    }
  }), _c('span', {
    staticStyle: {
      "margin-left": "0.3125rem"
    }
  }, [_vm._v(_vm._s(20 * _vm.progressValue) + "px")])]), _c('div', {
    staticClass: "section"
  }, [_c('span', {
    staticClass: "info"
  }, [_vm._v("输出画板内容到下面的图片：")]), _c('button', {
    staticClass: "btn",
    on: {
      "click": function click($event) {
        return _vm.createImage();
      }
    }
  }, [_vm._v("EXPORT")])]), _c('img', {
    attrs: {
      "id": "image_png"
    }
  })] : _vm._e()], 2);
};
var JCanvasBroadvue_type_template_id_f3415862_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JCanvasBroad/src/JCanvasBroad.vue?vue&type=template&id=f3415862&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("e680");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/pagesTools/JTabBar.vue?vue&type=template&id=239cf785&scoped=true&
var JTabBarvue_type_template_id_239cf785_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "j-tab-bar"
  }, [_c('div', {
    staticClass: "bar-items"
  }, _vm._l(_vm.tabList, function (item, index) {
    return _c('div', {
      key: item.id,
      class: _vm.getBarClass(index, 'bar-item'),
      attrs: {
        "title": item.label
      },
      on: {
        "click": function click($event) {
          return _vm.barClick(index);
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.label) + "\n        ")]);
  }), 0), _vm._l(_vm.tabList, function (item, index) {
    return _c('div', {
      key: item.id
    }, [item.id == _vm.tabList[_vm.showTab].id ? _vm._t(item.id) : _vm._e()], 2);
  })], 2);
};
var JTabBarvue_type_template_id_239cf785_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/pagesTools/JTabBar.vue?vue&type=template&id=239cf785&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/pagesTools/JTabBar.vue?vue&type=script&lang=js&

/* harmony default export */ var JTabBarvue_type_script_lang_js_ = ({
  name: "JTabBar",
  props: {
    tabList: {
      type: Array,
      default: [{
        label: "tab",
        id: "tab"
      }, {
        label: "tab1",
        id: "tab1"
      }]
    },
    defaultShowTab: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      showTab: 0
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      this.showTab = this.defaultShowTab;
    },
    barClick: function barClick(index) {
      this.showTab = index;
      this.$emit("clickTab", index);
    },
    getBarClass: function getBarClass(index) {
      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var res = "";
      if (index == this.showTab) {
        res += "active-tab";
      }
      return res + " " + val;
    }
  }
});
// CONCATENATED MODULE: ./packages/pagesTools/JTabBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesTools_JTabBarvue_type_script_lang_js_ = (JTabBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/pagesTools/JTabBar.vue?vue&type=style&index=0&id=239cf785&prod&lang=less&scoped=scoped&
var JTabBarvue_type_style_index_0_id_239cf785_prod_lang_less_scoped_scoped_ = __webpack_require__("5271");

// CONCATENATED MODULE: ./packages/pagesTools/JTabBar.vue






/* normalize component */

var JTabBar_component = normalizeComponent(
  pagesTools_JTabBarvue_type_script_lang_js_,
  JTabBarvue_type_template_id_239cf785_scoped_true_render,
  JTabBarvue_type_template_id_239cf785_scoped_true_staticRenderFns,
  false,
  null,
  "239cf785",
  null
  
)

/* harmony default export */ var JTabBar = (JTabBar_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JCanvasBroad/src/JCanvasBroad.vue?vue&type=script&lang=js&


/* harmony default export */ var JCanvasBroadvue_type_script_lang_js_ = ({
  name: "JCanvasBroad",
  props: {
    height: {
      type: Number,
      default: -1
    },
    width: {
      type: Number,
      default: -1
    },
    defaultPenColor: {
      type: String,
      default: "#000000"
    },
    defaultPenSize: {
      type: Number,
      default: 4
    },
    defaultBackGroundColor: {
      type: String,
      default: "#ffffff"
    },
    toolsTabList: {
      type: Boolean,
      default: false
    }
  },
  components: {
    JTabBar: JTabBar
  },
  watch: {
    brackGroudColor: {
      handler: function handler(newVal, oldVal) {
        this.setBackGround();
      }
    }
  },
  data: function data() {
    return {
      canvasWidth: "",
      canvasHeight: "",
      penColor: "#000000",
      penWidth: 4,
      penClick: false,
      startAxisX: 0,
      startAxisY: 0,
      brackGroudColor: "#ffffff",
      progressValue: 0.2,
      tabList: [{
        label: "背景颜色",
        id: "back-ground-color"
      }, {
        label: "画笔颜色",
        id: "pen-color"
      }, {
        label: "橡皮擦",
        id: "eraser"
      }, {
        label: "画笔大小",
        id: "pen-size"
      }, {
        label: "导出图片",
        id: "export"
      }],
      showTab: 0
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.init();
  },
  methods: {
    //页面初始化
    init: function init() {
      var height = this.height;
      var width = this.width;
      if (width == -1) {
        var cbw = document.getElementById("canvas-broad");
        width = cbw.offsetWidth * 0.9;
        height = cbw.offsetHeight * 0.6;
        // this.canvasWidth = width;
        // this.canvasHeigth = height;
      }

      this.canvasWidth = width;
      this.canvasHeight = height;
      this.penColor = this.defaultPenColor;
      this.brackGroudColor = this.defaultBackGroundColor;
      this.penWidth = this.defaultPenSize;
      var canvas = document.getElementById("canvas"); //获取canvas标签
      var ctx = canvas.getContext("2d"); //创建 context 对象
      ctx.fillStyle = this.brackGroudColor; //画布背景色
      ctx.fillRect(0, 0, width, height); //在画布上绘制 width * height 的矩形，从左上角开始 (0,0)
      canvas.addEventListener("mousemove", this.drawing); //鼠标移动事件
      canvas.addEventListener("mousedown", this.penDown); //鼠标按下事件
      canvas.addEventListener("mouseup", this.penUp); //鼠标弹起事件
    },
    getWidthSelect: function getWidthSelect(width) {
      if (width == this.penWidth) {
        return "btn bg penBtn fw";
      }
      return "btn bg penBtn";
    },
    getColorSelect: function getColorSelect(color) {
      if (color == this.penColor) {
        return "btn colorBtn fw";
      }
      return "btn colorBtn";
    },
    setBackGround: function setBackGround() {
      var canvas = document.getElementById("canvas"); //获取canvas标签
      var ctx = canvas.getContext("2d"); //创建 context 对象
      ctx.fillStyle = this.brackGroudColor; //画布背景色
      ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight); //在画布上绘制 600x300 的矩形，从左上角开始 (0,0)
    },
    setPenWidth: function setPenWidth(event) {
      var progress = document.getElementById("progress");
      this.progressValue = (event.pageX - progress.offsetLeft) / progress.offsetWidth;
      this.penWidth = 20 * this.progressValue;
    },
    //设置画笔颜色
    setPenColor: function setPenColor() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      if (color == "") this.penColor = this.brackGroudColor;else this.penColor = color;
    },
    penDown: function penDown(event) {
      this.penClick = true;
      this.startAxisX = event.pageX;
      this.startAxisY = event.pageY;
    },
    penUp: function penUp() {
      this.penClick = false;
    },
    drawing: function drawing(event) {
      if (!this.penClick) return;
      var canvas = document.getElementById("canvas"); //获取canvas标签
      var ctx = canvas.getContext("2d"); //创建 contextconst canvas = document.getElementById('canvas');  对象
      var stopAxisX = event.pageX;
      var stopAxisY = event.pageY;
      var left = document.getElementById("leftMenu");
      var lw = left && left.offsetWidth ? (left.offsetWidth || 0) / 2 : 0;
      ctx.beginPath();
      //由于整体设置了水平居中，因此需要做特殊处理：window.screen.availWidth/2 -300
      var wsaW = window.screen.availWidth;
      var cl = canvas.offsetLeft;
      var ct = canvas.offsetTop;
      ctx.moveTo(this.startAxisX - cl, this.startAxisY - ct); //moveTo(x,y) 定义线条开始坐标
      ctx.lineTo(stopAxisX - cl, stopAxisY - ct); //lineTo(x,y) 定义线条结束坐标
      ctx.strokeStyle = this.penColor;
      ctx.lineWidth = this.penWidth;
      ctx.lineCap = "round";
      ctx.stroke(); // stroke() 方法来绘制线条
      this.startAxisX = stopAxisX;
      this.startAxisY = stopAxisY;
    },
    createImage: function createImage() {
      var canvas = document.getElementById("canvas"); //获取canvas标签
      var img_png_src = canvas.toDataURL("image/png"); //将画板保存为图片格式的函数
      // console.log('=====',img_png_src);//data:image/png;base64,iVBOR.....
      document.getElementById("image_png").src = img_png_src;
    }
  }
});
// CONCATENATED MODULE: ./packages/JCanvasBroad/src/JCanvasBroad.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JCanvasBroadvue_type_script_lang_js_ = (JCanvasBroadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JCanvasBroad/src/JCanvasBroad.vue?vue&type=style&index=0&id=f3415862&prod&lang=less&scoped=scoped&
var JCanvasBroadvue_type_style_index_0_id_f3415862_prod_lang_less_scoped_scoped_ = __webpack_require__("e640");

// CONCATENATED MODULE: ./packages/JCanvasBroad/src/JCanvasBroad.vue






/* normalize component */

var JCanvasBroad_component = normalizeComponent(
  src_JCanvasBroadvue_type_script_lang_js_,
  JCanvasBroadvue_type_template_id_f3415862_scoped_true_render,
  JCanvasBroadvue_type_template_id_f3415862_scoped_true_staticRenderFns,
  false,
  null,
  "f3415862",
  null
  
)

/* harmony default export */ var JCanvasBroad = (JCanvasBroad_component.exports);
// CONCATENATED MODULE: ./packages/JCanvasBroad/index.js


JCanvasBroad.install = function (Vue) {
  return Vue.component(JCanvasBroad.name, JCanvasBroad);
}; //注册组件

/* harmony default export */ var packages_JCanvasBroad = (JCanvasBroad);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JCodeHeightLight/src/JCodeHeightLight.vue?vue&type=template&id=99356d18&scoped=true&
var JCodeHeightLightvue_type_template_id_99356d18_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "code-height-light",
    attrs: {
      "id": "code-height-light"
    }
  }, [_c('input', {
    staticStyle: {
      "position": "absolute",
      "top": "0",
      "left": "0",
      "opacity": "0",
      "z-index": "-10"
    },
    attrs: {
      "id": "copy_content",
      "type": "text",
      "value": ""
    }
  }), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "content-head",
    attrs: {
      "icon": _vm.isCodeShow ? '∨' : '>'
    },
    on: {
      "click": function click($event) {
        return _vm.doShowCode();
      }
    }
  }, [_c('span', {
    staticClass: "content-head-text"
  }, [_vm._v("\n                " + _vm._s(_vm.isCodeShow ? "收起代码" : "查看代码") + "\n            ")])]), _c('div', {
    staticClass: "code-copy",
    on: {
      "click": function click($event) {
        return _vm.copyCode();
      }
    }
  }, [_vm._v("复制代码")]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isCodeShow,
      expression: "isCodeShow"
    }],
    staticClass: "content-body"
  }, [_c('pre', {
    staticClass: "content-code-html",
    attrs: {
      "id": "content-code-html"
    }
  }), _c('pre', {
    staticClass: "content-code",
    attrs: {
      "id": "content-code"
    }
  })])])]);
};
var JCodeHeightLightvue_type_template_id_99356d18_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JCodeHeightLight/src/JCodeHeightLight.vue?vue&type=template&id=99356d18&scoped=true&

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.20.1@@babel/runtime/helpers/esm/arrayLikeToArray.js
function arrayLikeToArray_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.20.1@@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray_arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.20.1@@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.20.1@@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function unsupportedIterableToArray_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray_arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.20.1@@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.20.1@@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || unsupportedIterableToArray_unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3269");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("d0f2");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("8dee");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JCodeHeightLight/src/JCodeHeightLight.vue?vue&type=script&lang=js&








/* harmony default export */ var JCodeHeightLightvue_type_script_lang_js_ = ({
  name: "JCodeHeightLight",
  //import引入的组件需要注入到对象中才能使用",
  components: {},
  props: {
    code: {
      type: String,
      default: ""
    },
    keyWords: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    color: {
      type: Object,
      default: function _default() {
        return {
          keyWord: "orange",
          varWord: "purple",
          tagWord: "#F9273F",
          strWord: "green",
          attrWord: "green",
          attrValue: "yellow",
          methodkeyWord: "#74759b",
          functionkeyWord: "#2c9678",
          note: "grey"
        };
      }
    }
  },
  data: function data() {
    //这里存放数据",
    return {
      icon: ">",
      isCodeShow: true,
      showCode: "",
      htmlCode: "",
      jsKeyWord: ["import", "from", "require", "let", "var", "const", "this", "true", "false", "case", "continue", "double", "for", "package", "try", "catch", "if", "while", "else", "false", "switch", "export", "return", "null", "break", "delete", "alert", "default", "console", "log", "error"],
      jsKeyObj: ["Array", "Date", "eval", "function", "hasOwnProperty", "Infinity", "isFinite", "isNaN", "isPrototypeOf", "length", "Math", "NaN", "name", "Number", "Object", "prototype", "String", "toString", "undefined", "valueOf"],
      methodKeyWord: ["setTimeout", "toString", "praseInt", "praseFloat"]
    };
  },
  //监听属性 类似于data概念",
  computed: {},
  //监控data中的数据变化",
  watch: {},
  //方法集合",
  methods: {
    doShowCode: function doShowCode() {
      if (this.isCodeShow) {
        this.isCodeShow = false;
        this.icon = ">";
      } else {
        this.isCodeShow = true;
        this.icon = "∨";
      }
    },
    copyCode: function copyCode() {
      //获取点击的值
      var clickContent = this.code;
      //获取要赋值的input的元素
      var inputElement = document.getElementById("copy_content");
      //给input框赋值
      inputElement.value = clickContent;
      //选中input框的内容
      inputElement.select();
      // 执行浏览器复制命令
      document.execCommand("Copy");
      //提示已复制
      alter("已复制");
    },
    getColor: function getColor(type, str) {
      var res = "";
      var color = this.color;
      res = '<span style="color :' + color[type] + '">' + str + "</span>";
      return res;
    },
    findTag: function findTag(text) {
      var l = [],
        r = [];
      var res = [];
      for (var i = 0; i < text.length; i++) {
        if (text[i] == "<") {
          if (text[i + 1] == "!") continue;
          if (text[i + 1] == "/") {
            var j = i + 2;
            while (text[j] != ">") {
              j++;
            }
            res.push(text.slice(l.pop(), j + 1));
          } else {
            l.push(i);
          }
        }
      }
      return res;
    },
    replaceDfs: function replaceDfs(tagReg, textCode) {
      var _this = this;
      var res = textCode.replace(tagReg, function (s1, s2, s3, s4, s5, s6, s7, s8, s9, s10) {
        var res = "";
        if (s4 == undefined) return "<span>" + s1 + "</span>";
        res += "<span><<span>" + _this.getColor("tagWord", s4) + " ";
        var text = s6.match(/>(.*)</);
        if (text && text.length > 1) {
          text = text[1];
        } else {
          text = "";
        }
        s6 = s6.split(/>.*<\//)[0].replace(/ *= */g, "=").split(" ");
        var num = 0;
        for (var i = 0; i < s6.length; i++) {
          if (s6[i] !== "") {
            num++;
            var t = s6[i].split("=");
            if (t.length == 2) {
              if (num > 2) res += "缩进符缩进符缩进符";
              res += _this.getColor("attrWord", t[0]);
              res += " = ";
              res += _this.getColor("attrValue", t[1]);
              if (i < s6.length - 1) res += " ";
            } else {
              t = s6[i].split(":");
              if (t.length == 2) {
                if (num > 2) res += "缩进符缩进符缩进符";
                res += _this.getColor("attrWord", t[0]);
                res += ":";
                res += _this.getColor("attrValue", t[1]);
                if (i < s6.length - 1) res += " ";
              }
            }
          }
        }
        res += "<span>>" + text + "<</span>/" + _this.getColor("tagWord", s4) + "<span>></span>";
        return res;
      });
      return res;
    },
    replaceKeyWord: function replaceKeyWord() {
      var colors = this.color;
      var contentCodeHtml = document.getElementById("content-code-html");
      var showCode = this.code;
      //html标签
      var htmlReg = /.*<(.|[\r\n])*>(.|[\r\n])*<\/.*>/g;
      var textCode = showCode.match(htmlReg);
      if (textCode != null) {
        textCode = textCode.join("\n").replace(/[\t]/g, "缩进符").replace(/[\n]/g, "换行符");
        var tagReg = /((<)([a-zA-Z](-*[a-zA-Z])+)(.*)(>))|((<\/)([a-zA-Z](-*[a-zA-Z])+)(>))/g;
        var t = this.findTag(textCode);
        for (var i = 0; i < t.length; i++) {
          textCode = textCode.replace(t[t.length - 1 - i], this.replaceDfs(tagReg, t[t.length - 1 - i]));
        }
        textCode = textCode.replace(/(<!--)(.*)(-->)/g, '<span style="color:' + colors.note + ';"><span><</span><span>!--</span>$2<span>--</span><span>></span>');
        textCode = textCode.replace(/空格符/g, "&nbsp;");
        textCode = textCode.replace(/换行符/g, "<br/>");
        textCode = textCode.replace(/缩进符/g, "&nbsp;&nbsp;");
        contentCodeHtml.innerHTML = textCode;
        showCode = showCode.replace(new RegExp(htmlReg, "g"), "");
      } else {
        contentCodeHtml.style.display = "none";
      }
      //字符串
      var regStr = "('|\")(.*)('|\")";
      showCode = showCode.replace(new RegExp(regStr, "g"), "<span style='color : " + colors.strWord + "'>$1$2$3</span>");
      //js关键字
      var keyWord = _toConsumableArray(this.jsKeyWord);
      keyWord = keyWord.concat(_toConsumableArray(this.jsKeyObj));
      for (var _i = 0; _i < keyWord.length; _i++) {
        var regKeyWord = "((([\\t|\\r|\\n| ])*(" + keyWord[_i] + "))( |,|\\.|\\(|;))";
        showCode = showCode.replace(new RegExp(regKeyWord, "g"), "<span style='color : " + colors.keyWord + "'>$2</span>$5");
      }
      //自定义关键字
      var keyWords = _toConsumableArray(this.keyWords);
      for (var _i2 = 0; _i2 < keyWords.length; _i2++) {
        var _regKeyWord = "(" + keyWords[_i2].value + ")";
        showCode = showCode.replace(new RegExp(_regKeyWord, "g"), "<span style='color : " + keyWords[_i2].color + " !important;'>$1</span>");
      }
      //js方法
      var functions = /([a-zA-Z0-9_]+)\([A-Za-z,0-9]*\)/g;
      var functionKeyWord = showCode.match(functions) || [];
      functionKeyWord = functionKeyWord.map(function (item) {
        return item.slice(0, item.indexOf("("));
      }).sort(function (a, b) {
        return b.length - a.length;
      });
      for (var _i3 = 0; _i3 < functionKeyWord.length; _i3++) {
        var regFunctionKeyWord = "(" + functionKeyWord[_i3] + ")";
        showCode = showCode.replace(new RegExp(regFunctionKeyWord, "g"), "<span style='color : " + colors.functionkeyWord + "'>$1</span>");
      }
      //内置方法
      var methodKeyWord = [].concat(methodKeyWord);
      for (var _i4 = 0; _i4 < methodKeyWord.length; _i4++) {
        var regMethodKeyWord = "(" + methodKeyWord[_i4] + ")";
        showCode = showCode.replace(new RegExp(regMethodKeyWord, "g"), "<span style='color : " + colors.methodkeyWord + "'>$1</span>");
      }
      //变量名
      var varReg = /([a-zA-Z]+):/g;
      showCode = showCode.replace(varReg, "<span style='color : " + colors.varWord + "'>$1</span>:");
      //注释
      showCode = showCode.replace(/(\/\/.*)|(\/\*.*([\r\n].*)*\*\/)/g, "<span style='color :" + colors.note + "'>$1$2</span>");
      this.showCode = showCode;
    }
  },
  //生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
  beforeCreate: function beforeCreate() {},
  //生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
  created: function created() {},
  //生命周期 - 挂载之前",html模板未渲染
  beforeMount: function beforeMount() {},
  //生命周期 - 挂载完成（可以访问DOM元素）",html模板已渲染
  mounted: function mounted() {
    var contentCode = document.getElementById("content-code");
    this.replaceKeyWord();
    contentCode.innerHTML = this.showCode;
  },
  //生命周期 - 更新之前",数据模型已更新,html模板未更新
  beforeUpdate: function beforeUpdate() {},
  //生命周期 - 更新之后",数据模型已更新,html模板已更新
  updated: function updated() {},
  //生命周期 - 销毁之前",
  beforeDestroy: function beforeDestroy() {},
  destroyed: function destroyed() {},
  //生命周期 - 销毁完成",
  //如果页面有keep-alive缓存功能，这个函数会触发",
  activated: function activated() {}
});
// CONCATENATED MODULE: ./packages/JCodeHeightLight/src/JCodeHeightLight.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JCodeHeightLightvue_type_script_lang_js_ = (JCodeHeightLightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JCodeHeightLight/src/JCodeHeightLight.vue?vue&type=style&index=0&id=99356d18&prod&lang=less&scoped=true&
var JCodeHeightLightvue_type_style_index_0_id_99356d18_prod_lang_less_scoped_true_ = __webpack_require__("8cef");

// CONCATENATED MODULE: ./packages/JCodeHeightLight/src/JCodeHeightLight.vue






/* normalize component */

var JCodeHeightLight_component = normalizeComponent(
  src_JCodeHeightLightvue_type_script_lang_js_,
  JCodeHeightLightvue_type_template_id_99356d18_scoped_true_render,
  JCodeHeightLightvue_type_template_id_99356d18_scoped_true_staticRenderFns,
  false,
  null,
  "99356d18",
  null
  
)

/* harmony default export */ var JCodeHeightLight = (JCodeHeightLight_component.exports);
// CONCATENATED MODULE: ./packages/JCodeHeightLight/index.js


JCodeHeightLight.install = function (Vue) {
  return Vue.component(JCodeHeightLight.name, JCodeHeightLight);
}; //注册组件

/* harmony default export */ var packages_JCodeHeightLight = (JCodeHeightLight);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JFlowChart/src/JFlowChart.vue?vue&type=template&id=c8ef8fe4&scoped=true&
var JFlowChartvue_type_template_id_c8ef8fe4_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flow-chart",
    attrs: {
      "id": "flow-chart"
    }
  }, [_c('div', {
    staticClass: "char-title"
  }, [_vm._v("\n        " + _vm._s(_vm.chartData.title) + "\n    ")]), _c('div', {
    staticStyle: {
      "position": "fixed",
      "left": "0px",
      "top": "0px",
      "visibility": "hidden"
    },
    attrs: {
      "id": "moveDiv"
    }
  }, [_vm.selectedItem.icon !== '' ? _c('img', {
    class: _vm.getClass('chart-content-item-icon', 'radius'),
    style: _vm.getIconStyle(),
    attrs: {
      "src": _vm.selectedItem.icon
    }
  }) : _vm._e(), _vm.selectedItem.icon == '' ? _c('div', {
    class: _vm.getClass('chart-content-item-icon', 'radius'),
    style: _vm.getIconStyle('text')
  }, [_vm._v("\n            " + _vm._s(_vm.selectedItem.text[0]) + "\n        ")]) : _vm._e(), _c('div', {
    staticClass: "chart-content-item-text"
  }, [_vm._v("\n            " + _vm._s(_vm.selectedItem.text) + "\n        ")])]), _c('div', {
    ref: "chartContent",
    staticClass: "chart-content",
    attrs: {
      "id": "chartContent"
    }
  }, _vm._l(_vm.chartDataList, function (dataList, index1) {
    return _c('div', {
      key: 'chartDataList-' + index1,
      staticClass: "chart-content-column",
      style: _vm.getColumnStyle(index1)
    }, _vm._l(dataList, function (item, index) {
      return _c('div', {
        key: 'dataList-' + index,
        staticClass: "chart-content-item",
        style: _vm.getItemStyle()
      }, [index == 0 && index1 % 2 == 1 && index1 < _vm.chartDataList.length - 1 ? _c('div', {
        staticClass: "chart-content-line",
        style: _vm.getLineStyle(index, index1, 'left')
      }) : _vm._e(), _c('div', {
        style: _vm.getItemStyle(item),
        attrs: {
          "id": item.id
        },
        on: {
          "mousedown": function mousedown($event) {
            return _vm.itemClick(index1, index, item.id, item);
          },
          "touchstart": function touchstart($event) {
            return _vm.itemClick(index1, index, item.id, item);
          }
        }
      }, [item.icon !== '' ? _c('img', {
        class: _vm.getClass('chart-content-item-icon', 'radius'),
        style: _vm.getIconStyle(),
        attrs: {
          "src": item.icon
        }
      }) : _vm._e(), item.icon == '' ? _c('div', {
        class: _vm.getClass('chart-content-item-icon', 'radius'),
        style: _vm.getIconStyle('text')
      }, [_vm._v("\n                        " + _vm._s(item.text[0]) + "\n                    ")]) : _vm._e(), _c('div', {
        staticClass: "chart-content-item-text"
      }, [_vm._v("\n                        " + _vm._s(item.text) + "\n                    ")])]), _c('div', {
        staticClass: "chart-content-line",
        style: _vm.getLineStyle(index, index1, 'right')
      })]);
    }), 0);
  }), 0)]);
};
var JFlowChartvue_type_template_id_c8ef8fe4_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JFlowChart/src/JFlowChart.vue?vue&type=template&id=c8ef8fe4&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JFlowChart/src/JFlowChart.vue?vue&type=script&lang=js&











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/* harmony default export */ var JFlowChartvue_type_script_lang_js_ = ({
  name: "JFlowChart",
  props: {
    chartData: {
      type: Object,
      default: {
        title: "",
        //标题
        dragAble: false,
        //是否可拖拽
        width: 0,
        //每个item的宽度
        data: [],
        radius: false //图标是否圆角
      }
    }
  },
  data: function data() {
    return {
      itemWidth: 0,
      itemNum: 0,
      chartDataList: [],
      vChartDataList: [],
      operateDom: null,
      operateDomNum: null,
      startX: "",
      startY: "",
      oldInd: null,
      selectedItem: {}
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.initPage();
  },
  methods: {
    initPage: function initPage() {
      this.vChartDataList = _toConsumableArray(this.chartData.data);
      //是否可拖拽
      if (this.chartData.dragAble) {
        document.getElementById("flow-chart").addEventListener("mouseup", this.handleMouseup);
        document.getElementById("flow-chart").addEventListener("mouseover", this.handleMouseover);
        document.getElementById("flow-chart").addEventListener("touchend", this.handleMouseup);
        document.getElementById("flow-chart").addEventListener("touchmove", this.handleMouseover);
      }
      this.preventEvent();
      this.initStyle();
      this.initData();
      window.onresize = this.onReSize;
    },
    //阻止默认事件
    preventEvent: function preventEvent() {
      document.getElementById("flow-chart").ondragstart = function () {
        return false;
      };
      document.getElementById("flow-chart").onselectstart = function () {
        return false;
      };
    },
    //监听页面尺寸变化
    onReSize: function onReSize(event) {
      this.initData();
      this.initStyle();
    },
    //鼠标抬起时
    handleMouseup: function handleMouseup(event) {
      var chartContent = document.getElementById("chartContent");
      var dom = document.getElementById("moveDiv");
      var w = chartContent.offsetWidth,
        h = chartContent.offsetHeight,
        l = chartContent.offsetLeft,
        t = chartContent.offsetTop;
      var x = event.pageX,
        y = event.pageY;
      dom.style.visibility = "hidden";
      // if(x > l && x < (l + w) && y > t && y < (t + h)){

      // }else{

      // }
      if (this.vChartDataList[this.oldInd]) this.vChartDataList[this.oldInd].opacity = 1;
      chartContent.style.border = "none";
      this.operateDom = null;
      this.operateDomNum = null;
      this.oldInd = null;
    },
    handleMouseover: function handleMouseover(event) {
      if (this.vChartDataList.length < this.chartData.data.length) {
        this.vChartDataList.unshift(_objectSpread({}, this.chartData.data[0]));
      }
      if (this.operateDom != null) {
        var w = this.operateDom.offsetWidth,
          h = this.operateDom.offsetHeight;
        var x = event.pageX,
          y = event.pageY;
        this.operateDom.style.position = "fixed";
        this.operateDom.style.opacity = "0.5";
        this.operateDom.style.left = x - w / 2 - window.scrollX + "px";
        this.operateDom.style.top = y - h / 2 - window.scrollY + "px";
        var _this$getItemCoords = this.getItemCoords(x, y),
          tx = _this$getItemCoords.tx,
          ty = _this$getItemCoords.ty;
        var oldInd = this.oldInd;
        if (oldInd >= 0) {
          this.vChartDataList.splice(oldInd, 1);
          this.initData();
        }
        var nty = parseInt(ty) % 2 == 0 ? parseInt(tx) : this.itemNum - parseInt(tx);
        nty = Math.min(nty, this.itemNum);
        nty = Math.max(nty, 0);
        oldInd = parseInt(ty) * this.itemNum + nty;
        oldInd = Math.min(this.chartData.data.length - 1, oldInd);
        oldInd = Math.max(0, oldInd);
        this.oldInd = oldInd;
        if (oldInd < 0) return;
        this.vChartDataList.splice(oldInd, 0, _objectSpread({}, this.selectedItem));
        this.initData();
      }
    },
    //获取当前移动到的坐标
    getItemCoords: function getItemCoords(x, y) {
      var d = document.getElementById("chartContent");
      var left = d.offsetLeft;
      var top = d.offsetTop;
      x = x - left, y = y - top;
      var itemNum = this.itemNum;
      var w = d.offsetWidth;
      var h = d.offsetHeight;
      var moveDiv = document.getElementById("moveDiv");
      var th = moveDiv.offsetHeight;
      w = Math.ceil(w / itemNum);
      x = Math.floor(x / w), y = Math.floor(y / th);
      return {
        tx: x,
        ty: y
      };
    },
    //item点击事件
    itemClick: function itemClick(index1, index, id, item) {
      if (!this.chartData.dragAble) return;
      this.selectedItem = _objectSpread({}, item);
      this.selectedItem.opacity = "0.5";
      var num = parseInt(id.split("-")[2]);
      var dom = document.getElementById("moveDiv");
      var dom1 = document.getElementById(id); //展示的节点
      var d = document.getElementById("chartContent");
      d.style.border = "dashed 1px blue";
      // this.vChartDataList.splice(num,1);
      this.oldInd = num;
      this.initData();
      this.operateDom = dom;
      this.operateDomNum = num;
      this.startX = dom1.offsetLeft;
      this.startY = dom1.offsetTop;
      dom.style.visibility = "inherit";
      dom.style.position = "fixed";
      dom.style.left = dom1.offsetLeft;
      dom.style.top = dom1.offsetTop;
      // console.log(index1,index,num,this.vChartDataList[num].text,dom);
    },
    //初始化样式变量
    initStyle: function initStyle() {
      var chartContent = this.$refs.chartContent;
      var width = chartContent.offsetWidth - 40;
      var height = chartContent.offsetHeight - 40;
      var itemWidth = Math.max(20, Math.floor(width / 7));
      if (this.chartData.width) {
        itemWidth = this.chartData.width;
      }
      this.itemWidth = itemWidth;
      this.itemNum = Math.floor(width / (itemWidth + itemWidth / 5));
      // console.log('initStyle',width,height,itemWidth);
    },
    //初始化数据
    initData: function initData() {
      var data = this.vChartDataList;
      var res = [],
        flag = true,
        temp = [];
      for (var i = 1; i <= data.length; i++) {
        data[i - 1].id = "item" + "-" + res.length + "-" + (i - 1);
        if (flag) temp.push(data[i - 1]);else temp.unshift(data[i - 1]);
        if (i % this.itemNum == 0 || i == data.length) {
          res.push(_toConsumableArray(temp));
          temp = [];
          flag = !flag;
        }
      }
      this.chartDataList = res;
      // console.log('initData',res);
    },
    //重组class
    getClass: function getClass(res, str) {
      if (this.chartData[str]) res += " " + str;
      return res;
    },
    //重组行样式
    getColumnStyle: function getColumnStyle(index) {
      var res = {};
      // res['margin-left'] = this.itemWidth / 5 + 'px;';
      if (index < this.chartDataList.lenth - 1 || index % 2 == 0) return this.styleConcat(res);
      res["margin-left"] = "auto";
      res["margin-right"] = -this.itemWidth / 5 + "px;";
      return this.styleConcat(res);
    },
    //重组每个item的样式
    getItemStyle: function getItemStyle() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var res = {};
      if (item != "") {
        if (item.opacity) {
          res.opacity = item.opacity;
        }
        return this.styleConcat(res);
      }
      res.width = this.itemWidth + "px;";
      res["margin-right"] = this.itemWidth / 5 + "px;";
      // res.height = this.itemWidth + 'px';
      return this.styleConcat(res);
    },
    //重组每个item的icon的样式
    getIconStyle: function getIconStyle(str) {
      var res = {};
      res.width = this.itemWidth - 5 + "px;";
      res.height = this.itemWidth - 5 + "px";
      if (str == "text") {
        res["line-height"] = this.itemWidth - 5 + "px";
        res["font-size"] = "large";
        res["border"] = "1px solid blue";
        res["background-color"] = "skyblue";
      }
      return this.styleConcat(res);
    },
    //获取连接线样式
    getLineStyle: function getLineStyle(index, index1, flag) {
      if (index1 == this.chartDataList.length - 1 && index == this.chartDataList[index1].length - 1) return "";
      var res = {};
      res["border-top"] = "1px solid black";
      res.width = this.itemWidth / 3 + "px";
      if (flag == "right") res["margin-right"] = -this.itemWidth / 3 + "px;";else {
        res["margin-left"] = -this.itemWidth / 3 + "px;";
        res["border-left"] = "1px solid black";
      }
      res["margin-top"] = this.itemWidth / 2 + "px;";
      if (index == this.chartDataList[0].length - 1 && index1 < this.chartDataList.length - 1) {
        if (index1 % 2 == 0) {
          res["border-right"] = "1px solid black";
        } else {}
      }
      if (index1 % 2 == 1) {
        if (index == this.chartDataList[index1].length - 1) return "";else {}
      }
      return this.styleConcat(res);
    },
    //json变量转换为style字符串
    styleConcat: function styleConcat(obj) {
      var res = "";
      for (var k in obj) {
        res += k + ":" + obj[k] + ";";
      }
      return res;
    }
  }
});
// CONCATENATED MODULE: ./packages/JFlowChart/src/JFlowChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JFlowChartvue_type_script_lang_js_ = (JFlowChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JFlowChart/src/JFlowChart.vue?vue&type=style&index=0&id=c8ef8fe4&prod&lang=less&scoped=true&
var JFlowChartvue_type_style_index_0_id_c8ef8fe4_prod_lang_less_scoped_true_ = __webpack_require__("a89b");

// CONCATENATED MODULE: ./packages/JFlowChart/src/JFlowChart.vue






/* normalize component */

var JFlowChart_component = normalizeComponent(
  src_JFlowChartvue_type_script_lang_js_,
  JFlowChartvue_type_template_id_c8ef8fe4_scoped_true_render,
  JFlowChartvue_type_template_id_c8ef8fe4_scoped_true_staticRenderFns,
  false,
  null,
  "c8ef8fe4",
  null
  
)

/* harmony default export */ var JFlowChart = (JFlowChart_component.exports);
// CONCATENATED MODULE: ./packages/JFlowChart/index.js


JFlowChart.install = function (Vue) {
  return Vue.component(JFlowChart.name, JFlowChart);
}; //注册组件

/* harmony default export */ var packages_JFlowChart = (JFlowChart);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JElectronicNumber/src/JElectronicNumber.vue?vue&type=template&id=9ac68a34&scoped=true&
var JElectronicNumbervue_type_template_id_9ac68a34_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "numbers-style",
    attrs: {
      "id": "electronic-number"
    }
  }, _vm._l(_vm.numbers, function (number, numberIndex) {
    return _c('div', {
      key: numberIndex,
      staticClass: "number-style"
    }, _vm._l(_vm.getShowNum(number), function (column, columnIndex) {
      return _c('div', {
        key: columnIndex,
        staticClass: "j-column"
      }, _vm._l(column, function (row, rowIndex) {
        return _c('div', {
          key: rowIndex,
          staticClass: "cell",
          style: _vm.rowStyle(row)
        });
      }), 0);
    }), 0);
  }), 0);
};
var JElectronicNumbervue_type_template_id_9ac68a34_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JElectronicNumber/src/JElectronicNumber.vue?vue&type=template&id=9ac68a34&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JElectronicNumber/src/JElectronicNumber.vue?vue&type=script&lang=js&


/* harmony default export */ var JElectronicNumbervue_type_script_lang_js_ = ({
  name: "JElectronicNumber",
  props: {
    numbers: {
      type: Array,
      default: [0, 22]
    },
    numberColor: {
      type: String,
      default: "black"
    },
    numberSize: {
      type: String,
      default: "1rem"
    }
  },
  data: function data() {
    //这里存放数据",
    return {
      showNum: []
    };
  },
  //监听属性 类似于data概念",
  computed: {},
  //监控data中的数据变化",
  watch: {},
  mounted: function mounted() {},
  //方法集合",
  methods: {
    getNumber: function getNumber(num) {
      switch (num.toString()) {
        case "0":
          return [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]];
          break;
        case "1":
          return [[0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]];
          break;
        case "2":
          return [[1, 1, 1], [0, 0, 1], [1, 1, 1], [1, 0, 0], [1, 1, 1]];
          break;
        case "3":
          return [[1, 1, 1], [0, 0, 1], [1, 1, 1], [0, 0, 1], [1, 1, 1]];
          break;
        case "4":
          return [[1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [0, 0, 1]];
          break;
        case "5":
          return [[1, 1, 1], [1, 0, 0], [1, 1, 1], [0, 0, 1], [1, 1, 1]];
          break;
        case "6":
          return [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 1], [1, 1, 1]];
          break;
        case "7":
          return [[1, 1, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1]];
          break;
        case "8":
          return [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 1, 1]];
          break;
        case "9":
          return [[1, 1, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [1, 1, 1]];
          break;
        case ":":
          return [[0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0]];
          break;
        case ".":
          return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 1, 0]];
          break;
        case "/":
          return [[0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], [0, 0, 0]];
          break;
        case "\\":
          return [[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1], [0, 0, 0]];
          break;
        case "+":
          return [[0, 0, 0], [0, 1, 0], [1, 1, 1], [0, 1, 0], [0, 0, 0]];
          break;
        case "-":
          return [[0, 0, 0], [0, 0, 0], [1, 1, 1], [0, 0, 0], [0, 0, 0]];
          break;
        case "=":
          return [[0, 0, 0], [1, 1, 1], [0, 0, 0], [1, 1, 1], [0, 0, 0]];
          break;
        case " ":
          return [[0], [0], [0], [0], [0]];
          break;
        default:
          break;
      }
      return [];
    },
    rowStyle: function rowStyle(row) {
      var content = document.getElementById("electronic-number");
      // console.log(content.offsetHeight,content.offsetWidth);
      // const w = content.offsetWidth,h = content.offsetHeight;
      var res = "width:calc(".concat(this.numberSize, "/5);height:calc(").concat(this.numberSize, "/5);");
      if (row == 1) {
        res += "background-color: ".concat(this.numberColor, ";");
      }
      return res;
    },
    getShowNum: function getShowNum(num) {
      num = num.toString();
      var res = [];
      for (var i = 0; i < num.length; i++) {
        var temp = this.getNumber(num[i]);
        if (num[i] != 1) {
          for (var j = 0; j < temp.length; j++) {
            temp[j].push(0);
          }
        }
        if (res.length == 0) res = temp;else {
          for (var _j = 0; _j < res.length; _j++) {
            res[_j] = res[_j].concat(temp[_j]);
          }
        }
      }
      return res;
    }
  }
});
// CONCATENATED MODULE: ./packages/JElectronicNumber/src/JElectronicNumber.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JElectronicNumbervue_type_script_lang_js_ = (JElectronicNumbervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JElectronicNumber/src/JElectronicNumber.vue?vue&type=style&index=0&id=9ac68a34&prod&lang=less&scoped=true&
var JElectronicNumbervue_type_style_index_0_id_9ac68a34_prod_lang_less_scoped_true_ = __webpack_require__("bb3f");

// CONCATENATED MODULE: ./packages/JElectronicNumber/src/JElectronicNumber.vue






/* normalize component */

var JElectronicNumber_component = normalizeComponent(
  src_JElectronicNumbervue_type_script_lang_js_,
  JElectronicNumbervue_type_template_id_9ac68a34_scoped_true_render,
  JElectronicNumbervue_type_template_id_9ac68a34_scoped_true_staticRenderFns,
  false,
  null,
  "9ac68a34",
  null
  
)

/* harmony default export */ var JElectronicNumber = (JElectronicNumber_component.exports);
// CONCATENATED MODULE: ./packages/JElectronicNumber/index.js


JElectronicNumber.install = function (Vue) {
  return Vue.component(JElectronicNumber.name, JElectronicNumber);
}; //注册组件

/* harmony default export */ var packages_JElectronicNumber = (JElectronicNumber);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JNumRolling/src/JNumRolling.vue?vue&type=template&id=06c2e012&
var JNumRollingvue_type_template_id_06c2e012_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var JNumRollingvue_type_template_id_06c2e012_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "j-num-rolling",
    attrs: {
      "id": "j-num-rolling"
    }
  })]);
}];

// CONCATENATED MODULE: ./packages/JNumRolling/src/JNumRolling.vue?vue&type=template&id=06c2e012&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("00f2");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JNumRolling/src/JNumRolling.vue?vue&type=script&lang=js&






/* harmony default export */ var JNumRollingvue_type_script_lang_js_ = ({
  name: "JNumRolling",
  props: {
    //数字
    nums: {
      type: String,
      default: "0"
    },
    //数字尺寸
    fontSize: {
      type: Number,
      default: 4
    },
    //每走一步的时间(ms)
    stepTime: {
      type: Number,
      default: 200
    },
    //保存小数点
    fixNum: {
      type: Number,
      default: 2
    },
    //自定义样式
    numStyle: {
      type: Object,
      default: {}
    },
    //数字刷新时间
    refreshTime: {
      type: Number,
      default: 3
    }
  },
  watch: {
    nums: {
      handler: function handler(newVal, oldVal) {
        //console.log(new Date().getTime(),this.oldTime,(new Date().getTime() - this.oldTime));
        if (this.oldTime == 0) {
          this.oldTime = new Date().getTime();
          this.numRolling(newVal, oldVal);
        } else if (new Date().getTime() - this.oldTime >= this.refreshTime * 1000) {
          //console.log(newVal,oldVal);
          this.oldTime = new Date().getTime();
          this.numRolling(newVal, this.oldVal);
        }
      }
    }
  },
  data: function data() {
    return {
      numArr: [],
      headNum: 10,
      oldTime: 0,
      oldVal: "",
      numChangeTimeout: "",
      viewChangeTimeout: ""
    };
  },
  mounted: function mounted() {
    // this.autoChange();
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.numChangeTimeout);
    clearTimeout(this.viewChangeTimeout);
  },
  methods: {
    getStyle: function getStyle() {
      var fontSize = this.fontSize;
      var res = "";
      res += "font-size:" + fontSize / 3 + "rem;";
      res += "line-height:" + fontSize + "rem;";
      res += "height:" + fontSize + "rem;";
      return res;
    },
    getNumStyle: function getNumStyle() {
      var res = "";
      var numStyle = this.numStyle;
      for (var k in numStyle) {
        res += camelTo_(k) + ":" + numStyle[k] + ";";
      }
      return res;
    },
    //初始化，创建容器节点
    initElement: function initElement() {
      var dom = "";
      var flag = true;
      for (var i = 0; i < this.numArr.length; i++) {
        var num = parseInt(this.numArr[i]);
        if (num >= 0 && num <= 9) {
          if (num > 0) flag = false;
          dom += "\n                        <div class=\"j-num-rolling-body\" style=\"".concat((flag ? "display:none;" : "") + this.getStyle() + this.getNumStyle(), "\">\n                        <div id=\"j-num-content").concat(i, "\" \n                        style=\"bottom:").concat(num * this.fontSize, "rem;").concat(this.getStyle(), "\" \n                        class=\"j-num-content\">\n                        ");
          for (var j = 0; j < 20; j++) {
            dom += "\n                        <div style=\"".concat(this.getStyle(), "\">").concat(j % 10, "</div>\n                        ");
          }
          dom += "\n                        </div>\n                        </div>\n                        ";
        } else {
          dom += "\n                        <div class=\"j-num-rolling-body\" style=\"".concat(this.getStyle(), "\">\n                        <div class=\"j-num-content\" style=\"").concat(this.getStyle(), "\">\n                        <div  style=\"").concat(this.getStyle(), "\">").concat(this.numArr[i], "</div>\n                        </div>\n                        </div>\n                        ");
        }
      }
      document.getElementById("j-num-rolling").innerHTML = dom;
    },
    //初始化数据
    init: function init() {
      this.numArr = parseFloat(this.nums).toFixed(this.fixNum).split("");
      var temp = new Array(this.headNum).fill(0);
      this.numArr = temp.concat(this.numArr);
      this.initElement();
    },
    //自动增加数字，测试
    autoChange: function autoChange() {
      var _this = this;
      this.changAnime();
      this.numChangeTimeout = setTimeout(function () {
        _this.autoChange();
      }, 2000);
    },
    //点击修改数字，测试
    changAnime: function changAnime() {
      this.nums = (parseFloat(this.nums) + 3.9).toFixed(this.fixNum);
    },
    //修改
    chang: function chang(oldVal, newVal, id) {
      var _this2 = this;
      if (oldVal >= newVal) return;
      var stepTime = this.stepTime;
      var time = Math.ceil((newVal - oldVal) / this.fontSize);
      time = stepTime / time;
      var dom = document.getElementById(id);
      // console.log(oldVal,newVal,id,dom);
      // console.log('time',time);
      oldVal += 0.5;
      if (oldVal >= 20) {
        oldVal %= 20;
        newVal %= 20;
      }
      if (oldVal >= 10) {
        oldVal %= 10;
        newVal %= 10;
        if (newVal < oldVal) newVal += 10;
      }
      if (!dom) return;
      dom.style.bottom = oldVal * this.fontSize + "rem";
      this.viewChangeTimeout = setTimeout(function () {
        _this2.chang(oldVal, newVal, id);
      }, time);
    },
    //数据变化时触发，处理变化后的数据
    numRolling: function numRolling(newVal, oldVal) {
      this.oldVal = newVal;
      oldVal = parseFloat(oldVal).toFixed(this.fixNum).toString().split("");
      newVal = parseFloat(newVal).toFixed(this.fixNum).toString().split("");
      var headNum = this.headNum;
      //数位发生变化，前面补零
      while (oldVal.length < newVal.length) {
        oldVal.unshift("0");
        headNum--;
        document.getElementById("j-num-content" + headNum).parentNode.style.display = "flex";
      }
      //修改前置位标记数
      this.headNum = headNum;
      for (var i = 0; i < newVal.length; i++) {
        var num = parseInt(newVal[i]);
        if (num >= 0 && num <= 9) {
          var oldV = parseFloat(oldVal[i]),
            newV = parseFloat(newVal[i]);
          if (oldV > newV) newV += 10;
          this.chang(oldV, newV, "j-num-content" + (i + headNum));
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/JNumRolling/src/JNumRolling.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JNumRollingvue_type_script_lang_js_ = (JNumRollingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JNumRolling/src/JNumRolling.vue?vue&type=style&index=0&id=06c2e012&prod&lang=less&
var JNumRollingvue_type_style_index_0_id_06c2e012_prod_lang_less_ = __webpack_require__("6e26");

// CONCATENATED MODULE: ./packages/JNumRolling/src/JNumRolling.vue






/* normalize component */

var JNumRolling_component = normalizeComponent(
  src_JNumRollingvue_type_script_lang_js_,
  JNumRollingvue_type_template_id_06c2e012_render,
  JNumRollingvue_type_template_id_06c2e012_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var JNumRolling = (JNumRolling_component.exports);
// CONCATENATED MODULE: ./packages/JNumRolling/index.js


JNumRolling.install = function (Vue) {
  return Vue.component(JNumRolling.name, JNumRolling);
}; //注册组件

/* harmony default export */ var packages_JNumRolling = (JNumRolling);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JDialog/src/JDialog.vue?vue&type=template&id=7703f290&scoped=true&
var JDialogvue_type_template_id_7703f290_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "j-dialog"
  }, [_vm.JDialogIsShow ? _c('div', {
    staticClass: "mask",
    on: {
      "click": function click($event) {
        return _vm.maskClick();
      }
    }
  }) : _vm._e(), _vm.JDialogIsShow ? _c('div', {
    staticClass: "j-dialog-content"
  }, [_c('div', {
    staticClass: "j-dialog-header"
  }, [_c('div', {
    staticClass: "j-dialog-header-title"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _c('span', {
    staticClass: "j-dialog-header-icon",
    attrs: {
      "title": "关闭"
    },
    on: {
      "click": function click($event) {
        return _vm.closeDialog();
      }
    }
  }, [_vm._v("x")])])]), _c('div', {
    staticClass: "j-dialog-main"
  }, [_vm._t("j-dialog-main-content")], 2), _c('div', {
    staticClass: "j-dialog-footer"
  }, [_c('div', {
    staticClass: "j-dialog-footer-btn"
  }, _vm._l(_vm.btnList, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "btn",
      style: _vm.getStyle(item.style),
      attrs: {
        "title": item.text
      },
      on: {
        "click": function click($event) {
          return _vm.doClick(item.click);
        }
      }
    }, [_vm._v("\n                    " + _vm._s(item.text) + "\n                ")]);
  }), 0)])]) : _vm._e()]);
};
var JDialogvue_type_template_id_7703f290_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JDialog/src/JDialog.vue?vue&type=template&id=7703f290&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JDialog/src/JDialog.vue?vue&type=script&lang=js&

/* harmony default export */ var JDialogvue_type_script_lang_js_ = ({
  name: "JDialog",
  props: {
    title: {
      type: String,
      default: "我是标题"
    },
    closable: {
      type: Boolean,
      default: false
    },
    btnList: {
      type: Array,
      default: function _default() {
        return [{
          text: "取消",
          style: {
            backgroundColor: "orangered"
          },
          click: "close"
        }, {
          text: "确认",
          style: {
            backgroundColor: "seagreen"
          }
        }];
      }
    }
  },
  data: function data() {
    return {
      JDialogIsShow: false
    };
  },
  methods: {
    getStyle: function getStyle(obj) {
      var res = "";
      for (var k in obj) {
        res += camelTo_(k) + ":" + obj[k] + ";";
      }
      return res;
    },
    doClick: function doClick() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      if (flag == "close") {
        this.closeDialog();
      }
      this.$emit(flag);
    },
    maskClick: function maskClick() {
      this.JDialogIsShow = !this.closable;
    },
    showDialog: function showDialog() {
      this.$emit("show");
      this.JDialogIsShow = true;
    },
    closeDialog: function closeDialog() {
      this.$emit("close");
      this.JDialogIsShow = false;
    }
  }
});
// CONCATENATED MODULE: ./packages/JDialog/src/JDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JDialogvue_type_script_lang_js_ = (JDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JDialog/src/JDialog.vue?vue&type=style&index=0&id=7703f290&prod&lang=less&scoped=true&
var JDialogvue_type_style_index_0_id_7703f290_prod_lang_less_scoped_true_ = __webpack_require__("9ca0");

// CONCATENATED MODULE: ./packages/JDialog/src/JDialog.vue






/* normalize component */

var JDialog_component = normalizeComponent(
  src_JDialogvue_type_script_lang_js_,
  JDialogvue_type_template_id_7703f290_scoped_true_render,
  JDialogvue_type_template_id_7703f290_scoped_true_staticRenderFns,
  false,
  null,
  "7703f290",
  null
  
)

/* harmony default export */ var JDialog = (JDialog_component.exports);
// CONCATENATED MODULE: ./packages/JDialog/index.js


JDialog.install = function (Vue) {
  return Vue.component(JDialog.name, JDialog);
}; //注册组件

/* harmony default export */ var packages_JDialog = (JDialog);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JHoverBtn/src/JHoverBtn.vue?vue&type=template&id=7ec41aa5&scoped=true&
var JHoverBtnvue_type_template_id_7ec41aa5_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "j-hover-btn",
    style: _vm.getStyle(),
    attrs: {
      "id": _vm.uid
    },
    on: {
      "mousedown": _vm.itemClick
    }
  }, [_vm._v("\n    " + _vm._s(_vm.text) + "\n")]);
};
var JHoverBtnvue_type_template_id_7ec41aa5_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JHoverBtn/src/JHoverBtn.vue?vue&type=template&id=7ec41aa5&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JHoverBtn/src/JHoverBtn.vue?vue&type=script&lang=js&


/* harmony default export */ var JHoverBtnvue_type_script_lang_js_ = ({
  name: "JHoverBtn",
  props: {
    bgColor: {
      type: String,
      default: "deepskyblue"
    },
    autoHide: {
      type: Boolean,
      default: true
    },
    clickDis: {
      type: Number,
      default: 10
    },
    showWidth: {
      type: Number,
      default: 15
    },
    width: {
      type: Number,
      default: 80
    },
    radius: {
      type: Boolean,
      default: true
    },
    btnStyle: {
      type: Object,
      default: function _default() {}
    },
    text: {
      type: String,
      default: "悬浮按钮"
    },
    zIndex: {
      type: Number,
      default: 999
    }
  },
  data: function data() {
    return {
      startX: "",
      startY: "",
      clickStatus: false,
      isClick: true,
      uid: ""
    };
  },
  created: function created() {
    this.setId();
  },
  mounted: function mounted() {
    this.preventEvent();
    window.addEventListener("mouseup", this.handleMouseup);
    window.addEventListener("mouseover", this.handleMouseover);
  },
  methods: {
    setId: function setId() {
      this.uid = getUId() + "j-hover-btn";
    },
    getStyle: function getStyle() {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      res += "background-color:" + this.bgColor + ";";
      res += "width:" + this.width + "px;";
      res += "height:" + this.width + "px;";
      res += "line-height:" + this.width + "px;";
      res += "z-index:" + this.zIndex + ";";
      if (this.radius) {
        res += "border-radius: 50% 50%;";
      }
      var btnStyle = this.btnStyle;
      for (var k in btnStyle) {
        res += camelTo_(k) + ":" + btnStyle[k] + ";";
      }
      return res;
    },
    //阻止默认事件
    preventEvent: function preventEvent() {
      document.getElementById(this.uid).ondragstart = function () {
        return false;
      };
      document.getElementById(this.uid).onselectstart = function () {
        return false;
      };
    },
    windowPreventEvent: function windowPreventEvent() {
      window.ondragstart = function () {
        return false;
      };
      window.onselectstart = function () {
        return false;
      };
    },
    windowPreventEventCancel: function windowPreventEventCancel() {
      window.ondragstart = null;
      window.onselectstart = null;
    },
    itemClick: function itemClick(event) {
      this.startX = event.pageX - window.scrollX;
      this.startY = event.pageY - window.scrollY;
      this.clickStatus = true;
      this.windowPreventEvent();
    },
    //鼠标抬起时
    handleMouseup: function handleMouseup(event) {
      if (this.clickStatus) {
        var endX = event.pageX - window.scrollX,
          endY = event.pageY - window.scrollY;
        if (this.isClick) {
          this.$emit("hoverBtnClick");
        } else {
          if (!this.autoHide) return;
          var width = document.body.offsetWidth;
          var height = document.body.offsetHeight;
          var dom = document.getElementById(this.uid);
          if (endX < this.width / 2) {
            dom.style.left = -(this.width - this.showWidth) + "px";
          } else if (endX > width - this.width / 2) {
            dom.style.left = width - this.showWidth + "px";
          }
        }
        this.clickStatus = false;
        this.isClick = true;
        this.windowPreventEventCancel();
      }
    },
    handleMouseover: function handleMouseover(event) {
      if (this.clickStatus) {
        var endX = event.pageX - window.scrollX,
          endY = event.pageY - window.scrollY;
        var dom = document.getElementById(this.uid);
        if (Math.abs(endX - this.startX) > this.clickDis || Math.abs(endY - this.startY) > this.clickDis) {
          this.isClick = false;
        }
        dom.style.left = endX - this.width / 2 + "px";
        dom.style.top = endY - this.width / 2 + "px";
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/JHoverBtn/src/JHoverBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JHoverBtnvue_type_script_lang_js_ = (JHoverBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JHoverBtn/src/JHoverBtn.vue?vue&type=style&index=0&id=7ec41aa5&prod&lang=less&scoped=true&
var JHoverBtnvue_type_style_index_0_id_7ec41aa5_prod_lang_less_scoped_true_ = __webpack_require__("d6c4");

// CONCATENATED MODULE: ./packages/JHoverBtn/src/JHoverBtn.vue






/* normalize component */

var JHoverBtn_component = normalizeComponent(
  src_JHoverBtnvue_type_script_lang_js_,
  JHoverBtnvue_type_template_id_7ec41aa5_scoped_true_render,
  JHoverBtnvue_type_template_id_7ec41aa5_scoped_true_staticRenderFns,
  false,
  null,
  "7ec41aa5",
  null
  
)

/* harmony default export */ var JHoverBtn = (JHoverBtn_component.exports);
// CONCATENATED MODULE: ./packages/JHoverBtn/index.js


JHoverBtn.install = function (Vue) {
  return Vue.component(JHoverBtn.name, JHoverBtn);
}; //注册组件

/* harmony default export */ var packages_JHoverBtn = (JHoverBtn);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JFloatDiv/src/JFloatDiv.vue?vue&type=template&id=51a2337c&scoped=true&
var JFloatDivvue_type_template_id_51a2337c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._v("\n    " + _vm._s(_vm.text) + "\n    "), _c('div', {
    attrs: {
      "id": "float-content"
    }
  }, [_vm._v("我是图片")])]);
};
var JFloatDivvue_type_template_id_51a2337c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JFloatDiv/src/JFloatDiv.vue?vue&type=template&id=51a2337c&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JFloatDiv/src/JFloatDiv.vue?vue&type=script&lang=js&
/* harmony default export */ var JFloatDivvue_type_script_lang_js_ = ({
  name: "JFloatDiv",
  data: function data() {
    return {
      text: "我是文字"
    };
  },
  created: function created() {
    this.textReapt();
  },
  methods: {
    textReapt: function textReapt() {
      var i = 8;
      while (i--) {
        this.text += this.text;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/JFloatDiv/src/JFloatDiv.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JFloatDivvue_type_script_lang_js_ = (JFloatDivvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JFloatDiv/src/JFloatDiv.vue?vue&type=style&index=0&id=51a2337c&prod&lang=less&scoped=true&
var JFloatDivvue_type_style_index_0_id_51a2337c_prod_lang_less_scoped_true_ = __webpack_require__("8f70");

// CONCATENATED MODULE: ./packages/JFloatDiv/src/JFloatDiv.vue






/* normalize component */

var JFloatDiv_component = normalizeComponent(
  src_JFloatDivvue_type_script_lang_js_,
  JFloatDivvue_type_template_id_51a2337c_scoped_true_render,
  JFloatDivvue_type_template_id_51a2337c_scoped_true_staticRenderFns,
  false,
  null,
  "51a2337c",
  null
  
)

/* harmony default export */ var JFloatDiv = (JFloatDiv_component.exports);
// CONCATENATED MODULE: ./packages/JFloatDiv/index.js


JFloatDiv.install = function (Vue) {
  return Vue.component(JFloatDiv.name, JFloatDiv);
}; //注册组件

/* harmony default export */ var packages_JFloatDiv = (JFloatDiv);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JSteps/src/JSteps.vue?vue&type=template&id=ef66963a&scoped=true&
var JStepsvue_type_template_id_ef66963a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "j-steps",
    attrs: {
      "id": "j-steps"
    }
  }, _vm._l(_vm.showDataList, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "j-steps-item"
    }, [_c('div', {
      staticClass: "item-header"
    }, [_c('div', {
      staticClass: "left-box"
    }, [index % 2 == 0 ? [_c('div', {
      staticClass: "top-box",
      style: _vm.obj2Style(_vm.titleStyle)
    }, [_vm._v("\n                        " + _vm._s(item.title) + "\n                    ")]), _c('div', {
      staticClass: "bottom-box",
      style: _vm.obj2Style(_vm.descriptStyle)
    }, [_vm._v("\n                        " + _vm._s(item.descript) + "\n                    ")])] : [_c('div', {
      staticClass: "hold-box",
      style: _vm.obj2Style(_vm.timeStyle, 'text-align: right;padding-right: 5px;')
    }, [_vm._v("\n                        " + _vm._s(item.time) + "\n                    ")])]], 2), _c('div', {
      staticClass: "item-icon",
      style: _vm.obj2Style(_vm.iconStyle)
    }, [_vm._v("\n                " + _vm._s(item.icon) + "\n            ")]), _c('div', {
      staticClass: "right-box"
    }, [index % 2 == 1 ? [_c('div', {
      staticClass: "top-box",
      style: _vm.obj2Style(_vm.titleStyle)
    }, [_vm._v("\n                        " + _vm._s(item.title) + "\n                    ")]), _c('div', {
      staticClass: "bottom-box",
      style: _vm.obj2Style(_vm.descriptStyle)
    }, [_vm._v("\n                        " + _vm._s(item.descript) + "\n                    ")])] : [_c('div', {
      staticClass: "hold-box",
      style: _vm.obj2Style(_vm.timeStyle, 'text-align: left;padding-left: 5px;')
    }, [_vm._v("\n                        " + _vm._s(item.time) + "\n                    ")])]], 2)]), _c('div', {
      staticClass: "item-content"
    }, [_c('div', {
      staticClass: "content-left"
    }), index !== _vm.dataList.length - 1 ? _c('div', {
      staticClass: "v-line",
      style: _vm.getLineStyle()
    }) : _vm._e(), _vm._m(0, true)])]);
  }), 0);
};
var JStepsvue_type_template_id_ef66963a_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-right"
  }, [_c('div', {
    staticClass: "item-title"
  }), _c('div', {
    staticClass: "item-descript"
  })]);
}];

// CONCATENATED MODULE: ./packages/JSteps/src/JSteps.vue?vue&type=template&id=ef66963a&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JSteps/src/JSteps.vue?vue&type=script&lang=js&



/* harmony default export */ var JStepsvue_type_script_lang_js_ = ({
  name: "JSteps",
  props: {
    direction: {
      type: String,
      default: "horizontal" //horizontal 横向 vertical 纵向
    },

    iconWidth: {
      type: Number,
      default: 50
    },
    sortBy: {
      type: String,
      default: "time"
    },
    iconStyle: {
      type: Object,
      default: function _default() {
        return {
          color: "black"
        };
      }
    },
    lineStyle: {
      type: Object,
      default: function _default() {
        return {
          color: "skyblue",
          height: "100px"
        };
      }
    },
    titleStyle: {
      type: Object,
      default: function _default() {
        return {
          fontWeight: "bold"
        };
      }
    },
    descriptStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    timeStyle: {
      type: Object,
      default: function _default() {
        return {
          fontWeight: "bold"
        };
      }
    },
    dataList: {
      type: Array,
      default: function _default() {
        return [{
          title: "版本0.1.4",
          descript: "优化：代码高亮组件",
          time: "2021-12-01",
          icon: "图标"
        }, {
          title: "版本0.1.3",
          descript: "增加：悬浮按钮组件，弹窗组件",
          time: "2021-11-28",
          icon: "图标"
        }, {
          title: "版本0.1.2",
          descript: "增加：数字滚动变化效果组件",
          time: "2021-11-26",
          icon: "图标"
        }, {
          title: "版本0.1.1",
          descript: "项目搭建",
          time: "2021-11-24",
          icon: "图标"
        }, {
          title: "版本0.1.0",
          descript: "创建npm库",
          time: "2021-11-22",
          icon: "图标"
        }];
      }
    }
  },
  data: function data() {
    return {
      showDataList: 0
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      this.initData();
      var jSteps = document.getElementById("j-steps");
      parent = jSteps.parentElement;
      // console.log("---", jSteps, parent, parent.offsetWidth);
    },
    initData: function initData() {
      var _this = this;
      if (this.sortBy) {
        this.showDataList = this.dataList.sort(function (a, b) {
          return a[_this.sortBy] - b[_this.sortBy];
        });
      } else {
        this.showDataList = this.dataList;
      }
    },
    obj2Style: function obj2Style(obj) {
      var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      for (var k in obj) {
        res += camelTo_(k) + ":" + obj[k] + ";";
      }
      return res;
    },
    getLineStyle: function getLineStyle() {
      var res = "";
      var lineStyle = this.lineStyle;
      for (var k in lineStyle) {
        if (k == "height") {
          res += "min-height:" + lineStyle["height"] + ";";
        } else if (k == "color") {
          res += "border:1px solid " + lineStyle["color"] + ";";
          res += "background-color:" + lineStyle["color"] + ";";
        } else {
          res += camelTo_(k) + ":" + lineStyle[k] + ";";
        }
      }
      if (!lineStyle["color"]) res += "border:1px solid skyblue;";
      if (!lineStyle["height"]) res += "min-height:200px;";
      return res;
    },
    barClick: function barClick(index) {
      this.showTab = index;
      this.$emit("clickTab", index);
    },
    getBarClass: function getBarClass(index) {
      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var res = "";
      if (index == this.showTab) {
        res += "active-tab";
      }
      return res + " " + val;
    }
  }
});
// CONCATENATED MODULE: ./packages/JSteps/src/JSteps.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JStepsvue_type_script_lang_js_ = (JStepsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JSteps/src/JSteps.vue?vue&type=style&index=0&id=ef66963a&prod&lang=less&scoped=scoped&
var JStepsvue_type_style_index_0_id_ef66963a_prod_lang_less_scoped_scoped_ = __webpack_require__("02e0");

// CONCATENATED MODULE: ./packages/JSteps/src/JSteps.vue






/* normalize component */

var JSteps_component = normalizeComponent(
  src_JStepsvue_type_script_lang_js_,
  JStepsvue_type_template_id_ef66963a_scoped_true_render,
  JStepsvue_type_template_id_ef66963a_scoped_true_staticRenderFns,
  false,
  null,
  "ef66963a",
  null
  
)

/* harmony default export */ var JSteps = (JSteps_component.exports);
// CONCATENATED MODULE: ./packages/JSteps/index.js


JSteps.install = function (Vue) {
  return Vue.component(JSteps.name, JSteps);
}; //注册组件

/* harmony default export */ var packages_JSteps = (JSteps);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JDropDownBox/src/JDropDownBox.vue?vue&type=template&id=05140a67&scoped=true&
var JDropDownBoxvue_type_template_id_05140a67_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drop-down-box"
  }, [_c('div', {
    staticClass: "box-input-box"
  }, [!_vm.readOnly ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputData,
      expression: "inputData"
    }],
    staticClass: "box-input",
    attrs: {
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.inputData
    },
    on: {
      "focus": function focus($event) {
        return _vm.focusInput();
      },
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.inputData = $event.target.value;
      }, function ($event) {
        return _vm.bindInput();
      }]
    }
  }) : _vm._e(), _vm.readOnly ? _c('div', {
    staticClass: "box-input",
    on: {
      "click": function click($event) {
        return _vm.arrowClick();
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.inputData) + "\n        ")]) : _vm._e(), _vm.closed ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.boxIsShow,
      expression: "boxIsShow"
    }],
    staticClass: "icon icon-close",
    attrs: {
      "title": "清空"
    },
    on: {
      "click": function click($event) {
        return _vm.clearInput();
      }
    }
  }, [_vm._v("\n            x\n        ")]) : _vm._e(), _c('div', {
    staticClass: "icon icon-arrow",
    attrs: {
      "title": "下拉"
    },
    on: {
      "click": function click($event) {
        return _vm.arrowClick();
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.boxIsShow ? "v" : ">") + "\n        ")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.boxIsShow,
      expression: "boxIsShow"
    }],
    staticClass: "box-area"
  }, _vm._l(_vm.showSelectData, function (itemData) {
    return _c('div', {
      key: itemData.id,
      staticClass: "select-item",
      attrs: {
        "title": itemData.value
      },
      on: {
        "click": function click($event) {
          return _vm.selectItem(itemData);
        }
      }
    }, [_vm._v("\n            " + _vm._s(itemData.value) + "\n        ")]);
  }), 0)]);
};
var JDropDownBoxvue_type_template_id_05140a67_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JDropDownBox/src/JDropDownBox.vue?vue&type=template&id=05140a67&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JDropDownBox/src/JDropDownBox.vue?vue&type=script&lang=js&



/* harmony default export */ var JDropDownBoxvue_type_script_lang_js_ = ({
  name: "JDropDownBox",
  props: {
    defIndex: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入"
    },
    filter: {
      type: Boolean,
      default: false
    },
    closed: {
      type: Boolean,
      default: true
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    selectData: {
      type: Array,
      default: [{
        id: 1,
        value: "选项一"
      }, {
        id: 2,
        value: "选项二"
      }, {
        id: 3,
        value: "选项三"
      }, {
        id: 4,
        value: "选项四"
      }, {
        id: 5,
        value: "选项五"
      }, {
        id: 6,
        value: "选项六"
      }]
    }
  },
  data: function data() {
    return {
      boxIsShow: false,
      inputData: "",
      idMap: {},
      valueMap: {}
    };
  },
  created: function created() {
    this.initData();
  },
  watch: {
    inputData: function inputData(newVal) {
      // this.value = this.valueMap[newVal];
    }
  },
  methods: {
    initData: function initData() {
      var idMap = {};
      var valueMap = {};
      this.showSelectData = this.selectData;
      this.selectData.map(function (item) {
        idMap[item.id] = item.value;
        valueMap[item.value] = item.id;
      });
      this.inputData = idMap[this.value];
      this.valueMap = valueMap;
      this.idMap = idMap;
    },
    arrowClick: function arrowClick() {
      this.boxIsShow = !this.boxIsShow;
    },
    clearInput: function clearInput() {
      this.inputData = "";
      this.showSelectData = this.selectData;
      this.$emit("selectItem", "");
      this.$emit("selectIndexValue", this.defIndex, "");
    },
    focusInput: function focusInput() {
      this.boxIsShow = true;
      this.bindInput();
    },
    bindInput: function bindInput() {
      var _this = this;
      if (this.filter) {
        this.showSelectData = this.selectData.filter(function (sItem) {
          return sItem.value.indexOf(_this.inputData) != -1;
        });
      }
    },
    blurInput: function blurInput() {
      var _this2 = this;
      setTimeout(function () {
        _this2.boxIsShow = false;
      }, 100);
    },
    selectItem: function selectItem(itemData) {
      this.inputData = itemData.value;
      this.$emit("selectItem", itemData.id);
      this.$emit("selectIndexValue", this.defIndex, itemData.value);
      this.boxIsShow = false;
    }
  }
});
// CONCATENATED MODULE: ./packages/JDropDownBox/src/JDropDownBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JDropDownBoxvue_type_script_lang_js_ = (JDropDownBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JDropDownBox/src/JDropDownBox.vue?vue&type=style&index=0&id=05140a67&prod&lang=less&scoped=true&
var JDropDownBoxvue_type_style_index_0_id_05140a67_prod_lang_less_scoped_true_ = __webpack_require__("4ac5");

// CONCATENATED MODULE: ./packages/JDropDownBox/src/JDropDownBox.vue






/* normalize component */

var JDropDownBox_component = normalizeComponent(
  src_JDropDownBoxvue_type_script_lang_js_,
  JDropDownBoxvue_type_template_id_05140a67_scoped_true_render,
  JDropDownBoxvue_type_template_id_05140a67_scoped_true_staticRenderFns,
  false,
  null,
  "05140a67",
  null
  
)

/* harmony default export */ var JDropDownBox = (JDropDownBox_component.exports);
// CONCATENATED MODULE: ./packages/JDropDownBox/index.js


JDropDownBox.install = function (Vue) {
  return Vue.component(JDropDownBox.name, JDropDownBox);
}; //注册组件

/* harmony default export */ var packages_JDropDownBox = (JDropDownBox);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JTagList/src/JTagList.vue?vue&type=template&id=e0550666&scoped=true&

var JTagListvue_type_template_id_e0550666_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "j-tag-list"
  }, [_c('div', {
    staticClass: "tag-list"
  }, [_vm._l(_vm.showTagList, function (item, index) {
    return _c('span', {
      key: index + '_tag',
      staticClass: "tag",
      style: item.style,
      on: {
        "click": function click($event) {
          return _vm.tagClick(item);
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.text) + "\n            "), _vm.canDelete ? _c('span', {
      staticClass: "delete-tag-btn",
      attrs: {
        "title": "删除"
      },
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.deleteTag(index);
        }
      }
    }, [_vm._v("x")]) : _vm._e()]);
  }), !_vm.isShow ? [_vm.addTagFlag ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputTag,
      expression: "inputTag"
    }],
    ref: 'tagInputRef' + _vm.uId,
    staticClass: "add-tag-input",
    attrs: {
      "id": 'tagInputId' + _vm.uId
    },
    domProps: {
      "value": _vm.inputTag
    },
    on: {
      "blur": function blur($event) {
        return _vm.addTag();
      },
      "keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.addTag();
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.inputTag = $event.target.value;
      }
    }
  }) : _c('span', {
    staticClass: "add-tag-btn",
    attrs: {
      "title": "添加"
    },
    on: {
      "click": function click($event) {
        return _vm.showAddTag();
      }
    }
  }, [_vm._v("+")])] : _vm._e()], 2)]);
};
var JTagListvue_type_template_id_e0550666_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JTagList/src/JTagList.vue?vue&type=template&id=e0550666&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("aa18");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("982e");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.string.trim.js
var es6_string_trim = __webpack_require__("6161");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.map.js
var es6_map = __webpack_require__("3e38");

// CONCATENATED MODULE: ./packages/utils/numsFormat.js










/**
 * @description 数字转换为英文表示
 * @param {string} num 数字
 * @return {string} 英文表示
 **/
var numberToWords = function numberToWords(num) {
  var singles = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  var teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  var tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  var thousands = ["", "Thousand", "Million", "Billion"];
  var toEnglish = function toEnglish(num) {
    var curr = [];
    var hundred = Math.floor(num / 100);
    num %= 100;
    if (hundred !== 0) {
      curr.push(singles[hundred] + " Hundred ");
    }
    var ten = Math.floor(num / 10);
    if (ten >= 2) {
      curr.push(tens[ten] + " ");
      num %= 10;
    }
    if (num > 0 && num < 10) {
      curr.push(singles[num] + " ");
    } else if (num >= 10) {
      curr.push(teens[num - 10] + " ");
    }
    return curr.join("");
  };
  if (num === 0) {
    return "Zero";
  }
  var sb = [];
  for (var i = 3, unit = 1000000000; i >= 0; i--, unit = Math.floor(unit / 1000)) {
    var curNum = Math.floor(num / unit);
    if (curNum !== 0) {
      num -= curNum * unit;
      sb.push(toEnglish(curNum) + thousands[i] + " ");
    }
  }
  return sb.join("").trim();
};
/**
 * @description 数字转换为大写中文表示
 * @param {string} money 数字
 * @return {string} 大写中文表示
 **/
var numberToChineseWords = function numberToChineseWords(money) {
  // 汉字的数字
  var cnNums = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  // 基本单位
  var cnIntRadice = ["", "拾", "佰", "仟"];
  // 对应整数部分扩展单位
  var cnIntUnits = ["", "万", "亿", "兆"];
  // 对应小数部分单位
  var cnDecUnits = ["角", "分", "毫", "厘"];
  // 整数金额时后面跟的字符
  var cnInteger = "整";
  // 整型完以后的单位
  var cnIntLast = "元";
  // 最大处理的数字
  var maxNum = 9999999999999999.99;
  // 金额整数部分
  var integerNum;
  // 金额小数部分
  var decimalNum;
  // 输出的中文金额字符串
  var chineseStr = "";
  // 分离金额后用的数组，预定义
  var parts;
  if (money === "") {
    return "";
  }
  money = parseFloat(money);
  if (money >= maxNum) {
    // 超出最大处理数字
    return "";
  }
  if (money === 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  // 转换为字符串
  money = money.toString();
  if (money.indexOf(".") === -1) {
    integerNum = money;
    decimalNum = "";
  } else {
    parts = money.split(".");
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  // console.log(integerNum, decimalNum);
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0;
    var IntLen = integerNum.length;
    for (var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1);
      var p = IntLen - i - 1;
      var q = p / 4;
      var m = p % 4;
      if (n === "0") {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        // 归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  // 小数部分
  if (decimalNum !== "") {
    var decLen = decimalNum.length;
    for (var _i = 0; _i < decLen; _i++) {
      var _n = decimalNum.substr(_i, 1);
      if (_n !== "0") {
        chineseStr += cnNums[Number(_n)] + cnDecUnits[_i];
      }
    }
  }
  if (chineseStr === "") {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum === "") {
    chineseStr += cnInteger;
  }
  return chineseStr;
};

/**
 * @description 数字千分位分隔
 * @param {String} num 数字
 * @param {String} separator 分隔符,默认为英文逗号','
 * @return {String} 千分位分隔后的数字
 **/
var numberToSplitWords = function numberToSplitWords(num) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ",";
  num = num.toString();
  if (num.length < 3) return num;
  var flag = "";
  if (num[0] == "-") {
    flag = "-";
    num = num.substr(1);
  }
  num = num.split(".");
  var num1 = num[0],
    len1 = num[0].length;
  var res = "";
  for (var i = 0; i < num1.length; i++) {
    if (i != 0 && i % 3 == 0) {
      res = separator + res;
    }
    res = num1[len1 - i - 1] + res;
  }
  if (num.length > 1) {
    res += ".";
    var num2 = num[1],
      len2 = num[1].length;
    for (var _i2 = 0; _i2 < num2.length; _i2++) {
      if (_i2 != 0 && _i2 % 3 == 0) {
        res += separator;
      }
      res += num2[_i2];
    }
  }
  return flag + res;
};

/**
 * @description 整数转罗马数字
 * @param {number} num 整数
 * @return {string} 罗马数字
 */
var intToRoman = function intToRoman(num) {
  //num > 0 && num <= 3999
  if (num <= 0 || num > 3999) return "数字范围应该为1~3999";
  var thousands = ["", "M", "MM", "MMM"];
  var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var roman = [];
  num = parseInt(num);
  roman.push(thousands[Math.floor(num / 1000)]);
  roman.push(hundreds[Math.floor(num % 1000 / 100)]);
  roman.push(tens[Math.floor(num % 100 / 10)]);
  roman.push(ones[num % 10]);
  return roman.join("");
};

/**
 * @description 罗马数字转整数
 * @param {string} s 罗马数字
 * @return {number} 整数
 */
var romanToInt = function romanToInt(s) {
  var symbolValues = new Map();
  symbolValues.set("I", 1);
  symbolValues.set("V", 5);
  symbolValues.set("X", 10);
  symbolValues.set("L", 50);
  symbolValues.set("C", 100);
  symbolValues.set("D", 500);
  symbolValues.set("M", 1000);
  var ans = 0;
  var n = s.length;
  for (var i = 0; i < n; ++i) {
    var value = symbolValues.get(s[i]);
    if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
      ans -= value;
    } else {
      ans += value;
    }
  }
  return ans;
};

/**
 *
 * @param {Number} minNum
 * @param {Number} maxNum
 * @returns
 */
var getRandomNum = function getRandomNum(minNum, maxNum) {
  minNum = parseInt(minNum);
  maxNum = parseInt(maxNum);
  var res = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  return res;
};
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JTagList/src/JTagList.vue?vue&type=script&lang=js&





/* harmony default export */ var JTagListvue_type_script_lang_js_ = ({
  name: "JTagList",
  props: {
    //展示的标签列表
    tagList: {
      type: Array,
      default: function _default() {
        return ["测试1", "测试2"];
      }
    },
    //允许删除
    canDelete: {
      type: Boolean,
      default: true
    },
    //允许重复
    canRepeat: {
      type: Boolean,
      default: false
    },
    //标签背景颜色
    tagColor: {
      type: Array,
      default: function _default() {
        return ["orange"];
      }
    },
    //仅展示
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      addTagFlag: false,
      inputTag: "",
      showTagList: [],
      uId: ""
    };
  },
  watch: {
    tagList: function tagList(newVal) {
      this.initTagStyle();
    }
  },
  created: function created() {
    this.getUId();
  },
  mounted: function mounted() {
    this.initTagStyle();
  },
  methods: {
    getRandomLetter: function getRandomLetter() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
      var res = "";
      for (var i = 0; i < size; i++) {
        var ind = Math.floor(Math.random() * 26);
        res += String.fromCharCode(ind + 65);
      }
      return res;
    },
    getUId: function getUId() {
      this.uId = this.getRandomLetter(8) + "-" + Math.ceil(Math.random() * 100000);
    },
    initTagStyle: function initTagStyle() {
      var _this = this;
      var showTagList = [];
      this.tagList.map(function (item) {
        showTagList.push({
          text: item,
          style: _this.getTagStyle()
        });
      });
      this.showTagList = showTagList;
    },
    getTagStyle: function getTagStyle() {
      var len = this.tagColor.length - 1;
      var ind = getRandomNum(0, len);
      var res = "background-color:".concat(this.tagColor[ind], ";");
      return res;
    },
    showAddTag: function showAddTag() {
      var _this2 = this;
      this.addTagFlag = true;
      this.$nextTick(function () {
        document.getElementById("tagInputId" + _this2.uId).focus();
        // this.$refs["tagInputRef" + this.uId].focus();
      });
    },
    hideAddTag: function hideAddTag() {
      this.addTagFlag = false;
    },
    deleteTag: function deleteTag(index) {
      this.$emit("deleteTag", this.showTagList[index]);
      this.tagList.splice(index, 1);
      this.showTagList.splice(index, 1);
    },
    tagClick: function tagClick(item) {
      this.$emit("tagClick", item);
    },
    addTag: function addTag() {
      this.inputTag = this.inputTag.trim();
      if (this.inputTag.trim().length != 0) {
        if (!this.canRepeat) {
          if (!this.tagList.includes(this.inputTag)) this.tagList.push(this.inputTag);
        }
        if (this.tagList.length > this.showTagList.length) {
          this.showTagList.push({
            text: this.inputTag,
            style: this.getTagStyle()
          });
          this.$emit("addTag", this.inputTag);
        }
        this.inputTag = "";
      }
      this.hideAddTag();
    }
  }
});
// CONCATENATED MODULE: ./packages/JTagList/src/JTagList.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JTagListvue_type_script_lang_js_ = (JTagListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JTagList/src/JTagList.vue?vue&type=style&index=0&id=e0550666&prod&lang=less&scoped=true&
var JTagListvue_type_style_index_0_id_e0550666_prod_lang_less_scoped_true_ = __webpack_require__("f70e");

// CONCATENATED MODULE: ./packages/JTagList/src/JTagList.vue






/* normalize component */

var JTagList_component = normalizeComponent(
  src_JTagListvue_type_script_lang_js_,
  JTagListvue_type_template_id_e0550666_scoped_true_render,
  JTagListvue_type_template_id_e0550666_scoped_true_staticRenderFns,
  false,
  null,
  "e0550666",
  null
  
)

/* harmony default export */ var JTagList = (JTagList_component.exports);
// CONCATENATED MODULE: ./packages/JTagList/index.js


JTagList.install = function (Vue) {
  return Vue.component(JTagList.name, JTagList);
}; //注册组件

/* harmony default export */ var packages_JTagList = (JTagList);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JToast/src/JToast.vue?vue&type=template&id=dbdac6ea&scoped=true&
var JToastvue_type_template_id_dbdac6ea_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.visible,
      expression: "visible"
    }]
  }, [_vm._v(_vm._s(_vm.message))])]);
};
var JToastvue_type_template_id_dbdac6ea_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JToast/src/JToast.vue?vue&type=template&id=dbdac6ea&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JToast/src/JToast.vue?vue&type=script&lang=js&
/* harmony default export */ var JToastvue_type_script_lang_js_ = ({
  name: "JToast",
  data: function data() {
    return {
      visible: false,
      message: ""
    };
  }
});
// CONCATENATED MODULE: ./packages/JToast/src/JToast.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JToastvue_type_script_lang_js_ = (JToastvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JToast/src/JToast.vue?vue&type=style&index=0&id=dbdac6ea&prod&scoped=true&lang=css&
var JToastvue_type_style_index_0_id_dbdac6ea_prod_scoped_true_lang_css_ = __webpack_require__("20b0");

// CONCATENATED MODULE: ./packages/JToast/src/JToast.vue






/* normalize component */

var JToast_component = normalizeComponent(
  src_JToastvue_type_script_lang_js_,
  JToastvue_type_template_id_dbdac6ea_scoped_true_render,
  JToastvue_type_template_id_dbdac6ea_scoped_true_staticRenderFns,
  false,
  null,
  "dbdac6ea",
  null
  
)

/* harmony default export */ var JToast = (JToast_component.exports);
// CONCATENATED MODULE: ./packages/JToast/index.js

JToast.install = function (Vue) {
  // 1.创建一个Vue的“子类”组件构造器
  var ToastConstructor = Vue.extend(JToast);

  // 2.创建一个该子类的实例,并挂载到一个元素上
  var instance = new ToastConstructor();

  // 3.将这个实例挂载到动态创建的元素上,并将元素添加到全局结构中
  instance.$mount(document.createElement("div"));
  //instance.$el对应的就是div
  document.body.appendChild(instance.$el);

  // 4.在Vue的原型链上注册方法，控制组件
  Vue.prototype.$JToast = function (msg) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
    instance.message = msg;
    instance.visible = true;
    setTimeout(function () {
      instance.visible = false;
    }, duration);
  };
};
/* harmony default export */ var packages_JToast = (JToast);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JWordCloud/src/JWordCloud.vue?vue&type=template&id=2e942070&scoped=true&
var JWordCloudvue_type_template_id_2e942070_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "j-word-cloud",
    style: 'min-height:' + _vm.height + 'px;width:' + _vm.width + 'px;'
  }, _vm._l(_vm.showTextList, function (item, index) {
    return _c('span', {
      key: index,
      style: _vm.getStyle(item, index),
      attrs: {
        "id": 'word-' + index
      }
    }, [_vm._v("\n            " + _vm._s(item.text) + "\n        ")]);
  }), 0)]);
};
var JWordCloudvue_type_template_id_2e942070_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JWordCloud/src/JWordCloud.vue?vue&type=template&id=2e942070&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JWordCloud/src/JWordCloud.vue?vue&type=script&lang=js&



/* harmony default export */ var JWordCloudvue_type_script_lang_js_ = ({
  name: "JWordCloud",
  props: {
    textList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    width: {
      type: Number,
      default: 300
    },
    colorList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    baseSize: {
      type: Number,
      default: 2
    },
    maxSize: {
      type: Number,
      default: 5
    },
    minSize: {
      type: Number,
      default: 1
    },
    transformDeg: {
      type: Array,
      default: function _default() {
        return [-45, 45];
      }
    }
  },
  data: function data() {
    return {
      maxFreq: 0,
      minFreq: 0,
      showTextList: [],
      pointList: [],
      height: 200
    };
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      this.initData();
      this.comShowtexList();
      this.getFourPoints();
    },
    //组合样式
    getStyle: function getStyle(item, index) {
      var height = parseFloat(item.size) * 16;
      var width = parseFloat(item.size) * 20 * item.text.length;
      var res = "";
      res += "font-size:" + item.size + ";";
      // res += "position: absolute;";
      res += "float: left;";
      // res +=
      //     "top:" +
      //     Math.max(0, Math.min(item.point.y, this.width - width)) +
      //     "px;";
      // res +=
      //     "left:" +
      //     Math.max(0, Math.min(item.point.x, this.height - height)) +
      //     "px;";
      res += "color:" + item.color + ";";
      // res += "transform:rotate(" + item.deg + "deg);";
      return res;
    },
    //计算旋转后的坐标
    getTransformPoint: function getTransformPoint(x, y, deg) {
      deg = parseFloat(deg);
      var rx = Math.cos(deg * Math.PI) / 180 * x,
        ry = Math.sin(deg * Math.PI) / 180 * x;
      return {
        tx: x + rx,
        ty: y + ry
      };
    },
    //随机获取坐标
    getRandomPoint: function getRandomPoint() {
      var width = this.width,
        height = this.height,
        pointList = this.pointList,
        showTextList = this.showTextList;
      var x = this.getRandomNum(0, width - 20),
        y = this.getRandomNum(0, height - 20);
      return {
        x: x,
        y: y
      };
    },
    //随机获取颜色
    getRandomColor: function getRandomColor() {
      var res = "rgb(";
      res += this.getRandomNum(0, 255) + ",";
      res += this.getRandomNum(0, 255) + ",";
      res += this.getRandomNum(0, 255) + ")";
      return res;
    },
    //随机获取角度
    getRandomdeg: function getRandomdeg() {
      var res = "";
      res += this.getRandomNum(this.transformDeg[0], this.transformDeg[1]);
      return res;
    },
    //获取随机数
    getRandomNum: function getRandomNum(minN, maxN) {
      return Math.floor(Math.random() * (maxN - minN + 1) + minN);
    },
    //初始化
    initData: function initData() {
      var textList = this.textList;
      var maxF = textList[0].freq,
        minF = textList[0].freq;
      textList.map(function (item) {
        maxF = Math.max(maxF, item.freq);
        minF = Math.min(minF, item.freq);
      });
      this.maxFreq = maxF;
      this.minFreq = minF;
    },
    //通过词频计算字体大小
    getSize: function getSize(freq) {
      var baseSize = (this.maxSize + this.minSize) / 2;
      var addSize = (this.maxSize - this.minSize) * (freq - this.minFreq) / (this.maxFreq - this.minFreq);
      return (this.minSize + addSize) / baseSize * this.baseSize + "rem";
    },
    //获取四个顶点坐标
    getFourPoints: function getFourPoints() {
      var _this = this;
      this.$nextTick(function () {
        var showTextList = _this.showTextList;
        var newHeight = 0;
        for (var i = 0; i < showTextList.length; i++) {
          var id = "word-" + i;
          var dom = document.getElementById(id);
          var tl = {
            x: dom.offsetLeft,
            y: dom.offsetTop
          };
          var tr = {
            x: dom.offsetLeft + dom.offsetWidth,
            y: dom.offsetTop
          };
          var bl = {
            x: dom.offsetLeft,
            y: dom.offsetTop + dom.offsetHeight
          };
          var br = {
            x: dom.offsetLeft + dom.offsetWidth,
            y: dom.offsetTop
          };
          newHeight = Math.max(newHeight, bl.y);
          showTextList[i].fourPoints = {
            tl: tl,
            tr: tr,
            bl: bl,
            br: br
          };
        }
        _this.height = newHeight;
      });
    },
    //组装显示列表属性数据
    comShowtexList: function comShowtexList() {
      var _this2 = this;
      var showTextList = [];
      this.textList.map(function (item) {
        var temp = item;
        temp.size = _this2.getSize(item.freq);
        var point = _this2.getRandomPoint();
        var color = _this2.getRandomColor();
        var deg = _this2.getRandomdeg();
        _this2.pointList.push(point);
        temp.point = point;
        temp.color = color;
        temp.deg = deg;
        showTextList.push(temp);
      });
      showTextList = showTextList.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      this.showTextList = showTextList;
    }
  }
});
// CONCATENATED MODULE: ./packages/JWordCloud/src/JWordCloud.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JWordCloudvue_type_script_lang_js_ = (JWordCloudvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JWordCloud/src/JWordCloud.vue?vue&type=style&index=0&id=2e942070&prod&lang=less&scoped=true&
var JWordCloudvue_type_style_index_0_id_2e942070_prod_lang_less_scoped_true_ = __webpack_require__("9962");

// CONCATENATED MODULE: ./packages/JWordCloud/src/JWordCloud.vue






/* normalize component */

var JWordCloud_component = normalizeComponent(
  src_JWordCloudvue_type_script_lang_js_,
  JWordCloudvue_type_template_id_2e942070_scoped_true_render,
  JWordCloudvue_type_template_id_2e942070_scoped_true_staticRenderFns,
  false,
  null,
  "2e942070",
  null
  
)

/* harmony default export */ var JWordCloud = (JWordCloud_component.exports);
// CONCATENATED MODULE: ./packages/JWordCloud/index.js


JWordCloud.install = function (Vue) {
  return Vue.component(JWordCloud.name, JWordCloud);
}; //注册组件

/* harmony default export */ var packages_JWordCloud = (JWordCloud);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JComment/src/JComment.vue?vue&type=template&id=fe76920e&scoped=true&
var JCommentvue_type_template_id_fe76920e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "j-comment",
    on: {
      "click": function click($event) {
        _vm.showVEmojiPicker = false;
      }
    }
  }, [_c('div', {
    attrs: {
      "id": "v-emoji-picker"
    },
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return function () {}.apply(null, arguments);
      }
    }
  }, [_c('VEmojiPicker', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showVEmojiPicker,
      expression: "showVEmojiPicker"
    }],
    on: {
      "select": _vm.selectEmoji
    }
  })], 1), _vm.withCommentContent ? _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.commentText,
      expression: "commentText"
    }],
    staticClass: "j-comment-content",
    attrs: {
      "id": "j-comment-content",
      "placeholder": "请输入评论"
    },
    domProps: {
      "value": _vm.commentText
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.commentText = $event.target.value;
      }, _vm.commentInput]
    }
  }) : _vm._e(), _vm.withCommentContent ? _c('div', {
    staticClass: "j-comment-content-btns"
  }, [_vm.useEmoji ? _c('img', {
    staticStyle: {
      "width": "20px",
      "height": "20px",
      "cursor": "pointer"
    },
    attrs: {
      "id": "comment-emoji",
      "src": __webpack_require__("c9d2")
    },
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.showEmoji.apply(null, arguments);
      }
    }
  }) : _vm._e(), _c('button', {
    on: {
      "click": function click($event) {
        return _vm.submitComment();
      }
    }
  }, [_vm._v("发表")])]) : _vm._e(), _vm.title !== '' ? _c('div', {
    staticClass: "j-comment-title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._l(_vm.showComentDatas, function (item, index) {
    return _c('div', {
      key: 'comment' + index,
      staticClass: "j-comment-item"
    }, [_c('div', {
      staticClass: "j-comment-header"
    }, [_c('div', {
      staticClass: "j-comment-header-pre"
    }, [_c('img', {
      staticClass: "j-comment-header-img",
      attrs: {
        "src": item.avatar
      }
    }), _c('span', {
      staticClass: "j-comment-header-nickname"
    }, [_vm._v(_vm._s(item.nickname)), item[_vm.keyMap.isAdmin] === 1 ? _c('span', {
      staticStyle: {
        "color": "skyblue"
      }
    }, [_vm._v("(博主)")]) : _vm._e()])]), _c('div', {
      staticClass: "j-comment-header-time"
    }, [_vm._v(_vm._s(item.create_time))])]), _c('div', {
      staticClass: "j-comment-body"
    }, [_vm._v("\n            " + _vm._s(_vm.entitiestoUtf16(item.content)) + "\n        ")]), _c('div', {
      staticClass: "j-comment-footer"
    }, [_c('img', {
      staticClass: "j-comment-icon",
      attrs: {
        "src": __webpack_require__("1f2d")
      },
      on: {
        "click": function click($event) {
          return _vm.replyClick(item, index);
        }
      }
    }), _c('span', {
      on: {
        "click": function click($event) {
          return _vm.replyClick(item, index);
        }
      }
    }, [_vm._v(_vm._s(item.showReply ? "取消回复" : item.children && item.children.length || ""))])]), item.showReply ? _c('textarea', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.replyText,
        expression: "replyText"
      }],
      staticClass: "j-comment-reply-content focused",
      attrs: {
        "id": 'reply-' + index,
        "placeholder": _vm.replyText == '' ? '回复' + item.nickname : ''
      },
      domProps: {
        "value": _vm.replyText
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.replyText = $event.target.value;
        }, _vm.replyInput]
      }
    }) : _vm._e(), item.showReply ? _c('div', {
      staticClass: "j-comment-reply-btns"
    }, [_vm.useEmoji ? _c('img', {
      staticClass: "emoji-btn",
      staticStyle: {
        "width": "20px",
        "height": "20px",
        "cursor": "pointer"
      },
      attrs: {
        "id": 'emoji-reply-' + index,
        "src": __webpack_require__("c9d2")
      },
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.showEmoji.apply(null, arguments);
        }
      }
    }) : _vm._e(), _c('button', {
      on: {
        "click": function click($event) {
          return _vm.submitReply(item.id);
        }
      }
    }, [_vm._v("发表")])]) : _vm._e(), item.children && item.children.length > 0 ? _c('div', {
      staticClass: "j-comment-childer"
    }, [_vm._l(item.showChildren, function (children, childrenIndex) {
      return _c('div', {
        key: 'children' + childrenIndex,
        staticClass: "j-comment-item"
      }, [_c('div', {
        staticClass: "j-comment-header"
      }, [_c('div', {
        staticClass: "j-comment-header-pre"
      }, [_c('img', {
        staticClass: "j-comment-header-img",
        attrs: {
          "src": children.avatar
        }
      }), _c('span', {
        staticClass: "j-comment-header-nickname"
      }, [_vm._v("\n                            " + _vm._s(children.nickname)), children[_vm.keyMap.isAdmin] === 1 ? _c('span', {
        staticStyle: {
          "color": "skyblue"
        }
      }, [_vm._v("(博主)")]) : _vm._e()])]), children.reply ? _c('div', {
        staticClass: "j-comment-header-reply-nickname"
      }, [_c('span', [_vm._v("回复")]), _vm._v(_vm._s(children.reply) + "\n                    ")]) : _vm._e(), _c('div', {
        staticClass: "j-comment-header-time"
      }, [_vm._v("\n                        " + _vm._s(children.create_time) + "\n                    ")])]), _c('div', {
        staticClass: "j-comment-body"
      }, [_vm._v("\n                    " + _vm._s(_vm.entitiestoUtf16(children.content)) + "\n                ")]), _c('div', {
        staticClass: "j-comment-footer"
      }, [_c('img', {
        staticClass: "j-comment-icon",
        attrs: {
          "src": __webpack_require__("1f2d")
        },
        on: {
          "click": function click($event) {
            return _vm.replyClick(item, index, children, childrenIndex, true);
          }
        }
      }), _c('span', {
        on: {
          "click": function click($event) {
            return _vm.replyClick(item, index, children, childrenIndex, true);
          }
        }
      }, [_vm._v(_vm._s(children.showReply ? "取消回复" : children.children && children.children.length || ""))])]), children.showReply ? _c('textarea', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.replyText,
          expression: "replyText"
        }],
        staticClass: "j-comment-reply-content focused",
        attrs: {
          "id": 'reply-' + index + '-' + childrenIndex,
          "placeholder": _vm.replyText == '' ? '回复' + children.nickname : ''
        },
        domProps: {
          "value": _vm.replyText
        },
        on: {
          "input": [function ($event) {
            if ($event.target.composing) return;
            _vm.replyText = $event.target.value;
          }, _vm.replyInput]
        }
      }) : _vm._e(), children.showReply ? _c('div', {
        staticClass: "j-comment-reply-btns"
      }, [_vm.useEmoji ? _c('img', {
        staticClass: "emoji-btn",
        staticStyle: {
          "width": "20px",
          "height": "20px",
          "cursor": "pointer"
        },
        attrs: {
          "id": 'emoji-reply-' + index + '-' + childrenIndex,
          "src": __webpack_require__("c9d2")
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            return _vm.showEmoji.apply(null, arguments);
          }
        }
      }) : _vm._e(), _c('button', {
        on: {
          "click": function click($event) {
            return _vm.submitReply(children[_vm.keyMap.id || 'id']);
          }
        }
      }, [_vm._v("\n                        发表\n                    ")])]) : _vm._e(), children.pContent ? _c('div', {
        staticClass: "j-comment-childer"
      }, [_c('div', {
        staticClass: "j-coment-children-content",
        attrs: {
          "title": _vm.entitiestoUtf16(children.pContent)
        }
      }, [_vm._v("\n                        " + _vm._s(_vm.entitiestoUtf16(children.pContent)) + "\n                    ")])]) : _vm._e()]);
    }), item.showChildren.length < item.children.length ? _c('div', {
      key: 'more' + index,
      staticClass: "j-comment-childer-more",
      on: {
        "click": function click($event) {
          return _vm.showMore(item, index);
        }
      }
    }, [_vm._v("\n                查看更多回复∨\n            ")]) : item.showChildren.length > _vm.showNumber ? _c('div', {
      key: 'more' + index,
      staticClass: "j-comment-childer-more",
      on: {
        "click": function click($event) {
          return _vm.showMore(item, index);
        }
      }
    }, [_vm._v("\n                收起回复∧\n            ")]) : _vm._e()], 2) : _vm._e()]);
  })], 2);
};
var JCommentvue_type_template_id_fe76920e_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JComment/src/JComment.vue?vue&type=template&id=fe76920e&scoped=true&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/_vue-class-component@7.2.6@vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function vue_class_component_esm_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function vue_class_component_esm_toConsumableArray(arr) {
  return vue_class_component_esm_arrayWithoutHoles(arr) || vue_class_component_esm_iterableToArray(arr) || vue_class_component_esm_nonIterableSpread();
}

function vue_class_component_esm_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function vue_class_component_esm_iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function vue_class_component_esm_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      Object.defineProperty(_this, key, {
        get: function get() {
          return vm[key];
        },
        set: function set(value) {
          vm[key] = value;
        },
        configurable: true
      });
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (false) {}

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return vue_class_component_esm_defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof external_commonjs_vue_commonjs2_vue_root_Vue_default.a ? superProto.constructor : external_commonjs_vue_commonjs2_vue_root_Vue_default.a;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if (false) {}

    Object.defineProperty(Extended, key, descriptor);
  });
}

function vue_class_component_esm_Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, vue_class_component_esm_toConsumableArray(keys));
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/decorators/Emit.js
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, __spreadArrays([emitName], args));
                    }
                }
                else {
                    args.unshift(returnValue);
                    _this.$emit.apply(_this, __spreadArrays([emitName], args));
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/decorators/Inject.js

/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/helpers/provideInject.js
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = Object.create(this[reactiveInjectKey] || {});
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                enumerable: true,
                configurable: true,
                get: function () { return _this[i]; },
            });
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
function inheritInjected(componentOptions) {
    // inject parent reactive services (if any)
    if (!Array.isArray(componentOptions.inject)) {
        componentOptions.inject = componentOptions.inject || {};
        componentOptions.inject[reactiveInjectKey] = {
            from: reactiveInjectKey,
            default: {},
        };
    }
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/decorators/InjectReactive.js


/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/helpers/metadata.js
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            !options.hasOwnProperty('type') &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/decorators/Model.js


/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/decorators/ModelSync.js


/**
 * decorator of synced model and prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function ModelSync(propName, event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            componentOptions.model = { prop: propName, event: event || k };
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit(event, value);
                },
            };
        })(target, key);
    };
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/decorators/Prop.js


/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/decorators/PropSync.js


/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/decorators/Provide.js


/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        inheritInjected(componentOptions);
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managed[k] = key || k;
    });
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/decorators/ProvideReactive.js


/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        inheritInjected(componentOptions);
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managedReactive[k] = key || k;
    });
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/decorators/Ref.js

/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return createDecorator(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/decorators/VModel.js

/**
 * decorator for capturings v-model binding to component
 * @param options the options for the prop
 */
function VModel(options) {
    if (options === void 0) { options = {}; }
    var valueKey = 'value';
    return createDecorator(function (componentOptions, key) {
        ;
        (componentOptions.props || (componentOptions.props = {}))[valueKey] = options;
        (componentOptions.computed || (componentOptions.computed = {}))[key] = {
            get: function () {
                return this[valueKey];
            },
            set: function (value) {
                this.$emit('input', value);
            },
        };
    });
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/decorators/Watch.js

/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}

// CONCATENATED MODULE: ./node_modules/_vue-property-decorator@9.1.2@vue-property-decorator/lib/index.js
/** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>
















// CONCATENATED MODULE: ./node_modules/_v-emoji-picker@2.3.3@v-emoji-picker/lib/v-emoji-picker.esm.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}var langDefault = {
    search: 'Search ...',
    categories: {
        Activity: "Activity",
        Flags: "Flags",
        Foods: "Foods",
        Frequently: "Frequently",
        Objects: "Objects",
        Nature: "Nature",
        Peoples: "Peoples",
        Symbols: "Symbols",
        Places: "Places"
    }
};var lang = langDefault;
var i18n = function (translations) {
    lang = __assign(__assign({}, langDefault), translations);
};
// Sample parse translation
var v_emoji_picker_esm_t = function (term) {
    var properties = term.split(".");
    var text = lang;
    properties.forEach(function (p) {
        text = text[p];
    });
    return text;
};
var locale = { i18n: i18n, t: v_emoji_picker_esm_t };var Category = /** @class */ (function () {
    function Category(name, icon) {
        this.name = name;
        this.icon = icon;
    }
    Object.defineProperty(Category.prototype, "label", {
        get: function () {
            return v_emoji_picker_esm_t("categories." + this.name);
        },
        enumerable: false,
        configurable: true
    });
    return Category;
}());var icons = {
    activity: "\n    <svg style=\"max-height:18px\" width=\"24\" height=\"24\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 303.6 303.6\" fill=\"gray\">\n      <path d=\"M291.503 11.6c-10.4-10.4-37.2-11.6-48.4-11.6-50.4 0-122.4 18.4-173.6 69.6-77.2 76.8-78.4 201.6-58.4 222 10.8 10.4 35.6 12 49.2 12 49.6 0 121.2-18.4 173.2-70 76.4-76.4 80.4-199.6 58-222zm-231.2 277.2c-24.4 0-36-4.8-38.8-7.6-5.2-5.2-8.4-24.4-6.8-49.6l57.2 56.8c-4 .4-8 .4-11.6.4zm162.8-66c-38.8 38.8-90.4 57.2-132.4 63.6l-74-73.6c6-42 24-94 63.2-133.2 38-38 88-56.4 130.8-62.8l75.6 75.6c-6 40.8-24.4 91.6-63.2 130.4zm65.2-148.8l-58.8-59.2c4.8-.4 9.2-.4 13.6-.4 24.4 0 35.6 4.8 38 7.2 5.6 5.6 9.2 25.6 7.2 52.4z\"/>\n      <path d=\"M215.103 139.6l-20.8-20.8 13.2-13.2c2.8-2.8 2.8-7.6 0-10.4s-7.6-2.8-10.4 0l-13.2 13.6-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0-2.8 2.8-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-13.2 13.2c-2.8 2.8-2.8 7.6 0 10.4 1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2l13.2-13.2 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-21.2 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-20.8 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4zM169.103 47.6c-1.2-4-5.2-6-9.2-4.8-3.2 1.2-80.8 25.6-110.4 98-1.6 4 0 8.4 4 9.6.8.4 2 .4 2.8.4 2.8 0 5.6-1.6 6.8-4.4 27.2-66 100.4-89.6 101.2-89.6 4-1.2 6-5.2 4.8-9.2z\"/>\n    </svg>\n    ",
    flags: "\n    <svg style=\"max-height:18px\" width=\"24\" height=\"24\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" fill=\"gray\">\n      <path d=\"M472.928 34.72c-4.384-2.944-9.984-3.52-14.912-1.568-1.088.448-106.528 42.176-195.168.384C186.752-2.4 102.944 14.4 64 25.76V16c0-8.832-7.168-16-16-16S32 7.168 32 16v480c0 8.832 7.168 16 16 16s16-7.168 16-16V315.296c28.352-9.248 112.384-31.232 185.184 3.168 34.592 16.352 70.784 21.792 103.648 21.792 63.2 0 114.016-20.128 117.184-21.408 6.016-2.464 9.984-8.32 9.984-14.848V48c0-5.312-2.656-10.272-7.072-13.28zM448 292.672c-28.512 9.248-112.512 31.136-185.184-3.168C186.752 253.6 102.944 270.4 64 281.76V59.328c28.352-9.248 112.384-31.232 185.184 3.168 76 35.872 159.872 19.104 198.816 7.712v222.464z\"/>\n    </svg>\n    ",
    foods: "\n    <svg style=\"max-height:18px\" width=\"24\" height=\"24\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 511.999 511.999\" fill=\"gray\">\n      <path d=\"M413.949 155.583a10.153 10.153 0 0 0-3.24-2.16c-.61-.25-1.24-.44-1.87-.57-3.25-.66-6.701.41-9.03 2.73a10.093 10.093 0 0 0-2.93 7.07 10.098 10.098 0 0 0 1.69 5.56c.36.54.779 1.05 1.24 1.52 1.86 1.86 4.44 2.93 7.07 2.93.65 0 1.31-.07 1.96-.2.63-.13 1.26-.32 1.87-.57a10.146 10.146 0 0 0 3.24-2.16c.47-.47.88-.98 1.25-1.52a10.098 10.098 0 0 0 1.49-3.6 10.038 10.038 0 0 0-2.74-9.03zM115.289 385.873c-.12-.64-.32-1.27-.57-1.87-.25-.6-.55-1.18-.91-1.73-.37-.54-.79-1.06-1.25-1.52a9.57 9.57 0 0 0-1.52-1.24c-.54-.36-1.12-.67-1.72-.92-.61-.25-1.24-.44-1.88-.57a9.847 9.847 0 0 0-3.9 0c-.64.13-1.27.32-1.87.57-.61.25-1.19.56-1.73.92-.55.36-1.06.78-1.52 1.24-.46.46-.88.98-1.24 1.52-.36.55-.67 1.13-.92 1.73-.25.6-.45 1.23-.57 1.87-.13.651-.2 1.3-.2 1.96 0 .65.07 1.3.2 1.95.12.64.32 1.27.57 1.87.25.6.56 1.18.92 1.73.36.54.78 1.06 1.24 1.52.46.46.97.88 1.52 1.24.54.36 1.12.67 1.73.92.6.25 1.23.44 1.87.57s1.3.2 1.95.2c.65 0 1.31-.07 1.95-.2.64-.13 1.27-.32 1.88-.57.6-.25 1.18-.56 1.72-.92.55-.36 1.059-.78 1.52-1.24.46-.46.88-.98 1.25-1.52.36-.55.66-1.13.91-1.73.25-.6.45-1.23.57-1.87.13-.65.2-1.3.2-1.95 0-.66-.07-1.31-.2-1.96z\"/>\n      <path d=\"M511.999 222.726c0-14.215-9.228-26.315-22.007-30.624-1.628-74.155-62.456-133.978-136.994-133.978H159.002c-74.538 0-135.366 59.823-136.994 133.978C9.228 196.411 0 208.51 0 222.726a32.076 32.076 0 0 0 3.847 15.203 44.931 44.931 0 0 0-.795 8.427v.708c0 14.06 6.519 26.625 16.693 34.833-10.178 8.275-16.693 20.891-16.693 35.001 0 15.114 7.475 28.515 18.921 36.702v26.668c0 40.588 33.021 73.608 73.608 73.608h320.836c40.588 0 73.608-33.021 73.608-73.608V353.6c11.446-8.186 18.921-21.587 18.921-36.702 0-13.852-6.354-26.385-16.361-34.702 9.983-8.212 16.361-20.656 16.361-34.562v-.708c0-2.985-.294-5.944-.877-8.845a32.082 32.082 0 0 0 3.93-15.355zM44.033 173.229h322.441c5.523 0 10-4.477 10-10s-4.477-10-10-10H49.737c16.896-43.883 59.503-75.106 109.265-75.106h193.996c62.942 0 114.438 49.953 116.934 112.295H42.068c.234-5.848.9-11.588 1.965-17.189zM23.052 316.896c0-13.837 11.257-25.094 25.094-25.094h117.298l55.346 50.188H48.146c-13.837 0-25.094-11.256-25.094-25.094zm.976-62.945c.422.111.847.215 1.275.309 7.421 1.634 14.68 8.002 22.365 14.744a576.29 576.29 0 0 0 3.206 2.799h-3.081c-11.253-.001-20.774-7.551-23.765-17.852zm308.727 89.752l57.233-51.899 49.904.57-81.871 74.24-25.266-22.911zm7.861 34.126H295.12l17.467-15.839h10.563l17.466 15.839zm19.599-86.027l-82.499 74.811-82.499-74.811h164.998zm-59.529-20c.849-.842 1.677-1.675 2.49-2.493 9.531-9.587 17.059-17.16 32.89-17.16 15.832 0 23.359 7.573 32.89 17.162.812.817 1.64 1.65 2.489 2.491h-70.759zm-160.13 0a485.82 485.82 0 0 0 2.489-2.492c9.531-9.588 17.059-17.161 32.89-17.161 15.83 0 23.358 7.573 32.888 17.16.813.818 1.641 1.651 2.49 2.493h-70.757zm275.862 162.073H95.582c-29.56 0-53.608-24.049-53.608-53.608v-18.275h200.872l17.467 15.839H145.897c-5.523 0-10 4.477-10 10s4.477 10 10 10H467.07c-7.288 20.958-27.242 36.044-50.652 36.044zm53.608-56.046h-94.6l17.467-15.839h77.133v15.839zm-6.174-35.837h-48.906l54.624-49.533c11.135 2.604 19.376 12.665 19.376 24.439 0 13.836-11.257 25.094-25.094 25.094zm-2.728-70.19l.262-.227.101-.087.342-.298c.848-.738 1.682-1.469 2.501-2.187 4.105-3.601 8.089-7.095 12.04-9.819 3.446-2.375 6.868-4.164 10.326-4.925l.359-.081.04-.01.317-.076.065-.016a22.897 22.897 0 0 0 .42-.107l.196-.052a.374.374 0 0 0 .048-.012c-2.433 9.276-10.129 16.443-19.691 18.102a9.984 9.984 0 0 0-2.016-.205h-5.31zm21.271-37.073a40.746 40.746 0 0 0-4.536 1.281c-10.109 3.489-18.327 10.602-26.283 17.58l-.434.381c-9.178 8.052-17.923 15.723-29.033 17.834h-13.146c-11.249-1.93-17.833-8.552-25.823-16.591-10.213-10.275-22.923-23.062-47.074-23.062-24.15 0-36.86 12.786-47.074 23.06-7.992 8.04-14.576 14.663-25.829 16.593h-14.327c-11.253-1.93-17.837-8.553-25.829-16.593-10.213-10.274-22.923-23.06-47.072-23.06-24.151 0-36.861 12.787-47.074 23.062-7.991 8.039-14.574 14.661-25.824 16.591h-7.065c-14.134 0-24.325-8.939-35.113-18.404-9.248-8.112-18.81-16.501-31.252-19.241a12.237 12.237 0 0 1-7.025-4.453 10.027 10.027 0 0 0-1.153-1.252 12.234 12.234 0 0 1-1.428-5.727c-.001-6.788 5.52-12.309 12.307-12.309h447.384c6.787 0 12.308 5.521 12.308 12.308 0 5.729-4.039 10.776-9.605 12.002z\"/>\n    </svg>\n    ",
    frequently: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 219.15 219.15\" width=\"24\" height=\"24\" fill=\"gray\">\n      <path d=\"M109.575 0C49.156 0 .001 49.155.001 109.574c0 60.42 49.154 109.576 109.573 109.576 60.42 0 109.574-49.156 109.574-109.576C219.149 49.155 169.995 0 109.575 0zm0 204.15c-52.148 0-94.573-42.427-94.573-94.576C15.001 57.426 57.427 15 109.575 15c52.148 0 94.574 42.426 94.574 94.574 0 52.15-42.426 94.576-94.574 94.576z\"/>\n      <path d=\"M166.112 108.111h-52.051V51.249a7.5 7.5 0 0 0-15 0v64.362a7.5 7.5 0 0 0 7.5 7.5h59.551a7.5 7.5 0 0 0 0-15z\"/>\n    </svg>\n    ",
    nature: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"24\" height=\"24\" fill=\"gray\">\n      <path d=\"M490.815 3.784C480.082 5.7 227.049 51.632 148.477 130.203c-39.153 39.153-64.259 87.884-70.694 137.218-5.881 45.081 4.347 85.929 28.878 116.708L.001 490.789 21.212 512l106.657-106.657c33.094 26.378 75.092 34.302 116.711 28.874 49.334-6.435 98.065-31.541 137.218-70.695C460.368 284.951 506.3 31.918 508.216 21.185L511.999 0l-21.184 3.784zm-43.303 39.493L309.407 181.383l-7.544-98.076c46.386-15.873 97.819-29.415 145.649-40.03zm-174.919 50.64l8.877 115.402-78.119 78.119-11.816-153.606c19.947-13.468 47.183-26.875 81.058-39.915zm-109.281 64.119l12.103 157.338-47.36 47.36c-39.246-52.892-24.821-139.885 35.257-204.698zm57.113 247.849c-26.548-.001-51.267-7.176-71.161-21.938l47.363-47.363 157.32 12.102c-40.432 37.475-89.488 57.201-133.522 57.199zm157.743-85.421l-153.605-11.816 78.118-78.118 115.403 8.877c-13.04 33.876-26.448 61.111-39.916 81.057zm50.526-110.326l-98.076-7.544L468.725 64.485c-10.589 47.717-24.147 99.232-40.031 145.653z\"/>\n    </svg>\n    ",
    objects: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 792 792\" fill=\"gray\">\n      <path d=\"M425.512 741.214H365.58c-14.183 0-25.164 11.439-25.164 25.622S351.397 792 365.58 792h59.932c15.101 0 26.54-10.981 26.54-25.164s-11.44-25.622-26.54-25.622zM472.638 671.209H319.821c-14.183 0-26.081 10.98-26.081 25.163s11.898 25.164 26.081 25.164h152.817c14.183 0 25.164-10.981 25.164-25.164s-10.982-25.163-25.164-25.163zM639.188 138.634c-25.164-42.548-59.181-76.135-102.49-101.113C493.526 12.621 446.566 0 395.771 0 320.28 0 247.19 31.684 197.205 81.445c-49.761 49.527-81.904 121.24-81.904 196.282 0 33.861 7.779 68.629 22.879 103.866 15.1 35.228 38.565 78.614 70.005 130.396 7.448 12.269 15.764 31.205 25.623 56.271 12.104 30.757 22.87 51.713 31.566 63.602 5.027 6.872 11.899 10.063 20.596 10.063h228.766c9.605 0 16.359-4.188 21.504-11.898 6.754-10.132 13.987-27.516 22.42-51.693 8.951-25.691 16.838-43.982 23.329-55.364 30.571-53.587 54.446-99.747 70.464-137.717 16.018-37.979 24.246-74.124 24.246-107.526 0-49.878-12.347-96.545-37.511-139.093zm-35.696 232.437c-15.012 34.348-36.398 76.974-65.427 126.736-9.41 16.125-18.458 37.003-26.989 63.592-3.367 10.474-7.32 20.596-11.439 30.2H300.153c-6.862-11.439-12.26-25.837-18.761-42.089-12.718-31.801-23.338-52.621-30.2-64.061-28.824-48.043-49.868-87.39-64.051-118.957s-20.537-60.859-21.044-88.766c-2.235-121.718 106.13-228.991 229.674-226.941 41.631.693 80.527 10.063 115.765 30.659 35.227 20.586 63.134 48.043 83.729 82.812 20.586 34.768 31.108 72.748 31.108 113.47-.001 27.449-7.692 58.596-22.881 93.345z\"/>\n    </svg>\n    ",
    peoples: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 106.059 106.059\" fill=\"gray\">\n      <path d=\"M90.544 90.542c20.687-20.684 20.685-54.341.002-75.024-20.688-20.689-54.347-20.689-75.031-.006-20.688 20.687-20.686 54.346.002 75.034 20.682 20.684 54.341 20.684 75.027-.004zM21.302 21.3c17.494-17.493 45.959-17.495 63.457.002 17.494 17.494 17.492 45.963-.002 63.455-17.494 17.494-45.96 17.496-63.455.003-17.498-17.498-17.496-45.966 0-63.46zM27 69.865s-2.958-11.438 6.705-8.874c0 0 17.144 9.295 38.651 0 9.662-2.563 6.705 8.874 6.705 8.874C73.539 86.824 53.03 85.444 53.03 85.444S32.521 86.824 27 69.865zm6.24-31.194a6.202 6.202 0 1 1 12.399.001 6.202 6.202 0 0 1-12.399-.001zm28.117 0a6.202 6.202 0 1 1 12.403.001 6.202 6.202 0 0 1-12.403-.001z\"/>\n    </svg>\n    ",
    places: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 611.999 611.998\" fill=\"gray\">\n      <path d=\"M596.583 15.454C586.226 5.224 573.354.523 558.423.523c-15.597 0-31.901 4.906-49.452 14.599-17.296 9.551-32.851 20.574-46.458 32.524h-.665c-2.655 2.322-10.953 10.287-25.219 24.553-14.272 14.272-26.217 26.223-35.845 36.51L112.401 26.406c-6.896-1.968-12.928.014-17.593 4.645L46.687 78.839c-4.326 4.297-5.805 9.268-4.977 15.597.829 6.287 3.979 10.627 9.629 13.607L280.32 228.839 161.514 347.978l-95.91 3.32c-4.645.164-8.637 1.643-12.276 5.311L5.872 404.397c-4.312 4.34-6.641 9.289-5.643 16.262 1.657 6.967 5.31 11.611 11.618 13.602l117.142 48.787 48.787 117.148c2.421 5.812 6.634 9.621 13.607 11.279h3.313c4.977 0 9.296-1.658 12.942-5.311l47.456-47.457c3.653-3.645 5.494-7.965 5.643-12.275l3.32-95.91 118.807-118.807 121.128 228.99c2.988 5.643 7.32 8.793 13.607 9.621 6.329.836 11.271-1.316 15.597-5.643l47.456-47.457c4.978-4.977 6.945-10.697 4.978-17.586l-82.296-288.389 59.732-59.739c10.287-10.287 21.699-24.149 33.183-45.134 5.777-10.542 10.032-20.886 12.942-31.194 5.722-20.218 3.258-44.07-12.608-59.73zm-59.4 110.176l-67.039 67.372c-5.628 5.657-6.811 11.122-4.977 17.586l81.637 288.388-22.563 22.238L403.438 292.89c-2.98-5.643-7.299-8.963-12.941-9.621-6.301-1.331-11.611.325-16.263 4.977l-141.37 141.37c-2.987 2.986-4.644 6.973-5.643 11.949l-3.32 95.904-22.896 23.236-41.48-98.566c-1.331-4.645-4.553-8.184-9.629-10.287L51.338 411.03l23.229-22.895 95.578-3.654c5.643-.99 9.622-2.654 12.276-5.309l141.37-141.371c4.651-4.645 6.308-9.954 4.984-16.262-.666-5.643-3.986-9.954-9.629-12.942L90.829 87.47l22.231-22.238 288.389 81.637c6.464 1.833 11.951.666 17.587-4.977l28.545-28.539 26.217-25.884 11.278-11.285 1.331-.666c27.873-23.895 55.088-38.16 72.016-38.16 5.969 0 9.954 1.324 11.611 3.979 18.917 18.585-21.099 72.484-32.851 84.293z\"/>\n    </svg>\n    ",
    symbols: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 511.626 511.626\" fill=\"gray\">\n      <path d=\"M475.366 71.949c-24.175-23.606-57.575-35.404-100.215-35.404-11.8 0-23.843 2.046-36.117 6.136-12.279 4.093-23.702 9.615-34.256 16.562-10.568 6.945-19.65 13.467-27.269 19.556a263.828 263.828 0 0 0-21.696 19.414 264.184 264.184 0 0 0-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556-10.564-6.95-21.985-12.468-34.261-16.562-12.275-4.089-24.316-6.136-36.116-6.136-42.637 0-76.039 11.801-100.211 35.404C12.087 95.55 0 128.286 0 170.16c0 12.753 2.24 25.891 6.711 39.398 4.471 13.514 9.566 25.031 15.275 34.546 5.708 9.514 12.181 18.792 19.414 27.834 7.233 9.041 12.519 15.272 15.846 18.698 3.33 3.426 5.948 5.903 7.851 7.427L243.25 469.938c3.427 3.426 7.614 5.144 12.562 5.144s9.138-1.718 12.563-5.144l177.87-171.31c43.588-43.58 65.38-86.406 65.38-128.472.001-41.877-12.085-74.61-36.259-98.207zm-53.961 199.846L255.813 431.391 89.938 271.507C54.344 235.922 36.55 202.133 36.55 170.156c0-15.415 2.046-29.026 6.136-40.824 4.093-11.8 9.327-21.177 15.703-28.124 6.377-6.949 14.132-12.607 23.268-16.988 9.141-4.377 18.086-7.328 26.84-8.85 8.754-1.52 18.079-2.281 27.978-2.281 9.896 0 20.557 2.424 31.977 7.279 11.418 4.853 21.934 10.944 31.545 18.271 9.613 7.332 17.845 14.183 24.7 20.557 6.851 6.38 12.559 12.229 17.128 17.559 3.424 4.189 8.091 6.283 13.989 6.283 5.9 0 10.562-2.094 13.99-6.283 4.568-5.33 10.28-11.182 17.131-17.559 6.852-6.374 15.085-13.222 24.694-20.557 9.613-7.327 20.129-13.418 31.553-18.271 11.416-4.854 22.08-7.279 31.977-7.279s19.219.761 27.977 2.281c8.757 1.521 17.702 4.473 26.84 8.85 9.137 4.38 16.892 10.042 23.267 16.988 6.376 6.947 11.612 16.324 15.705 28.124 4.086 11.798 6.132 25.409 6.132 40.824-.002 31.977-17.89 65.86-53.675 101.639z\"/>\n    </svg>\n    "
};
var categoriesDefault = [
    new Category("Frequently", icons["frequently"]),
    new Category("Peoples", icons["peoples"]),
    new Category("Nature", icons["nature"]),
    new Category("Foods", icons["foods"]),
    new Category("Activity", icons["activity"]),
    new Category("Objects", icons["objects"]),
    new Category("Places", icons["places"]),
    new Category("Symbols", icons["symbols"]),
    new Category("Flags", icons["flags"])
];var Emoji = /** @class */ (function () {
    function Emoji(data, category, aliases) {
        this.data = data;
        this.category = category;
        this.aliases = aliases;
    }
    return Emoji;
}());var emojisDefault = [
    new Emoji("😀", "Peoples", ["grinning"]),
    new Emoji("😃", "Peoples", ["smiley"]),
    new Emoji("😄", "Peoples", ["smile"]),
    new Emoji("😁", "Peoples", ["grin"]),
    new Emoji("😆", "Peoples", ["laughing", "satisfied"]),
    new Emoji("😅", "Peoples", ["sweat_smile"]),
    new Emoji("😂", "Peoples", ["joy"]),
    new Emoji("🤣", "Peoples", ["rofl"]),
    new Emoji("😌", "Peoples", ["relaxed"]),
    new Emoji("😊", "Peoples", ["blush"]),
    new Emoji("😇", "Peoples", ["innocent"]),
    new Emoji("🙂", "Peoples", ["slightly_smiling_face"]),
    new Emoji("🙃", "Peoples", ["upside_down_face"]),
    new Emoji("😉", "Peoples", ["wink"]),
    new Emoji("😌", "Peoples", ["relieved"]),
    new Emoji("😍", "Peoples", ["heart_eyes"]),
    new Emoji("😘", "Peoples", ["kissing_heart"]),
    new Emoji("😗", "Peoples", ["kissing"]),
    new Emoji("😙", "Peoples", ["kissing_smiling_eyes"]),
    new Emoji("😚", "Peoples", ["kissing_closed_eyes"]),
    new Emoji("😋", "Peoples", ["yum"]),
    new Emoji("😜", "Peoples", ["stuck_out_tongue_winking_eye"]),
    new Emoji("😝", "Peoples", ["stuck_out_tongue_closed_eyes"]),
    new Emoji("😛", "Peoples", ["stuck_out_tongue"]),
    new Emoji("🤑", "Peoples", ["money_mouth_face"]),
    new Emoji("🤗", "Peoples", ["hugs"]),
    new Emoji("🤓", "Peoples", ["nerd_face"]),
    new Emoji("😎", "Peoples", ["sunglasses"]),
    new Emoji("🤡", "Peoples", ["clown_face"]),
    new Emoji("🤠", "Peoples", ["cowboy_hat_face"]),
    new Emoji("😏", "Peoples", ["smirk"]),
    new Emoji("😒", "Peoples", ["unamused"]),
    new Emoji("😞", "Peoples", ["disappointed"]),
    new Emoji("😔", "Peoples", ["pensive"]),
    new Emoji("😟", "Peoples", ["worried"]),
    new Emoji("😕", "Peoples", ["confused"]),
    new Emoji("🙁", "Peoples", ["slightly_frowning_face"]),
    new Emoji("☹️", "Peoples", ["frowning_face"]),
    new Emoji("😣", "Peoples", ["persevere"]),
    new Emoji("😖", "Peoples", ["confounded"]),
    new Emoji("😫", "Peoples", ["tired_face"]),
    new Emoji("😩", "Peoples", ["weary"]),
    new Emoji("😤", "Peoples", ["triumph"]),
    new Emoji("😠", "Peoples", ["angry"]),
    new Emoji("😡", "Peoples", ["rage", "pout"]),
    new Emoji("😶", "Peoples", ["no_mouth"]),
    new Emoji("😐", "Peoples", ["neutral_face"]),
    new Emoji("😑", "Peoples", ["expressionless"]),
    new Emoji("😯", "Peoples", ["hushed"]),
    new Emoji("😦", "Peoples", ["frowning"]),
    new Emoji("😧", "Peoples", ["anguished"]),
    new Emoji("😮", "Peoples", ["open_mouth"]),
    new Emoji("😲", "Peoples", ["astonished"]),
    new Emoji("😵", "Peoples", ["dizzy_face"]),
    new Emoji("😳", "Peoples", ["flushed"]),
    new Emoji("😱", "Peoples", ["scream"]),
    new Emoji("😨", "Peoples", ["fearful"]),
    new Emoji("😰", "Peoples", ["cold_sweat"]),
    new Emoji("😢", "Peoples", ["cry"]),
    new Emoji("😥", "Peoples", ["disappointed_relieved"]),
    new Emoji("🤤", "Peoples", ["drooling_face"]),
    new Emoji("😭", "Peoples", ["sob"]),
    new Emoji("😓", "Peoples", ["sweat"]),
    new Emoji("😪", "Peoples", ["sleepy"]),
    new Emoji("😴", "Peoples", ["sleeping"]),
    new Emoji("🙄", "Peoples", ["roll_eyes"]),
    new Emoji("🤔", "Peoples", ["thinking"]),
    new Emoji("🤥", "Peoples", ["lying_face"]),
    new Emoji("😬", "Peoples", ["grimacing"]),
    new Emoji("🤐", "Peoples", ["zipper_mouth_face"]),
    new Emoji("🤢", "Peoples", ["nauseated_face"]),
    new Emoji("🤧", "Peoples", ["sneezing_face"]),
    new Emoji("😷", "Peoples", ["mask"]),
    new Emoji("🤒", "Peoples", ["face_with_thermometer"]),
    new Emoji("🤕", "Peoples", ["face_with_head_bandage"]),
    new Emoji("😈", "Peoples", ["smiling_imp"]),
    new Emoji("👿", "Peoples", ["imp"]),
    new Emoji("👹", "Peoples", ["japanese_ogre"]),
    new Emoji("👺", "Peoples", ["japanese_goblin"]),
    new Emoji("💩", "Peoples", ["hankey", "poop", "shit"]),
    new Emoji("👻", "Peoples", ["ghost"]),
    new Emoji("💀", "Peoples", ["skull"]),
    new Emoji("☠️", "Peoples", ["skull_and_crossbones"]),
    new Emoji("👽", "Peoples", ["alien"]),
    new Emoji("👾", "Peoples", ["space_invader"]),
    new Emoji("🤖", "Peoples", ["robot"]),
    new Emoji("🎃", "Peoples", ["jack_o_lantern"]),
    new Emoji("😺", "Peoples", ["smiley_cat"]),
    new Emoji("😸", "Peoples", ["smile_cat"]),
    new Emoji("😹", "Peoples", ["joy_cat"]),
    new Emoji("😻", "Peoples", ["heart_eyes_cat"]),
    new Emoji("😼", "Peoples", ["smirk_cat"]),
    new Emoji("😽", "Peoples", ["kissing_cat"]),
    new Emoji("🙀", "Peoples", ["scream_cat"]),
    new Emoji("😿", "Peoples", ["crying_cat_face"]),
    new Emoji("😾", "Peoples", ["pouting_cat"]),
    new Emoji("👐", "Peoples", ["open_hands"]),
    new Emoji("🙌", "Peoples", ["raised_hands"]),
    new Emoji("👏", "Peoples", ["clap"]),
    new Emoji("🙏", "Peoples", ["pray"]),
    new Emoji("🤝", "Peoples", ["handshake"]),
    new Emoji("👍", "Peoples", ["+1", "thumbsup"]),
    new Emoji("👎", "Peoples", ["-1", "thumbsdown"]),
    new Emoji("👊", "Peoples", ["fist_oncoming", "facepunch", "punch"]),
    new Emoji("✊", "Peoples", ["fist_raised", "fist"]),
    new Emoji("🤛", "Peoples", ["fist_left"]),
    new Emoji("🤜", "Peoples", ["fist_right"]),
    new Emoji("🤞", "Peoples", ["crossed_fingers"]),
    new Emoji("✌️", "Peoples", ["v"]),
    new Emoji("🤘", "Peoples", ["metal"]),
    new Emoji("👌", "Peoples", ["ok_hand"]),
    new Emoji("👈", "Peoples", ["point_left"]),
    new Emoji("👉", "Peoples", ["point_right"]),
    new Emoji("👆", "Peoples", ["point_up_2"]),
    new Emoji("👇", "Peoples", ["point_down"]),
    new Emoji("☝️", "Peoples", ["point_up"]),
    new Emoji("✋", "Peoples", ["hand", "raised_hand"]),
    new Emoji("🤚", "Peoples", ["raised_back_of_hand"]),
    new Emoji("🖐", "Peoples", ["raised_hand_with_fingers_splayed"]),
    new Emoji("🖖", "Peoples", ["vulcan_salute"]),
    new Emoji("👋", "Peoples", ["wave"]),
    new Emoji("🤙", "Peoples", ["call_me_hand"]),
    new Emoji("💪", "Peoples", ["muscle"]),
    new Emoji("🖕", "Peoples", ["middle_finger", "fu"]),
    new Emoji("✍️", "Peoples", ["writing_hand"]),
    new Emoji("🤳", "Peoples", ["selfie"]),
    new Emoji("💅", "Peoples", ["nail_care"]),
    new Emoji("💍", "Peoples", ["ring"]),
    new Emoji("💄", "Peoples", ["lipstick"]),
    new Emoji("💋", "Peoples", ["kiss"]),
    new Emoji("👄", "Peoples", ["lips"]),
    new Emoji("👅", "Peoples", ["tongue"]),
    new Emoji("👂", "Peoples", ["ear"]),
    new Emoji("👃", "Peoples", ["nose"]),
    new Emoji("👣", "Peoples", ["footprints"]),
    new Emoji("👁", "Peoples", ["eye"]),
    new Emoji("👀", "Peoples", ["eyes"]),
    new Emoji("🗣", "Peoples", ["speaking_head"]),
    new Emoji("👤", "Peoples", ["bust_in_silhouette"]),
    new Emoji("👥", "Peoples", ["busts_in_silhouette"]),
    new Emoji("👶", "Peoples", ["baby"]),
    new Emoji("👦", "Peoples", ["boy"]),
    new Emoji("👧", "Peoples", ["girl"]),
    new Emoji("👨", "Peoples", ["man"]),
    new Emoji("👩", "Peoples", ["woman"]),
    new Emoji("👱‍♀", "Peoples", ["blonde_woman"]),
    new Emoji("👱", "Peoples", ["blonde_man", "person_with_blond_hair"]),
    new Emoji("👴", "Peoples", ["older_man"]),
    new Emoji("👵", "Peoples", ["older_woman"]),
    new Emoji("👲", "Peoples", ["man_with_gua_pi_mao"]),
    new Emoji("👳‍♀", "Peoples", ["woman_with_turban"]),
    new Emoji("👳", "Peoples", ["man_with_turban"]),
    new Emoji("👮‍♀", "Peoples", ["policewoman"]),
    new Emoji("👮", "Peoples", ["policeman", "cop"]),
    new Emoji("👷‍♀", "Peoples", ["construction_worker_woman"]),
    new Emoji("👷", "Peoples", ["construction_worker_man", "construction_worker"]),
    new Emoji("💂‍♀", "Peoples", ["guardswoman"]),
    new Emoji("💂", "Peoples", ["guardsman"]),
    new Emoji("👩‍⚕", "Peoples", ["woman_health_worker"]),
    new Emoji("👨‍⚕", "Peoples", ["man_health_worker"]),
    new Emoji("👩‍🌾", "Peoples", ["woman_farmer"]),
    new Emoji("👨‍🌾", "Peoples", ["man_farmer"]),
    new Emoji("👩‍🍳", "Peoples", ["woman_cook"]),
    new Emoji("👨‍🍳", "Peoples", ["man_cook"]),
    new Emoji("👩‍🎓", "Peoples", ["woman_student"]),
    new Emoji("👨‍🎓", "Peoples", ["man_student"]),
    new Emoji("👩‍🎤", "Peoples", ["woman_singer"]),
    new Emoji("👨‍🎤", "Peoples", ["man_singer"]),
    new Emoji("👩‍🏫", "Peoples", ["woman_teacher"]),
    new Emoji("👨‍🏫", "Peoples", ["man_teacher"]),
    new Emoji("👩‍🏭", "Peoples", ["woman_factory_worker"]),
    new Emoji("👨‍🏭", "Peoples", ["man_factory_worker"]),
    new Emoji("👩‍💻", "Peoples", ["woman_technologist"]),
    new Emoji("👨‍💻", "Peoples", ["man_technologist"]),
    new Emoji("👩‍💼", "Peoples", ["woman_office_worker"]),
    new Emoji("👨‍💼", "Peoples", ["man_office_worker"]),
    new Emoji("👩‍🔧", "Peoples", ["woman_mechanic"]),
    new Emoji("👨‍🔧", "Peoples", ["man_mechanic"]),
    new Emoji("👩‍🔬", "Peoples", ["woman_scientist"]),
    new Emoji("👨‍🔬", "Peoples", ["man_scientist"]),
    new Emoji("👩‍🎨", "Peoples", ["woman_artist"]),
    new Emoji("👨‍🎨", "Peoples", ["man_artist"]),
    new Emoji("👩‍🚒", "Peoples", ["woman_firefighter"]),
    new Emoji("👨‍🚒", "Peoples", ["man_firefighter"]),
    new Emoji("👩‍🚀", "Peoples", ["woman_astronaut"]),
    new Emoji("👨‍🚀", "Peoples", ["man_astronaut"]),
    new Emoji("🤶", "Peoples", ["mrs_claus"]),
    new Emoji("🎅", "Peoples", ["santa"]),
    new Emoji("👸", "Peoples", ["princess"]),
    new Emoji("🤴", "Peoples", ["prince"]),
    new Emoji("👰", "Peoples", ["bride_with_veil"]),
    new Emoji("🤵", "Peoples", ["man_in_tuxedo"]),
    new Emoji("👼", "Peoples", ["angel"]),
    new Emoji("🤰", "Peoples", ["pregnant_woman"]),
    new Emoji("🙇‍♀", "Peoples", ["bowing_woman"]),
    new Emoji("🙇", "Peoples", ["bowing_man", "bow"]),
    new Emoji("💁", "Peoples", ["tipping_hand_woman", "information_desk_person", "sassy_woman"]),
    new Emoji("💁‍♂", "Peoples", ["tipping_hand_man", "sassy_man"]),
    new Emoji("🙅", "Peoples", ["no_good_woman", "no_good", "ng_woman"]),
    new Emoji("🙅‍♂", "Peoples", ["no_good_man", "ng_man"]),
    new Emoji("🙆", "Peoples", ["ok_woman"]),
    new Emoji("🙆‍♂", "Peoples", ["ok_man"]),
    new Emoji("🙋", "Peoples", ["raising_hand_woman", "raising_hand"]),
    new Emoji("🙋‍♂", "Peoples", ["raising_hand_man"]),
    new Emoji("🤦‍♀", "Peoples", ["woman_facepalming"]),
    new Emoji("🤦‍♂", "Peoples", ["man_facepalming"]),
    new Emoji("🤷‍♀", "Peoples", ["woman_shrugging"]),
    new Emoji("🤷‍♂", "Peoples", ["man_shrugging"]),
    new Emoji("🙎", "Peoples", ["pouting_woman", "person_with_pouting_face"]),
    new Emoji("🙎‍♂", "Peoples", ["pouting_man"]),
    new Emoji("🙍", "Peoples", ["frowning_woman", "person_frowning"]),
    new Emoji("🙍‍♂", "Peoples", ["frowning_man"]),
    new Emoji("💇", "Peoples", ["haircut_woman", "haircut"]),
    new Emoji("💇‍♂", "Peoples", ["haircut_man"]),
    new Emoji("💆", "Peoples", ["massage_woman", "massage"]),
    new Emoji("💆‍♂", "Peoples", ["massage_man"]),
    new Emoji("🕴", "Peoples", ["business_suit_levitating"]),
    new Emoji("💃", "Peoples", ["dancer"]),
    new Emoji("🕺", "Peoples", ["man_dancing"]),
    new Emoji("👯", "Peoples", ["dancing_women", "dancers"]),
    new Emoji("👯‍♂", "Peoples", ["dancing_men"]),
    new Emoji("🚶‍♀", "Peoples", ["walking_woman"]),
    new Emoji("🚶", "Peoples", ["walking_man", "walking"]),
    new Emoji("🏃‍♀", "Peoples", ["running_woman"]),
    new Emoji("🏃", "Peoples", ["running_man", "runner", "running"]),
    new Emoji("👫", "Peoples", ["couple"]),
    new Emoji("👭", "Peoples", ["two_women_holding_hands"]),
    new Emoji("👬", "Peoples", ["two_men_holding_hands"]),
    new Emoji("💑", "Peoples", ["couple_with_heart_woman_man", "couple_with_heart"]),
    new Emoji("👩‍❤️‍👩", "Peoples", ["couple_with_heart_woman_woman"]),
    new Emoji("👨‍❤️‍👨", "Peoples", ["couple_with_heart_man_man"]),
    new Emoji("💏", "Peoples", ["couplekiss_man_woman"]),
    new Emoji("👩‍❤️‍💋‍👩", "Peoples", ["couplekiss_woman_woman"]),
    new Emoji("👨‍❤️‍💋‍👨", "Peoples", ["couplekiss_man_man"]),
    new Emoji("👪", "Peoples", ["family_man_woman_boy", "family"]),
    new Emoji("👨‍👩‍👧", "Peoples", ["family_man_woman_girl"]),
    new Emoji("👨‍👩‍👧‍👦", "Peoples", ["family_man_woman_girl_boy"]),
    new Emoji("👨‍👩‍👦‍👦", "Peoples", ["family_man_woman_boy_boy"]),
    new Emoji("👨‍👩‍👧‍👧", "Peoples", ["family_man_woman_girl_girl"]),
    new Emoji("👩‍👩‍👦", "Peoples", ["family_woman_woman_boy"]),
    new Emoji("👩‍👩‍👧", "Peoples", ["family_woman_woman_girl"]),
    new Emoji("👩‍👩‍👧‍👦", "Peoples", ["family_woman_woman_girl_boy"]),
    new Emoji("👩‍👩‍👦‍👦", "Peoples", ["family_woman_woman_boy_boy"]),
    new Emoji("👩‍👩‍👧‍👧", "Peoples", ["family_woman_woman_girl_girl"]),
    new Emoji("👨‍👨‍👦", "Peoples", ["family_man_man_boy"]),
    new Emoji("👨‍👨‍👧", "Peoples", ["family_man_man_girl"]),
    new Emoji("👨‍👨‍👧‍👦", "Peoples", ["family_man_man_girl_boy"]),
    new Emoji("👨‍👨‍👦‍👦", "Peoples", ["family_man_man_boy_boy"]),
    new Emoji("👨‍👨‍👧‍👧", "Peoples", ["family_man_man_girl_girl"]),
    new Emoji("👩‍👦", "Peoples", ["family_woman_boy"]),
    new Emoji("👩‍👧", "Peoples", ["family_woman_girl"]),
    new Emoji("👩‍👧‍👦", "Peoples", ["family_woman_girl_boy"]),
    new Emoji("👩‍👦‍👦", "Peoples", ["family_woman_boy_boy"]),
    new Emoji("👩‍👧‍👧", "Peoples", ["family_woman_girl_girl"]),
    new Emoji("👨‍👦", "Peoples", ["family_man_boy"]),
    new Emoji("👨‍👧", "Peoples", ["family_man_girl"]),
    new Emoji("👨‍👧‍👦", "Peoples", ["family_man_girl_boy"]),
    new Emoji("👨‍👦‍👦", "Peoples", ["family_man_boy_boy"]),
    new Emoji("👨‍👧‍👧", "Peoples", ["family_man_girl_girl"]),
    new Emoji("👚", "Peoples", ["womans_clothes"]),
    new Emoji("👕", "Peoples", ["shirt", "tshirt"]),
    new Emoji("👖", "Peoples", ["jeans"]),
    new Emoji("👔", "Peoples", ["necktie"]),
    new Emoji("👗", "Peoples", ["dress"]),
    new Emoji("👙", "Peoples", ["bikini"]),
    new Emoji("👘", "Peoples", ["kimono"]),
    new Emoji("👠", "Peoples", ["high_heel"]),
    new Emoji("👡", "Peoples", ["sandal"]),
    new Emoji("👢", "Peoples", ["boot"]),
    new Emoji("👞", "Peoples", ["mans_shoe", "shoe"]),
    new Emoji("👟", "Peoples", ["athletic_shoe"]),
    new Emoji("👒", "Peoples", ["womans_hat"]),
    new Emoji("🎩", "Peoples", ["tophat"]),
    new Emoji("🎓", "Peoples", ["mortar_board"]),
    new Emoji("👑", "Peoples", ["crown"]),
    new Emoji("⛑", "Peoples", ["rescue_worker_helmet"]),
    new Emoji("🎒", "Peoples", ["school_satchel"]),
    new Emoji("👝", "Peoples", ["pouch"]),
    new Emoji("👛", "Peoples", ["purse"]),
    new Emoji("👜", "Peoples", ["handbag"]),
    new Emoji("💼", "Peoples", ["briefcase"]),
    new Emoji("👓", "Peoples", ["eyeglasses"]),
    new Emoji("🕶", "Peoples", ["dark_sunglasses"]),
    new Emoji("🌂", "Peoples", ["closed_umbrella"]),
    new Emoji("☂️", "Peoples", ["open_umbrella"]),
    new Emoji("🐶", "Nature", ["dog"]),
    new Emoji("🐱", "Nature", ["cat"]),
    new Emoji("🐭", "Nature", ["mouse"]),
    new Emoji("🐹", "Nature", ["hamster"]),
    new Emoji("🐰", "Nature", ["rabbit"]),
    new Emoji("🦊", "Nature", ["fox_face"]),
    new Emoji("🐻", "Nature", ["bear"]),
    new Emoji("🐼", "Nature", ["panda_face"]),
    new Emoji("🐨", "Nature", ["koala"]),
    new Emoji("🐯", "Nature", ["tiger"]),
    new Emoji("🦁", "Nature", ["lion"]),
    new Emoji("🐮", "Nature", ["cow"]),
    new Emoji("🐷", "Nature", ["pig"]),
    new Emoji("🐽", "Nature", ["pig_nose"]),
    new Emoji("🐸", "Nature", ["frog"]),
    new Emoji("🐵", "Nature", ["monkey_face"]),
    new Emoji("🙈", "Nature", ["see_no_evil"]),
    new Emoji("🙉", "Nature", ["hear_no_evil"]),
    new Emoji("🙊", "Nature", ["speak_no_evil"]),
    new Emoji("🐒", "Nature", ["monkey"]),
    new Emoji("🐔", "Nature", ["chicken"]),
    new Emoji("🐧", "Nature", ["penguin"]),
    new Emoji("🐦", "Nature", ["bird"]),
    new Emoji("🐤", "Nature", ["baby_chick"]),
    new Emoji("🐣", "Nature", ["hatching_chick"]),
    new Emoji("🐥", "Nature", ["hatched_chick"]),
    new Emoji("🦆", "Nature", ["duck"]),
    new Emoji("🦅", "Nature", ["eagle"]),
    new Emoji("🦉", "Nature", ["owl"]),
    new Emoji("🦇", "Nature", ["bat"]),
    new Emoji("🐺", "Nature", ["wolf"]),
    new Emoji("🐗", "Nature", ["boar"]),
    new Emoji("🐴", "Nature", ["horse"]),
    new Emoji("🦄", "Nature", ["unicorn"]),
    new Emoji("🐝", "Nature", ["bee", "honeybee"]),
    new Emoji("🐛", "Nature", ["bug"]),
    new Emoji("🦋", "Nature", ["butterfly"]),
    new Emoji("🐌", "Nature", ["snail"]),
    new Emoji("🐚", "Nature", ["shell"]),
    new Emoji("🐞", "Nature", ["beetle"]),
    new Emoji("🐜", "Nature", ["ant"]),
    new Emoji("🕷", "Nature", ["spider"]),
    new Emoji("🕸", "Nature", ["spider_web"]),
    new Emoji("🐢", "Nature", ["turtle"]),
    new Emoji("🐍", "Nature", ["snake"]),
    new Emoji("🦎", "Nature", ["lizard"]),
    new Emoji("🦂", "Nature", ["scorpion"]),
    new Emoji("🦀", "Nature", ["crab"]),
    new Emoji("🦑", "Nature", ["squid"]),
    new Emoji("🐙", "Nature", ["octopus"]),
    new Emoji("🦐", "Nature", ["shrimp"]),
    new Emoji("🐠", "Nature", ["tropical_fish"]),
    new Emoji("🐟", "Nature", ["fish"]),
    new Emoji("🐡", "Nature", ["blowfish"]),
    new Emoji("🐬", "Nature", ["dolphin", "flipper"]),
    new Emoji("🦈", "Nature", ["shark"]),
    new Emoji("🐳", "Nature", ["whale"]),
    new Emoji("🐋", "Nature", ["whale2"]),
    new Emoji("🐊", "Nature", ["crocodile"]),
    new Emoji("🐆", "Nature", ["leopard"]),
    new Emoji("🐅", "Nature", ["tiger2"]),
    new Emoji("🐃", "Nature", ["water_buffalo"]),
    new Emoji("🐂", "Nature", ["ox"]),
    new Emoji("🐄", "Nature", ["cow2"]),
    new Emoji("🦌", "Nature", ["deer"]),
    new Emoji("🐪", "Nature", ["dromedary_camel"]),
    new Emoji("🐫", "Nature", ["camel"]),
    new Emoji("🐘", "Nature", ["elephant"]),
    new Emoji("🦏", "Nature", ["rhinoceros"]),
    new Emoji("🦍", "Nature", ["gorilla"]),
    new Emoji("🐎", "Nature", ["racehorse"]),
    new Emoji("🐖", "Nature", ["pig2"]),
    new Emoji("🐐", "Nature", ["goat"]),
    new Emoji("🐏", "Nature", ["ram"]),
    new Emoji("🐑", "Nature", ["sheep"]),
    new Emoji("🐕", "Nature", ["dog2"]),
    new Emoji("🐩", "Nature", ["poodle"]),
    new Emoji("🐈", "Nature", ["cat2"]),
    new Emoji("🐓", "Nature", ["rooster"]),
    new Emoji("🦃", "Nature", ["turkey"]),
    new Emoji("🕊", "Nature", ["dove"]),
    new Emoji("🐇", "Nature", ["rabbit2"]),
    new Emoji("🐁", "Nature", ["mouse2"]),
    new Emoji("🐀", "Nature", ["rat"]),
    new Emoji("🐿", "Nature", ["chipmunk"]),
    new Emoji("🐾", "Nature", ["feet", "paw_prints"]),
    new Emoji("🐉", "Nature", ["dragon"]),
    new Emoji("🐲", "Nature", ["dragon_face"]),
    new Emoji("🌵", "Nature", ["cactus"]),
    new Emoji("🎄", "Nature", ["christmas_tree"]),
    new Emoji("🌲", "Nature", ["evergreen_tree"]),
    new Emoji("🌳", "Nature", ["deciduous_tree"]),
    new Emoji("🌴", "Nature", ["palm_tree"]),
    new Emoji("🌱", "Nature", ["seedling"]),
    new Emoji("🌿", "Nature", ["herb"]),
    new Emoji("☘️", "Nature", ["shamrock"]),
    new Emoji("🍀", "Nature", ["four_leaf_clover"]),
    new Emoji("🎍", "Nature", ["bamboo"]),
    new Emoji("🎋", "Nature", ["tanabata_tree"]),
    new Emoji("🍃", "Nature", ["leaves"]),
    new Emoji("🍂", "Nature", ["fallen_leaf"]),
    new Emoji("🍁", "Nature", ["maple_leaf"]),
    new Emoji("🍄", "Nature", ["mushroom"]),
    new Emoji("🌾", "Nature", ["ear_of_rice"]),
    new Emoji("💐", "Nature", ["bouquet"]),
    new Emoji("🌷", "Nature", ["tulip"]),
    new Emoji("🌹", "Nature", ["rose"]),
    new Emoji("🥀", "Nature", ["wilted_flower"]),
    new Emoji("🌻", "Nature", ["sunflower"]),
    new Emoji("🌼", "Nature", ["blossom"]),
    new Emoji("🌸", "Nature", ["cherry_blossom"]),
    new Emoji("🌺", "Nature", ["hibiscus"]),
    new Emoji("🌎", "Nature", ["earth_americas"]),
    new Emoji("🌍", "Nature", ["earth_africa"]),
    new Emoji("🌏", "Nature", ["earth_asia"]),
    new Emoji("🌕", "Nature", ["full_moon"]),
    new Emoji("🌖", "Nature", ["waning_gibbous_moon"]),
    new Emoji("🌗", "Nature", ["last_quarter_moon"]),
    new Emoji("🌘", "Nature", ["waning_crescent_moon"]),
    new Emoji("🌑", "Nature", ["new_moon"]),
    new Emoji("🌒", "Nature", ["waxing_crescent_moon"]),
    new Emoji("🌓", "Nature", ["first_quarter_moon"]),
    new Emoji("🌔", "Nature", ["moon", "waxing_gibbous_moon"]),
    new Emoji("🌚", "Nature", ["new_moon_with_face"]),
    new Emoji("🌝", "Nature", ["full_moon_with_face"]),
    new Emoji("🌞", "Nature", ["sun_with_face"]),
    new Emoji("🌛", "Nature", ["first_quarter_moon_with_face"]),
    new Emoji("🌜", "Nature", ["last_quarter_moon_with_face"]),
    new Emoji("🌙", "Nature", ["crescent_moon"]),
    new Emoji("💫", "Nature", ["dizzy"]),
    new Emoji("⭐️", "Nature", ["star"]),
    new Emoji("🌟", "Nature", ["star2"]),
    new Emoji("✨", "Nature", ["sparkles"]),
    new Emoji("⚡️", "Nature", ["zap"]),
    new Emoji("🔥", "Nature", ["fire"]),
    new Emoji("💥", "Nature", ["boom", "collision"]),
    new Emoji("☄", "Nature", ["comet"]),
    new Emoji("☀️", "Nature", ["sunny"]),
    new Emoji("🌤", "Nature", ["sun_behind_small_cloud"]),
    new Emoji("⛅️", "Nature", ["partly_sunny"]),
    new Emoji("🌥", "Nature", ["sun_behind_large_cloud"]),
    new Emoji("🌦", "Nature", ["sun_behind_rain_cloud"]),
    new Emoji("🌈", "Nature", ["rainbow"]),
    new Emoji("☁️", "Nature", ["cloud"]),
    new Emoji("🌧", "Nature", ["cloud_with_rain"]),
    new Emoji("⛈", "Nature", ["cloud_with_lightning_and_rain"]),
    new Emoji("🌩", "Nature", ["cloud_with_lightning"]),
    new Emoji("🌨", "Nature", ["cloud_with_snow"]),
    new Emoji("☃️", "Nature", ["snowman_with_snow"]),
    new Emoji("⛄️", "Nature", ["snowman"]),
    new Emoji("❄️", "Nature", ["snowflake"]),
    new Emoji("🌬", "Nature", ["wind_face"]),
    new Emoji("💨", "Nature", ["dash"]),
    new Emoji("🌪", "Nature", ["tornado"]),
    new Emoji("🌫", "Nature", ["fog"]),
    new Emoji("🌊", "Nature", ["ocean"]),
    new Emoji("💧", "Nature", ["droplet"]),
    new Emoji("💦", "Nature", ["sweat_drops"]),
    new Emoji("☔️", "Nature", ["umbrella"]),
    new Emoji("🍏", "Foods", ["green_apple"]),
    new Emoji("🍎", "Foods", ["apple"]),
    new Emoji("🍐", "Foods", ["pear"]),
    new Emoji("🍊", "Foods", ["tangerine", "orange", "mandarin"]),
    new Emoji("🍋", "Foods", ["lemon"]),
    new Emoji("🍌", "Foods", ["banana"]),
    new Emoji("🍉", "Foods", ["watermelon"]),
    new Emoji("🍇", "Foods", ["grapes"]),
    new Emoji("🍓", "Foods", ["strawberry"]),
    new Emoji("🍈", "Foods", ["melon"]),
    new Emoji("🍒", "Foods", ["cherries"]),
    new Emoji("🍑", "Foods", ["peach"]),
    new Emoji("🍍", "Foods", ["pineapple"]),
    new Emoji("🥝", "Foods", ["kiwi_fruit"]),
    new Emoji("🥑", "Foods", ["avocado"]),
    new Emoji("🍅", "Foods", ["tomato"]),
    new Emoji("🍆", "Foods", ["eggplant"]),
    new Emoji("🥒", "Foods", ["cucumber"]),
    new Emoji("🥕", "Foods", ["carrot"]),
    new Emoji("🌽", "Foods", ["corn"]),
    new Emoji("🌶", "Foods", ["hot_pepper"]),
    new Emoji("🥔", "Foods", ["potato"]),
    new Emoji("🍠", "Foods", ["sweet_potato"]),
    new Emoji("🌰", "Foods", ["chestnut"]),
    new Emoji("🥜", "Foods", ["peanuts"]),
    new Emoji("🍯", "Foods", ["honey_pot"]),
    new Emoji("🥐", "Foods", ["croissant"]),
    new Emoji("🍞", "Foods", ["bread"]),
    new Emoji("🥖", "Foods", ["baguette_bread"]),
    new Emoji("🧀", "Foods", ["cheese"]),
    new Emoji("🥚", "Foods", ["egg"]),
    new Emoji("🍳", "Foods", ["fried_egg"]),
    new Emoji("🥓", "Foods", ["bacon"]),
    new Emoji("🥞", "Foods", ["pancakes"]),
    new Emoji("🍤", "Foods", ["fried_shrimp"]),
    new Emoji("🍗", "Foods", ["poultry_leg"]),
    new Emoji("🍖", "Foods", ["meat_on_bone"]),
    new Emoji("🍕", "Foods", ["pizza"]),
    new Emoji("🌭", "Foods", ["hotdog"]),
    new Emoji("🍔", "Foods", ["hamburger"]),
    new Emoji("🍟", "Foods", ["fries"]),
    new Emoji("🥙", "Foods", ["stuffed_flatbread"]),
    new Emoji("🌮", "Foods", ["taco"]),
    new Emoji("🌯", "Foods", ["burrito"]),
    new Emoji("🥗", "Foods", ["green_salad"]),
    new Emoji("🥘", "Foods", ["shallow_pan_of_food"]),
    new Emoji("🍝", "Foods", ["spaghetti"]),
    new Emoji("🍜", "Foods", ["ramen"]),
    new Emoji("🍲", "Foods", ["stew"]),
    new Emoji("🍥", "Foods", ["fish_cake"]),
    new Emoji("🍣", "Foods", ["sushi"]),
    new Emoji("🍱", "Foods", ["bento"]),
    new Emoji("🍛", "Foods", ["curry"]),
    new Emoji("🍚", "Foods", ["rice"]),
    new Emoji("🍙", "Foods", ["rice_ball"]),
    new Emoji("🍘", "Foods", ["rice_cracker"]),
    new Emoji("🍢", "Foods", ["oden"]),
    new Emoji("🍡", "Foods", ["dango"]),
    new Emoji("🍧", "Foods", ["shaved_ice"]),
    new Emoji("🍨", "Foods", ["ice_cream"]),
    new Emoji("🍦", "Foods", ["icecream"]),
    new Emoji("🍰", "Foods", ["cake"]),
    new Emoji("🎂", "Foods", ["birthday"]),
    new Emoji("🍮", "Foods", ["custard"]),
    new Emoji("🍭", "Foods", ["lollipop"]),
    new Emoji("🍬", "Foods", ["candy"]),
    new Emoji("🍫", "Foods", ["chocolate_bar"]),
    new Emoji("🍿", "Foods", ["popcorn"]),
    new Emoji("🍩", "Foods", ["doughnut"]),
    new Emoji("🍪", "Foods", ["cookie"]),
    new Emoji("🥛", "Foods", ["milk_glass"]),
    new Emoji("🍼", "Foods", ["baby_bottle"]),
    new Emoji("☕️", "Foods", ["coffee"]),
    new Emoji("🍵", "Foods", ["tea"]),
    new Emoji("🍶", "Foods", ["sake"]),
    new Emoji("🍺", "Foods", ["beer"]),
    new Emoji("🍻", "Foods", ["beers"]),
    new Emoji("🥂", "Foods", ["clinking_glasses"]),
    new Emoji("🍷", "Foods", ["wine_glass"]),
    new Emoji("🥃", "Foods", ["tumbler_glass"]),
    new Emoji("🍸", "Foods", ["cocktail"]),
    new Emoji("🍹", "Foods", ["tropical_drink"]),
    new Emoji("🍾", "Foods", ["champagne"]),
    new Emoji("🥄", "Foods", ["spoon"]),
    new Emoji("🍴", "Foods", ["fork_and_knife"]),
    new Emoji("🍽", "Foods", ["plate_with_cutlery"]),
    new Emoji("⚽️", "Activity", ["soccer"]),
    new Emoji("🏀", "Activity", ["basketball"]),
    new Emoji("🏈", "Activity", ["football"]),
    new Emoji("⚾️", "Activity", ["baseball"]),
    new Emoji("🎾", "Activity", ["tennis"]),
    new Emoji("🏐", "Activity", ["volleyball"]),
    new Emoji("🏉", "Activity", ["rugby_football"]),
    new Emoji("🎱", "Activity", ["8ball"]),
    new Emoji("🏓", "Activity", ["ping_pong"]),
    new Emoji("🏸", "Activity", ["badminton"]),
    new Emoji("🥅", "Activity", ["goal_net"]),
    new Emoji("🏒", "Activity", ["ice_hockey"]),
    new Emoji("🏑", "Activity", ["field_hockey"]),
    new Emoji("🏏", "Activity", ["cricket"]),
    new Emoji("⛳️", "Activity", ["golf"]),
    new Emoji("🏹", "Activity", ["bow_and_arrow"]),
    new Emoji("🎣", "Activity", ["fishing_pole_and_fish"]),
    new Emoji("🥊", "Activity", ["boxing_glove"]),
    new Emoji("🥋", "Activity", ["martial_arts_uniform"]),
    new Emoji("⛸", "Activity", ["ice_skate"]),
    new Emoji("🎿", "Activity", ["ski"]),
    new Emoji("⛷", "Activity", ["skier"]),
    new Emoji("🏂", "Activity", ["snowboarder"]),
    new Emoji("🏋️‍♀️", "Activity", ["weight_lifting_woman"]),
    new Emoji("🏋", "Activity", ["weight_lifting_man"]),
    new Emoji("🤺", "Activity", ["person_fencing"]),
    new Emoji("🤼‍♀", "Activity", ["women_wrestling"]),
    new Emoji("🤼‍♂", "Activity", ["men_wrestling"]),
    new Emoji("🤸‍♀", "Activity", ["woman_cartwheeling"]),
    new Emoji("🤸‍♂", "Activity", ["man_cartwheeling"]),
    new Emoji("⛹️‍♀️", "Activity", ["basketball_woman"]),
    new Emoji("⛹", "Activity", ["basketball_man"]),
    new Emoji("🤾‍♀", "Activity", ["woman_playing_handball"]),
    new Emoji("🤾‍♂", "Activity", ["man_playing_handball"]),
    new Emoji("🏌️‍♀️", "Activity", ["golfing_woman"]),
    new Emoji("🏌", "Activity", ["golfing_man"]),
    new Emoji("🏄‍♀", "Activity", ["surfing_woman"]),
    new Emoji("🏄", "Activity", ["surfing_man", "surfer"]),
    new Emoji("🏊‍♀", "Activity", ["swimming_woman"]),
    new Emoji("🏊", "Activity", ["swimming_man", "swimmer"]),
    new Emoji("🤽‍♀", "Activity", ["woman_playing_water_polo"]),
    new Emoji("🤽‍♂", "Activity", ["man_playing_water_polo"]),
    new Emoji("🚣‍♀", "Activity", ["rowing_woman"]),
    new Emoji("🚣", "Activity", ["rowing_man", "rowboat"]),
    new Emoji("🏇", "Activity", ["horse_racing"]),
    new Emoji("🚴‍♀", "Activity", ["biking_woman"]),
    new Emoji("🚴", "Activity", ["biking_man", "bicyclist"]),
    new Emoji("🚵‍♀", "Activity", ["mountain_biking_woman"]),
    new Emoji("🚵", "Activity", ["mountain_biking_man", "mountain_bicyclist"]),
    new Emoji("🎽", "Activity", ["running_shirt_with_sash"]),
    new Emoji("🏅", "Activity", ["medal_sports"]),
    new Emoji("🎖", "Activity", ["medal_military"]),
    new Emoji("🥇", "Activity", ["1st_place_medal"]),
    new Emoji("🥈", "Activity", ["2nd_place_medal"]),
    new Emoji("🥉", "Activity", ["3rd_place_medal"]),
    new Emoji("🏆", "Activity", ["trophy"]),
    new Emoji("🏵", "Activity", ["rosette"]),
    new Emoji("🎗", "Activity", ["reminder_ribbon"]),
    new Emoji("🎫", "Activity", ["ticket"]),
    new Emoji("🎟", "Activity", ["tickets"]),
    new Emoji("🎪", "Activity", ["circus_tent"]),
    new Emoji("🤹‍♀", "Activity", ["woman_juggling"]),
    new Emoji("🤹‍♂", "Activity", ["man_juggling"]),
    new Emoji("🎭", "Activity", ["performing_arts"]),
    new Emoji("🎨", "Activity", ["art"]),
    new Emoji("🎬", "Activity", ["clapper"]),
    new Emoji("🎤", "Activity", ["microphone"]),
    new Emoji("🎧", "Activity", ["headphones"]),
    new Emoji("🎼", "Activity", ["musical_score"]),
    new Emoji("🎹", "Activity", ["musical_keyboard"]),
    new Emoji("🥁", "Activity", ["drum"]),
    new Emoji("🎷", "Activity", ["saxophone"]),
    new Emoji("🎺", "Activity", ["trumpet"]),
    new Emoji("🎸", "Activity", ["guitar"]),
    new Emoji("🎻", "Activity", ["violin"]),
    new Emoji("🎲", "Activity", ["game_die"]),
    new Emoji("🎯", "Activity", ["dart"]),
    new Emoji("🎳", "Activity", ["bowling"]),
    new Emoji("🎮", "Activity", ["video_game"]),
    new Emoji("🎰", "Activity", ["slot_machine"]),
    new Emoji("🚗", "Places", ["car", "red_car"]),
    new Emoji("🚕", "Places", ["taxi"]),
    new Emoji("🚙", "Places", ["blue_car"]),
    new Emoji("🚌", "Places", ["bus"]),
    new Emoji("🚎", "Places", ["trolleybus"]),
    new Emoji("🏎", "Places", ["racing_car"]),
    new Emoji("🚓", "Places", ["police_car"]),
    new Emoji("🚑", "Places", ["ambulance"]),
    new Emoji("🚒", "Places", ["fire_engine"]),
    new Emoji("🚐", "Places", ["minibus"]),
    new Emoji("🚚", "Places", ["truck"]),
    new Emoji("🚛", "Places", ["articulated_lorry"]),
    new Emoji("🚜", "Places", ["tractor"]),
    new Emoji("🛴", "Places", ["kick_scooter"]),
    new Emoji("🚲", "Places", ["bike"]),
    new Emoji("🛵", "Places", ["motor_scooter"]),
    new Emoji("🏍", "Places", ["motorcycle"]),
    new Emoji("🚨", "Places", ["rotating_light"]),
    new Emoji("🚔", "Places", ["oncoming_police_car"]),
    new Emoji("🚍", "Places", ["oncoming_bus"]),
    new Emoji("🚘", "Places", ["oncoming_automobile"]),
    new Emoji("🚖", "Places", ["oncoming_taxi"]),
    new Emoji("🚡", "Places", ["aerial_tramway"]),
    new Emoji("🚠", "Places", ["mountain_cableway"]),
    new Emoji("🚟", "Places", ["suspension_railway"]),
    new Emoji("🚃", "Places", ["railway_car"]),
    new Emoji("🚋", "Places", ["train"]),
    new Emoji("🚞", "Places", ["mountain_railway"]),
    new Emoji("🚝", "Places", ["monorail"]),
    new Emoji("🚄", "Places", ["bullettrain_side"]),
    new Emoji("🚅", "Places", ["bullettrain_front"]),
    new Emoji("🚈", "Places", ["light_rail"]),
    new Emoji("🚂", "Places", ["steam_locomotive"]),
    new Emoji("🚆", "Places", ["train2"]),
    new Emoji("🚇", "Places", ["metro"]),
    new Emoji("🚊", "Places", ["tram"]),
    new Emoji("🚉", "Places", ["station"]),
    new Emoji("🚁", "Places", ["helicopter"]),
    new Emoji("🛩", "Places", ["small_airplane"]),
    new Emoji("✈️", "Places", ["airplane"]),
    new Emoji("🛫", "Places", ["flight_departure"]),
    new Emoji("🛬", "Places", ["flight_arrival"]),
    new Emoji("🚀", "Places", ["rocket"]),
    new Emoji("🛰", "Places", ["artificial_satellite"]),
    new Emoji("💺", "Places", ["seat"]),
    new Emoji("🛶", "Places", ["canoe"]),
    new Emoji("⛵️", "Places", ["boat", "sailboat"]),
    new Emoji("🛥", "Places", ["motor_boat"]),
    new Emoji("🚤", "Places", ["speedboat"]),
    new Emoji("🛳", "Places", ["passenger_ship"]),
    new Emoji("⛴", "Places", ["ferry"]),
    new Emoji("🚢", "Places", ["ship"]),
    new Emoji("⚓️", "Places", ["anchor"]),
    new Emoji("🚧", "Places", ["construction"]),
    new Emoji("⛽️", "Places", ["fuelpump"]),
    new Emoji("🚏", "Places", ["busstop"]),
    new Emoji("🚦", "Places", ["vertical_traffic_light"]),
    new Emoji("🚥", "Places", ["traffic_light"]),
    new Emoji("🗺", "Places", ["world_map"]),
    new Emoji("🗿", "Places", ["moyai"]),
    new Emoji("🗽", "Places", ["statue_of_liberty"]),
    new Emoji("⛲️", "Places", ["fountain"]),
    new Emoji("🗼", "Places", ["tokyo_tower"]),
    new Emoji("🏰", "Places", ["european_castle"]),
    new Emoji("🏯", "Places", ["japanese_castle"]),
    new Emoji("🏟", "Places", ["stadium"]),
    new Emoji("🎡", "Places", ["ferris_wheel"]),
    new Emoji("🎢", "Places", ["roller_coaster"]),
    new Emoji("🎠", "Places", ["carousel_horse"]),
    new Emoji("⛱", "Places", ["parasol_on_ground"]),
    new Emoji("🏖", "Places", ["beach_umbrella"]),
    new Emoji("🏝", "Places", ["desert_island"]),
    new Emoji("⛰", "Places", ["mountain"]),
    new Emoji("🏔", "Places", ["mountain_snow"]),
    new Emoji("🗻", "Places", ["mount_fuji"]),
    new Emoji("🌋", "Places", ["volcano"]),
    new Emoji("🏜", "Places", ["desert"]),
    new Emoji("🏕", "Places", ["camping"]),
    new Emoji("⛺️", "Places", ["tent"]),
    new Emoji("🛤", "Places", ["railway_track"]),
    new Emoji("🛣", "Places", ["motorway"]),
    new Emoji("🏗", "Places", ["building_construction"]),
    new Emoji("🏭", "Places", ["factory"]),
    new Emoji("🏠", "Places", ["house"]),
    new Emoji("🏡", "Places", ["house_with_garden"]),
    new Emoji("🏘", "Places", ["houses"]),
    new Emoji("🏚", "Places", ["derelict_house"]),
    new Emoji("🏢", "Places", ["office"]),
    new Emoji("🏬", "Places", ["department_store"]),
    new Emoji("🏣", "Places", ["post_office"]),
    new Emoji("🏤", "Places", ["european_post_office"]),
    new Emoji("🏥", "Places", ["hospital"]),
    new Emoji("🏦", "Places", ["bank"]),
    new Emoji("🏨", "Places", ["hotel"]),
    new Emoji("🏪", "Places", ["convenience_store"]),
    new Emoji("🏫", "Places", ["school"]),
    new Emoji("🏩", "Places", ["love_hotel"]),
    new Emoji("💒", "Places", ["wedding"]),
    new Emoji("🏛", "Places", ["classical_building"]),
    new Emoji("⛪️", "Places", ["church"]),
    new Emoji("🕌", "Places", ["mosque"]),
    new Emoji("🕍", "Places", ["synagogue"]),
    new Emoji("🕋", "Places", ["kaaba"]),
    new Emoji("⛩", "Places", ["shinto_shrine"]),
    new Emoji("🗾", "Places", ["japan"]),
    new Emoji("🎑", "Places", ["rice_scene"]),
    new Emoji("🏞", "Places", ["national_park"]),
    new Emoji("🌅", "Places", ["sunrise"]),
    new Emoji("🌄", "Places", ["sunrise_over_mountains"]),
    new Emoji("🌠", "Places", ["stars"]),
    new Emoji("🎇", "Places", ["sparkler"]),
    new Emoji("🎆", "Places", ["fireworks"]),
    new Emoji("🌇", "Places", ["city_sunrise"]),
    new Emoji("🌆", "Places", ["city_sunset"]),
    new Emoji("🏙", "Places", ["cityscape"]),
    new Emoji("🌃", "Places", ["night_with_stars"]),
    new Emoji("🌌", "Places", ["milky_way"]),
    new Emoji("🌉", "Places", ["bridge_at_night"]),
    new Emoji("🌁", "Places", ["foggy"]),
    new Emoji("⌚️", "Objects", ["watch"]),
    new Emoji("📱", "Objects", ["iphone"]),
    new Emoji("📲", "Objects", ["calling"]),
    new Emoji("💻", "Objects", ["computer"]),
    new Emoji("⌨️", "Objects", ["keyboard"]),
    new Emoji("🖥", "Objects", ["desktop_computer"]),
    new Emoji("🖨", "Objects", ["printer"]),
    new Emoji("🖱", "Objects", ["computer_mouse"]),
    new Emoji("🖲", "Objects", ["trackball"]),
    new Emoji("🕹", "Objects", ["joystick"]),
    new Emoji("🗜", "Objects", ["clamp"]),
    new Emoji("💽", "Objects", ["minidisc"]),
    new Emoji("💾", "Objects", ["floppy_disk"]),
    new Emoji("💿", "Objects", ["cd"]),
    new Emoji("📀", "Objects", ["dvd"]),
    new Emoji("📼", "Objects", ["vhs"]),
    new Emoji("📷", "Objects", ["camera"]),
    new Emoji("📸", "Objects", ["camera_flash"]),
    new Emoji("📹", "Objects", ["video_camera"]),
    new Emoji("🎥", "Objects", ["movie_camera"]),
    new Emoji("📽", "Objects", ["film_projector"]),
    new Emoji("🎞", "Objects", ["film_strip"]),
    new Emoji("📞", "Objects", ["telephone_receiver"]),
    new Emoji("☎️", "Objects", ["phone", "telephone"]),
    new Emoji("📟", "Objects", ["pager"]),
    new Emoji("📠", "Objects", ["fax"]),
    new Emoji("📺", "Objects", ["tv"]),
    new Emoji("📻", "Objects", ["radio"]),
    new Emoji("🎙", "Objects", ["studio_microphone"]),
    new Emoji("🎚", "Objects", ["level_slider"]),
    new Emoji("🎛", "Objects", ["control_knobs"]),
    new Emoji("⏱", "Objects", ["stopwatch"]),
    new Emoji("⏲", "Objects", ["timer_clock"]),
    new Emoji("⏰", "Objects", ["alarm_clock"]),
    new Emoji("🕰", "Objects", ["mantelpiece_clock"]),
    new Emoji("⌛️", "Objects", ["hourglass"]),
    new Emoji("⏳", "Objects", ["hourglass_flowing_sand"]),
    new Emoji("📡", "Objects", ["satellite"]),
    new Emoji("🔋", "Objects", ["battery"]),
    new Emoji("🔌", "Objects", ["electric_plug"]),
    new Emoji("💡", "Objects", ["bulb"]),
    new Emoji("🔦", "Objects", ["flashlight"]),
    new Emoji("🕯", "Objects", ["candle"]),
    new Emoji("🗑", "Objects", ["wastebasket"]),
    new Emoji("🛢", "Objects", ["oil_drum"]),
    new Emoji("💸", "Objects", ["money_with_wings"]),
    new Emoji("💵", "Objects", ["dollar"]),
    new Emoji("💴", "Objects", ["yen"]),
    new Emoji("💶", "Objects", ["euro"]),
    new Emoji("💷", "Objects", ["pound"]),
    new Emoji("💰", "Objects", ["moneybag"]),
    new Emoji("💳", "Objects", ["credit_card"]),
    new Emoji("💎", "Objects", ["gem"]),
    new Emoji("⚖️", "Objects", ["balance_scale"]),
    new Emoji("🔧", "Objects", ["wrench"]),
    new Emoji("🔨", "Objects", ["hammer"]),
    new Emoji("⚒", "Objects", ["hammer_and_pick"]),
    new Emoji("🛠", "Objects", ["hammer_and_wrench"]),
    new Emoji("⛏", "Objects", ["pick"]),
    new Emoji("🔩", "Objects", ["nut_and_bolt"]),
    new Emoji("⚙️", "Objects", ["gear"]),
    new Emoji("⛓", "Objects", ["chains"]),
    new Emoji("🔫", "Objects", ["gun"]),
    new Emoji("💣", "Objects", ["bomb"]),
    new Emoji("🔪", "Objects", ["hocho", "knife"]),
    new Emoji("🗡", "Objects", ["dagger"]),
    new Emoji("⚔️", "Objects", ["crossed_swords"]),
    new Emoji("🛡", "Objects", ["shield"]),
    new Emoji("🚬", "Objects", ["smoking"]),
    new Emoji("⚰️", "Objects", ["coffin"]),
    new Emoji("⚱️", "Objects", ["funeral_urn"]),
    new Emoji("🏺", "Objects", ["amphora"]),
    new Emoji("🔮", "Objects", ["crystal_ball"]),
    new Emoji("📿", "Objects", ["prayer_beads"]),
    new Emoji("💈", "Objects", ["barber"]),
    new Emoji("⚗️", "Objects", ["alembic"]),
    new Emoji("🔭", "Objects", ["telescope"]),
    new Emoji("🔬", "Objects", ["microscope"]),
    new Emoji("🕳", "Objects", ["hole"]),
    new Emoji("💊", "Objects", ["pill"]),
    new Emoji("💉", "Objects", ["syringe"]),
    new Emoji("🌡", "Objects", ["thermometer"]),
    new Emoji("🚽", "Objects", ["toilet"]),
    new Emoji("🚰", "Objects", ["potable_water"]),
    new Emoji("🚿", "Objects", ["shower"]),
    new Emoji("🛁", "Objects", ["bathtub"]),
    new Emoji("🛀", "Objects", ["bath"]),
    new Emoji("🛎", "Objects", ["bellhop_bell"]),
    new Emoji("🔑", "Objects", ["key"]),
    new Emoji("🗝", "Objects", ["old_key"]),
    new Emoji("🚪", "Objects", ["door"]),
    new Emoji("🛋", "Objects", ["couch_and_lamp"]),
    new Emoji("🛏", "Objects", ["bed"]),
    new Emoji("🛌", "Objects", ["sleeping_bed"]),
    new Emoji("🖼", "Objects", ["framed_picture"]),
    new Emoji("🛍", "Objects", ["shopping"]),
    new Emoji("🛒", "Objects", ["shopping_cart"]),
    new Emoji("🎁", "Objects", ["gift"]),
    new Emoji("🎈", "Objects", ["balloon"]),
    new Emoji("🎏", "Objects", ["flags"]),
    new Emoji("🎀", "Objects", ["ribbon"]),
    new Emoji("🎊", "Objects", ["confetti_ball"]),
    new Emoji("🎉", "Objects", ["tada"]),
    new Emoji("🎎", "Objects", ["dolls"]),
    new Emoji("🏮", "Objects", ["izakaya_lantern", "lantern"]),
    new Emoji("🎐", "Objects", ["wind_chime"]),
    new Emoji("✉️", "Objects", ["email", "envelope"]),
    new Emoji("📩", "Objects", ["envelope_with_arrow"]),
    new Emoji("📨", "Objects", ["incoming_envelope"]),
    new Emoji("📧", "Objects", ["e-mail"]),
    new Emoji("💌", "Objects", ["love_letter"]),
    new Emoji("📥", "Objects", ["inbox_tray"]),
    new Emoji("📤", "Objects", ["outbox_tray"]),
    new Emoji("📦", "Objects", ["package"]),
    new Emoji("🏷", "Objects", ["label"]),
    new Emoji("📪", "Objects", ["mailbox_closed"]),
    new Emoji("📫", "Objects", ["mailbox"]),
    new Emoji("📬", "Objects", ["mailbox_with_mail"]),
    new Emoji("📭", "Objects", ["mailbox_with_no_mail"]),
    new Emoji("📮", "Objects", ["postbox"]),
    new Emoji("📯", "Objects", ["postal_horn"]),
    new Emoji("📜", "Objects", ["scroll"]),
    new Emoji("📃", "Objects", ["page_with_curl"]),
    new Emoji("📄", "Objects", ["page_facing_up"]),
    new Emoji("📑", "Objects", ["bookmark_tabs"]),
    new Emoji("📊", "Objects", ["bar_chart"]),
    new Emoji("📈", "Objects", ["chart_with_upwards_trend"]),
    new Emoji("📉", "Objects", ["chart_with_downwards_trend"]),
    new Emoji("🗒", "Objects", ["spiral_notepad"]),
    new Emoji("🗓", "Objects", ["spiral_calendar"]),
    new Emoji("📆", "Objects", ["calendar"]),
    new Emoji("📅", "Objects", ["date"]),
    new Emoji("📇", "Objects", ["card_index"]),
    new Emoji("🗃", "Objects", ["card_file_box"]),
    new Emoji("🗳", "Objects", ["ballot_box"]),
    new Emoji("🗄", "Objects", ["file_cabinet"]),
    new Emoji("📋", "Objects", ["clipboard"]),
    new Emoji("📁", "Objects", ["file_folder"]),
    new Emoji("📂", "Objects", ["open_file_folder"]),
    new Emoji("🗂", "Objects", ["card_index_dividers"]),
    new Emoji("🗞", "Objects", ["newspaper_roll"]),
    new Emoji("📰", "Objects", ["newspaper"]),
    new Emoji("📓", "Objects", ["notebook"]),
    new Emoji("📔", "Objects", ["notebook_with_decorative_cover"]),
    new Emoji("📒", "Objects", ["ledger"]),
    new Emoji("📕", "Objects", ["closed_book"]),
    new Emoji("📗", "Objects", ["green_book"]),
    new Emoji("📘", "Objects", ["blue_book"]),
    new Emoji("📙", "Objects", ["orange_book"]),
    new Emoji("📚", "Objects", ["books"]),
    new Emoji("📖", "Objects", ["book", "open_book"]),
    new Emoji("🔖", "Objects", ["bookmark"]),
    new Emoji("🔗", "Objects", ["link"]),
    new Emoji("📎", "Objects", ["paperclip"]),
    new Emoji("🖇", "Objects", ["paperclips"]),
    new Emoji("📐", "Objects", ["triangular_ruler"]),
    new Emoji("📏", "Objects", ["straight_ruler"]),
    new Emoji("📌", "Objects", ["pushpin"]),
    new Emoji("📍", "Objects", ["round_pushpin"]),
    new Emoji("✂️", "Objects", ["scissors"]),
    new Emoji("🖊", "Objects", ["pen"]),
    new Emoji("🖋", "Objects", ["fountain_pen"]),
    new Emoji("✒️", "Objects", ["black_nib"]),
    new Emoji("🖌", "Objects", ["paintbrush"]),
    new Emoji("🖍", "Objects", ["crayon"]),
    new Emoji("📝", "Objects", ["memo", "pencil"]),
    new Emoji("✏️", "Objects", ["pencil2"]),
    new Emoji("🔍", "Objects", ["mag"]),
    new Emoji("🔎", "Objects", ["mag_right"]),
    new Emoji("🔏", "Objects", ["lock_with_ink_pen"]),
    new Emoji("🔐", "Objects", ["closed_lock_with_key"]),
    new Emoji("🔒", "Objects", ["lock"]),
    new Emoji("🔓", "Objects", ["unlock"]),
    new Emoji("❤️", "Symbols", ["heart"]),
    new Emoji("💛", "Symbols", ["yellow_heart"]),
    new Emoji("💚", "Symbols", ["green_heart"]),
    new Emoji("💙", "Symbols", ["blue_heart"]),
    new Emoji("💜", "Symbols", ["purple_heart"]),
    new Emoji("🖤", "Symbols", ["black_heart"]),
    new Emoji("💔", "Symbols", ["broken_heart"]),
    new Emoji("❣️", "Symbols", ["heavy_heart_exclamation"]),
    new Emoji("💕", "Symbols", ["two_hearts"]),
    new Emoji("💞", "Symbols", ["revolving_hearts"]),
    new Emoji("💓", "Symbols", ["heartbeat"]),
    new Emoji("💗", "Symbols", ["heartpulse"]),
    new Emoji("💖", "Symbols", ["sparkling_heart"]),
    new Emoji("💘", "Symbols", ["cupid"]),
    new Emoji("💝", "Symbols", ["gift_heart"]),
    new Emoji("💟", "Symbols", ["heart_decoration"]),
    new Emoji("☮️", "Symbols", ["peace_symbol"]),
    new Emoji("✝️", "Symbols", ["latin_cross"]),
    new Emoji("☪️", "Symbols", ["star_and_crescent"]),
    new Emoji("🕉", "Symbols", ["om"]),
    new Emoji("☸️", "Symbols", ["wheel_of_dharma"]),
    new Emoji("✡️", "Symbols", ["star_of_david"]),
    new Emoji("🔯", "Symbols", ["six_pointed_star"]),
    new Emoji("🕎", "Symbols", ["menorah"]),
    new Emoji("☯️", "Symbols", ["yin_yang"]),
    new Emoji("☦️", "Symbols", ["orthodox_cross"]),
    new Emoji("🛐", "Symbols", ["place_of_worship"]),
    new Emoji("⛎", "Symbols", ["ophiuchus"]),
    new Emoji("♈️", "Symbols", ["aries"]),
    new Emoji("♉️", "Symbols", ["taurus"]),
    new Emoji("♊️", "Symbols", ["gemini"]),
    new Emoji("♋️", "Symbols", ["cancer"]),
    new Emoji("♌️", "Symbols", ["leo"]),
    new Emoji("♍️", "Symbols", ["virgo"]),
    new Emoji("♎️", "Symbols", ["libra"]),
    new Emoji("♏️", "Symbols", ["scorpius"]),
    new Emoji("♐️", "Symbols", ["sagittarius"]),
    new Emoji("♑️", "Symbols", ["capricorn"]),
    new Emoji("♒️", "Symbols", ["aquarius"]),
    new Emoji("♓️", "Symbols", ["pisces"]),
    new Emoji("🆔", "Symbols", ["id"]),
    new Emoji("⚛️", "Symbols", ["atom_symbol"]),
    new Emoji("🉑", "Symbols", ["accept"]),
    new Emoji("☢️", "Symbols", ["radioactive"]),
    new Emoji("☣️", "Symbols", ["biohazard"]),
    new Emoji("📴", "Symbols", ["mobile_phone_off"]),
    new Emoji("📳", "Symbols", ["vibration_mode"]),
    new Emoji("🈶", "Symbols", ["u6709"]),
    new Emoji("🈚️", "Symbols", ["u7121"]),
    new Emoji("🈸", "Symbols", ["u7533"]),
    new Emoji("🈺", "Symbols", ["u55b6"]),
    new Emoji("🈷️", "Symbols", ["u6708"]),
    new Emoji("✴️", "Symbols", ["eight_pointed_black_star"]),
    new Emoji("🆚", "Symbols", ["vs"]),
    new Emoji("💮", "Symbols", ["white_flower"]),
    new Emoji("🉐", "Symbols", ["ideograph_advantage"]),
    new Emoji("㊙️", "Symbols", ["secret"]),
    new Emoji("㊗️", "Symbols", ["congratulations"]),
    new Emoji("🈴", "Symbols", ["u5408"]),
    new Emoji("🈵", "Symbols", ["u6e80"]),
    new Emoji("🈹", "Symbols", ["u5272"]),
    new Emoji("🈲", "Symbols", ["u7981"]),
    new Emoji("🅰️", "Symbols", ["a"]),
    new Emoji("🅱️", "Symbols", ["b"]),
    new Emoji("🆎", "Symbols", ["ab"]),
    new Emoji("🆑", "Symbols", ["cl"]),
    new Emoji("🅾️", "Symbols", ["o2"]),
    new Emoji("🆘", "Symbols", ["sos"]),
    new Emoji("❌", "Symbols", ["x"]),
    new Emoji("⭕️", "Symbols", ["o"]),
    new Emoji("🛑", "Symbols", ["stop_sign"]),
    new Emoji("⛔️", "Symbols", ["no_entry"]),
    new Emoji("📛", "Symbols", ["name_badge"]),
    new Emoji("🚫", "Symbols", ["no_entry_sign"]),
    new Emoji("💯", "Symbols", ["100"]),
    new Emoji("💢", "Symbols", ["anger"]),
    new Emoji("♨️", "Symbols", ["hotsprings"]),
    new Emoji("🚷", "Symbols", ["no_pedestrians"]),
    new Emoji("🚯", "Symbols", ["do_not_litter"]),
    new Emoji("🚳", "Symbols", ["no_bicycles"]),
    new Emoji("🚱", "Symbols", ["non-potable_water"]),
    new Emoji("🔞", "Symbols", ["underage"]),
    new Emoji("📵", "Symbols", ["no_mobile_phones"]),
    new Emoji("🚭", "Symbols", ["no_smoking"]),
    new Emoji("❗️", "Symbols", ["exclamation", "heavy_exclamation_mark"]),
    new Emoji("❕", "Symbols", ["grey_exclamation"]),
    new Emoji("❓", "Symbols", ["question"]),
    new Emoji("❔", "Symbols", ["grey_question"]),
    new Emoji("‼️", "Symbols", ["bangbang"]),
    new Emoji("⁉️", "Symbols", ["interrobang"]),
    new Emoji("🔅", "Symbols", ["low_brightness"]),
    new Emoji("🔆", "Symbols", ["high_brightness"]),
    new Emoji("〽️", "Symbols", ["part_alternation_mark"]),
    new Emoji("⚠️", "Symbols", ["warning"]),
    new Emoji("🚸", "Symbols", ["children_crossing"]),
    new Emoji("🔱", "Symbols", ["trident"]),
    new Emoji("⚜️", "Symbols", ["fleur_de_lis"]),
    new Emoji("🔰", "Symbols", ["beginner"]),
    new Emoji("♻️", "Symbols", ["recycle"]),
    new Emoji("✅", "Symbols", ["white_check_mark"]),
    new Emoji("🈯️", "Symbols", ["u6307"]),
    new Emoji("💹", "Symbols", ["chart"]),
    new Emoji("❇️", "Symbols", ["sparkle"]),
    new Emoji("✳️", "Symbols", ["eight_spoked_asterisk"]),
    new Emoji("❎", "Symbols", ["negative_squared_cross_mark"]),
    new Emoji("🌐", "Symbols", ["globe_with_meridians"]),
    new Emoji("💠", "Symbols", ["diamond_shape_with_a_dot_inside"]),
    new Emoji("Ⓜ️", "Symbols", ["m"]),
    new Emoji("🌀", "Symbols", ["cyclone"]),
    new Emoji("💤", "Symbols", ["zzz"]),
    new Emoji("🏧", "Symbols", ["atm"]),
    new Emoji("🚾", "Symbols", ["wc"]),
    new Emoji("♿️", "Symbols", ["wheelchair"]),
    new Emoji("🅿️", "Symbols", ["parking"]),
    new Emoji("🈳", "Symbols", ["u7a7a"]),
    new Emoji("🈂️", "Symbols", ["sa"]),
    new Emoji("🛂", "Symbols", ["passport_control"]),
    new Emoji("🛃", "Symbols", ["customs"]),
    new Emoji("🛄", "Symbols", ["baggage_claim"]),
    new Emoji("🛅", "Symbols", ["left_luggage"]),
    new Emoji("🚹", "Symbols", ["mens"]),
    new Emoji("🚺", "Symbols", ["womens"]),
    new Emoji("🚼", "Symbols", ["baby_symbol"]),
    new Emoji("🚻", "Symbols", ["restroom"]),
    new Emoji("🚮", "Symbols", ["put_litter_in_its_place"]),
    new Emoji("🎦", "Symbols", ["cinema"]),
    new Emoji("📶", "Symbols", ["signal_strength"]),
    new Emoji("🈁", "Symbols", ["koko"]),
    new Emoji("🔣", "Symbols", ["symbols"]),
    new Emoji("ℹ️", "Symbols", ["information_source"]),
    new Emoji("🔤", "Symbols", ["abc"]),
    new Emoji("🔡", "Symbols", ["abcd"]),
    new Emoji("🔠", "Symbols", ["capital_abcd"]),
    new Emoji("🆖", "Symbols", ["ng"]),
    new Emoji("🆗", "Symbols", ["ok"]),
    new Emoji("🆙", "Symbols", ["up"]),
    new Emoji("🆒", "Symbols", ["cool"]),
    new Emoji("🆕", "Symbols", ["new"]),
    new Emoji("🆓", "Symbols", ["free"]),
    new Emoji("0️⃣", "Symbols", ["zero"]),
    new Emoji("1️⃣", "Symbols", ["one"]),
    new Emoji("2️⃣", "Symbols", ["two"]),
    new Emoji("3️⃣", "Symbols", ["three"]),
    new Emoji("4️⃣", "Symbols", ["four"]),
    new Emoji("5️⃣", "Symbols", ["five"]),
    new Emoji("6️⃣", "Symbols", ["six"]),
    new Emoji("7️⃣", "Symbols", ["seven"]),
    new Emoji("8️⃣", "Symbols", ["eight"]),
    new Emoji("9️⃣", "Symbols", ["nine"]),
    new Emoji("🔟", "Symbols", ["keycap_ten"]),
    new Emoji("🔢", "Symbols", ["1234"]),
    new Emoji("#️⃣", "Symbols", ["hash"]),
    new Emoji("*️⃣", "Symbols", ["asterisk"]),
    new Emoji("▶️", "Symbols", ["arrow_forward"]),
    new Emoji("⏸", "Symbols", ["pause_button"]),
    new Emoji("⏯", "Symbols", ["play_or_pause_button"]),
    new Emoji("⏹", "Symbols", ["stop_button"]),
    new Emoji("⏺", "Symbols", ["record_button"]),
    new Emoji("⏭", "Symbols", ["next_track_button"]),
    new Emoji("⏮", "Symbols", ["previous_track_button"]),
    new Emoji("⏩", "Symbols", ["fast_forward"]),
    new Emoji("⏪", "Symbols", ["rewind"]),
    new Emoji("⏫", "Symbols", ["arrow_double_up"]),
    new Emoji("⏬", "Symbols", ["arrow_double_down"]),
    new Emoji("◀️", "Symbols", ["arrow_backward"]),
    new Emoji("🔼", "Symbols", ["arrow_up_small"]),
    new Emoji("🔽", "Symbols", ["arrow_down_small"]),
    new Emoji("➡️", "Symbols", ["arrow_right"]),
    new Emoji("⬅️", "Symbols", ["arrow_left"]),
    new Emoji("⬆️", "Symbols", ["arrow_up"]),
    new Emoji("⬇️", "Symbols", ["arrow_down"]),
    new Emoji("↗️", "Symbols", ["arrow_upper_right"]),
    new Emoji("↘️", "Symbols", ["arrow_lower_right"]),
    new Emoji("↙️", "Symbols", ["arrow_lower_left"]),
    new Emoji("↖️", "Symbols", ["arrow_upper_left"]),
    new Emoji("↕️", "Symbols", ["arrow_up_down"]),
    new Emoji("↔️", "Symbols", ["left_right_arrow"]),
    new Emoji("↪️", "Symbols", ["arrow_right_hook"]),
    new Emoji("↩️", "Symbols", ["leftwards_arrow_with_hook"]),
    new Emoji("⤴️", "Symbols", ["arrow_heading_up"]),
    new Emoji("⤵️", "Symbols", ["arrow_heading_down"]),
    new Emoji("🔀", "Symbols", ["twisted_rightwards_arrows"]),
    new Emoji("🔁", "Symbols", ["repeat"]),
    new Emoji("🔂", "Symbols", ["repeat_one"]),
    new Emoji("🔄", "Symbols", ["arrows_counterclockwise"]),
    new Emoji("🔃", "Symbols", ["arrows_clockwise"]),
    new Emoji("🎵", "Symbols", ["musical_note"]),
    new Emoji("🎶", "Symbols", ["notes"]),
    new Emoji("➕", "Symbols", ["heavy_plus_sign"]),
    new Emoji("➖", "Symbols", ["heavy_minus_sign"]),
    new Emoji("➗", "Symbols", ["heavy_division_sign"]),
    new Emoji("✖️", "Symbols", ["heavy_multiplication_x"]),
    new Emoji("💲", "Symbols", ["heavy_dollar_sign"]),
    new Emoji("💱", "Symbols", ["currency_exchange"]),
    new Emoji("™️", "Symbols", ["tm"]),
    new Emoji("©️", "Symbols", ["copyright"]),
    new Emoji("®️", "Symbols", ["registered"]),
    new Emoji("〰️", "Symbols", ["wavy_dash"]),
    new Emoji("➰", "Symbols", ["curly_loop"]),
    new Emoji("➿", "Symbols", ["loop"]),
    new Emoji("🔚", "Symbols", ["end"]),
    new Emoji("🔙", "Symbols", ["back"]),
    new Emoji("🔛", "Symbols", ["on"]),
    new Emoji("🔝", "Symbols", ["top"]),
    new Emoji("🔜", "Symbols", ["soon"]),
    new Emoji("✔️", "Symbols", ["heavy_check_mark"]),
    new Emoji("☑️", "Symbols", ["ballot_box_with_check"]),
    new Emoji("🔘", "Symbols", ["radio_button"]),
    new Emoji("⚪️", "Symbols", ["white_circle"]),
    new Emoji("⚫️", "Symbols", ["black_circle"]),
    new Emoji("🔴", "Symbols", ["red_circle"]),
    new Emoji("🔵", "Symbols", ["large_blue_circle"]),
    new Emoji("🔺", "Symbols", ["small_red_triangle"]),
    new Emoji("🔻", "Symbols", ["small_red_triangle_down"]),
    new Emoji("🔸", "Symbols", ["small_orange_diamond"]),
    new Emoji("🔹", "Symbols", ["small_blue_diamond"]),
    new Emoji("🔶", "Symbols", ["large_orange_diamond"]),
    new Emoji("🔷", "Symbols", ["large_blue_diamond"]),
    new Emoji("🔳", "Symbols", ["white_square_button"]),
    new Emoji("🔲", "Symbols", ["black_square_button"]),
    new Emoji("▪️", "Symbols", ["black_small_square"]),
    new Emoji("▫️", "Symbols", ["white_small_square"]),
    new Emoji("◾️", "Symbols", ["black_medium_small_square"]),
    new Emoji("◽️", "Symbols", ["white_medium_small_square"]),
    new Emoji("◼️", "Symbols", ["black_medium_square"]),
    new Emoji("◻️", "Symbols", ["white_medium_square"]),
    new Emoji("⬛️", "Symbols", ["black_large_square"]),
    new Emoji("⬜️", "Symbols", ["white_large_square"]),
    new Emoji("🔈", "Symbols", ["speaker"]),
    new Emoji("🔇", "Symbols", ["mute"]),
    new Emoji("🔉", "Symbols", ["sound"]),
    new Emoji("🔊", "Symbols", ["loud_sound"]),
    new Emoji("🔔", "Symbols", ["bell"]),
    new Emoji("🔕", "Symbols", ["no_bell"]),
    new Emoji("📣", "Symbols", ["mega"]),
    new Emoji("📢", "Symbols", ["loudspeaker"]),
    new Emoji("👁‍🗨", "Symbols", ["eye_speech_bubble"]),
    new Emoji("💬", "Symbols", ["speech_balloon"]),
    new Emoji("💭", "Symbols", ["thought_balloon"]),
    new Emoji("🗯", "Symbols", ["right_anger_bubble"]),
    new Emoji("♠️", "Symbols", ["spades"]),
    new Emoji("♣️", "Symbols", ["clubs"]),
    new Emoji("♥️", "Symbols", ["hearts"]),
    new Emoji("♦️", "Symbols", ["diamonds"]),
    new Emoji("🃏", "Symbols", ["black_joker"]),
    new Emoji("🎴", "Symbols", ["flower_playing_cards"]),
    new Emoji("🀄️", "Symbols", ["mahjong"]),
    new Emoji("🕐", "Symbols", ["clock1"]),
    new Emoji("🕑", "Symbols", ["clock2"]),
    new Emoji("🕒", "Symbols", ["clock3"]),
    new Emoji("🕓", "Symbols", ["clock4"]),
    new Emoji("🕔", "Symbols", ["clock5"]),
    new Emoji("🕕", "Symbols", ["clock6"]),
    new Emoji("🕖", "Symbols", ["clock7"]),
    new Emoji("🕗", "Symbols", ["clock8"]),
    new Emoji("🕘", "Symbols", ["clock9"]),
    new Emoji("🕙", "Symbols", ["clock10"]),
    new Emoji("🕚", "Symbols", ["clock11"]),
    new Emoji("🕛", "Symbols", ["clock12"]),
    new Emoji("🕜", "Symbols", ["clock130"]),
    new Emoji("🕝", "Symbols", ["clock230"]),
    new Emoji("🕞", "Symbols", ["clock330"]),
    new Emoji("🕟", "Symbols", ["clock430"]),
    new Emoji("🕠", "Symbols", ["clock530"]),
    new Emoji("🕡", "Symbols", ["clock630"]),
    new Emoji("🕢", "Symbols", ["clock730"]),
    new Emoji("🕣", "Symbols", ["clock830"]),
    new Emoji("🕤", "Symbols", ["clock930"]),
    new Emoji("🕥", "Symbols", ["clock1030"]),
    new Emoji("🕦", "Symbols", ["clock1130"]),
    new Emoji("🕧", "Symbols", ["clock1230"]),
    new Emoji("🏳️", "Flags", ["white_flag"]),
    new Emoji("🏴", "Flags", ["black_flag"]),
    new Emoji("🏁", "Flags", ["checkered_flag"]),
    new Emoji("🚩", "Flags", ["triangular_flag_on_post"]),
    new Emoji("🏳️‍🌈", "Flags", ["rainbow_flag"]),
    new Emoji("🇦🇫", "Flags", ["afghanistan"]),
    new Emoji("🇦🇽", "Flags", ["aland_islands"]),
    new Emoji("🇦🇱", "Flags", ["albania"]),
    new Emoji("🇩🇿", "Flags", ["algeria"]),
    new Emoji("🇦🇸", "Flags", ["american_samoa"]),
    new Emoji("🇦🇩", "Flags", ["andorra"]),
    new Emoji("🇦🇴", "Flags", ["angola"]),
    new Emoji("🇦🇮", "Flags", ["anguilla"]),
    new Emoji("🇦🇶", "Flags", ["antarctica"]),
    new Emoji("🇦🇬", "Flags", ["antigua_barbuda"]),
    new Emoji("🇦🇷", "Flags", ["argentina"]),
    new Emoji("🇦🇲", "Flags", ["armenia"]),
    new Emoji("🇦🇼", "Flags", ["aruba"]),
    new Emoji("🇦🇺", "Flags", ["australia"]),
    new Emoji("🇦🇹", "Flags", ["austria"]),
    new Emoji("🇦🇿", "Flags", ["azerbaijan"]),
    new Emoji("🇧🇸", "Flags", ["bahamas"]),
    new Emoji("🇧🇭", "Flags", ["bahrain"]),
    new Emoji("🇧🇩", "Flags", ["bangladesh"]),
    new Emoji("🇧🇧", "Flags", ["barbados"]),
    new Emoji("🇧🇾", "Flags", ["belarus"]),
    new Emoji("🇧🇪", "Flags", ["belgium"]),
    new Emoji("🇧🇿", "Flags", ["belize"]),
    new Emoji("🇧🇯", "Flags", ["benin"]),
    new Emoji("🇧🇲", "Flags", ["bermuda"]),
    new Emoji("🇧🇹", "Flags", ["bhutan"]),
    new Emoji("🇧🇴", "Flags", ["bolivia"]),
    new Emoji("🇧🇶", "Flags", ["caribbean_netherlands"]),
    new Emoji("🇧🇦", "Flags", ["bosnia_herzegovina"]),
    new Emoji("🇧🇼", "Flags", ["botswana"]),
    new Emoji("🇧🇷", "Flags", ["brazil"]),
    new Emoji("🇮🇴", "Flags", ["british_indian_ocean_territory"]),
    new Emoji("🇻🇬", "Flags", ["british_virgin_islands"]),
    new Emoji("🇧🇳", "Flags", ["brunei"]),
    new Emoji("🇧🇬", "Flags", ["bulgaria"]),
    new Emoji("🇧🇫", "Flags", ["burkina_faso"]),
    new Emoji("🇧🇮", "Flags", ["burundi"]),
    new Emoji("🇨🇻", "Flags", ["cape_verde"]),
    new Emoji("🇰🇭", "Flags", ["cambodia"]),
    new Emoji("🇨🇲", "Flags", ["cameroon"]),
    new Emoji("🇨🇦", "Flags", ["canada"]),
    new Emoji("🇮🇨", "Flags", ["canary_islands"]),
    new Emoji("🇰🇾", "Flags", ["cayman_islands"]),
    new Emoji("🇨🇫", "Flags", ["central_african_republic"]),
    new Emoji("🇹🇩", "Flags", ["chad"]),
    new Emoji("🇨🇱", "Flags", ["chile"]),
    new Emoji("🇨🇳", "Flags", ["cn"]),
    new Emoji("🇨🇽", "Flags", ["christmas_island"]),
    new Emoji("🇨🇨", "Flags", ["cocos_islands"]),
    new Emoji("🇨🇴", "Flags", ["colombia"]),
    new Emoji("🇰🇲", "Flags", ["comoros"]),
    new Emoji("🇨🇬", "Flags", ["congo_brazzaville"]),
    new Emoji("🇨🇩", "Flags", ["congo_kinshasa"]),
    new Emoji("🇨🇰", "Flags", ["cook_islands"]),
    new Emoji("🇨🇷", "Flags", ["costa_rica"]),
    new Emoji("🇨🇮", "Flags", ["cote_divoire"]),
    new Emoji("🇭🇷", "Flags", ["croatia"]),
    new Emoji("🇨🇺", "Flags", ["cuba"]),
    new Emoji("🇨🇼", "Flags", ["curacao"]),
    new Emoji("🇨🇾", "Flags", ["cyprus"]),
    new Emoji("🇨🇿", "Flags", ["czech_republic"]),
    new Emoji("🇩🇰", "Flags", ["denmark"]),
    new Emoji("🇩🇯", "Flags", ["djibouti"]),
    new Emoji("🇩🇲", "Flags", ["dominica"]),
    new Emoji("🇩🇴", "Flags", ["dominican_republic"]),
    new Emoji("🇪🇨", "Flags", ["ecuador"]),
    new Emoji("🇪🇬", "Flags", ["egypt"]),
    new Emoji("🇸🇻", "Flags", ["el_salvador"]),
    new Emoji("🇬🇶", "Flags", ["equatorial_guinea"]),
    new Emoji("🇪🇷", "Flags", ["eritrea"]),
    new Emoji("🇪🇪", "Flags", ["estonia"]),
    new Emoji("🇪🇹", "Flags", ["ethiopia"]),
    new Emoji("🇪🇺", "Flags", ["eu", "european_union"]),
    new Emoji("🇫🇰", "Flags", ["falkland_islands"]),
    new Emoji("🇫🇴", "Flags", ["faroe_islands"]),
    new Emoji("🇫🇯", "Flags", ["fiji"]),
    new Emoji("🇫🇮", "Flags", ["finland"]),
    new Emoji("🇫🇷", "Flags", ["fr"]),
    new Emoji("🇬🇫", "Flags", ["french_guiana"]),
    new Emoji("🇵🇫", "Flags", ["french_polynesia"]),
    new Emoji("🇹🇫", "Flags", ["french_southern_territories"]),
    new Emoji("🇬🇦", "Flags", ["gabon"]),
    new Emoji("🇬🇲", "Flags", ["gambia"]),
    new Emoji("🇬🇪", "Flags", ["georgia"]),
    new Emoji("🇩🇪", "Flags", ["de"]),
    new Emoji("🇬🇭", "Flags", ["ghana"]),
    new Emoji("🇬🇮", "Flags", ["gibraltar"]),
    new Emoji("🇬🇷", "Flags", ["greece"]),
    new Emoji("🇬🇱", "Flags", ["greenland"]),
    new Emoji("🇬🇩", "Flags", ["grenada"]),
    new Emoji("🇬🇵", "Flags", ["guadeloupe"]),
    new Emoji("🇬🇺", "Flags", ["guam"]),
    new Emoji("🇬🇹", "Flags", ["guatemala"]),
    new Emoji("🇬🇬", "Flags", ["guernsey"]),
    new Emoji("🇬🇳", "Flags", ["guinea"]),
    new Emoji("🇬🇼", "Flags", ["guinea_bissau"]),
    new Emoji("🇬🇾", "Flags", ["guyana"]),
    new Emoji("🇭🇹", "Flags", ["haiti"]),
    new Emoji("🇭🇳", "Flags", ["honduras"]),
    new Emoji("🇭🇰", "Flags", ["hong_kong"]),
    new Emoji("🇭🇺", "Flags", ["hungary"]),
    new Emoji("🇮🇸", "Flags", ["iceland"]),
    new Emoji("🇮🇳", "Flags", ["india"]),
    new Emoji("🇮🇩", "Flags", ["indonesia"]),
    new Emoji("🇮🇷", "Flags", ["iran"]),
    new Emoji("🇮🇶", "Flags", ["iraq"]),
    new Emoji("🇮🇪", "Flags", ["ireland"]),
    new Emoji("🇮🇲", "Flags", ["isle_of_man"]),
    new Emoji("🇮🇱", "Flags", ["israel"]),
    new Emoji("🇮🇹", "Flags", ["it"]),
    new Emoji("🇯🇲", "Flags", ["jamaica"]),
    new Emoji("🇯🇵", "Flags", ["jp"]),
    new Emoji("🎌", "Flags", ["crossed_flags"]),
    new Emoji("🇯🇪", "Flags", ["jersey"]),
    new Emoji("🇯🇴", "Flags", ["jordan"]),
    new Emoji("🇰🇿", "Flags", ["kazakhstan"]),
    new Emoji("🇰🇪", "Flags", ["kenya"]),
    new Emoji("🇰🇮", "Flags", ["kiribati"]),
    new Emoji("🇽🇰", "Flags", ["kosovo"]),
    new Emoji("🇰🇼", "Flags", ["kuwait"]),
    new Emoji("🇰🇬", "Flags", ["kyrgyzstan"]),
    new Emoji("🇱🇦", "Flags", ["laos"]),
    new Emoji("🇱🇻", "Flags", ["latvia"]),
    new Emoji("🇱🇧", "Flags", ["lebanon"]),
    new Emoji("🇱🇸", "Flags", ["lesotho"]),
    new Emoji("🇱🇷", "Flags", ["liberia"]),
    new Emoji("🇱🇾", "Flags", ["libya"]),
    new Emoji("🇱🇮", "Flags", ["liechtenstein"]),
    new Emoji("🇱🇹", "Flags", ["lithuania"]),
    new Emoji("🇱🇺", "Flags", ["luxembourg"]),
    new Emoji("🇲🇴", "Flags", ["macau"]),
    new Emoji("🇲🇰", "Flags", ["macedonia"]),
    new Emoji("🇲🇬", "Flags", ["madagascar"]),
    new Emoji("🇲🇼", "Flags", ["malawi"]),
    new Emoji("🇲🇾", "Flags", ["malaysia"]),
    new Emoji("🇲🇻", "Flags", ["maldives"]),
    new Emoji("🇲🇱", "Flags", ["mali"]),
    new Emoji("🇲🇹", "Flags", ["malta"]),
    new Emoji("🇲🇭", "Flags", ["marshall_islands"]),
    new Emoji("🇲🇶", "Flags", ["martinique"]),
    new Emoji("🇲🇷", "Flags", ["mauritania"]),
    new Emoji("🇲🇺", "Flags", ["mauritius"]),
    new Emoji("🇾🇹", "Flags", ["mayotte"]),
    new Emoji("🇲🇽", "Flags", ["mexico"]),
    new Emoji("🇫🇲", "Flags", ["micronesia"]),
    new Emoji("🇲🇩", "Flags", ["moldova"]),
    new Emoji("🇲🇨", "Flags", ["monaco"]),
    new Emoji("🇲🇳", "Flags", ["mongolia"]),
    new Emoji("🇲🇪", "Flags", ["montenegro"]),
    new Emoji("🇲🇸", "Flags", ["montserrat"]),
    new Emoji("🇲🇦", "Flags", ["morocco"]),
    new Emoji("🇲🇿", "Flags", ["mozambique"]),
    new Emoji("🇲🇲", "Flags", ["myanmar"]),
    new Emoji("🇳🇦", "Flags", ["namibia"]),
    new Emoji("🇳🇷", "Flags", ["nauru"]),
    new Emoji("🇳🇵", "Flags", ["nepal"]),
    new Emoji("🇳🇱", "Flags", ["netherlands"]),
    new Emoji("🇳🇨", "Flags", ["new_caledonia"]),
    new Emoji("🇳🇿", "Flags", ["new_zealand"]),
    new Emoji("🇳🇮", "Flags", ["nicaragua"]),
    new Emoji("🇳🇪", "Flags", ["niger"]),
    new Emoji("🇳🇬", "Flags", ["nigeria"]),
    new Emoji("🇳🇺", "Flags", ["niue"]),
    new Emoji("🇳🇫", "Flags", ["norfolk_island"]),
    new Emoji("🇲🇵", "Flags", ["northern_mariana_islands"]),
    new Emoji("🇰🇵", "Flags", ["north_korea"]),
    new Emoji("🇳🇴", "Flags", ["norway"]),
    new Emoji("🇴🇲", "Flags", ["oman"]),
    new Emoji("🇵🇰", "Flags", ["pakistan"]),
    new Emoji("🇵🇼", "Flags", ["palau"]),
    new Emoji("🇵🇸", "Flags", ["palestinian_territories"]),
    new Emoji("🇵🇦", "Flags", ["panama"]),
    new Emoji("🇵🇬", "Flags", ["papua_new_guinea"]),
    new Emoji("🇵🇾", "Flags", ["paraguay"]),
    new Emoji("🇵🇪", "Flags", ["peru"]),
    new Emoji("🇵🇭", "Flags", ["philippines"]),
    new Emoji("🇵🇳", "Flags", ["pitcairn_islands"]),
    new Emoji("🇵🇱", "Flags", ["poland"]),
    new Emoji("🇵🇹", "Flags", ["portugal"]),
    new Emoji("🇵🇷", "Flags", ["puerto_rico"]),
    new Emoji("🇶🇦", "Flags", ["qatar"]),
    new Emoji("🇷🇪", "Flags", ["reunion"]),
    new Emoji("🇷🇴", "Flags", ["romania"]),
    new Emoji("🇷🇺", "Flags", ["ru"]),
    new Emoji("🇷🇼", "Flags", ["rwanda"]),
    new Emoji("🇧🇱", "Flags", ["st_barthelemy"]),
    new Emoji("🇸🇭", "Flags", ["st_helena"]),
    new Emoji("🇰🇳", "Flags", ["st_kitts_nevis"]),
    new Emoji("🇱🇨", "Flags", ["st_lucia"]),
    new Emoji("🇵🇲", "Flags", ["st_pierre_miquelon"]),
    new Emoji("🇻🇨", "Flags", ["st_vincent_grenadines"]),
    new Emoji("🇼🇸", "Flags", ["samoa"]),
    new Emoji("🇸🇲", "Flags", ["san_marino"]),
    new Emoji("🇸🇹", "Flags", ["sao_tome_principe"]),
    new Emoji("🇸🇦", "Flags", ["saudi_arabia"]),
    new Emoji("🇸🇳", "Flags", ["senegal"]),
    new Emoji("🇷🇸", "Flags", ["serbia"]),
    new Emoji("🇸🇨", "Flags", ["seychelles"]),
    new Emoji("🇸🇱", "Flags", ["sierra_leone"]),
    new Emoji("🇸🇬", "Flags", ["singapore"]),
    new Emoji("🇸🇽", "Flags", ["sint_maarten"]),
    new Emoji("🇸🇰", "Flags", ["slovakia"]),
    new Emoji("🇸🇮", "Flags", ["slovenia"]),
    new Emoji("🇸🇧", "Flags", ["solomon_islands"]),
    new Emoji("🇸🇴", "Flags", ["somalia"]),
    new Emoji("🇿🇦", "Flags", ["south_africa"]),
    new Emoji("🇬🇸", "Flags", ["south_georgia_south_sandwich_islands"]),
    new Emoji("🇰🇷", "Flags", ["kr"]),
    new Emoji("🇸🇸", "Flags", ["south_sudan"]),
    new Emoji("🇪🇸", "Flags", ["es"]),
    new Emoji("🇱🇰", "Flags", ["sri_lanka"]),
    new Emoji("🇸🇩", "Flags", ["sudan"]),
    new Emoji("🇸🇷", "Flags", ["suriname"]),
    new Emoji("🇸🇿", "Flags", ["swaziland"]),
    new Emoji("🇸🇪", "Flags", ["sweden"]),
    new Emoji("🇨🇭", "Flags", ["switzerland"]),
    new Emoji("🇸🇾", "Flags", ["syria"]),
    new Emoji("🇹🇼", "Flags", ["taiwan"]),
    new Emoji("🇹🇯", "Flags", ["tajikistan"]),
    new Emoji("🇹🇿", "Flags", ["tanzania"]),
    new Emoji("🇹🇭", "Flags", ["thailand"]),
    new Emoji("🇹🇱", "Flags", ["timor_leste"]),
    new Emoji("🇹🇬", "Flags", ["togo"]),
    new Emoji("🇹🇰", "Flags", ["tokelau"]),
    new Emoji("🇹🇴", "Flags", ["tonga"]),
    new Emoji("🇹🇹", "Flags", ["trinidad_tobago"]),
    new Emoji("🇹🇳", "Flags", ["tunisia"]),
    new Emoji("🇹🇷", "Flags", ["tr"]),
    new Emoji("🇹🇲", "Flags", ["turkmenistan"]),
    new Emoji("🇹🇨", "Flags", ["turks_caicos_islands"]),
    new Emoji("🇹🇻", "Flags", ["tuvalu"]),
    new Emoji("🇺🇬", "Flags", ["uganda"]),
    new Emoji("🇺🇦", "Flags", ["ukraine"]),
    new Emoji("🇦🇪", "Flags", ["united_arab_emirates"]),
    new Emoji("🇬🇧", "Flags", ["gb", "uk"]),
    new Emoji("🇺🇸", "Flags", ["us"]),
    new Emoji("🇻🇮", "Flags", ["us_virgin_islands"]),
    new Emoji("🇺🇾", "Flags", ["uruguay"]),
    new Emoji("🇺🇿", "Flags", ["uzbekistan"]),
    new Emoji("🇻🇺", "Flags", ["vanuatu"]),
    new Emoji("🇻🇦", "Flags", ["vatican_city"]),
    new Emoji("🇻🇪", "Flags", ["venezuela"]),
    new Emoji("🇻🇳", "Flags", ["vietnam"]),
    new Emoji("🇼🇫", "Flags", ["wallis_futuna"]),
    new Emoji("🇪🇭", "Flags", ["western_sahara"]),
    new Emoji("🇾🇪", "Flags", ["yemen"]),
    new Emoji("🇿🇲", "Flags", ["zambia"]),
    new Emoji("🇿🇼", "Flags", ["zimbabwe"])
];var v_emoji_picker_esm_CategoryItem = /** @class */ (function (_super) {
    __extends(CategoryItem, _super);
    function CategoryItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CategoryItem.prototype, "styleSVG", {
        get: function () {
            return __assign({}, this.styles);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Prop({ required: true })
    ], CategoryItem.prototype, "label", void 0);
    __decorate([
        Prop({ required: true })
    ], CategoryItem.prototype, "icon", void 0);
    __decorate([
        Prop({})
    ], CategoryItem.prototype, "styles", void 0);
    CategoryItem = __decorate([
        vue_class_component_esm({})
    ], CategoryItem);
    return CategoryItem;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));function v_emoji_picker_esm_normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}/* script */
const __vue_script__ = v_emoji_picker_esm_CategoryItem;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"svg",style:(_vm.styleSVG),attrs:{"title":_vm.label},domProps:{"innerHTML":_vm._s(_vm.icon)}})};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-3d397e3a_0", { source: ".svg[data-v-3d397e3a]{display:inline-block;vertical-align:middle}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-3d397e3a";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/v_emoji_picker_esm_normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );var v_emoji_picker_esm_Categories = /** @class */ (function (_super) {
    __extends(Categories, _super);
    function Categories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Categories.prototype.onSelect = function (category) {
        return category;
    };
    __decorate([
        Prop({})
    ], Categories.prototype, "categories", void 0);
    __decorate([
        Prop({})
    ], Categories.prototype, "current", void 0);
    __decorate([
        Emit("select")
    ], Categories.prototype, "onSelect", null);
    Categories = __decorate([
        vue_class_component_esm({
            components: {
                CategoryItem: __vue_component__
            }
        })
    ], Categories);
    return Categories;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));/* script */
const __vue_script__$1 = v_emoji_picker_esm_Categories;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Categories"}},_vm._l((_vm.categories),function(category,index){return _c('div',{key:index,class:['category', { active: category.name === _vm.current }],on:{"click":function($event){return _vm.onSelect(category)}}},[_c('CategoryItem',{attrs:{"label":category.label,"icon":category.icon}})],1)}),0)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-6d975e7c_0", { source: "#Categories[data-v-6d975e7c]{display:flex;width:100%;flex-direction:row;align-items:center;border-bottom:1px solid var(--ep-color-border);background:var(--ep-color-bg);overflow-x:auto}.category[data-v-6d975e7c]{flex:1;padding:5px;text-align:center;cursor:pointer}.category.active[data-v-6d975e7c]{border-bottom:3px solid var(--ep-color-active);filter:saturate(3);padding-bottom:2px}.category>img[data-v-6d975e7c]{width:22px;height:22px}.category[data-v-6d975e7c]:hover{filter:saturate(3)}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-6d975e7c";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/v_emoji_picker_esm_normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );var v_emoji_picker_esm_EmojiItem = /** @class */ (function (_super) {
    __extends(EmojiItem, _super);
    function EmojiItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EmojiItem.prototype, "styleSize", {
        get: function () {
            return {
                fontSize: this.size - 5 + "px",
                lineHeight: this.size + "px",
                height: this.size + "px",
                width: this.size + "px"
            };
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Prop({})
    ], EmojiItem.prototype, "emoji", void 0);
    __decorate([
        Prop({})
    ], EmojiItem.prototype, "size", void 0);
    __decorate([
        Prop({})
    ], EmojiItem.prototype, "withBorder", void 0);
    EmojiItem = __decorate([
        vue_class_component_esm({})
    ], EmojiItem);
    return EmojiItem;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));/* script */
const __vue_script__$2 = v_emoji_picker_esm_EmojiItem;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:['emoji', { 'border': _vm.withBorder } ],style:(_vm.styleSize),domProps:{"innerHTML":_vm._s(_vm.emoji.data)}})};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-5a35c3ac_0", { source: ".emoji[data-v-5a35c3ac]{display:inline-block;text-align:center;padding:3px;box-sizing:content-box;overflow:hidden;transition:transform .2s;cursor:pointer}.emoji[data-v-5a35c3ac]:hover{transform:scale(1.05)}.border[data-v-5a35c3ac]:hover{background:#00000010;border-radius:8px}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-5a35c3ac";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/v_emoji_picker_esm_normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    createInjector,
    undefined,
    undefined
  );var v_emoji_picker_esm_CategoryLabel = /** @class */ (function (_super) {
    __extends(CategoryLabel, _super);
    function CategoryLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Prop({ required: true })
    ], CategoryLabel.prototype, "name", void 0);
    CategoryLabel = __decorate([
        vue_class_component_esm({})
    ], CategoryLabel);
    return CategoryLabel;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));/* script */
const __vue_script__$3 = v_emoji_picker_esm_CategoryLabel;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"category-title"},[_vm._v(_vm._s(_vm.name))])};
var __vue_staticRenderFns__$3 = [];

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-b863a738_0", { source: ".category-title[data-v-b863a738]{text-transform:uppercase;font-size:.8em;padding:5px 0 0 16px;color:#676666}.category-title[data-v-b863a738]:not(:first-of-type){padding:10px 0 0 16px}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = "data-v-b863a738";
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = /*#__PURE__*/v_emoji_picker_esm_normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    createInjector,
    undefined,
    undefined
  );var v_emoji_picker_esm_EmojiList = /** @class */ (function (_super) {
    __extends(EmojiList, _super);
    function EmojiList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiList.prototype.searchByAlias = function (term, emoji) {
        var isRelevant = function (alias) { return alias.toLowerCase().includes(term); };
        return emoji.aliases.some(function (alias) { return isRelevant(alias); });
    };
    EmojiList.prototype.calcScrollTop = function () {
        return this.hasSearch ? 88 : 44;
    };
    Object.defineProperty(EmojiList.prototype, "gridDynamic", {
        get: function () {
            var percent = 100 / this.emojisByRow;
            return {
                gridTemplateColumns: "repeat(" + this.emojisByRow + ", " + percent + "%)"
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiList.prototype, "dataFiltered", {
        get: function () {
            var _this = this;
            var data = this.data[this.category];
            var searchValue = this.filter.trim().toLowerCase();
            if (searchValue) {
                data = data.filter(function (emoji) {
                    return _this.searchByAlias(searchValue, emoji);
                });
            }
            return data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiList.prototype, "dataFilteredByCategory", {
        get: function () {
            var _this = this;
            var _data = Object.assign({}, this.data);
            var searchValue = this.filter.trim().toLowerCase();
            if (searchValue) {
                this.categories.forEach(function (category) {
                    _data[category] = _this.data[category].filter(function (item) {
                        return _this.searchByAlias(searchValue, item);
                    });
                });
            }
            return _data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiList.prototype, "categories", {
        get: function () {
            return Object.keys(this.data);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiList.prototype, "containerEmoji", {
        get: function () {
            return this.$refs["container-emoji"];
        },
        enumerable: false,
        configurable: true
    });
    EmojiList.prototype.onSelect = function (emoji) {
        return emoji;
    };
    EmojiList.prototype.onDataChanged = function () {
        this.containerEmoji.scrollTop = 0;
    };
    EmojiList.prototype.onCategoryChanged = function (newValue) {
        if (this.continuousList) {
            var categoryEl = this.$refs[newValue][0].$el;
            this.containerEmoji.scrollTop =
                categoryEl.offsetTop - this.calcScrollTop();
        }
    };
    __decorate([
        Prop({ required: true })
    ], EmojiList.prototype, "data", void 0);
    __decorate([
        Prop({ required: true })
    ], EmojiList.prototype, "emojisByRow", void 0);
    __decorate([
        Prop({})
    ], EmojiList.prototype, "emojiWithBorder", void 0);
    __decorate([
        Prop({})
    ], EmojiList.prototype, "emojiSize", void 0);
    __decorate([
        Prop({})
    ], EmojiList.prototype, "filter", void 0);
    __decorate([
        Prop({})
    ], EmojiList.prototype, "continuousList", void 0);
    __decorate([
        Prop({})
    ], EmojiList.prototype, "category", void 0);
    __decorate([
        Prop({})
    ], EmojiList.prototype, "hasSearch", void 0);
    __decorate([
        Emit("select")
    ], EmojiList.prototype, "onSelect", null);
    __decorate([
        Watch("data")
    ], EmojiList.prototype, "onDataChanged", null);
    __decorate([
        Watch("category")
    ], EmojiList.prototype, "onCategoryChanged", null);
    EmojiList = __decorate([
        vue_class_component_esm({
            components: {
                EmojiItem: __vue_component__$2,
                CategoryLabel: __vue_component__$3
            }
        })
    ], EmojiList);
    return EmojiList;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));/* script */
const __vue_script__$4 = v_emoji_picker_esm_EmojiList;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Emojis"}},[_c('div',{ref:"container-emoji",staticClass:"container-emoji"},[(_vm.continuousList)?_vm._l((_vm.dataFilteredByCategory),function(category,category_name){return _c('div',{key:category_name},[_c('CategoryLabel',{directives:[{name:"show",rawName:"v-show",value:(category.length),expression:"category.length"}],ref:category_name,refInFor:true,attrs:{"name":category_name}}),_vm._v(" "),(category.length)?_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((category),function(emoji,index_e){return _c('EmojiItem',{key:(category_name + "-" + index_e),attrs:{"emoji":emoji,"size":_vm.emojiSize,"withBorder":_vm.emojiWithBorder},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1):_vm._e()],1)}):[_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((_vm.dataFiltered),function(emoji,index){return _c('EmojiItem',{key:index,attrs:{"emoji":emoji,"size":_vm.emojiSize,"withBorder":_vm.emojiWithBorder},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1)]],2)])};
var __vue_staticRenderFns__$4 = [];

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-5c988bee_0", { source: "#Emojis[data-v-5c988bee]{font-family:Twemoji,NotomojiColor,Notomoji,EmojiOne Color,Symbola,Noto,Segoe UI Emoji,OpenSansEmoji,monospace;display:block;width:100%;max-width:100%;color:var(--ep-color-text)}#Emojis[data-v-5c988bee] ::-webkit-scrollbar{border-radius:4px;width:4px;overflow:hidden}.container-emoji[data-v-5c988bee]{overflow-x:hidden;overflow-y:scroll;height:350px}.grid-emojis[data-v-5c988bee]{display:grid;margin:5px 0;justify-items:center}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = "data-v-5c988bee";
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = /*#__PURE__*/v_emoji_picker_esm_normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    createInjector,
    undefined,
    undefined
  );var timemout = 500;
var listenInput;
var v_emoji_picker_esm_InputSearch = /** @class */ (function (_super) {
    __extends(InputSearch, _super);
    function InputSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputSearch = "";
        return _this;
    }
    InputSearch.prototype.onInputChanged = function (newValue, old) {
        var _this = this;
        clearTimeout(listenInput);
        listenInput = setTimeout(function () { return _this.$emit("update", newValue); }, timemout);
    };
    Object.defineProperty(InputSearch.prototype, "placeholder", {
        get: function () {
            return v_emoji_picker_esm_t("search");
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Watch("inputSearch")
    ], InputSearch.prototype, "onInputChanged", null);
    InputSearch = __decorate([
        vue_class_component_esm({})
    ], InputSearch);
    return InputSearch;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));/* script */
const __vue_script__$5 = v_emoji_picker_esm_InputSearch;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"InputSearch"}},[_c('div',{staticClass:"container-search"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputSearch),expression:"inputSearch"}],attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":(_vm.inputSearch)},on:{"input":function($event){if($event.target.composing){ return; }_vm.inputSearch=$event.target.value;}}})])])};
var __vue_staticRenderFns__$5 = [];

  /* style */
  const __vue_inject_styles__$5 = function (inject) {
    if (!inject) return
    inject("data-v-839ecda0_0", { source: "#InputSearch[data-v-839ecda0]{display:block;width:100%;max-width:100%}.container-search[data-v-839ecda0]{display:block;justify-content:center;box-sizing:border-box;width:100%;margin:5px 0;padding:0 5%}.container-search input[data-v-839ecda0]{width:100%;font-size:14px;padding:6px 8px;box-sizing:border-box;border-radius:8px;background:var(--ep-color-sbg);color:var(--ep-color-text);border:1px solid var(--ep-color-border)}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = "data-v-839ecda0";
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$5 = /*#__PURE__*/v_emoji_picker_esm_normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    createInjector,
    undefined,
    undefined
  );var v_emoji_picker_esm_VEmojiPicker = /** @class */ (function (_super) {
    __extends(VEmojiPicker, _super);
    function VEmojiPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mapEmojis = {};
        _this.currentCategory = _this.initialCategory;
        _this.filterEmoji = "";
        return _this;
    }
    VEmojiPicker.prototype.created = function () {
        var categoriesNames = this.customCategories.map(function (c) { return c.name; });
        if (!categoriesNames.includes(this.initialCategory)) {
            this.initialCategory = categoriesNames[0];
        }
        // Create map
        this.mapperEmojisCategory(this.customEmojis);
        this.restoreFrequentlyEmojis();
        // Configure i18n
        if (this.i18n) {
            locale.i18n(this.i18n);
        }
    };
    VEmojiPicker.prototype.beforeDestroy = function () {
        this.mapEmojis = {};
    };
    VEmojiPicker.prototype.onSearch = function (term) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.filterEmoji = term;
                return [2 /*return*/];
            });
        });
    };
    VEmojiPicker.prototype.changeCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var hasEmojis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasEmojis = this.mapEmojis[category.name].length;
                        this.currentCategory = category.name;
                        if (!hasEmojis) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onChangeCategory(category)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    VEmojiPicker.prototype.updateFrequently = function (emoji) {
        return __awaiter(this, void 0, void 0, function () {
            var oldEmojis, emojis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldEmojis = this.mapEmojis["Frequently"];
                        emojis = __spread(new Set(__spread([emoji], oldEmojis)));
                        this.mapEmojis["Frequently"] = emojis.slice(0, this.limitFrequently);
                        return [4 /*yield*/, this.saveFrequentlyEmojis(emojis)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VEmojiPicker.prototype.mapperEmojisCategory = function (emojis) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.$set(this.mapEmojis, "Frequently", []);
                emojis
                    .filter(function (emoji) { return !_this.exceptEmojis.includes(emoji); })
                    .forEach(function (emoji) {
                    var _category = emoji.category;
                    if (!_this.mapEmojis[_category]) {
                        _this.$set(_this.mapEmojis, _category, []);
                    }
                    _this.mapEmojis[_category].push(emoji);
                });
                return [2 /*return*/];
            });
        });
    };
    VEmojiPicker.prototype.restoreFrequentlyEmojis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jsonMapIndexEmojis, mapIndexEmojis;
            var _this = this;
            return __generator(this, function (_a) {
                jsonMapIndexEmojis = localStorage.getItem("frequentlyEmojis");
                mapIndexEmojis = JSON.parse(jsonMapIndexEmojis) || [];
                this.mapEmojis["Frequently"] = mapIndexEmojis.map(function (index) { return _this.customEmojis[index]; });
                return [2 /*return*/];
            });
        });
    };
    VEmojiPicker.prototype.saveFrequentlyEmojis = function (emojis) {
        return __awaiter(this, void 0, void 0, function () {
            var mapIndexEmojis;
            var _this = this;
            return __generator(this, function (_a) {
                mapIndexEmojis = emojis.map(function (emoji) {
                    return _this.customEmojis.indexOf(emoji);
                });
                localStorage.setItem("frequentlyEmojis", JSON.stringify(mapIndexEmojis));
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(VEmojiPicker.prototype, "categoriesFiltered", {
        get: function () {
            var _this = this;
            return this.customCategories.filter(function (category) { return !_this.exceptCategories.includes(category); });
        },
        enumerable: false,
        configurable: true
    });
    VEmojiPicker.prototype.onSelectEmoji = function (emoji) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateFrequently(emoji)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, emoji];
                }
            });
        });
    };
    VEmojiPicker.prototype.onChangeCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, category];
            });
        });
    };
    VEmojiPicker.prototype.onChangeCustomEmojis = function (newEmojis) {
        if (newEmojis && newEmojis.length) {
            this.mapEmojis = {};
            this.mapperEmojisCategory(newEmojis);
        }
    };
    __decorate([
        Prop({ default: function () { return emojisDefault; } })
    ], VEmojiPicker.prototype, "customEmojis", void 0);
    __decorate([
        Prop({ default: function () { return categoriesDefault; } })
    ], VEmojiPicker.prototype, "customCategories", void 0);
    __decorate([
        Prop({ default: 15 })
    ], VEmojiPicker.prototype, "limitFrequently", void 0);
    __decorate([
        Prop({ default: 5 })
    ], VEmojiPicker.prototype, "emojisByRow", void 0);
    __decorate([
        Prop({ default: false })
    ], VEmojiPicker.prototype, "continuousList", void 0);
    __decorate([
        Prop({ default: 32 })
    ], VEmojiPicker.prototype, "emojiSize", void 0);
    __decorate([
        Prop({ default: true })
    ], VEmojiPicker.prototype, "emojiWithBorder", void 0);
    __decorate([
        Prop({ default: true })
    ], VEmojiPicker.prototype, "showSearch", void 0);
    __decorate([
        Prop({ default: true })
    ], VEmojiPicker.prototype, "showCategories", void 0);
    __decorate([
        Prop({ default: false })
    ], VEmojiPicker.prototype, "dark", void 0);
    __decorate([
        Prop({ default: "Peoples" })
    ], VEmojiPicker.prototype, "initialCategory", void 0);
    __decorate([
        Prop({ default: function () { return []; } })
    ], VEmojiPicker.prototype, "exceptCategories", void 0);
    __decorate([
        Prop({ default: function () { return []; } })
    ], VEmojiPicker.prototype, "exceptEmojis", void 0);
    __decorate([
        Prop({})
    ], VEmojiPicker.prototype, "i18n", void 0);
    __decorate([
        Emit("select")
    ], VEmojiPicker.prototype, "onSelectEmoji", null);
    __decorate([
        Emit("changeCategory")
    ], VEmojiPicker.prototype, "onChangeCategory", null);
    __decorate([
        Watch("customEmojis")
    ], VEmojiPicker.prototype, "onChangeCustomEmojis", null);
    VEmojiPicker = __decorate([
        vue_class_component_esm({
            components: {
                Categories: __vue_component__$1,
                EmojiList: __vue_component__$4,
                InputSearch: __vue_component__$5
            }
        })
    ], VEmojiPicker);
    return VEmojiPicker;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));/* script */
const __vue_script__$6 = v_emoji_picker_esm_VEmojiPicker;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['emoji-picker', {dark: _vm.dark}],attrs:{"id":"EmojiPicker"}},[(_vm.showCategories)?_c('Categories',{attrs:{"categories":_vm.categoriesFiltered,"current":_vm.currentCategory},on:{"select":_vm.changeCategory}}):_vm._e(),_vm._v(" "),(_vm.showSearch)?_c('InputSearch',{on:{"update":_vm.onSearch}}):_vm._e(),_vm._v(" "),_c('EmojiList',{attrs:{"data":_vm.mapEmojis,"category":_vm.currentCategory,"filter":_vm.filterEmoji,"emojiWithBorder":_vm.emojiWithBorder,"emojiSize":_vm.emojiSize,"emojisByRow":_vm.emojisByRow,"continuousList":_vm.continuousList,"hasSearch":_vm.showSearch},on:{"select":_vm.onSelectEmoji}})],1)};
var __vue_staticRenderFns__$6 = [];

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-f1d527bc_0", { source: ".emoji-picker[data-v-f1d527bc]{--ep-color-bg:#f0f0f0;--ep-color-sbg:#f6f6f6;--ep-color-border:#e4e4e4;--ep-color-text:#4a4a4a;--ep-color-active:#009688;display:inline-flex;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeSpeed;flex-direction:column;align-items:center;background-color:var(--ep-color-bg);border-radius:4px;border:1px solid var(--ep-color-border);overflow:hidden;width:325px;user-select:none}@media screen and (max-width:325px){.emoji-picker[data-v-f1d527bc]{width:100%}}.dark[data-v-f1d527bc]{--ep-color-bg:#191B1A;--ep-color-sbg:#212221;--ep-color-border:#3E3D42;--ep-color-text:#f0f0f0;--ep-color-active:#009688}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = "data-v-f1d527bc";
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$6 = /*#__PURE__*/v_emoji_picker_esm_normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    createInjector,
    undefined,
    undefined
  );var defaultOptions = {
    i18n: {}
};
var v_emoji_picker_esm_plugin = {
    VEmojiPicker: __vue_component__$6,
    install: function (Vue, opts) {
        if (opts === void 0) { opts = defaultOptions; }
        locale.i18n(opts.i18n);
        Vue.component("VEmojiPicker", __vue_component__$6);
    }
};/* harmony default export */ var v_emoji_picker_esm = (v_emoji_picker_esm_plugin);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JComment/src/JComment.vue?vue&type=script&lang=js&










/* harmony default export */ var JCommentvue_type_script_lang_js_ = ({
  name: "JComment",
  props: {
    title: {
      type: String,
      default: "热门评论"
    },
    orderBy: {
      type: String,
      default: "time"
    },
    rank: {
      type: String,
      default: "desc"
    },
    showNumber: {
      type: Number,
      default: 2
    },
    withCommentContent: {
      type: Boolean,
      default: true
    },
    useEmoji: {
      type: Boolean,
      default: true
    },
    keyMap: {
      type: Object,
      default: function _default() {
        return {
          pid: "pid",
          id: "id",
          isAdmin: "isAdmin"
        };
      }
    },
    commentDatas: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  components: {
    VEmojiPicker: __vue_component__$6
  },
  data: function data() {
    return {
      showComentDatas: [],
      replyText: "",
      commentText: "",
      lastLength: 0,
      showItem: [],
      showVEmojiPicker: false,
      emojiTextId: "",
      scrollTop: 0
    };
  },
  created: function created() {
    this.initData();
    this.initListen();
  },
  watch: {
    commentDatas: function commentDatas() {
      this.initData();
    }
  },
  computed: {},
  methods: {
    initListen: function initListen() {
      window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var v = document.getElementById("v-emoji-picker");
        v.style.top = parseInt(v.style.top) - (scrollTop - this.scrollTop) + "px";
        this.scrollTop = scrollTop;
      };
    },
    // 表情转码
    utf16toEntities: function utf16toEntities(str) {
      var patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
      str = str.replace(patt, function (char) {
        var H;
        var L;
        var code;
        var s;
        if (char.length === 2) {
          H = char.charCodeAt(0); // 取出高位
          L = char.charCodeAt(1); // 取出低位
          code = (H - 0xd800) * 0x400 + 0x10000 + L - 0xdc00; // 转换算法
          s = "&#".concat(code, ";");
        } else {
          s = char;
        }
        return s;
      });
      return str;
    },
    // 表情解码
    entitiestoUtf16: function entitiestoUtf16(strObj) {
      var patt = /&#\d+;/g;
      var arr = strObj.match(patt) || [];
      var H;
      var L;
      var code;
      for (var i = 0; i < arr.length; i += 1) {
        code = arr[i];
        code = code.replace("&#", "").replace(";", "");
        // 高位
        H = Math.floor((code - 0x10000) / 0x400) + 0xd800;
        // 低位
        L = (code - 0x10000) % 0x400 + 0xdc00;
        code = "&#".concat(code, ";");
        var s = String.fromCharCode(H, L);
        strObj = strObj.replace(code, s);
      }
      return strObj;
    },
    showEmoji: function showEmoji(el) {
      var v = document.getElementById("v-emoji-picker");
      var srcElement = el.srcElement;
      v.style.left = el.x + 5 + "px";
      v.style.top = el.y + 5 + "px";
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      this.showVEmojiPicker = !this.showVEmojiPicker;
      this.emojiTextId = el.target.id;
    },
    selectEmoji: function selectEmoji(emoji) {
      // 选择emoji后调用的函数
      var input = null;
      if (this.emojiTextId === "comment-emoji") {
        input = document.getElementById("j-comment-content");
      } else {
        var id = this.emojiTextId.split("emoji-");
        input = document.getElementById(id[1]);
      }
      var startPos = input.selectionStart;
      var endPos = input.selectionEnd;
      var resultText = input.value.substring(0, startPos) + emoji.data + input.value.substring(endPos);
      input.value = resultText;
      input.focus();
      input.selectionStart = startPos + emoji.data.length;
      input.selectionEnd = startPos + emoji.data.length;
      if (this.emojiTextId === "comment-emoji") this.commentText = resultText;else {
        this.replyText = resultText;
      }
    },
    submitReply: function submitReply(id) {
      var params = {
        pid: id,
        content: this.utf16toEntities(this.replyText)
      };
      this.replyText = "";
      this.showVEmojiPicker = false;
      this.$emit("submitComment", params);
    },
    submitComment: function submitComment() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var params = {
        pid: id,
        content: this.utf16toEntities(this.commentText)
      };
      this.commentText = "";
      this.showVEmojiPicker = false;
      this.$emit("submitComment", params);
    },
    showMore: function showMore(item, index) {
      this.showItem[index] = !this.showItem[index];
      if (item.showChildren.length < item.children.length) {
        item.showChildren = item.children;
      } else {
        item.showChildren = item.children.slice(0, this.showNumber);
      }
      this.$set(this.showComentDatas, index, item);
    },
    replyClick: function replyClick(item, index) {
      var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var childrenIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var isChildren = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var flag = isChildren ? !children.showReply : !item.showReply;
      this.showVEmojiPicker = false;
      this.hideAll();
      var ref = "reply-" + index;
      if (isChildren) {
        children.showReply = flag;
        if (children.showReply) ref = "reply-" + index + "-" + childrenIndex;
      } else {
        item.showReply = flag;
      }
      this.$set(this.showComentDatas, index, item);
      if (children.showReply || item.showReply) {
        this.$nextTick(function () {
          document.getElementById(ref).focus();
        });
      } else {
        this.replyText = "";
      }
    },
    hideAll: function hideAll() {
      this.replyText = "";
      this.showComentDatas.map(function (item) {
        item.showReply = false;
        item.showChildren && item.showChildren.map(function (item1) {
          item1.showReply = false;
        });
      });
      this.showComentDatas = _toConsumableArray(this.showComentDatas);
    },
    commentInput: function commentInput(item) {
      var currentLength = item.target.value.length;
      // 判断字数如果比之前少了，说明内容正在减少，需要清除高度样式，重新获取
      if (currentLength < this.lastLength) {
        item.target.style.height = "";
      }
      var currentHeight = item.target.scrollHeight;
      // 如果内容高度发生了变化，再去设置高度值
      if (currentHeight > item.target.offsetHeight) {
        item.target.style.height = currentHeight + "px";
      }
      this.lastLength = currentLength;
    },
    replyInput: function replyInput(item) {
      var currentLength = item.target.value.length;
      // 判断字数如果比之前少了，说明内容正在减少，需要清除高度样式，重新获取
      if (currentLength < this.lastLength) {
        item.target.style.height = "";
      }
      var currentHeight = item.target.scrollHeight;
      // 如果内容高度发生了变化，再去设置高度值
      if (currentHeight > item.target.offsetHeight) {
        item.target.style.height = currentHeight + "px";
      }
      this.lastLength = currentLength;
    },
    rankDatas: function rankDatas(datas) {
      var _this = this;
      if (this.rank === "desc") {
        return datas.sort(function (b, a) {
          return new Date(a[_this.orderBy]).getTime() - new Date(b[_this.orderBy]).getTime();
        });
      }
      return datas.sort(function (a, b) {
        return new Date(a[_this.orderBy]).getTime() - new Date(b[_this.orderBy]).getTime();
      });
    },
    initData: function initData() {
      this.showComentDatas = this.getTreeData(this.commentDatas, this.keyMap.id, this.keyMap.pid);
      this.showComentDatas = this.rankDatas(this.showComentDatas);
      for (var i = 0; i < this.showComentDatas.length; i++) {
        if (this.showComentDatas[i].children) {
          this.showComentDatas[i].children = this.treeToArr(this.showComentDatas[i].children);
          this.showComentDatas[i].children = this.rankDatas(this.showComentDatas[i].children);
          this.showComentDatas[i].showChildren = this.showComentDatas[i].children.slice(0, this.showItem[i] ? this.showComentDatas[i].children.length : this.showNumber);
        }
      }
    },
    treeToArr: function treeToArr(data) {
      var _this2 = this;
      var pName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var pContent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var cloneData = JSON.parse(JSON.stringify(data));
      var res = [];
      cloneData.map(function (item) {
        if (item.children) {
          res.unshift.apply(res, _toConsumableArray(_this2.treeToArr(item.children, item.nickname, item.content)));
        }
        item["reply"] = pName;
        item["pContent"] = pContent;
        res.unshift(item);
      });
      if (this.showItem.length === 0) {
        this.showItem = new Array(res.length).fill(false);
      }
      return res;
    },
    getTreeData: function getTreeData(data) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "id";
      var pid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "pid";
      var cloneData = JSON.parse(JSON.stringify(data));
      return cloneData.filter(function (parent) {
        var branchArr = cloneData.filter(function (child) {
          return parent[id] == child[pid];
        });
        for (var i = 0; i < branchArr.length; i++) {
          branchArr.parent_nickname = parent.nickname;
        }
        branchArr.length > 0 ? parent["children"] = branchArr : "";
        return parent[pid] === null;
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/JComment/src/JComment.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JCommentvue_type_script_lang_js_ = (JCommentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JComment/src/JComment.vue?vue&type=style&index=0&id=fe76920e&prod&lang=less&scoped=true&
var JCommentvue_type_style_index_0_id_fe76920e_prod_lang_less_scoped_true_ = __webpack_require__("150d");

// CONCATENATED MODULE: ./packages/JComment/src/JComment.vue






/* normalize component */

var JComment_component = normalizeComponent(
  src_JCommentvue_type_script_lang_js_,
  JCommentvue_type_template_id_fe76920e_scoped_true_render,
  JCommentvue_type_template_id_fe76920e_scoped_true_staticRenderFns,
  false,
  null,
  "fe76920e",
  null
  
)

/* harmony default export */ var JComment = (JComment_component.exports);
// CONCATENATED MODULE: ./packages/JComment/index.js

/*
 * @Author: zheng yong tao
 * @Date: 2022-03-12 23:11:47
 * @LastEditors: zheng yong tao
 * @LastEditTime: 2022-03-12 23:13:17
 * @Description:
 */

JComment.install = function (Vue) {
  return Vue.component(JComment.name, JComment);
}; //注册组件

/* harmony default export */ var packages_JComment = (JComment);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JToolTip/src/JToolTip.vue?vue&type=template&id=7964f8b6&scoped=true&
var JToolTipvue_type_template_id_7964f8b6_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    style: {
      '--backgroundColor': _vm.toolTipStyle.backgroundColor,
      '--color': _vm.toolTipStyle.color,
      '--width': _vm.toolTipStyle.width
    }
  }, [_c('span', {
    staticClass: "j-tooltip",
    style: _vm.getTextStyle(),
    attrs: {
      "id": _vm.uid,
      "data-tooltip": _vm.tipText
    }
  }, [_vm._t("default")], 2)]);
};
var JToolTipvue_type_template_id_7964f8b6_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JToolTip/src/JToolTip.vue?vue&type=template&id=7964f8b6&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JToolTip/src/JToolTip.vue?vue&type=script&lang=js&

/* harmony default export */ var JToolTipvue_type_script_lang_js_ = ({
  name: "JToolTip",
  props: {
    tipText: {
      type: String,
      default: "Tooltip Content"
    },
    textStyle: {
      type: Object,
      default: function _default() {
        return {
          "border-bottom": "1px dotted black"
        };
      }
    },
    toolTipStyle: {
      type: Object,
      default: function _default() {
        return {
          backgroundColor: "#062b45",
          color: "#fff",
          width: "100px"
        };
      }
    }
  },
  computed: {},
  data: function data() {
    return {
      uid: "",
      tipStyle: {}
    };
  },
  created: function created() {
    this.setUid();
  },
  methods: {
    setUid: function setUid() {
      this.uid = getUId();
    },
    getTextStyle: function getTextStyle() {
      var textStyle = this.textStyle;
      var styleStr = "";
      for (var key in textStyle) {
        styleStr += _toLittleCamel(key) + ":" + textStyle[key] + ";";
      }
      return styleStr;
    }
  }
});
// CONCATENATED MODULE: ./packages/JToolTip/src/JToolTip.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JToolTipvue_type_script_lang_js_ = (JToolTipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JToolTip/src/JToolTip.vue?vue&type=style&index=0&id=7964f8b6&prod&vars=%7B%20backgroundColor%2C%20color%2C%20width%20%7D&lang=less&scoped=true&
var JToolTipvue_type_style_index_0_id_7964f8b6_prod_vars_7B_20backgroundColor_2C_20color_2C_20width_20_7D_lang_less_scoped_true_ = __webpack_require__("1ee2");

// CONCATENATED MODULE: ./packages/JToolTip/src/JToolTip.vue






/* normalize component */

var JToolTip_component = normalizeComponent(
  src_JToolTipvue_type_script_lang_js_,
  JToolTipvue_type_template_id_7964f8b6_scoped_true_render,
  JToolTipvue_type_template_id_7964f8b6_scoped_true_staticRenderFns,
  false,
  null,
  "7964f8b6",
  null
  
)

/* harmony default export */ var JToolTip = (JToolTip_component.exports);
// CONCATENATED MODULE: ./packages/JToolTip/index.js


JToolTip.install = function (Vue) {
  return Vue.component(JToolTip.name, JToolTip);
}; //注册组件

/* harmony default export */ var packages_JToolTip = (JToolTip);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JWaterfall/src/JWaterfall.vue?vue&type=template&id=52f84c84&scoped=true&
var JWaterfallvue_type_template_id_52f84c84_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "j-water-fall-content"
    }
  });
};
var JWaterfallvue_type_template_id_52f84c84_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JWaterfall/src/JWaterfall.vue?vue&type=template&id=52f84c84&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JWaterfall/src/JWaterfall.vue?vue&type=script&lang=js&


/* harmony default export */ var JWaterfallvue_type_script_lang_js_ = ({
  name: "JWaterfall",
  props: {
    imgList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    column: {
      type: Number,
      default: 4
    },
    imgMargin: {
      type: Number,
      default: 0.5
    }
  },
  data: function data() {
    return {
      minHeight: [],
      arr: []
    };
  },
  mounted: function mounted() {
    this.createImg();
  },
  methods: {
    createImg: function createImg() {
      var ul = document.getElementById("j-water-fall-content");
      var trueWidth = Math.floor((100 - this.column * this.imgMargin * 2) / this.column);
      for (var i = 0; i < this.column; i++) {
        var li = document.createElement("li");
        li.style.listStyle = "none";
        li.style.float = "left";
        li.style.width = "".concat(trueWidth, "%");
        li.style.margin = "0 ".concat(this.imgMargin, "%");
        ul.appendChild(li);
        this.arr.push(li);
        this.minHeight.push(0);
      }
      var img = new Image();
      img.num = 0;
      img.src = this.imgList[img.num];
      img.style.width = "100%";
      // 当图片加载完后
      img.onload = this.loadHandler;
    },
    imgClick: function imgClick(img) {
      // console.log("img: ", img.srcElement.src);
      this.$emit("imgClick", img.srcElement.src);
    },
    loadHandler: function loadHandler(that) {
      var img = that.path[0];
      var minHeight = this.minHeight;
      var arr = this.arr;
      // 高度数组的最小值
      var min = Math.min.apply(null, minHeight);
      // 高度数组的最小值索引
      var minIndex = minHeight.indexOf(min);
      // 克隆一份图片
      var im = img.cloneNode(true);
      im.onclick = this.imgClick;
      // 将图片假如对应最小值索引的容器中
      arr[minIndex].appendChild(im);
      // 更新最小值索引的容器的高度
      minHeight[minIndex] += im.height;
      img.num++;
      img.src = this.imgList[img.num];
    }
  }
});
// CONCATENATED MODULE: ./packages/JWaterfall/src/JWaterfall.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JWaterfallvue_type_script_lang_js_ = (JWaterfallvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JWaterfall/src/JWaterfall.vue?vue&type=style&index=0&id=52f84c84&prod&lang=less&scoped=true&
var JWaterfallvue_type_style_index_0_id_52f84c84_prod_lang_less_scoped_true_ = __webpack_require__("4962");

// CONCATENATED MODULE: ./packages/JWaterfall/src/JWaterfall.vue






/* normalize component */

var JWaterfall_component = normalizeComponent(
  src_JWaterfallvue_type_script_lang_js_,
  JWaterfallvue_type_template_id_52f84c84_scoped_true_render,
  JWaterfallvue_type_template_id_52f84c84_scoped_true_staticRenderFns,
  false,
  null,
  "52f84c84",
  null
  
)

/* harmony default export */ var JWaterfall = (JWaterfall_component.exports);
// CONCATENATED MODULE: ./packages/JWaterfall/index.js


JWaterfall.install = function (Vue) {
  return Vue.component(JWaterfall.name, JWaterfall);
}; //注册组件

/* harmony default export */ var packages_JWaterfall = (JWaterfall);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JBarrage/src/JBarrage.vue?vue&type=template&id=21ad0371&scoped=true&

var JBarragevue_type_template_id_21ad0371_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    style: {
      '--width': _vm.width
    },
    attrs: {
      "id": "j-barrage-content"
    },
    on: {
      "click": function click($event) {
        _vm.showToolsBox = false;
      }
    }
  }, [_c('div', {
    style: {
      '--width': _vm.width
    },
    attrs: {
      "id": "full-barrage-content"
    }
  }), _c('div', {
    staticClass: "j-barrage-send-box"
  }, [_vm.showToolsBox ? _c('span', {
    staticClass: "j-barrage-tools-box",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return function () {}.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "j-barrage-send-box-item"
  }, [_c('span', [_vm._v("颜色：")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sendObj.color,
      expression: "sendObj.color"
    }],
    attrs: {
      "type": "color"
    },
    domProps: {
      "value": _vm.sendObj.color
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.sendObj, "color", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "j-barrage-send-box-item"
  }, [_c('span', [_vm._v("位置：")]), _vm._l(_vm.position, function (pos, index) {
    return [_c('span', {
      key: 'pos-span-' + index
    }, [_vm._v(_vm._s(pos))]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.sendObj.position,
        expression: "sendObj.position"
      }],
      key: 'pos-input-' + index,
      attrs: {
        "name": "position",
        "type": "radio"
      },
      domProps: {
        "value": pos,
        "checked": _vm._q(_vm.sendObj.position, pos)
      },
      on: {
        "change": function change($event) {
          return _vm.$set(_vm.sendObj, "position", pos);
        }
      }
    })];
  })], 2)]) : _vm._e(), _vm.showBtn ? _c('span', {
    staticClass: "j-barrage-send-box-item input-box"
  }, [_c('span', {
    staticClass: "j-barrage-send-box-item-tools",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        _vm.showToolsBox = !_vm.showToolsBox;
      }
    }
  }, [_vm._v("A")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sendObj.text,
      expression: "sendObj.text"
    }],
    staticClass: "j-barrage-send-box-item-input",
    domProps: {
      "value": _vm.sendObj.text
    },
    on: {
      "focus": function focus($event) {
        _vm.showToolsBox = false;
      },
      "keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.sendBarrage.apply(null, arguments);
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.sendObj, "text", $event.target.value);
      }
    }
  }), _c('span', {
    staticClass: "j-barrage-send-box-item-btn",
    on: {
      "click": _vm.sendBarrage
    }
  }, [_vm._v("发送")])]) : _vm._e()])]);
};
var JBarragevue_type_template_id_21ad0371_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JBarrage/src/JBarrage.vue?vue&type=template&id=21ad0371&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JBarrage/src/JBarrage.vue?vue&type=script&lang=js&














function JBarragevue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function JBarragevue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? JBarragevue_type_script_lang_js_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : JBarragevue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/* harmony default export */ var JBarragevue_type_script_lang_js_ = ({
  name: "JBarrage",
  props: {
    barrageDate: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    full: {
      type: Boolean,
      default: true
    },
    time: {
      type: Number,
      default: 10
    },
    mask: {
      type: Boolean,
      default: false
    },
    repetition: {
      type: Boolean,
      default: true
    },
    startFrom: {
      type: String,
      default: "left"
    },
    showBtn: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      position: ["top", "center", "bottom", "random"],
      showBarrageDate: [],
      content: null,
      width: "1000px",
      a: "blue",
      sendObj: {
        text: "",
        color: "#FFFFFF",
        position: "random"
      },
      showToolsBox: false,
      barrageNums: 0,
      clearBarrageTime: null
    };
  },
  created: function created() {},
  // watch: {
  //     barrageNums(newVal) {
  //         if (newVal == 0 && this.repetition) {
  //             this.generateBarrage();
  //         }
  //     }
  // },
  mounted: function mounted() {
    this.formatDataList();
    this.generateBarrage();
    this.clearBarrage();
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.clearBarrageTime);
  },
  methods: {
    clearBarrage: function clearBarrage() {
      var _this = this;
      var content = this.content;
      var barrageList = document.getElementsByClassName("j-barrage-span");
      barrageList = Array.from(barrageList);
      barrageList.map(function (item) {
        if (item.offsetLeft == 0) content.removeChild(item);
      });
      this.clearBarrageTime = setTimeout(function () {
        _this.clearBarrage();
      }, this.time * 1000);
    },
    sendBarrage: function sendBarrage() {
      var obj = this.formatData(JBarragevue_type_script_lang_js_objectSpread({}, this.sendObj));
      this.showBarrageDate.push(obj);
      this.createBarrage(obj);
    },
    getRandom: function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getColors: function getColors() {
      var arr = "0123456789abcdef";
      var color = "#";
      var n = 6;
      while (n--) {
        color += arr[this.getRandom(0, 15)];
      }
      return color;
    },
    getPosition: function getPosition() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var content = this.content;
      var height = content.offsetHeight * 0.9;
      this.width = content.offsetWidth + 5 * content.offsetWidth / this.time + "px";
      switch (position) {
        case "top":
          return this.getRandom(0, height / 3);
        case "center":
          return this.getRandom(height / 3, 2 * height / 3);
        case "bottom":
          return this.getRandom(2 * height / 3, height);
        default:
          return this.getRandom(0, height);
      }
    },
    formatData: function formatData() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      item.position = this.getPosition(item.position);
      if (!item.color) item.color = this.getColors();
      return item;
    },
    formatDataList: function formatDataList() {
      var _this2 = this;
      if (this.full) this.content = document.getElementById("full-barrage-content");else this.content = document.getElementById("j-barrage-content");
      var showBarrageDate = _toConsumableArray(this.barrageDate);
      showBarrageDate.map(function (item) {
        item = _this2.formatData(item);
      });
      this.showBarrageDate = showBarrageDate;
    },
    destroyBarrage: function destroyBarrage() {
      var _this3 = this;
      var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!dom) return;
      var content = this.content;
      if (content.offsetLeft + content.offsetWidth < dom.offsetLeft) {
        content.removeChild(dom);
        this.barrageNums--;
      } else {
        setTimeout(function () {
          _this3.destroyBarrage(dom);
        }, 1000);
      }
    },
    createBarrage: function createBarrage(item) {
      var content = this.content;
      var span = document.createElement("span");
      span.style.color = item.color;
      span.innerHTML = item.text;
      if (this.full) span.style.position = "fixed";
      span.style.top = item.position + "px";
      if (this.startFrom == "left") {
        span.style.left = "0px";
        span.style.animation = "moveLeft ".concat(this.time, "s linear");
      } else {
        span.style.right = "0px";
        span.style.animation = "moveRight ".concat(this.time, "s linear");
      }
      if (this.mask) {
        span.style.padding = "0.2em 0.5em";
        span.style.backgroundColor = "#bbb2b2";
      }
      span.classList.add("j-barrage-span", "text");
      // span.onmouseover = () => {
      //     console.log("onmouseover");
      //     span.style.fontSize = "larger";
      //     span.style.animationPlayState = "paused";
      // };
      // span.onmouseout = () => {
      //     console.log("onmouseout");
      //     span.style.fontSize = "unset";
      //     span.style.animationPlayState = "running";
      // };
      content.appendChild(span);
      this.barrageNums++;
      this.destroyBarrage(span);
    },
    generateBarrage: function generateBarrage() {
      var _this4 = this;
      var timeFlag = 0;
      this.showBarrageDate.map(function (item, index) {
        timeFlag += _this4.getRandom(0, 2);
        setTimeout(function () {
          _this4.createBarrage(item);
        }, timeFlag * 1000);
        if (index == _this4.showBarrageDate.length - 1 && _this4.repetition) {
          setTimeout(function () {
            _this4.generateBarrage();
          }, timeFlag * 1000 + _this4.time / 3);
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/JBarrage/src/JBarrage.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JBarragevue_type_script_lang_js_ = (JBarragevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JBarrage/src/JBarrage.vue?vue&type=style&index=0&id=21ad0371&prod&vars=%7B%20width%20%7D&lang=less&
var JBarragevue_type_style_index_0_id_21ad0371_prod_vars_7B_20width_20_7D_lang_less_ = __webpack_require__("0e37");

// EXTERNAL MODULE: ./packages/JBarrage/src/JBarrage.vue?vue&type=style&index=1&id=21ad0371&prod&lang=less&scoped=true&
var JBarragevue_type_style_index_1_id_21ad0371_prod_lang_less_scoped_true_ = __webpack_require__("558c");

// CONCATENATED MODULE: ./packages/JBarrage/src/JBarrage.vue







/* normalize component */

var JBarrage_component = normalizeComponent(
  src_JBarragevue_type_script_lang_js_,
  JBarragevue_type_template_id_21ad0371_scoped_true_render,
  JBarragevue_type_template_id_21ad0371_scoped_true_staticRenderFns,
  false,
  null,
  "21ad0371",
  null
  
)

/* harmony default export */ var JBarrage = (JBarrage_component.exports);
// CONCATENATED MODULE: ./packages/JBarrage/index.js


JBarrage.install = function (Vue) {
  return Vue.component(JBarrage.name, JBarrage);
}; //注册组件

/* harmony default export */ var packages_JBarrage = (JBarrage);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JBarrageRain/src/JBarrageRain.vue?vue&type=template&id=181c69b4&scoped=true&
var JBarrageRainvue_type_template_id_181c69b4_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "j-barrage-rain",
    attrs: {
      "id": "j-barrage-rain"
    }
  }, [_c('div', {
    staticClass: "j-barrage-rain-panel",
    attrs: {
      "id": "j-barrage-rain-panel"
    }
  }), _c('div', {
    staticClass: "j-barrage-rain-content",
    attrs: {
      "id": "j-barrage-rain-content"
    }
  }, [_c('div', {
    staticClass: "add",
    staticStyle: {
      "text-align": "center"
    },
    on: {
      "click": _vm.fallRain
    }
  }, [_vm._v("\n            fall\n        ")])]), _vm._m(0)]);
};
var JBarrageRainvue_type_template_id_181c69b4_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wave"
  }, [_c('div', {
    staticClass: "water1 water"
  }), _c('div', {
    staticClass: "water2 water"
  }), _c('div', {
    staticClass: "water3 water"
  }), _c('div', {
    staticClass: "water4 water"
  })]);
}];

// CONCATENATED MODULE: ./packages/JBarrageRain/src/JBarrageRain.vue?vue&type=template&id=181c69b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JBarrageRain/src/JBarrageRain.vue?vue&type=script&lang=js&

/* harmony default export */ var JBarrageRainvue_type_script_lang_js_ = ({
  name: "JBarrageRain",
  props: {
    barrageDate: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    full: {
      type: Boolean,
      default: true
    },
    time: {
      type: Number,
      default: 10
    },
    mask: {
      type: Boolean,
      default: false
    },
    repetition: {
      type: Boolean,
      default: true
    },
    startFrom: {
      type: String,
      default: "left"
    },
    showBtn: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      panel: "j-barrage-rain-panel",
      showBarrageDate: [{
        color: "",
        text: "测试一下1"
      }, {
        color: "",
        text: "测试一下2"
      }, {
        color: "",
        text: "测试一下3"
      }, {
        color: "",
        text: "测试一下4"
      }, {
        color: "",
        text: "测试一下5"
      }, {
        color: "",
        text: "测试一下6"
      }, {
        color: "",
        text: "测试一下7"
      }, {
        color: "",
        text: "测试一下8"
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;
    var _loop = function _loop(i) {
      setTimeout(function () {
        _this.fallRain(_this.showBarrageDate[i]);
      }, i * 1000);
    };
    for (var i = 0; i < this.showBarrageDate.length; i++) {
      _loop(i);
    }
  },
  methods: {
    getRandom: function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getColors: function getColors() {
      var arr = "0123456789abcdef";
      var color = "#";
      var n = 6;
      while (n--) {
        color += arr[this.getRandom(0, 15)];
      }
      return color;
    },
    getPoint: function getPoint() {
      var content = document.getElementById(this.panel);
      var contentTop = content.offsetTop;
      var contentBottom = content.offsetTop + content.offsetHeight;
      var contentLeft = content.offsetLeft;
      var contentRight = content.offsetWidth + content.offsetLeft;
      var x = this.getRandom(contentLeft, contentRight);
      var y2 = this.getRandom(contentBottom - 300, contentBottom - 100);
      return {
        x: x,
        y: contentTop - 100,
        y2: y2
      };
    },
    generatWave: function generatWave(x, y, span) {
      var content = document.getElementById(this.panel);
      var wave = document.getElementsByClassName("wave")[0];
      var newWave = wave.cloneNode(true);
      newWave.style.position = "fixed";
      newWave.style.top = y + 10 + "px";
      newWave.style.left = x - 100 + "px";
      newWave.style.display = "unset";
      content.appendChild(newWave);
      this.generateMask(span);
      // span.classList.add("add-mask");
      span.style.animation = "mask 2s";
      newWave.style.animation = "opacityChange 15s";
      setTimeout(function () {
        content.removeChild(span);
        setTimeout(function () {
          content.removeChild(newWave);
        }, 5 * 1000);
      }, 2 * 1000);
    },
    generateMask: function generateMask(span) {
      var mask = document.createElement("span");
      mask.classList.add("j-barrage-rain-mask");
    },
    generatBarrage: function generatBarrage(x, y, y2, data) {
      var _this2 = this;
      var content = document.getElementById(this.panel);
      var span = document.createElement("span");
      span.classList.add("barrage-rain-span");
      span.innerHTML = data.text;
      span.style.top = y + "px";
      span.style.left = x + "px";
      span.style.transition = "transform 5s ease-in";
      span.style.color = data.color ? this.getColors() : data.color;
      content.appendChild(span);
      setTimeout(function () {
        span.style.transform = "translateY(".concat(y2 - y, "px)");
        setTimeout(function () {
          _this2.generatWave(x, y2, span);
        }, 4900);
      }, 100);
    },
    fallRain: function fallRain(data) {
      var _this$getPoint = this.getPoint(),
        x = _this$getPoint.x,
        y1 = _this$getPoint.y1,
        y2 = _this$getPoint.y2;
      this.generatBarrage(x, -100, y2, data);
    }
  }
});
// CONCATENATED MODULE: ./packages/JBarrageRain/src/JBarrageRain.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JBarrageRainvue_type_script_lang_js_ = (JBarrageRainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JBarrageRain/src/JBarrageRain.vue?vue&type=style&index=0&id=181c69b4&prod&lang=css&
var JBarrageRainvue_type_style_index_0_id_181c69b4_prod_lang_css_ = __webpack_require__("117a");

// EXTERNAL MODULE: ./packages/JBarrageRain/src/JBarrageRain.vue?vue&type=style&index=1&id=181c69b4&prod&lang=less&scoped=true&
var JBarrageRainvue_type_style_index_1_id_181c69b4_prod_lang_less_scoped_true_ = __webpack_require__("5de6");

// CONCATENATED MODULE: ./packages/JBarrageRain/src/JBarrageRain.vue







/* normalize component */

var JBarrageRain_component = normalizeComponent(
  src_JBarrageRainvue_type_script_lang_js_,
  JBarrageRainvue_type_template_id_181c69b4_scoped_true_render,
  JBarrageRainvue_type_template_id_181c69b4_scoped_true_staticRenderFns,
  false,
  null,
  "181c69b4",
  null
  
)

/* harmony default export */ var JBarrageRain = (JBarrageRain_component.exports);
// CONCATENATED MODULE: ./packages/JBarrageRain/index.js


JBarrageRain.install = function (Vue) {
  return Vue.component(JBarrageRain.name, JBarrageRain);
}; //注册组件

/* harmony default export */ var packages_JBarrageRain = (JBarrageRain);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JAppsLock/src/JAppsLock.vue?vue&type=template&id=afafd868&scoped=true&
var JAppsLockvue_type_template_id_afafd868_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "100%"
    }
  }, [_c('div', {
    staticClass: "j-apps-lock-body",
    attrs: {
      "id": _vm.JAppsLockId
    },
    on: {
      "mousedown": function mousedown($event) {
        $event.preventDefault();
        return _vm.mousedown();
      },
      "touchstart": function touchstart($event) {
        $event.preventDefault();
        return _vm.mousedown();
      }
    }
  }, [_c('div', {
    staticClass: "j-apps-lock",
    attrs: {
      "id": _vm.JAppsLockId + 'lock'
    },
    on: {
      "dragstart": function dragstart($event) {
        $event.preventDefault();
      }
    }
  }, [_c('div', {
    staticClass: "j-apps-lock-cells"
  }, _vm._l(_vm.size * _vm.size, function (cell, cInd) {
    return _c('span', {
      key: 'cell' + cInd,
      staticClass: "j-apps-lock-cell",
      style: _vm.getCellStyle(cInd),
      on: {
        "dragstart": function dragstart($event) {
          $event.preventDefault();
        },
        "mouseover": function mouseover($event) {
          return _vm.mouseover(cInd);
        },
        "touchmove": function touchmove($event) {
          return _vm.mouseover(cInd);
        }
      }
    }, [_c('span', {
      staticClass: "j-apps-lock-point",
      attrs: {
        "id": 'point-' + cInd
      },
      on: {
        "dragstart": function dragstart($event) {
          $event.preventDefault();
        }
      }
    })]);
  }), 0)])])]);
};
var JAppsLockvue_type_template_id_afafd868_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JAppsLock/src/JAppsLock.vue?vue&type=template&id=afafd868&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JAppsLock/src/JAppsLock.vue?vue&type=script&lang=js&





/* harmony default export */ var JAppsLockvue_type_script_lang_js_ = ({
  name: "JAppsLock",
  props: {
    backgroundColor: {
      type: String,
      default: "aquamarine"
    },
    size: {
      type: Number,
      default: 3
    },
    id: {
      type: String,
      default: ""
    },
    limit: {
      type: Number,
      default: 3
    },
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      JAppsLockId: "",
      cellH: "",
      cellW: "",
      isDown: false,
      choosePoints: [],
      pointsArea: []
    };
  },
  created: function created() {
    this.initData();
  },
  mounted: function mounted() {
    this.initCell();
    this.eventListen();
  },
  methods: {
    eventListen: function eventListen() {
      var content = document.getElementById(this.JAppsLockId);
      content.addEventListener("mousedown", this.mousedown);
      content.addEventListener("mouseup", this.mouseup);
      window.addEventListener("mouseup", this.mouseup);
      content.addEventListener("touchstart", this.mousedown);
      content.addEventListener("touchend", this.mouseup);
      window.addEventListener("touchend", this.mouseup);
      content.addEventListener("dragstart", function () {});
      content.addEventListener("touchmove", this.touchmove);
    },
    drawLine: function drawLine() {
      var domPoints = this.getPoints();
      for (var i = 1; i < domPoints.length; i++) {
        var x1 = domPoints[i - 1].offsetWidth + domPoints[i - 1].offsetLeft;
        var x2 = domPoints[i].offsetWidth + domPoints[i].offsetLeft;
        var y1 = domPoints[i - 1].offsetHeight + domPoints[i - 1].offsetTop;
        var y2 = domPoints[i].offsetHeight + domPoints[i].offsetTop;
        var line = this.createLine(x1, x2, y1, y2, domPoints[i - 1], domPoints[i]);
      }
      // console.log(content);
      // console.log(domPoints);
    },
    createArrow: function createArrow(x1, x2, y1, y2) {
      var arrow = document.createElement("span");
      arrow.classList.add("j-apps-lock-arrow");
      arrow.style.position = "relative";
      arrow.style.margin = "auto";
      arrow.style.fontSize = "1.5rem";
      arrow.style.zIndex = "10";
      arrow.style.display = "block";
      arrow.style.minWidth = "1.4rem";
      arrow.style.textAlign = "center";
      if (y1 === y2) {
        arrow.innerText = x1 > x2 ? "<" : ">";
        arrow.style.top = "-0.8rem";
      } else {
        arrow.innerText = y1 > y2 ? "∧" : "∨";
        arrow.style.left = "-0.65rem";
      }
      return arrow;
    },
    createLine: function createLine(x1, x2, y1, y2, p1, p2) {
      var line = document.createElement("span");
      line.classList.add("j-apps-lock-line");
      line.style.position = "absolute";
      line.style.display = "flex";
      line.style.left = "50%";
      line.style.top = "50%";
      line.style.margin = "center";
      line.style.width = Math.max(Math.abs(x2 - x1), 2) + "px";
      line.style.height = Math.max(Math.abs(y2 - y1), 2) + "px";
      line.style.backgroundColor = "gray";
      if (this.showArrow) line.appendChild(this.createArrow(x1, x2, y1, y2));
      if (x1 != x2 && y1 != y2) {
        var x = Math.abs(x1 - x2);
        var y = Math.abs(y1 - y2);
        line.style.height = Math.sqrt(x * x + y * y) + "px";
        line.style.width = "2px";
        var angle = Math.atan(x / y) * 180 / Math.PI;
        if (x2 > x1 && y2 > y1 || x2 < x1 && y2 < y1) angle = "-" + angle;
        line.style.transform = "rotate(".concat(angle, "deg)");
        line.style.transformOrigin = "left top";
        if (y2 > y1) p1.appendChild(line);else p2.appendChild(line);
      } else if (x2 > x1 || y2 > y1) {
        p1.appendChild(line);
      } else {
        p2.appendChild(line);
      }
      return line;
    },
    removeLines: function removeLines() {
      var points = document.getElementsByClassName("j-apps-lock-point");
      for (var i = 0; i < points.length; i++) {
        points[i].innerHTML = "";
      }
    },
    getPoints: function getPoints() {
      var domPoints = [];
      this.choosePoints.map(function (cInd) {
        domPoints.push(document.getElementById("point-" + cInd));
      });
      return domPoints;
    },
    getCellStyle: function getCellStyle(cInd) {
      var res = "";
      res += this.choosePoints.includes(cInd) ? "border: 1px solid gray;" : "border: 1px solid transparent;";
      res += "width:".concat(this.cellW, ";height:").concat(this.cellH, ";");
      return res;
    },
    mousedown: function mousedown() {
      this.isDown = true;
      this.choosePoints = [];
      this.removeLines();
    },
    mouseup: function mouseup() {
      if (!this.isDown) return;
      this.isDown = false;
      this.drawLine();
      this.$emit("commit", this.choosePoints);
    },
    mouseover: function mouseover(ind) {
      if (!this.isDown) return;
      if (this.choosePoints.includes(ind)) return;
      this.choosePoints.push(ind);
    },
    initPointsArea: function initPointsArea() {
      this.pointsArea === [];
      var cell = document.getElementsByClassName("j-apps-lock-cell")[0];
      for (var i = 0; i < this.size * this.size; i++) {
        var point = document.getElementById("point-" + i);
        var x = (point.offsetLeft + point.offsetWidth + point.offsetLeft) / 2;
        var y = (point.offsetTop + point.offsetHeight + point.offsetTop) / 2;
        var r = cell.offsetHeight / 2;
        this.pointsArea.push({
          x: x,
          y: y,
          r: r
        });
      }
    },
    touchmove: function touchmove(event) {
      if (!this.isDown) return;
      if (this.pointsArea.length === 0) {
        this.initPointsArea();
      }
      var content = document.getElementById(this.JAppsLockId + "lock");
      var nx = event.targetTouches[0].pageX - content.offsetLeft;
      var ny = event.targetTouches[0].pageY - content.offsetTop;
      for (var i = 0; i < this.pointsArea.length; i++) {
        var item = this.pointsArea[i];
        var x = item.x,
          y = item.y,
          r = item.r;
        if (Math.pow(x - nx, 2) + Math.pow(y - ny, 2) <= r * r) {
          if (this.choosePoints.includes(i)) return;
          this.choosePoints.push(i);
          break;
        }
      }
    },
    initData: function initData() {
      var id = this.id;
      if (id == "") {
        id = getUId();
      }
      this.JAppsLockId = id;
    },
    initCell: function initCell() {
      var id = this.JAppsLockId;
      var size = this.size;
      var nums = size * size;
      var content = document.getElementById(id);
      var cH = content.offsetHeight;
      var cW = content.offsetWidth;
      var cellH = (cH - 20 - size * 6 * 2) / size + "px";
      var cellW = (cW - 20 - size * 6 * 2) / size + "px";
      this.cellH = cellH;
      this.cellW = cellW;
    }
  }
});
// CONCATENATED MODULE: ./packages/JAppsLock/src/JAppsLock.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JAppsLockvue_type_script_lang_js_ = (JAppsLockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JAppsLock/src/JAppsLock.vue?vue&type=style&index=0&id=afafd868&prod&lang=css&
var JAppsLockvue_type_style_index_0_id_afafd868_prod_lang_css_ = __webpack_require__("0658");

// EXTERNAL MODULE: ./packages/JAppsLock/src/JAppsLock.vue?vue&type=style&index=1&id=afafd868&prod&lang=less&scoped=true&
var JAppsLockvue_type_style_index_1_id_afafd868_prod_lang_less_scoped_true_ = __webpack_require__("5416");

// CONCATENATED MODULE: ./packages/JAppsLock/src/JAppsLock.vue







/* normalize component */

var JAppsLock_component = normalizeComponent(
  src_JAppsLockvue_type_script_lang_js_,
  JAppsLockvue_type_template_id_afafd868_scoped_true_render,
  JAppsLockvue_type_template_id_afafd868_scoped_true_staticRenderFns,
  false,
  null,
  "afafd868",
  null
  
)

/* harmony default export */ var JAppsLock = (JAppsLock_component.exports);
// CONCATENATED MODULE: ./packages/JAppsLock/index.js


JAppsLock.install = function (Vue) {
  return Vue.component(JAppsLock.name, JAppsLock);
}; //注册组件

/* harmony default export */ var packages_JAppsLock = (JAppsLock);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JVideoCover/src/JVideoCover.vue?vue&type=template&id=1ac958ba&scoped=true&
var JVideoCovervue_type_template_id_1ac958ba_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "j-video-cover",
    attrs: {
      "id": _vm.uid + '-j-video-cover'
    }
  }, [_c('video', {
    staticClass: "j-video",
    attrs: {
      "id": _vm.uid + '-video',
      "src": _vm.videoUrl,
      "controls": "controls",
      "playsinline": "",
      "autoplay": "",
      "muted": "",
      "loop": _vm.loop
    },
    domProps: {
      "muted": true
    }
  }), _vm.coverLongImg ? _c('div', {
    staticClass: "cover-long-img-box",
    attrs: {
      "id": _vm.uid + '-cover-long-img-box'
    },
    on: {
      "mousemove": _vm.imgHover,
      "mouseleave": _vm.hoverOut,
      "click": _vm.coverClick
    }
  }, [_c('img', {
    staticClass: "cover-long-img",
    attrs: {
      "alt": "",
      "src": _vm.coverLongImg,
      "id": _vm.uid + '-cover-long-img'
    }
  })]) : _c('img', {
    staticClass: "j-coverImg",
    attrs: {
      "alt": "",
      "id": _vm.uid + '-coverImg',
      "src": _vm.coverSrc
    },
    on: {
      "mousemove": _vm.imgHover,
      "mouseleave": _vm.hoverOut,
      "click": _vm.coverClick
    }
  }), _vm.imgList.length > 1 || _vm.coverLongImg ? _c('progress', {
    staticClass: "j-progress-bo j-progress",
    style: 'width:' + _vm.width,
    attrs: {
      "id": _vm.uid + '-progress',
      "max": _vm.duration
    },
    domProps: {
      "value": _vm.pauseTime
    }
  }) : _vm._e(), _c('div', {
    staticClass: "video-info",
    attrs: {
      "id": _vm.uid + '-video-info'
    }
  }, [_vm._t("video-info-slot"), _vm.showDuration ? _c('span', {
    staticClass: "video-duration"
  }, [_vm._v(_vm._s(_vm.calcTime(_vm.duration)))]) : _vm._e()], 2), _vm.imgList.length > 1 || _vm.coverLongImg ? _c('progress', {
    staticClass: "j-progress-to j-progress",
    style: 'width:' + _vm.width,
    attrs: {
      "id": _vm.uid + '-progress1',
      "max": _vm.stepNums
    },
    domProps: {
      "value": _vm.progressValue
    }
  }) : _vm._e()]);
};
var JVideoCovervue_type_template_id_1ac958ba_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JVideoCover/src/JVideoCover.vue?vue&type=template&id=1ac958ba&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JVideoCover/src/JVideoCover.vue?vue&type=script&lang=js&

/* harmony default export */ var JVideoCovervue_type_script_lang_js_ = ({
  name: "JVideoCover",
  props: {
    width: {
      type: String,
      default: "300px"
    },
    height: {
      type: String,
      default: "200px"
    },
    stepNums: {
      type: String,
      default: "30"
    },
    videoUrl: {
      type: String,
      default: ""
    },
    loop: {
      type: Boolean,
      default: false
    },
    showDuration: {
      type: Boolean,
      default: true
    },
    coverLongImg: {
      type: String,
      default: ""
    }
  },
  data: function data() {
    return {
      uid: "",
      video: "",
      imgList: [],
      currentTime: 0,
      duration: 0,
      pauseTime: 0,
      coverSrc: "",
      pauseCover: "",
      progressValue: 0
    };
  },
  computed: {},
  created: function created() {
    this.setUid();
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    setUid: function setUid() {
      this.uid = getUId();
    },
    calcTime: function calcTime(seconds) {
      if (seconds == 0) return "";
      seconds = parseInt(seconds);
      var h = Math.floor(seconds / 3600);
      h = h > 9 ? h : "0" + h;
      seconds %= 3600;
      var m = Math.floor(seconds / 60);
      m = m > 9 ? m : "0" + m;
      seconds %= 60;
      seconds = seconds > 9 ? seconds : "0" + seconds;
      var res = seconds;
      if (m != "00") res = m + ":" + res;
      if (h != "00") res = h + ":" + res;
      return res;
    },
    init: function init() {
      var _this = this;
      var videoContentShow = document.getElementById(this.uid + "-video");
      var coverLongImg = document.getElementById(this.uid + "-cover-long-img");
      var coverLongImgBox = document.getElementById(this.uid + "-cover-long-img-box");
      var coverImg = document.getElementById(this.uid + "-coverImg");
      videoContentShow.style.height = this.height;
      videoContentShow.style.width = this.width;
      var videoContent = videoContentShow.cloneNode();
      videoContent.addEventListener("canplay", function () {
        _this.duration = videoContent.duration;
        if (!_this.coverLongImg && _this.currentTime < _this.duration) _this.cut(videoContent);else _this.progressValue = 0;
      });
      if (!this.coverLongImg) {
        coverImg.style.height = this.height;
        coverImg.style.width = this.width;
      } else {
        coverLongImg.style.height = this.height;
        coverLongImgBox.style.height = this.height;
        coverLongImgBox.style.width = this.width;
      }
      videoContentShow.addEventListener("pause", function () {
        _this.pauseTime = videoContentShow.currentTime;
        _this.pauseCover = _this.cutCover(videoContentShow, videoContentShow.currentTime);
        coverImg && coverImg.setAttribute("src", _this.pauseCover);
        coverLongImg && coverLongImg.setAttribute("src", _this.pauseCover);
        var step = _this.duration / _this.stepNums;
        var index = Math.ceil(_this.pauseTime / step);
        _this.progressValue = index;
        setTimeout(function () {
          if (videoContentShow.paused) _this.doHide();
        }, 200);
      });
    },
    coverImgChang: function coverImgChang(e, coverImg) {
      var w = coverImg.offsetWidth / this.stepNums;
      var x = e.offsetX - coverImg.offsetLeft;
      var index = Math.min(Math.max(Math.ceil(x / w), 1), this.stepNums);
      if (this.imgList.length < index) return;
      this.progressValue = index;
      coverImg.setAttribute("src", this.imgList[Math.min(this.imgList.length - 1, index)]);
    },
    coverLongImgChang: function coverLongImgChang(e, coverLongImg) {
      var coverLongImgBox = document.getElementById(this.uid + "-cover-long-img-box");
      if (coverLongImg.src != this.coverLongImg) {
        coverLongImg.setAttribute("src", this.coverLongImg);
      }
      var w = coverLongImgBox.offsetWidth / this.stepNums;
      var x = e.offsetX - Math.abs(coverLongImg.offsetLeft);
      var index = Math.min(Math.max(Math.ceil(x / w), 1), this.stepNums);
      this.progressValue = index;
      coverLongImg.style.right = (index - 1) * (coverLongImg.offsetWidth / this.stepNums) + "px";
    },
    imgHover: function imgHover(e) {
      var coverImg = document.getElementById(this.uid + "-coverImg");
      coverImg && this.coverImgChang(e, coverImg);
      var coverLongImg = document.getElementById(this.uid + "-cover-long-img");
      coverLongImg && this.coverLongImgChang(e, coverLongImg);
    },
    hoverOut: function hoverOut() {
      var coverImg = document.getElementById(this.uid + "-coverImg");
      var coverLongImg = document.getElementById(this.uid + "-cover-long-img");
      var step = this.duration / this.stepNums;
      var index = Math.ceil(this.pauseTime / step);
      this.progressValue = index;
      if (coverImg) {
        coverImg.setAttribute("src", this.pauseCover || this.coverSrc);
      } else {
        coverLongImg.setAttribute("src", this.pauseCover || this.coverSrc || this.coverLongImg);
        coverLongImg.style.right = 0;
      }
    },
    doHide: function doHide() {
      var hide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var videoContent = document.getElementById(this.uid + "-video");
      videoContent.style.display = hide ? "block" : "none";
      videoContent.currentTime = this.pauseTime;
      hide ? videoContent.play() : videoContent.pause();
      var img = document.getElementById(this.uid + "-coverImg");
      if (img) {
        img.style.display = hide ? "none" : "block";
      } else {
        var coverLongImgBox = document.getElementById(this.uid + "-cover-long-img-box");
        coverLongImgBox.style.display = hide ? "none" : "block";
      }
      var progress = document.getElementById(this.uid + "-progress");
      progress.style.display = hide ? "none" : "block";
      var progress1 = document.getElementById(this.uid + "-progress1");
      progress1.style.display = hide ? "none" : "block";
      var videoInfo = document.getElementById(this.uid + "-video-info");
      videoInfo.style.display = hide ? "none" : "block";
    },
    coverClick: function coverClick() {
      this.doHide(true);
    },
    cutCover: function cutCover(video, currentTime) {
      video.currentTime = currentTime;
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = parseInt(this.width);
      canvas.height = parseInt(this.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      var img = canvas.toDataURL("image/png");
      return img;
    },
    cut: function cut(video) {
      var duration = video.duration;
      this.duration = duration;
      this.currentTime += duration / this.stepNums;
      var img = this.cutCover(video, this.currentTime);
      this.imgList.push(img);
      if (this.imgList.length == 2) {
        this.coverSrc = img;
        var coverImg = document.getElementById(this.uid + "-coverImg");
        coverImg.setAttribute("src", img);
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/JVideoCover/src/JVideoCover.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JVideoCovervue_type_script_lang_js_ = (JVideoCovervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JVideoCover/src/JVideoCover.vue?vue&type=style&index=0&id=1ac958ba&prod&lang=less&scoped=true&
var JVideoCovervue_type_style_index_0_id_1ac958ba_prod_lang_less_scoped_true_ = __webpack_require__("38fc");

// CONCATENATED MODULE: ./packages/JVideoCover/src/JVideoCover.vue






/* normalize component */

var JVideoCover_component = normalizeComponent(
  src_JVideoCovervue_type_script_lang_js_,
  JVideoCovervue_type_template_id_1ac958ba_scoped_true_render,
  JVideoCovervue_type_template_id_1ac958ba_scoped_true_staticRenderFns,
  false,
  null,
  "1ac958ba",
  null
  
)

/* harmony default export */ var JVideoCover = (JVideoCover_component.exports);
// CONCATENATED MODULE: ./packages/JVideoCover/index.js


JVideoCover.install = function (Vue) {
  return Vue.component(JVideoCover.name, JVideoCover);
}; //注册组件

/* harmony default export */ var packages_JVideoCover = (JVideoCover);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/J3DSwipe/src/J3DSwipe.vue?vue&type=template&id=587526e4&scoped=true&
var J3DSwipevue_type_template_id_587526e4_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "j-3d-swipe",
    style: {
      '--maxWidth': _vm.maxWidth
    },
    attrs: {
      "id": _vm.uid + '-j-3d-swipe'
    }
  }, [_c('div', {
    attrs: {
      "id": "carousel"
    }
  }, [_c('figure', {
    staticClass: "spinner",
    attrs: {
      "id": _vm.uid + '-spinner'
    }
  }, _vm._l(_vm.imgList, function (item, index) {
    return _c('img', {
      key: 'img-' + index,
      class: _vm.uid + '-img img',
      attrs: {
        "alt": "",
        "src": item
      },
      on: {
        "mouseenter": _vm.mouseenter,
        "mouseleave": _vm.mouseleave
      }
    });
  }), 0)])]);
};
var J3DSwipevue_type_template_id_587526e4_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/J3DSwipe/src/J3DSwipe.vue?vue&type=template&id=587526e4&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/J3DSwipe/src/J3DSwipe.vue?vue&type=script&lang=js&

/* harmony default export */ var J3DSwipevue_type_script_lang_js_ = ({
  name: "J3DSwipe",
  props: {
    maxWidth: {
      type: String,
      default: "150px"
    },
    hoverPause: {
      type: Boolean,
      default: true
    },
    blurPause: {
      type: Boolean,
      default: true
    },
    speed: {
      type: String,
      default: "1500"
    },
    multiple: {
      type: String,
      default: "1.4"
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    imgList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      uid: "",
      angle: 0,
      isActive: true,
      mouseHover: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.initView();
    if (this.autoPlay) {
      setInterval(function () {
        _this.galleryspin();
      }, this.speed);
    }
  },
  created: function created() {
    var _this2 = this;
    this.setUid();
    window.onfocus = function () {
      _this2.isActive = true;
    };
    window.onblur = function () {
      _this2.isActive = false;
    };
  },
  methods: {
    mouseleave: function mouseleave(e) {
      var el = e.target;
      var newWidth = parseInt(el.offsetWidth) / this.multiple + "px";
      el.style.width = newWidth;
      el.style.maxWidth = newWidth;
      this.mouseHover = false;
    },
    mouseenter: function mouseenter(e) {
      var el = e.target;
      var newWidth = parseInt(el.offsetWidth) * this.multiple + "px";
      el.style.width = newWidth;
      el.style.maxWidth = newWidth;
      this.mouseHover = true;
    },
    setUid: function setUid() {
      this.uid = getUId();
    },
    initView: function initView() {
      var imgs = document.getElementsByClassName("".concat(this.uid, "-img"));
      for (var i = 0; i < imgs.length; i++) {
        var angle = 360 / imgs.length * i;
        imgs[i].setAttribute("style", "transform: rotateY(-".concat(angle, "deg)"));
      }
    },
    galleryspin: function galleryspin(sign) {
      if (this.blurPause && !this.isActive) return;
      if (this.hoverPause && this.mouseHover) return;
      var id = this.uid + "-spinner";
      var spinner = document.getElementById(id);
      if (!sign) {
        this.angle = this.angle + 360 / this.imgList.length;
      } else {
        this.angle = this.angle - 360 / this.imgList.length;
      }
      spinner && spinner.setAttribute("style", "-webkit-transform: rotateY(" + this.angle + "deg); -moz-transform: rotateY(" + this.angle + "deg); transform: rotateY(" + this.angle + "deg);");
    }
  }
});
// CONCATENATED MODULE: ./packages/J3DSwipe/src/J3DSwipe.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_J3DSwipevue_type_script_lang_js_ = (J3DSwipevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/J3DSwipe/src/J3DSwipe.vue?vue&type=style&index=0&id=587526e4&prod&lang=less&vars=%7B%20maxWidth%20%7D&scoped=true&
var J3DSwipevue_type_style_index_0_id_587526e4_prod_lang_less_vars_7B_20maxWidth_20_7D_scoped_true_ = __webpack_require__("9286");

// CONCATENATED MODULE: ./packages/J3DSwipe/src/J3DSwipe.vue






/* normalize component */

var J3DSwipe_component = normalizeComponent(
  src_J3DSwipevue_type_script_lang_js_,
  J3DSwipevue_type_template_id_587526e4_scoped_true_render,
  J3DSwipevue_type_template_id_587526e4_scoped_true_staticRenderFns,
  false,
  null,
  "587526e4",
  null
  
)

/* harmony default export */ var J3DSwipe = (J3DSwipe_component.exports);
// CONCATENATED MODULE: ./packages/J3DSwipe/index.js


J3DSwipe.install = function (Vue) {
  return Vue.component(J3DSwipe.name, J3DSwipe);
}; //注册组件

/* harmony default export */ var packages_J3DSwipe = (J3DSwipe);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JScratchCard/src/JScratchCard.vue?vue&type=template&id=2251bfba&
var JScratchCardvue_type_template_id_2251bfba_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.mode == 'canvas' ? _c('div', {
    staticStyle: {
      "position": "relative"
    }
  }, [_c('canvas', {
    attrs: {
      "id": _vm.uid + '-canvas',
      "width": parseInt(_vm.width),
      "height": parseInt(_vm.height)
    }
  }), _c('div', {
    staticClass: "canvas-bg"
  }, [_vm._t("j-scratch-card-bg-slot")], 2)]) : _c('div', {
    staticClass: "j-scratch-card",
    attrs: {
      "id": _vm.uid + 'j-scratch-card'
    }
  }, [_c('div', {
    staticClass: "j-scratch-card-bg",
    attrs: {
      "id": _vm.uid + 'j-scratch-card-bg'
    }
  }, [_vm._t("j-scratch-card-bg-slot")], 2), _c('div', {
    staticClass: "j-scratch-card-mask",
    attrs: {
      "id": _vm.uid + 'j-scratch-card-mask'
    }
  })])]);
};
var JScratchCardvue_type_template_id_2251bfba_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JScratchCard/src/JScratchCard.vue?vue&type=template&id=2251bfba&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JScratchCard/src/JScratchCard.vue?vue&type=script&lang=js&


/* harmony default export */ var JScratchCardvue_type_script_lang_js_ = ({
  name: "JScratchCard",
  props: {
    width: {
      type: String,
      default: "300px"
    },
    height: {
      type: String,
      default: "200px"
    },
    mode: {
      type: String,
      default: "canvas"
    },
    color: {
      type: String,
      default: "gray"
    },
    block: {
      type: Object,
      default: function _default() {
        return {
          width: "20px",
          height: "20px"
        };
      }
    }
  },
  data: function data() {
    return {
      uid: "",
      isMouseDown: false
    };
  },
  created: function created() {
    this.setUid();
  },
  mounted: function mounted() {
    this.mode == "canvas" ? this.initCanvas() : this.initPage();
  },
  methods: {
    setUid: function setUid() {
      this.uid = getUId();
    },
    initCanvas: function initCanvas() {
      var _this = this;
      var canvas = document.getElementById(this.uid + "-canvas");
      var ctx = canvas.getContext("2d");

      // 填充的颜色
      ctx.fillStyle = this.color;
      // 填充矩形 fillRect(起始X,起始Y,终点X,终点Y)
      ctx.fillRect(0, 0, parseInt(this.width), parseInt(this.height));
      canvas.onmousedown = function () {
        _this.isMouseDown = true;
      };
      canvas.onmousemove = function (e) {
        if (!_this.isMouseDown) return;
        // 计算鼠标在canvas里的位置
        console.log(e);
        var x = e.layerX - canvas.offsetLeft;
        var y = e.layerY - canvas.offsetTop;
        // 设置globalCompositeOperation
        ctx.globalCompositeOperation = "destination-out";
        // 画圆
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        // 填充圆形
        ctx.fill();
      };
      canvas.onmouseup = function () {
        _this.isMouseDown = false;
      };
    },
    initPage: function initPage() {
      var _this2 = this;
      var scratchCardId = this.uid + "j-scratch-card";
      var scratchCardDom = document.getElementById(scratchCardId);
      scratchCardDom.style.width = this.width;
      scratchCardDom.style.height = this.height;
      var scratchCardMaskId = this.uid + "j-scratch-card-mask";
      var scratchCardMaskDom = document.getElementById(scratchCardMaskId);
      scratchCardMaskDom.addEventListener("mousedown", function () {
        _this2.isMouseDown = true;
      });
      window.addEventListener("mouseup", function () {
        _this2.isMouseDown = false;
      });
      window.addEventListener("dragend", function () {
        _this2.isMouseDown = false;
      });
      var block = this.block;
      var col = Math.ceil(parseInt(this.height) / parseInt(block.height));
      var row = Math.ceil(parseInt(this.width) / parseInt(block.width));
      for (var i = 0; i < col; i++) {
        var colDom = document.createElement("div");
        colDom.style = "display:flex;";
        colDom.classList.add("j-scratch-card-mask-col");
        for (var j = 0; j < row; j++) {
          var rowDom = document.createElement("div");
          rowDom.classList.add("j-scratch-card-mask-row");
          rowDom.id = "j-scratch-card-mask-row-".concat(col, "-").concat(row);
          rowDom.style = "width:".concat(block.width, ";height:").concat(block.height, ";background-color: ").concat(this.color, ";");
          rowDom.addEventListener("mouseover", function (e) {
            if (!_this2.isMouseDown) return;
            e.target.style.opacity = "0";
          });
          colDom.appendChild(rowDom);
        }
        scratchCardMaskDom.appendChild(colDom);
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/JScratchCard/src/JScratchCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JScratchCardvue_type_script_lang_js_ = (JScratchCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JScratchCard/src/JScratchCard.vue?vue&type=style&index=0&id=2251bfba&prod&lang=less&
var JScratchCardvue_type_style_index_0_id_2251bfba_prod_lang_less_ = __webpack_require__("7a43");

// CONCATENATED MODULE: ./packages/JScratchCard/src/JScratchCard.vue






/* normalize component */

var JScratchCard_component = normalizeComponent(
  src_JScratchCardvue_type_script_lang_js_,
  JScratchCardvue_type_template_id_2251bfba_render,
  JScratchCardvue_type_template_id_2251bfba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var JScratchCard = (JScratchCard_component.exports);
// CONCATENATED MODULE: ./packages/JScratchCard/index.js


JScratchCard.install = function (Vue) {
  return Vue.component(JScratchCard.name, JScratchCard);
}; //注册组件

/* harmony default export */ var packages_JScratchCard = (JScratchCard);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JGiteeInfoTag/src/JGiteeInfoTag.vue?vue&type=template&id=671a8cb8&scoped=true&

var JGiteeInfoTagvue_type_template_id_671a8cb8_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.repoInfo ? _c('div', [_c('div', {
    staticClass: "j-gitee-repo-info"
  }, [_c('div', {
    staticClass: "j-gitee-repo-info-name"
  }, [_c('i', {
    staticClass: "iconfont icon-xiangqing"
  }), _c('a', {
    staticClass: "popular-project-title",
    attrs: {
      "href": _vm.repoInfo.html_url,
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.repoInfo.name))])]), _c('div', {
    staticClass: "j-gitee-repo-author"
  }, [_vm.repoInfo.owner ? _c('span', [_vm._v("owner：" + _vm._s(_vm.repoInfo.owner.name))]) : _vm._e()]), _c('div', {
    staticClass: "j-gitee-repo-info-desc"
  }, [_vm._v("\n            " + _vm._s(_vm.repoInfo.description) + "\n        ")]), _c('div', {
    staticClass: "j-gitee-repo-info-tags"
  }, _vm._l(_vm.repoInfo.project_labels, function (item) {
    return _c('a', {
      key: 'label-' + item.id
    }, [_c('span', {
      staticClass: "project-label-item"
    }, [_vm._v(_vm._s(item.name))])]);
  }), 0), _c('div', {
    staticClass: "j-gitee-repo-info-nums"
  }, [_c('div', {
    staticClass: "j-gitee-repo-info-lang"
  }, [_c('i', {
    staticClass: "iconfont icon-code"
  }), _c('span', [_vm._v(_vm._s(_vm.repoInfo.language))])]), _c('div', {
    staticClass: "float-right"
  }, [_c('div', {
    staticClass: "j-gitee-repo-info-forks float-right"
  }, [_c('i', {
    staticClass: "iconfont icon-fork"
  }), _c('span', [_vm._v(_vm._s(_vm.repoInfo.forks_count))])]), _c('div', {
    staticClass: "j-gitee-repo-info-stars float-right"
  }, [_c('i', {
    staticClass: "iconfont icon-star1"
  }), _c('span', [_vm._v(_vm._s(_vm.repoInfo.stargazers_count))])]), _c('div', {
    staticClass: "j-gitee-repo-info-watchers float-right"
  }, [_c('i', {
    staticClass: "iconfont icon-watch"
  }), _c('span', [_vm._v(" " + _vm._s(_vm.repoInfo.watchers_count))])])])])])]) : _vm._e();
};
var JGiteeInfoTagvue_type_template_id_671a8cb8_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JGiteeInfoTag/src/JGiteeInfoTag.vue?vue&type=template&id=671a8cb8&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JGiteeInfoTag/src/JGiteeInfoTag.vue?vue&type=script&lang=js&
/* harmony default export */ var JGiteeInfoTagvue_type_script_lang_js_ = ({
  name: "JGiteeInfoTag",
  props: {
    owner: {
      type: String,
      default: "zheng_yongtao"
    },
    repo: {
      type: String,
      default: "jyeontu-component-warehouse"
    }
  },
  data: function data() {
    return {
      api: {
        getRepo: "https://gitee.com/api/v5/repos/" //获取用户的某个仓库
      },

      repoInfo: {}
    };
  },
  created: function created() {
    this.getRepo();
  },
  mounted: function mounted() {},
  methods: {
    getRepo: function getRepo() {
      var _this = this;
      this.$http.get(this.api.getRepo + this.owner + "/" + this.repo).then(function (res) {
        _this.repoInfo = res.body;
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/JGiteeInfoTag/src/JGiteeInfoTag.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JGiteeInfoTagvue_type_script_lang_js_ = (JGiteeInfoTagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JGiteeInfoTag/src/JGiteeInfoTag.vue?vue&type=style&index=0&id=671a8cb8&prod&lang=less&scoped=true&
var JGiteeInfoTagvue_type_style_index_0_id_671a8cb8_prod_lang_less_scoped_true_ = __webpack_require__("30cf");

// CONCATENATED MODULE: ./packages/JGiteeInfoTag/src/JGiteeInfoTag.vue






/* normalize component */

var JGiteeInfoTag_component = normalizeComponent(
  src_JGiteeInfoTagvue_type_script_lang_js_,
  JGiteeInfoTagvue_type_template_id_671a8cb8_scoped_true_render,
  JGiteeInfoTagvue_type_template_id_671a8cb8_scoped_true_staticRenderFns,
  false,
  null,
  "671a8cb8",
  null
  
)

/* harmony default export */ var JGiteeInfoTag = (JGiteeInfoTag_component.exports);
// CONCATENATED MODULE: ./packages/JGiteeInfoTag/index.js


JGiteeInfoTag.install = function (Vue) {
  return Vue.component(JGiteeInfoTag.name, JGiteeInfoTag);
}; //注册组件

/* harmony default export */ var packages_JGiteeInfoTag = (JGiteeInfoTag);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JMouseMenu/src/JMouseMenu.vue?vue&type=template&id=56ff600c&scoped=true&
var JMouseMenuvue_type_template_id_56ff600c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "j-mouse-menu",
    attrs: {
      "id": _vm.uid
    }
  }, [_vm._t("header"), _c('ul', _vm._l(_vm.menu, function (menuItem) {
    return _c('li', {
      key: menuItem.id,
      on: {
        "click": function click($event) {
          return _vm.menuClick(menuItem);
        }
      }
    }, [_vm._v("\n                " + _vm._s(menuItem.label) + "\n            ")]);
  }), 0), _vm._t("body"), _vm._t("footer")], 2)]);
};
var JMouseMenuvue_type_template_id_56ff600c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/JMouseMenu/src/JMouseMenu.vue?vue&type=template&id=56ff600c&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JMouseMenu/src/JMouseMenu.vue?vue&type=script&lang=js&

/* harmony default export */ var JMouseMenuvue_type_script_lang_js_ = ({
  name: "JMouseMenu",
  props: {
    domId: {
      type: String,
      default: ""
    },
    menu: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      uid: ""
    };
  },
  created: function created() {
    this.setUid();
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    setUid: function setUid() {
      this.uid = "j-mouse-menu-" + getUId();
    },
    init: function init() {
      // 自定义鼠标右键菜单栏
      var dom = document.getElementById(this.domId);
      if (!dom) return;
      var menu = document.getElementById(this.uid);
      var that = this;
      dom.oncontextmenu = function (e) {
        that.hideAllMenu(that.uid);
        // 自定义body元素的鼠标事件处理函数
        e = e || window.event;
        e.preventDefault();
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 获取垂直滚动条位置
        var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft; // 获取水平滚动条位置
        menu.style.display = "block";
        menu.style.left = e.clientX + scrollLeft + "px";
        menu.style.top = e.clientY + scrollTop + "px";
      };
      // 鼠标点击其他位置时隐藏菜单
      document.onclick = function () {
        that.hideAllMenu();
      };
    },
    hideAllMenu: function hideAllMenu(id) {
      var jMenu = document.getElementsByClassName("j-mouse-menu");
      for (var i = 0; i < jMenu.length; i++) {
        if (jMenu[i].id != id) jMenu[i].style.display = "none";
      }
    },
    menuClick: function menuClick(item) {
      if (item.click) {
        item.click(item);
        return;
      }
      this.$emit("menuClick", item);
    }
  }
});
// CONCATENATED MODULE: ./packages/JMouseMenu/src/JMouseMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JMouseMenuvue_type_script_lang_js_ = (JMouseMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JMouseMenu/src/JMouseMenu.vue?vue&type=style&index=0&id=56ff600c&prod&lang=less&scoped=true&
var JMouseMenuvue_type_style_index_0_id_56ff600c_prod_lang_less_scoped_true_ = __webpack_require__("8859");

// CONCATENATED MODULE: ./packages/JMouseMenu/src/JMouseMenu.vue






/* normalize component */

var JMouseMenu_component = normalizeComponent(
  src_JMouseMenuvue_type_script_lang_js_,
  JMouseMenuvue_type_template_id_56ff600c_scoped_true_render,
  JMouseMenuvue_type_template_id_56ff600c_scoped_true_staticRenderFns,
  false,
  null,
  "56ff600c",
  null
  
)

/* harmony default export */ var JMouseMenu = (JMouseMenu_component.exports);
// CONCATENATED MODULE: ./packages/JMouseMenu/index.js


JMouseMenu.install = function (Vue) {
  return Vue.component(JMouseMenu.name, JMouseMenu);
}; //注册组件

/* harmony default export */ var packages_JMouseMenu = (JMouseMenu);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8c959478-vue-loader-template"}!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JWebPet/src/JWebPet.vue?vue&type=template&id=5e4c70e2&scoped=true&

var JWebPetvue_type_template_id_5e4c70e2_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "j-pet-mask",
    attrs: {
      "id": _vm.uid
    }
  }, [_c('div', {
    staticClass: "pet-content"
  }, [_c('img', {
    staticClass: "pet-img",
    attrs: {
      "id": "showImg",
      "src": _vm.imgSrc,
      "alt": ""
    },
    on: {
      "mousedown": function mousedown($event) {
        $event.preventDefault();
        return _vm.clickPet.apply(null, arguments);
      },
      "dragstart": function dragstart($event) {
        $event.preventDefault();
      },
      "select": function select($event) {
        $event.preventDefault();
      }
    }
  }), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.menuShow,
      expression: "menuShow"
    }],
    staticClass: "pet-menu",
    attrs: {
      "id": "petMenu"
    }
  }, _vm._l(_vm.menuList, function (menuItem, menuIndex) {
    return _c('div', {
      key: 'menu-' + menuIndex,
      class: {
        'pet-menu-item': true,
        'active-item': _vm.nowAction.name == menuItem
      },
      on: {
        "click": function click($event) {
          return _vm.menuClick(menuItem);
        }
      }
    }, [_vm._v("\n                " + _vm._s(menuItem) + "\n            ")]);
  }), 0), _vm._m(0)])]);
};
var JWebPetvue_type_template_id_5e4c70e2_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('audio', {
    staticClass: "pikachu-audio",
    attrs: {
      "id": "webPetAudio",
      "controls": "controls",
      "height": "100",
      "width": "100"
    }
  }, [_c('source', {
    attrs: {
      "src": "",
      "type": "audio/mp3"
    }
  })]);
}];

// CONCATENATED MODULE: ./packages/JWebPet/src/JWebPet.vue?vue&type=template&id=5e4c70e2&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("e5b4");

// EXTERNAL MODULE: ./packages/JWebPet/src/config.json
var config = __webpack_require__("c870");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/JWebPet/src/JWebPet.vue?vue&type=script&lang=js&










/* harmony default export */ var JWebPetvue_type_script_lang_js_ = ({
  name: "JWebPet",
  props: {
    name: {
      type: String,
      default: "皮卡丘"
    },
    step: {
      type: Number,
      default: 20
    },
    petSize: {
      type: String,
      default: "50px"
    },
    defaultAction: {
      type: String,
      default: ""
    }
  },
  watch: {
    name: function name() {
      this.initData();
      this.init();
    },
    petSize: function petSize() {
      this.showImg.style.width = this.petSize;
      this.showImg.style.height = this.petSize;
    }
  },
  data: function data() {
    return {
      webPetConfig: {},
      uid: "",
      imgSrc: "",
      canDrag: false,
      nowAction: {},
      actionList: [],
      imgRootPath: "",
      menuShow: false,
      isRunToTarget: null
    };
  },
  methods: {
    initData: function initData() {
      this.webPetConfig = config[this.name];
      this.actionList = this.webPetConfig.actionList;
      this.imgRootPath = this.webPetConfig.imgRootPath;
      if (this.showImg) {
        if (this.webPetConfig.isLink) {
          this.imgSrc = this.webPetConfig.baseAddress + this.webPetConfig.defaultImg;
        } else {
          this.imgSrc = __webpack_require__("d14b")("./" + this.webPetConfig.defaultImg);
        }
      }
      this.uid = "j-web-pet-" + getUId();
      var list = this.actionList.map(function (item) {
        return item.name;
      }) || [];
      this.menuList = list;
      clearTimeout(this.isRunToTarget);
      this.isRunToTarget = null;
      this.menuShow = false;
    },
    init: function init() {
      var _this = this;
      this.nowAction = this.actionList.find(function (item) {
        return item.name == _this.defaultAction;
      }) || {};
      this.showImg = document.getElementById("showImg");
      this.showImg.style.width = this.petSize;
      this.showImg.style.height = this.petSize;
      this.showImg.style.right = this.petSize;
      this.showImg.style.top = "50%";
      this.showImg.style.transform = "";
      this.mouseEventListen();
      this.autoRunToTarget();
    },
    autoRunToTarget: function autoRunToTarget() {
      var _this2 = this;
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.nowAction;
      var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      if (action.isMove) {
        if (!x) x = getRandomNum(0, window.innerWidth);
        if (!y) y = getRandomNum(0, window.innerHeight);
        this.runToTarget(action, action.min, x, y, function () {
          _this2.autoRunToTarget(action);
        });
      } else {
        this.playImg(action);
      }
    },
    clickPet: function clickPet(e) {
      this.canDrag = true;
      clearTimeout(this.isRunToTarget);
      this.startClickX = e.pageX - window.scrollX;
      this.startClickY = e.pageY - window.scrollY;
      window.addEventListener("mouseover", this.mouseoverHandler, false);
      window.addEventListener("mouseup", this.mouseupHandler, false);
    },
    menuClick: function menuClick(menuItem) {
      this.showImg.style.transform = "";
      if (this.nowAction.name == menuItem) {
        this.nowAction = {};
        this.showImg.setAttribute("src", this.imgSrc);
        this.menuShow = false;
        return;
      }
      var action = this.actionList.find(function (item) {
        return item.name == menuItem;
      });
      this.nowAction = action;
      this.nowInd = action.min;
      this.webPetAudioPlay(true);
      this.autoRunToTarget();
      this.menuShow = false;
    },
    showMenu: function showMenu() {
      var w = this.showImg.offsetWidth;
      var h = this.showImg.offsetHeight;
      var left = this.showImg.offsetLeft;
      var top = this.showImg.offsetTop;
      var innerWidth = window.innerWidth;
      var innerHeight = window.innerHeight;
      var inLeft = left < innerWidth / 2;
      var inTop = top < innerHeight / 2;
      var petMenu = document.getElementById("petMenu");
      petMenu.style.top = "";
      petMenu.style.bottom = "";
      petMenu.style.left = "";
      petMenu.style.right = "";
      if (inTop) petMenu.style.top = this.showImg.offsetTop + "px";else petMenu.style.bottom = innerHeight - this.showImg.offsetTop - h + "px";
      if (inLeft) petMenu.style.left = this.showImg.offsetLeft + w + "px";else petMenu.style.right = window.innerWidth - this.showImg.offsetLeft + "px";
      this.menuShow = this.canDrag && !this.menuShow;
    },
    runToTarget: function runToTarget(action, ind, x, y) {
      var _this3 = this;
      var cb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var step = this.step;
      if (!action || JSON.stringify(action) == "{}") return;
      if (!action.isMove) return;
      this.nowAction = action;
      var min = action.min,
        max = action.max;
      if (!ind || ind < min || ind > max) {
        ind = min;
      }
      var w = this.showImg.offsetWidth / 2;
      var h = this.showImg.offsetHeight / 2;
      var ny = this.showImg.offsetTop + h;
      var nx = this.showImg.offsetLeft + w;
      var nowY = this.showImg.offsetTop;
      var nowX = this.showImg.offsetLeft;
      var deg = Math.atan((y - ny) / (x - nx)) * 180 / Math.PI;
      var sin = Math.sin(deg * Math.PI / 180);
      var cos = Math.cos(deg * Math.PI / 180);
      var addX = Math.abs(step * cos);
      var addY = Math.abs(step * sin);
      if (this.showImg) {
        if (this.webPetConfig.isLink) {
          this.showImg.setAttribute("src", this.webPetConfig.baseAddress + this.imgRootPath + ind + "." + this.webPetConfig.imgType);
        } else {
          this.showImg.setAttribute("src", __webpack_require__("0fc6")("./" + this.imgRootPath + ind + ".png"));
        }
      }
      if (x > nx) {
        this.showImg.style.transform = "rotate(".concat(deg, "deg) rotateY(180deg)");
      } else {
        this.showImg.style.transform = "rotate(".concat(deg, "deg)");
      }
      if (x < nowX) addX = -addX;
      if (y < nowY) addY = -addY;
      this.showImg.style.left = nowX + addX + "px";
      this.showImg.style.top = nowY + addY + "px";
      this.showImg.style.right = "";
      this.showImg.style.bottom = "";
      var disX = Math.abs(this.showImg.offsetLeft + w - x);
      var disY = Math.abs(this.showImg.offsetTop + h - y);
      clearTimeout(this.isRunToTarget);
      if (disX > w || disY > h) {
        this.isRunToTarget = setTimeout(function () {
          _this3.runToTarget(action, ind + 1, x, y, cb);
        }, 500);
      } else {
        this.isRunToTarget = null;
        cb && cb();
      }
    },
    playImg: function playImg(action, ind) {
      var _this4 = this;
      if (!action || JSON.stringify(action) == "{}") return;
      var min = action.min,
        max = action.max;
      if (!ind || ind < min || ind > max) {
        ind = min;
      }
      if (this.showImg) {
        if (this.webPetConfig.isLink) {
          this.showImg.setAttribute("src", this.webPetConfig.baseAddress + this.imgRootPath + ind + "." + this.webPetConfig.imgType);
        } else {
          this.showImg.setAttribute("src", __webpack_require__("0fc6")("./" + this.imgRootPath + ind + ".png"));
        }
      }
      clearTimeout(this.isRunToTarget);
      this.isRunToTarget = setTimeout(function () {
        _this4.playImg(action, ind + 1);
      }, 500);
    },
    mouseoverHandler: function mouseoverHandler(e) {
      if (!this.canDrag) return;
      var w = this.showImg.offsetWidth / 2;
      var h = this.showImg.offsetHeight / 2;
      this.showImg.style.left = e.pageX - window.scrollX - w + "px";
      this.showImg.style.top = e.pageY - window.scrollY - h + "px";
      this.showImg.style.right = "";
      this.showImg.style.bottom = "";
    },
    mouseupHandler: function mouseupHandler(e) {
      var endClickX = e.pageX - window.scrollX;
      var endClickY = e.pageY - window.scrollY;
      var target = e.target;
      if (target == this.showImg && (Math.abs(this.startClickX - endClickX) < 10 || Math.abs(this.startClickY - endClickY) < 10)) {
        this.showMenu();
      } else {
        this.menuShow = false;
        this.autoRunToTarget();
      }
      this.canDrag = false;
      window.removeEventListener("mouseover", this.mouseoverHandler, false);
      window.removeEventListener("mouseup", this.mouseupHandler, false);
    },
    clickHandler: function clickHandler(e) {
      var target = e.target;
      var isMove = !_toConsumableArray(target.classList).includes("pet-menu-item") && target != this.showImg;
      if (isMove) {
        this.menuShow = false;
        this.autoRunToTarget(this.nowAction, e.pageX - window.scrollX, e.pageY - window.scrollY);
      }
    },
    mouseEventListen: function mouseEventListen() {
      window.addEventListener("click", this.clickHandler, false);
    },
    webPetAudioPlay: function webPetAudioPlay() {
      var playNow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var webPetAudio = document.getElementById("webPetAudio");
      if (!playNow && (!webPetAudio.paused || Math.floor(Math.random() * 100) % 10 != 0)) return;
      if (!this.nowAction.audio) return;
      if (this.webPetConfig.isLink) {
        webPetAudio.setAttribute("src", this.webPetConfig.baseAddress + this.webPetConfig.audioPath + this.nowAction.audio);
      } else {
        webPetAudio.setAttribute("src", __webpack_require__("3a4f")("./" + this.nowAction.audio));
      }
      try {
        webPetAudio.play();
      } catch (e) {}
    }
  },
  created: function created() {
    this.initData();
  },
  mounted: function mounted() {
    this.init();
  }
});
// CONCATENATED MODULE: ./packages/JWebPet/src/JWebPet.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_JWebPetvue_type_script_lang_js_ = (JWebPetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/JWebPet/src/JWebPet.vue?vue&type=style&index=0&id=5e4c70e2&prod&lang=less&scoped=true&
var JWebPetvue_type_style_index_0_id_5e4c70e2_prod_lang_less_scoped_true_ = __webpack_require__("7d9c");

// CONCATENATED MODULE: ./packages/JWebPet/src/JWebPet.vue






/* normalize component */

var JWebPet_component = normalizeComponent(
  src_JWebPetvue_type_script_lang_js_,
  JWebPetvue_type_template_id_5e4c70e2_scoped_true_render,
  JWebPetvue_type_template_id_5e4c70e2_scoped_true_staticRenderFns,
  false,
  null,
  "5e4c70e2",
  null
  
)

/* harmony default export */ var JWebPet = (JWebPet_component.exports);
// CONCATENATED MODULE: ./packages/JWebPet/index.js


JWebPet.install = function (Vue) {
  return Vue.component(JWebPet.name, JWebPet);
}; //注册组件

/* harmony default export */ var packages_JWebPet = (JWebPet);
// EXTERNAL MODULE: ./examples/assets/icon/iconfont.css
var iconfont = __webpack_require__("fa97");

// CONCATENATED MODULE: ./packages/index.js











function packages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function packages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? packages_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : packages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/*
 * @Author: zheng yong tao
 * @Date: 2022-02-20 21:41:33
 * @LastEditors: zheng yong tao
 * @LastEditTime: 2022-03-12 23:13:36
 * @Description:
 */





























// 存储组件列表
var components = [packages_JCalendar, packages_JTable, packages_JCanvasBroad, packages_JCodeHeightLight, packages_JFlowChart, packages_JElectronicNumber, packages_JNumRolling, packages_JDialog, packages_JHoverBtn, packages_JFloatDiv, packages_JSteps, packages_JDropDownBox, packages_JTagList, packages_JToast, packages_JWordCloud, packages_JComment, packages_JToolTip, packages_JWaterfall, packages_JBarrage, packages_JBarrageRain, packages_JAppsLock, packages_JVideoCover, packages_J3DSwipe, packages_JScratchCard, packages_JGiteeInfoTag, packages_JMouseMenu, packages_JWebPet
// Toast
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
var install = function install(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map(function (component) {
    if (component.name === "JToast") {
      Vue.use(component);
    } else {
      Vue.component(component.name, component);
    }
  });
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var packages_0 = (packages_objectSpread({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install: install
}, components));
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "117a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JBarrageRain_vue_vue_type_style_index_0_id_181c69b4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("70cd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JBarrageRain_vue_vue_type_style_index_0_id_181c69b4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JBarrageRain_vue_vue_type_style_index_0_id_181c69b4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "120f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("3d8a");
var $export = __webpack_require__("e99b");
var redefine = __webpack_require__("84e8");
var hide = __webpack_require__("065d");
var Iterators = __webpack_require__("953d");
var $iterCreate = __webpack_require__("3460");
var setToStringTag = __webpack_require__("bac3");
var getPrototypeOf = __webpack_require__("addc");
var ITERATOR = __webpack_require__("839a")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "1374":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("bb8b");
var createDesc = __webpack_require__("5edc");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "150d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JComment_vue_vue_type_style_index_0_id_fe76920e_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3240");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JComment_vue_vue_type_style_index_0_id_fe76920e_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JComment_vue_vue_type_style_index_0_id_fe76920e_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "159a":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("e99b");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__("26df"), 'Object', { defineProperties: __webpack_require__("3f9e") });


/***/ }),

/***/ "1663":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("212e");
var defined = __webpack_require__("3ab0");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "196b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1a58":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("839a");


/***/ }),

/***/ "1a6a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1a9a":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("839a")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "1b0b":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("a86f");
var aFunction = __webpack_require__("3250");
var SPECIES = __webpack_require__("839a")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "1b96":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("cea2");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "1bc7":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("25ba");
var getKeys = __webpack_require__("93ca");
var redefine = __webpack_require__("84e8");
var global = __webpack_require__("0b34");
var hide = __webpack_require__("065d");
var Iterators = __webpack_require__("953d");
var wks = __webpack_require__("839a");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "1c86":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1e4d":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("3250");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "1ee2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JToolTip_vue_vue_type_style_index_0_id_7964f8b6_prod_vars_7B_20backgroundColor_2C_20color_2C_20width_20_7D_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3497");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JToolTip_vue_vue_type_style_index_0_id_7964f8b6_prod_vars_7B_20backgroundColor_2C_20color_2C_20width_20_7D_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JToolTip_vue_vue_type_style_index_0_id_7964f8b6_prod_vars_7B_20backgroundColor_2C_20color_2C_20width_20_7D_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1f2d":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAADrZJREFUeF7tnXnQf1Mdx18qSmo0WQYhW2WJFms1KiOMiCapBjWWpLKXLKlQyTaWrINIY2uTZURJQ6bIliVTKiRlyZaoNLTNW/eZ+c3jWe4999xzvp/n+z4z3/n98Tuf5b4+3/dz79nudz7cTMAEpiUwn9mYgAlMT8AC8bfDBGYgYIH462ECFoi/AyaQRsB3kDRuthoTAhbImBTal5lGwAJJ42arMSFggYxJoX2ZaQQskDRuthoTAhbImBTal5lGwAJJ42arMSFggYxJoX2ZaQQskDRuthoTAhbImBTal5lGwAJJ42arMSFggYxJoX2ZaQQskDRuthoTAhbImBTal5lGoIRA3gZsCizafBZJS9VWJvAcgceAR5vP5cDPhuQylEDWAHYENgdWHPIC7HvsCdwNXAqcCdyem0ZugbwK2APYHVgwd7L2ZwIzEHgaOAE4Hrg/F6mcAtkGOBRYLldy9mMCCQTuBQ4EzkuwfZ5JLoHsDxyWIyH7MIFMBA4ADu/rK4dANgZ+2DcR25vAAAQ2Aa7o47evQNYGbuiTgG1NYGAC6wA3psboK5CbgDVTg9vOBAoQuBlYKzVOH4F8DDg1NbDtTKAggV2A01Li9RGI7x4pxG1Tg0DyXSRVIFsAF9e4Usc0gUQCWwKXdLVNFcgZzUp513jubwK1CGilfaeuwVMF8kizr6prPPc3gVoEtH9rsa7BUwSyMPBE10DubwIjQOAVwF+75JEikBUAbRBzM4FoBLRx9p4uSacIRAsv13cJMqnv1T1sbWoC7+yBYN2uC9spAlGCV/VIcgPAIukBcIxNi3/3LJAx/rYFvHQLJGDRnHI5AhZIOdaOFJCABRKwaE65HAELpBxrRwpIwAIJWDSnXI6ABVKOtSMFJGCBBCyaUy5HwAIpx9qRAhKwQAIWzSmXI2CBlGPtSAEJWCABi+aUyxGwQMqxdqSABCyQgEVzyuUIWCDlWDtSQAIWSMCiOeVyBCyQcqwdKSABCyRg0ZxyOQIWSDnWjhSQgAUSsGhOuRwBC6Qca0cKSMACCVg0p1yOgAVSjrUjBSRggQQsmlMuR8ACKcfakQISsEACFs0plyNggZRj7UgBCVggAYvmlMsRsEDKsXakgAQskIBFc8rlCFgg5Vg7UkACFkjAojnlcgQskHKsHSkgAQskYNGccjkCFkg51o4UkIAFErBoTrkcAQukHGtHCkjAAglYNKdcjoAFUo61IwUkYIEELJpTLkfAAinH2pECErBAChRtUWB1YDHgP8CDwC+ApwvEni3EkoA+twP/mq1zgf9/LfAa4OXAP4B7gDsKxJ0uhAUyIPwPArsAG0wT43vAycCPB8xhKtcHA6sBawHLNR2eBW4AbgMuBq4omNOCwGeAjwArThFXf1DOAY4BHiqYl0JZIAMA153idGDLlr4lkl1b9u3TTYI9dJov4WS/pwIf7xOspe17gJOAZVr0fwrYAzirRd9cXSyQXCQbP8sD3wdW6ej3cuDdHW26dL8U2KyLAfAIsHhHmy7ddwDO7GLQ9N0PODLBLsXEAkmhNoPN9cA6iT7PA7ZNtJ3JbKMej0znAtsNkNMmwA96+N0e+EYP+7amFkhbUi36HQXs06LfTF12Br7W08e85gsBfwAW6eFzG+D8HvZTmd4JvK6HzyebwfzDPXy0MbVA2lBq0Wcp4P4W/Wbr8jtAMzm5mga2e/d09ngz0aCZrhxtd+D4DI6OAPbP4GcmFxZIJsB7Acdm8qVHoisz+dI0qcZFfdtuzWC6rx/ZXwu8JYOjPwLLZvBjgQBXDwzyAuB9mWIcAmgqtm/TFO7v+zpp7M8APprBlx75/pbBz4QLTYbocW2o5jtIJrK3Am/I5OvsZk2gr7v3Ahf2ddLY3wK8OYMvrb/kXPjTzJ9mAIdqFkgmsr9tBo053Olu9P4MjnQXOiiDnwkX82XwtXazIJnB1XMuxEm8hmoWSCayNwFrZvKlhTCtEfRtmwKX9XXS2Gv6er0MvlYGfp3Bz4QLTRcPuepvgWQqltYLNB2aox0AHJ7BkVan78vgRy5OaFax+7p7IfAM8IK+jhr7FTKOs6ZKyQLJVCgNYLW9JEd7K3BdDkeApo1XyuBLe8pOy+BHLvQXXzN1fZvuRKv2dTKLvQWSCfBLm4102oXap2nD4Lp9HEyyPTHDPq8nmnUQTUTkaFqZ10RE35brTjtTHhZI3yrNY78voMWrPk0zT9pNm7M90GxpT/WphcbjUo2nsbsGWL+Hz7ualXgdHxiyWSCZ6V7UYRfv5NBHZ9iqMtXl9Bms55pynpyXpsR1t1wgkf/Qg/OJtCyQxAJNZzZ/s5u36zP20NvLU3bOasyhscdQTYy0y7irSLShUxs7SzQLZCDK2nai7Sdtmh7NtNFx6LZ0c+ho6xaBtgJ0oGvotkYzQ/b2FoG0F2zPArsi5k3FAmlRmNQuOrGn3bmbA9rMOG/TwqJWuU9pdtumxkix0wLim5rPxEElHbfVarmOAms3sdZ1SjZNkWvwvuEUd5SfNHeMXLNoXa7LAulCq0dfCURn0yfOpD/Ww1dOU91VlgA0QzUKZ9J1bTp2O3EmXXvJdBy4VrNAapF33BAELJAQZXKStQhYILXIO24IAhZIiDI5yVoELJBa5B03BAELJESZnGQtAhZILfKOG4KABRKiTE6yFgELpBZ5xw1BwAIJUSYnWYuABVKLvOOGIGCBhCiTk6xFwAKpRd5xQxCwQEKUyUnWImCB1CLvuCEIWCAhyuQkaxGwQGqRd9wQBCyQEGVykrUIWCC1yDtuCAIWSIgyOclaBCyQWuQdNwQBCyREmZxkLQIWSC3yjhuCgAUSokxOshYBC6QWeccNQcACCVEmJ1mLgAVSi7zjhiBggYQok5OsRcACqUXecUMQsEBClMlJ1iJggdQi77ghCFggIcrkJGsRsEBqkXfcEAQskBBlcpK1CFggtcg7bggCFkiIMjnJWgQskFrkHTcEAQskRJmcZC0CFkgt8o4bgoAFEqJMTrIWAQukFnnHDUFgLATyAeCRES/Hk8DDzeeZEc81R3oLA4s1nxfncDiQD+X47R6+NwCu7mI/X5fOTd/XA79MsItoci9wCHBWxORb5LwccBCwfYu+c6HL6sAdXS4kRSBLAg90CTIH+kognwL+MgeuZeIStgW+DEgk49KWAh7scrEpApkfGIfHjskcrwN2B27uAnhE+34e+OKI5jZkWgsAz3YJkCIQ+b8K0IBp3NqfG5F8J+iFvww4HtghaP590tbYQ2OQTi1VIJ8ETuoUaW513h84Itgl6fn7BOAdwfLOle6uwMldnaUKRLMJtwNLdA04h/qfCuwF/DPANW3ZiGOZALkOkeJDwBops6epAtFF6C/ovkNcTSCfPwL2AO4c4Zz3Bo4Z4fxKpHYksF9KoD4CWRW4FdCgfZzb3c245PIRg/Ai4FhgtxHLq3Q6GpS/EfhVSuA+AlE8TRMemBJ4jtn8txHJqIzLVgKOAzabY5xTLudQ4HMphrLpKxD5OBfYJjWBOWanR5lPV76mjYCvAqtUzmMUwp8HaL0nueUQiILrL6jb/wlcBOi5X6vwpdvOzWB8lLeLlGTS+/vd28E8VzuuayNTFfy2RiRiUqodBmj62Q0uATRz17vlFIiS0b4ezeq8sndm8R08BewJfH3gS1kaOBrQJtBxb78BNGN1Zi4QuQWivDRAlEi0LcMNvgR8YSAQ6zfiWHsg/5HcShhHAY/mTHoIgUzktwLwLmArYOOcSQf0dQ7wGUALVrnah5tp3EVyOQzo5wrgAuBK4J4h8h9SIPPmq7WSRQEVU/+OYtsO2GnAxK4F9gG06bFvG3qz4f3NU8DjfRMdwF53iMeaO0WnjYcpuZQSSEpuNWw+C2jefKimrdaaBj4/MYD+uOhRYsjNhtc04tBEw9g3C+T5X4EPNVOlQ97pJETNOnVpGmdIHEPuotaEgsaOf++S2Fzua4FMXV19GU8E1hmw+Kc3e9meaBFj62YA+uoWfVO7aEfEV1KN56qdBTJ9ZTVekkh0RxmqabOjNtHdMkMADe515xiq6ey9Zh2/NVSAyH4tkNmrpzGJHomGanc1d5ILJwXQ4SYJ4xNDBW4mDObKKclBMFkg7bDu2NxNFmzXvXOvfzfTwNp9q6bDTTpOsGlnT+0Nzm7uHG0e8dp7nWM9LZD2BdXgWI9cq7U36dxTJ/702KU7x8qdrdsbHNy8raW9xZj2tEC6FX7ZZoZri25mnXrrhOJLOlm076y3suiRSjuw3VoQsEBaQJqiix6FdNw2UruxeaT6eaSka+dqgaRXQH+J9YaQCO2bzZ0j6z6lCBfeN0cLpB9BndjTuGH5fm4GtdapT21NcUsgYIEkQJtkopN7EsmG/V1l9aDt9lrfmKuvTc0KazpnFkgezDrBJ5HoRN8oNL1MQ4+APx2FZCLnYIHkrZ5O9HXdY5U3A/huc+fo9A7a3EnMFX8WSP5K6mSf7iaL53c9q0ctLvrY7ayY2newQNqz6tJzrUYk63Ux6tFXaycab2gDpFtGAhZIRpiTXOlcvu4kQ78SSb93IXGUfEHEcNRGzLMFMnxBdCY9+cVls6R3cSOO+4a/jPGMYIGUqbtOAOpuslDGcKPwkrqMlzOariyQcnXRzw5IJNqp26dp56+mcE/p48S27QhYIO045eqlnx+QSFJfaqb3Pmm8obd5uBUgYIEUgDxFCD0e6fWkXdplzZ1jkNfbdElknPpaIPWqrZ8l0N2kTdOmSL2l0a0wAQukMPBJ4XQIS69rne5NJXP9Z6jr0m8R3QJpAalAF53w02uG9JN2Oov+J0A/GKqFvxpviS9wyTFCWCAx6uQsKxGwQCqBd9gYBCyQGHVylpUIWCCVwDtsDAIWSIw6OctKBCyQSuAdNgYBCyRGnZxlJQIWSCXwDhuDgAUSo07OshIBC6QSeIeNQcACiVEnZ1mJgAVSCbzDxiBggcSok7OsRMACqQTeYWMQsEBi1MlZViJggVQC77AxCFggMerkLCsRsEAqgXfYGAQskBh1cpaVCPwPimUW9r+tRwwAAAAASUVORK5CYII="

/***/ }),

/***/ "201c":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("212e");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "20b0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JToast_vue_vue_type_style_index_0_id_dbdac6ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0848");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JToast_vue_vue_type_style_index_0_id_dbdac6ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JToast_vue_vue_type_style_index_0_id_dbdac6ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "212e":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "21d9":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("3a4c");
var hiddenKeys = __webpack_require__("065e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "246f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("e99b");
var $forEach = __webpack_require__("e9aa")(0);
var STRICT = __webpack_require__("95b6")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "25ba":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("87b2");
var step = __webpack_require__("6fef");
var Iterators = __webpack_require__("953d");
var toIObject = __webpack_require__("3471");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("120f")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "26df":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("0926")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "27a5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2843":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("1e4d");
var $export = __webpack_require__("e99b");
var toObject = __webpack_require__("8078");
var call = __webpack_require__("b1d4");
var isArrayIter = __webpack_require__("dcea");
var toLength = __webpack_require__("201c");
var createProperty = __webpack_require__("1374");
var getIterFn = __webpack_require__("e3bb");

$export($export.S + $export.F * !__webpack_require__("1a9a")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "285b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("35d4");
var createDesc = __webpack_require__("5edc");
var toIObject = __webpack_require__("3471");
var toPrimitive = __webpack_require__("5d10");
var has = __webpack_require__("4fd4");
var IE8_DOM_DEFINE = __webpack_require__("83d3");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("26df") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "2b37":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("1e4d");
var call = __webpack_require__("b1d4");
var isArrayIter = __webpack_require__("dcea");
var anObject = __webpack_require__("a86f");
var toLength = __webpack_require__("201c");
var getIterFn = __webpack_require__("e3bb");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "2c43":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "30cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JGiteeInfoTag_vue_vue_type_style_index_0_id_671a8cb8_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("afeb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JGiteeInfoTag_vue_vue_type_style_index_0_id_671a8cb8_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JGiteeInfoTag_vue_vue_type_style_index_0_id_671a8cb8_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3240":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3250":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "3269":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b34");
var inheritIfRequired = __webpack_require__("a83a");
var dP = __webpack_require__("bb8b").f;
var gOPN = __webpack_require__("21d9").f;
var isRegExp = __webpack_require__("804d");
var $flags = __webpack_require__("6bf8");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("26df") && (!CORRECT_NEW || __webpack_require__("0926")(function () {
  re2[__webpack_require__("839a")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("84e8")(global, 'RegExp', $RegExp);
}

__webpack_require__("f966")('RegExp');


/***/ }),

/***/ "32ea":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("8078");
var $keys = __webpack_require__("93ca");

__webpack_require__("b2be")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "3441":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("e99b");
var aFunction = __webpack_require__("3250");
var toObject = __webpack_require__("8078");
var fails = __webpack_require__("0926");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("95b6")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "3460":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("7ee3");
var descriptor = __webpack_require__("5edc");
var setToStringTag = __webpack_require__("bac3");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("065d")(IteratorPrototype, __webpack_require__("839a")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "3471":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("1b96");
var defined = __webpack_require__("3ab0");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3497":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "34d2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "35d4":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "38fc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JVideoCover_vue_vue_type_style_index_0_id_1ac958ba_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("41bc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JVideoCover_vue_vue_type_style_index_0_id_1ac958ba_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JVideoCover_vue_vue_type_style_index_0_id_1ac958ba_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3a0d":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("baa7")('keys');
var uid = __webpack_require__("d8b3");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "3a4c":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("4fd4");
var toIObject = __webpack_require__("3471");
var arrayIndexOf = __webpack_require__("52a4")(false);
var IE_PROTO = __webpack_require__("3a0d")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "3a4f":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "3a4f";

/***/ }),

/***/ "3ab0":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "3c56":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("93ca");
var gOPS = __webpack_require__("0c29");
var pIE = __webpack_require__("35d4");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "3d8a":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "3e38":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("98de");
var validate = __webpack_require__("0b28");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("0bca")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "3f5b":
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__("84e8")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "3f9e":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("bb8b");
var anObject = __webpack_require__("a86f");
var getKeys = __webpack_require__("93ca");

module.exports = __webpack_require__("26df") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "4057":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("de49");
var anObject = __webpack_require__("a86f");
var $flags = __webpack_require__("6bf8");
var DESCRIPTORS = __webpack_require__("26df");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("84e8")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("0926")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "41bc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "43ec":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("1663")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "4441":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("3471");
var gOPN = __webpack_require__("21d9").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "4723":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JTable_vue_vue_type_style_index_0_id_017a7698_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0856");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JTable_vue_vue_type_style_index_0_id_017a7698_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JTable_vue_vue_type_style_index_0_id_017a7698_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4890":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("e99b");
var $filter = __webpack_require__("e9aa")(2);

$export($export.P + $export.F * !__webpack_require__("95b6")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "4962":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JWaterfall_vue_vue_type_style_index_0_id_52f84c84_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2c43");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JWaterfall_vue_vue_type_style_index_0_id_52f84c84_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JWaterfall_vue_vue_type_style_index_0_id_52f84c84_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "49f2":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("d8b3")('meta');
var isObject = __webpack_require__("9cff");
var has = __webpack_require__("4fd4");
var setDesc = __webpack_require__("bb8b").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("0926")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "4ac5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JDropDownBox_vue_vue_type_style_index_0_id_05140a67_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("91a7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JDropDownBox_vue_vue_type_style_index_0_id_05140a67_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JDropDownBox_vue_vue_type_style_index_0_id_05140a67_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4f3f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4fd4":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5271":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JTabBar_vue_vue_type_style_index_0_id_239cf785_prod_lang_less_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ce28");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JTabBar_vue_vue_type_style_index_0_id_239cf785_prod_lang_less_scoped_scoped___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JTabBar_vue_vue_type_style_index_0_id_239cf785_prod_lang_less_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "52a4":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("3471");
var toLength = __webpack_require__("201c");
var toAbsoluteIndex = __webpack_require__("732b");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5311":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1659429006156.8a3a214d.jpg";

/***/ }),

/***/ "5416":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JAppsLock_vue_vue_type_style_index_1_id_afafd868_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d131");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JAppsLock_vue_vue_type_style_index_1_id_afafd868_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JAppsLock_vue_vue_type_style_index_1_id_afafd868_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "558c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JBarrage_vue_vue_type_style_index_1_id_21ad0371_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("34d2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JBarrage_vue_vue_type_style_index_1_id_21ad0371_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JBarrage_vue_vue_type_style_index_1_id_21ad0371_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "566e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("e99b");
var $map = __webpack_require__("e9aa")(1);

$export($export.P + $export.F * !__webpack_require__("95b6")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "581c":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("839a")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "5d10":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("9cff");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "5db9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5dc3":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "5de6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JBarrageRain_vue_vue_type_style_index_1_id_181c69b4_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0ce2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JBarrageRain_vue_vue_type_style_index_1_id_181c69b4_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JBarrageRain_vue_vue_type_style_index_1_id_181c69b4_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5edc":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "6161":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__("eb34")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "6bf8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("a86f");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "6e26":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JNumRolling_vue_vue_type_style_index_0_id_06c2e012_prod_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("196b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JNumRolling_vue_vue_type_style_index_0_id_06c2e012_prod_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JNumRolling_vue_vue_type_style_index_0_id_06c2e012_prod_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6f45":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("84e8");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "6fef":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "70cd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "70f2":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("0451");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "732b":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("212e");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "753d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "76e3":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "76f7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7a43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JScratchCard_vue_vue_type_style_index_0_id_2251bfba_prod_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9d23");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JScratchCard_vue_vue_type_style_index_0_id_2251bfba_prod_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JScratchCard_vue_vue_type_style_index_0_id_2251bfba_prod_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7a72":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7d9c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JWebPet_vue_vue_type_style_index_0_id_5e4c70e2_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1a6a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JWebPet_vue_vue_type_style_index_0_id_5e4c70e2_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JWebPet_vue_vue_type_style_index_0_id_5e4c70e2_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7ee3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("a86f");
var dPs = __webpack_require__("3f9e");
var enumBugKeys = __webpack_require__("065e");
var IE_PROTO = __webpack_require__("3a0d")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("e8d7")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("bbcc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "804d":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("9cff");
var cof = __webpack_require__("cea2");
var MATCH = __webpack_require__("839a")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "8078":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("3ab0");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "839a":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("baa7")('wks');
var uid = __webpack_require__("d8b3");
var Symbol = __webpack_require__("0b34").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "83d3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("26df") && !__webpack_require__("0926")(function () {
  return Object.defineProperty(__webpack_require__("e8d7")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "84e8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b34");
var hide = __webpack_require__("065d");
var has = __webpack_require__("4fd4");
var SRC = __webpack_require__("d8b3")('src');
var $toString = __webpack_require__("05fd");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("76e3").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "87b2":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("839a")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("065d")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "8859":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JMouseMenu_vue_vue_type_style_index_0_id_56ff600c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("27a5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JMouseMenu_vue_vue_type_style_index_0_id_56ff600c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JMouseMenu_vue_vue_type_style_index_0_id_56ff600c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8b5a":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8cef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JCodeHeightLight_vue_vue_type_style_index_0_id_99356d18_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("76f7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JCodeHeightLight_vue_vue_type_style_index_0_id_99356d18_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JCodeHeightLight_vue_vue_type_style_index_0_id_99356d18_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8dee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("a86f");
var toObject = __webpack_require__("8078");
var toLength = __webpack_require__("201c");
var toInteger = __webpack_require__("212e");
var advanceStringIndex = __webpack_require__("43ec");
var regExpExec = __webpack_require__("f417");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("c46f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "8f70":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JFloatDiv_vue_vue_type_style_index_0_id_51a2337c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1c86");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JFloatDiv_vue_vue_type_style_index_0_id_51a2337c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JFloatDiv_vue_vue_type_style_index_0_id_51a2337c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "91a7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9286":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_J3DSwipe_vue_vue_type_style_index_0_id_587526e4_prod_lang_less_vars_7B_20maxWidth_20_7D_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c87e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_J3DSwipe_vue_vue_type_style_index_0_id_587526e4_prod_lang_less_vars_7B_20maxWidth_20_7D_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_J3DSwipe_vue_vue_type_style_index_0_id_587526e4_prod_lang_less_vars_7B_20maxWidth_20_7D_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "93ca":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("3a4c");
var enumBugKeys = __webpack_require__("065e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "94f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("0b34");
var has = __webpack_require__("4fd4");
var DESCRIPTORS = __webpack_require__("26df");
var $export = __webpack_require__("e99b");
var redefine = __webpack_require__("84e8");
var META = __webpack_require__("49f2").KEY;
var $fails = __webpack_require__("0926");
var shared = __webpack_require__("baa7");
var setToStringTag = __webpack_require__("bac3");
var uid = __webpack_require__("d8b3");
var wks = __webpack_require__("839a");
var wksExt = __webpack_require__("1a58");
var wksDefine = __webpack_require__("078c");
var enumKeys = __webpack_require__("3c56");
var isArray = __webpack_require__("d1cb");
var anObject = __webpack_require__("a86f");
var isObject = __webpack_require__("9cff");
var toObject = __webpack_require__("8078");
var toIObject = __webpack_require__("3471");
var toPrimitive = __webpack_require__("5d10");
var createDesc = __webpack_require__("5edc");
var _create = __webpack_require__("7ee3");
var gOPNExt = __webpack_require__("4441");
var $GOPD = __webpack_require__("285b");
var $GOPS = __webpack_require__("0c29");
var $DP = __webpack_require__("bb8b");
var $keys = __webpack_require__("93ca");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("21d9").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("35d4").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("3d8a")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("065d")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "953d":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "95b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("0926");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "9662":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "982e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("e99b");
var context = __webpack_require__("db34");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("581c")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "98de":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("bb8b").f;
var create = __webpack_require__("7ee3");
var redefineAll = __webpack_require__("6f45");
var ctx = __webpack_require__("1e4d");
var anInstance = __webpack_require__("8b5a");
var forOf = __webpack_require__("2b37");
var $iterDefine = __webpack_require__("120f");
var step = __webpack_require__("6fef");
var setSpecies = __webpack_require__("f966");
var DESCRIPTORS = __webpack_require__("26df");
var fastKey = __webpack_require__("49f2").fastKey;
var validate = __webpack_require__("0b28");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "9962":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JWordCloud_vue_vue_type_style_index_0_id_2e942070_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f0fd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JWordCloud_vue_vue_type_style_index_0_id_2e942070_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JWordCloud_vue_vue_type_style_index_0_id_2e942070_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9ca0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JDialog_vue_vue_type_style_index_0_id_7703f290_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d32f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JDialog_vue_vue_type_style_index_0_id_7703f290_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JDialog_vue_vue_type_style_index_0_id_7703f290_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9cff":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "9d23":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9f5f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JTr_vue_vue_type_style_index_0_id_9260af16_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5db9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JTr_vue_vue_type_style_index_0_id_9260af16_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JTr_vue_vue_type_style_index_0_id_9260af16_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9f60":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("078c")('asyncIterator');


/***/ }),

/***/ "a1d1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a1ea":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a450":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("bb8b").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("26df") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "a740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("8078");
var toAbsoluteIndex = __webpack_require__("732b");
var toLength = __webpack_require__("201c");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "a83a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("9cff");
var setPrototypeOf = __webpack_require__("e0ff").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "a86f":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("9cff");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "a89b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JFlowChart_vue_vue_type_style_index_0_id_c8ef8fe4_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a1ea");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JFlowChart_vue_vue_type_style_index_0_id_c8ef8fe4_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JFlowChart_vue_vue_type_style_index_0_id_c8ef8fe4_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "aa18":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("e99b");
var $includes = __webpack_require__("52a4")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("87b2")('includes');


/***/ }),

/***/ "ac67":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("e99b");
var ownKeys = __webpack_require__("e7c8");
var toIObject = __webpack_require__("3471");
var gOPD = __webpack_require__("285b");
var createProperty = __webpack_require__("1374");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "adc0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "addc":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("4fd4");
var toObject = __webpack_require__("8078");
var IE_PROTO = __webpack_require__("3a0d")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "afeb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b1d4":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("a86f");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "b2be":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("e99b");
var core = __webpack_require__("76e3");
var fails = __webpack_require__("0926");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "baa7":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("76e3");
var global = __webpack_require__("0b34");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("3d8a") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "bac3":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("bb8b").f;
var has = __webpack_require__("4fd4");
var TAG = __webpack_require__("839a")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "bb3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JElectronicNumber_vue_vue_type_style_index_0_id_9ac68a34_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("753d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JElectronicNumber_vue_vue_type_style_index_0_id_9ac68a34_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JElectronicNumber_vue_vue_type_style_index_0_id_9ac68a34_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bb8b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("a86f");
var IE8_DOM_DEFINE = __webpack_require__("83d3");
var toPrimitive = __webpack_require__("5d10");
var dP = Object.defineProperty;

exports.f = __webpack_require__("26df") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "bbcc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("0b34").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "bf73":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("0353");
__webpack_require__("e99b")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "c46f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("bf73");
var redefine = __webpack_require__("84e8");
var hide = __webpack_require__("065d");
var fails = __webpack_require__("0926");
var defined = __webpack_require__("3ab0");
var wks = __webpack_require__("839a");
var regexpExec = __webpack_require__("0353");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "c870":
/***/ (function(module) {

module.exports = JSON.parse("{\"皮卡丘\":{\"baseAddress\":\"http://jyeontu.xyz/\",\"imgType\":\"png\",\"isLink\":true,\"imgRootPath\":\"img/皮卡丘/\",\"audioPath\":\"audio/皮卡丘/\",\"defaultImg\":\"img/皮卡丘/0.png\",\"actionList\":[{\"name\":\"run\",\"min\":1,\"max\":2,\"isMove\":true,\"audio\":\"Pikachu.mp3\"},{\"name\":\"drink\",\"min\":13,\"max\":15,\"audio\":\"Pikachu.mp3\"},{\"name\":\"balloon\",\"min\":16,\"max\":17,\"audio\":\"Pikachu.mp3\"},{\"name\":\"peristalsis\",\"min\":18,\"max\":20,\"isMove\":true,\"audio\":\"Pikachu.mp3\"},{\"name\":\"eat\",\"min\":22,\"max\":25,\"audio\":\"Pikachu.mp3\"},{\"name\":\"electricity\",\"min\":26,\"max\":30,\"audio\":\"electricity.mp3\"}]},\"奇犽\":{\"baseAddress\":\"http://jyeontu.xyz/\",\"imgType\":\"png\",\"isLink\":true,\"imgRootPath\":\"img/奇犽/shime\",\"audioPath\":\"audio/皮卡丘/\",\"defaultImg\":\"img/奇犽/shime1.png\",\"actionList\":[{\"name\":\"run\",\"min\":2,\"max\":3,\"isMove\":true},{\"name\":\"fly\",\"min\":7,\"max\":10,\"isMove\":true},{\"name\":\"sit\",\"min\":26,\"max\":32},{\"name\":\"angry\",\"min\":33,\"max\":41},{\"name\":\"airBall\",\"min\":42,\"max\":50}]},\"白一护\":{\"baseAddress\":\"http://jyeontu.xyz/\",\"imgType\":\"png\",\"isLink\":true,\"imgRootPath\":\"img/白一护/shime\",\"audioPath\":\"audio/皮卡丘/\",\"defaultImg\":\"img/白一护/shime1.png\",\"actionList\":[{\"name\":\"action1\",\"min\":1,\"max\":10,\"isMove\":false},{\"name\":\"action2\",\"min\":11,\"max\":19,\"isMove\":false},{\"name\":\"action3\",\"min\":20,\"max\":22},{\"name\":\"action4\",\"min\":26,\"max\":28},{\"name\":\"action5\",\"min\":37,\"max\":46},{\"name\":\"action6\",\"min\":31,\"max\":33}]},\"橘一护\":{\"baseAddress\":\"http://jyeontu.xyz/\",\"imgType\":\"png\",\"isLink\":true,\"imgRootPath\":\"img/橘一护/shime\",\"audioPath\":\"audio/皮卡丘/\",\"defaultImg\":\"img/橘一护/shime1.png\",\"actionList\":[{\"name\":\"action1\",\"min\":1,\"max\":10,\"isMove\":false},{\"name\":\"action2\",\"min\":11,\"max\":17,\"isMove\":false},{\"name\":\"action3\",\"min\":18,\"max\":22},{\"name\":\"action4\",\"min\":26,\"max\":30},{\"name\":\"action5\",\"min\":31,\"max\":46}]},\"喵老师\":{\"baseAddress\":\"http://jyeontu.xyz/\",\"imgType\":\"png\",\"isLink\":true,\"imgRootPath\":\"img/喵老师/shime\",\"audioPath\":\"audio/皮卡丘/\",\"defaultImg\":\"img/喵老师/shime1.png\",\"actionList\":[{\"name\":\"run\",\"min\":1,\"max\":3,\"isMove\":true},{\"name\":\"action1\",\"min\":5,\"max\":9,\"isMove\":false},{\"name\":\"action2\",\"min\":30,\"max\":33,\"isMove\":false},{\"name\":\"action3\",\"min\":34,\"max\":37},{\"name\":\"action4\",\"min\":38,\"max\":41}]},\"蓝染\":{\"baseAddress\":\"http://jyeontu.xyz/\",\"imgType\":\"png\",\"isLink\":true,\"imgRootPath\":\"img/蓝染/shime\",\"audioPath\":\"audio/皮卡丘/\",\"defaultImg\":\"img/蓝染/shime1.png\",\"actionList\":[{\"name\":\"action1\",\"min\":1,\"max\":10,\"isMove\":false},{\"name\":\"action2\",\"min\":11,\"max\":17,\"isMove\":false},{\"name\":\"action3\",\"min\":18,\"max\":22},{\"name\":\"action4\",\"min\":26,\"max\":30},{\"name\":\"action5\",\"min\":31,\"max\":46}]},\"迪达拉\":{\"baseAddress\":\"http://jyeontu.xyz/\",\"imgType\":\"png\",\"isLink\":true,\"imgRootPath\":\"img/迪达拉/shime\",\"audioPath\":\"audio/皮卡丘/\",\"defaultImg\":\"img/迪达拉/shime1.png\",\"actionList\":[{\"name\":\"run\",\"min\":2,\"max\":3,\"isMove\":true},{\"name\":\"fly\",\"min\":47,\"max\":48,\"isMove\":true},{\"name\":\"action1\",\"min\":38,\"max\":46,\"isMove\":false},{\"name\":\"action2\",\"min\":28,\"max\":29},{\"name\":\"action3\",\"min\":30,\"max\":33},{\"name\":\"action4\",\"min\":26,\"max\":27}]},\"日向雏田\":{\"baseAddress\":\"http://jyeontu.xyz/\",\"imgType\":\"png\",\"isLink\":true,\"imgRootPath\":\"img/日向雏田/shime\",\"audioPath\":\"audio/皮卡丘/\",\"defaultImg\":\"img/日向雏田/shime1.png\",\"actionList\":[{\"name\":\"run\",\"min\":2,\"max\":3,\"isMove\":true},{\"name\":\"action1\",\"min\":15,\"max\":22,\"isMove\":false},{\"name\":\"action2\",\"min\":26,\"max\":29},{\"name\":\"action3\",\"min\":30,\"max\":33},{\"name\":\"action4\",\"min\":38,\"max\":46}]}}");

/***/ }),

/***/ "c87e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c9d2":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABHCSURBVHhe7V1ZkB3Vef57uessdxYxSEIRBiTZERhb2ImFCRIJLsoyNq4yMQmk8hAnqcpTyslDHrJWynYqlRenUpWlKtsbXjA2cWzswnGMJJAAh2CksEgsArQLaUaambv3ku/7T/fMndGdud1z7x2NMR/09HK6+/znO/92TvdtWSEgVwhh0BRpnJawdlLC+gmR5pSE3pSIX8H6kliWbc4LA7HckohTxHpUJDMqVm6TWPlrRLIbxLIzet6VwKoTGJSPSjjzvxLOHlaSJKhBCheLg1IQpqRZc+TFIIn4S9axxhL6WDxckldyrcH3izW0Q+yB9+r5q4VVITCsvin+he9JOP0s99DoLGqm1lxOVFrMEwttDhrYxj2HPyTO+B6xCtfqOf1EXwn0Lz4h4XkQ1zgL0nIgi8RZUWmfgOaEIYgM6mJlrxZ73SfEHrktKuw9+kKgP/m4BGe/oo0RByYmMM9+E7cYJFJg5j5dBCS4+gGxx3ZHhb1DTwkMyi+Lf/LfRLyLxuF3aZ49A8w8DCpwsyVxrvkdsXroJ3tDIHyP99bfSVh+QcQdjohbZY3rBNVI+EtvGgTeKO7m3ze+uEt0TWCAwOCf+ndshQigOXNwjSOEf2QHOxt/S2wEnG7QFYH+mQcluPAYtG5k7ZhrQmj0hquxx+8SZ/0D0dH0WDGB3mt/ieh6Cn6liL01Zq6JAbNG0m5lN4p7w19Ex9IhNYFUf+/VP4XtomL1IT+t5MUAicwf7aK4W76Y2g2lIjAMfPFe+QPqPyq6csOnfkCHlUh33K1fRts4KkqGxI4r9KF5R9+Z5BHaJrSNbQx9jmiSITGB3uswW6QB70TyYpi2BfDvf2wOJEAiAhkwOENifN47G9rGoGranAAdCfRPP2ii7c8AeTHYVraZbe+EZQlkkhxMPvZTnqqsBJa2mW0nB8thaQIRlXSEgST5Z4u8GGgz2q4cMEIvgSUJ9N76W/xFxE0zwmD4d+GIHddsrzVQJsrmwh0laJdpOyKzctEebe8Slo9geRF1pEgqIVxw6W2p7v+WVJ94BNvnRTJraGyczYs/eVqq+x6W6gHIV7mUjERwQC7CypHoyEK0vYN36l/RS8PRXkIgCa09v0/CehkOuCq1px9Fz72kgl9xQIbm0Wel/j8/kNBrgJAZaRx6wlhLEoAL7wQ4aYPLCAym9oLBi/AAnXtnAdCbdtYM7TSTh9CNFw5K4zAEJYmrPaFKsE7K8fzj0nz1J7odjzIsygTzTAI1ZXDik5tFuIwlzrBYGBembrDvSfbm3ZrNh76Py43w3olXpHbgP9XExU7ZKd0A9XGUSnfinT6mhFGmEHJa0LzsByGrt3RwWAi0hVEZ3CzGghYFU9AW9koC33AZwkDsgZIUdt0rFnxfCOHYBVY2J8HMpPqesF4zTrzfAEFhvQp//E34rmkjDw6HzbpY+UEp3P4ZpCmQAwQnRRxQDEfzWEjghe/hSBc+S3s3K4U7Pit2aZ36Gx07s0HYrux9CMHlAoJLH5NykOWfP4m6vo4GYegJonS+BOQ566+T4u57jXWhLDXAjXLUgjkCg+qb+vRMHwB1A05UNhuS/8gecTf/vAT1ijaAvofaWHv6u+IdewGawOS8t7DyAxizH5YagoWVLaBOW+sOa7OS3fYhyX3wDtXMNJrXCnJDjshVjDkCQ9U+pB1pfV9bsMcbkrvxo7oIIx+IVTOAhtRfelrqiNiSobb3oD7KDC2vPftfUj/yzLy/o5YFvuQ//HFxb/iASAMupBuwHnDUqoXzGsghC5/b9hAhtI9amP/I3Uoo5xPZMDtXEO8kgstT3zHmvBKfG0ODk4Pc7tvin30D9+bTQBMsJPCk8NF7xJnY1D15Efhs27wgYKCSB0icqTUaOXsNaJ89PAa/eN9ccGFP0lcG0xek8qOvqnNfEYmMtJUZqfzwQV3z/gTvZw+OSvFX7lezTh5tE0A5QjBRziICw+nnsNVHxx4Hl9vvjYJLTCISWWzXDjLNSUsgGoJ0qfLEt5R8japACE13rtok+Vs/qfs04Z6DXJEzbvJPWD4MIRJm5SsFgwsaU7jt02IPjRj/BLDhQbWM9OCsEpEYINw/f8KkShH5dBHO+AbJ7wR5UQbQF4CrgJwBNh+ohHzY3AtnvhzYSGgcx8rBLF9dM/VpYouIbI9MGJKTAh3grLtGN5m4K9AB/uQZ+NZHjTl341uXBXwsOCN3ttTR8wFCe98qAxyT2FZ+9DVNqnU4BQJpblZxWIrwj6nIU0C7cJ/inQ9oeqSJOzsFGu2/fRx54DdUIzXI9BiaTZAzcGfri418P69fYGIL8+SoQHw0kkk1DpNQmhtNWslbibnxOhBU2PWr8K3jyNFqxqQR2ZkBVPc/DFObhub3wb+DM3IXEdj7XlIgH2sisa0/g7wJxFHzdFTQqEpm6w7J/+LHdYTQla8iidC+/K2fksy125G4V7UOM1QTqT2JsfCp1zQ37CnAmRIozYvY67H50pQgcOP5vdI48mMzCwK118ABLcnedLuODHRU0BOAKdwru30n7o3EHR2kiTv9LuU4tE8aLz+D7QLO7ZWvx73BndU89tdhWD+FBvZIC6ll8D31Z76PYDGl6QsJNY4+hNbtUXNjYt0XwGUEF89pIBHXndd65oZjiNC/cJemP6q5XSAMMSjIbYQJ83Flr3qFA3ekJDX4uyCaBSHUwcMvcabGHhrtH3kEiRoeR12fUbcxPyuUB7FnVTYGr26DCzkjd7bFF717EYFhLjqy2PeQmmo8XcRZGG0QRyKIxkyq+w6mRhguFnf/GkYkyDmjnFBHP/WaVPd+DR092127cS25w98e+T/0aP3wfmgaZ33NLAhnYlw49vxOMxbu1mxSgf7Wb+iIxN24RQL1iwwu0Dx0ZJ0z5RwJdQNw1yP2APg5zY9AkuZf6HWdjdl+q5oVCsx5qwn6Ppgwp7Gy2z4MOWpGNiwalVneJRgao80u4XmSu3m3WIUB9X0MFpyJYT52pRHWypK54WbJ3fIxdSPWwIhkb0THIi/tCoz0jVf/POyZH+Q9aBZMY+h3ovHumgEDB+VTzTR+ccWgpbklBBGnCOPqkXlRm2munHtba+QRNF/K1m3yDpAzcmdb7php+LtIB5ovuLMlw3df3iUwPcAZuLP5q0dkhNHBd5EYOhLZFBO4CsntOw3gTAmU3NWITgX41G7NGBGOs9odF4xQ2h5fxaUXj27BGbnTt/S9V/8EGjm74gkFCzdrVl+RwJvknjm4BEIrh0qZWLdHaGVRjhSjDZYrIzqVG4Riu6OSKWwDDyubDdKJBGdQ3C1fMgQGZ74q/sV9IGIFc2YQun5pvzQqh9ABZvJgeTB96NWU0soQogOzAx+Q3PAvYacT4ZcjDGpij+wSZ/2vR0O5oR0IKulvpIA6+/UTIB8jEBsa0HGBBrY9vprLgPi14yr7isBnIeQMmPuhTfPF31W11FFEClBry29/HTnqjLoA+tKQP3ddFNn5vKL1uTOrjapWLC4PApbF5ZbYdvJrF5crIJsV/aaPJmg7QzJw1X2qTWmg94W7y2z/Z92fI9A78U/6HYPUP3Wy8lK58G3xvXPYs1XA4vavRPeZ72HP92W2WjUNRZW5bFby+j6hIWC2UsU5yAawzemw0uAQNxWU8NIsOogzzNhxHVcGiwx8hqRaoyF1LHotjg0WCjin1Z9zyF+V8gv3R/uBOO6EFMfvwfkpCQz40P794mz6Pd2fI5AvzPjHvoCOGlJBEkN94D4NIvyhStA4I6WdbyBIbY5OMGhCIS/OkkAz1TWQz0uxpa+my540dK7QkgBaPFHi9Ps8zl2qIueixwklCwKHB+YfhFUQk8q1Gu5NAgMZGSxIZlE89KuvyfRT28TOXg0SmggiWyVX2oXbpXBdkDuEpTnX/RnaZ77HMDeDwAP8xoD+TD4VOFHJ14GNNiA5Em/6gNlugf4WDeZiscexXBYBeTwuxzrWLkK3W8r03BbovXBs7to2b9V7U/+tshkskjkhyI1+h6HlYxZzBBL2+B501ULhOgL+xM1uQCMN8XTSzanHdHstwbt0QGUjKKuTQf67yE93BLhRjlqwkMBRhPXIDJID/iSzAWvjf/gSYvPcw6aoBSmcgqL1/G6ujdF8+5uQLWdkBNws32pI0U5yAm6UoxYsIJCw+ettn5OgydWbZ7p5+jyoOCMxrm+cf8SURQIvdbdWU41BAniUZbpExxaj3bVEfDQupyz68EwHCrCY/LVLytMWlCGotP1l+1wQaUXz6B/honpUYRK40qy/LvWpHyIIwfnDDwXFHeK/D/ucrI3AqoyjN+vFWK58pddy0tN5+U6xK3wDLQ8iq5IbvVMyuetRmmwOQN0TtDez9W+iI/O4TAMJd9Nv497T0V4S+BAIjhXkqfnDWduz8DnTj2N4ZdKN1obFDV28LFe+omtRN2WgLJRJZYOMKmuaYAku3I3gpA3aEmgV3yvWwHao7dJj1oWAEmOQni3ehE3z7p8gKXde/02s+WC9bTX9BetE3UaGaIAA2VRGnVBIZsTkgFws9a2ZJVvmbv48/rI3Ezpa5FPZwVuwwbfiqYUZmO8Fsd/8PHKvYYwkTP6np0Yaw2N2tI41Jy6fK4vKU1/LOlE3ZaAsph2ukTFh7meusSIu2mNp1UBSzO+q6FeIErvcQPKl3ajYPHMInZLY5/5RhmYfktLwsDaO4N9CLidjODZWKuk60zJyCHDeXFlUzmMxeG7rtbxXXMo6hnFsuPJd1P0PKoPKApkoW/LIizui7crBMr/SX9a2+FEae+wujWCm2R0QeuIWt0gmfz0Ejt7Xc0dl9tB90ph8SrdjxGQuhdbyNOeyDm/qWZn5ySexPRZpJ0YekImyJZs8BuF8bQNt7/Rhno7OydnAFxg3whckHPLAZ+RHPoYNCs60BuaUm5D64V8Wu3xAo2J/gPr4mHF2v9QO7ULMmNC6TYJvGZkS+nS2lW1m2zuhI4GEfpSGs9aJSIQ2wHcU192LtY8G0B86+L8k7ou3iX3273HDERxb2ixSg/cieSe/IO5LIA9BI54ZojzFqz6rMqlsHaBtdIqJP8STiEDC3fJX+MtZjSRP832x0aDC2N3gcDYiEVVl14tz/A/FOfop6ETKYdQysDgaOnKXOKe/pHWww1gnp9gKo5/QqaskaYtpmy3u9V80BxIgMYEcR7rbvowNmEoSTYTfcdCYgYnf4A4aZKaqxBkTp7xfGgfzUn7pcxI0z5vzNdVIoJV8pmLjXIDX8h6NgzlxKj/GPeBj1eehLhA4eNX9KoOmVh2gbcK1bKPltEwTdUDbkchySP3pJ75LjOy/MvkfWJexn4WcbCSq5T7IdUs7xR++W7zSpyUsXKcvEExQaVpwbga8IVBb1ePiTj8izvR3ECQ568NOGZi/J1IUC/vFsXuwLmK/U9BA55I8exU+/dQK/fgY32x1k3zRg7laVmozT0qz/H84HT4xerFdzZt5GRNWdIpk1kuQfQ/yta0YeV2n5wS1Y9KYfUXsxhsYZ56REI3l0Mp0hjEio3UYEQ3cJPmh27BPK6HfWw4gz4Mi5Fbx42OtSPv5O85e+0hs69MHxau/EfW2i+Nayj9KApeYEEVMONa6KOgWuPbUKtzceyQ3fKs47jiOd56S045DnnfFPn8XI/0HGPlOJ4hsnoNWPQci38Kl9FEkh51gRhbtYESlxgaojSlSBsRthrbuECczgcMkrpPW8XKmM2vgA4xzgA9Z8AlQxqYlSJiHMesgKItfPyk+vxTUPIsFQy8C1/M/ArpG9nTbyYxrYHAyyNP4krc9gKKE5qpat8Y+AdoKfi7FP/kvsLxLUCZ+dyFJkCdJRvvM9BmSEm8SgYTaFAcAFwEkj9RoDNskwpi5Ia2z+EocR1NwNc41nxN74H1RSffoKYExgsm94p99kJKDmzwoIUGdNLIVPDdeCIoYLwmBuhd+Bvl+scfuiAp7h74QGCO4+KQE5x9FkL1yH+K21u0RZ2ThNHwv0VcCY7z7Kfgegn4ymHmuT/8YwS3wb9v0/NXCqhPYCh176j+HcQpJ+XEkyWn+OYyfEyu/EWPfK/nPYYj8P/d565GS2KRRAAAAAElFTkSuQmCC"

/***/ }),

/***/ "ce28":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cea2":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "d0f2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("a86f");
var toLength = __webpack_require__("201c");
var advanceStringIndex = __webpack_require__("43ec");
var regExpExec = __webpack_require__("f417");

// @@match logic
__webpack_require__("c46f")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "d131":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d14b":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1659429006156.jpg": "5311"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "d14b";

/***/ }),

/***/ "d1cb":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("cea2");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "d32f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d445":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("cea2");
var TAG = __webpack_require__("839a")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "d4aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JCalendar_vue_vue_type_style_index_0_id_2bbd0648_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9662");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JCalendar_vue_vue_type_style_index_0_id_2bbd0648_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JCalendar_vue_vue_type_style_index_0_id_2bbd0648_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d6c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JHoverBtn_vue_vue_type_style_index_0_id_7ec41aa5_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4f3f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JHoverBtn_vue_vue_type_style_index_0_id_7ec41aa5_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JHoverBtn_vue_vue_type_style_index_0_id_7ec41aa5_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d8b3":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "db34":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("804d");
var defined = __webpack_require__("3ab0");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "dcea":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("953d");
var ITERATOR = __webpack_require__("839a")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "de49":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("26df") && /./g.flags != 'g') __webpack_require__("bb8b").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("6bf8")
});


/***/ }),

/***/ "e0ff":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("9cff");
var anObject = __webpack_require__("a86f");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("1e4d")(Function.call, __webpack_require__("285b").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "e3bb":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("d445");
var ITERATOR = __webpack_require__("839a")('iterator');
var Iterators = __webpack_require__("953d");
module.exports = __webpack_require__("76e3").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "e5b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("e99b");
var $find = __webpack_require__("e9aa")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("87b2")(KEY);


/***/ }),

/***/ "e640":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JCanvasBroad_vue_vue_type_style_index_0_id_f3415862_prod_lang_less_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a1d1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JCanvasBroad_vue_vue_type_style_index_0_id_f3415862_prod_lang_less_scoped_scoped___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JCanvasBroad_vue_vue_type_style_index_0_id_f3415862_prod_lang_less_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e680":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("0b34");
var has = __webpack_require__("4fd4");
var cof = __webpack_require__("cea2");
var inheritIfRequired = __webpack_require__("a83a");
var toPrimitive = __webpack_require__("5d10");
var fails = __webpack_require__("0926");
var gOPN = __webpack_require__("21d9").f;
var gOPD = __webpack_require__("285b").f;
var dP = __webpack_require__("bb8b").f;
var $trim = __webpack_require__("eb34").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("7ee3")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("26df") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("84e8")(global, NUMBER, $Number);
}


/***/ }),

/***/ "e7c8":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("21d9");
var gOPS = __webpack_require__("0c29");
var anObject = __webpack_require__("a86f");
var Reflect = __webpack_require__("0b34").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "e8d7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("9cff");
var document = __webpack_require__("0b34").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "e99b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b34");
var core = __webpack_require__("76e3");
var hide = __webpack_require__("065d");
var redefine = __webpack_require__("84e8");
var ctx = __webpack_require__("1e4d");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "e9aa":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("1e4d");
var IObject = __webpack_require__("1b96");
var toObject = __webpack_require__("8078");
var toLength = __webpack_require__("201c");
var asc = __webpack_require__("70f2");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "eb34":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("e99b");
var defined = __webpack_require__("3ab0");
var fails = __webpack_require__("0926");
var spaces = __webpack_require__("5dc3");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "eec3":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("e99b");

$export($export.S, 'Array', { isArray: __webpack_require__("d1cb") });


/***/ }),

/***/ "f0fd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f417":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("d445");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "f70e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JTagList_vue_vue_type_style_index_0_id_e0550666_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("adc0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JTagList_vue_vue_type_style_index_0_id_e0550666_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_JTagList_vue_vue_type_style_index_0_id_e0550666_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f92e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f966":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("0b34");
var dP = __webpack_require__("bb8b");
var DESCRIPTORS = __webpack_require__("26df");
var SPECIES = __webpack_require__("839a")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "fa97":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fc02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("804d");
var anObject = __webpack_require__("a86f");
var speciesConstructor = __webpack_require__("1b0b");
var advanceStringIndex = __webpack_require__("43ec");
var toLength = __webpack_require__("201c");
var callRegExpExec = __webpack_require__("f417");
var regexpExec = __webpack_require__("0353");
var fails = __webpack_require__("0926");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("c46f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ })

/******/ });