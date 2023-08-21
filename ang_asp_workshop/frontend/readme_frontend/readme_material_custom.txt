- follow the steps of readme_material_setup.txt
- revise angular.json
    "styles": [
        "src/theme.scss",
        "src/styles.scss",
- create theme.scss

# theme.scss (for global theme)
-----------------------------------------------------------------
@use "@angular/material" as mat;
@include mat.core();
$my-primary: mat.define-palette(mat.$red-palette, 700);
$my-accent: mat.define-palette(mat.$purple-palette, A400);
$my-warn: mat.define-palette(mat.$red-palette, 800);
$my-theme: mat.define-light-theme(
  (
    color: (
      primary: $my-primary,
      accent: $my-accent,
      warn: $my-warn,
    ),
    typography: mat.define-typography-config(),
    density: 0,
  )
);

@include mat.all-component-themes($my-theme);
-----------------------------------------------------------------


- revise stock.component.scss
# stock.component.scss (for specific component)
-----------------------------------------------------------------
@use "@angular/material" as mat;
.edit-btn {
  color: white !important;
  background-color: mat.get-color-from-palette(
    mat.define-palette(mat.$deep-purple-palette),
    400
  ) !important;
}
-----------------------------------------------------------------

# custom global ui in styles.scss

- use chrome to inspect class style and override in styles.scss like example below:

```
.mat-mdc-outlined-button {
  background-color: rgb(255, 235, 235) !important;
}
```

# custom material icon
- https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/


# colors 
- https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors