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
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseCors("AllowAllOrigins");
app.UseHttpsRedirection();
app.UseAuthentication(); // jwt
app.UseAuthorization(); // Admin or Others
app.MapControllers();

app.Run();
