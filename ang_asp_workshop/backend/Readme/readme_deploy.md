# docker

docker build -t cmapi .  
docker run -d --name test -p 8081:8081 cmapi
docker network ls
docker inspect bridge (find using-container)

# udpate appsettings.json (database server connection url)

from:
"ConnectionSQLServer": "Server=localhost,1433;...."

to:
"ConnectionSQLServer": "Server=<contianer_ip>,1433;...."
"ConnectionSQLServer": "Server=<docker_service>,1433;...."

# how to ping across containers

```
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id
docker exec --user="root" -it <container_name> /bin/bash
apt-get update -y
apt-get install -y iputils-ping
```

# shell

docker exec -it test bash
cat appsettings.json

# deploy in production

## https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/?view=aspnetcore-6.0

# run this command to generate production build files

# UseAppHost=true : to generate exe file - you start the app from the exe file direct

# UseAppHost=false : to generate dll file - you must start via "dotnet <project.dll>"

- dotnet publish -c Release -o ./publish /p:UseAppHost=true/false
- ./publish/backend (run in standalone mode)
- dotnet ./publish/backend.dll (run in dotnet environment)

# set running port in production (mac)

- export ASPNETCORE_URLS=http://+:8081
- echo $ASPNETCORE_URLS

# set running port in production (win)

- set ASPNETCORE_URLS=http://+:8081
- echo %ASPNETCORE_URLS%

# run the execution file

publish/backend
