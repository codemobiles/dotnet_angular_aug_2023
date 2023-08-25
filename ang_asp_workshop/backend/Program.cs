using System.Reflection;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using backend.Database;
using backend.Installers;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// make sure call this because used in ProductController
builder.Services.AddAutoMapper(typeof(Program));

// Add all services into the installers folder 
// InstallerExtensions.cs extension adds InstallServiceInAssembly
builder.Services.InstallServiceInAssembly(builder.Configuration);

// Write log file
builder.Host.ConfigureLogging((hostingContext, builder) => { builder.AddFile("Logs/cmpos_api-{Date}.txt", LogLevel.Debug, null, false, null, null); });


// Option 2# to Auto Add Services Repository (2 methods)
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory()); // Call this before calling builder.Host.ConfigureContainer..
builder.Host.ConfigureContainer<ContainerBuilder>(builder =>
{
    builder.RegisterAssemblyTypes(Assembly.GetEntryAssembly())
    .Where(t => t.Name.EndsWith("Repository")) // Suffix Naming of AuthRepository, ProductRepository
    .AsImplementedInterfaces();
});

// Configure DB
// builder.Services.AddDbContext<DatabaseContext>(options =>
// options.UseSqlServer(builder.Configuration.GetConnectionString("ConnectionSQLServer")));


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    // app.UseSwaggerUI();

    // This will allow swagger to show two options (right side) of definition to view the api version.
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "CodeMobile API V1");
        c.SwaggerEndpoint("/swagger/v2/swagger.json", "CodeMobile API V2");
    });
}

app.UseStaticFiles();
app.UseCors("AllowAllOrigins");
app.UseHttpsRedirection();
app.UseAuthentication(); // jwt
app.UseAuthorization(); // Admin or Others
app.MapControllers();

app.Run();
