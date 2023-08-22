# Define config in appsettings.json

```
  "JwtSettings": {
    "Key": "CodeMobiles-DotNetCore",
    "Issuer": "CodeMobiles Ltd",
    "Audience": "http://codemobiles.com",
    "Expire": "30"
  },
```

# Bind

```
var jwtSettings = new JwtSettings();
// Get jwtSettings from appsettings.json and bind to JwtSettings class
configuration.Bind(nameof(jwtSettings), jwtSettings);
```
