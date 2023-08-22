# Youtube

https://www.youtube.com/watch?v=UQbKz0ox3K8

- install docker
- run db container

# db for intel

- https://hub.docker.com/_/microsoft-mssql-server (runnable in window and mac intel only)
  docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Mflv[Mflv[" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest

# db for apple sillicon

- https://hub.docker.com/_/microsoft-azure-sql-edge (runnable in m1/m2 apple)
  docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=Mflv[Mflv[' -p 1433:1433 --name azuresqledge -d mcr.microsoft.com/azure-sql-edge

# install ms-mssql vscode extension and define connection

- in some case, localhost not work - let's use 127.0.0.1 instead

```
code --install-extension ms-mssql.mssql
username: sa
password: Mflv[Mflv[
```

# import master data by ms-sql vscode extension

use ms /z_SQL/database.sql

# dotnet run

- dotnet run
- dotnet watch run

# open swagger ()

https://localhost:8081/swagger/index.html
http://localhost:8082/swagger/index.html

# Username and password

```
username: admin
password: 12341234
```

# re-new project

---

- mkdir cmposDotnet
- cd cmposDotnet
- dotnet new webapi -o backend
- code backend
- dotnet run
- update dev port: edit launchSettings.json
  "applicationUrl": "https://localhost:8081;http://localhost:8082",

- run and test again: localhost:8081/swagger
- create launch vscode for debug: by create launch.json - when vscode asks to build c#
- create lauch vscode with selecting run-debug icon and click the create a launchjson file link and select .NET
- .vscode/launch.json
- ex:

```
"serverReadyAction": {
"action": "openExternally",
"pattern": "\\bNow listening on:\\s+(https?://\\S+)",
"uriFormat": "%s/swagger"
},

```

dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add package Microsoft.AspNetCore.Mvc.Versioning
dotnet add package Microsoft.AspNetCore.Mvc.Versioning.ApiExplorer
dotnet add package Serilog.Extensions.Logging.File
dotnet add package Autofac.Extensions.DependencyInjection
dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection
dotnet add package Microsoft.AspNetCore.OpenApi
dotnet add package Swashbuckle.AspNetCore

- create database with vscode extension: using dummy data
- dotnet ef dbcontext scaffold "Server=localhost,1433;user id=sa; password=Mflv[Mflv[; Database=demopos; TrustServer Certificate=true;" Microsoft.EntityFrameworkCore.SqlServer -o Models -c DatabaseContext --context-dir Database
- (provider: SSL Provider, error: 0 - The certificate chain was issued by an authority that is not trusted.)
- Update model class generated from dotnet-ef
- Create DTO (viewModel) to hide all available fields binded with DB [ implement data validation with using System.ComponentModel.DataAnnotations;]
  - [Required]
  - [MinLength(8, ErrorMessage = "passwords must have at least 8 characters")]
- add bundle static image
  - add wwwroot folder
  - Add app.UseStaticFiles(); in Program.cs
  - path ex: https://localhost:8081/images/product_09.jpg
- setup auto mapping: read readme_mapper.md
- implement auth controller
- setup Services (Repository)
  - creating a service requriement
    - create class and interface (No interface will cause runtime error when injects into Controller)
  - builder.Services.AddTransient<ICounterService, CounterService>(); //
  - builder.Services.AddSingleton<ICounterService, CounterService>();
  - builder.Services.AddScoped<ICounterService, CounterService>();
