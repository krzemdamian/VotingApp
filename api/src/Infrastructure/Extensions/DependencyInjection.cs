using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Repositories.Abstractions;
using Domain.Models;
using Infrastructure.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Extensions
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddSingleton<IRepository<Candidate>, InMemoryCandidatesRepository>();
            services.AddSingleton<IRepository<Voter>, InMemoryVotersRepository>();

            return services;
        }
    }
}
