import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PatientsService {
  public formReseted = new Subject<any>();
  constructor(private http: HttpClient) {}

  getPatients() {
    console.log('service');
    this.http
      .get('http://localhost:3000/patients')
      .toPromise()
      .then((res) => {
        this.formReseted.next(res);
      });
  }
}
