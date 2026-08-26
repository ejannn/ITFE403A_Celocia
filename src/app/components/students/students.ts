import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {

  isLoading = true;

  students = [
    {
      firstName: 'Juan',
      middleName: 'Dela',
      lastName: 'Cruz',
      Course: 'BSIT',
      YearLevel: '2nd Year',
      isActive: false,
      isFavorited: false
    },
    {
      firstName: 'Maria',
      middleName: 'Santos',
      lastName: 'Reyes',
      Course: 'BSCS',
      YearLevel: '3rd Year',
      isActive: false,
      isFavorited: false
    },
    {
      firstName: 'Pedro',
      middleName: 'Gonzales',
      lastName: 'Lopez',
      Course: 'BSIT',
      YearLevel: '1st Year',
      isActive: false,
      isFavorited: false
    },
    {
      firstName: 'Niel',
      middleName: 'Jhon',
      lastName: 'Celocia',
      Course: 'BSIT',
      YearLevel: '4th Year',
      isActive: true,
      isFavorited: false
    }
  ];

  

  deleteStudent(index: number): void {
    this.students.splice(index, 1);
  }

  editStudent(student: any): void {
    alert(
      `Editing ${student.firstName} ${student.middleName} ${student.lastName}`
    );
  }
}