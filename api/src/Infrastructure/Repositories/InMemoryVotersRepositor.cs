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

        public Voter Get(int id) =>
            _voters.FirstOrDefault(v => v.Id.Equals(id));

        public void Add(Voter entity)
        {
            var nextId = _voters.Any() ? _voters.Max(c => c.Id) + 1 : 0;
            entity.Id = nextId;
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
