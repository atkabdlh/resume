import { Component } from '@angular/core';
import Data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';

  fullname: string = Data.fullname;
  phoneNo: string = Data.phoneNo;
  email: string = Data.email;
  websites: string[] = Data.websites;
  statements: string[] = Data.personalStatement;

  skills: object[] = Data.skillsList;
  workHistory: object[] = Data.workHistory;
  educations: object[] = Data.education;

  subTitle: string[] = ['Skills', 'Work History', 'Education'];

  // tslint:disable-next-line:typedef
  printPdf() {
    const link = document.createElement('a');
    link.download = 'resume.pdf';
    link.href = 'assets/resume.pdf';
    link.click();
  }

  // tslint:disable-next-line:typedef
  printCoverLetter() {
    const link = document.createElement('a');
    link.download = 'cover_letter.pdf';
    link.href = 'assets/cover_letter.pdf';
    link.click();
  }
}
