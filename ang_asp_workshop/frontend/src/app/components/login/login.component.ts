import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public rest: RestService, private router: Router) {}

  hide = true;
  error = null;

  async onSubmit(value: User) {
    let response = await lastValueFrom(this.rest.login(value));

    if (response.token) {
      this.error = null;
      localStorage.setItem(environment.token, response.token);
      this.router.navigate(['stock']);
    } else {
      this.error = response.message;
      localStorage.removeItem(environment.token);
    }
  }

  onClickRegister() {
    this.router.navigate(['/register']);
  }
}
