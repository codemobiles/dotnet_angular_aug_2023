# tutorial

- https://blog.christian-schou.dk/how-to-use-api-versioning-in-net-core-web-api/

# Add ControllerInstaller.cs

- This will fix error "Internal Server Error /swagger/v(x)/swagger.json"
-

# resutl of this configuration will allow to select api version in swagger

- Add version attribute [ApiVersion("1.0")] to group versioned controlller

```
[ApiVersion("1.0")]
[ApiController]
[Route("api/v{version:apiVersion}/[controller]")]
```

# Add Versioning Installer and packages

- dotnet add package Microsoft.AspNetCore.Mvc.Versioning
- dotnet add package Microsoft.AspNetCore.Mvc.Versioning.ApiExplorer
- add VersioningInstaller.cs

# Add SwaggerInstaller

- This installer will make controller able to show summary and comment in swagger
  var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
  var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
  c.IncludeXmlComments(xmlPath);

- Add show jwt authorization in swagger ui form

# Add the XML below in .csproj file (otherwise will cause error exception in SwaggerInstaller when load xml file)

<!-- BEGIN: XML comments for Swashbuckle -->

<GenerateDocumentationFile>true</GenerateDocumentationFile>
<NoWarn>$(NoWarn);1591</NoWarn>

<!-- END: XML comments for Swashbuckle -->
