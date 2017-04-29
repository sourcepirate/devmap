webpackJsonp([0],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseObjectTree = parseObjectTree;
exports.parseTree = parseTree;
exports.draw = draw;
exports.transform = transform;
exports.find = find;

var _properties = __webpack_require__(211);

var props = _interopRequireWildcard(_properties);

var _node = __webpack_require__(379);

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

function find(data, id) {
    if (data['id'] === id) {
        return data;
    } else {
        for (var index in data.children) {
            var child = data.children[index];
            var value = find(child, id);
            if (value) return value;
        }
    }
    return;
}

/***/ }),

/***/ 211:
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

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(23);

var _routes = __webpack_require__(383);

var _routes2 = _interopRequireDefault(_routes);

var _reactRedux = __webpack_require__(69);

var _store = __webpack_require__(387);

var _store2 = _interopRequireDefault(_store);

var _serviceloader = __webpack_require__(386);

var _serviceloader2 = _interopRequireDefault(_serviceloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// if ('serviceWorker' in navigator) {
//     const loader = new Sloader('./sw.js');
//     loader.on('update', function(reg){
//         console.log('updating');
//         reg.postMessage({
//             action: 'skip'
//         });
//     });
//     loader.on('installed', () => {console.log("installed")});
// }
(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _routes2.default
), document.getElementById("app"));

/***/ }),

/***/ 370:
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

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.editTreeNode = editTreeNode;
exports.createTreeNode = createTreeNode;
exports.removeTreeNode = removeTreeNode;
function editTreeNode(id, parent, data) {
    return {
        type: 'EDIT_TREE_NODE',
        payload: {
            id: id,
            parent: parent,
            data: data
        }
    };
}

function createTreeNode(id, parent, data) {
    return {
        type: 'CREATE_TREE_NODE',
        payload: {
            id: id,
            parent: parent,
            data: data
        }
    };
}

function removeTreeNode(id, parent) {
    return {
        type: 'REMOVE_TREE_NODE',
        payload: {
            id: id,
            parent: parent
        }
    };
}

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMdl = __webpack_require__(87);

var _reactRedux = __webpack_require__(69);

var _redux = __webpack_require__(57);

var _actions = __webpack_require__(90);

var actionCreators = _interopRequireWildcard(_actions);

var _maps = __webpack_require__(134);

var canvasMaps = _interopRequireWildcard(_maps);

var _reactRouter = __webpack_require__(201);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var themes = ["Indigo", "Teal", "Green", "Red", "Orange"];
var getRandom = function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

var EditMap = function (_Component) {
    _inherits(EditMap, _Component);

    function EditMap(props) {
        _classCallCheck(this, EditMap);

        return _possibleConstructorReturn(this, (EditMap.__proto__ || Object.getPrototypeOf(EditMap)).call(this, props));
    }

    _createClass(EditMap, [{
        key: 'render',
        value: function render() {
            console.log(this.props);
            var _props = this.props,
                data = _props.data,
                offset = _props.offset,
                offsetWidth = _props.offsetWidth,
                id = _props.id,
                onEdit = _props.onEdit,
                onAdd = _props.onAdd,
                onClose = _props.onClose;

            var editUrl = onEdit(id);
            var addUrl = onAdd(id);
            var removeUrl = onClose(id);
            var theme = getRandom(themes);
            console.log(data.children);
            return _react2.default.createElement(
                _reactMdl.Card,
                { shadow: 0, style: { marginLeft: offset, display: "inline-block", width: offsetWidth, border: "0.5px solid " + theme } },
                _react2.default.createElement(
                    _reactMdl.CardTitle,
                    { style: { color: "white", textTransform: "uppercase", background: theme } },
                    ' ',
                    data.name,
                    ' '
                ),
                data.children.map(function (child) {
                    return _react2.default.createElement(EditMap, { data: child,
                        key: child.id,
                        offset: offset + 5,
                        offsetWidth: offsetWidth - 9,
                        id: child.id,
                        onAdd: onAdd,
                        onEdit: onEdit,
                        onClose: onClose });
                }),
                _react2.default.createElement(
                    _reactMdl.CardText,
                    { style: { color: "black" } },
                    data.description
                ),
                _react2.default.createElement(
                    _reactMdl.CardMenu,
                    { style: { color: 'white' } },
                    _react2.default.createElement(_reactMdl.IconButton, { name: 'edit', onClick: function onClick() {
                            return _reactRouter.browserHistory.push(editUrl);
                        } }),
                    _react2.default.createElement(_reactMdl.IconButton, { name: 'add', onClick: function onClick() {
                            return _reactRouter.browserHistory.push(addUrl);
                        } }),
                    _react2.default.createElement(_reactMdl.IconButton, { name: 'close', onClick: function onClick() {
                            return _reactRouter.browserHistory.push(removeUrl);
                        } })
                )
            );
        }
    }]);

    return EditMap;
}(_react.Component);

EditMap.defaultProps = {
    offset: 0,
    offsetWidth: 500
};

var Edit = function (_Component2) {
    _inherits(Edit, _Component2);

    function Edit(props) {
        _classCallCheck(this, Edit);

        return _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));
    }

    _createClass(Edit, [{
        key: 'render',
        value: function render() {
            var params = this.props.params;

            var maps = this.props.maps.filter(function (x) {
                return x.id == params.id;
            });
            var data = canvasMaps.transform(maps[0].map);
            console.log(data);
            console.log("rendering");
            return _react2.default.createElement(
                'div',
                { style: { margin: "auto", textAlign: "center", width: "50%", marginTop: 10 } },
                _react2.default.createElement(EditMap, { data: data,
                    offset: 0,
                    id: data.id,
                    onEdit: this.onEdit.bind(this),
                    onAdd: this.onAdd.bind(this),
                    onClose: this.onRemove.bind(this) })
            );
        }
    }, {
        key: 'getUrlFor',
        value: function getUrlFor(id, verb) {
            return '/' + this.props.params.id + '/' + verb + '/' + id;
        }
    }, {
        key: 'onEdit',
        value: function onEdit(id) {
            return this.getUrlFor(id, 'edit');
        }
    }, {
        key: 'onRemove',
        value: function onRemove(id) {
            return this.getUrlFor(id, 'remove');
        }
    }, {
        key: 'onAdd',
        value: function onAdd(id) {
            return this.getUrlFor(id, 'add');
        }
    }]);

    return Edit;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        maps: state.maps
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

Edit = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Edit);

exports.default = Edit;

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(69);

var _reactMdl = __webpack_require__(87);

var _redux = __webpack_require__(57);

var _actions = __webpack_require__(90);

var actionCreators = _interopRequireWildcard(_actions);

var _maps = __webpack_require__(134);

var canvasUtils = _interopRequireWildcard(_maps);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditNode = function (_Component) {
    _inherits(EditNode, _Component);

    function EditNode(props) {
        _classCallCheck(this, EditNode);

        var _this = _possibleConstructorReturn(this, (EditNode.__proto__ || Object.getPrototypeOf(EditNode)).call(this, props));

        _this.state = {
            name: '',
            description: ''
        };
        return _this;
    }

    _createClass(EditNode, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props$params = this.props.params,
                id = _props$params.id,
                node = _props$params.node;

            console.log("Current Node ID", node);
            var data = this.props.maps.filter(function (x) {
                return x.id == id;
            });
            var transformed = data[0].map;
            var tfm = canvasUtils.transform(transformed);
            console.log(tfm);

            var _canvasUtils$find = canvasUtils.find(tfm, node),
                name = _canvasUtils$find.name,
                description = _canvasUtils$find.description;

            this.setState({
                name: name,
                description: description
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                name = _state.name,
                description = _state.description;

            return _react2.default.createElement(
                _reactMdl.Card,
                { shadow: 0, style: { margin: "auto", marginTop: 50 } },
                _react2.default.createElement(
                    _reactMdl.CardTitle,
                    null,
                    ' Edit Node '
                ),
                _react2.default.createElement(
                    _reactMdl.CardText,
                    null,
                    _react2.default.createElement(_reactMdl.Textfield, { label: 'Name',
                        value: name,
                        style: { marginLeft: 5 },
                        required: true,
                        onChange: function onChange(e) {
                            return _this2.setState({ name: e.target.value });
                        } }),
                    _react2.default.createElement(_reactMdl.Textfield, { label: 'Description',
                        value: description,
                        rows: 3,
                        style: { marginLeft: 5 },
                        required: true,
                        onChange: function onChange(e) {
                            return _this2.setState({ description: e.target.value });
                        } })
                ),
                _react2.default.createElement(
                    _reactMdl.CardActions,
                    null,
                    _react2.default.createElement(
                        _reactMdl.Button,
                        { primary: true, onClick: this.onOk.bind(this) },
                        ' Update '
                    )
                )
            );
        }
    }, {
        key: 'onOk',
        value: function onOk() {
            var _props$params2 = this.props.params,
                id = _props$params2.id,
                node = _props$params2.node;

            this.props.editTreeNode(id, node, this.state);
        }
    }]);

    return EditNode;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        maps: state.maps
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

EditNode = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditNode);

exports.default = EditNode;

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMdl = __webpack_require__(87);

var _mapdetail = __webpack_require__(377);

var _mapdetail2 = _interopRequireDefault(_mapdetail);

var _reactRedux = __webpack_require__(69);

var _redux = __webpack_require__(57);

var _actions = __webpack_require__(90);

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

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RemoveNode = exports.AddNode = exports.EditNode = exports.Edit = exports.Map = exports.GridList = exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMdl = __webpack_require__(87);

var _grid = __webpack_require__(374);

var _grid2 = _interopRequireDefault(_grid);

var _map = __webpack_require__(376);

var _map2 = _interopRequireDefault(_map);

var _edit = __webpack_require__(372);

var _edit2 = _interopRequireDefault(_edit);

var _devtool = __webpack_require__(378);

var _devtool2 = _interopRequireDefault(_devtool);

var _editnode = __webpack_require__(373);

var _editnode2 = _interopRequireDefault(_editnode);

var _addnode = __webpack_require__(947);

var _addnode2 = _interopRequireDefault(_addnode);

var _removenode = __webpack_require__(956);

var _removenode2 = _interopRequireDefault(_removenode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(954);

var isProduction = "development" === 'production';

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
exports.Edit = _edit2.default;
exports.EditNode = _editnode2.default;
exports.AddNode = _addnode2.default;
exports.RemoveNode = _removenode2.default;

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(69);

var _redux = __webpack_require__(57);

var _actions = __webpack_require__(90);

var actionCreators = _interopRequireWildcard(_actions);

var _maps = __webpack_require__(134);

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
            return _react2.default.createElement('canvas', { ref: 'can', style: { display: "block", margin: "auto" } });
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

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMdl = __webpack_require__(87);

var _reactRouter = __webpack_require__(201);

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

            var viewName = "/view/" + id;
            var editName = "/edit/" + id;
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
                        { primary: true, ripple: true, onClick: function onClick() {
                                return _reactRouter.browserHistory.push(viewName);
                            } },
                        'View Map'
                    ),
                    _react2.default.createElement(
                        _reactMdl.Button,
                        { primary: true, ripple: true, onClick: function onClick() {
                                return _reactRouter.browserHistory.push(editName);
                            } },
                        'Edit Map'
                    )
                )
            );
        }
    }]);

    return MapDetail;
}(_react.Component);

exports.default = MapDetail;

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(128);

var _reduxDevtoolsLogMonitor = __webpack_require__(922);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(913);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

var _reduxDevtoolsDispatch = __webpack_require__(911);

var _reduxDevtoolsDispatch2 = _interopRequireDefault(_reduxDevtoolsDispatch);

var _reduxSliderMonitor = __webpack_require__(937);

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

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(389);

var utils = _interopRequireWildcard(_utils);

var _properties = __webpack_require__(211);

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

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _redux = __webpack_require__(57);

var _maps = __webpack_require__(381);

var _maps2 = _interopRequireDefault(_maps);

var _node = __webpack_require__(382);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = exports.reducers = (0, _redux.combineReducers)({ maps: _maps2.default, nodes: _node2.default });

/***/ }),

/***/ 381:
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

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = nodes;
function nodes() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        default:
            return state;
    }
}

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _reactRouter = __webpack_require__(201);

var _components = __webpack_require__(375);

var routes = React.createElement(
   _reactRouter.Router,
   { history: _reactRouter.browserHistory },
   React.createElement(
      _reactRouter.Route,
      { path: '/', component: _components.App },
      React.createElement(_reactRouter.IndexRoute, { component: _components.GridList }),
      React.createElement(_reactRouter.Route, { path: '/view/:id', component: _components.Map }),
      React.createElement(_reactRouter.Route, { path: '/edit/:id', component: _components.Edit }),
      React.createElement(_reactRouter.Route, { path: '/:id/edit/:node', component: _components.EditNode }),
      React.createElement(_reactRouter.Route, { path: '/:id/add/:node', component: _components.AddNode }),
      React.createElement(_reactRouter.Route, { path: '/:id/remove/:node', component: _components.RemoveNode })
   )
);

exports.default = routes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _mapsaga = __webpack_require__(385);

var _nodesaga = __webpack_require__(948);

var _notificationSaga = __webpack_require__(949);

var _notificationSaga2 = _interopRequireDefault(_notificationSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [rootSaga].map(regeneratorRuntime.mark);

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return [(0, _mapsaga.createMapSaga)(), (0, _nodesaga.editNodeForTree)(), (0, _nodesaga.addNodeForTree)(), (0, _nodesaga.removeNodeForTree)(), (0, _notificationSaga2.default)()];

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createMapSaga = createMapSaga;

var _axios = __webpack_require__(352);

var _axios2 = _interopRequireDefault(_axios);

var _effects = __webpack_require__(343);

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

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(605);

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

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _redux = __webpack_require__(57);

var _index = __webpack_require__(380);

var _reduxLogger = __webpack_require__(930);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxSaga = __webpack_require__(931);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _sagas = __webpack_require__(384);

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhancers = void 0;
var sagaMiddleWare = (0, _reduxSaga2.default)();
var middleware = (0, _redux.applyMiddleware)(sagaMiddleWare);
var composeEnhancers = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : _redux.compose;
if (false) {
  enhancers = composeEnhancers(middleware);
} else {
  enhancers = composeEnhancers(middleware);
}
var store = (0, _redux.createStore)(_index.reducers, {}, enhancers);
sagaMiddleWare.run(_sagas2.default);
exports.default = store;

/***/ }),

/***/ 388:
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

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canvas = __webpack_require__(388);

Object.keys(_canvas).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _canvas[key];
    }
  });
});

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapaction = __webpack_require__(370);

Object.keys(_mapaction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mapaction[key];
    }
  });
});

var _nodes = __webpack_require__(371);

Object.keys(_nodes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _nodes[key];
    }
  });
});

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(351);
module.exports = __webpack_require__(350);


/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(69);

var _reactMdl = __webpack_require__(87);

var _redux = __webpack_require__(57);

var _actions = __webpack_require__(90);

var actionCreators = _interopRequireWildcard(_actions);

var _maps = __webpack_require__(134);

var canvasUtils = _interopRequireWildcard(_maps);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddNode = function (_Component) {
    _inherits(AddNode, _Component);

    function AddNode(props) {
        _classCallCheck(this, AddNode);

        var _this = _possibleConstructorReturn(this, (AddNode.__proto__ || Object.getPrototypeOf(AddNode)).call(this, props));

        _this.state = {
            name: '',
            description: ''
        };
        return _this;
    }

    _createClass(AddNode, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                name = _state.name,
                description = _state.description;

            return _react2.default.createElement(
                _reactMdl.Card,
                { shadow: 0, style: { margin: "auto", marginTop: 50 } },
                _react2.default.createElement(
                    _reactMdl.CardTitle,
                    null,
                    ' Add New Node '
                ),
                _react2.default.createElement(
                    _reactMdl.CardText,
                    null,
                    _react2.default.createElement(_reactMdl.Textfield, { label: 'Name',
                        value: name,
                        style: { marginLeft: 5 },
                        required: true,
                        onChange: function onChange(e) {
                            return _this2.setState({ name: e.target.value });
                        } }),
                    _react2.default.createElement(_reactMdl.Textfield, { label: 'Description',
                        value: description,
                        rows: 3,
                        style: { marginLeft: 5 },
                        required: true,
                        onChange: function onChange(e) {
                            return _this2.setState({ description: e.target.value });
                        } })
                ),
                _react2.default.createElement(
                    _reactMdl.CardActions,
                    null,
                    _react2.default.createElement(
                        _reactMdl.Button,
                        { primary: true, onClick: this.onOk.bind(this) },
                        ' Create '
                    )
                )
            );
        }
    }, {
        key: 'onOk',
        value: function onOk() {
            var _props$params = this.props.params,
                id = _props$params.id,
                node = _props$params.node;

            this.props.createTreeNode(id, node, this.state);
        }
    }]);

    return AddNode;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        maps: state.maps
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

AddNode = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddNode);

exports.default = AddNode;

/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.editNodeForTree = editNodeForTree;
exports.addNodeForTree = addNodeForTree;
exports.removeNodeForTree = removeNodeForTree;

var _axios = __webpack_require__(352);

var _axios2 = _interopRequireDefault(_axios);

var _effects = __webpack_require__(343);

var _reactRouter = __webpack_require__(201);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [editNodeDetails, addNodeDetails, removeNodeDetails, editNodeForTree, addNodeForTree, removeNodeForTree].map(regeneratorRuntime.mark);

function editNode(id, parent, data) {
    return _axios2.default.put('/api/' + id + '/edit/' + parent, data);
}

function editNodeDetails(action) {
    var _action$payload, id, parent, data, result;

    return regeneratorRuntime.wrap(function editNodeDetails$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _action$payload = action.payload, id = _action$payload.id, parent = _action$payload.parent, data = _action$payload.data;
                    _context.prev = 1;
                    _context.next = 4;
                    return (0, _effects.call)(editNode, id, parent, data);

                case 4:
                    result = _context.sent;

                    console.log(result);
                    _context.next = 8;
                    return (0, _effects.put)({
                        type: 'FETCH_MAPS'
                    });

                case 8:
                    _context.next = 10;
                    return (0, _effects.put)({
                        type: "NOTIFY",
                        message: "Node updated done successfully"
                    });

                case 10:
                    _reactRouter.browserHistory.goBack();
                    _context.next = 17;
                    break;

                case 13:
                    _context.prev = 13;
                    _context.t0 = _context['catch'](1);
                    _context.next = 17;
                    return (0, _effects.put)({
                        type: "NOTIFY",
                        message: "Error while updating node info"
                    });

                case 17:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this, [[1, 13]]);
}

function addNode(id, parent, data) {
    return _axios2.default.post('/api/' + id + '/add/' + parent, data);
}

function removeNode(id, parent) {
    return _axios2.default.delete('/api/' + id + '/delete/' + parent);
}

function addNodeDetails(action) {
    var _action$payload2, id, parent, data, result;

    return regeneratorRuntime.wrap(function addNodeDetails$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _action$payload2 = action.payload, id = _action$payload2.id, parent = _action$payload2.parent, data = _action$payload2.data;
                    _context2.prev = 1;
                    _context2.next = 4;
                    return (0, _effects.call)(addNode, id, parent, data);

                case 4:
                    result = _context2.sent;

                    console.log(result);
                    _context2.next = 8;
                    return (0, _effects.put)({
                        type: 'FETCH_MAPS'
                    });

                case 8:
                    _context2.next = 10;
                    return (0, _effects.put)({
                        type: "NOTIFY",
                        message: "Node updated done successfully"
                    });

                case 10:
                    _reactRouter.browserHistory.goBack();
                    _context2.next = 17;
                    break;

                case 13:
                    _context2.prev = 13;
                    _context2.t0 = _context2['catch'](1);
                    _context2.next = 17;
                    return (0, _effects.put)({
                        type: "NOTIFY",
                        message: "Error while updating node info"
                    });

                case 17:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this, [[1, 13]]);
}

function removeNodeDetails(action) {
    var _action$payload3, id, parent, result;

    return regeneratorRuntime.wrap(function removeNodeDetails$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _action$payload3 = action.payload, id = _action$payload3.id, parent = _action$payload3.parent;
                    _context3.prev = 1;
                    _context3.next = 4;
                    return (0, _effects.call)(removeNode, id, parent);

                case 4:
                    result = _context3.sent;
                    _context3.next = 7;
                    return (0, _effects.put)({
                        type: 'FETCH_MAPS'
                    });

                case 7:
                    _context3.next = 9;
                    return (0, _effects.put)({
                        type: "NOTIFY",
                        message: "Node updated done successfully"
                    });

                case 9:
                    _reactRouter.browserHistory.goBack();

                    _context3.next = 16;
                    break;

                case 12:
                    _context3.prev = 12;
                    _context3.t0 = _context3['catch'](1);
                    _context3.next = 16;
                    return (0, _effects.put)({
                        type: "NOTIFY",
                        message: "Error while updating node info"
                    });

                case 16:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked[2], this, [[1, 12]]);
}

function editNodeForTree() {
    return regeneratorRuntime.wrap(function editNodeForTree$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    _context4.next = 2;
                    return (0, _effects.takeEvery)('EDIT_TREE_NODE', editNodeDetails);

                case 2:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked[3], this);
}

function addNodeForTree() {
    return regeneratorRuntime.wrap(function addNodeForTree$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    _context5.next = 2;
                    return (0, _effects.takeEvery)('CREATE_TREE_NODE', addNodeDetails);

                case 2:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _marked[4], this);
}

function removeNodeForTree() {
    return regeneratorRuntime.wrap(function removeNodeForTree$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    _context6.next = 2;
                    return (0, _effects.takeEvery)('REMOVE_TREE_NODE', removeNodeDetails);

                case 2:
                case 'end':
                    return _context6.stop();
            }
        }
    }, _marked[5], this);
}

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = watch;

var _effects = __webpack_require__(343);

var _jsSnackbar = __webpack_require__(950);

var _marked = [notification, watch].map(regeneratorRuntime.mark);

function notification(action) {
    var message;
    return regeneratorRuntime.wrap(function notification$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    message = action.message;

                    (0, _jsSnackbar.show)({ text: message });

                case 2:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

function watch() {
    return regeneratorRuntime.wrap(function watch$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _effects.takeEvery)("NOTIFY", notification);

                case 2:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}

/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMdl = __webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModelDialog = function (_Component) {
    _inherits(ModelDialog, _Component);

    function ModelDialog(props) {
        _classCallCheck(this, ModelDialog);

        return _possibleConstructorReturn(this, (ModelDialog.__proto__ || Object.getPrototypeOf(ModelDialog)).call(this, props));
    }

    _createClass(ModelDialog, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                children = _props.children,
                open = _props.open,
                okName = _props.okName,
                cancelName = _props.cancelName,
                onOk = _props.onOk,
                onCancel = _props.onCancel,
                data = _props.data;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactMdl.Dialog,
                    { open: open },
                    _react2.default.createElement(
                        _reactMdl.DialogTitle,
                        null,
                        title
                    ),
                    _react2.default.createElement(
                        _reactMdl.DialogContent,
                        null,
                        children
                    ),
                    _react2.default.createElement(
                        _reactMdl.DialogActions,
                        null,
                        _react2.default.createElement(
                            _reactMdl.Button,
                            { type: 'button', onClick: onOk },
                            okName
                        ),
                        _react2.default.createElement(
                            _reactMdl.Button,
                            { type: 'button', onClick: onCancel },
                            cancelName
                        )
                    )
                )
            );
        }
    }]);

    return ModelDialog;
}(_react.Component);

exports.default = ModelDialog;


ModelDialog.propTypes = {
    title: _react.PropTypes.string.isRequired,
    open: _react.PropTypes.bool.isRequired,
    okName: _react.PropTypes.string.isRequired,
    cancelName: _react.PropTypes.string.isRequired,
    onOk: _react.PropTypes.func.isRequired,
    onCancel: _react.PropTypes.func.isRequired
};

ModelDialog.defaultProps = {
    open: false,
    data: {}
};

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(69);

var _reactMdl = __webpack_require__(87);

var _redux = __webpack_require__(57);

var _actions = __webpack_require__(90);

var actionCreators = _interopRequireWildcard(_actions);

var _maps = __webpack_require__(134);

var canvasUtils = _interopRequireWildcard(_maps);

var _dialog = __webpack_require__(955);

var _dialog2 = _interopRequireDefault(_dialog);

var _reactRouter = __webpack_require__(201);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RemoveNode = function (_Component) {
    _inherits(RemoveNode, _Component);

    function RemoveNode(props) {
        _classCallCheck(this, RemoveNode);

        return _possibleConstructorReturn(this, (RemoveNode.__proto__ || Object.getPrototypeOf(RemoveNode)).call(this, props));
    }

    _createClass(RemoveNode, [{
        key: 'onCancel',
        value: function onCancel() {
            _reactRouter.browserHistory.goBack();
        }
    }, {
        key: 'onOk',
        value: function onOk() {
            var _props$params = this.props.params,
                id = _props$params.id,
                node = _props$params.node;

            this.props.removeTreeNode(id, node);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _dialog2.default,
                { open: true,
                    title: 'Confirmation',
                    okName: 'Delete It!',
                    cancelName: 'Retreat!',
                    onOk: this.onOk.bind(this),
                    onCancel: this.onCancel.bind(this) },
                _react2.default.createElement(
                    'p',
                    null,
                    ' Are you sure with the action to delete the node ? '
                )
            );
        }
    }]);

    return RemoveNode;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

RemoveNode = (0, _reactRedux.connect)(null, mapDispatchToProps)(RemoveNode);

exports.default = RemoveNode;

/***/ })

},[946]);
//# sourceMappingURL=bundle.js.map