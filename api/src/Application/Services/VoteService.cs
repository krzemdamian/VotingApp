using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Repositories.Abstractions;
using Application.Services.Abstractions;
using Domain.Models;

namespace Application.Services
{
    public class VoteService : IVoteService
    {
        private readonly IRepository<Voter> _votersRepository;
        private readonly IRepository<Candidate> _candidatesRepository;

        public VoteService(IRepository<Voter> votersRepository, IRepository<Candidate> candidatesRepository)
        {
            _votersRepository = votersRepository;
            _candidatesRepository = candidatesRepository;
        }

        public void Vote(int voterId, int candidateId)
        {
            var voter = _votersRepository.Get(voterId);
            var candidate = _candidatesRepository.Get(candidateId);

            voter.VoteFor(candidate);
        }
    }
}
