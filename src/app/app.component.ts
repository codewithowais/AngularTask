import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interfaces/User';
import { AuthService } from './Services/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loggedInUser: IUser = {} as IUser;
  public isLoggedIn = false;
  title = 'angular-task';

  constructor(
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.auth.appLoggedInUser.subscribe(
      user => {
        this.loggedInUser = user;
        this.isLoggedIn = !!user.name;
      }
    );
  }

  logout(): void {
    this.auth.logout();
  }

}
