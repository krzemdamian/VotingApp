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
    public class CandidateMapper : ITwoWayMapper<Candidate, CandidateDto>
    {
        public CandidateDto ToDto(Candidate entity)
        {
            var dto = new CandidateDto { Id = entity.Id, Name = entity.Name, Votes = entity.Votes };
            return dto;
        }

        public Candidate ToEntity(CandidateDto dto)
        {
            var entity = new Candidate { Id = dto.Id, Name = dto.Name, Votes = dto.Votes };
            return entity;
        }
    }
}
