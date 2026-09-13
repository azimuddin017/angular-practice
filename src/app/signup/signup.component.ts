import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  handleClickEvent(){
    console.log("Function Colled");
    this.otherFunction()
  }
  otherFunction(){
    console.log("Other Function")
  }
}
