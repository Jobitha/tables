import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  ngOnInit(): void {
    
  }
  
  a="jobitha"
 onFormSubmit(g:NgForm){
  console.log(g)
 }
 
}
