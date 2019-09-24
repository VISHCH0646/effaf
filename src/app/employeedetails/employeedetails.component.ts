import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  constructor(private employee: EmployeeService) { }

  ngOnInit() {this.employeedetail=this.employee.getEmployee()
  }
  employeedetail=[]

}
