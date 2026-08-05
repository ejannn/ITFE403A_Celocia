import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {

StudentFirstName: string = 'Niel Jhon';
StudentMiddleName: string = 'Evardo';
StudentLastName: string = 'Celocia';
StudentNumber: string = '2023-00000';
Course: string = 'BSIT';
YearLevel: string = '4th Year';
Section: string = 'Valorant';
Nickname: string = 'pako';
Grade: number = 2.5;

get status(): string {
    return (this.Grade >= 1.0 && this.Grade <= 3.0) ? 'Pass' : 'Fail';
  }


}



