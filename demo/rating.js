System.register("rating", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      Input,
      Rating;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      Input = $__m.Input;
    }],
    execute: function() {
      Rating = function() {
        function Rating() {
          this.rate;
          this.ratings = [];
        }
        return ($traceurRuntime.createClass)(Rating, {
          selectUntilIndex: function(index) {
            this.selectedIndex = index;
          },
          selectTheCurrentRate: function() {
            var rate = this.rate;
            var rateIndex = this.findIndexFromRate(rate);
            this.selectUntilIndex(rateIndex);
          },
          findIndexFromRate: function(currentRate) {
            var currentIndex;
            this.ratings.forEach(function(rate, index) {
              if (rate.value === currentRate) {
                currentIndex = index;
                return;
              }
            });
            return currentIndex;
          },
          setRate: function(event, rate) {
            if (this.rate === rate) {
              this.rate = undefined;
            } else {
              this.rate = rate;
            }
            this.selectTheCurrentRate();
          }
        }, {});
      }();
      $__export("Rating", Rating);
      Object.defineProperty(Rating, "annotations", {get: function() {
          return [new Component({
            selector: 'rating',
            inputs: ['ratings']
          }), new View({templateUrl: 'rating.html'})];
        }});
    }
  };
});
