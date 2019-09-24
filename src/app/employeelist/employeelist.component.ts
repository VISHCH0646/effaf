import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private employee: EmployeeService) { }

  ngOnInit() {this.employeedetail=this.employee.getEmployee()
  }
  employeedetail=[]
  

}
