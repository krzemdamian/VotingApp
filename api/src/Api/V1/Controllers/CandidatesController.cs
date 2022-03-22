using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Mappers.Abstractions;
using Api.V1.Models;
using Application.Repositories.Abstractions;
using Domain.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.V1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiVersion("1.0")]
    public class CandidatesController : ControllerBase
    {
        private readonly IRepository<Candidate> _repository;
        private readonly ITwoWayMapper<Candidate, CandidateDto> _candidateMapper;

        public CandidatesController(IRepository<Candidate> repository, ITwoWayMapper<Candidate, CandidateDto> candidateMapper)
        {
            _repository = repository;
            _candidateMapper = candidateMapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<CandidateDto>> Get()
        {
            var entities = _repository.GetAll();
            var result = entities.Select(e => _candidateMapper.ToDto(e));

            return Ok(result);
        }

        [HttpPost]
        public IActionResult Post([FromBody] CandidateDto candidateDto)
        {
            var entity = _candidateMapper.ToEntity(candidateDto);
            _repository.Add(entity);

            return Ok();
        }
    }
}
