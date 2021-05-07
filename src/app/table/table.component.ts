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
  isUpdate=false
  constructor(public router:Router, public studentService: StudentService) {
    const studentData=this.router.getCurrentNavigation().extras.state
     if(studentData)
     {
      this.name=studentData.name
      this.rollNumber=studentData.roll
      this.emailId=studentData.email
      this.password=studentData.password
      this.isUpdate=true
     }
  }


  onSubmitForm(){
    this.student = {
      roll: this.rollNumber,
      name: this.name,
      email: this.emailId,
      password: this.password
    }
    //this.studentService.studentList.push(this.student)

    if(this.isUpdate)
    {
      this.studentService.updateStudent(this.student).subscribe((result)=>{
        console.log(result)
        this.studentService.refresh.next(true)
      });
    }
    else
    {
      this.studentService.addStudent(this.student).subscribe((result)=>{
        console.log(result)
        this.studentService.refresh.next(true)
      });
    }


    //this.studentEnrolled.emit(this.students)
    //localStorage.setItem("studentListJson",JSON.stringify(this.students))
    //this.router.navigate(["/studentList"],{state:this.students});

  }


  ngOnInit(): void {

  }
}
