import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {

  students: { firstName: string; middleName: string; lastName: string; Course: string; YearLevel: string; isActive: boolean; isFavorited: boolean }[] = [
    { firstName: 'Juan', middleName: 'Dela', lastName: 'Cruz',  Course: 'BSIT', YearLevel: '2nd Year', isActive: false , isFavorited: false },
    { firstName: 'Maria', middleName: 'Santos', lastName: 'Reyes',  Course: 'BSCS', YearLevel: '3rd Year', isActive: false , isFavorited: false },
    { firstName: 'Pedro', middleName: 'Gonzales', lastName: 'Lopez',  Course: 'BSIT', YearLevel: '1st Year', isActive: false, isFavorited: false },
    { firstName: 'Niel', middleName: 'Jhon', lastName: 'Celocia',  Course: 'BSIT', YearLevel: '4th Year', isActive: true , isFavorited: false },
  ]

  deleteStudent(index: number): void {
    this.students.splice(index, 1);
    console.log(`Student at position ${index + 1} has been deleted.`);
  }

  editStudent(student: any): void {
  console.log(`Editing ${student.firstName} ${student.middleName} ${student.lastName}`);
  alert(`Editing ${student.firstName} ${student.middleName} ${student.lastName}`);
}
}
