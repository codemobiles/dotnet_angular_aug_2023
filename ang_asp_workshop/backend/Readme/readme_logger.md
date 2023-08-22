# There is 2 logging engines

1. Default system logging shown in the log console / terminal
2. 3rd-party log file depend on "Serilog.Extensions.Logging.File"

# 1st Default System Logging

---

- Filter the log level at appsettings.json and appsettings.Development.json
- Hide all logs with

```
"Logging": {
    "LogLevel": {
      "Default": "None",
      "System": "None",
      "Microsoft": "None"
    }
  },
```

- Call this method : \_logger.LogInformation("Calling GetProducts");
- Will show log in the console if the "Default": "Information",

# 2nd Using "Serilog.Extensions.Logging.File"

- This will write a log file
- Set the log-file name, path and level at (Program.cs)

```
  builder.Host.ConfigureLogging((hostingContext, builder) =>{
    builder.AddFile("Logs/cmpos_api-{Date}.txt",
    LogLevel.Debug, <==== (Log level is set here)
    null, false, null, null);});
```

# Log Level

- Verbose > Debug > Info > Error
- If select the Info level, will see only Info and Error log

# appsettings.Development.json

```
"Logging": {
"LogLevel": {
"Default": "Debug",
"System": "None",
"Microsoft": "None"
}
}
```

# .vscode/launch.json

"justMyCode": true, // You can change to false if you wanna debug 3rd-party code
"logging": {
"moduleLoad": false
},
