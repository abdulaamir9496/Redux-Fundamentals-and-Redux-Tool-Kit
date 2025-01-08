// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dm4SN":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"6rimH":[function(require,module,exports,__globalThis) {
// // let state = {
// //     count : 0,
// //     name: 'Aamir',
// //     age: 28,
// //     city: "Hyderabad"
// // }
// const { createStore } = require("redux")
// const { myCreateStore } = require("./my-redux")
// // let prevState = state;
// // state.count = state.count + 1;
// // state.count = state.count + 1;
// // state.count = state.count + 1;
// // function increment() {
// //     //*** Mutating State ***//
// //     // state.count = state.count + 1;
// //     //*** Not Mutating State ***//
// //     state = {...state, count: state.count + 1};
// // }
// // increment();
// // console.log(state);
// // increment();
// // console.log(state);
// // increment();
// // console.log(state);
// //Redux says we should'nt call like this.
// // We should not mutate the state. Without mutating the state we should change the state.
// // let state = {
// //     count : 0,
// //     name: 'Aamir',
// //     age: 28,
// //     city: "Hyderabad"
// // }
// //Reducer function: Reducer means updater.
// // function stateUpdater(state) {    //Redux says stateUpdater is a reducer, which means reducer is a (stateUpdater)
// //     state = {...state, count: state.count + 1}   
// //     //Redux says no not this way. You should not touch directly. No updating like this for updating values.
// //     //Then how ? Redux says I will update by myself(Redux). How ? Redux says I will pass state(as a parameter) & return new state..
// // }
// //What Redux will do ?
// // let reduxState = {
// //     ID : 0,
// //     name: 'Aamir',
// //     age: 28,
// //     city: "Hyderabad"
// // }
// // function reducer(state) {
// //     return{...state, ID: state.ID + 1};
// // }
// // reduxState = reducer(reduxState);
// // reduxState = reducer(reduxState);
// // reduxState = reducer(reduxState);
// //Behind the scenes this is how it works.
// //TOPIC: state + action
// //Along with the state we also pass action. action is a plane JS Object. How it looks like ?
// // let reduxState = {
// //     ID: 0,
// //     name: 'Aamir',
// //     age: 28,
// //     city: "Hyderabad"
// // }
// // function reducer(state, action) {
// //     console.log(action);    //Now it shows as 'undefined'
// //     return{...state, ID: state.ID + 1};
// // }
// // reduxState = reducer(reduxState, action);    //redux will pass the action. We will pass action manually differently.
// //we can directly create action as shown below:  
// // reduxState = reducer(reduxState, {type: 'post/increment'});   //This is action's type. By convention post/increment is good to use.
// //type: Describes what kind of action is happening (e.g., "add a todo", "delete a todo").
// //Still it looks confusing ? Will understand with the real time scenario.
// // let reduxState = {
// //     ID: 0,
// //     name: "Aamir",
// //     age: 28,
// //     city: "Hyderabad"
// // }
// // function reducer(state, action) {
// //     // return{...state, ID: state.ID + 1};
// //     //type: Describes what kind of action is happening (e.g., "add a todo", "delete a todo").
// //     if(action.type === 'post/increment') {
// //         return {...state, ID: state.ID + 1};
// //     } else if(action.type === 'post/decrement') {
// //         return {...state, ID: state.ID - 1};
// //     } else if(action.type === 'post/incrementBy') {
// //         // return {...state, ID: state.ID + 1, payload: action.payload + action.payload};
// //         // payload: Extra data. Provides the extra details needed to perform that action (e.g., the todo text, or the ID of the todo to delete).
// //         return {...state, ID: state.ID + action.payload}
// //     }
// //     return state;
// // }
// //What will redux do ?
// // console.log(reduxState)
// //type: Describes what kind of action is happening (e.g., "add a todo", "delete a todo").
// // reduxState = reducer(reduxState, {type: 'post/increment'})
// // console.log(reduxState)
// // reduxState = reducer(reduxState, {type: 'post/increment'})
// // console.log(reduxState)
// // reduxState = reducer(reduxState, {type: 'post/decrement'})
// // console.log(reduxState)
// // //Incrementing values using Redux
// // reduxState = reducer(reduxState, {type: 'post/incrementBy', payload: 10})   // Extra data needed to add
// // console.log(reduxState)
// // reduxState = reducer(reduxState, {type: 'post/incrementBy', payload: 15})   // Extra data needed to add
// // console.log(reduxState)
// // reduxState = reducer(reduxState, {type: 'post/incrementBy', payload: 7})    // Extra data needed to add
// // console.log(reduxState)
// //Reducer function reduces the state into a single value.
// //Here above lines of code we have seen repetitive code for updating state management. 
// //It helps you manage global state by providing a state management mechanism for JavaScript applications 
// //that require state management and state management functions in Redux and provide 
// //the ability to manage state management for JavaScript applications. 
// //TOPIC: Redux
// //We will install Redux & parcel (Globally)
// //npm init -y (simple npm project gets created by this command)
// //npm install -g parcel (parcel project gets created by this command)
// //parcel what it does?
// // It collects all the files in a bundle and starts a server.
// // So we can work in a different different files
// //npx parcel index.html
// //npm i redux (we could have installed it earlier but we couldn't use it by importing, If we try to import it didn't get imported. Normal JS don't know node modules)
// // import { createStore } from 'redux';  //We can use this only for learning purpose
// // console.log(createStore)  //This is deprecated. we see some function of createStore
// //createStore is a function that takes a reducer function as an argument and returns a store object.
// //The store object has methods like getState(), dispatch(), subscribe(), and unsubscribe() that can be used
// //to interact with the store.
// // to see more create like object methods we use 
// // console.dir(createStore)  //createStore() is a function
// // createStore()  //We call it normally without console. Uncaught Error: Expected the root reducer to be a function. Instead, received: 'undefined'
// // import { createStore } from 'redux';
// // const initialState = {
// //     ID: 0,
// //     name: "Aamir",
// //     age: 28,
// //     city: "Hyderabad"
// // }
// // function reducer(state = initialState, action) {
// //     if(action.type === 'post/increment') {
// //         return {...state, ID: state.ID + 1};
// //     } else if(action.type === 'post/decrement') {
// //         return {...state, ID: state.ID - 1};
// //     } else if(action.type === 'post/incrementBy') {
// //         return {...state, ID: state.ID + action.payload}
// //     }
// //     return state;
// // }
// // const store = createStore(reducer)  //created store. if we use only store it shows. Uncaught ReferenceError: createStore is not defined
// // console.log(store)
// // console.log(store.getState());  //we get updated state.
// // redux use reducer in behind the scene like shown below:
// // reducer({currentStateValue}, {action})
// // Then how do we update the state ?
// //If we have to call the reducer, we call dispatch(behind the scene dispatch will call the reducer)
// //How do we call dispatch?
// // store.dispatch()
// //who want reducer, action needs reducer. We can't call the reducer directly. In store we don't get reducer directly.
// //Through dispatch we call reducer. in dispatch only we have to pass action parameter. 
// //Like: dispatch(action) action must be plain obj
// // store.dispatch({type: 'post/increment'})  //We have to pass action as a plain object.
// // store.dispatch({type: 'testing the dispatch for reducer'})
// // store.dispatch({type: 'post/increment'})  //action dispatch: using obj j{type: 'post/increment'} is action type for reducer action increment request.
// // console.log(store.getState())
// // store.dispatch({type: 'post/decrement'})
// // console.log(store.getState())
// //Whenever state changes, automatically we should know what solution.
// //Now to solve the problem of calling multiple times console.
// //log for checking the output this subscribe method will be useful (How ?).
// // store.subscribe(() => {  //using callback function
// //     console.log(store.getState())    //to get the state we use getState() function
// // })
// import { createStore } from 'redux'
// const idCountElement = document.querySelector('.id-count')
// const initialState = {    //This is a state
//     id: 0,
//     name: 'subscribe',
//     age: 29,
//     city: 'Delhi'
// }
// //this is a convention it is a best practice to do.
// //in action type it is like to keep your convention name in complete capital letters like shown below.
// //When we use only Redux. Then we can/ have to keep this convention in different file. Just to create a single store.
// const INCREMENT = 'id/INCREMENT'
// const DECREMENT = 'id/DECREMENT'
// const INCREASED_BY = 'id/INCREASED_BY'
// const DECREASED_BY = 'id/DECREASED_BY'
// //writing in if else statements:
// // function reducer(state= initialState, action) {
// //     if(action.type === INCREMENT) {
// //         return{...state, id: state.id + 1}
// //     } else if(action.type === DECREMENT) {
// //         return{...state, id: state.id - 1}
// //     } else if(action.type === INCREASED_BY) {
// //         return{...state, id: state.id + action.payload}
// //     } else if(action.type === DECREASED_BY) {
// //         return{...state, id: state.id - action.payload}
// //     }
// // }
// //writing in switch case: Traditionally it is likely to create using switch case. & This is how it was written.
// //In redux tool kit we can use without switch case.
// function reducer(state = initialState, action) {
//     switch(action.type) {
//         case INCREMENT:
//             return{...state, id: state.id + 1}
//         case DECREMENT:
//             return{...state, id: state.id - 1}
//         case INCREASED_BY:
//             return{...state, id: state.id + action.payload}
//         case DECREASED_BY:
//             return{...state, id: state.id - action.payload}
//         default: 
//             return state;
//     }
// }
// //we can also write it in a single line like this
// // return state.id + 1
// // return state.id - 1
// // return state.id + action.payload  
// // const store = createStore(reducer)
// // const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__())  
// //if we use where we don't have any redux devtool extension then we will get error.
// //how to fix from rendering error where there is no redux devtool extension? By using option chaining.
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ?.())  //created state, this is for devtools
// const myStore = myCreateStore(reducer);  //self created store. which don't support dev tools. as it is a simple redux store
// //Here we have used option chaining. In JS ES6 we find option chaining.
// //window.__REDUX_DEVTOOLS_EXTENSION__ ?.() It is called store enhancer. middle ware is also known as store enhancer, we have to pass.
// //window.__REDUX_DEVTOOLS_EXTENSION__ ?.() In redux dev tools we don't need to use this option
// console.log(store)
// console.log(myStore)
// const unsubscribe1 = myStore.subscribe(() => {   //we can use subscribe() method multiple times. 
//     //with every different use of function(it is a listener) we can do different things working. 
//     //Can pass multiple functions(listener). We can store this function somewhere
//     console.log(myStore.getState())   //we get store value from getState(). If it is commented the data/values of the function(listener) in the console will not be shown.
//     idCountElement.innerHTML = myStore.getState().id
// })
// const unsubscribe2 = myStore.subscribe(() => {    //this function stored in listener [] of my-redux code file
//     console.log("I have created my own Redux Store, Which works similar to a normal Redux Store")
// });
// const unsubscribe3 = myStore.subscribe(() => {    //this function stored in listener [] of my-redux code file
//     console.log("This is how we can use subscribe() method multiple times")
// });
// idCountElement.innerHTML = myStore.getState().id   //from myStore we are accessing id() for assigning
// //changed from store(imported) to myStore(self created);
// myStore.dispatch({type: INCREMENT})   //dispatch starting from here.
// unsubscribe1()  //Uncaught TypeError: unsubscribe1 is not a function. so let's return a function from my-redux code file
// unsubscribe2()
// // console.log(myStore.getState())   //we get store value from getState()
// myStore.dispatch({type: DECREMENT})
// // console.log(myStore.getState())   //we get store value from getState()
// // store.dispatch({type: INCREMENT, payload: 1})
// // console.log(myStore.getState())   //we get store value from getState()
// // store.dispatch({type: DECREMENT})
// // console.log(myStore.getState())   //we get store value from getState()
// myStore.dispatch({type: INCREASED_BY, payload:10})
// // console.log(myStore.getState())   //we get store value from getState()
// myStore.dispatch({type: DECREASED_BY, payload:5})
// // console.log(myStore.getState())   //we get store value from getState()
// //In console (redux) we see mainly inspector & chart
// // we can try with other examples: like setTimeout
// // setTimeout(() => {
// //     store.dispatch({type: DECREMENT})
// // }, 2000);
// idCountElement.addEventListener('click', () => {
//     myStore.dispatch({type: INCREMENT})
// })
// //like id we can also make changes with name & other attributes
// //This above was the practical example of how we use REDUX in JavaScript Application

},{}]},["dm4SN","6rimH"], "6rimH", "parcelRequire94c2")

//# sourceMappingURL=index.8cfc62b9.js.map
