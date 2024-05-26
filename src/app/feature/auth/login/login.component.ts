import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { fetchUser } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild("myinput") myInputField: ElementRef | undefined;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  //  confirm("Are you sure you want to open?")
  }
  ngAfterViewInit() {
    this.myInputField?.nativeElement.focus();
    }
  onSubmit(ngForm:NgForm){
    console.log(ngForm.value);
    this.auth.updateLogin.next(true);
    this.auth.loginUser(ngForm.value).subscribe((response:fetchUser) =>{
      console.log(response);
      alert("succes");
    })

  }
  onContinue(){
    // this.isAfter = true;
  }
}
