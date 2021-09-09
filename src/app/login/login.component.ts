import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studentData = [
    {
      name: 'sam',
      attendanceStatus: false
    },
    {
      name: 'ganesh',
      attendanceStatus: false
    },
    {
      name: 'venky',
      attendanceStatus: true
    },
    {
      name: 'deepika',
      attendanceStatus: false
    },
    {
      name: 'jahaziel',
      attendanceStatus: true
    }
  ]

  submitadd(){
    console.log(this.studentData)
  }

  
}
