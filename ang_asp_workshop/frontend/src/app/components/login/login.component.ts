import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public rest: RestService, private router: Router) {}

  hide = true;
  error = null;

  onSubmit(value: User) {
    alert(JSON.stringify(value));
  }

  onClickRegister() {
    this.router.navigate(['/register']);
  }
}
