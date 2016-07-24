System.register("index", ["angular2/core", "angular2/platform/browser", "rating"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      Rating,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Rating = $__m.Rating;
    }],
    execute: function() {
      Main = function() {
        function Main() {
          this.ratings = [{
            title: 'Rate 1',
            value: 1
          }, {
            title: 'Rate 2',
            value: 2
          }, {
            title: 'Rate 3',
            value: 3
          }, {
            title: 'Rate 4',
            value: 4
          }, {
            title: 'Rate 5',
            value: 5
          }];
        }
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [Rating],
            template: "\n    <rating [ratings]=\"ratings\"></rating>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
});
