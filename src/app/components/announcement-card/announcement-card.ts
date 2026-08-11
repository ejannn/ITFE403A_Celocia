import { Component } from '@angular/core';
import { isActive } from '@angular/router'; 
import { CommonModule } from '@angular/common';
// interface Announcement {
//   title: string;
//   body: string;
//   date: string;
//   isActive: boolean;
// }
@Component({
  selector: 'app-announcement-card',
  imports: [CommonModule],
  templateUrl: './announcement-card.html',
  styleUrl: './announcement-card.css',
})
export class AnnouncementCard{

  announcements: { title: string; body: string; date: string; author: string; isActive: boolean }[] =  [
    { title: 'Enrollment Schedule', body: 'Enrollment begins next Monday. Please prepare all required documents.',
       date: 'August 1, 2026' , author: 'Mrs. Mary Ann Bono', isActive: true},
    { title: 'Canteen Menu Update', body: 'The canteen menu has been updated for the new semester. Check out the latest options available.',
       date: 'August 4, 2026' , author: 'Mrs. Crush Nako Sa Canteen', isActive: false},
    { title: 'Valorant Tournament', body: 'The Valorant tournament will be held next month. Sign up now to participate and showcase your skills!',
       date: 'August 10, 2026' , author: 'Mr. Alvin John Araneta', isActive: true},
    { title: 'Library Renovation', body: 'The library will be closed for renovation from August 15 to September 15. Please plan your visits accordingly.',
       date: 'August 12, 2026' , author: 'Mrs. Filipa MamaQoh Navaja', isActive: false},
    { title: 'New Course Offering', body: 'We are excited to announce a new course offering in Artificial Intelligence starting this semester.',
       date: 'August 20, 2026' , author: 'Mr. Nurse Guy', isActive: true},
    { title: 'Career Fair', body: 'The annual career fair will be held on September 5. Meet potential employers and explore job opportunities.',
       date: 'August 25, 2026' , author: 'Ms. Chiara M. Canque', isActive: false},
    { title: 'Sports Day', body: 'Join us for the annual sports day event on September 10. Participate in various sports activities and cheer for your favorite teams.',
       date: 'August 30, 2026' , author: 'Mr. Sports Guys',  isActive: true},
    { title: 'Guest Lecture Series', body: 'We are hosting a guest lecture series featuring industry experts. Attend these sessions to gain insights and knowledge from professionals in your field.',
       date: 'September 1, 2026' , author: 'Ms. Chizuru Mizuhara', isActive: false},
    { title: 'Student Council Elections', body: 'The student council elections will be held on September 15. Cast your vote and have a say in shaping the future of our student community.',
       date: 'September 5, 2026' , author: 'Mr. Louise Andrei Revil', isActive: true},
    { title: 'End of Semester Party', body: 'Celebrate the end of the semester with a party on September 20. Enjoy music, food, and fun activities with your fellow students.',
       date: 'September 10, 2026' , author: 'Mrs. Jane Smith', isActive: false},
  ]

}

