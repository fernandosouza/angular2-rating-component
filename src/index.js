import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Rating} from 'rating';

@Component({
  selector: 'main'
})

@View({
  directives: [Rating],
  template: `
    <rating [ratings]="ratings"></rating>
  `
})

class Main {

  constructor() {

    this.ratings = [
      {
        title: 'Rate 1',
        value: 1
      },
      {
        title: 'Rate 2',
        value: 2
      },
      {
        title: 'Rate 3',
        value: 3
      },
      {
        title: 'Rate 4',
        value: 4
      },
      {
        title: 'Rate 5',
        value: 5
      }
    ];

  }

}

bootstrap(Main);
