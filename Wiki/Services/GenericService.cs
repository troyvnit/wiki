using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Wiki.Services.ServiceProviders;

namespace Wiki.Services
{
    public interface IGenericService<T> where T : BaseProvider
    {
        Task<WeatherForecast> GetWeatherForecast(T provider, string query);
    }

    public class GenericService<T> : IGenericService<T> where T : BaseProvider
    {
        private HttpClient _httpClient = new HttpClient();

        public async Task<WeatherForecast> GetWeatherForecast(T provider, string query)
        {
            var result = await _httpClient.GetStringAsync($"{provider.ProviderUrl}/weather?q={query}&appid={provider.ProviderKey}");
            return JsonConvert.DeserializeObject<WeatherForecast>(result);
        }
    }
}
