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

/***/ "../node_modules/nativescript-exoplayer/subtitle-source/subtitle-source-common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils = __webpack_require__("../node_modules/tns-core-modules/utils/utils.js");
var definition = __webpack_require__("../node_modules/nativescript-exoplayer/subtitle-source/subtitle-source.js");
function fromResource(name) {
    var video = new definition.SubtitleSource();
    return video.loadFromResource(name) ? video : null;
}
exports.fromResource = fromResource;
function fromFile(path) {
    var video = new definition.SubtitleSource();
    return video.loadFromFile(path) ? video : null;
}
exports.fromFile = fromFile;
function fromUrl(url) {
    var video = new definition.SubtitleSource();
    return video.loadFromUrl(url) ? video : null;
}
exports.fromUrl = fromUrl;
function fromFileOrResource(path) {
    if (!isFileOrResourcePath(path)) {
        throw new Error("Path \"" + "\" is not a valid file or resource.");
    }
    if (path.indexOf(utils.RESOURCE_PREFIX) === 0) {
        return fromResource(path.substr(utils.RESOURCE_PREFIX.length));
    }
    return fromFile(path);
}
exports.fromFileOrResource = fromFileOrResource;
function isFileOrResourcePath(path) {
    return utils.isFileOrResourcePath(path);
}
exports.isFileOrResourcePath = isFileOrResourcePath;


/***/ }),

/***/ "../node_modules/nativescript-exoplayer/subtitle-source/subtitle-source.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var types = __webpack_require__("../node_modules/tns-core-modules/utils/types.js");
var fs = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
var common = __webpack_require__("../node_modules/nativescript-exoplayer/subtitle-source/subtitle-source-common.js");
global.moduleMerge(common, exports);
var SubtitleSource = (function () {
    function SubtitleSource() {
    }
    SubtitleSource.prototype.loadFromResource = function (name) {
        var subtitleUrl = NSBundle.mainBundle().URLForResourceWithExtension(name, null);
        var subtitles = NSString.stringWithContentsOfURLEncodingError(subtitleUrl, NSUTF8StringEncoding, null);
        this.ios = subtitles;
        return this.ios != null;
    };
    SubtitleSource.prototype.loadFromFile = function (path) {
        var fileName = types.isString(path) ? path.trim() : "";
        if (fileName.indexOf("~/") === 0) {
            fileName = fs.path.join(fs.knownFolders.currentApp().path, fileName.replace("~/", ""));
        }
        var subtitleUrl = NSURL.fileURLWithPath(fileName);
        var subtitles = NSString.stringWithContentsOfURLEncodingError(subtitleUrl, NSUTF8StringEncoding, null);
        this.ios = subtitles;
        return this.ios != null;
    };
    SubtitleSource.prototype.loadFromUrl = function (url) {
        var subtitleUrl = NSURL.URLWithString(url);
        var subtitles = NSString.stringWithContentsOfURLEncodingError(subtitleUrl, NSUTF8StringEncoding, null);
        this.ios = subtitles;
        return this.ios != null;
    };
    return SubtitleSource;
}());
exports.SubtitleSource = SubtitleSource;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-exoplayer/video-source/video-source-common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils = __webpack_require__("../node_modules/tns-core-modules/utils/utils.js");
var definition = __webpack_require__("../node_modules/nativescript-exoplayer/video-source/video-source.js");
function fromResource(name) {
    var video = new definition.VideoSource();
    return video.loadFromResource(name) ? video : null;
}
exports.fromResource = fromResource;
function fromFile(path) {
    var video = new definition.VideoSource();
    return video.loadFromFile(path) ? video : null;
}
exports.fromFile = fromFile;
function fromNativeSource(source) {
    var video = new definition.VideoSource();
    return video.setNativeSource(source) ? video : null;
}
exports.fromNativeSource = fromNativeSource;
function fromUrl(url) {
    var video = new definition.VideoSource();
    return video.loadFromUrl(url) ? video : null;
}
exports.fromUrl = fromUrl;
function fromFileOrResource(path) {
    if (!isFileOrResourcePath(path)) {
        throw new Error("Path \"" + "\" is not a valid file or resource.");
    }
    if (path.indexOf(utils.RESOURCE_PREFIX) === 0) {
        return fromResource(path.substr(utils.RESOURCE_PREFIX.length));
    }
    return fromFile(path);
}
exports.fromFileOrResource = fromFileOrResource;
function isFileOrResourcePath(path) {
    return utils.isFileOrResourcePath(path);
}
exports.isFileOrResourcePath = isFileOrResourcePath;


/***/ }),

/***/ "../node_modules/nativescript-exoplayer/video-source/video-source.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var types = __webpack_require__("../node_modules/tns-core-modules/utils/types.js");
var fs = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
var common = __webpack_require__("../node_modules/nativescript-exoplayer/video-source/video-source-common.js");
global.moduleMerge(common, exports);
var VideoSource = (function () {
    function VideoSource() {
    }
    VideoSource.prototype.loadFromResource = function (name) {
        var videoURL = NSBundle.mainBundle().URLForResourceWithExtension(name, null);
        var player = new AVPlayerItem(videoURL);
        this.ios = player;
        return this.ios != null;
    };
    VideoSource.prototype.loadFromFile = function (path) {
        var fileName = types.isString(path) ? path.trim() : "";
        if (fileName.indexOf("~/") === 0) {
            fileName = fs.path.join(fs.knownFolders.currentApp().path, fileName.replace("~/", ""));
        }
        var videoURL = NSURL.fileURLWithPath(fileName);
        var player = new AVPlayerItem(videoURL);
        this.ios = player;
        return this.ios != null;
    };
    VideoSource.prototype.loadFromUrl = function (url) {
        var videoURL = NSURL.URLWithString(url);
        var player = new AVPlayerItem(videoURL);
        this.ios = player;
        return this.ios != null;
    };
    VideoSource.prototype.setNativeSource = function (source) {
        this.ios = source;
        return source != null;
    };
    return VideoSource;
}());
exports.VideoSource = VideoSource;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-exoplayer/videoplayer-common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var videoSource = __webpack_require__("../node_modules/nativescript-exoplayer/video-source/video-source.js");
var subtitleSource = __webpack_require__("../node_modules/nativescript-exoplayer/subtitle-source/subtitle-source.js");
var utils_1 = __webpack_require__("tns-core-modules/utils/utils");
var types_1 = __webpack_require__("tns-core-modules/utils/types");
var view_1 = __webpack_require__("tns-core-modules/ui/core/view");
var imageSource = __webpack_require__("tns-core-modules/image-source");
function onSrcPropertyChanged(view, oldValue, newValue) {
    var video = view;
    var value = newValue;
    if (types_1.isString(value)) {
        value = value.trim();
        video.videoSource = null;
        video["_url"] = value;
        video.isLoadingProperty = true;
        if (utils_1.isFileOrResourcePath(value)) {
            video.videoSource = videoSource.fromFileOrResource(value);
            video.isLoadingProperty = false;
        }
        else {
            if (video["_url"] === value) {
                video.videoSource = videoSource.fromUrl(value);
                video.isLoadingProperty = false;
            }
        }
    }
    else if (value instanceof videoSource.VideoSource) {
        video.videoSource = value;
    }
    else {
        video.videoSource = videoSource.fromNativeSource(value);
    }
}
function onSubtitlesPropertyChanged(view, oldValue, newValue) {
    var video = view;
    if (types_1.isString(newValue)) {
        var value = newValue.trim();
        video.subtitleSource = null;
        if (utils_1.isFileOrResourcePath(value)) {
            video.subtitleSource = subtitleSource.fromFileOrResource(value);
        }
        else {
            video.subtitleSource = subtitleSource.fromUrl(value);
        }
    }
}
function onImgSrcPropertyChanged(view, oldValue, newValue) {
    var video = view;
    var value = newValue;
    if (types_1.isString(value)) {
        value = value.trim();
        video["_url"] = value;
        video.isLoadingProperty = true;
        if (utils_1.isFileOrResourcePath(value)) {
            video.imageSource = imageSource.fromFileOrResource(value);
            video.isLoadingProperty = false;
        }
        else {
            if (video["_url"] === value) {
                video.imageSource = imageSource.fromUrl(value);
                video.isLoadingProperty = false;
            }
        }
    }
    else if (value instanceof imageSource.ImageSource) {
        video.imageSource = value;
    }
    else {
        video.imageSource = imageSource.fromNativeSource(value);
    }
}
var VideoFill;
(function (VideoFill) {
    VideoFill["default"] = "default";
    VideoFill["aspect"] = "aspect";
    VideoFill["aspectFill"] = "aspectFill";
})(VideoFill = exports.VideoFill || (exports.VideoFill = {}));
var Video = (function (_super) {
    __extends(Video, _super);
    function Video() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imgType = 1;
        _this.autoplay = false;
        _this.controls = true;
        _this.loop = false;
        _this.muted = false;
        _this.fill = VideoFill.default;
        return _this;
    }
    Video.finishedEvent = "finished";
    Video.playbackReadyEvent = "playbackReady";
    Video.playbackStartEvent = "playbackStart";
    Video.seekToTimeCompleteEvent = "seekToTimeComplete";
    Video.currentTimeUpdatedEvent = "currentTimeUpdated";
    Video.IMAGETYPEMONO = 1;
    Video.IMAGETYPESTEREOTOPBOTTOM = 2;
    Video.IMAGETYPESTEREOLEFTRIGHT = 3;
    return Video;
}(view_1.View));
exports.Video = Video;
exports.srcProperty = new view_1.Property({
    name: "src",
    valueChanged: onSrcPropertyChanged
});
exports.srcProperty.register(Video);
exports.imgSrcProperty = new view_1.Property({
    name: "imgSrc",
    valueChanged: onImgSrcPropertyChanged
});
exports.imgSrcProperty.register(Video);
exports.imgTypeProperty = new view_1.Property({
    name: "imgType",
});
exports.imgTypeProperty.register(Video);
exports.subtitlesProperty = new view_1.Property({
    name: "subtitles",
    valueChanged: onSubtitlesPropertyChanged
});
exports.subtitlesProperty.register(Video);
exports.subtitleSourceProperty = new view_1.Property({
    name: "subtitleSource",
});
exports.subtitleSourceProperty.register(Video);
exports.videoSourceProperty = new view_1.Property({
    name: "videoSource",
});
exports.videoSourceProperty.register(Video);
exports.imageSourceProperty = new view_1.Property({
    name: "imageSource",
});
exports.imageSourceProperty.register(Video);
exports.isLoadingProperty = new view_1.Property({
    name: "isLoading",
    valueConverter: view_1.booleanConverter,
});
exports.isLoadingProperty.register(Video);
exports.observeCurrentTimeProperty = new view_1.Property({
    name: "observeCurrentTime",
    valueConverter: view_1.booleanConverter,
});
exports.observeCurrentTimeProperty.register(Video);
exports.autoplayProperty = new view_1.Property({
    name: "autoplay",
    valueConverter: view_1.booleanConverter,
});
exports.autoplayProperty.register(Video);
exports.controlsProperty = new view_1.Property({
    name: "controls",
    valueConverter: view_1.booleanConverter,
});
exports.controlsProperty.register(Video);
exports.loopProperty = new view_1.Property({
    name: "loop",
    valueConverter: view_1.booleanConverter,
});
exports.loopProperty.register(Video);
exports.mutedProperty = new view_1.Property({
    name: "muted",
    valueConverter: view_1.booleanConverter,
});
exports.mutedProperty.register(Video);
exports.fillProperty = new view_1.Property({
    name: "fill"
});
exports.fillProperty.register(Video);


/***/ }),

/***/ "../node_modules/nativescript-exoplayer/videoplayer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = __webpack_require__("tns-core-modules/application");
var videoplayer_common_1 = __webpack_require__("../node_modules/nativescript-exoplayer/videoplayer-common.js");
__export(__webpack_require__("../node_modules/nativescript-exoplayer/videoplayer-common.js"));
var Video = (function (_super) {
    __extends(Video, _super);
    function Video() {
        var _this = _super.call(this) || this;
        _this.enableSubtitles = false;
        _this._playerController = new AVPlayerViewController();
        var audioSession = AVAudioSession.sharedInstance();
        var output = audioSession.currentRoute.outputs.lastObject.portType;
        if (output.match(/Receiver/)) {
            try {
                audioSession.setCategoryError(AVAudioSessionCategoryPlayAndRecord);
                audioSession.overrideOutputAudioPortError(1936747378);
                audioSession.setActiveError(true);
            }
            catch (err) {
            }
        }
        _this._player = new AVPlayer();
        _this._playerController.player = _this._player;
        _this._playerController.showsPlaybackControls = false;
        _this.nativeView = _this._playerController.view;
        _this._observer = PlayerObserverClass.alloc();
        _this._observer["_owner"] = _this;
        _this._videoFinished = false;
        if (_this.enableSubtitles) {
            _this._subtitling = new ASBPlayerSubtitling();
            _this._setupSubtitleLabel();
        }
        return _this;
    }
    Object.defineProperty(Video.prototype, "ios", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    Video.prototype[videoplayer_common_1.videoSourceProperty.setNative] = function (value) {
        this._setNativeVideo(value ? value.ios : null);
    };
    Video.prototype[videoplayer_common_1.fillProperty.setNative] = function (value) {
        var videoGravity = AVLayerVideoGravityResize;
        switch (value) {
            case videoplayer_common_1.VideoFill.aspect:
                videoGravity = AVLayerVideoGravityResizeAspect;
                break;
            case videoplayer_common_1.VideoFill.aspectFill:
                videoGravity = AVLayerVideoGravityResizeAspectFill;
                break;
        }
        if (this._playerController) {
            this._playerController.videoGravity = videoGravity;
        }
    };
    Video.prototype[videoplayer_common_1.subtitleSourceProperty.setNative] = function (value) {
        this._updateSubtitles(value ? value.ios : null);
    };
    Video.prototype._setNativeVideo = function (nativeVideoPlayer) {
        if (nativeVideoPlayer != null) {
            var currentItem = this._player.currentItem;
            this._addStatusObserver(nativeVideoPlayer);
            this._autoplayCheck();
            this._videoFinished = false;
            if (currentItem !== null) {
                this._videoLoaded = false;
                this._videoPlaying = false;
                this._removeStatusObserver(currentItem);
                this._player.replaceCurrentItemWithPlayerItem(null);
                this._player.replaceCurrentItemWithPlayerItem(nativeVideoPlayer);
            }
            else {
                this._player.replaceCurrentItemWithPlayerItem(nativeVideoPlayer);
                this._init();
            }
        }
    };
    Video.prototype.updateAsset = function (nativeVideoAsset) {
        var newPlayerItem = AVPlayerItem.playerItemWithAsset(nativeVideoAsset);
        this._setNativeVideo(newPlayerItem);
    };
    Video.prototype._setNativePlayerSource = function (nativePlayerSrc) {
        this._src = nativePlayerSrc;
        var url = NSURL.URLWithString(this._src);
        this._player = new AVPlayer(url);
        this._init();
    };
    Video.prototype._init = function () {
        if (this.controls !== false) {
            this._playerController.showsPlaybackControls = true;
        }
        this._playerController.player = this._player;
        if (isNaN(this.width) || isNaN(this.height)) {
            this.requestLayout();
        }
        if (this.muted === true) {
            this._player.muted = true;
        }
        if (!this._didPlayToEndTimeActive) {
            this._didPlayToEndTimeObserver = application_1.ios.addNotificationObserver(AVPlayerItemDidPlayToEndTimeNotification, this.AVPlayerItemDidPlayToEndTimeNotification.bind(this));
            this._didPlayToEndTimeActive = true;
        }
        if (this.enableSubtitles) {
            this._subtitling.label = this._subtitleLabel;
            this._subtitling.containerView = this._subtitleLabelContainer;
            this._subtitling.player = this._player;
        }
    };
    Video.prototype._setupSubtitleLabel = function () {
        var contentOverlayView = this._playerController.contentOverlayView;
        this._subtitleLabel = new UILabel();
        this._subtitleLabelContainer = new UIView();
        contentOverlayView.addSubview(this._subtitleLabelContainer);
        this._subtitleLabelContainer.addSubview(this._subtitleLabel);
        this._subtitleLabelContainer.backgroundColor = UIColor.blackColor;
        this._subtitleLabelContainer.layer.cornerRadius = 2;
        this._subtitleLabelContainer.layer.masksToBounds = true;
        this._subtitleLabel.translatesAutoresizingMaskIntoConstraints = false;
        this._subtitleLabelContainer.translatesAutoresizingMaskIntoConstraints = false;
        var containerViewsDictionary = new NSDictionary([this._subtitleLabel], ['subtitleLabel']);
        this._subtitleLabelContainer.addConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("H:|-(5)-[subtitleLabel]-(5)-|", 0, null, containerViewsDictionary));
        this._subtitleLabelContainer.addConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("V:|-(0)-[subtitleLabel]-(0)-|", 0, null, containerViewsDictionary));
        this._subtitleLabel.textColor = UIColor.whiteColor;
        this._subtitleLabel.textAlignment = 1;
        this._subtitleLabel.lineBreakMode = 0;
        this._subtitleLabel.font = UIFont.systemFontOfSizeWeight(15, UIFontWeightRegular);
        this._subtitleLabel.numberOfLines = 0;
        this._subtitleLabel.translatesAutoresizingMaskIntoConstraints = false;
        var viewsDictionary = new NSDictionary([this._subtitleLabelContainer, contentOverlayView], ['subtitleLabelContainer', 'superview']);
        contentOverlayView.addConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("H:|-(>=20)-[subtitleLabelContainer]-(>=20)-|", 0, null, viewsDictionary));
        contentOverlayView.addConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("V:[superview]-(<=1)-[subtitleLabelContainer]", 512, null, viewsDictionary));
        contentOverlayView.addConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("V:[subtitleLabelContainer]-(20)-|", 0, null, viewsDictionary));
    };
    Video.prototype._updateSubtitles = function (subtitles) {
        if (this.enableSubtitles) {
            try {
                this._subtitling.loadSRTContentError(subtitles);
            }
            catch (e) {
                console.log("Failed to load subtitles: " + e);
            }
        }
    };
    Video.prototype.AVPlayerItemDidPlayToEndTimeNotification = function (notification) {
        if (this._player.currentItem && this._player.currentItem === notification.object) {
            this._emit(videoplayer_common_1.Video.finishedEvent);
            this._videoFinished = true;
            if (this.loop === true && this._player !== null) {
                this._player.seekToTime(CMTimeMake(5, 100));
                this._player.play();
            }
        }
    };
    Video.prototype.play = function () {
        if (this._videoFinished) {
            this._videoFinished = false;
            this.seekToTime(CMTimeMake(5, 100));
        }
        if (this.observeCurrentTime && !this._playbackTimeObserverActive) {
            this._addPlaybackTimeObserver();
        }
        this._player.play();
    };
    Video.prototype.pause = function () {
        this._player.pause();
        if (this._playbackTimeObserverActive) {
            this._removePlaybackTimeObserver();
        }
    };
    Video.prototype.mute = function (mute) {
        this._player.muted = mute;
    };
    Video.prototype.seekToTime = function (ms) {
        var _this = this;
        if (this._player.currentItem && this._player.currentItem.status === 1) {
            var seconds = ms / 1000.0;
            var time_1 = CMTimeMakeWithSeconds(seconds, this._player.currentTime().timescale);
            try {
                this._player.seekToTimeToleranceBeforeToleranceAfterCompletionHandler(time_1, kCMTimeZero, kCMTimeZero, function (isFinished) {
                    _this._emit(videoplayer_common_1.Video.seekToTimeCompleteEvent);
                });
            }
            catch (e) {
                console.error(e);
            }
        }
        else {
            console.log("AVPlayerItem cannot service a seek request with a completion handler until its status is ReadyToPlay.");
        }
    };
    Video.prototype.getDuration = function () {
        var seconds = CMTimeGetSeconds(this._player.currentItem.asset.duration);
        var milliseconds = seconds * 1000.0;
        return milliseconds;
    };
    Video.prototype.getCurrentTime = function () {
        if (this._player === null) {
            return false;
        }
        return (this._player.currentTime().value / this._player.currentTime().timescale) * 1000;
    };
    Video.prototype.setVolume = function (volume) {
        this._player.volume = volume;
    };
    Video.prototype.destroy = function () {
        this._removeStatusObserver(this._player.currentItem);
        if (this._didPlayToEndTimeActive) {
            application_1.ios.removeNotificationObserver(this._didPlayToEndTimeObserver, AVPlayerItemDidPlayToEndTimeNotification);
            this._didPlayToEndTimeActive = false;
        }
        if (this._playbackTimeObserverActive) {
            this._removePlaybackTimeObserver();
        }
        this.pause();
        this._player.replaceCurrentItemWithPlayerItem(null);
        this._playerController = null;
        this._player = null;
    };
    Video.prototype._addStatusObserver = function (currentItem) {
        this._observerActive = true;
        currentItem.addObserverForKeyPathOptionsContext(this._observer, "status", 0, null);
    };
    Video.prototype._removeStatusObserver = function (currentItem) {
        if (!this._observerActive) {
            return;
        }
        this._observerActive = false;
        if (currentItem) {
            currentItem.removeObserverForKeyPath(this._observer, "status");
        }
    };
    Video.prototype._addPlaybackTimeObserver = function () {
        var _this = this;
        this._playbackTimeObserverActive = true;
        var _interval = CMTimeMake(1, 5);
        this._playbackTimeObserver = this._player.addPeriodicTimeObserverForIntervalQueueUsingBlock(_interval, null, function (currentTime) {
            var _seconds = CMTimeGetSeconds(currentTime);
            var _milliseconds = _seconds * 1000.0;
            _this.notify({
                eventName: Video.currentTimeUpdatedEvent,
                object: _this,
                position: _milliseconds
            });
        });
    };
    Video.prototype._removePlaybackTimeObserver = function () {
        this._playbackTimeObserverActive = false;
        this._player.removeTimeObserver(this._playbackTimeObserver);
    };
    Video.prototype._autoplayCheck = function () {
        if (this.autoplay) {
            this.play();
        }
    };
    Video.prototype.playbackReady = function () {
        this._videoLoaded = true;
        this._emit(videoplayer_common_1.Video.playbackReadyEvent);
    };
    Video.prototype.playbackStart = function () {
        this._videoPlaying = true;
        this._emit(videoplayer_common_1.Video.playbackStartEvent);
    };
    return Video;
}(videoplayer_common_1.Video));
exports.Video = Video;
var PlayerObserverClass = (function (_super) {
    __extends(PlayerObserverClass, _super);
    function PlayerObserverClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerObserverClass.prototype.observeValueForKeyPathOfObjectChangeContext = function (path, obj, change, context) {
        if (path === "status") {
            if (this["_owner"]._player.currentItem.status === 1 && !this["_owner"]._videoLoaded) {
                this["_owner"].playbackReady();
            }
        }
    };
    return PlayerObserverClass;
}(NSObject));


/***/ }),

/***/ "../node_modules/tns-core-modules/file-system/file-system.js":
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("@nativescript/core/file-system/file-system"));


/***/ }),

/***/ "../node_modules/tns-core-modules/utils/types.js":
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("@nativescript/core/utils/types"));


/***/ }),

/***/ "../node_modules/tns-core-modules/utils/utils.js":
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("@nativescript/core/utils/utils"));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXIvaG1yLXVwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG90LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLWFuZ3VsYXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svbG9hZC1hcHBsaWNhdGlvbi1jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZXhvcGxheWVyL3N1YnRpdGxlLXNvdXJjZS9zdWJ0aXRsZS1zb3VyY2UtY29tbW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWV4b3BsYXllci9zdWJ0aXRsZS1zb3VyY2Uvc3VidGl0bGUtc291cmNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWV4b3BsYXllci92aWRlby1zb3VyY2UvdmlkZW8tc291cmNlLWNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1leG9wbGF5ZXIvdmlkZW8tc291cmNlL3ZpZGVvLXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1leG9wbGF5ZXIvdmlkZW9wbGF5ZXItY29tbW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWV4b3BsYXllci92aWRlb3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Rucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90bnMtY29yZS1tb2R1bGVzL3V0aWxzL3R5cGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxZQUFZLG1CQUFPLENBQUMsaURBQVE7QUFDNUIsc0JBQXNCLG1CQUFPLENBQUMsOEJBQThCO0FBQzVEO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0M7Ozs7Ozs7O0FDYmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBbUIsbUJBQU8sQ0FBQyw0REFBYztBQUN6QztBQUNBLGlDOzs7Ozs7O0FDSkE7QUFDQTtBQUNBLHVDQUF1QyxVQUFVLEdBQUcsUUFBUTtBQUM1RCx1Q0FBdUMsVUFBVSxHQUFHLFFBQVE7QUFDNUQseUNBQXlDLFVBQVUsR0FBRyxRQUFRO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsSUFBSTtBQUN4RCxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlEQUF5RCxJQUFJO0FBQzdELEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0RBQXNELGNBQWMsSUFBSSxVQUFVO0FBQ2xGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qix1QkFBZ0I7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7O0FBRUE7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUM3UkQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsU0FBUyxtQkFBTyxDQUFDLDRDQUE0Qzs7Ozs7Ozs7QUNKN0Q7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsU0FBUyxtQkFBTyxDQUFDLGdDQUFnQzs7Ozs7Ozs7QUNKakQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsU0FBUyxtQkFBTyxDQUFDLGdDQUFnQzs7Ozs7Ozs7QUNKakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6InZlbmRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaG90ID0gcmVxdWlyZShcIi4uL2hvdFwiKTtcbmNvbnN0IGZpbGVfc3lzdGVtXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTtcbmZ1bmN0aW9uIGhtclVwZGF0ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50QXBwRm9sZGVyID0gZmlsZV9zeXN0ZW1fMS5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpO1xuICAgIGNvbnN0IGxhdGVzdEhhc2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fW1wiaFwiXSgpO1xuICAgIHJldHVybiBob3QobGF0ZXN0SGFzaCwgZmlsZW5hbWUgPT4ge1xuICAgICAgICBjb25zdCBmdWxsRmlsZVBhdGggPSBmaWxlX3N5c3RlbV8xLnBhdGguam9pbihjdXJyZW50QXBwRm9sZGVyLnBhdGgsIGZpbGVuYW1lKTtcbiAgICAgICAgcmV0dXJuIGZpbGVfc3lzdGVtXzEuRmlsZS5leGlzdHMoZnVsbEZpbGVQYXRoKSA/IGN1cnJlbnRBcHBGb2xkZXIuZ2V0RmlsZShmaWxlbmFtZSkgOiBudWxsO1xuICAgIH0pO1xufVxuZXhwb3J0cy5obXJVcGRhdGUgPSBobXJVcGRhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1obXItdXBkYXRlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGhtcl91cGRhdGVfMSA9IHJlcXVpcmUoXCIuL2htci11cGRhdGVcIik7XG5leHBvcnRzLmhtclVwZGF0ZSA9IGhtcl91cGRhdGVfMS5obXJVcGRhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJjb25zdCBobXJQcmVmaXggPSAnSE1SOic7XG5jb25zdCBsb2cgPSB7XG4gICAgaW5mbzogKG1lc3NhZ2UpID0+IGNvbnNvbGUuaW5mbyhgJHtobXJQcmVmaXh9ICR7bWVzc2FnZX1gKSxcbiAgICB3YXJuOiAobWVzc2FnZSkgPT4gY29uc29sZS53YXJuKGAke2htclByZWZpeH0gJHttZXNzYWdlfWApLFxuICAgIGVycm9yOiAobWVzc2FnZSkgPT4gY29uc29sZS5lcnJvcihgJHtobXJQcmVmaXh9ICR7bWVzc2FnZX1gKSxcbn07XG5jb25zdCByZWZyZXNoID0gJ0FwcGxpY2F0aW9uIG5lZWRzIHRvIGJlIHJlc3RhcnRlZCBpbiBvcmRlciB0byBhcHBseSB0aGUgY2hhbmdlcy4nO1xuY29uc3QgaG90T3B0aW9ucyA9IHtcbiAgICBpZ25vcmVVbmFjY2VwdGVkOiBmYWxzZSxcbiAgICBpZ25vcmVEZWNsaW5lZDogZmFsc2UsXG4gICAgaWdub3JlRXJyb3JlZDogZmFsc2UsXG4gICAgb25VbmFjY2VwdGVkKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2hhaW4gPSBbXS5jb25jYXQoZGF0YS5jaGFpbik7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBjaGFpbltjaGFpbi5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAobGFzdCA9PT0gMCkge1xuICAgICAgICAgICAgY2hhaW4ucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cud2FybihgSWdub3JlZCBhbiB1cGRhdGUgdG8gdW5hY2NlcHRlZCBtb2R1bGU6IGApO1xuICAgICAgICBjaGFpbi5mb3JFYWNoKG1vZCA9PiBsb2cud2FybihgICAgICAgICAg4p6tICR7bW9kfWApKTtcbiAgICB9LFxuICAgIG9uRGVjbGluZWQoZGF0YSkge1xuICAgICAgICBsb2cud2FybihgSWdub3JlZCBhbiB1cGRhdGUgdG8gZGVjbGluZWQgbW9kdWxlOmApO1xuICAgICAgICBkYXRhLmNoYWluLmZvckVhY2gobW9kID0+IGxvZy53YXJuKGAgICAgICAgICDinq0gJHttb2R9YCkpO1xuICAgIH0sXG4gICAgb25FcnJvcmVkKGRhdGEpIHtcbiAgICAgICAgbG9nLndhcm4oXG4gICAgICAgICAgICBgSWdub3JlZCBhbiBlcnJvciB3aGlsZSB1cGRhdGluZyBtb2R1bGUgJHtkYXRhLm1vZHVsZUlkfSA8JHtkYXRhLnR5cGV9PmBcbiAgICAgICAgKTtcbiAgICAgICAgbG9nLndhcm4oZGF0YS5lcnJvcik7XG4gICAgfSxcbn07XG5cbmxldCBuZXh0SGFzaDtcbmxldCBjdXJyZW50SGFzaDtcblxuZnVuY3Rpb24gdXBUb0RhdGUoKSB7XG4gICAgcmV0dXJuIG5leHRIYXNoLmluZGV4T2YoX193ZWJwYWNrX2hhc2hfXykgPj0gMDtcbn1cblxuZnVuY3Rpb24gcmVzdWx0KG1vZHVsZXMsIGFwcGxpZWRNb2R1bGVzKSB7XG4gICAgY29uc3QgdW5hY2NlcHRlZCA9IG1vZHVsZXMuZmlsdGVyKFxuICAgICAgICAobW9kdWxlSWQpID0+IGFwcGxpZWRNb2R1bGVzICYmIGFwcGxpZWRNb2R1bGVzLmluZGV4T2YobW9kdWxlSWQpIDwgMFxuICAgICk7XG5cbiAgICBpZiAodW5hY2NlcHRlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxvZy53YXJuKCdUaGUgZm9sbG93aW5nIG1vZHVsZXMgY291bGQgbm90IGJlIHVwZGF0ZWQ6Jyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGVJZCBvZiB1bmFjY2VwdGVkKSB7XG4gICAgICAgICAgICBsb2cud2FybihgICAgICAgICAgIOKmuyAke21vZHVsZUlkfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEoYXBwbGllZE1vZHVsZXMgfHwgW10pLmxlbmd0aCkge1xuICAgICAgICBsb2cuaW5mbygnTm8gTW9kdWxlcyBVcGRhdGVkLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZy5pbmZvKCdUaGUgZm9sbG93aW5nIG1vZHVsZXMgd2VyZSB1cGRhdGVkOicpO1xuXG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlSWQgb2YgYXBwbGllZE1vZHVsZXMpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKGAgICAgICAgICDihrsgJHttb2R1bGVJZH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG51bWJlcklkcyA9IGFwcGxpZWRNb2R1bGVzLmV2ZXJ5KFxuICAgICAgICAgICAgKG1vZHVsZUlkKSA9PiB0eXBlb2YgbW9kdWxlSWQgPT09ICdudW1iZXInXG4gICAgICAgICk7XG4gICAgICAgIGlmIChudW1iZXJJZHMpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFxuICAgICAgICAgICAgICAgICdQbGVhc2UgY29uc2lkZXIgdXNpbmcgdGhlIE5hbWVkTW9kdWxlc1BsdWdpbiBmb3IgbW9kdWxlIG5hbWVzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbW9kdWxlLmhvdFxuICAgICAgICAuY2hlY2soKVxuICAgICAgICAudGhlbigobW9kdWxlcykgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm4oXG4gICAgICAgICAgICAgICAgICAgIGBDYW5ub3QgZmluZCB1cGRhdGUuICR7cmVmcmVzaH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1vZHVsZS5ob3RcbiAgICAgICAgICAgICAgICAuYXBwbHkoaG90T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigoYXBwbGllZE1vZHVsZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRDaGVjaztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1cFRvRGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Q2hlY2sgPSBjaGVjayhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdChtb2R1bGVzLCBhcHBsaWVkTW9kdWxlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVwVG9EYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBtb2RpZnkgbWVzc2FnZSAtIENMSSBkZXBlbmRzIG9uIHRoaXMgZXhhY3QgY29udGVudCB0byBkZXRlcm1pbmUgaG1yIG9wZXJhdGlvbiBzdGF0dXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhgU3VjY2Vzc2Z1bGx5IGFwcGxpZWQgdXBkYXRlIHdpdGggaG1yIGhhc2ggJHtjdXJyZW50SGFzaH0uIEFwcCBpcyB1cCB0byBkYXRlLmApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHRDaGVjayB8fCBudWxsO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gbW9kdWxlLmhvdC5zdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFsnYWJvcnQnLCAnZmFpbCddLmluZGV4T2Yoc3RhdHVzKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgbW9kaWZ5IG1lc3NhZ2UgLSBDTEkgZGVwZW5kcyBvbiB0aGlzIGV4YWN0IGNvbnRlbnQgdG8gZGV0ZXJtaW5lIGhtciBvcGVyYXRpb24gc3RhdHVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDYW5ub3QgYXBwbHkgdXBkYXRlIHdpdGggaG1yIGhhc2ggJHtjdXJyZW50SGFzaH0uYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyLnN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgVXBkYXRlIGZhaWxlZDogJHtlcnIubWVzc2FnZSB8fCBlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG4gICAgICAgICAgICBpZiAoWydhYm9ydCcsICdmYWlsJ10uaW5kZXhPZihzdGF0dXMpID49IDApIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYENhbm5vdCBjaGVjayBmb3IgdXBkYXRlLiAke3JlZnJlc2h9YCk7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKGVyci5tZXNzYWdlIHx8IGVyci5zdGFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgVXBkYXRlIGNoZWNrIGZhaWxlZDogJHtlcnIubWVzc2FnZSB8fCBlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIGxvZy5pbmZvKCdIb3QgTW9kdWxlIFJlcGxhY2VtZW50IEVuYWJsZWQuIFdhaXRpbmcgZm9yIHNpZ25hbC4nKTtcbn0gZWxzZSB7XG4gICAgbG9nLmVycm9yKCdIb3QgTW9kdWxlIFJlcGxhY2VtZW50IGlzIGRpc2FibGVkLicpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUobGF0ZXN0SGFzaCwgb3B0aW9ucykge1xuICAgIG5leHRIYXNoID0gbGF0ZXN0SGFzaDtcbiAgICBpZiAoIXVwVG9EYXRlKCkpIHtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbW9kdWxlLmhvdC5zdGF0dXMoKTtcblxuICAgICAgICBpZiAoc3RhdHVzID09PSAnaWRsZScpIHtcbiAgICAgICAgICAgIC8vRG8gbm90IG1vZGlmeSBtZXNzYWdlIC0gQ0xJIGRlcGVuZHMgb24gdGhpcyBleGFjdCBjb250ZW50IHRvIGRldGVybWluZSBobXIgb3BlcmF0aW9uIHN0YXR1cy5cbiAgICAgICAgICAgIGxvZy5pbmZvKGBDaGVja2luZyBmb3IgdXBkYXRlcyB0byB0aGUgYnVuZGxlIHdpdGggaG1yIGhhc2ggJHtjdXJyZW50SGFzaH0uYCk7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2sob3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSBpZiAoWydhYm9ydCcsICdmYWlsJ10uaW5kZXhPZihzdGF0dXMpID49IDApIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFxuICAgICAgICAgICAgICAgIGBDYW5ub3QgYXBwbHkgdXBkYXRlLiBBIHByZXZpb3VzIHVwZGF0ZSAke3N0YXR1c31lZC4gJHtyZWZyZXNofWBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBnZXROZXh0SGFzaChoYXNoLCBnZXRGaWxlQ29udGVudCkge1xuICAgIGNvbnN0IGZpbGUgPSBnZXRGaWxlQ29udGVudChgJHtoYXNofS5ob3QtdXBkYXRlLmpzb25gKTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZS5yZWFkVGV4dCgpLnRoZW4oaG90VXBkYXRlQ29udGVudCA9PiB7XG4gICAgICAgIGlmIChob3RVcGRhdGVDb250ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBtYW5pZmVzdCA9IEpTT04ucGFyc2UoaG90VXBkYXRlQ29udGVudCk7XG4gICAgICAgICAgICBjb25zdCBuZXdIYXNoID0gbWFuaWZlc3QuaDtcbiAgICAgICAgICAgIHJldHVybiBnZXROZXh0SGFzaChuZXdIYXNoLCBnZXRGaWxlQ29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGhhc2gpO1xuICAgICAgICB9XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gUHJvbWlzZS5yZWplY3QoZXJyb3IpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjaGVja1N0YXRlKGluaXRpYWxIYXNoLCBnZXRGaWxlQ29udGVudCkge1xuICAgIGN1cnJlbnRIYXNoID0gaW5pdGlhbEhhc2g7XG4gICAgcmV0dXJuIGdldE5leHRIYXNoKGluaXRpYWxIYXNoLCBnZXRGaWxlQ29udGVudCkudGhlbihuZXh0SGFzaCA9PiB7XG4gICAgICAgIGlmIChuZXh0SGFzaCAhPSBpbml0aWFsSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZShuZXh0SGFzaCwge30pO1xuICAgICAgICB9XG4gICAgfSlcbn1cbiIsImNvbnN0IGxvYWRDc3MgPSByZXF1aXJlKFwiLi9sb2FkLWFwcGxpY2F0aW9uLWNzc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICBsb2FkQ3NzKGZ1bmN0aW9uKCkge1xuICAgICAgICBnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCIuL2FwcC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIn4vYXBwXCIpKTtcbiAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiYXBwLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwifi9hcHBcIikpO1xuICAgIH0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobG9hZE1vZHVsZUZuKSB7XG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgbG9hZE1vZHVsZUZuKCk7XG5cbiAgICBhcHBsaWNhdGlvbi5sb2FkQXBwQ3NzKCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlscyA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcbnZhciBkZWZpbml0aW9uID0gcmVxdWlyZShcIi4vc3VidGl0bGUtc291cmNlXCIpO1xuZnVuY3Rpb24gZnJvbVJlc291cmNlKG5hbWUpIHtcbiAgICB2YXIgdmlkZW8gPSBuZXcgZGVmaW5pdGlvbi5TdWJ0aXRsZVNvdXJjZSgpO1xuICAgIHJldHVybiB2aWRlby5sb2FkRnJvbVJlc291cmNlKG5hbWUpID8gdmlkZW8gOiBudWxsO1xufVxuZXhwb3J0cy5mcm9tUmVzb3VyY2UgPSBmcm9tUmVzb3VyY2U7XG5mdW5jdGlvbiBmcm9tRmlsZShwYXRoKSB7XG4gICAgdmFyIHZpZGVvID0gbmV3IGRlZmluaXRpb24uU3VidGl0bGVTb3VyY2UoKTtcbiAgICByZXR1cm4gdmlkZW8ubG9hZEZyb21GaWxlKHBhdGgpID8gdmlkZW8gOiBudWxsO1xufVxuZXhwb3J0cy5mcm9tRmlsZSA9IGZyb21GaWxlO1xuZnVuY3Rpb24gZnJvbVVybCh1cmwpIHtcbiAgICB2YXIgdmlkZW8gPSBuZXcgZGVmaW5pdGlvbi5TdWJ0aXRsZVNvdXJjZSgpO1xuICAgIHJldHVybiB2aWRlby5sb2FkRnJvbVVybCh1cmwpID8gdmlkZW8gOiBudWxsO1xufVxuZXhwb3J0cy5mcm9tVXJsID0gZnJvbVVybDtcbmZ1bmN0aW9uIGZyb21GaWxlT3JSZXNvdXJjZShwYXRoKSB7XG4gICAgaWYgKCFpc0ZpbGVPclJlc291cmNlUGF0aChwYXRoKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXRoIFxcXCJcIiArIFwiXFxcIiBpcyBub3QgYSB2YWxpZCBmaWxlIG9yIHJlc291cmNlLlwiKTtcbiAgICB9XG4gICAgaWYgKHBhdGguaW5kZXhPZih1dGlscy5SRVNPVVJDRV9QUkVGSVgpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmcm9tUmVzb3VyY2UocGF0aC5zdWJzdHIodXRpbHMuUkVTT1VSQ0VfUFJFRklYLmxlbmd0aCkpO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbUZpbGUocGF0aCk7XG59XG5leHBvcnRzLmZyb21GaWxlT3JSZXNvdXJjZSA9IGZyb21GaWxlT3JSZXNvdXJjZTtcbmZ1bmN0aW9uIGlzRmlsZU9yUmVzb3VyY2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gdXRpbHMuaXNGaWxlT3JSZXNvdXJjZVBhdGgocGF0aCk7XG59XG5leHBvcnRzLmlzRmlsZU9yUmVzb3VyY2VQYXRoID0gaXNGaWxlT3JSZXNvdXJjZVBhdGg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0eXBlcyA9IHJlcXVpcmUoXCJ1dGlscy90eXBlc1wiKTtcbnZhciBmcyA9IHJlcXVpcmUoXCJmaWxlLXN5c3RlbVwiKTtcbnZhciBjb21tb24gPSByZXF1aXJlKFwiLi9zdWJ0aXRsZS1zb3VyY2UtY29tbW9uXCIpO1xuZ2xvYmFsLm1vZHVsZU1lcmdlKGNvbW1vbiwgZXhwb3J0cyk7XG52YXIgU3VidGl0bGVTb3VyY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN1YnRpdGxlU291cmNlKCkge1xuICAgIH1cbiAgICBTdWJ0aXRsZVNvdXJjZS5wcm90b3R5cGUubG9hZEZyb21SZXNvdXJjZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBzdWJ0aXRsZVVybCA9IE5TQnVuZGxlLm1haW5CdW5kbGUoKS5VUkxGb3JSZXNvdXJjZVdpdGhFeHRlbnNpb24obmFtZSwgbnVsbCk7XG4gICAgICAgIHZhciBzdWJ0aXRsZXMgPSBOU1N0cmluZy5zdHJpbmdXaXRoQ29udGVudHNPZlVSTEVuY29kaW5nRXJyb3Ioc3VidGl0bGVVcmwsIE5TVVRGOFN0cmluZ0VuY29kaW5nLCBudWxsKTtcbiAgICAgICAgdGhpcy5pb3MgPSBzdWJ0aXRsZXM7XG4gICAgICAgIHJldHVybiB0aGlzLmlvcyAhPSBudWxsO1xuICAgIH07XG4gICAgU3VidGl0bGVTb3VyY2UucHJvdG90eXBlLmxvYWRGcm9tRmlsZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIHZhciBmaWxlTmFtZSA9IHR5cGVzLmlzU3RyaW5nKHBhdGgpID8gcGF0aC50cmltKCkgOiBcIlwiO1xuICAgICAgICBpZiAoZmlsZU5hbWUuaW5kZXhPZihcIn4vXCIpID09PSAwKSB7XG4gICAgICAgICAgICBmaWxlTmFtZSA9IGZzLnBhdGguam9pbihmcy5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLnBhdGgsIGZpbGVOYW1lLnJlcGxhY2UoXCJ+L1wiLCBcIlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YnRpdGxlVXJsID0gTlNVUkwuZmlsZVVSTFdpdGhQYXRoKGZpbGVOYW1lKTtcbiAgICAgICAgdmFyIHN1YnRpdGxlcyA9IE5TU3RyaW5nLnN0cmluZ1dpdGhDb250ZW50c09mVVJMRW5jb2RpbmdFcnJvcihzdWJ0aXRsZVVybCwgTlNVVEY4U3RyaW5nRW5jb2RpbmcsIG51bGwpO1xuICAgICAgICB0aGlzLmlvcyA9IHN1YnRpdGxlcztcbiAgICAgICAgcmV0dXJuIHRoaXMuaW9zICE9IG51bGw7XG4gICAgfTtcbiAgICBTdWJ0aXRsZVNvdXJjZS5wcm90b3R5cGUubG9hZEZyb21VcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBzdWJ0aXRsZVVybCA9IE5TVVJMLlVSTFdpdGhTdHJpbmcodXJsKTtcbiAgICAgICAgdmFyIHN1YnRpdGxlcyA9IE5TU3RyaW5nLnN0cmluZ1dpdGhDb250ZW50c09mVVJMRW5jb2RpbmdFcnJvcihzdWJ0aXRsZVVybCwgTlNVVEY4U3RyaW5nRW5jb2RpbmcsIG51bGwpO1xuICAgICAgICB0aGlzLmlvcyA9IHN1YnRpdGxlcztcbiAgICAgICAgcmV0dXJuIHRoaXMuaW9zICE9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gU3VidGl0bGVTb3VyY2U7XG59KCkpO1xuZXhwb3J0cy5TdWJ0aXRsZVNvdXJjZSA9IFN1YnRpdGxlU291cmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXRpbHMgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XG52YXIgZGVmaW5pdGlvbiA9IHJlcXVpcmUoXCIuL3ZpZGVvLXNvdXJjZVwiKTtcbmZ1bmN0aW9uIGZyb21SZXNvdXJjZShuYW1lKSB7XG4gICAgdmFyIHZpZGVvID0gbmV3IGRlZmluaXRpb24uVmlkZW9Tb3VyY2UoKTtcbiAgICByZXR1cm4gdmlkZW8ubG9hZEZyb21SZXNvdXJjZShuYW1lKSA/IHZpZGVvIDogbnVsbDtcbn1cbmV4cG9ydHMuZnJvbVJlc291cmNlID0gZnJvbVJlc291cmNlO1xuZnVuY3Rpb24gZnJvbUZpbGUocGF0aCkge1xuICAgIHZhciB2aWRlbyA9IG5ldyBkZWZpbml0aW9uLlZpZGVvU291cmNlKCk7XG4gICAgcmV0dXJuIHZpZGVvLmxvYWRGcm9tRmlsZShwYXRoKSA/IHZpZGVvIDogbnVsbDtcbn1cbmV4cG9ydHMuZnJvbUZpbGUgPSBmcm9tRmlsZTtcbmZ1bmN0aW9uIGZyb21OYXRpdmVTb3VyY2Uoc291cmNlKSB7XG4gICAgdmFyIHZpZGVvID0gbmV3IGRlZmluaXRpb24uVmlkZW9Tb3VyY2UoKTtcbiAgICByZXR1cm4gdmlkZW8uc2V0TmF0aXZlU291cmNlKHNvdXJjZSkgPyB2aWRlbyA6IG51bGw7XG59XG5leHBvcnRzLmZyb21OYXRpdmVTb3VyY2UgPSBmcm9tTmF0aXZlU291cmNlO1xuZnVuY3Rpb24gZnJvbVVybCh1cmwpIHtcbiAgICB2YXIgdmlkZW8gPSBuZXcgZGVmaW5pdGlvbi5WaWRlb1NvdXJjZSgpO1xuICAgIHJldHVybiB2aWRlby5sb2FkRnJvbVVybCh1cmwpID8gdmlkZW8gOiBudWxsO1xufVxuZXhwb3J0cy5mcm9tVXJsID0gZnJvbVVybDtcbmZ1bmN0aW9uIGZyb21GaWxlT3JSZXNvdXJjZShwYXRoKSB7XG4gICAgaWYgKCFpc0ZpbGVPclJlc291cmNlUGF0aChwYXRoKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXRoIFxcXCJcIiArIFwiXFxcIiBpcyBub3QgYSB2YWxpZCBmaWxlIG9yIHJlc291cmNlLlwiKTtcbiAgICB9XG4gICAgaWYgKHBhdGguaW5kZXhPZih1dGlscy5SRVNPVVJDRV9QUkVGSVgpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmcm9tUmVzb3VyY2UocGF0aC5zdWJzdHIodXRpbHMuUkVTT1VSQ0VfUFJFRklYLmxlbmd0aCkpO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbUZpbGUocGF0aCk7XG59XG5leHBvcnRzLmZyb21GaWxlT3JSZXNvdXJjZSA9IGZyb21GaWxlT3JSZXNvdXJjZTtcbmZ1bmN0aW9uIGlzRmlsZU9yUmVzb3VyY2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gdXRpbHMuaXNGaWxlT3JSZXNvdXJjZVBhdGgocGF0aCk7XG59XG5leHBvcnRzLmlzRmlsZU9yUmVzb3VyY2VQYXRoID0gaXNGaWxlT3JSZXNvdXJjZVBhdGg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0eXBlcyA9IHJlcXVpcmUoXCJ1dGlscy90eXBlc1wiKTtcbnZhciBmcyA9IHJlcXVpcmUoXCJmaWxlLXN5c3RlbVwiKTtcbnZhciBjb21tb24gPSByZXF1aXJlKFwiLi92aWRlby1zb3VyY2UtY29tbW9uXCIpO1xuZ2xvYmFsLm1vZHVsZU1lcmdlKGNvbW1vbiwgZXhwb3J0cyk7XG52YXIgVmlkZW9Tb3VyY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZpZGVvU291cmNlKCkge1xuICAgIH1cbiAgICBWaWRlb1NvdXJjZS5wcm90b3R5cGUubG9hZEZyb21SZXNvdXJjZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciB2aWRlb1VSTCA9IE5TQnVuZGxlLm1haW5CdW5kbGUoKS5VUkxGb3JSZXNvdXJjZVdpdGhFeHRlbnNpb24obmFtZSwgbnVsbCk7XG4gICAgICAgIHZhciBwbGF5ZXIgPSBuZXcgQVZQbGF5ZXJJdGVtKHZpZGVvVVJMKTtcbiAgICAgICAgdGhpcy5pb3MgPSBwbGF5ZXI7XG4gICAgICAgIHJldHVybiB0aGlzLmlvcyAhPSBudWxsO1xuICAgIH07XG4gICAgVmlkZW9Tb3VyY2UucHJvdG90eXBlLmxvYWRGcm9tRmlsZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIHZhciBmaWxlTmFtZSA9IHR5cGVzLmlzU3RyaW5nKHBhdGgpID8gcGF0aC50cmltKCkgOiBcIlwiO1xuICAgICAgICBpZiAoZmlsZU5hbWUuaW5kZXhPZihcIn4vXCIpID09PSAwKSB7XG4gICAgICAgICAgICBmaWxlTmFtZSA9IGZzLnBhdGguam9pbihmcy5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLnBhdGgsIGZpbGVOYW1lLnJlcGxhY2UoXCJ+L1wiLCBcIlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZpZGVvVVJMID0gTlNVUkwuZmlsZVVSTFdpdGhQYXRoKGZpbGVOYW1lKTtcbiAgICAgICAgdmFyIHBsYXllciA9IG5ldyBBVlBsYXllckl0ZW0odmlkZW9VUkwpO1xuICAgICAgICB0aGlzLmlvcyA9IHBsYXllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW9zICE9IG51bGw7XG4gICAgfTtcbiAgICBWaWRlb1NvdXJjZS5wcm90b3R5cGUubG9hZEZyb21VcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciB2aWRlb1VSTCA9IE5TVVJMLlVSTFdpdGhTdHJpbmcodXJsKTtcbiAgICAgICAgdmFyIHBsYXllciA9IG5ldyBBVlBsYXllckl0ZW0odmlkZW9VUkwpO1xuICAgICAgICB0aGlzLmlvcyA9IHBsYXllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW9zICE9IG51bGw7XG4gICAgfTtcbiAgICBWaWRlb1NvdXJjZS5wcm90b3R5cGUuc2V0TmF0aXZlU291cmNlID0gZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICB0aGlzLmlvcyA9IHNvdXJjZTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZSAhPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIFZpZGVvU291cmNlO1xufSgpKTtcbmV4cG9ydHMuVmlkZW9Tb3VyY2UgPSBWaWRlb1NvdXJjZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHZpZGVvU291cmNlID0gcmVxdWlyZShcIi4vdmlkZW8tc291cmNlL3ZpZGVvLXNvdXJjZVwiKTtcbnZhciBzdWJ0aXRsZVNvdXJjZSA9IHJlcXVpcmUoXCIuL3N1YnRpdGxlLXNvdXJjZS9zdWJ0aXRsZS1zb3VyY2VcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy90eXBlc1wiKTtcbnZhciB2aWV3XzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIik7XG52YXIgaW1hZ2VTb3VyY2UgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIik7XG5mdW5jdGlvbiBvblNyY1Byb3BlcnR5Q2hhbmdlZCh2aWV3LCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICB2YXIgdmlkZW8gPSB2aWV3O1xuICAgIHZhciB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGlmICh0eXBlc18xLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgdmlkZW8udmlkZW9Tb3VyY2UgPSBudWxsO1xuICAgICAgICB2aWRlb1tcIl91cmxcIl0gPSB2YWx1ZTtcbiAgICAgICAgdmlkZW8uaXNMb2FkaW5nUHJvcGVydHkgPSB0cnVlO1xuICAgICAgICBpZiAodXRpbHNfMS5pc0ZpbGVPclJlc291cmNlUGF0aCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZpZGVvLnZpZGVvU291cmNlID0gdmlkZW9Tb3VyY2UuZnJvbUZpbGVPclJlc291cmNlKHZhbHVlKTtcbiAgICAgICAgICAgIHZpZGVvLmlzTG9hZGluZ1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodmlkZW9bXCJfdXJsXCJdID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZpZGVvLnZpZGVvU291cmNlID0gdmlkZW9Tb3VyY2UuZnJvbVVybCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmlkZW8uaXNMb2FkaW5nUHJvcGVydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIHZpZGVvU291cmNlLlZpZGVvU291cmNlKSB7XG4gICAgICAgIHZpZGVvLnZpZGVvU291cmNlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2aWRlby52aWRlb1NvdXJjZSA9IHZpZGVvU291cmNlLmZyb21OYXRpdmVTb3VyY2UodmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG9uU3VidGl0bGVzUHJvcGVydHlDaGFuZ2VkKHZpZXcsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIHZhciB2aWRlbyA9IHZpZXc7XG4gICAgaWYgKHR5cGVzXzEuaXNTdHJpbmcobmV3VmFsdWUpKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IG5ld1ZhbHVlLnRyaW0oKTtcbiAgICAgICAgdmlkZW8uc3VidGl0bGVTb3VyY2UgPSBudWxsO1xuICAgICAgICBpZiAodXRpbHNfMS5pc0ZpbGVPclJlc291cmNlUGF0aCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZpZGVvLnN1YnRpdGxlU291cmNlID0gc3VidGl0bGVTb3VyY2UuZnJvbUZpbGVPclJlc291cmNlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZpZGVvLnN1YnRpdGxlU291cmNlID0gc3VidGl0bGVTb3VyY2UuZnJvbVVybCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBvbkltZ1NyY1Byb3BlcnR5Q2hhbmdlZCh2aWV3LCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICB2YXIgdmlkZW8gPSB2aWV3O1xuICAgIHZhciB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGlmICh0eXBlc18xLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgdmlkZW9bXCJfdXJsXCJdID0gdmFsdWU7XG4gICAgICAgIHZpZGVvLmlzTG9hZGluZ1Byb3BlcnR5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHV0aWxzXzEuaXNGaWxlT3JSZXNvdXJjZVBhdGgodmFsdWUpKSB7XG4gICAgICAgICAgICB2aWRlby5pbWFnZVNvdXJjZSA9IGltYWdlU291cmNlLmZyb21GaWxlT3JSZXNvdXJjZSh2YWx1ZSk7XG4gICAgICAgICAgICB2aWRlby5pc0xvYWRpbmdQcm9wZXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZpZGVvW1wiX3VybFwiXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2aWRlby5pbWFnZVNvdXJjZSA9IGltYWdlU291cmNlLmZyb21VcmwodmFsdWUpO1xuICAgICAgICAgICAgICAgIHZpZGVvLmlzTG9hZGluZ1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBpbWFnZVNvdXJjZS5JbWFnZVNvdXJjZSkge1xuICAgICAgICB2aWRlby5pbWFnZVNvdXJjZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmlkZW8uaW1hZ2VTb3VyY2UgPSBpbWFnZVNvdXJjZS5mcm9tTmF0aXZlU291cmNlKHZhbHVlKTtcbiAgICB9XG59XG52YXIgVmlkZW9GaWxsO1xuKGZ1bmN0aW9uIChWaWRlb0ZpbGwpIHtcbiAgICBWaWRlb0ZpbGxbXCJkZWZhdWx0XCJdID0gXCJkZWZhdWx0XCI7XG4gICAgVmlkZW9GaWxsW1wiYXNwZWN0XCJdID0gXCJhc3BlY3RcIjtcbiAgICBWaWRlb0ZpbGxbXCJhc3BlY3RGaWxsXCJdID0gXCJhc3BlY3RGaWxsXCI7XG59KShWaWRlb0ZpbGwgPSBleHBvcnRzLlZpZGVvRmlsbCB8fCAoZXhwb3J0cy5WaWRlb0ZpbGwgPSB7fSkpO1xudmFyIFZpZGVvID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVmlkZW8sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmlkZW8oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pbWdUeXBlID0gMTtcbiAgICAgICAgX3RoaXMuYXV0b3BsYXkgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuY29udHJvbHMgPSB0cnVlO1xuICAgICAgICBfdGhpcy5sb29wID0gZmFsc2U7XG4gICAgICAgIF90aGlzLm11dGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmZpbGwgPSBWaWRlb0ZpbGwuZGVmYXVsdDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBWaWRlby5maW5pc2hlZEV2ZW50ID0gXCJmaW5pc2hlZFwiO1xuICAgIFZpZGVvLnBsYXliYWNrUmVhZHlFdmVudCA9IFwicGxheWJhY2tSZWFkeVwiO1xuICAgIFZpZGVvLnBsYXliYWNrU3RhcnRFdmVudCA9IFwicGxheWJhY2tTdGFydFwiO1xuICAgIFZpZGVvLnNlZWtUb1RpbWVDb21wbGV0ZUV2ZW50ID0gXCJzZWVrVG9UaW1lQ29tcGxldGVcIjtcbiAgICBWaWRlby5jdXJyZW50VGltZVVwZGF0ZWRFdmVudCA9IFwiY3VycmVudFRpbWVVcGRhdGVkXCI7XG4gICAgVmlkZW8uSU1BR0VUWVBFTU9OTyA9IDE7XG4gICAgVmlkZW8uSU1BR0VUWVBFU1RFUkVPVE9QQk9UVE9NID0gMjtcbiAgICBWaWRlby5JTUFHRVRZUEVTVEVSRU9MRUZUUklHSFQgPSAzO1xuICAgIHJldHVybiBWaWRlbztcbn0odmlld18xLlZpZXcpKTtcbmV4cG9ydHMuVmlkZW8gPSBWaWRlbztcbmV4cG9ydHMuc3JjUHJvcGVydHkgPSBuZXcgdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiBcInNyY1wiLFxuICAgIHZhbHVlQ2hhbmdlZDogb25TcmNQcm9wZXJ0eUNoYW5nZWRcbn0pO1xuZXhwb3J0cy5zcmNQcm9wZXJ0eS5yZWdpc3RlcihWaWRlbyk7XG5leHBvcnRzLmltZ1NyY1Byb3BlcnR5ID0gbmV3IHZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogXCJpbWdTcmNcIixcbiAgICB2YWx1ZUNoYW5nZWQ6IG9uSW1nU3JjUHJvcGVydHlDaGFuZ2VkXG59KTtcbmV4cG9ydHMuaW1nU3JjUHJvcGVydHkucmVnaXN0ZXIoVmlkZW8pO1xuZXhwb3J0cy5pbWdUeXBlUHJvcGVydHkgPSBuZXcgdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiBcImltZ1R5cGVcIixcbn0pO1xuZXhwb3J0cy5pbWdUeXBlUHJvcGVydHkucmVnaXN0ZXIoVmlkZW8pO1xuZXhwb3J0cy5zdWJ0aXRsZXNQcm9wZXJ0eSA9IG5ldyB2aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6IFwic3VidGl0bGVzXCIsXG4gICAgdmFsdWVDaGFuZ2VkOiBvblN1YnRpdGxlc1Byb3BlcnR5Q2hhbmdlZFxufSk7XG5leHBvcnRzLnN1YnRpdGxlc1Byb3BlcnR5LnJlZ2lzdGVyKFZpZGVvKTtcbmV4cG9ydHMuc3VidGl0bGVTb3VyY2VQcm9wZXJ0eSA9IG5ldyB2aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6IFwic3VidGl0bGVTb3VyY2VcIixcbn0pO1xuZXhwb3J0cy5zdWJ0aXRsZVNvdXJjZVByb3BlcnR5LnJlZ2lzdGVyKFZpZGVvKTtcbmV4cG9ydHMudmlkZW9Tb3VyY2VQcm9wZXJ0eSA9IG5ldyB2aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6IFwidmlkZW9Tb3VyY2VcIixcbn0pO1xuZXhwb3J0cy52aWRlb1NvdXJjZVByb3BlcnR5LnJlZ2lzdGVyKFZpZGVvKTtcbmV4cG9ydHMuaW1hZ2VTb3VyY2VQcm9wZXJ0eSA9IG5ldyB2aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6IFwiaW1hZ2VTb3VyY2VcIixcbn0pO1xuZXhwb3J0cy5pbWFnZVNvdXJjZVByb3BlcnR5LnJlZ2lzdGVyKFZpZGVvKTtcbmV4cG9ydHMuaXNMb2FkaW5nUHJvcGVydHkgPSBuZXcgdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiBcImlzTG9hZGluZ1wiLFxuICAgIHZhbHVlQ29udmVydGVyOiB2aWV3XzEuYm9vbGVhbkNvbnZlcnRlcixcbn0pO1xuZXhwb3J0cy5pc0xvYWRpbmdQcm9wZXJ0eS5yZWdpc3RlcihWaWRlbyk7XG5leHBvcnRzLm9ic2VydmVDdXJyZW50VGltZVByb3BlcnR5ID0gbmV3IHZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogXCJvYnNlcnZlQ3VycmVudFRpbWVcIixcbiAgICB2YWx1ZUNvbnZlcnRlcjogdmlld18xLmJvb2xlYW5Db252ZXJ0ZXIsXG59KTtcbmV4cG9ydHMub2JzZXJ2ZUN1cnJlbnRUaW1lUHJvcGVydHkucmVnaXN0ZXIoVmlkZW8pO1xuZXhwb3J0cy5hdXRvcGxheVByb3BlcnR5ID0gbmV3IHZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogXCJhdXRvcGxheVwiLFxuICAgIHZhbHVlQ29udmVydGVyOiB2aWV3XzEuYm9vbGVhbkNvbnZlcnRlcixcbn0pO1xuZXhwb3J0cy5hdXRvcGxheVByb3BlcnR5LnJlZ2lzdGVyKFZpZGVvKTtcbmV4cG9ydHMuY29udHJvbHNQcm9wZXJ0eSA9IG5ldyB2aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6IFwiY29udHJvbHNcIixcbiAgICB2YWx1ZUNvbnZlcnRlcjogdmlld18xLmJvb2xlYW5Db252ZXJ0ZXIsXG59KTtcbmV4cG9ydHMuY29udHJvbHNQcm9wZXJ0eS5yZWdpc3RlcihWaWRlbyk7XG5leHBvcnRzLmxvb3BQcm9wZXJ0eSA9IG5ldyB2aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6IFwibG9vcFwiLFxuICAgIHZhbHVlQ29udmVydGVyOiB2aWV3XzEuYm9vbGVhbkNvbnZlcnRlcixcbn0pO1xuZXhwb3J0cy5sb29wUHJvcGVydHkucmVnaXN0ZXIoVmlkZW8pO1xuZXhwb3J0cy5tdXRlZFByb3BlcnR5ID0gbmV3IHZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogXCJtdXRlZFwiLFxuICAgIHZhbHVlQ29udmVydGVyOiB2aWV3XzEuYm9vbGVhbkNvbnZlcnRlcixcbn0pO1xuZXhwb3J0cy5tdXRlZFByb3BlcnR5LnJlZ2lzdGVyKFZpZGVvKTtcbmV4cG9ydHMuZmlsbFByb3BlcnR5ID0gbmV3IHZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogXCJmaWxsXCJcbn0pO1xuZXhwb3J0cy5maWxsUHJvcGVydHkucmVnaXN0ZXIoVmlkZW8pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFwcGxpY2F0aW9uXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbnZhciB2aWRlb3BsYXllcl9jb21tb25fMSA9IHJlcXVpcmUoXCIuL3ZpZGVvcGxheWVyLWNvbW1vblwiKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3ZpZGVvcGxheWVyLWNvbW1vblwiKSk7XG52YXIgVmlkZW8gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWaWRlbywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWaWRlbygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZW5hYmxlU3VidGl0bGVzID0gZmFsc2U7XG4gICAgICAgIF90aGlzLl9wbGF5ZXJDb250cm9sbGVyID0gbmV3IEFWUGxheWVyVmlld0NvbnRyb2xsZXIoKTtcbiAgICAgICAgdmFyIGF1ZGlvU2Vzc2lvbiA9IEFWQXVkaW9TZXNzaW9uLnNoYXJlZEluc3RhbmNlKCk7XG4gICAgICAgIHZhciBvdXRwdXQgPSBhdWRpb1Nlc3Npb24uY3VycmVudFJvdXRlLm91dHB1dHMubGFzdE9iamVjdC5wb3J0VHlwZTtcbiAgICAgICAgaWYgKG91dHB1dC5tYXRjaCgvUmVjZWl2ZXIvKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhdWRpb1Nlc3Npb24uc2V0Q2F0ZWdvcnlFcnJvcihBVkF1ZGlvU2Vzc2lvbkNhdGVnb3J5UGxheUFuZFJlY29yZCk7XG4gICAgICAgICAgICAgICAgYXVkaW9TZXNzaW9uLm92ZXJyaWRlT3V0cHV0QXVkaW9Qb3J0RXJyb3IoMTkzNjc0NzM3OCk7XG4gICAgICAgICAgICAgICAgYXVkaW9TZXNzaW9uLnNldEFjdGl2ZUVycm9yKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF90aGlzLl9wbGF5ZXIgPSBuZXcgQVZQbGF5ZXIoKTtcbiAgICAgICAgX3RoaXMuX3BsYXllckNvbnRyb2xsZXIucGxheWVyID0gX3RoaXMuX3BsYXllcjtcbiAgICAgICAgX3RoaXMuX3BsYXllckNvbnRyb2xsZXIuc2hvd3NQbGF5YmFja0NvbnRyb2xzID0gZmFsc2U7XG4gICAgICAgIF90aGlzLm5hdGl2ZVZpZXcgPSBfdGhpcy5fcGxheWVyQ29udHJvbGxlci52aWV3O1xuICAgICAgICBfdGhpcy5fb2JzZXJ2ZXIgPSBQbGF5ZXJPYnNlcnZlckNsYXNzLmFsbG9jKCk7XG4gICAgICAgIF90aGlzLl9vYnNlcnZlcltcIl9vd25lclwiXSA9IF90aGlzO1xuICAgICAgICBfdGhpcy5fdmlkZW9GaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoX3RoaXMuZW5hYmxlU3VidGl0bGVzKSB7XG4gICAgICAgICAgICBfdGhpcy5fc3VidGl0bGluZyA9IG5ldyBBU0JQbGF5ZXJTdWJ0aXRsaW5nKCk7XG4gICAgICAgICAgICBfdGhpcy5fc2V0dXBTdWJ0aXRsZUxhYmVsKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmlkZW8ucHJvdG90eXBlLCBcImlvc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlVmlldztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgVmlkZW8ucHJvdG90eXBlW3ZpZGVvcGxheWVyX2NvbW1vbl8xLnZpZGVvU291cmNlUHJvcGVydHkuc2V0TmF0aXZlXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zZXROYXRpdmVWaWRlbyh2YWx1ZSA/IHZhbHVlLmlvcyA6IG51bGwpO1xuICAgIH07XG4gICAgVmlkZW8ucHJvdG90eXBlW3ZpZGVvcGxheWVyX2NvbW1vbl8xLmZpbGxQcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciB2aWRlb0dyYXZpdHkgPSBBVkxheWVyVmlkZW9HcmF2aXR5UmVzaXplO1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHZpZGVvcGxheWVyX2NvbW1vbl8xLlZpZGVvRmlsbC5hc3BlY3Q6XG4gICAgICAgICAgICAgICAgdmlkZW9HcmF2aXR5ID0gQVZMYXllclZpZGVvR3Jhdml0eVJlc2l6ZUFzcGVjdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdmlkZW9wbGF5ZXJfY29tbW9uXzEuVmlkZW9GaWxsLmFzcGVjdEZpbGw6XG4gICAgICAgICAgICAgICAgdmlkZW9HcmF2aXR5ID0gQVZMYXllclZpZGVvR3Jhdml0eVJlc2l6ZUFzcGVjdEZpbGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3BsYXllckNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllckNvbnRyb2xsZXIudmlkZW9HcmF2aXR5ID0gdmlkZW9HcmF2aXR5O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWaWRlby5wcm90b3R5cGVbdmlkZW9wbGF5ZXJfY29tbW9uXzEuc3VidGl0bGVTb3VyY2VQcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN1YnRpdGxlcyh2YWx1ZSA/IHZhbHVlLmlvcyA6IG51bGwpO1xuICAgIH07XG4gICAgVmlkZW8ucHJvdG90eXBlLl9zZXROYXRpdmVWaWRlbyA9IGZ1bmN0aW9uIChuYXRpdmVWaWRlb1BsYXllcikge1xuICAgICAgICBpZiAobmF0aXZlVmlkZW9QbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gdGhpcy5fcGxheWVyLmN1cnJlbnRJdGVtO1xuICAgICAgICAgICAgdGhpcy5fYWRkU3RhdHVzT2JzZXJ2ZXIobmF0aXZlVmlkZW9QbGF5ZXIpO1xuICAgICAgICAgICAgdGhpcy5fYXV0b3BsYXlDaGVjaygpO1xuICAgICAgICAgICAgdGhpcy5fdmlkZW9GaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmlkZW9Mb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl92aWRlb1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVTdGF0dXNPYnNlcnZlcihjdXJyZW50SXRlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyLnJlcGxhY2VDdXJyZW50SXRlbVdpdGhQbGF5ZXJJdGVtKG51bGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllci5yZXBsYWNlQ3VycmVudEl0ZW1XaXRoUGxheWVySXRlbShuYXRpdmVWaWRlb1BsYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIucmVwbGFjZUN1cnJlbnRJdGVtV2l0aFBsYXllckl0ZW0obmF0aXZlVmlkZW9QbGF5ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlkZW8ucHJvdG90eXBlLnVwZGF0ZUFzc2V0ID0gZnVuY3Rpb24gKG5hdGl2ZVZpZGVvQXNzZXQpIHtcbiAgICAgICAgdmFyIG5ld1BsYXllckl0ZW0gPSBBVlBsYXllckl0ZW0ucGxheWVySXRlbVdpdGhBc3NldChuYXRpdmVWaWRlb0Fzc2V0KTtcbiAgICAgICAgdGhpcy5fc2V0TmF0aXZlVmlkZW8obmV3UGxheWVySXRlbSk7XG4gICAgfTtcbiAgICBWaWRlby5wcm90b3R5cGUuX3NldE5hdGl2ZVBsYXllclNvdXJjZSA9IGZ1bmN0aW9uIChuYXRpdmVQbGF5ZXJTcmMpIHtcbiAgICAgICAgdGhpcy5fc3JjID0gbmF0aXZlUGxheWVyU3JjO1xuICAgICAgICB2YXIgdXJsID0gTlNVUkwuVVJMV2l0aFN0cmluZyh0aGlzLl9zcmMpO1xuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBuZXcgQVZQbGF5ZXIodXJsKTtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH07XG4gICAgVmlkZW8ucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jb250cm9scyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllckNvbnRyb2xsZXIuc2hvd3NQbGF5YmFja0NvbnRyb2xzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wbGF5ZXJDb250cm9sbGVyLnBsYXllciA9IHRoaXMuX3BsYXllcjtcbiAgICAgICAgaWYgKGlzTmFOKHRoaXMud2lkdGgpIHx8IGlzTmFOKHRoaXMuaGVpZ2h0KSkge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0TGF5b3V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubXV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5tdXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9kaWRQbGF5VG9FbmRUaW1lQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLl9kaWRQbGF5VG9FbmRUaW1lT2JzZXJ2ZXIgPSBhcHBsaWNhdGlvbl8xLmlvcy5hZGROb3RpZmljYXRpb25PYnNlcnZlcihBVlBsYXllckl0ZW1EaWRQbGF5VG9FbmRUaW1lTm90aWZpY2F0aW9uLCB0aGlzLkFWUGxheWVySXRlbURpZFBsYXlUb0VuZFRpbWVOb3RpZmljYXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLl9kaWRQbGF5VG9FbmRUaW1lQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbmFibGVTdWJ0aXRsZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnRpdGxpbmcubGFiZWwgPSB0aGlzLl9zdWJ0aXRsZUxhYmVsO1xuICAgICAgICAgICAgdGhpcy5fc3VidGl0bGluZy5jb250YWluZXJWaWV3ID0gdGhpcy5fc3VidGl0bGVMYWJlbENvbnRhaW5lcjtcbiAgICAgICAgICAgIHRoaXMuX3N1YnRpdGxpbmcucGxheWVyID0gdGhpcy5fcGxheWVyO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWaWRlby5wcm90b3R5cGUuX3NldHVwU3VidGl0bGVMYWJlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRPdmVybGF5VmlldyA9IHRoaXMuX3BsYXllckNvbnRyb2xsZXIuY29udGVudE92ZXJsYXlWaWV3O1xuICAgICAgICB0aGlzLl9zdWJ0aXRsZUxhYmVsID0gbmV3IFVJTGFiZWwoKTtcbiAgICAgICAgdGhpcy5fc3VidGl0bGVMYWJlbENvbnRhaW5lciA9IG5ldyBVSVZpZXcoKTtcbiAgICAgICAgY29udGVudE92ZXJsYXlWaWV3LmFkZFN1YnZpZXcodGhpcy5fc3VidGl0bGVMYWJlbENvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuX3N1YnRpdGxlTGFiZWxDb250YWluZXIuYWRkU3Vidmlldyh0aGlzLl9zdWJ0aXRsZUxhYmVsKTtcbiAgICAgICAgdGhpcy5fc3VidGl0bGVMYWJlbENvbnRhaW5lci5iYWNrZ3JvdW5kQ29sb3IgPSBVSUNvbG9yLmJsYWNrQ29sb3I7XG4gICAgICAgIHRoaXMuX3N1YnRpdGxlTGFiZWxDb250YWluZXIubGF5ZXIuY29ybmVyUmFkaXVzID0gMjtcbiAgICAgICAgdGhpcy5fc3VidGl0bGVMYWJlbENvbnRhaW5lci5sYXllci5tYXNrc1RvQm91bmRzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc3VidGl0bGVMYWJlbC50cmFuc2xhdGVzQXV0b3Jlc2l6aW5nTWFza0ludG9Db25zdHJhaW50cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdWJ0aXRsZUxhYmVsQ29udGFpbmVyLnRyYW5zbGF0ZXNBdXRvcmVzaXppbmdNYXNrSW50b0NvbnN0cmFpbnRzID0gZmFsc2U7XG4gICAgICAgIHZhciBjb250YWluZXJWaWV3c0RpY3Rpb25hcnkgPSBuZXcgTlNEaWN0aW9uYXJ5KFt0aGlzLl9zdWJ0aXRsZUxhYmVsXSwgWydzdWJ0aXRsZUxhYmVsJ10pO1xuICAgICAgICB0aGlzLl9zdWJ0aXRsZUxhYmVsQ29udGFpbmVyLmFkZENvbnN0cmFpbnRzKE5TTGF5b3V0Q29uc3RyYWludC5jb25zdHJhaW50c1dpdGhWaXN1YWxGb3JtYXRPcHRpb25zTWV0cmljc1ZpZXdzKFwiSDp8LSg1KS1bc3VidGl0bGVMYWJlbF0tKDUpLXxcIiwgMCwgbnVsbCwgY29udGFpbmVyVmlld3NEaWN0aW9uYXJ5KSk7XG4gICAgICAgIHRoaXMuX3N1YnRpdGxlTGFiZWxDb250YWluZXIuYWRkQ29uc3RyYWludHMoTlNMYXlvdXRDb25zdHJhaW50LmNvbnN0cmFpbnRzV2l0aFZpc3VhbEZvcm1hdE9wdGlvbnNNZXRyaWNzVmlld3MoXCJWOnwtKDApLVtzdWJ0aXRsZUxhYmVsXS0oMCktfFwiLCAwLCBudWxsLCBjb250YWluZXJWaWV3c0RpY3Rpb25hcnkpKTtcbiAgICAgICAgdGhpcy5fc3VidGl0bGVMYWJlbC50ZXh0Q29sb3IgPSBVSUNvbG9yLndoaXRlQ29sb3I7XG4gICAgICAgIHRoaXMuX3N1YnRpdGxlTGFiZWwudGV4dEFsaWdubWVudCA9IDE7XG4gICAgICAgIHRoaXMuX3N1YnRpdGxlTGFiZWwubGluZUJyZWFrTW9kZSA9IDA7XG4gICAgICAgIHRoaXMuX3N1YnRpdGxlTGFiZWwuZm9udCA9IFVJRm9udC5zeXN0ZW1Gb250T2ZTaXplV2VpZ2h0KDE1LCBVSUZvbnRXZWlnaHRSZWd1bGFyKTtcbiAgICAgICAgdGhpcy5fc3VidGl0bGVMYWJlbC5udW1iZXJPZkxpbmVzID0gMDtcbiAgICAgICAgdGhpcy5fc3VidGl0bGVMYWJlbC50cmFuc2xhdGVzQXV0b3Jlc2l6aW5nTWFza0ludG9Db25zdHJhaW50cyA9IGZhbHNlO1xuICAgICAgICB2YXIgdmlld3NEaWN0aW9uYXJ5ID0gbmV3IE5TRGljdGlvbmFyeShbdGhpcy5fc3VidGl0bGVMYWJlbENvbnRhaW5lciwgY29udGVudE92ZXJsYXlWaWV3XSwgWydzdWJ0aXRsZUxhYmVsQ29udGFpbmVyJywgJ3N1cGVydmlldyddKTtcbiAgICAgICAgY29udGVudE92ZXJsYXlWaWV3LmFkZENvbnN0cmFpbnRzKE5TTGF5b3V0Q29uc3RyYWludC5jb25zdHJhaW50c1dpdGhWaXN1YWxGb3JtYXRPcHRpb25zTWV0cmljc1ZpZXdzKFwiSDp8LSg+PTIwKS1bc3VidGl0bGVMYWJlbENvbnRhaW5lcl0tKD49MjApLXxcIiwgMCwgbnVsbCwgdmlld3NEaWN0aW9uYXJ5KSk7XG4gICAgICAgIGNvbnRlbnRPdmVybGF5Vmlldy5hZGRDb25zdHJhaW50cyhOU0xheW91dENvbnN0cmFpbnQuY29uc3RyYWludHNXaXRoVmlzdWFsRm9ybWF0T3B0aW9uc01ldHJpY3NWaWV3cyhcIlY6W3N1cGVydmlld10tKDw9MSktW3N1YnRpdGxlTGFiZWxDb250YWluZXJdXCIsIDUxMiwgbnVsbCwgdmlld3NEaWN0aW9uYXJ5KSk7XG4gICAgICAgIGNvbnRlbnRPdmVybGF5Vmlldy5hZGRDb25zdHJhaW50cyhOU0xheW91dENvbnN0cmFpbnQuY29uc3RyYWludHNXaXRoVmlzdWFsRm9ybWF0T3B0aW9uc01ldHJpY3NWaWV3cyhcIlY6W3N1YnRpdGxlTGFiZWxDb250YWluZXJdLSgyMCktfFwiLCAwLCBudWxsLCB2aWV3c0RpY3Rpb25hcnkpKTtcbiAgICB9O1xuICAgIFZpZGVvLnByb3RvdHlwZS5fdXBkYXRlU3VidGl0bGVzID0gZnVuY3Rpb24gKHN1YnRpdGxlcykge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVTdWJ0aXRsZXMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3VidGl0bGluZy5sb2FkU1JUQ29udGVudEVycm9yKHN1YnRpdGxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGxvYWQgc3VidGl0bGVzOiBcIiArIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBWaWRlby5wcm90b3R5cGUuQVZQbGF5ZXJJdGVtRGlkUGxheVRvRW5kVGltZU5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX3BsYXllci5jdXJyZW50SXRlbSAmJiB0aGlzLl9wbGF5ZXIuY3VycmVudEl0ZW0gPT09IG5vdGlmaWNhdGlvbi5vYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXQodmlkZW9wbGF5ZXJfY29tbW9uXzEuVmlkZW8uZmluaXNoZWRFdmVudCk7XG4gICAgICAgICAgICB0aGlzLl92aWRlb0ZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvb3AgPT09IHRydWUgJiYgdGhpcy5fcGxheWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyLnNlZWtUb1RpbWUoQ01UaW1lTWFrZSg1LCAxMDApKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBWaWRlby5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZpZGVvRmluaXNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvRmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2Vla1RvVGltZShDTVRpbWVNYWtlKDUsIDEwMCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVDdXJyZW50VGltZSAmJiAhdGhpcy5fcGxheWJhY2tUaW1lT2JzZXJ2ZXJBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFBsYXliYWNrVGltZU9ic2VydmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGxheWVyLnBsYXkoKTtcbiAgICB9O1xuICAgIFZpZGVvLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fcGxheWVyLnBhdXNlKCk7XG4gICAgICAgIGlmICh0aGlzLl9wbGF5YmFja1RpbWVPYnNlcnZlckFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlUGxheWJhY2tUaW1lT2JzZXJ2ZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlkZW8ucHJvdG90eXBlLm11dGUgPSBmdW5jdGlvbiAobXV0ZSkge1xuICAgICAgICB0aGlzLl9wbGF5ZXIubXV0ZWQgPSBtdXRlO1xuICAgIH07XG4gICAgVmlkZW8ucHJvdG90eXBlLnNlZWtUb1RpbWUgPSBmdW5jdGlvbiAobXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuX3BsYXllci5jdXJyZW50SXRlbSAmJiB0aGlzLl9wbGF5ZXIuY3VycmVudEl0ZW0uc3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgICB2YXIgc2Vjb25kcyA9IG1zIC8gMTAwMC4wO1xuICAgICAgICAgICAgdmFyIHRpbWVfMSA9IENNVGltZU1ha2VXaXRoU2Vjb25kcyhzZWNvbmRzLCB0aGlzLl9wbGF5ZXIuY3VycmVudFRpbWUoKS50aW1lc2NhbGUpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIuc2Vla1RvVGltZVRvbGVyYW5jZUJlZm9yZVRvbGVyYW5jZUFmdGVyQ29tcGxldGlvbkhhbmRsZXIodGltZV8xLCBrQ01UaW1lWmVybywga0NNVGltZVplcm8sIGZ1bmN0aW9uIChpc0ZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9lbWl0KHZpZGVvcGxheWVyX2NvbW1vbl8xLlZpZGVvLnNlZWtUb1RpbWVDb21wbGV0ZUV2ZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVZQbGF5ZXJJdGVtIGNhbm5vdCBzZXJ2aWNlIGEgc2VlayByZXF1ZXN0IHdpdGggYSBjb21wbGV0aW9uIGhhbmRsZXIgdW50aWwgaXRzIHN0YXR1cyBpcyBSZWFkeVRvUGxheS5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZpZGVvLnByb3RvdHlwZS5nZXREdXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlY29uZHMgPSBDTVRpbWVHZXRTZWNvbmRzKHRoaXMuX3BsYXllci5jdXJyZW50SXRlbS5hc3NldC5kdXJhdGlvbik7XG4gICAgICAgIHZhciBtaWxsaXNlY29uZHMgPSBzZWNvbmRzICogMTAwMC4wO1xuICAgICAgICByZXR1cm4gbWlsbGlzZWNvbmRzO1xuICAgIH07XG4gICAgVmlkZW8ucHJvdG90eXBlLmdldEN1cnJlbnRUaW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fcGxheWVyID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh0aGlzLl9wbGF5ZXIuY3VycmVudFRpbWUoKS52YWx1ZSAvIHRoaXMuX3BsYXllci5jdXJyZW50VGltZSgpLnRpbWVzY2FsZSkgKiAxMDAwO1xuICAgIH07XG4gICAgVmlkZW8ucHJvdG90eXBlLnNldFZvbHVtZSA9IGZ1bmN0aW9uICh2b2x1bWUpIHtcbiAgICAgICAgdGhpcy5fcGxheWVyLnZvbHVtZSA9IHZvbHVtZTtcbiAgICB9O1xuICAgIFZpZGVvLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVTdGF0dXNPYnNlcnZlcih0aGlzLl9wbGF5ZXIuY3VycmVudEl0ZW0pO1xuICAgICAgICBpZiAodGhpcy5fZGlkUGxheVRvRW5kVGltZUFjdGl2ZSkge1xuICAgICAgICAgICAgYXBwbGljYXRpb25fMS5pb3MucmVtb3ZlTm90aWZpY2F0aW9uT2JzZXJ2ZXIodGhpcy5fZGlkUGxheVRvRW5kVGltZU9ic2VydmVyLCBBVlBsYXllckl0ZW1EaWRQbGF5VG9FbmRUaW1lTm90aWZpY2F0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX2RpZFBsYXlUb0VuZFRpbWVBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcGxheWJhY2tUaW1lT2JzZXJ2ZXJBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZVBsYXliYWNrVGltZU9ic2VydmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICB0aGlzLl9wbGF5ZXIucmVwbGFjZUN1cnJlbnRJdGVtV2l0aFBsYXllckl0ZW0obnVsbCk7XG4gICAgICAgIHRoaXMuX3BsYXllckNvbnRyb2xsZXIgPSBudWxsO1xuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBudWxsO1xuICAgIH07XG4gICAgVmlkZW8ucHJvdG90eXBlLl9hZGRTdGF0dXNPYnNlcnZlciA9IGZ1bmN0aW9uIChjdXJyZW50SXRlbSkge1xuICAgICAgICB0aGlzLl9vYnNlcnZlckFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGN1cnJlbnRJdGVtLmFkZE9ic2VydmVyRm9yS2V5UGF0aE9wdGlvbnNDb250ZXh0KHRoaXMuX29ic2VydmVyLCBcInN0YXR1c1wiLCAwLCBudWxsKTtcbiAgICB9O1xuICAgIFZpZGVvLnByb3RvdHlwZS5fcmVtb3ZlU3RhdHVzT2JzZXJ2ZXIgPSBmdW5jdGlvbiAoY3VycmVudEl0ZW0pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9vYnNlcnZlckFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29ic2VydmVyQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChjdXJyZW50SXRlbSkge1xuICAgICAgICAgICAgY3VycmVudEl0ZW0ucmVtb3ZlT2JzZXJ2ZXJGb3JLZXlQYXRoKHRoaXMuX29ic2VydmVyLCBcInN0YXR1c1wiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlkZW8ucHJvdG90eXBlLl9hZGRQbGF5YmFja1RpbWVPYnNlcnZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fcGxheWJhY2tUaW1lT2JzZXJ2ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICB2YXIgX2ludGVydmFsID0gQ01UaW1lTWFrZSgxLCA1KTtcbiAgICAgICAgdGhpcy5fcGxheWJhY2tUaW1lT2JzZXJ2ZXIgPSB0aGlzLl9wbGF5ZXIuYWRkUGVyaW9kaWNUaW1lT2JzZXJ2ZXJGb3JJbnRlcnZhbFF1ZXVlVXNpbmdCbG9jayhfaW50ZXJ2YWwsIG51bGwsIGZ1bmN0aW9uIChjdXJyZW50VGltZSkge1xuICAgICAgICAgICAgdmFyIF9zZWNvbmRzID0gQ01UaW1lR2V0U2Vjb25kcyhjdXJyZW50VGltZSk7XG4gICAgICAgICAgICB2YXIgX21pbGxpc2Vjb25kcyA9IF9zZWNvbmRzICogMTAwMC4wO1xuICAgICAgICAgICAgX3RoaXMubm90aWZ5KHtcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6IFZpZGVvLmN1cnJlbnRUaW1lVXBkYXRlZEV2ZW50LFxuICAgICAgICAgICAgICAgIG9iamVjdDogX3RoaXMsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IF9taWxsaXNlY29uZHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFZpZGVvLnByb3RvdHlwZS5fcmVtb3ZlUGxheWJhY2tUaW1lT2JzZXJ2ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3BsYXliYWNrVGltZU9ic2VydmVyQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BsYXllci5yZW1vdmVUaW1lT2JzZXJ2ZXIodGhpcy5fcGxheWJhY2tUaW1lT2JzZXJ2ZXIpO1xuICAgIH07XG4gICAgVmlkZW8ucHJvdG90eXBlLl9hdXRvcGxheUNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvcGxheSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZpZGVvLnByb3RvdHlwZS5wbGF5YmFja1JlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl92aWRlb0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2VtaXQodmlkZW9wbGF5ZXJfY29tbW9uXzEuVmlkZW8ucGxheWJhY2tSZWFkeUV2ZW50KTtcbiAgICB9O1xuICAgIFZpZGVvLnByb3RvdHlwZS5wbGF5YmFja1N0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl92aWRlb1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9lbWl0KHZpZGVvcGxheWVyX2NvbW1vbl8xLlZpZGVvLnBsYXliYWNrU3RhcnRFdmVudCk7XG4gICAgfTtcbiAgICByZXR1cm4gVmlkZW87XG59KHZpZGVvcGxheWVyX2NvbW1vbl8xLlZpZGVvKSk7XG5leHBvcnRzLlZpZGVvID0gVmlkZW87XG52YXIgUGxheWVyT2JzZXJ2ZXJDbGFzcyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFBsYXllck9ic2VydmVyQ2xhc3MsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUGxheWVyT2JzZXJ2ZXJDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBQbGF5ZXJPYnNlcnZlckNsYXNzLnByb3RvdHlwZS5vYnNlcnZlVmFsdWVGb3JLZXlQYXRoT2ZPYmplY3RDaGFuZ2VDb250ZXh0ID0gZnVuY3Rpb24gKHBhdGgsIG9iaiwgY2hhbmdlLCBjb250ZXh0KSB7XG4gICAgICAgIGlmIChwYXRoID09PSBcInN0YXR1c1wiKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tcIl9vd25lclwiXS5fcGxheWVyLmN1cnJlbnRJdGVtLnN0YXR1cyA9PT0gMSAmJiAhdGhpc1tcIl9vd25lclwiXS5fdmlkZW9Mb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzW1wiX293bmVyXCJdLnBsYXliYWNrUmVhZHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFBsYXllck9ic2VydmVyQ2xhc3M7XG59KE5TT2JqZWN0KSk7XG4iLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKSk7XG4iLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91dGlscy90eXBlc1wiKSk7XG4iLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91dGlscy91dGlsc1wiKSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9