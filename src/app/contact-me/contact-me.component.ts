import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  success = "success"
  failure = "failure"
  notTried = "not tried"
  loading = "loading"


  status=this.notTried

  contact ={
    name: "",
    surname: "",
    email: "",
    message: ""
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitClicked(form: NgForm){

    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*")

    this.status=this.loading

    this.http.post("https://script.google.com/macros/s/AKfycby-AmBgD2FIeG2nzjAgiSxB6rqRO3OGLjrOBLzONghHR4noRrqNirCsRK39YRFkA_g/exec",
    JSON.stringify(this.contact),{
        headers: {
          "Content-Type": "text/plain"
        }
    } 
    ).subscribe((response: any) => {
        if(response.result=="success")        
          this.status=this.success
        else
          this.status=this.failure
      })
  }
}