using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Wiki.Services;
using Wiki.Services.ServiceProviders;

namespace Wiki.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IGenericService<OpenWeatherMapProvider> _genericService;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IGenericService<OpenWeatherMapProvider> genericService)
        {
            _logger = logger;
            _genericService = genericService;
        }

        [HttpGet]
        public async Task<WeatherForecast> GetAsync(string query)
        {
            var weatherForecast = await _genericService.GetWeatherForecast(new OpenWeatherMapProvider(), query);
            return weatherForecast;
        }
    }
}
