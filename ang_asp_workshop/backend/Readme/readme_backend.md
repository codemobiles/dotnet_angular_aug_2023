# new project (method 1)

dotnet new webapi -o <project_name> // for full (mvc) api
dotnet new web -o <project_name> // for minimal api
dotnet run

# run with selecting profile in backend/launchSettings.json

- dotnet run --launch-profile backend
- dotnet run --launch-profile http
- dotnet run --launch-profile https

# add required database handler packages

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
```

# Generate self-sign ssl

- https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-dev-certs
- dotnet dev-certs https --clean
- dotnet dev-certs https
- dotnet dev-certs https --trust

# install dotnet-ef

- dotnet tool install --global dotnet-ef
- dotnet tool update --global dotnet-ef
- dotnet tool uninstall --global dotnet-ef
- dotnet ef --version

# tool path

Linux/macOS ---> $HOME/.dotnet/tools
Windows ---> %USERPROFILE%\.dotnet\tools

# work on both window and mac

- dotnet ef dbcontext scaffold "Server=localhost,1433;user id=sa; password=Mflv[Mflv[; Database=demopos; TrustServerCertificate=true;" Microsoft.EntityFrameworkCore.SqlServer -o Models -c DatabaseContext --context-dir Database

- if localhost not work, let's try 127.0.0.1

# change authentication from hardcode to json

- Remove this code in DatabaseContext.cs

```cs
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=localhost,1433;user id=sa; password=Mflv[Mflv[; Database=demopos; Trust Server Certificate=true;");
```

- replace with "ConnectionStrings" in appsetting.\*\*\*\*.json

# change port for auto launch

- launchSettings.json
  "applicationUrl": "https://localhost:8082;http://localhost:8081",

# disable auto launch external url or change default launch url

- .vscode/launch.json
- ex: comment it

`
"serverReadyAction": {
"action": "openExternally",
"pattern": "\\bNow listening on:\\s+(https?://\\S+)",
"uriFormat": "%s/swagger"

            },

`

- comment this block to disable auto

# static file

- Program.cs + wwwroot
  app.UseStaticFiles();

- Example: https://localhost:8081/images/product_01.jpg

# kill all dotnet process

- killall -9 dotnet

# Enable ssl

---

- mac: sudo dotnet dev-certs https --trust
- windows: dotnet dev-certs https --trust
