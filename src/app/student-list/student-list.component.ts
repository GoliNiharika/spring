import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'
import { StudentService } from '../student.service';
import * as xlsx from 'xlsx';
import { CellRenderer } from '../CellRenderer';
//https://levelup.gitconnected.com/export-data-to-excel-sheet-in-angular-8-7a8e0342643d   reference
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  col = []
  row = []
  gridApi
  selectedRowsData=[]
 frameworkComponents
    //studentList = JSON.parse(localStorage.getItem("studentListJson"))
  constructor(public router : Router, public studentService:StudentService) {
    //this.studentList=this.router.getCurrentNavigation().extras.state
   }
   @ViewChild('epltable', { static: false }) epltable: ElementRef;

   export() {
    const params = {
      //columnGroups: true,
      fileName: 'Student_Table',
      onlySelected: true
    };
    this.gridApi.exportDataAsCsv(params);
    // const ws: xlsx.WorkSheet =
    // xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    // const wb: xlsx.WorkBook = xlsx.utils.book_new();
    // xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    // xlsx.writeFile(wb, 'epltable.xlsx');
   }
   selectedRows(){
    this.selectedRowsData=this.gridApi.getSelectedRows()
    console.log(this.selectedRowsData)

   }
   onGridReady(params) {
    this.gridApi = params.api;
    console.log(this.gridApi)
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

   DeleteMultipleStudents(){
     const roll=[]
    this.selectedRowsData.forEach(row=>{
      roll.push(row.roll)
    })
     this.studentService.deleteMultipleStudents(roll).subscribe((result)=>{
      this.studentService.refresh.next(true);
    })
   }
  ngOnInit(): void {
    this.col = [
      { field: 'S No',  headerCheckboxSelection: true, checkboxSelection: true,},
      {field: 'name', sortable: true, filter: true},
      {field: 'email', sortable: true, filter: true},
      {field: 'roll', sortable: true, filter: true},
      //{field: 'action', sortable: true, filter: true}
      {
        field: 'action',
        cellRenderer: 'medalCellRenderer'
      }
    ];
    this.frameworkComponents = {
      medalCellRenderer: CellRenderer
    };
    this.studentService.refresh.subscribe(
      data=>{
        if(data)
        {
          this.studentService.getStudent().subscribe(
            (result:any)=>{
              this.row=result
              this.row.forEach((element,index) => {
                element['S No']=index+1
              });
            }
          )
        }
      }
    )
  }

}
