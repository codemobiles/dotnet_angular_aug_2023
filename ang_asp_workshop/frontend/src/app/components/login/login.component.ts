import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  bannerImage = 'assets/images/login_banner.jpg';

  onSubmit(value: User) {
    alert(JSON.stringify(value));
  }
}
