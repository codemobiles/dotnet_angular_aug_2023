sudo npm i -g pm2

# basic 1
pm2 start server.js
pm2 start server.js --name custom_name
pm2 status
pm2 start 0
pm2 stop 0
pm2 restart 0

# basic 2
pm2 start/stop/restart all
pm2 log 0 
pm2 start --watch
pm2 monit
pm2 show 0
pm2 delete 

#cluster
 pm2 start server.js -i 5
 pm2 scale server +2
 pm2 scale server 2

# auto startup when boot
pm2 startup
systemctl stop pm2.service

# save and restore 
pm2 save
pm2 resurrect


yarn global add serve
serve -s . -p 80

#nginx cli
nginx // start
nginx -s stop // stop
nginx -t // verify sytax or check config location