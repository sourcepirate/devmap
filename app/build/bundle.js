webpackJsonp([0],{

/***/ 1166:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1167:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1168:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1169:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(511);
module.exports = __webpack_require__(510);


/***/ }),

/***/ 233:
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

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapaction = __webpack_require__(530);

Object.keys(_mapaction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mapaction[key];
    }
  });
});

var _nodes = __webpack_require__(531);

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

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _routes = __webpack_require__(549);

var _routes2 = _interopRequireDefault(_routes);

var _reactRedux = __webpack_require__(34);

var _store = __webpack_require__(554);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Sloader from './serviceloader';
// import './loaders/autolink';

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

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.update = update;
exports.removeMap = removeMap;
function update() {
    return {
        type: 'FETCH_MAPS'
    };
}

function removeMap(id) {
    return {
        type: "REMOVE_MAP",
        id: id
    };
}

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.editTreeNode = editTreeNode;
exports.createTreeNode = createTreeNode;
exports.removeTreeNode = removeTreeNode;
exports.createNewMap = createNewMap;
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

function createNewMap(payload) {
    return {
        type: "NEW_MAP",
        data: payload
    };
}

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Form = __webpack_require__(281);

var _Form2 = _interopRequireDefault(_Form);

var _FormField = __webpack_require__(774);

var _FormField2 = _interopRequireDefault(_FormField);

var _FormFields = __webpack_require__(775);

var _FormFields2 = _interopRequireDefault(_FormFields);

var _TextInput = __webpack_require__(283);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Header = __webpack_require__(169);

var _Header2 = _interopRequireDefault(_Header);

var _Heading = __webpack_require__(777);

var _Heading2 = _interopRequireDefault(_Heading);

var _Footer = __webpack_require__(280);

var _Footer2 = _interopRequireDefault(_Footer);

var _Button = __webpack_require__(50);

var _Button2 = _interopRequireDefault(_Button);

var _Box = __webpack_require__(22);

var _Box2 = _interopRequireDefault(_Box);

var _reactRedux = __webpack_require__(34);

var _redux = __webpack_require__(28);

var _actions = __webpack_require__(44);

var actionCreators = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddNewMap = function (_Component) {
    _inherits(AddNewMap, _Component);

    function AddNewMap(props) {
        _classCallCheck(this, AddNewMap);

        var _this = _possibleConstructorReturn(this, (AddNewMap.__proto__ || Object.getPrototypeOf(AddNewMap)).call(this, props));

        _this.state = {
            name: '',
            start_description: '',
            start_node: ''
        };
        return _this;
    }

    _createClass(AddNewMap, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                name = _state.name,
                start_node = _state.start_node,
                start_description = _state.start_description;


            return _react2.default.createElement(
                _Box2.default,
                { align: 'center' },
                _react2.default.createElement(
                    _Form2.default,
                    { onSubmit: this.onSubmit.bind(this) },
                    _react2.default.createElement(
                        _Header2.default,
                        null,
                        _react2.default.createElement(
                            _Heading2.default,
                            null,
                            'New Roadmap'
                        )
                    ),
                    _react2.default.createElement(
                        _FormFields2.default,
                        null,
                        _react2.default.createElement(
                            _FormField2.default,
                            { label: 'Name of the Roadmap' },
                            _react2.default.createElement(_TextInput2.default, { onDOMChange: function onDOMChange(e) {
                                    return _this2.setState({ name: e.target.value });
                                }, placeHolder: 'Enter the name of roadmap' })
                        ),
                        _react2.default.createElement(
                            _FormField2.default,
                            { label: 'Name of the start Node' },
                            _react2.default.createElement(_TextInput2.default, { onDOMChange: function onDOMChange(e) {
                                    return _this2.setState({ start_node: e.target.value });
                                }, placeHolder: 'Enter the name of the start node' })
                        ),
                        _react2.default.createElement(
                            _FormField2.default,
                            { label: 'Roadmap Description' },
                            _react2.default.createElement(_TextInput2.default, { onDOMChange: function onDOMChange(e) {
                                    return _this2.setState({ start_description: e.target.value });
                                }, placeHolder: 'Roadmap Description' })
                        )
                    ),
                    _react2.default.createElement(
                        _Footer2.default,
                        { pad: { "vertical": "medium" } },
                        _react2.default.createElement(_Button2.default, { label: 'Submit',
                            type: 'submit',
                            primary: true })
                    )
                )
            );
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(e) {
            e.preventDefault();
            this.props.createNewMap(this.state);
        }
    }]);

    return AddNewMap;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};
AddNewMap = (0, _reactRedux.connect)(null, mapDispatchToProps)(AddNewMap);
exports.default = AddNewMap;

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Form = __webpack_require__(281);

var _Form2 = _interopRequireDefault(_Form);

var _FormField = __webpack_require__(774);

var _FormField2 = _interopRequireDefault(_FormField);

var _FormFields = __webpack_require__(775);

var _FormFields2 = _interopRequireDefault(_FormFields);

var _TextInput = __webpack_require__(283);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Header = __webpack_require__(169);

var _Header2 = _interopRequireDefault(_Header);

var _Heading = __webpack_require__(777);

var _Heading2 = _interopRequireDefault(_Heading);

var _Footer = __webpack_require__(280);

var _Footer2 = _interopRequireDefault(_Footer);

var _Button = __webpack_require__(50);

var _Button2 = _interopRequireDefault(_Button);

var _Box = __webpack_require__(22);

var _Box2 = _interopRequireDefault(_Box);

var _reactRedux = __webpack_require__(34);

var _redux = __webpack_require__(28);

var _actions = __webpack_require__(44);

var actionCreators = _interopRequireWildcard(_actions);

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
                _Box2.default,
                { align: 'center' },
                _react2.default.createElement(
                    _Form2.default,
                    { onSubmit: this.onSubmit.bind(this) },
                    _react2.default.createElement(
                        _Header2.default,
                        null,
                        _react2.default.createElement(
                            _Heading2.default,
                            null,
                            'Add new node'
                        )
                    ),
                    _react2.default.createElement(
                        _FormFields2.default,
                        null,
                        _react2.default.createElement(
                            _FormField2.default,
                            { label: 'Name' },
                            _react2.default.createElement(_TextInput2.default, { onDOMChange: function onDOMChange(e) {
                                    return _this2.setState({ name: e.target.value });
                                },
                                placeHolder: 'Enter the node name' })
                        ),
                        _react2.default.createElement(
                            _FormField2.default,
                            { label: 'Description' },
                            _react2.default.createElement(_TextInput2.default, { onDOMChange: function onDOMChange(e) {
                                    return _this2.setState({ description: e.target.value });
                                },
                                placeHolder: 'Enter the node description' })
                        )
                    ),
                    _react2.default.createElement(
                        _Footer2.default,
                        { pad: { "vertical": "medium" } },
                        _react2.default.createElement(_Button2.default, { label: 'Submit',
                            type: 'submit',
                            primary: true })
                    )
                )
            );
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(e) {
            e.preventDefault();
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

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Form = __webpack_require__(281);

var _Form2 = _interopRequireDefault(_Form);

var _FormField = __webpack_require__(774);

var _FormField2 = _interopRequireDefault(_FormField);

var _FormFields = __webpack_require__(775);

var _FormFields2 = _interopRequireDefault(_FormFields);

var _TextInput = __webpack_require__(283);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Header = __webpack_require__(169);

var _Header2 = _interopRequireDefault(_Header);

var _Heading = __webpack_require__(777);

var _Heading2 = _interopRequireDefault(_Heading);

var _Footer = __webpack_require__(280);

var _Footer2 = _interopRequireDefault(_Footer);

var _Button = __webpack_require__(50);

var _Button2 = _interopRequireDefault(_Button);

var _Accordion = __webpack_require__(1203);

var _Accordion2 = _interopRequireDefault(_Accordion);

var _AccordionPanel = __webpack_require__(1204);

var _AccordionPanel2 = _interopRequireDefault(_AccordionPanel);

var _Paragraph = __webpack_require__(1209);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Markdown = __webpack_require__(1208);

var _Markdown2 = _interopRequireDefault(_Markdown);

var _Box = __webpack_require__(22);

var _Box2 = _interopRequireDefault(_Box);

var _reactRedux = __webpack_require__(34);

var _redux = __webpack_require__(28);

var _actions = __webpack_require__(44);

var actionCreators = _interopRequireWildcard(_actions);

var _maps = __webpack_require__(71);

var canvasMaps = _interopRequireWildcard(_maps);

var _reactRouter = __webpack_require__(56);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React, {Component, PropTypes} from 'react';
// import {Card, CardTitle, CardActions, CardMenu, IconButton, CardText} from 'react-mdl';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from '../actions';
// import * as canvasMaps from '../maps';
// import {hashHistory} from 'react-router';
// import ReactAutoLinker from 'react-autolinker';


// const themes = ["Indigo", "Teal", "Green", "Red", "Orange"];
// const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// class EditMap extends Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//     console.log(this.props);
//     const {data, offset, offsetWidth, id, onEdit, onAdd, onClose} = this.props;
//     const editUrl = onEdit(id);
//     const addUrl = onAdd(id);
//     const removeUrl = onClose(id);
//     const theme = getRandom(themes);
//     console.log(data.children);
//     return (<Card shadow={0} style={{marginLeft: offset, display: "inline-block", width: offsetWidth, border: "0.5px solid "+ theme}}>
//               <CardTitle style={{color: "white", textTransform: "uppercase", background: theme}}> {data.name} </CardTitle>
//               {
//                   data.children.map((child) => <EditMap data={child} 
//                                                          key={child.id}
//                                                          offset={offset + 5}
//                                                          offsetWidth={offsetWidth - 9}
//                                                          id={child.id}
//                                                          onAdd={onAdd}
//                                                          onEdit={onEdit}
//                                                          onClose={onClose}/>)
//               }
//               <CardText style={{color: "black"}}><ReactAutoLinker text={data.description} /></CardText>
//               <CardMenu style={{color: 'white'}}>
//                     <IconButton name="edit" onClick={() =>  hashHistory.push(editUrl)}/>
//                     <IconButton name="add"  onClick={() =>  hashHistory.push(addUrl)}/>
//                     <IconButton name="close" onClick={() => hashHistory.push(removeUrl)} />
//               </CardMenu>
//           </Card>)
//     }
// }

// EditMap.defaultProps = {
//     offset: 0,
//     offsetWidth: 500
// }


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
            console.log(data.children);
            return _react2.default.createElement(
                _Box2.default,
                { full: true },
                _react2.default.createElement(
                    _Accordion2.default,
                    null,
                    _react2.default.createElement(
                        _AccordionPanel2.default,
                        { heading: data.name },
                        _react2.default.createElement(_Markdown2.default, { content: data.description }),
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
                            _Box2.default,
                            { direction: 'row', align: 'right' },
                            _react2.default.createElement(_Button2.default, { label: 'Edit', onClick: function onClick() {
                                    return _reactRouter.hashHistory.push(editUrl);
                                } }),
                            _react2.default.createElement(_Button2.default, { label: 'Delete', onClick: function onClick() {
                                    return _reactRouter.hashHistory.push(removeUrl);
                                } }),
                            _react2.default.createElement(_Button2.default, { label: 'Add', onClick: function onClick() {
                                    return _reactRouter.hashHistory.push(addUrl);
                                } })
                        )
                    )
                )
            );
        }
    }]);

    return EditMap;
}(_react.Component);

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
            var to_transform = maps[0].map;
            var data = canvasMaps.transform(JSON.parse(to_transform));
            return _react2.default.createElement(
                _Box2.default,
                { align: 'center', full: true },
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

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Form = __webpack_require__(281);

var _Form2 = _interopRequireDefault(_Form);

var _FormField = __webpack_require__(774);

var _FormField2 = _interopRequireDefault(_FormField);

var _FormFields = __webpack_require__(775);

var _FormFields2 = _interopRequireDefault(_FormFields);

var _TextInput = __webpack_require__(283);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Header = __webpack_require__(169);

var _Header2 = _interopRequireDefault(_Header);

var _Heading = __webpack_require__(777);

var _Heading2 = _interopRequireDefault(_Heading);

var _Footer = __webpack_require__(280);

var _Footer2 = _interopRequireDefault(_Footer);

var _Button = __webpack_require__(50);

var _Button2 = _interopRequireDefault(_Button);

var _Box = __webpack_require__(22);

var _Box2 = _interopRequireDefault(_Box);

var _reactRedux = __webpack_require__(34);

var _redux = __webpack_require__(28);

var _actions = __webpack_require__(44);

var actionCreators = _interopRequireWildcard(_actions);

var _maps = __webpack_require__(71);

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
            name: "",
            description: ""
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
            var tfm = canvasUtils.transform(JSON.parse(transformed));
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
        key: 'onSubmit',
        value: function onSubmit(e) {
            e.preventDefault();
            var _props$params2 = this.props.params,
                id = _props$params2.id,
                node = _props$params2.node;

            this.props.editTreeNode(id, node, this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                name = _state.name,
                description = _state.description;


            return _react2.default.createElement(
                _Box2.default,
                { align: 'center' },
                _react2.default.createElement(
                    _Form2.default,
                    { onSubmit: this.onSubmit.bind(this) },
                    _react2.default.createElement(
                        _Header2.default,
                        null,
                        _react2.default.createElement(
                            _Heading2.default,
                            null,
                            'Edit map node'
                        )
                    ),
                    _react2.default.createElement(
                        _FormFields2.default,
                        null,
                        _react2.default.createElement(
                            _FormField2.default,
                            { label: 'Name' },
                            _react2.default.createElement(_TextInput2.default, { onDOMChange: function onDOMChange(e) {
                                    return _this2.setState({ name: e.target.value });
                                },
                                value: name,
                                placeHolder: 'Enter the node name' })
                        ),
                        _react2.default.createElement(
                            _FormField2.default,
                            { label: 'Description' },
                            _react2.default.createElement(_TextInput2.default, { onDOMChange: function onDOMChange(e) {
                                    return _this2.setState({ description: e.target.value });
                                },
                                value: description,
                                placeHolder: 'Enter the node description' })
                        )
                    ),
                    _react2.default.createElement(
                        _Footer2.default,
                        { pad: { "vertical": "medium" } },
                        _react2.default.createElement(_Button2.default, { label: 'Submit',
                            type: 'submit',
                            primary: true })
                    )
                )
            );
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

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Box = __webpack_require__(22);

var _Box2 = _interopRequireDefault(_Box);

var _mapdetail = __webpack_require__(539);

var _mapdetail2 = _interopRequireDefault(_mapdetail);

var _reactRedux = __webpack_require__(34);

var _redux = __webpack_require__(28);

var _actions = __webpack_require__(44);

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
                _Box2.default,
                { align: 'center', fill: true, direction: 'column' },
                maps.map(function (x, i) {
                    return _react2.default.createElement(_mapdetail2.default, _extends({}, x, { key: i }));
                })
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

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoadMapNav = exports.RemoveMap = exports.AddNewMap = exports.RemoveNode = exports.AddNode = exports.EditNode = exports.Edit = exports.Map = exports.GridList = exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMdl = __webpack_require__(55);

var _reactRouter = __webpack_require__(56);

var _App = __webpack_require__(770);

var _App2 = _interopRequireDefault(_App);

var _Split = __webpack_require__(786);

var _Split2 = _interopRequireDefault(_Split);

var _Box = __webpack_require__(22);

var _Box2 = _interopRequireDefault(_Box);

var _TextInput = __webpack_require__(283);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _CheckBox = __webpack_require__(771);

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Form = __webpack_require__(281);

var _Form2 = _interopRequireDefault(_Form);

var _Article = __webpack_require__(1171);

var _Article2 = _interopRequireDefault(_Article);

var _sidebar = __webpack_require__(543);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _grid = __webpack_require__(536);

var _grid2 = _interopRequireDefault(_grid);

var _map = __webpack_require__(538);

var _map2 = _interopRequireDefault(_map);

var _edit = __webpack_require__(534);

var _edit2 = _interopRequireDefault(_edit);

var _devtool = __webpack_require__(544);

var _devtool2 = _interopRequireDefault(_devtool);

var _editnode = __webpack_require__(535);

var _editnode2 = _interopRequireDefault(_editnode);

var _addnode = __webpack_require__(533);

var _addnode2 = _interopRequireDefault(_addnode);

var _removenode = __webpack_require__(541);

var _removenode2 = _interopRequireDefault(_removenode);

var _addmap = __webpack_require__(532);

var _addmap2 = _interopRequireDefault(_addmap);

var _removemap = __webpack_require__(540);

var _removemap2 = _interopRequireDefault(_removemap);

var _roadmapnav = __webpack_require__(542);

var _roadmapnav2 = _interopRequireDefault(_roadmapnav);

__webpack_require__(1162);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(1163);


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
        _App2.default,
        { centered: false },
        _react2.default.createElement(
          _Article2.default,
          null,
          _react2.default.createElement(
            _Split2.default,
            { flex: 'right' },
            _react2.default.createElement(
              _Box2.default,
              {
                colorIndex: 'neutral-1',
                justify: 'center',
                align: 'center',
                pad: 'small',
                full: 'vertical' },
              _react2.default.createElement(_sidebar2.default, null)
            ),
            _react2.default.createElement(
              _Box2.default,
              { align: 'center', full: 'vertical', fill: true },
              this.props.children
            )
          )
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
exports.AddNewMap = _addmap2.default;
exports.RemoveMap = _removemap2.default;
exports.RoadMapNav = _roadmapnav2.default;

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(34);

var _redux = __webpack_require__(28);

var _actions = __webpack_require__(44);

var actionCreators = _interopRequireWildcard(_actions);

var _maps = __webpack_require__(71);

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
            var to_transform = maps[0].map;
            var treedata = canvasMaps.transform(JSON.parse(to_transform));
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

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(34);

var _Tile = __webpack_require__(1174);

var _Tile2 = _interopRequireDefault(_Tile);

var _Box = __webpack_require__(22);

var _Box2 = _interopRequireDefault(_Box);

var _Heading = __webpack_require__(777);

var _Heading2 = _interopRequireDefault(_Heading);

var _Edit = __webpack_require__(1175);

var _Edit2 = _interopRequireDefault(_Edit);

var _View = __webpack_require__(1176);

var _View2 = _interopRequireDefault(_View);

var _Close = __webpack_require__(284);

var _Close2 = _interopRequireDefault(_Close);

var _Anchor = __webpack_require__(279);

var _Anchor2 = _interopRequireDefault(_Anchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapDetail = function (_Component) {
  _inherits(MapDetail, _Component);

  function MapDetail() {
    _classCallCheck(this, MapDetail);

    return _possibleConstructorReturn(this, (MapDetail.__proto__ || Object.getPrototypeOf(MapDetail)).apply(this, arguments));
  }

  _createClass(MapDetail, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          description = _props.description,
          id = _props.id;

      var editControl = _react2.default.createElement(_Anchor2.default, { icon: _react2.default.createElement(_Edit2.default, null),
        path: '/edit/' + id,
        a11yTitle: 'Edit ' + name + ' Map' });

      var viewControl = _react2.default.createElement(_Anchor2.default, { icon: _react2.default.createElement(_View2.default, null),
        path: '/view/' + id,
        a11yTitle: 'View ' + name + ' Map' });

      var deleteControl = _react2.default.createElement(_Anchor2.default, { icon: _react2.default.createElement(_Close2.default, null),
        path: '/deletemap/' + id,
        a11yTitle: 'Delete ' + name + ' Map' });

      return _react2.default.createElement(
        _Tile2.default,
        { separator: 'all', pad: 'medium',
          margin: 'small',
          size: 'medium',
          onClick: this.props.onClick, selected: this.props.selected },
        _react2.default.createElement(
          _Box2.default,
          null,
          _react2.default.createElement(
            _Heading2.default,
            { tag: 'h3', align: 'center', strong: true },
            name
          )
        ),
        _react2.default.createElement(
          _Box2.default,
          { direction: 'row' },
          editControl,
          viewControl,
          deleteControl
        )
      );
    }
  }]);

  return MapDetail;
}(_react.Component);

exports.default = MapDetail;

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Form = __webpack_require__(281);

var _Form2 = _interopRequireDefault(_Form);

var _FormField = __webpack_require__(774);

var _FormField2 = _interopRequireDefault(_FormField);

var _FormFields = __webpack_require__(775);

var _FormFields2 = _interopRequireDefault(_FormFields);

var _TextInput = __webpack_require__(283);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Header = __webpack_require__(169);

var _Header2 = _interopRequireDefault(_Header);

var _Heading = __webpack_require__(777);

var _Heading2 = _interopRequireDefault(_Heading);

var _Footer = __webpack_require__(280);

var _Footer2 = _interopRequireDefault(_Footer);

var _Button = __webpack_require__(50);

var _Button2 = _interopRequireDefault(_Button);

var _Box = __webpack_require__(22);

var _Box2 = _interopRequireDefault(_Box);

var _reactRedux = __webpack_require__(34);

var _redux = __webpack_require__(28);

var _actions = __webpack_require__(44);

var actionCreators = _interopRequireWildcard(_actions);

var _maps = __webpack_require__(71);

var canvasUtils = _interopRequireWildcard(_maps);

var _reactRouter = __webpack_require__(56);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RemoveMap = function (_Component) {
    _inherits(RemoveMap, _Component);

    function RemoveMap(props) {
        _classCallCheck(this, RemoveMap);

        return _possibleConstructorReturn(this, (RemoveMap.__proto__ || Object.getPrototypeOf(RemoveMap)).call(this, props));
    }

    _createClass(RemoveMap, [{
        key: 'onCancel',
        value: function onCancel(e) {
            e.preventDefault();
            _reactRouter.browserHistory.goBack();
        }
    }, {
        key: 'onOk',
        value: function onOk(e) {
            e.preventDefault();
            var id = this.props.params.id;

            this.props.removeMap(id);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Box2.default,
                { align: 'center' },
                _react2.default.createElement(
                    _Box2.default,
                    { pad: 'large' },
                    _react2.default.createElement(
                        _Box2.default,
                        { pad: 'large' },
                        _react2.default.createElement(
                            _Header2.default,
                            null,
                            _react2.default.createElement(
                                _Heading2.default,
                                null,
                                ' Are you sure to delete this Map ? '
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Box2.default,
                        { pad: 'large', align: 'center' },
                        _react2.default.createElement(
                            _Box2.default,
                            { pad: 'medium' },
                            ' ',
                            _react2.default.createElement(_Button2.default, { label: 'Delete It', primary: true, onClick: this.onOk.bind(this) }),
                            ' '
                        ),
                        _react2.default.createElement(
                            _Box2.default,
                            { pad: 'medium' },
                            ' ',
                            _react2.default.createElement(_Button2.default, { label: 'Retreat!', onClick: this.onCancel.bind(this) }),
                            ' '
                        )
                    )
                )
            );
        }
    }]);

    return RemoveMap;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};
RemoveMap = (0, _reactRedux.connect)(null, mapDispatchToProps)(RemoveMap);
exports.default = RemoveMap;

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Form = __webpack_require__(281);

var _Form2 = _interopRequireDefault(_Form);

var _FormField = __webpack_require__(774);

var _FormField2 = _interopRequireDefault(_FormField);

var _FormFields = __webpack_require__(775);

var _FormFields2 = _interopRequireDefault(_FormFields);

var _TextInput = __webpack_require__(283);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Header = __webpack_require__(169);

var _Header2 = _interopRequireDefault(_Header);

var _Heading = __webpack_require__(777);

var _Heading2 = _interopRequireDefault(_Heading);

var _Footer = __webpack_require__(280);

var _Footer2 = _interopRequireDefault(_Footer);

var _Button = __webpack_require__(50);

var _Button2 = _interopRequireDefault(_Button);

var _Box = __webpack_require__(22);

var _Box2 = _interopRequireDefault(_Box);

var _reactRedux = __webpack_require__(34);

var _redux = __webpack_require__(28);

var _actions = __webpack_require__(44);

var actionCreators = _interopRequireWildcard(_actions);

var _maps = __webpack_require__(71);

var canvasUtils = _interopRequireWildcard(_maps);

var _reactRouter = __webpack_require__(56);

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
        value: function onCancel(e) {
            e.preventDefault();
            _reactRouter.browserHistory.goBack();
        }
    }, {
        key: 'onOk',
        value: function onOk(e) {
            e.preventDefault();
            var _props$params = this.props.params,
                id = _props$params.id,
                node = _props$params.node;

            this.props.removeTreeNode(id, node);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Box2.default,
                { align: 'center' },
                _react2.default.createElement(
                    _Box2.default,
                    { pad: 'large' },
                    _react2.default.createElement(
                        _Box2.default,
                        { pad: 'large' },
                        _react2.default.createElement(
                            _Header2.default,
                            null,
                            _react2.default.createElement(
                                _Heading2.default,
                                null,
                                ' Are you sure to delete this node ? '
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Box2.default,
                        { pad: 'large', align: 'center' },
                        _react2.default.createElement(
                            _Box2.default,
                            { pad: 'medium' },
                            ' ',
                            _react2.default.createElement(_Button2.default, { label: 'Delete It', primary: true, onClick: this.onOk.bind(this) }),
                            ' '
                        ),
                        _react2.default.createElement(
                            _Box2.default,
                            { pad: 'medium' },
                            ' ',
                            _react2.default.createElement(_Button2.default, { label: 'Retreat!', onClick: this.onCancel.bind(this) }),
                            ' '
                        )
                    )
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

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Form = __webpack_require__(281);

var _Form2 = _interopRequireDefault(_Form);

var _Header = __webpack_require__(169);

var _Header2 = _interopRequireDefault(_Header);

var _Heading = __webpack_require__(777);

var _Heading2 = _interopRequireDefault(_Heading);

var _FormFields = __webpack_require__(775);

var _FormFields2 = _interopRequireDefault(_FormFields);

var _FormField = __webpack_require__(774);

var _FormField2 = _interopRequireDefault(_FormField);

var _Footer = __webpack_require__(280);

var _Footer2 = _interopRequireDefault(_Footer);

var _Button = __webpack_require__(50);

var _Button2 = _interopRequireDefault(_Button);

var _TextInput = __webpack_require__(283);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _DateTime = __webpack_require__(772);

var _DateTime2 = _interopRequireDefault(_DateTime);

var _SearchInput = __webpack_require__(782);

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _Toast = __webpack_require__(787);

var _Toast2 = _interopRequireDefault(_Toast);

var _Title = __webpack_require__(171);

var _Title2 = _interopRequireDefault(_Title);

var _Search = __webpack_require__(781);

var _Search2 = _interopRequireDefault(_Search);

var _Box = __webpack_require__(22);

var _Box2 = _interopRequireDefault(_Box);

var _Menu = __webpack_require__(170);

var _Menu2 = _interopRequireDefault(_Menu);

var _Anchor = __webpack_require__(279);

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Actions = __webpack_require__(790);

var _Actions2 = _interopRequireDefault(_Actions);

var _Section = __webpack_require__(783);

var _Section2 = _interopRequireDefault(_Section);

var _List = __webpack_require__(779);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(780);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _reactRedux = __webpack_require__(34);

var _redux = __webpack_require__(28);

var _actions = __webpack_require__(44);

var actionCreators = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoadMapNav = function (_Component) {
		_inherits(RoadMapNav, _Component);

		function RoadMapNav() {
				_classCallCheck(this, RoadMapNav);

				return _possibleConstructorReturn(this, (RoadMapNav.__proto__ || Object.getPrototypeOf(RoadMapNav)).apply(this, arguments));
		}

		_createClass(RoadMapNav, [{
				key: 'render',
				value: function render() {
						return _react2.default.createElement(
								_Box2.default,
								{ full: true, margin: 'small', pad: 'large' },
								_react2.default.createElement(
										_Header2.default,
										{ fixed: false, float: false, splash: false, size: 'medium' },
										_react2.default.createElement(
												_Title2.default,
												null,
												'Roadmaps'
										),
										_react2.default.createElement(
												_Box2.default,
												{ flex: true, justify: 'end', direction: 'row', responsive: false },
												_react2.default.createElement(_Search2.default, {
														inline: true,
														fill: true,
														size: 'medium',
														placeHolder: 'Search',
														dropAlign: {
																"right": "right"
														} }),
												_react2.default.createElement(
														_Menu2.default,
														{
																icon: _react2.default.createElement(_Actions2.default, null),
																dropAlign: {
																		"right": "right",
																		"top": "top"
																} },
														_react2.default.createElement(
																_Anchor2.default,
																{ href: '#/add/new', className: 'active' },
																'New Map'
														),
														_react2.default.createElement(
																_Anchor2.default,
																{ href: '#/feeds', className: 'active' },
																'Feeds'
														)
												)
										)
								),
								_react2.default.createElement(
										_Section2.default,
										null,
										this.props.children
								)
						);
				}
		}]);

		return RoadMapNav;
}(_react.Component);

exports.default = RoadMapNav;

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Sidebar = __webpack_require__(784);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Header = __webpack_require__(169);

var _Header2 = _interopRequireDefault(_Header);

var _Title = __webpack_require__(171);

var _Title2 = _interopRequireDefault(_Title);

var _Menu = __webpack_require__(170);

var _Menu2 = _interopRequireDefault(_Menu);

var _Anchor = __webpack_require__(279);

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Footer = __webpack_require__(280);

var _Footer2 = _interopRequireDefault(_Footer);

var _Button = __webpack_require__(50);

var _Button2 = _interopRequireDefault(_Button);

var _User = __webpack_require__(798);

var _User2 = _interopRequireDefault(_User);

var _Box = __webpack_require__(22);

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoadMapSidebar = function (_Component) {
  _inherits(RoadMapSidebar, _Component);

  function RoadMapSidebar(props) {
    _classCallCheck(this, RoadMapSidebar);

    return _possibleConstructorReturn(this, (RoadMapSidebar.__proto__ || Object.getPrototypeOf(RoadMapSidebar)).call(this, props));
  }

  _createClass(RoadMapSidebar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Sidebar2.default,
        { colorIndex: 'neutral-1' },
        _react2.default.createElement(
          _Header2.default,
          { pad: 'medium',
            justify: 'between' },
          _react2.default.createElement(
            _Title2.default,
            null,
            'RoadMap'
          )
        ),
        _react2.default.createElement(
          _Box2.default,
          { flex: 'grow',
            justify: 'start' },
          _react2.default.createElement(
            _Menu2.default,
            { primary: true },
            _react2.default.createElement(
              _Anchor2.default,
              { href: '#/',
                className: 'active' },
              'RoadMaps'
            ),
            _react2.default.createElement(
              _Anchor2.default,
              { href: '#/' },
              'Notes'
            ),
            _react2.default.createElement(
              _Anchor2.default,
              { href: '#/' },
              'Open Tables'
            )
          )
        ),
        _react2.default.createElement(_Footer2.default, { pad: 'medium' })
      );
    }
  }]);

  return RoadMapSidebar;
}(_react.Component);

exports.default = RoadMapSidebar;

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(137);

var _reduxDevtoolsLogMonitor = __webpack_require__(1140);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(1131);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

var _reduxDevtoolsDispatch = __webpack_require__(1129);

var _reduxDevtoolsDispatch2 = _interopRequireDefault(_reduxDevtoolsDispatch);

var _reduxSliderMonitor = __webpack_require__(1155);

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

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(556);

var utils = _interopRequireWildcard(_utils);

var _properties = __webpack_require__(233);

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

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _redux = __webpack_require__(28);

var _maps = __webpack_require__(547);

var _maps2 = _interopRequireDefault(_maps);

var _node = __webpack_require__(548);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = exports.reducers = (0, _redux.combineReducers)({ maps: _maps2.default, nodes: _node2.default });

/***/ }),

/***/ 547:
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

/***/ 548:
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

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRouter = __webpack_require__(56);

var _components = __webpack_require__(537);

var routes = React.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    React.createElement(
        _reactRouter.Route,
        { path: '/', component: _components.App },
        React.createElement(
            _reactRouter.Route,
            { component: _components.RoadMapNav },
            React.createElement(_reactRouter.IndexRoute, { component: _components.GridList }),
            React.createElement(_reactRouter.Route, { path: '/add/new', component: _components.AddNewMap }),
            React.createElement(_reactRouter.Route, { path: '/view/:id', component: _components.Map }),
            React.createElement(_reactRouter.Route, { path: '/edit/:id', component: _components.Edit }),
            React.createElement(_reactRouter.Route, { path: '/:id/edit/:node', component: _components.EditNode }),
            React.createElement(_reactRouter.Route, { path: '/:id/add/:node', component: _components.AddNode }),
            React.createElement(_reactRouter.Route, { path: '/:id/remove/:node', component: _components.RemoveNode }),
            React.createElement(_reactRouter.Route, { path: '/deletemap/:id', component: _components.RemoveMap })
        )
    )
);

exports.default = routes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _mapsaga = __webpack_require__(551);

var _nodesaga = __webpack_require__(552);

var _notificationSaga = __webpack_require__(553);

var _notificationSaga2 = _interopRequireDefault(_notificationSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [rootSaga].map(regeneratorRuntime.mark);

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return [(0, _mapsaga.createMapSaga)(), (0, _nodesaga.editNodeForTree)(), (0, _nodesaga.addNodeForTree)(), (0, _nodesaga.removeNodeForTree)(), (0, _notificationSaga2.default)(), (0, _mapsaga.newMapSaga)(), (0, _mapsaga.deleteMapSage)()];

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createMapSaga = createMapSaga;
exports.newMapSaga = newMapSaga;
exports.deleteMapSage = deleteMapSage;

var _axios = __webpack_require__(226);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = __webpack_require__(56);

var _effects = __webpack_require__(138);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [getMapDetails, createMapSaga, createNewMap, newMapSaga, deleteMapDetails, deleteMapSage].map(regeneratorRuntime.mark);

function getMaps() {
    return _axios2.default.get("/api/list");
}

function getMapDetails() {
    var results;
    return regeneratorRuntime.wrap(function getMapDetails$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return (0, _effects.call)(getMaps);

                case 3:
                    results = _context.sent;
                    _context.next = 6;
                    return (0, _effects.put)({
                        type: 'UPDATE_MAPS',
                        maps: results.data
                    });

                case 6:
                    _context.next = 11;
                    break;

                case 8:
                    _context.prev = 8;
                    _context.t0 = _context['catch'](0);

                    console.log("error", _context.t0);

                case 11:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this, [[0, 8]]);
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

function createMap(payload) {
    return _axios2.default.post('/api/new', payload);
}

function createNewMap(action) {
    var results;
    return regeneratorRuntime.wrap(function createNewMap$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return (0, _effects.call)(createMap, action.data);

                case 3:
                    results = _context3.sent;
                    _context3.next = 6;
                    return (0, _effects.put)({
                        type: 'FETCH_MAPS'
                    });

                case 6:
                    _context3.next = 8;
                    return (0, _effects.put)({
                        type: "NOTIFY",
                        message: "Map Creates Successfully"
                    });

                case 8:
                    _reactRouter.browserHistory.goBack();
                    _context3.next = 15;
                    break;

                case 11:
                    _context3.prev = 11;
                    _context3.t0 = _context3['catch'](0);
                    _context3.next = 15;
                    return (0, _effects.put)({
                        type: "NOTIFY",
                        message: "Failed Creating New Map"
                    });

                case 15:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked[2], this, [[0, 11]]);
}

function newMapSaga() {
    return regeneratorRuntime.wrap(function newMapSaga$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    _context4.next = 2;
                    return (0, _effects.takeEvery)("NEW_MAP", createNewMap);

                case 2:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked[3], this);
}

function deleteMap(id) {
    return _axios2.default.delete('/api/delete/' + id);
}

function deleteMapDetails(action) {
    var result;
    return regeneratorRuntime.wrap(function deleteMapDetails$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return (0, _effects.call)(deleteMap, action.id);

                case 3:
                    result = _context5.sent;

                    console.log(result);
                    _context5.next = 7;
                    return (0, _effects.put)({ type: 'FETCH_MAPS' });

                case 7:
                    _context5.next = 9;
                    return (0, _effects.put)({ type: 'NOTIFY', message: "Deleted Successfully" });

                case 9:
                    _reactRouter.browserHistory.goBack();
                    _context5.next = 16;
                    break;

                case 12:
                    _context5.prev = 12;
                    _context5.t0 = _context5['catch'](0);
                    _context5.next = 16;
                    return (0, _effects.put)({ type: 'NOTIFY', message: "Failed To delete" });

                case 16:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _marked[4], this, [[0, 12]]);
}

function deleteMapSage() {
    return regeneratorRuntime.wrap(function deleteMapSage$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    _context6.next = 2;
                    return (0, _effects.takeEvery)("REMOVE_MAP", deleteMapDetails);

                case 2:
                case 'end':
                    return _context6.stop();
            }
        }
    }, _marked[5], this);
}

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.editNodeForTree = editNodeForTree;
exports.addNodeForTree = addNodeForTree;
exports.removeNodeForTree = removeNodeForTree;

var _axios = __webpack_require__(226);

var _axios2 = _interopRequireDefault(_axios);

var _effects = __webpack_require__(138);

var _reactRouter = __webpack_require__(56);

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

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = watch;

var _effects = __webpack_require__(138);

var _jsSnackbar = __webpack_require__(837);

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

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _redux = __webpack_require__(28);

var _index = __webpack_require__(546);

var _reduxLogger = __webpack_require__(1148);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxSaga = __webpack_require__(1149);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _sagas = __webpack_require__(550);

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

/***/ 555:
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

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canvas = __webpack_require__(555);

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

/***/ 71:
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

var _properties = __webpack_require__(233);

var props = _interopRequireWildcard(_properties);

var _node = __webpack_require__(545);

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

/***/ })

},[1170]);
//# sourceMappingURL=bundle.js.map