import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'src/app/models/user.model';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide = true;

  constructor(
    private router: Router,
    public rest: RestService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  async onSubmit(value: User) {
    alert(JSON.stringify(value));
  }

  onClickCancel() {
    this.router.navigate(['/login']);
    // this.location.back();
  }
}
