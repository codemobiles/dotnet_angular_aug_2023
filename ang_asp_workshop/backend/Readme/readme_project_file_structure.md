# Program.cs

- The entry point or bootstrap loads all services, middleware, static files (wwwroot) and run app

# Controller folder

- Define all api routes

# Database and Model folder

- Generated from dotnet-ef to provide api to access database

# appsetting.Development.json and appsetting.json

- Define environment variable for app configuration - work like .env of other platform
- read ex: configuration.GetConnectionString("ConnectionSQLServer")
- configuration got from DI like this: public void InstallServices(IConfiguration configuration)

# Services

- define singleton variables and functions that can across the controllers and services
- Transient objects are always different; a new instance is provided to every controller and every service.
- Scoped objects are the same within a request, but different across different requests.
- Singleton objects are the same for every object and every request.
- setup Services (Repository)
  - builder.Services.AddTransient<ICounterService, CounterService>();  // 
  - builder.Services.AddSingleton<ICounterService, CounterService>();
  - builder.Services.AddScoped<ICounterService, CounterService>();

# installer

- Advanced service installer used to seperate services into individual file

# Properties and launchSetting.json

- define launch setting such as app running port / swagger url
- ex: "launchUrl": "swagger/index.html",
  ex: "applicationUrl": "https://localhost:8081;http://localhost:8082",
