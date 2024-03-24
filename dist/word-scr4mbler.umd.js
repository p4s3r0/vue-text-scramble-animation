(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["word-scr4mbler"] = factory(require("vue"));
	else
		root["word-scr4mbler"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__274__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 907:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 274:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__274__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(274);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/WordScr4mbler.vue?vue&type=template&id=20bf83c6&scoped=true

const _withScopeId = n => (_pushScopeId("data-v-20bf83c6"), n = n(), _popScopeId(), n);
const _hoisted_1 = {
  id: "container"
};
const _hoisted_2 = {
  class: "WordScr4mblerText"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("p", _hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(this.word), 1)]);
}
;// CONCATENATED MODULE: ./src/components/WordScr4mbler.vue?vue&type=template&id=20bf83c6&scoped=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/WordScr4mbler.vue?vue&type=script&lang=js
/* harmony default export */ var WordScr4mblervue_type_script_lang_js = ({
  name: 'App',
  props: {
    text: {
      type: String,
      default: "Word-Scrambler"
    },
    init: {
      type: String,
      default: "Scra-mBlErWord"
    },
    switchSpeed: {
      type: Number,
      default: 50
    },
    unscrambleTime: {
      type: Number,
      default: 5
    },
    scramble_character: {
      type: String,
      default: "ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789#+;-"
    },
    animationType: {
      type: String,
      default: "random"
    }
  },
  components: {},
  data() {
    return {
      scramble_iteration: 0,
      repeater: null,
      word: this.init
    };
  },
  methods: {
    scramble() {
      let end = false;
      let final_stage = false;
      this.scramble_iteration++;
      if (this.scramble_iteration >= this.unscrambleTime) {
        final_stage = true;
      }
      let new_word = "";
      for (let i = 0; i < this.text.length; i++) {
        let random_char = this.word.charAt(i);
        if (!final_stage && Math.random() < 0.5) {
          random_char = this.scramble_character.charAt(Math.floor(Math.random() * this.scramble_character.length));
        }
        if (final_stage) {
          // reveal word linear
          if (this.animationType == "linear") {
            if (i < this.scramble_iteration - 10) {
              random_char = this.text.charAt(i);
            }
          } else {
            // reveal word random
            if (Math.random() < 0.2) {
              random_char = this.text.charAt(i);
            }
          }
        }
        new_word = new_word + random_char;
        if (new_word === this.text) {
          end = true;
        }
      }
      this.word = new_word;
      if (end) {
        clearInterval(this.repeater);
      }
    }
  },
  mounted() {
    this.repeater = setInterval(this.scramble, this.switchSpeed);
  }
});
;// CONCATENATED MODULE: ./src/components/WordScr4mbler.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/WordScr4mbler.vue?vue&type=style&index=0&id=20bf83c6&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/WordScr4mbler.vue?vue&type=style&index=0&id=20bf83c6&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(907);
;// CONCATENATED MODULE: ./src/components/WordScr4mbler.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(WordScr4mblervue_type_script_lang_js, [['render',render],['__scopeId',"data-v-20bf83c6"]])

/* harmony default export */ var WordScr4mbler = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (WordScr4mbler);


}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=word-scr4mbler.umd.js.map