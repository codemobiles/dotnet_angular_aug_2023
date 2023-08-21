# install angular cli
 - install nodejs tls (18.x)
 - install ndoejs on mac (using nvm)
 - angular cli on mac (use homebrew)
    + https://brew.sh/index_th
    + brew install angular-cli
 - angular cli on windows
    # remove old version
    + npm uninstall -g angular-cli
    + npm cache clean
    # install new version
    + npm install -g @angular/cli
- new project
    + ng new <project-name>
    + yes to use routing and use scss

#vscode extension

code --install-extension vscode-icons-team.vscode-icons
code --install-extension angular.ng-template
code --install-extension esbenp.prettier-vscode
code --install-extension humao.rest-client
code --install-extension christian-kohler.path-intellisense
code --install-extension zignd.html-css-class-completion
code --install-extension formulahendry.auto-close-tag
code --install-extension infinity1207.angular2-switcher
code --install-extension mikael.angular-beastcode
code --install-extension bradlc.vscode-tailwindcss

- create remaining components
  ng g c components/header --skip-tests
  ng g c components/menu --skip-tests
  ng g c components/login --skip-tests
  ng g c components/register --skip-tests
  ng g c components/stock --skip-tests
  ng g c components/stockEdit --skip-tests
  ng g c components/stockCreate --skip-tests
  ng g c components/report --skip-tests
  ng g c components/shop --skip-tests
  ng g c components/payment --skip-tests
  ng g c components/transaction --skip-tests
  ng g c components/transactionDetail --skip-tests
  ng g c components/confirmDialog --skip-tests
  ng g c components/successDialog --skip-tests

- create services
  ng g s services/rest --skip-tests
  ng g guard services/authen --skip-tests

- create material-ui module
ng g m material --module=app


#angular
npm i rxjs-compat randomcolor chart.js ng2-charts randomcolor jose moment dayjs --force
npm i --save-dev @types/randomcolor tailwindcss @tailwindcss/line-clamp
npm install -D


#nodejs
npm i moment express body-parser fs-extra formidable cors bcryptjs jsonwebtoken mongoose mongoose-sequence onesignal-node

npm global
npm i -g pm2 nodemon serve

pm2 status/ start / stop / delete / log
pm2 start server --watch

#update cli
sudo  npm install -g @angular/cli@latest


# Setup Angular Materail

1.  ng add @angular/material
2.  npm i bootstrap
3.  revise "angular.json"
    "styles": [
              "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
              "src/styles.scss",
        ===>      "./node_modules/bootstrap/scss/bootstrap.scss"
            ],
            "scripts": []


#nodeJS
npm i moment express body-parser fs-extra formidable cors bcryptjs jsonwebtoken mongoose mongoose-sequence onesignal-node


http://localhost:8080/api/v2/login

mongorestore -d lekpos /Users/chaiyasit/Documents/nglek-master/mypos/backend/dummy_db_cmpos
https://travistidwell.com/jsencrypt/demo/
yarn add rxjs-compat randomcolor chart.js  ng2-charts


#troubleshooting
touch ~/.bash_profile

mongorestore -d cmpos <folder_import_database>
https://travistidwell.com/jsencrypt/demo/

mongod --dbpath ""

nodemon -x 'node server.js || touch server.js'
pm2 start server.js --watch
pm2 monit
