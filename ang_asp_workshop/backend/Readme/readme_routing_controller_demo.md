# ToList vs ToListAsync

- Add "using Microsoft.EntityFrameworkCore;"" to use ToListAsync

# Example

```cs
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.v1
{
[ApiVersion("1.0")]
[ApiController]
[Route("api/v{version:apiVersion}/[controller]")]
public class SimpleController : ControllerBase
{
private readonly ICounterService \_counterService;

        public SimpleController(ICounterService counterService)
        {
            this._counterService = counterService;
        }

        [HttpGet()]
        public ActionResult<string> DefaultMethod()
        {
            return Ok("CodeMobiles");
        }

        [HttpGet("method1")]
        public ActionResult<string> Method1()
        {
            return Ok("CodeMobiles");
        }

        [HttpGet("method2")]
        public ActionResult<IEnumerable<string>> Method2()
        {
            return Ok(new string[] { "Angular", "React", "Vue" });
        }

        [HttpGet("method3")]
        public ActionResult<IEnumerable<int>> Method3()
        {
            return Ok(new int[] { 1, 2, 3, 4 });
        }

        [HttpGet("method4/${username}/${password}")]
        public ActionResult<Object> Method4(string username, string password)
        {
            return Ok(new { username = username, password = password });
        }

        [HttpGet("method5/${username}/${password}")]
        public ActionResult<Object> Method5(string username, string password, [FromQuery] string level)
        {
            return Ok(new { username = username, password = password, level = level });
        }

        [HttpGet("getCounter")]
        public ActionResult<int> GetCounter()
        {

            // Add this in Programs.
            // builder.Services.AddTransient<ICounterService, CounterService>();
            // builder.Services.AddSingleton<ICounterService, CounterService>();
            // builder.Services.AddScoped<ICounterService, CounterService>();

            var counterObj = (CounterService)_counterService;
            counterObj.counter++;
            return Ok(counterObj.counter);
        }

    }

}
```
