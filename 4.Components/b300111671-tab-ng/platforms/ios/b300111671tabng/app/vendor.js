(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["vendor"],{

/***/ "../node_modules/nativescript-dev-webpack/hmr/hmr-update.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hot = __webpack_require__("../node_modules/nativescript-dev-webpack/hot.js");
const file_system_1 = __webpack_require__("tns-core-modules/file-system");
function hmrUpdate() {
    const currentAppFolder = file_system_1.knownFolders.currentApp();
    const latestHash = __webpack_require__["h"]();
    return hot(latestHash, filename => {
        const fullFilePath = file_system_1.path.join(currentAppFolder.path, filename);
        return file_system_1.File.exists(fullFilePath) ? currentAppFolder.getFile(filename) : null;
    });
}
exports.hmrUpdate = hmrUpdate;
//# sourceMappingURL=hmr-update.js.map

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/hmr/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hmr_update_1 = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/hmr-update.js");
exports.hmrUpdate = hmr_update_1.hmrUpdate;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/hot.js":
/***/ (function(module, exports, __webpack_require__) {

const hmrPrefix = 'HMR:';
const log = {
    info: (message) => console.info(`${hmrPrefix} ${message}`),
    warn: (message) => console.warn(`${hmrPrefix} ${message}`),
    error: (message) => console.error(`${hmrPrefix} ${message}`),
};
const refresh = 'Application needs to be restarted in order to apply the changes.';
const hotOptions = {
    ignoreUnaccepted: false,
    ignoreDeclined: false,
    ignoreErrored: false,
    onUnaccepted(data) {
        const chain = [].concat(data.chain);
        const last = chain[chain.length - 1];

        if (last === 0) {
            chain.pop();
        }

        log.warn(`Ignored an update to unaccepted module: `);
        chain.forEach(mod => log.warn(`         ➭ ${mod}`));
    },
    onDeclined(data) {
        log.warn(`Ignored an update to declined module:`);
        data.chain.forEach(mod => log.warn(`         ➭ ${mod}`));
    },
    onErrored(data) {
        log.warn(
            `Ignored an error while updating module ${data.moduleId} <${data.type}>`
        );
        log.warn(data.error);
    },
};

let nextHash;
let currentHash;

function upToDate() {
    return nextHash.indexOf(__webpack_require__.h()) >= 0;
}

function result(modules, appliedModules) {
    const unaccepted = modules.filter(
        (moduleId) => appliedModules && appliedModules.indexOf(moduleId) < 0
    );

    if (unaccepted.length > 0) {
        log.warn('The following modules could not be updated:');

        for (const moduleId of unaccepted) {
            log.warn(`          ⦻ ${moduleId}`);
        }
    }

    if (!(appliedModules || []).length) {
        log.info('No Modules Updated.');
    } else {
        log.info('The following modules were updated:');

        for (const moduleId of appliedModules) {
            log.info(`         ↻ ${moduleId}`);
        }

        const numberIds = appliedModules.every(
            (moduleId) => typeof moduleId === 'number'
        );
        if (numberIds) {
            log.info(
                'Please consider using the NamedModulesPlugin for module names.'
            );
        }
    }
}

function check(options) {
    return module.hot
        .check()
        .then((modules) => {
            if (!modules) {
                log.warn(
                    `Cannot find update. ${refresh}`
                );
                return null;
            }

            return module.hot
                .apply(hotOptions)
                .then((appliedModules) => {
                    let nextCheck;
                    if (!upToDate()) {
                        nextCheck = check(options);
                    }

                    result(modules, appliedModules);

                    if (upToDate()) {
                        // Do not modify message - CLI depends on this exact content to determine hmr operation status.
                        log.info(`Successfully applied update with hmr hash ${currentHash}. App is up to date.`);
                    }

                    return nextCheck || null;
                })
                .catch((err) => {
                    const status = module.hot.status();
                    if (['abort', 'fail'].indexOf(status) >= 0) {
                        // Do not modify message - CLI depends on this exact content to determine hmr operation status.
                        log.error(`Cannot apply update with hmr hash ${currentHash}.`);
                        log.error(err.message || err.stack);
                    } else {
                        log.error(`Update failed: ${err.message || err.stack}`);
                    }
                });
        })
        .catch((err) => {
            const status = module.hot.status();
            if (['abort', 'fail'].indexOf(status) >= 0) {
                log.error(`Cannot check for update. ${refresh}`);
                log.error(err.message || err.stack);
            } else {
                log.error(`Update check failed: ${err.message || err.stack}`);
            }
        });
}

if (true) {
    log.info('Hot Module Replacement Enabled. Waiting for signal.');
} else {}

function update(latestHash, options) {
    nextHash = latestHash;
    if (!upToDate()) {
        const status = module.hot.status();

        if (status === 'idle') {
            //Do not modify message - CLI depends on this exact content to determine hmr operation status.
            log.info(`Checking for updates to the bundle with hmr hash ${currentHash}.`);
            return check(options);
        } else if (['abort', 'fail'].indexOf(status) >= 0) {
            log.warn(
                `Cannot apply update. A previous update ${status}ed. ${refresh}`
            );
        }
    }
};

function getNextHash(hash, getFileContent) {
    const file = getFileContent(`${hash}.hot-update.json`);
    if (!file) {
        return Promise.resolve(hash);
    }

    return file.readText().then(hotUpdateContent => {
        if (hotUpdateContent) {
            const manifest = JSON.parse(hotUpdateContent);
            const newHash = manifest.h;
            return getNextHash(newHash, getFileContent);
        } else {
            return Promise.resolve(hash);
        }
    }).catch(error => Promise.reject(error));
}

module.exports = function checkState(initialHash, getFileContent) {
    currentHash = initialHash;
    return getNextHash(initialHash, getFileContent).then(nextHash => {
        if (nextHash != initialHash) {
            return update(nextHash, {});
        }
    })
}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/load-application-css-angular.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const loadCss = __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css.js");

module.exports = function() {
    loadCss(function() {
        global.registerModule("./app.css", () => __webpack_require__("./app.scss"));
        global.registerModule("app.css", () => __webpack_require__("./app.scss"));
    });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/load-application-css.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (loadModuleFn) {
    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    loadModuleFn();

    application.loadAppCss();
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXIvaG1yLXVwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG90LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLWFuZ3VsYXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svbG9hZC1hcHBsaWNhdGlvbi1jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLGlEQUFRO0FBQzVCLHNCQUFzQixtQkFBTyxDQUFDLDhCQUE4QjtBQUM1RDtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDOzs7Ozs7OztBQ2JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsNERBQWM7QUFDekM7QUFDQSxpQzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQSx1Q0FBdUMsVUFBVSxHQUFHLFFBQVE7QUFDNUQsdUNBQXVDLFVBQVUsR0FBRyxRQUFRO0FBQzVELHlDQUF5QyxVQUFVLEdBQUcsUUFBUTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELElBQUk7QUFDeEQsS0FBSztBQUNMO0FBQ0E7QUFDQSx5REFBeUQsSUFBSTtBQUM3RCxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNEQUFzRCxjQUFjLElBQUksVUFBVTtBQUNsRjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsdUJBQWdCO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxtQ0FBbUMsU0FBUztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhFQUE4RSxZQUFZO0FBQzFGOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLFlBQVk7QUFDbkY7QUFDQSxxQkFBcUI7QUFDckIsb0RBQW9ELHlCQUF5QjtBQUM3RTtBQUNBLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFFBQVE7QUFDOUQ7QUFDQSxhQUFhO0FBQ2Isa0RBQWtELHlCQUF5QjtBQUMzRTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxJQUFJLElBQVU7QUFDZDtBQUNBLENBQUMsTUFBTSxFQUVOOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUsWUFBWTtBQUNyRjtBQUNBLFNBQVM7QUFDVDtBQUNBLDBEQUEwRCxPQUFPLE1BQU0sUUFBUTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxLQUFLO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O0FDM0tBLDhEQUFnQixtQkFBTyxDQUFDLGtFQUF3Qjs7QUFFaEQ7QUFDQTtBQUNBLGlEQUFpRCxtQkFBTyxDQUFDLFlBQU87QUFDaEUsK0NBQStDLG1CQUFPLENBQUMsWUFBTztBQUM5RCxLQUFLO0FBQ0w7Ozs7Ozs7OztBQ1BBO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsOEJBQThCO0FBQzlELElBQUksbUJBQU8sQ0FBQyx5Q0FBeUM7O0FBRXJEOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDUEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6InZlbmRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaG90ID0gcmVxdWlyZShcIi4uL2hvdFwiKTtcbmNvbnN0IGZpbGVfc3lzdGVtXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTtcbmZ1bmN0aW9uIGhtclVwZGF0ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50QXBwRm9sZGVyID0gZmlsZV9zeXN0ZW1fMS5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpO1xuICAgIGNvbnN0IGxhdGVzdEhhc2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fW1wiaFwiXSgpO1xuICAgIHJldHVybiBob3QobGF0ZXN0SGFzaCwgZmlsZW5hbWUgPT4ge1xuICAgICAgICBjb25zdCBmdWxsRmlsZVBhdGggPSBmaWxlX3N5c3RlbV8xLnBhdGguam9pbihjdXJyZW50QXBwRm9sZGVyLnBhdGgsIGZpbGVuYW1lKTtcbiAgICAgICAgcmV0dXJuIGZpbGVfc3lzdGVtXzEuRmlsZS5leGlzdHMoZnVsbEZpbGVQYXRoKSA/IGN1cnJlbnRBcHBGb2xkZXIuZ2V0RmlsZShmaWxlbmFtZSkgOiBudWxsO1xuICAgIH0pO1xufVxuZXhwb3J0cy5obXJVcGRhdGUgPSBobXJVcGRhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1obXItdXBkYXRlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGhtcl91cGRhdGVfMSA9IHJlcXVpcmUoXCIuL2htci11cGRhdGVcIik7XG5leHBvcnRzLmhtclVwZGF0ZSA9IGhtcl91cGRhdGVfMS5obXJVcGRhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJjb25zdCBobXJQcmVmaXggPSAnSE1SOic7XG5jb25zdCBsb2cgPSB7XG4gICAgaW5mbzogKG1lc3NhZ2UpID0+IGNvbnNvbGUuaW5mbyhgJHtobXJQcmVmaXh9ICR7bWVzc2FnZX1gKSxcbiAgICB3YXJuOiAobWVzc2FnZSkgPT4gY29uc29sZS53YXJuKGAke2htclByZWZpeH0gJHttZXNzYWdlfWApLFxuICAgIGVycm9yOiAobWVzc2FnZSkgPT4gY29uc29sZS5lcnJvcihgJHtobXJQcmVmaXh9ICR7bWVzc2FnZX1gKSxcbn07XG5jb25zdCByZWZyZXNoID0gJ0FwcGxpY2F0aW9uIG5lZWRzIHRvIGJlIHJlc3RhcnRlZCBpbiBvcmRlciB0byBhcHBseSB0aGUgY2hhbmdlcy4nO1xuY29uc3QgaG90T3B0aW9ucyA9IHtcbiAgICBpZ25vcmVVbmFjY2VwdGVkOiBmYWxzZSxcbiAgICBpZ25vcmVEZWNsaW5lZDogZmFsc2UsXG4gICAgaWdub3JlRXJyb3JlZDogZmFsc2UsXG4gICAgb25VbmFjY2VwdGVkKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2hhaW4gPSBbXS5jb25jYXQoZGF0YS5jaGFpbik7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBjaGFpbltjaGFpbi5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAobGFzdCA9PT0gMCkge1xuICAgICAgICAgICAgY2hhaW4ucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cud2FybihgSWdub3JlZCBhbiB1cGRhdGUgdG8gdW5hY2NlcHRlZCBtb2R1bGU6IGApO1xuICAgICAgICBjaGFpbi5mb3JFYWNoKG1vZCA9PiBsb2cud2FybihgICAgICAgICAg4p6tICR7bW9kfWApKTtcbiAgICB9LFxuICAgIG9uRGVjbGluZWQoZGF0YSkge1xuICAgICAgICBsb2cud2FybihgSWdub3JlZCBhbiB1cGRhdGUgdG8gZGVjbGluZWQgbW9kdWxlOmApO1xuICAgICAgICBkYXRhLmNoYWluLmZvckVhY2gobW9kID0+IGxvZy53YXJuKGAgICAgICAgICDinq0gJHttb2R9YCkpO1xuICAgIH0sXG4gICAgb25FcnJvcmVkKGRhdGEpIHtcbiAgICAgICAgbG9nLndhcm4oXG4gICAgICAgICAgICBgSWdub3JlZCBhbiBlcnJvciB3aGlsZSB1cGRhdGluZyBtb2R1bGUgJHtkYXRhLm1vZHVsZUlkfSA8JHtkYXRhLnR5cGV9PmBcbiAgICAgICAgKTtcbiAgICAgICAgbG9nLndhcm4oZGF0YS5lcnJvcik7XG4gICAgfSxcbn07XG5cbmxldCBuZXh0SGFzaDtcbmxldCBjdXJyZW50SGFzaDtcblxuZnVuY3Rpb24gdXBUb0RhdGUoKSB7XG4gICAgcmV0dXJuIG5leHRIYXNoLmluZGV4T2YoX193ZWJwYWNrX2hhc2hfXykgPj0gMDtcbn1cblxuZnVuY3Rpb24gcmVzdWx0KG1vZHVsZXMsIGFwcGxpZWRNb2R1bGVzKSB7XG4gICAgY29uc3QgdW5hY2NlcHRlZCA9IG1vZHVsZXMuZmlsdGVyKFxuICAgICAgICAobW9kdWxlSWQpID0+IGFwcGxpZWRNb2R1bGVzICYmIGFwcGxpZWRNb2R1bGVzLmluZGV4T2YobW9kdWxlSWQpIDwgMFxuICAgICk7XG5cbiAgICBpZiAodW5hY2NlcHRlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxvZy53YXJuKCdUaGUgZm9sbG93aW5nIG1vZHVsZXMgY291bGQgbm90IGJlIHVwZGF0ZWQ6Jyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGVJZCBvZiB1bmFjY2VwdGVkKSB7XG4gICAgICAgICAgICBsb2cud2FybihgICAgICAgICAgIOKmuyAke21vZHVsZUlkfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEoYXBwbGllZE1vZHVsZXMgfHwgW10pLmxlbmd0aCkge1xuICAgICAgICBsb2cuaW5mbygnTm8gTW9kdWxlcyBVcGRhdGVkLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZy5pbmZvKCdUaGUgZm9sbG93aW5nIG1vZHVsZXMgd2VyZSB1cGRhdGVkOicpO1xuXG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlSWQgb2YgYXBwbGllZE1vZHVsZXMpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKGAgICAgICAgICDihrsgJHttb2R1bGVJZH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG51bWJlcklkcyA9IGFwcGxpZWRNb2R1bGVzLmV2ZXJ5KFxuICAgICAgICAgICAgKG1vZHVsZUlkKSA9PiB0eXBlb2YgbW9kdWxlSWQgPT09ICdudW1iZXInXG4gICAgICAgICk7XG4gICAgICAgIGlmIChudW1iZXJJZHMpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFxuICAgICAgICAgICAgICAgICdQbGVhc2UgY29uc2lkZXIgdXNpbmcgdGhlIE5hbWVkTW9kdWxlc1BsdWdpbiBmb3IgbW9kdWxlIG5hbWVzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbW9kdWxlLmhvdFxuICAgICAgICAuY2hlY2soKVxuICAgICAgICAudGhlbigobW9kdWxlcykgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm4oXG4gICAgICAgICAgICAgICAgICAgIGBDYW5ub3QgZmluZCB1cGRhdGUuICR7cmVmcmVzaH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1vZHVsZS5ob3RcbiAgICAgICAgICAgICAgICAuYXBwbHkoaG90T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigoYXBwbGllZE1vZHVsZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRDaGVjaztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1cFRvRGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Q2hlY2sgPSBjaGVjayhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdChtb2R1bGVzLCBhcHBsaWVkTW9kdWxlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVwVG9EYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBtb2RpZnkgbWVzc2FnZSAtIENMSSBkZXBlbmRzIG9uIHRoaXMgZXhhY3QgY29udGVudCB0byBkZXRlcm1pbmUgaG1yIG9wZXJhdGlvbiBzdGF0dXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhgU3VjY2Vzc2Z1bGx5IGFwcGxpZWQgdXBkYXRlIHdpdGggaG1yIGhhc2ggJHtjdXJyZW50SGFzaH0uIEFwcCBpcyB1cCB0byBkYXRlLmApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHRDaGVjayB8fCBudWxsO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gbW9kdWxlLmhvdC5zdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFsnYWJvcnQnLCAnZmFpbCddLmluZGV4T2Yoc3RhdHVzKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgbW9kaWZ5IG1lc3NhZ2UgLSBDTEkgZGVwZW5kcyBvbiB0aGlzIGV4YWN0IGNvbnRlbnQgdG8gZGV0ZXJtaW5lIGhtciBvcGVyYXRpb24gc3RhdHVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDYW5ub3QgYXBwbHkgdXBkYXRlIHdpdGggaG1yIGhhc2ggJHtjdXJyZW50SGFzaH0uYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyLnN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgVXBkYXRlIGZhaWxlZDogJHtlcnIubWVzc2FnZSB8fCBlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG4gICAgICAgICAgICBpZiAoWydhYm9ydCcsICdmYWlsJ10uaW5kZXhPZihzdGF0dXMpID49IDApIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYENhbm5vdCBjaGVjayBmb3IgdXBkYXRlLiAke3JlZnJlc2h9YCk7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKGVyci5tZXNzYWdlIHx8IGVyci5zdGFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgVXBkYXRlIGNoZWNrIGZhaWxlZDogJHtlcnIubWVzc2FnZSB8fCBlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIGxvZy5pbmZvKCdIb3QgTW9kdWxlIFJlcGxhY2VtZW50IEVuYWJsZWQuIFdhaXRpbmcgZm9yIHNpZ25hbC4nKTtcbn0gZWxzZSB7XG4gICAgbG9nLmVycm9yKCdIb3QgTW9kdWxlIFJlcGxhY2VtZW50IGlzIGRpc2FibGVkLicpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUobGF0ZXN0SGFzaCwgb3B0aW9ucykge1xuICAgIG5leHRIYXNoID0gbGF0ZXN0SGFzaDtcbiAgICBpZiAoIXVwVG9EYXRlKCkpIHtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbW9kdWxlLmhvdC5zdGF0dXMoKTtcblxuICAgICAgICBpZiAoc3RhdHVzID09PSAnaWRsZScpIHtcbiAgICAgICAgICAgIC8vRG8gbm90IG1vZGlmeSBtZXNzYWdlIC0gQ0xJIGRlcGVuZHMgb24gdGhpcyBleGFjdCBjb250ZW50IHRvIGRldGVybWluZSBobXIgb3BlcmF0aW9uIHN0YXR1cy5cbiAgICAgICAgICAgIGxvZy5pbmZvKGBDaGVja2luZyBmb3IgdXBkYXRlcyB0byB0aGUgYnVuZGxlIHdpdGggaG1yIGhhc2ggJHtjdXJyZW50SGFzaH0uYCk7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2sob3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSBpZiAoWydhYm9ydCcsICdmYWlsJ10uaW5kZXhPZihzdGF0dXMpID49IDApIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFxuICAgICAgICAgICAgICAgIGBDYW5ub3QgYXBwbHkgdXBkYXRlLiBBIHByZXZpb3VzIHVwZGF0ZSAke3N0YXR1c31lZC4gJHtyZWZyZXNofWBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBnZXROZXh0SGFzaChoYXNoLCBnZXRGaWxlQ29udGVudCkge1xuICAgIGNvbnN0IGZpbGUgPSBnZXRGaWxlQ29udGVudChgJHtoYXNofS5ob3QtdXBkYXRlLmpzb25gKTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZS5yZWFkVGV4dCgpLnRoZW4oaG90VXBkYXRlQ29udGVudCA9PiB7XG4gICAgICAgIGlmIChob3RVcGRhdGVDb250ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBtYW5pZmVzdCA9IEpTT04ucGFyc2UoaG90VXBkYXRlQ29udGVudCk7XG4gICAgICAgICAgICBjb25zdCBuZXdIYXNoID0gbWFuaWZlc3QuaDtcbiAgICAgICAgICAgIHJldHVybiBnZXROZXh0SGFzaChuZXdIYXNoLCBnZXRGaWxlQ29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGhhc2gpO1xuICAgICAgICB9XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gUHJvbWlzZS5yZWplY3QoZXJyb3IpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjaGVja1N0YXRlKGluaXRpYWxIYXNoLCBnZXRGaWxlQ29udGVudCkge1xuICAgIGN1cnJlbnRIYXNoID0gaW5pdGlhbEhhc2g7XG4gICAgcmV0dXJuIGdldE5leHRIYXNoKGluaXRpYWxIYXNoLCBnZXRGaWxlQ29udGVudCkudGhlbihuZXh0SGFzaCA9PiB7XG4gICAgICAgIGlmIChuZXh0SGFzaCAhPSBpbml0aWFsSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZShuZXh0SGFzaCwge30pO1xuICAgICAgICB9XG4gICAgfSlcbn1cbiIsImNvbnN0IGxvYWRDc3MgPSByZXF1aXJlKFwiLi9sb2FkLWFwcGxpY2F0aW9uLWNzc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICBsb2FkQ3NzKGZ1bmN0aW9uKCkge1xuICAgICAgICBnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCIuL2FwcC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIn4vYXBwXCIpKTtcbiAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiYXBwLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwifi9hcHBcIikpO1xuICAgIH0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobG9hZE1vZHVsZUZuKSB7XG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgbG9hZE1vZHVsZUZuKCk7XG5cbiAgICBhcHBsaWNhdGlvbi5sb2FkQXBwQ3NzKCk7XG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9