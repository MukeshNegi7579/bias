import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Email
password
  constructor(private httpobjj:HttpClient) { }
    
  login(){
    console.log("login clicked")
    var url = "http://localhost:7005/login"
   this.httpobjj.post(url,{
       "Email":this.Email,
       "password":this.password,
       
   })
   .subscribe((res)=>{
      console.log("response from our api:",res)
      
      localStorage.setItem("currentuser",res['Email'])
      
   },(err)=>{
       console.log("net error:",err)
   })
}
  ngOnInit() {
  }

}
