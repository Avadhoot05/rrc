import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  yearOfStudy = [
    { id: null, name: 'Select Year of Study' },
    { id: 1, name: 'First Year of Engineering' },
    { id: 2, name: 'Second Year of Engineering' },
    { id: 3, name: 'Third Year of Engineering' },
    { id: 4, name: 'Fourth Year of Engineering' },
    { id: 0, name: 'Other' },
  ];

  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.required]),
    college: new FormControl('', [Validators.required]),
    yos: new FormControl(null, [Validators.required]),
  });

  submitSuccess: boolean = false;
  submitClicked: boolean = false;
  isLoading: boolean = true;

  constructor(private _fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitClicked = true;
    this.isLoading = false;

    if (!this.registrationForm.invalid) {
      console.log('Submitted');

      var headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');

      this.http
        .post(
          'https://script.google.com/macros/s/AKfycby-AmBgD2FIeG2nzjAgiSxB6rqRO3OGLjrOBLzONghHR4noRrqNirCsRK39YRFkA_g/exec',
          JSON.stringify(this.registrationForm),
          {
            headers: {
              'Content-Type': 'text/plain',
            },
          }
        )
        .subscribe((response: any) => {
          if (response.result == 'success') this.submitSuccess = true;
          else {
            this.submitClicked = false;
            this.submitSuccess = false;
          }
        });
    }
  }
}
