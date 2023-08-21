import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public rest: RestService) {}

  hide = true;
  error = null;

  onSubmit(value: User) {
    alert(JSON.stringify(value));
  }

  onClickRegister() {}
}
