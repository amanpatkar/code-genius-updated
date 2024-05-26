import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../feature/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  // getAllDetails:cart[] = [];
  constructor(private auth:AuthService, private router:Router, private route: ActivatedRoute,) { }
  currentUrl = '';
  ngOnInit(): void {
    // this.getAllData();
     this.auth.updateLogin.subscribe((res:any)=>{
      // this.getAllData();
     })
  }
  onLogOut(){
    this.router.navigate(['/dashboard']);
  }
  // getAllData(){
  //   this.pageService.getCartData().subscribe((response:any)=>{
  //     this.getAllDetails = response
  //    })
  // }
}
