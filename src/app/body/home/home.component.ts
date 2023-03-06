import { Component } from '@angular/core';

interface img_meta {
  img: string,
  alt: string,
  text: string
}

@Component({
  selector: 'psh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeSliderArray: img_meta[];
  selectedIndex: number = 0;
  intervalId: any;

  updateSelection(self: HomeComponent) {
    return function() {
      console.log(self.selectedIndex);
      if (self.selectedIndex == self.homeSliderArray.length - 1) {
        self.selectedIndex = 0;
      } else {
        self.selectedIndex += 1;
      }
    }
  }

  constructor() {
    this.homeSliderArray = [
      {img: 'assets/img/home_banner.jpg', alt: 'Punjabi Society of Greater Houston Area wishes you Happy Vaisakhi!', text: 'Our Motto is to be the best!'},
      {img: 'assets/img/home_banner.jpg', alt: 'Punjabi Society of Greater Houston Area wishes you Happy Vaisakhi!', text: 'Punjabi Society of Greater Houston Area wishes you Happy Vaisakhi!'},
    ];
    this.intervalId = setInterval(this.updateSelection(this), 10000);
  }

}
