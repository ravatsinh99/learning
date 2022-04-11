import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    public employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    // this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      {
        next: (res) => { console.log(res) },
        error: (err: HttpErrorResponse) => console.error(err),
      })
  }

}
