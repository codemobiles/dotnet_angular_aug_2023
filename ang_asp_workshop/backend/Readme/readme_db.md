https://github.com/codemobiles/cm-prepare-dev-tools-full-stack/blob/main/dotnet_ef_setup.txt

- setup ms-sql docker
- intel:

  - https://hub.docker.com/_/microsoft-mssql-server
  - docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Mflv[Mflv[" -p 1433:1433 --name mssql-server -d mcr.microsoft.com/mssql/server:2022-latest

- macM1

  - https://hub.docker.com/_/microsoft-azure-sql-edge
  - docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=Mflv[Mflv[' -p 1433:1433 --name mssql-server -d mcr.microsoft.com/azure-sql-edge

- Using `mssql extension`
- Restore Database by copy script /backend/z_SQL/database.sql
- default username: admin, password: 1234134

# shell database

- https://www.sqlshack.com/working-sql-server-command-line-sqlcmd/
- docker exec -it mssql-server /opt/mssql-tools/bin/sqlcmd -S 127.0.0.1 -U sa -P 'Mflv[Mflv['
- /opt/mssql-tools/bin/sqlcmd -S database -U sa -P 'Mflv[Mflv['

  ```
  1> select name from sys.databases
  2> go

  ```

```

- https://www.sqlshack.com/working-sql-server-command-line-sqlcmd/

# install dotnet-ef

dotnet tool install --global dotnet-ef
dotnet tool update --global dotnet-ef
dotnet tool uninstall --global dotnet-ef
dotnet-ef --version

# check version
dotnet list package
dotnet list package --outdated

# tool path

Linux/macOS ---> $HOME/.dotnet/tools
Windows ---> %USERPROFILE%\.dotnet\tools

# work on both window and mac

dotnet ef dbcontext scaffold "Server=localhost,1433;user id=sa; password=Mflv[Mflv[; Database=demopos; TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -o Models -c DatabaseContext --context-dir Database

# nuget command lines

- dotnet command-line

# required packages to add into the <project>.csproj

- https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Design/

- Microsoft.EntityFrameworkCore.Design | dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.10
- Microsoft.EntityFrameworkCore.SqlServer | dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 6.0.10

- run again
  dotnet ef dbcontext scaffold "Server=localhost,1433;user id=sa; password=Mflv[Mflv[; Database=istock; TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -o Entities -c DatabaseContext --context-dir Data

# check dotnet sdk folder

- which/where dotnet
- dotnet --list-sdks
- defaultis : /usr/local/share/dotnet/sdk

# uninstall dotnet sdk

- control panel -> remove or add program
- find .NET Framework or Core

# warning

To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.

optionsBuilder.UseSqlServer("Server=localhost,1433;user id=sa; password=Mflv[Mflv[; Database=istock;");

# Program.cs

using Microsoft.EntityFrameworkCore;
builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("ConnectionSQLServer")));

# Load all Repository

builder.Host.ConfigureContainer<ContainerBuilder>(builder =>
{
builder.RegisterAssemblyTypes(Assembly.GetEntryAssembly())
.Where(t => t.Name.EndsWith("Repository"))
.AsImplementedInterfaces();
});
```
