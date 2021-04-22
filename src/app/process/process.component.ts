import { Component, OnInit } from '@angular/core';
export interface Section {
  address: string,
  name: string;
  detail: string;
}
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  folders: Section[] = [
    {
      address:'src\assets\images\Frame 314.png',
      name: '1. Initial Consultation',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
    },
    {
      address:'assets\images\Frame 315.png',
      name: '2. Customized Care Plan',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
    },
    {
      address:'assets\images\Frame 316.png',
      name: '3. Caregiver Matching',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
    },
    {
      address:'assets\images\Frame 317.png',
      name: '4. Ongoing Support & Supervision',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
