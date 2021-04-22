import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
export interface Section {
  name: string;
  
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  services: Section[] = [
    {
      name: 'Houly Care',
      
    },
    {
      name: 'Daily Care',
     
    },
    {
      name: 'Hospital to Home',
      
    },
    {
      name: 'Respite Care',
      
    },
    {
      name: 'Specialized Care',
      
    }
  ];
  company: Section[] = [
    {
      name: 'About Us',
      
    },
    
    {
      name: 'Locations',
      
    },
    {
      name: 'Care Givers',
      
    },
    {
      name: 'News and Blogs',
      
    },
    {
      name: 'Contact Us',
      
    },
    {
      name: 'FAQ',
      
    },
  ];

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
