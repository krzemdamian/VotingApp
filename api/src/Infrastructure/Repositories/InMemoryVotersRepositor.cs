using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Repositories.Abstractions;
using Domain.Models;

namespace Infrastructure.Repositories
{
    public class InMemoryVotersRepository : IRepository<Voter>
    {
        private IList<Voter> _voters;

        public InMemoryVotersRepository()
        {
            _voters = new List<Voter>();
        }

        public IEnumerable<Voter> GetAll()
        {
            return _voters;
        }

        public void Add(Voter entity)
        {
            _voters.Add(entity);
        }

        public void Update(Voter entity)
        {
            var entityToUpdate = _voters.FirstOrDefault(c => c.Id.Equals(entity.Id));
            if (entityToUpdate is null)
                throw new ArgumentException("Candidate with provided Id has not been found.");

            entityToUpdate.HasVoted = entity.HasVoted;
        }
    }
}
