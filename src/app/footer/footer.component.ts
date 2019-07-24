import { Component, OnInit } from '@angular/core';
import { YourLoginName } from '../model/your-login-name';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  loginName: YourLoginName = null;

  constructor() { }

  ngOnInit() {

    this.loginName = {
      studentNumber: '991503676',
      loginUsername: 'mahmoudramzi',
      studentName: 'Mahmoud Ramzi',
      studentCampus: 'Davis',
      assignmentTitle: 'Assignment3'
    }
  }

}
