using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wiki.Services.ServiceProviders
{
    public abstract class BaseProvider
    {
        public abstract string ProviderUrl { get; }
        public abstract string ProviderKey { get; }
    }
}
