ng build --configuration production 
ng build --configuration production --base-href /demo --deploy-url demo/ --index=src/prod/index.html

# WARNING in budgets, maximum exceeded for initial
angular.json
    "budgets": [
       {
          "type": "initial",
          "maximumWarning": "2mb",
          "maximumError": "5mb"
       }
    ]

# environment (angular 15)
- create environment fodler and fileReplacements
- update angular.json, add this in "configurations": { "production": {
```
    "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ]
```

nginx (start and stop)
nginx
nginx -s stop

#mongodb on macOS
sudo /usr/bin/ruby -e "$(curl -fsSL https:// raw.githubusercontent.com/Homebrew/install/master/install)"
brew install nginx

open /usr/local/Cellar/ nginx/1.13.9/html
open /usr/local/etc/nginx/nginx.conf

# Fixing Fallingback
#no sub-folder        
location / {
  try_files $uri $uri/ /index.html;
}

# have sub-folder named "demo"        
location /demo {
    try_files $uri $uri/ /demo/index.html; 
}        

npm i -g tsc
tsc 

#pm2
npm i -g pm2
pm2 start server.js
pm2 status
pm2 stop <app-name>
pm2 start <app-name>
pm2 restart <app-name>
pm2 stop all
pm2 start all
pm2 log
pm2 log <app-name>
pm2 delete <app-name>

