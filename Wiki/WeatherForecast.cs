using Newtonsoft.Json;
using System;

namespace Wiki
{
    public class WeatherForecast
    {
        public string Name { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
        public Weather[] Weather { get; set; }
        [JsonProperty(propertyName: "main")]
        public Temperature Temperature { get; set; }
        public Wind Wind { get; set; }
    }

    public class Weather {
        public string Main { get; set; }
        public string Description { get; set; }
    }

    public class Temperature
    {
        public decimal Temp { get; set; }
        [JsonProperty(propertyName: "temp_min")]
        public decimal MinTemp { get; set; }
        [JsonProperty(propertyName: "temp_max")]
        public decimal MaxTemp { get; set; }
    }

    public class Wind
    {
        public decimal Speed { get; set; }
        public decimal Deg { get; set; }
    }
}
