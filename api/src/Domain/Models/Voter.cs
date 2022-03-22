using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Voter
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool HasVoted { get; set; }

        public void VoteFor(Candidate candidate)
        {
            if (this.HasVoted)
                throw new InvalidOperationException($"Voter {this.Name} has already voted.");

            candidate.Votes++;
            this.HasVoted = true;
        }
    }
}
