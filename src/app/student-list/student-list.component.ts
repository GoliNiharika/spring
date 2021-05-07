import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'
import { StudentService } from '../student.service';
import * as xlsx from 'xlsx';
//https://levelup.gitconnected.com/export-data-to-excel-sheet-in-angular-8-7a8e0342643d   reference
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  result = []
    //studentList = JSON.parse(localStorage.getItem("studentListJson"))
  constructor(public router : Router, public studentService:StudentService) {
    //this.studentList=this.router.getCurrentNavigation().extras.state
   }
   @ViewChild('epltable', { static: false }) epltable: ElementRef;

   export() {
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'epltable.xlsx');
   }

   addStudent(){
    this.router.navigate([' '])
   }

   onEdit(student){

    this.router.navigate([" "],{state:student});
    // this.data.name = this.name;
    // this.data.roll = this.roll;
    // this.studentService.updateStudent(this.data).subscribe((result) =>{
    //   this.studentService.refresh.next(true);
    // })
  }

   onDelete(student){
    console.log(student.roll)
    this.studentService.deleteStudent(student.roll).subscribe((result)=>{
      this.studentService.refresh.next(true);
    })
   }
  ngOnInit(): void {
    this.studentService.refresh.subscribe(
      data=>{
        if(data)
        {
          this.studentService.getStudent().subscribe(
            (result:any)=>{
              this.result=result
            }
          )
        }
      }
    )
  }

}
