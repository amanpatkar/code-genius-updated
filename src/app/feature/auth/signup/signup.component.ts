import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { createUser } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  @ViewChild("myinput") myInputField: ElementRef | undefined;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  //  confirm("Are you sure you want to open?")
  }
  ngAfterViewInit() {
    this.myInputField?.nativeElement.focus();
    }
  onSubmit(ngForm:NgForm){

    this.auth.updateLogin.next(true);
    this.auth.createUser(ngForm.value).subscribe((response:createUser)=>{
      alert("success");
      console.log(ngForm.value);
    })
  }
  onContinue(){
    // this.isAfter = true;
  }
}
