import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  profileForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  constructor() { }
values: (string | number)[] = []; 
a:any=[];
details: any;
  onSubmit(value){
 this.details   =value;
 console.log(value)
this.values.push(this.details);
  }
}
