import { Component, OnInit } from '@angular/core';
import { YourLoginName } from '../model/your-login-name';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginName: YourLoginName;

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
