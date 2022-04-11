import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url="http://localhost:3000/employees";
  constructor(
    public _http:HttpClient
  ) { }
  getEmployees(): Observable<Employee[]>{
    return this._http.get<Employee[]>(this.url);
  }
}
export class Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}
