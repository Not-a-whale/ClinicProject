import { Component, OnInit } from '@angular/core';
import { PatientsService } from './patients.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  patients: any;
  isOpen = false;

  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
    this.patientsService.getPatients();
    this.patientsService.formReseted.subscribe((data) => {
      this.patients = data;
      this.patients.map(
        (item) =>
          (item.dateOfBirth = dayjs(item.dateOfBirth * 2)
            .format()
            .split('T')[0])
      );
      console.log(this.patients);
    });
  }


  handleToggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
