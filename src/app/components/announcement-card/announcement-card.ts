import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement-card',
  imports: [],
  templateUrl: './announcement-card.html',
  styleUrl: './announcement-card.css',
})
export class AnnouncementCard {
  announcementTitle1: string = 'Enrollment Schedule';
  announcementBody1: string = 'Enrollment begins next Monday. Please prepare all required documents.';
  announcementDate1: string = 'August 1, 2026';

  announcementTitle2: string = 'Canteen Menu Update';
  announcementBody2: string = 'The canteen menu has been updated for the new semester. Check out the latest options available.';
  announcementDate2: string = 'August 4, 2026';

  announcementTitle3: string = 'Valorant Tournament';
  announcementBody3: string = 'The Valorant tournament will be held next month. Sign up now to participate and showcase your skills!';
  announcementDate3: string = 'August 10, 2026';

  announcementTitle4: string = 'Library Renovation';
  announcementBody4: string = 'The library will be closed for renovation from August 15 to September 15. Please plan your visits accordingly.'  
  announcementDate4: string = 'August 12, 2026';

  announcementTitle5: string = 'New Course Offering';
  announcementBody5: string = 'We are excited to announce a new course offering in Artificial Intelligence starting this semester. Enroll now to be part of this innovative program.';
  announcementDate5: string = 'August 20, 2026';

  announcementTitle6: string = 'Sports Day';
  announcementBody6: string = 'Join us for the annual Sports Day event on September 5. Participate in various sports activities and enjoy a day of fun and fitness!';
  announcementDate6: string = 'August 25, 2026';

  announcementTitle7: string = 'Guest Lecture Series';
  announcementBody7: string = 'We are hosting a series of guest lectures from industry experts throughout the semester. Stay tuned for the schedule and topics.';
  announcementDate7: string = 'August 30, 2026';

  announcementTitle8: string = 'Community Service Project';
  announcementBody8: string = 'Get involved in our community service project this semester. Opportunities are available for volunteering and making a positive impact.';
  announcementDate8: string = 'September 5, 2026';

  announcementTitle9: string = 'Tech Fair';
  announcementBody9: string = 'The annual Tech Fair will be held on September 15. Explore the latest technological innovations and projects from our students.'
  announcementDate9: string = 'September 10, 2026';

  announcementTitle10: string = 'End of Semester Celebration';
  announcementBody10: string = 'Join us for the end of semester celebration on September 30. Celebrate the achievements of our students and faculty with fun activities and performances.';
  announcementDate10: string = 'September 25, 2026';
  
}

