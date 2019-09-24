import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private emp: EmployeeService){}
  title = 'servicesdemo';
  ename
  eid
  edept
  myEmployee={
    id:1,
    name:"",
    dept:""
  }
  addEmployee()
  {
    this.myEmployee.id=this.eid
    this.myEmployee.name=this.ename
    this.myEmployee.dept=this.edept
    this.emp.setEmployee(this.myEmployee)
  }
}
