using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Repositories.Abstractions;
using Domain.Models;

namespace Infrastructure.Repositories
{
    public class InMemoryCandidatesRepository : IRepository<Candidate>
    {
        private IList<Candidate> _candidates;

        public InMemoryCandidatesRepository()
        {
            _candidates = new List<Candidate>();
        }

        public IEnumerable<Candidate> GetAll()
        {
            return _candidates;
        }

        public Candidate Get(int id) =>
            _candidates.FirstOrDefault(v => v.Id.Equals(id));

        public void Add(Candidate entity)
        {
            var nextId = _candidates.Any() ? _candidates.Max(c => c.Id) + 1 : 0;
            entity.Id = nextId;
            _candidates.Add(entity);
        }

        public void Update(Candidate entity)
        {
            var entityToUpdate = _candidates.FirstOrDefault(c => c.Id.Equals(entity.Id));
            if (entityToUpdate is null)
                throw new ArgumentException("Candidate with provided Id has not been found.");

            entityToUpdate.Votes = entity.Votes;
        }
    }
}
