import { Component } from '@angular/core';

// import { AgRendererComponent } from '@ag-grid-community/angular';
// import { ICellRendererParams } from '@ag-grid-community/core';
import { StudentService } from './student.service';
import { Router } from '@angular/router';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'cellRenderer',
  template: `
    <span>

      <i (click)="onEdit()" class="fas fa-pen"></i>/
      <i (click)="onDelete()" class="fas fa-trash"></i>

    </span>
  `,
})
export class CellRenderer implements AgRendererComponent {


  rowData
  constructor(public router : Router, public studentService:StudentService) {
  }
  refresh(params: ICellRendererParams): boolean {
    throw new Error("Method not implemented.");
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error("Method not implemented.");
  }

  onEdit(){
    this.router.navigate([" "],{state:this.rowData});

  }

   onDelete(){
    console.log(this.rowData.roll)
    this.studentService.deleteStudent(this.rowData.roll).subscribe((result)=>{
      this.studentService.refresh.next(true);
    })
   }

   agInit(params: ICellRendererParams): void {
    this.rowData=params.data
  }
}
