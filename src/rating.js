import {Component, View, Input} from 'angular2/core';

@Component({
  selector: 'rating',
  inputs: ['ratings']
})

@View({
  templateUrl: 'rating.html'
})

export class Rating {

  constructor() {
    this.rate;
    this.ratings = [];
  }

  selectUntilIndex(index) {
    this.selectedIndex = index;
  }

  selectTheCurrentRate() {
    let rate = this.rate;
    let rateIndex = this.findIndexFromRate(rate);

    this.selectUntilIndex(rateIndex);
  }

  findIndexFromRate(currentRate) {
    let currentIndex;

    this.ratings.forEach(
      function(rate, index) {
        if (rate.value === currentRate) {
          currentIndex = index;
          return;
        }
      }
    )

    return currentIndex;
  }

  setRate(event, rate) {
    if (this.rate === rate) {
      this.rate = undefined;
    }
    else {
      this.rate = rate;
    }

    this.selectTheCurrentRate();
  }

}
