(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react-router/matchPath'), require('react-router/Router'), require('react'), require('react-router/Switch'), require('react-router/Route')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react-router/matchPath', 'react-router/Router', 'react', 'react-router/Switch', 'react-router/Route'], factory) :
	(factory((global.ReactRouterConfig = {}),global.ReactRouter.matchPath,global.ReactRouter.Router,global.React,global.ReactRouter.Switch,global.ReactRouter.Route));
}(this, (function (exports,matchPath,Router,React,Switch,Route) { 'use strict';

matchPath = matchPath && matchPath.hasOwnProperty('default') ? matchPath['default'] : matchPath;
Router = Router && Router.hasOwnProperty('default') ? Router['default'] : Router;
React = React && React.hasOwnProperty('default') ? React['default'] : React;
Switch = Switch && Switch.hasOwnProperty('default') ? Switch['default'] : Switch;
Route = Route && Route.hasOwnProperty('default') ? Route['default'] : Route;

// ensure we're using the exact code for default root match
var computeMatch = Router.prototype.computeMatch;


var matchRoutes = function matchRoutes(routes, pathname) {
  var branch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  routes.some(function (route) {
    var match = route.path ? matchPath(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
    : computeMatch(pathname); // use default "root" match

    if (match) {
      branch.push({ route: route, match: match });

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch);
      }
    }

    return match;
  });

  return branch;
};

var _extends = Object.assign || function (target) {
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

var renderRoutes = function renderRoutes(routes) {
  var extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return routes ? React.createElement(
    Switch,
    null,
    routes.map(function (route, i) {
      return React.createElement(Route, {
        key: route.key || i,
        path: route.path,
        exact: route.exact,
        strict: route.strict,
        render: function render(props) {
          return React.createElement(route.component, _extends({}, props, extraProps, { route: route }));
        }
      });
    })
  ) : null;
};

exports.matchRoutes = matchRoutes;
exports.renderRoutes = renderRoutes;

Object.defineProperty(exports, '__esModule', { value: true });

})));
