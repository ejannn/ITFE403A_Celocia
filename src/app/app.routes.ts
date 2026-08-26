import { Routes } from '@angular/router';

import { Students } from './components/students/students';
import { StudentDetail } from './components/student-detail/student-detail';
import { AddStudent } from './components/add-student/add-student';

export const routes: Routes = [

  {
    path: 'students',
    component: Students
  },

  {
    path: 'students/add',
    component: AddStudent
  },

  {
    path: 'students/:id',
    component: StudentDetail
  },

  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  }

];