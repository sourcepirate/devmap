webpackJsonp([0],{

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(24);

var _routes = __webpack_require__(376);

var _routes2 = _interopRequireDefault(_routes);

var _reactRedux = __webpack_require__(193);

var _store = __webpack_require__(380);

var _store2 = _interopRequireDefault(_store);

var _serviceloader = __webpack_require__(379);

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

var _mapaction = __webpack_require__(368);

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

/***/ 368:
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

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactMdl = __webpack_require__(191);

var _mapdetail = __webpack_require__(372);

var _mapdetail2 = _interopRequireDefault(_mapdetail);

var _reactRedux = __webpack_require__(193);

var _redux = __webpack_require__(128);

var _actions = __webpack_require__(367);

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

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Map = exports.GridList = exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactMdl = __webpack_require__(191);

var _grid = __webpack_require__(369);

var _grid2 = _interopRequireDefault(_grid);

var _map = __webpack_require__(371);

var _map2 = _interopRequireDefault(_map);

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
exports.Map = _map2.default;

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(193);

var _redux = __webpack_require__(128);

var _actions = __webpack_require__(367);

var actionCreators = _interopRequireWildcard(_actions);

var _maps = __webpack_require__(939);

var canvasMaps = _interopRequireWildcard(_maps);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_Component) {
    _inherits(Map, _Component);

    function Map(props) {
        _classCallCheck(this, Map);

        return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));
    }

    _createClass(Map, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var canvas = this.refs.can;
            var params = this.props.params;

            var maps = this.props.maps.filter(function (x) {
                return x.id == params.id;
            });
            console.log(maps[0].map);
            var treedata = canvasMaps.transform(maps[0].map);
            canvasMaps.draw(canvas, treedata);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('canvas', { ref: 'can' });
        }
    }]);

    return Map;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        maps: state.maps
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

Map = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Map);

exports.default = Map;

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactMdl = __webpack_require__(191);

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

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(124);

var _reduxDevtoolsLogMonitor = __webpack_require__(913);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(904);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

var _reduxDevtoolsDispatch = __webpack_require__(902);

var _reduxDevtoolsDispatch2 = _interopRequireDefault(_reduxDevtoolsDispatch);

var _reduxSliderMonitor = __webpack_require__(928);

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

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _redux = __webpack_require__(128);

var _maps = __webpack_require__(375);

var _maps2 = _interopRequireDefault(_maps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = exports.reducers = (0, _redux.combineReducers)({ maps: _maps2.default });

/***/ }),

/***/ 375:
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
            return [].concat(_toConsumableArray(action.maps));
        default:
            return state;
    }
}

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _reactRouter = __webpack_require__(329);

var _components = __webpack_require__(370);

var routes = React.createElement(
   _reactRouter.Router,
   { history: _reactRouter.browserHistory },
   React.createElement(
      _reactRouter.Route,
      { path: '/', component: _components.App },
      React.createElement(_reactRouter.IndexRoute, { component: _components.GridList }),
      React.createElement(_reactRouter.Route, { path: '/view/:id', component: _components.Map })
   )
);

exports.default = routes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _mapsaga = __webpack_require__(378);

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

/***/ 378:
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

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(596);

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

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(128);

var _devtool = __webpack_require__(373);

var _devtool2 = _interopRequireDefault(_devtool);

var _index = __webpack_require__(374);

var _reduxLogger = __webpack_require__(921);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxSaga = __webpack_require__(922);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _sagas = __webpack_require__(377);

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

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(348);
module.exports = __webpack_require__(347);


/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.textFilter = { label: 'Text Filter (regex)', type: 'text', val: "." };
module.exports.fontSize = { label: "Font size", model: "fontSize", min: 5, max: 50, val: 13 };
module.exports.connectorWidth = { label: 'Connector width', model: "connectorWidth", min: 20, max: 100, val: 65 };
module.exports.connectorSteepness = { label: 'Connector steepness', min: 0.1, max: 1, step: 0.01, val: 0.65 };
module.exports.connectorLineWidth = { label: 'Line width', min: 0.5, max: 10, step: 0.25, val: 4.5 };
module.exports.nodeMarginTop = { label: ' Top margin', min: 0, max: 50, val: 5 };
module.exports.nodeMarginBottom = { label: ' Bottom margin', min: 0, max: 50, val: 5 };
module.exports.useGrayscale = { label: 'Use grayscale', type: 'boolean', val: 0 };

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseObjectTree = parseObjectTree;
exports.parseTree = parseTree;
exports.draw = draw;
exports.transform = transform;

var _properties = __webpack_require__(938);

var props = _interopRequireWildcard(_properties);

var _node = __webpack_require__(940);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function parseObjectTree(branch) {
    var isRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var node = new _node2.default(branch.name, isRoot);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = branch.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;

            node.addChild(parseObjectTree(child, false));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return node;
}

function parseTree(data) {
    if (data.children.length == 0) return;
    return parseObjectTree(data, true);
}

function draw(canvas, data) {
    var ctx = canvas.getContext('2d');
    var tree = parseTree(data);
    console.log(tree);
    var context = tree.draw();
    // resize the canvas to fit the drawing...
    canvas.width = context.width + 25;
    canvas.height = context.height + 25;
    ctx.drawImage(context, 25, 25);
}

function transform(data) {
    var result = {};
    for (var key in data) {
        var pair = data[key];
        console.log(pair);
        result["name"] = pair["label"];
        result["id"] = pair["id"];
        result["description"] = pair["description"];
        result["children"] = [];
        var childs = data[key]["children"];
        for (var child_key in childs) {
            var new_pair = {};
            new_pair[child_key] = childs[child_key];
            result["children"].push(transform(new_pair));
        }
    }
    return result;
}

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(942);

var utils = _interopRequireWildcard(_utils);

var _properties = __webpack_require__(938);

var _properties2 = _interopRequireDefault(_properties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fontFamily = "Open Sans";

var labelPaddingBottom = 8;
var labelPaddingRight = 10;

var DEBUG = false;

var TreeNode = function () {
    function TreeNode(label) {
        var isRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, TreeNode);

        this.name = label;
        this.labelLines = this.name.split("\n");
        this.isRoot = isRoot;
        this.parent = undefined;
        this.children = [];
    }

    _createClass(TreeNode, [{
        key: 'addChild',
        value: function addChild(child) {
            child.parent = this;
            this.children.push(child);
        }
    }, {
        key: 'addChildren',
        value: function addChildren() {
            for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
                children[_key] = arguments[_key];
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var child = _step.value;

                    this.addChild(child);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'draw',
        value: function draw(currentBranchColor) {
            var _this = this;

            var that = this;

            var dl = function dl(x, y) {
                var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#00ff00";
                var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;

                that.ctx.fillStyle = c;
                that.ctx.fillRect(x, y, w, 1);
            };

            var dr = function dr(x, y, w, h) {
                var c = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#00ff00";

                that.ctx.lineWidth = 1;
                that.ctx.strokeStyle = c;
                that.ctx.rect(x, y, w, h);
                that.ctx.stroke();
            };

            this.canvas = document.createElement("canvas");
            this.ctx = this.canvas.getContext("2d");

            // The width of the label will be the width of the widest line
            this.ctx.font = _properties2.default.fontSize.val + "px " + fontFamily;

            // The height of the lines of text (only)
            this.textHeight = _properties2.default.fontSize.val * this.labelLines.length;

            // The height of the text + the separation from the line + the line height + the label margin
            this.composedHeight = this.textHeight + labelPaddingBottom + _properties2.default.connectorLineWidth.val;

            // The composed height plus the margin
            this.paddedHeight = this.composedHeight + _properties2.default.nodeMarginTop.val;

            this.labelHeight = _properties2.default.nodeMarginTop.val + // top margin
            _properties2.default.fontSize.val * (this.labelLines.length + 1) + // text lines' height
            _properties2.default.nodeMarginBottom.val // bottom margin
            ;

            this.labelWidth = Math.ceil(Math.max.apply(Math, _toConsumableArray(this.labelLines.map(function (c) {
                return _this.ctx.measureText(c).width;
            }))));

            if (this.isLeaf) {
                // Resize the canvas
                this.canvas.width = this.labelWidth + labelPaddingRight * 2;
                this.canvas.height = this.labelHeight;

                // Set the font
                this.ctx.font = _properties2.default.fontSize.val + "px " + fontFamily;

                // Draw the text lines
                for (var i = 0; i < this.labelLines.length; i++) {
                    this.ctx.fillText(this.labelLines[i], 0, _properties2.default.fontSize.val * (i + 1) + _properties2.default.nodeMarginTop.val);
                }

                // The anchorPoint defines where the line should start
                this.anchorPoint = {
                    x: 0,
                    y: this.labelLines.length * _properties2.default.fontSize.val + labelPaddingBottom + _properties2.default.nodeMarginTop.val
                };
            } else {
                // If this is the root, we need to generate a random color for each branch
                if (this.isRoot) {
                    var branchColors = this.children.map(function (c) {
                        return utils.generateRandomColor(_properties2.default.useGrayscale);
                    });
                    var canvases = this.children.map(function (c, i) {
                        return c.draw(branchColors[i]);
                    });
                }

                // Otherwise, use the received branchColor
                else {
                        var canvases = this.children.map(function (c, i) {
                            return c.draw(currentBranchColor);
                        });
                    }

                // Get the vertical positions for the children
                var childrenVerticalPositions = [0];

                // Each position is the sum of the acumulated heights of the previous elements
                for (var i = 0; i < canvases.length; i++) {
                    childrenVerticalPositions[i + 1] = childrenVerticalPositions[i] + canvases[i].height;
                }

                var childrenHeight = childrenVerticalPositions[canvases.length];

                this.anchorPoint = {
                    x: this.isRoot ? 10 : 0,
                    y: 0
                };

                /*
                 If the height of the children is smaller than the height of the node, take the height of the node and
                 don't center it vertically.
                 Otherwise, take the max between 2*height of the node and the children height, and center it vertically.
                 */

                if (childrenHeight < this.composedHeight + _properties2.default.nodeMarginTop.val * 2) {
                    this.canvas.height = this.composedHeight + _properties2.default.nodeMarginTop.val * 2;
                    this.anchorPoint.y = this.canvas.height / 2 + this.composedHeight / 2;
                } else {
                    this.canvas.height = Math.max(childrenVerticalPositions[canvases.length], this.composedHeight * 2);
                    this.anchorPoint.y = this.canvas.height / 2;
                }

                console.log(this.label, this.canvas.height, childrenVerticalPositions[canvases.length]);

                // Compute left margin (label width + separation)
                var leftMargin = 10 + this.labelWidth + _properties2.default.connectorWidth.val;

                // Set the width to the leftMargin plus the width of the widest child branch
                this.canvas.width = leftMargin + Math.max.apply(Math, _toConsumableArray(canvases.map(function (c) {
                    return c.width;
                })));
                this.ctx.font = _properties2.default.fontSize.val + "px " + fontFamily;

                // Draw each child
                for (var i = 0; i < canvases.length; i++) {
                    if (this.isRoot) {
                        currentBranchColor = branchColors[i];
                    }

                    this.ctx.drawImage(canvases[i], leftMargin, childrenVerticalPositions[i]);

                    var connector_a = {
                        x: this.anchorPoint.x + this.labelWidth + labelPaddingRight,
                        y: this.anchorPoint.y
                    };

                    var connector_b = {
                        x: leftMargin,
                        y: childrenVerticalPositions[i] + this.children[i].anchorPoint.y
                    };

                    this.ctx.beginPath();
                    this.ctx.moveTo(connector_a.x, connector_a.y);

                    this.ctx.bezierCurveTo(connector_a.x + _properties2.default.connectorSteepness.val * _properties2.default.connectorWidth.val, connector_a.y, connector_b.x - _properties2.default.connectorSteepness.val * _properties2.default.connectorWidth.val, connector_b.y, connector_b.x, connector_b.y);

                    this.ctx.lineTo(connector_b.x + this.children[i].labelWidth + labelPaddingRight, connector_b.y);
                    this.ctx.lineWidth = _properties2.default.connectorLineWidth.val;
                    this.ctx.lineCap = "round";
                    this.ctx.strokeStyle = currentBranchColor;
                    this.ctx.stroke();
                }

                // For the root node, print a containing rectangle and always center the text
                if (this.isRoot) {
                    this.ctx.fillStyle = "#ffffff";
                    this.ctx.lineWidth = 3;
                    utils.roundRect(this.ctx, 2, this.canvas.height / 2 - this.labelLines.length * _properties2.default.fontSize.val, this.labelWidth + 18, _properties2.default.fontSize.val * (this.labelLines.length + 1.5), 5, true, true);

                    this.ctx.fillStyle = "#000000";

                    for (var i = 0; i < this.labelLines.length; i++) {
                        this.ctx.fillText(this.labelLines[i], 10, // Fixed margin from the left
                        this.canvas.height / 2 // Vertical center
                        + _properties2.default.fontSize.val / 2 // Middle of the line height
                        - _properties2.default.fontSize.val * (this.labelLines.length - i - 1) // Correctly account for multilines
                        );
                    }
                } else {
                    this.ctx.fillStyle = "#000000";

                    for (var i = 0; i < this.labelLines.length; i++) {
                        this.ctx.fillText(this.labelLines[i], 10, // Fixed margin from the left
                        this.anchorPoint.y // From the anchor point
                        - labelPaddingBottom // Move up the padding
                        - _properties2.default.fontSize.val * (this.labelLines.length - i - 1));
                    }
                }
            }

            if (DEBUG) {
                dr(1, 1, this.canvas.width - 1, this.canvas.height - 1);
            }

            return this.canvas;
        }
    }, {
        key: 'isLeaf',
        get: function get() {
            return this.children.length == 0;
        }
    }]);

    return TreeNode;
}();

exports.default = TreeNode;
;

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.roundRect = roundRect;
exports.getRandomInt = getRandomInt;
exports.generateRandomColor = generateRandomColor;
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
        var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
    if (stroke) {
        ctx.stroke();
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function generateRandomColor(useGrayscale) {

    var baseColor = [256, 256, 256];
    var red = getRandomInt(0, 256);
    var green = getRandomInt(0, 256);
    var blue = getRandomInt(0, 256);

    // mix the color

    var mixture = 0.7;

    red = Math.round(red * mixture + baseColor[0] * (1 - mixture));
    green = Math.round(green * mixture + baseColor[1] * (1 - mixture));
    blue = Math.round(blue * mixture + baseColor[2] * (1 - mixture));

    if (useGrayscale.val == 1) {
        return rgbToHex(red, red, red);
    } else {
        return rgbToHex(red, green, blue);
    }
}

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canvas = __webpack_require__(941);

Object.keys(_canvas).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _canvas[key];
    }
  });
});

/***/ })

},[937]);
//# sourceMappingURL=bundle.js.map