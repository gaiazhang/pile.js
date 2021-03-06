/*!
 * @pile-ui/icon.js v2.0.4-alpha.0
 * (c) 2018-2019 renmaomin <renmaomin@126.com> (https://github.com/renmm)
 * Released under the MIT License.
 */
import { createElement } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import { compose, sizeProperty, sizes, prefixClsProperty } from '@pile-ui/shared';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

var Icon = function Icon(_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      type = _ref.type,
      size = _ref.size,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ["prefixCls", "type", "size", "className"]);

  var cls = classNames((_classNames = {}, defineProperty(_classNames, "".concat(prefixCls, "-icon-").concat(type), true), defineProperty(_classNames, className, className), defineProperty(_classNames, size, size), _classNames));
  return createElement("i", _extends_1({
    className: cls
  }, props));
};

Icon.propTypes = {
  type: string.isRequired
};
var enhance = compose(sizeProperty([sizes.SMALL, sizes.LARGE]), prefixClsProperty);
var index = enhance(Icon);

export default index;
//# sourceMappingURL=icon.esm.js.map
