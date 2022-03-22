using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;

namespace Application.Services.Abstractions
{
    public interface IVoteService
    {
        void Vote(int voterId, int candidateId);
    }
}
