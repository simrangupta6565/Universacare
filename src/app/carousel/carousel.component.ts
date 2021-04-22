import { Component, OnInit } from '@angular/core';
export interface Section {
  address: string,
  name: string;
  detail: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  folders: Section[] = [
    {
      address:'images\Website Illustrations 0.png',
      name: '1. Initial Consultation',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
    },
    {
      address:'assets\images\Website Illustrations 0.png',
      name: '2. Customized Care Plan',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
    },
    {
      address:'src\assets\images\Website Illustrations 0.png',
      name: '3. Caregiver Matching',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
    },
    {
      address:'src\assets\images\Website Illustrations 0.png',
      name: '4. Ongoing Support & Supervision',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
