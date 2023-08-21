# follow the instruction in this page
https://tailwindcss.com/docs/guides/angular
yarn add --dev tailwindcss postcss autoprefixer


# fix style conflict between material and tailwind
add this in tailwind.config.js
---------------------------------------------------
corePlugins: {
    preflight: false,
},
