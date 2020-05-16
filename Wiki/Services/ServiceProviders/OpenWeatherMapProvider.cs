using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wiki.Services.ServiceProviders
{
    public class OpenWeatherMapProvider : BaseProvider
    {
        public override string ProviderUrl => "https://api.openweathermap.org/data/2.5";

        public override string ProviderKey => "2655bd9cd38d54025d6e51e3a1085058";
    }
}
