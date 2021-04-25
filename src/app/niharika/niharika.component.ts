import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-niharika',
  templateUrl: './niharika.component.html',
  styleUrls: ['./niharika.component.css']
})
export class NiharikaComponent implements OnInit {
  form1 = new FormControl();
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ])
  name='';
  roll='';
  data={name:'',roll:''}
  result=[]
  constructor(private studentService: StudentService) { }


  onSubmit(){
    this.data.name=this.name
    this.data.roll=this.roll
    console.log(this.data)
    this.studentService.addStudent(this.data).subscribe((result)=>{
      console.log(result)
      this.studentService.refresh.next(true)
    });
  }

  onDelete(){
    this.data.roll = this.roll
    this.studentService.deleteStudent(this.data.roll).subscribe((result)=>{
      this.studentService.refresh.next(true);
    })
  }

  onUpdate(){
    this.data.name = this.name;
    this.data.roll = this.roll;
    this.studentService.updateStudent(this.data).subscribe((result) =>{
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
    // this.form1 = {st
    //   name : FormData();
    //   roll : FormData();
    // }
  }

}
