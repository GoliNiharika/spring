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

   onEdit(){
    console.log("Updating")
   }

   onDelete(){
    console.log("Deleting")
   }
  ngOnInit(): void {

  }

}
