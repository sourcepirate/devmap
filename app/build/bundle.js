webpackJsonp([0],{

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(24);

var _routes = __webpack_require__(373);

var _routes2 = _interopRequireDefault(_routes);

var _reactRedux = __webpack_require__(319);

var _store = __webpack_require__(377);

var _store2 = _interopRequireDefault(_store);

var _serviceloader = __webpack_require__(376);

var _serviceloader2 = _interopRequireDefault(_serviceloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if ('serviceWorker' in navigator) {
    var loader = new _serviceloader2.default('./sw.js');
    loader.on('update', function (reg) {
        console.log('updating');
        reg.postMessage({
            action: 'skip'
        });
    });
    loader.on('installed', function () {
        console.log("installed");
    });
}

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _routes2.default
), document.getElementById("app"));

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactMdl = __webpack_require__(190);

var _mapdetail = __webpack_require__(369);

var _mapdetail2 = _interopRequireDefault(_mapdetail);

var _reactRedux = __webpack_require__(319);

var _redux = __webpack_require__(201);

var _actions = __webpack_require__(935);

var actionCreators = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridList = function (_Component) {
    _inherits(GridList, _Component);

    function GridList(props) {
        _classCallCheck(this, GridList);

        return _possibleConstructorReturn(this, (GridList.__proto__ || Object.getPrototypeOf(GridList)).call(this, props));
    }

    _createClass(GridList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.update();
        }
    }, {
        key: 'render',
        value: function render() {
            var maps = this.props.maps;

            console.log(maps);
            return _react2.default.createElement(
                _reactMdl.Grid,
                null,
                _react2.default.createElement(
                    _reactMdl.Cell,
                    { col: 12, align: 'middle' },
                    maps.map(function (x, i) {
                        return _react2.default.createElement(_mapdetail2.default, _extends({}, x, { key: i }));
                    })
                )
            );
        }
    }]);

    return GridList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        maps: state.maps
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

GridList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GridList);

exports.default = GridList;

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GridList = exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactMdl = __webpack_require__(190);

var _grid = __webpack_require__(367);

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { width: 100 } },
                _react2.default.createElement(
                    _reactMdl.Layout,
                    { fixedHeader: true },
                    _react2.default.createElement(_reactMdl.Header, { title: 'DEVMAP' }),
                    this.props.children
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.App = App;
exports.GridList = _grid2.default;

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactMdl = __webpack_require__(190);

var _reactRouter = __webpack_require__(329);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapDetail = function (_Component) {
    _inherits(MapDetail, _Component);

    function MapDetail(props) {
        _classCallCheck(this, MapDetail);

        return _possibleConstructorReturn(this, (MapDetail.__proto__ || Object.getPrototypeOf(MapDetail)).call(this, props));
    }

    _createClass(MapDetail, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                name = _props.name,
                description = _props.description,
                id = _props.id;

            var apiName = "/view/" + id;
            return _react2.default.createElement(
                _reactMdl.Card,
                { shadow: 1, style: { margin: '5px auto' } },
                _react2.default.createElement(
                    _reactMdl.CardTitle,
                    { expand: true, style: { color: 'blue', align: 'center' } },
                    name
                ),
                _react2.default.createElement(
                    _reactMdl.CardText,
                    null,
                    description
                ),
                _react2.default.createElement(
                    _reactMdl.CardActions,
                    { border: true },
                    _react2.default.createElement(
                        _reactMdl.Button,
                        { primary: true },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: apiName },
                            'View Map'
                        )
                    )
                )
            );
        }
    }]);

    return MapDetail;
}(_react.Component);

exports.default = MapDetail;

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(124);

var _reduxDevtoolsLogMonitor = __webpack_require__(910);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(901);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

var _reduxDevtoolsDispatch = __webpack_require__(899);

var _reduxDevtoolsDispatch2 = _interopRequireDefault(_reduxDevtoolsDispatch);

var _reduxSliderMonitor = __webpack_require__(925);

var _reduxSliderMonitor2 = _interopRequireDefault(_reduxSliderMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create the DevTools component and export it.
 */
exports.default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
  _reduxDevtoolsDockMonitor2.default,
  {
    toggleVisibilityKey: 'ctrl-h',
    changePositionKey: 'ctrl-q',
    changeMonitorKey: 'ctrl-m',
    defaultIsVisible: true
  },
  _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, { theme: 'tomorrow' }),
  _react2.default.createElement(_reduxDevtoolsDispatch2.default, null),
  _react2.default.createElement(_reduxSliderMonitor2.default, { keyboardEnabled: true })
));

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _redux = __webpack_require__(201);

var _maps = __webpack_require__(372);

var _maps2 = _interopRequireDefault(_maps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = exports.reducers = (0, _redux.combineReducers)({ maps: _maps2.default });

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = maps;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function maps() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'UPDATE_MAPS':
            return [].concat(_toConsumableArray(state), _toConsumableArray(action.maps));
        default:
            return state;
    }
}

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(329);

var _components = __webpack_require__(368);

var routes = React.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  React.createElement(
    _reactRouter.Route,
    { path: '/', component: _components.App },
    React.createElement(_reactRouter.IndexRoute, { component: _components.GridList })
  )
);

exports.default = routes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _mapsaga = __webpack_require__(375);

var _marked = [rootSaga].map(regeneratorRuntime.mark);

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("sagas spawned");
          _context.next = 3;
          return [(0, _mapsaga.createMapSaga)()];

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createMapSaga = createMapSaga;

var _axios = __webpack_require__(349);

var _axios2 = _interopRequireDefault(_axios);

var _effects = __webpack_require__(340);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [getMapDetails, createMapSaga].map(regeneratorRuntime.mark);

function getMaps() {
    return _axios2.default.get("/api/list");
}

function getMapDetails() {
    var results;
    return regeneratorRuntime.wrap(function getMapDetails$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.call)(getMaps);

                case 2:
                    results = _context.sent;
                    _context.next = 5;
                    return (0, _effects.put)({
                        type: 'UPDATE_MAPS',
                        maps: results.data
                    });

                case 5:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

function createMapSaga() {
    return regeneratorRuntime.wrap(function createMapSaga$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _effects.takeEvery)('FETCH_MAPS', getMapDetails);

                case 2:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(593);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServiceLoader = function (_EventEmitter) {
    _inherits(ServiceLoader, _EventEmitter);

    function ServiceLoader(scriptname) {
        _classCallCheck(this, ServiceLoader);

        var _this = _possibleConstructorReturn(this, (ServiceLoader.__proto__ || Object.getPrototypeOf(ServiceLoader)).call(this));

        _this.script = scriptname;
        var onSuccess = _this.onSuccess.bind(_this);
        var onError = _this.onError.bind(_this);
        navigator.serviceWorker.register(scriptname).then(function (reg) {
            return onSuccess(reg);
        }).catch(function (err) {
            return onError(err);
        });
        return _this;
    }

    _createClass(ServiceLoader, [{
        key: 'onSuccess',
        value: function onSuccess(reg) {
            console.log(reg.waiting);
            console.log(reg.installing);
            var self = this;
            console.log("registed");
            if (!navigator.serviceWorker.controller) return;

            if (reg.waiting) {
                self.emit('update', reg.waiting);
                return;
            }
            if (reg.installing) {
                var track = this.onTrack.bind(this, reg.installing);
                track();
                return;
            }

            reg.addEventListener('updatefound', function () {
                console.log("update found");
                self.onTrack(reg.installing);
            });

            reg.addEventListener('controllerchange', function () {
                window.location.reload();
            });
        }
    }, {
        key: 'onError',
        value: function onError(err) {
            console.error(err);
        }
    }, {
        key: 'onTrack',
        value: function onTrack(event) {
            var self = this;
            console.log("tracking");
            event.addEventListener('statechange', function () {
                if (event.state == 'installed') {
                    self.emit('installed', event);
                }
            });
        }
    }]);

    return ServiceLoader;
}(_events2.default);

exports.default = ServiceLoader;

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(201);

var _devtool = __webpack_require__(370);

var _devtool2 = _interopRequireDefault(_devtool);

var _index = __webpack_require__(371);

var _reduxLogger = __webpack_require__(918);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxSaga = __webpack_require__(919);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _sagas = __webpack_require__(374);

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhancers = void 0;
var sagaMiddleWare = (0, _reduxSaga2.default)();
var middleware = (0, _redux.applyMiddleware)(sagaMiddleWare);
if (process.env.NODE_ENV == 'production') {
  enhancers = (0, _redux.compose)(middleware);
} else {
  enhancers = (0, _redux.compose)(middleware, _devtool2.default.instrument());
}
var store = (0, _redux.createStore)(_index.reducers, {}, enhancers);
sagaMiddleWare.run(_sagas2.default);
exports.default = store;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(348);
module.exports = __webpack_require__(347);


/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapaction = __webpack_require__(936);

Object.keys(_mapaction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mapaction[key];
    }
  });
});

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.update = update;
function update() {
    return {
        type: 'FETCH_MAPS'
    };
}

/***/ })

},[934]);
//# sourceMappingURL=bundle.js.map