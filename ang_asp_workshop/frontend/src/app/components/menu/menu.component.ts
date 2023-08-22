import { RestService } from 'src/app/services/rest.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() isOpened?: boolean;
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(public rest: RestService) {}

  ngOnInit() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
