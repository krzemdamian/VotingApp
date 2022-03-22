using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Api.Mappers.Abstractions;
using Api.V1.Models;
using Domain.Models;

namespace Api.Mappers
{
    public class VoterMapper : ITwoWayMapper<Voter, VoterDto>
    {
        public VoterDto ToDto(Voter entity)
        {
            var dto = new VoterDto { Id = entity.Id, Name = entity.Name, HasVoted = entity.HasVoted };
            return dto;
        }

        public Voter ToEntity(VoterDto dto)
        {
            var entity = new Voter { Id = dto.Id, Name = dto.Name, HasVoted = dto.HasVoted };
            return entity;
        }
    }
}
