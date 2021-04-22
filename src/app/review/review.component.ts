import { Component, OnInit } from '@angular/core';
export interface Section {

  name: string;
  detail: string;
}
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  folders: Section[] = [
    {
      
      name: 'Alvin Stanley',
      detail: 'Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help. ',
    },
    {
      
      name: 'Alvin Stanley',
      detail: 'Great company to work for! This organization cares for its team of caregivers, office employees, and clients. ',
    },
    {
      
      name: 'Alvin Stanley',
      detail: 'Awesome',
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
