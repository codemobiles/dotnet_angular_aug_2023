- youtube: https://www.youtube.com/watch?v=J6QZ0u0cbYU
- example: https://github.com/codemobiles/angularMaterialDrawer
- setup material modules first : readme_material_setup.txt
- copy ts, html, css from https://material.angular.io/components/sidenav/examples#sidenav-autosize (Toggle sidenav)
- copy into app.component.ts
- Example
--------------------------------------
<mat-drawer-container class="example-container" autosize>
  <mat-drawer #drawer class="example-sidenav" mode="side">
    <p>Auto-resizing sidenav</p>
    <p *ngIf="showFiller">Lorem, ipsum dolor sit amet consectetur.</p>
    <button (click)="showFiller = !showFiller" mat-raised-button>
      Toggle extra text
    </button>
    <=========================== Add Menu (mat-nav-list)
  </mat-drawer>

  <div class="example-sidenav-content">
    <=========================== Add Header (mat-toolbar)
    <button type="button" mat-button (click)="drawer.toggle()">
      Toggle sidenav
    </button>
  </div>

</mat-drawer-container>
--------------------------------------

- copy toolbar: https://angularmaterial.dev/components/toolbar/overview#toolbar-overview
Example:

<mat-toolbar>
   <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button>
  <span>My App</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
   <mat-icon>share</mat-icon>
 </button>
</mat-toolbar>


- update css for drawer
----------------------------
.example-container {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
}

----------------------------
.example-sidenav-content {
  display: flex;
  height: 100%;
  align-items: start; <===== change from center to start
  justify-content: center;
}
