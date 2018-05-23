"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);
	}

	_createClass(App, null, [{
		key: "init",
		value: function init() {

			App.toy = document.getElementsByClassName('toy')[0];

			App.toy.addEventListener("dragstart", App.dragstart);
			App.toy.addEventListener("dragend", App.dragend);

			var containers = document.getElementsByClassName('holder');

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = containers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var container = _step.value;

					container.addEventListener("dragover", App.dragover);
					container.addEventListener("dragenter", App.dragenter);
					container.addEventListener("dragleave", App.dragleave);
					container.addEventListener("drop", App.drop);
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
		key: "dragstart",
		value: function dragstart() {
			var _this = this;

			this.className += " held";

			setTimeout(function () {
				return _this.className = "invisible";
			}, 0);
		}
	}, {
		key: "dragend",
		value: function dragend() {
			this.className = "toy";
		}
	}, {
		key: "dragover",
		value: function dragover(e) {
			e.preventDefault();
		}
	}, {
		key: "dragenter",
		value: function dragenter(e) {
			e.preventDefault();
			this.className += " hovered";
		}
	}, {
		key: "dragleave",
		value: function dragleave() {
			this.className = "holder";
		}
	}, {
		key: "drop",
		value: function drop() {
			this.className = "holder";
			this.append(App.toy);
		}
	}]);

	return App;
}();

document.addEventListener("DOMContentLoaded", App.init);

//https://medium.com/quick-code/simple-javascript-drag-drop-d044d8c5bed5
//# sourceMappingURL=dragging.js.map
