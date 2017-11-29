import { Employee, EMPLOYEES_LIST } from './employee';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return Observable.of(EMPLOYEES_LIST);
  }
}
