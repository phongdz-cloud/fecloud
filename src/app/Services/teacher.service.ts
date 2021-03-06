import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Teacher } from '../Interfaces/Teacher';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('learn')}`
  })
}
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private request: HttpClient) { }



  //get all teachers
  getAllTeachers():Observable<{}>{
    return this.request.get<{}>(`/teacherApi`)
  }

  //add teacher
  addTeacher(teacher: Teacher):Observable<{}>{
    return this.request.post<{}>(`/teacherApi`, teacher);
  }

  //modify teacher
  editTeacher(teacher: Teacher):Observable<{}>{
    return this.request.put<{}>(``, teacher);
  }

  //get teacher by id
  getTeacherById(id: string): Observable<{}>{
    return this.request.get<{}>(`/getTeacher/${id}`)
  }

  //delete teacher by id
  deleteTeacher(id: string):Observable<{}>{
    return this.request.delete<{}>(`/getTeacher/${id}`)
  }

  //get teacher by token
  getTeacherByToken():Observable<{}>{
    return this.request.get<{}>(``, httpOptions)
  }
}
