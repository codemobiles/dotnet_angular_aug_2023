import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  @Input() isOpened?: boolean;
  pageName: string = '';
  version = environment.version;

  constructor(private router: Router, public rest: RestService) {
    // this.router.events
    //   .filter((event) => event instanceof NavigationStart)
    //   .pairwise()
    //   .subscribe((event: any) => {
    //     // alert(JSON.stringify(event[1].url));
    //     this.pageName = event[1].url;
    //   });
  }

  ngOnInit() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onClickSignout() {
    localStorage.removeItem(environment.token);
    this.router.navigate(['login']);
  }
}
