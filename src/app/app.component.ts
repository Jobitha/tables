import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string="jobi";
  age:number=20;
  color = 'blue';
  getCity(){
    return 'chennai';
  };
  firstName = "maha";
  disableValue : boolean = false; 

  // \\\\\\\\
  fileStatus = "typing"
  submit(){
  this.fileStatus = "submitted"
  }
}
