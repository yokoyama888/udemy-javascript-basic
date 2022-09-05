// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
/**
 * 【const,let等の変数宣言】
 */
//let val2 = "let変数";
//console.log(val2);

/*letは上書きが可能*/
//val2 = "let上書き";
//console.log(val2);

/*letは再宣言不可*/
//let val2 = "let再宣言";
//console.log(val2);

/* constは上書き、再宣言不可だがオブジェクト内のプロパティの変更は可能 */

/** ========================================================== */

/**
 * 【テンプレート文字列】
 */
// const name = "田中";
// const age = 28;
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

/** ========================================================== */

/**
 * 【アロー関数】
 */
///■■■従来の関数
// function func1(str) {
//   return str;
// }

/**下記のように関数を変数に格納もできる */
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));
//■■■アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

/** returnは省略が可能 */
// const func3 = (str) => str;
// console.log(func3("func3です"));

/** ========================================================== */

/**
 * 【分割代入】
 */
// const myProfile = {
//   name: "田中",
//   age: 28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

/** オブジェクトからプロパティを取り出すことができる */
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/** 分割代入は配列にも使用できる */
// const myProfile = ["田中", 38];

/*受け取る側はオブジェクト、配列によって記号が違う
 *オブジェクト：{}、配列：[]（配列は順番に格納する） */
// const [name, age] = myProfile;
// const message3 = `名前は${name}です。年齢は${age}です。`;
// console.log(message3);

/** ========================================================== */

/**
 * 【デフォルト値、引数など】
 */
//const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
//sayHello();

/** ========================================================== */

/**
 * 【スプレッド構文 ...】
 */
//■■■配列の展開
// const arr1 = [1, 2];
// console.log(...arr1);

/* 「...配列の変数」は、配列の中を順番に処理している */
// const sumFunc = (num1, num2) => console.log(num1 + num2);

/* 下記はどちらも同じ結果となる */
// sumFunc(arr1[0], arr1[1]); //従来の方法
// sumFunc(...arr1); //配列に対してスプレッド構文を使用した方法
//■■■まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

/** 分割代入でスプレッド構文を使用するとそれ以降の値を配列でまとめてることができる */
//■■■配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
//コピー
// const arr6 = [...arr4];
// console.log(arr6);
//結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/** =で配列に格納した場合、格納後の変数の内容を変更すると参照元も変わってしまう */
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);
//上記のarr8とarr4はどちらも[0]の値が「100」に変わってしまっている

/** ========================================================== */

/**
 * 【mapやfilterを使った配列の処理】
 */

/* 従来はfor文だったが今はmapやfilterを使用する*/
// const nameArr = ["田中", "山田", "加藤"];
//■■■mapの場合
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name) => console.log(name));
//index番号を表示する場合（第1引数は配列の内容、第2引数はindex番号）
// nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です。`));
//■■■filterの場合（ある条件に一致する物だけ出力）
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; // returnに条件式を記述する
// });
// console.log(newNumArr);
//■■■実践編
// const newNameArr = nameArr.map((name) => {
//   if (name === "山田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/** ========================================================== */

/**
 * 【論理演算子の本当の意味を知る || &&】
 */
// || は左側がfalseなら右側を返す
var num = "";
var num2 = "";
var fee = num || "金額が未設定です。";
/*
下記if文は、左側「num」がfalseなら右側の「num2」の値を返す
この場合、num2の値が「fale」なら、「if(false){ ～ }」となり、if文内の処理は実行されない
逆にnum2の値が「true」なら、「if(true){ ～ }」となりif文内の処理は実行する
※num1が「true」の場合は、num1の値が出力されるので「if(true){ ～ }」となる
*/

if (num || num2) {//処理
} //&& は左側がtrueなら右側を返す


var num3 = "";
var num4 = "";
var fee2 = num3 && "何かが設定されました。";
/*
下記if文は、左側「num」がtrueなら右側の「num4」の値を返す
この場合、num4の値が「fale」なら、「if(false){ ～ }」となり、if文内の処理は実行されない
逆にnum4の値が「true」なら、「if(true){ ～ }」となりif文内の処理は実行する
※num3が「false」の場合は、num1の値が出力されるので「if(false){ ～ }」となる
*/

if (num3 && num4) {//処理
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39085" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map