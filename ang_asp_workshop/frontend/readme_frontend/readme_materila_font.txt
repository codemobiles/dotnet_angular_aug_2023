- setup custom material theme  (readme_material_custom.txrt)
- copy font family from https://fonts.google.com/,  copy font link and paste in index.html (head)
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik+Microbe&family=Sriracha&display=swap"
      rel="stylesheet"
/>


- add this in theme.scss

--------------
$typography-config: mat.define-typography-config(
  $font-family: '"Chakra Petch", sans-serif',
  $headline-1:
    mat.define-typography-level(112px, 112px, 300, $letter-spacing: -0.05em),
  $headline-2:
    mat.define-typography-level(56px, 56px, 400, $letter-spacing: -0.02em),
  $headline-3:
    mat.define-typography-level(45px, 48px, 400, $letter-spacing: -0.005em),
  $headline-4: mat.define-typography-level(34px, 40px, 400),
  $headline-5: mat.define-typography-level(24px, 32px, 400),
  $headline-6: mat.define-typography-level(20px, 32px, 400),
  $subtitle-1: mat.define-typography-level(16px, 28px, 400),
  $body-1: mat.define-typography-level(14px, 20px, 400),
  $body-2: mat.define-typography-level(14px, 20px, 400),
  $subtitle-2: mat.define-typography-level(16px, 28px, 400),
  $caption: mat.define-typography-level(12px, 20px, 400),
  $button: mat.define-typography-level(14px, 14px, 500),
);
--------------

