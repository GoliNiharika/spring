import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  //@Output() studentEnrolled = new EventEmitter();
  form1 = new FormControl();
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ])
  name = ''
  rollNumber = ''
  emailId = ''
  password = ''

  student: any
  result = []

  constructor(public router:Router, public studentService: StudentService) {

  }


  onSubmitForm(){
    this.student = {
      name: this.name,
      rollNumber: this.rollNumber,
      emailId: this.emailId,
      password: this.password
    }
    this.studentService.studentList.push(this.student)


    //this.studentEnrolled.emit(this.students)
    //localStorage.setItem("studentListJson",JSON.stringify(this.students))
    //this.router.navigate(["/studentList"],{state:this.students});

  }


  ngOnInit(): void {

  }
}
