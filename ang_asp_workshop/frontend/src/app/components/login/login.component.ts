import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  bannerImage = 'assets/images/login_banner.jpg';
  constructor(public rest: RestService) {}

  onSubmit(value: User) {
    alert(JSON.stringify(value));
  }
}
