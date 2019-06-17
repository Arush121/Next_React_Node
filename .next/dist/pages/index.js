'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\React_Next\\book-list\\pages\\index.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  (0, _createClass3.default)(_class, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        var db, list;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 6;
                  break;
                }

                db = req.db;
                _context.next = 4;
                return db.collection('Book').find().sort({ createdAt: -1 }).toArray();

              case 4:
                list = _context.sent;
                return _context.abrupt('return', { list: list });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this.state = { formData: { author: '', title: '' } };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var list = this.state.list || this.props.list;
      var formData = this.state.formData;

      return _react2.default.createElement('div', { id: 'container', className: 'jsx-2512804896',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-2512804896',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Reading List'), _react2.default.createElement('div', { id: 'reading-list', className: 'jsx-2512804896',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('ul', {
        className: 'jsx-2512804896',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, list.map(function (book) {
        return _react2.default.createElement('div', { key: book._id, className: 'jsx-2512804896',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, _react2.default.createElement('span', {
          className: 'jsx-2512804896' + ' ' + 'description',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _react2.default.createElement('i', {
          className: 'jsx-2512804896',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, book.title), ' by ', book.author));
      }))), _react2.default.createElement(_style2.default, {
        styleId: '2512804896',
        css: 'div.jsx-2512804896{font-family:\'Helvetica\',\'sans-serif\';}#container.jsx-2512804896{width:800px;margin-left:auto;margin-right:auto;}h1.jsx-2512804896{color:#ccbc1d;}button.jsx-2512804896{background-color:#ff257b;color:#ffffff;font-weight:bold;border:0px;border-radius:2px;padding:5px;padding-left:8px;padding-right:8px;margin:5px;}input.jsx-2512804896{padding:5px;border:0px;background-color:#f0f0f0;margin:5px;}.description.jsx-2512804896{position:relative;top:-0.2em;}.remove.jsx-2512804896{cursor:pointer;color:#ff257b;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29CLEFBR21ELEFBRzFCLEFBS0UsQUFHVyxBQVdiLEFBTU0sQUFJSCxZQTVCRSxBQW1CTixFQWRiLENBd0JnQixHQUpILEtBTGMsRUFaWCxJQVBJLEFBeUJwQixBQUlrQixRQWpDbEIsRUFZbUIsTUFzQm5CLEVBN0JBLENBbUJhLFFBWEEsR0FZYixRQVhvQixrQkFDTixZQUNLLGlCQUNDLGtCQUNQLFdBQ2IiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L1JlYWN0X05leHQvYm9vay1saXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxIH0pIHtcclxuICAgIGlmIChyZXEpIHtcclxuICAgICAgY29uc3QgeyBkYiB9ID0gcmVxXHJcbiAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdCb29rJykuZmluZCgpLnNvcnQoeyBjcmVhdGVkQXQ6IC0xIH0pXHJcbiAgICAgICAgLnRvQXJyYXkoKVxyXG4gICAgICByZXR1cm4geyBsaXN0IH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc3RhdGUgPSB7IGZvcm1EYXRhOiB7IGF1dGhvcjogJycsIHRpdGxlOiAnJyB9IH1cclxuICB9XHJcblxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICBjb25zdCBsaXN0ID0gdGhpcy5zdGF0ZS5saXN0IHx8IHRoaXMucHJvcHMubGlzdFxyXG4gICBjb25zdCB7IGZvcm1EYXRhIH0gPSB0aGlzLnN0YXRlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgUmVhZGluZyBMaXN0XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8ZGl2IGlkPVwicmVhZGluZy1saXN0XCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaXN0Lm1hcChib29rID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtib29rLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGk+e2Jvb2sudGl0bGV9PC9pPiBieSB7Ym9vay5hdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnLCAnc2Fucy1zZXJpZic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2NjYmMxZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjI1N2I7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogLTAuMmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlbW92ZSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZjI1N2I7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=pages\\index.js?entry */'
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcSIsImRiIiwiY29sbGVjdGlvbiIsImZpbmQiLCJzb3J0IiwiY3JlYXRlZEF0IiwidG9BcnJheSIsImxpc3QiLCJzdGF0ZSIsImZvcm1EYXRhIiwiYXV0aG9yIiwidGl0bGUiLCJwcm9wcyIsIm1hcCIsImJvb2siLCJfaWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7Ozs7Ozs7OztZLEFBRzJCLFcsQUFBQTs7Ozs7O3FCQUMxQixBOzs7QUFDTTs7QSxxQkFBTyxBLEksQUFBUDs7dUJBQ1csR0FBQSxBQUFHLFdBQUgsQUFBYyxRQUFkLEFBQXNCLE9BQXRCLEFBQTZCLEtBQUssRUFBRSxXQUFXLENBQS9DLEFBQWtDLEFBQWMsSyxBQUFoRCxBQUNoQjs7bUJBREc7QTtpREFFQyxFQUFFLE1BQUYsQTs7Ozs7Ozs7Ozs7Ozs7O0FBSVg7OztvQkFBZTt3Q0FBQTs7Z0lBRWI7O1VBQUEsQUFBSyxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQUYsQUFBVSxJQUFJLE9BRjFCLEFBRWIsQUFBYSxBQUFZLEFBQXFCO1dBQy9DOzs7Ozs2QkFHUyxBQUNUO1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BRDVCLEFBQ1QsQUFBMkM7VUFEbEMsQUFFRCxXQUFhLEtBRlosQUFFaUIsTUFGakIsQUFFRCxBQUNQOzs2QkFDRSxjQUFBLFNBQUssSUFBTCxBQUFRLHdCQUFSOztvQkFBQTtzQkFBQSxBQUVFO0FBRkY7T0FBQSxrQkFFRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBR0EsaUNBQUEsY0FBQSxTQUFLLElBQUwsQUFBUSwyQkFBUjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBRUk7QUFGSjtBQUFBLGNBRUksQUFBSyxJQUFJLGdCQUFBOytCQUNQLGNBQUEsU0FBSyxLQUFLLEtBQVYsQUFBZSxnQkFBZjs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsY0FBQTs4Q0FBQSxBQUFnQjs7c0JBQWhCO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQUk7QUFBSjtBQUFBLGdCQURGLEFBQ0UsQUFBUyxRQUFlLGFBSHJCLEFBQ1AsQUFDRSxBQUMrQjtBQVgzQyxBQUtFLEFBQ0UsQUFFSTtpQkFSUjthQURGLEFBQ0UsQUEyREg7QUEzREc7Ozs7O0VBcEJ1QixnQkFBTSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L1JlYWN0X05leHQvYm9vay1saXN0In0=