# material for angular16+

- ng new <project>
- y to add routing module
- use scss
- cd project folder and
   - ng add @angular/material
     + use global angular materail typograhy style,
     + y to add animation module (to auto add BrowserAnimationsModule in app.module.ts)

- create material module

   + ng g m material --module=app
   + add common material modules
   + import in app.module.ts
   + example module:  material/material.module.ts -
   + copy master material.module.ts from : https://gist.github.com/codemobiles/9de607433b4b4eaaef866843d2f3a9d5


- run "ng serve" otherwise the animation and theme will not work.


- enable material and bootstrap css auto-completion
   - code --install-extension zignd.html-css-class-completion
   - cmd+shift+p > cache css class definition

- Test add components
  - https://material.angular.io/components/button/overview
  - https://material.angular.io/components/categories


# material icon
- https://fonts.google.com/icons
- https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
