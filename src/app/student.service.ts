import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  refresh = new BehaviorSubject<boolean>(true);
  constructor( private http: HttpClient) { }

  addStudent(payload)
  {
    return this.http.post('http://localhost:3000/addStudent',payload)
  }

  getStudent(){
    return this.http.get('http://localhost:3000/getStudent');
  }

  deleteStudent(roll1){
  return this.http.delete('http://localhost:3000/deleteStudent',{headers: { roll : roll1}});
  }

  updateStudent(payload){
    return this.http.post('http://localhost:3000/updateStudent',payload);
  }
}
