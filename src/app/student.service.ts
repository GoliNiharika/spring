import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  refresh = new BehaviorSubject<boolean>(true);
  constructor( private http: HttpClient) { }

  studentList = []

  addStudent(payload)
  {
    return this.http.post(environment.ApiUrl+'/addStudent',payload)
  }

  getStudent(){
    return this.http.get(environment.ApiUrl+'/getStudent');
  }

  deleteStudent(roll){
  return this.http.delete(environment.ApiUrl+'/deleteStudent',{params:{roll}});
  }

  updateStudent(payload){
    return this.http.post(environment.ApiUrl+'/updateStudent',payload);
  }
}
