# Add jwt pacakge

dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer

# Add JwtInstaller

add JWTInstaller.cs

# Enable Authentication in Program.cs

app.UseAuthentication(); // jwt

# Configure JwtSettings in appsettings.json (30 days)

"JwtSettings": {
"Key": "CodeMobiles-DotNetCore", <==== secret key
"Issuer": "CodeMobiles Ltd",
"Audience": "http://codemobiles.com",
"Expire": "30"
},

# set swagger authorize button

- Add this code in SwaggerInstaller.cs

```cs
// Set button authorize
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.Http,
                    Scheme = "bearer",
                });
```

# mac curl

curl -X 'GET' \
 'https://localhost:8081/api/v1/Product' \
 -H 'accept: text/plain' \
 -H 'Authorization: Bearer <your_jwt_token>'

# win curl (sometime not work - let's use the vscode rest client extension instead)

curl -X GET -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGb3IgVGVzdGluZyIsImlkIjoiMCIsInVzZXJuYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJOb3JtYWwiLCJleHAiOjE2ODc1MTk1NTUsImlzcyI6IkNvZGVNb2JpbGVzIEx0ZCIsImF1ZCI6Imh0dHA6Ly9jb2RlbW9iaWxlcy5jb20ifQ.GMq4fK6ehUmR6jKtAhYm43vouNF49JoM0WTfU4zL4fI' https://localhost:8081/api/v1/Product
