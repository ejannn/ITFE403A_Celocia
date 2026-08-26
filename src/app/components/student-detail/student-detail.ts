import { Component } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css'
})
export class StudentDetail {

  student = {
    name: 'Niel Jhon Celocia',
    studentId: '2026-0001',
    course: 'BSIT',
    yearLevel: '4th Year',
    status: 'Active'
  };

}