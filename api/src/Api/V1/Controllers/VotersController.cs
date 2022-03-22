using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Mappers.Abstractions;
using Api.V1.Models;
using Application.Repositories.Abstractions;
using Application.Services.Abstractions;
using Domain.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.V1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiVersion("1.0")]
    public class VotersController : ControllerBase
    {
        private readonly IRepository<Voter> _repository;
        private readonly ITwoWayMapper<Voter, VoterDto> _voterMapper;
        private readonly IVoteService _voteService;

        public VotersController(
            IRepository<Voter> repository,
            ITwoWayMapper<Voter, VoterDto> voterMapper,
            IVoteService voteService)
        {
            _repository = repository;
            _voterMapper = voterMapper;
            _voteService = voteService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<VoterDto>> Get()
        {
            var entities = _repository.GetAll();
            var result = entities.Select(e => _voterMapper.ToDto(e));

            return Ok(result);
        }

        [HttpPost]
        public IActionResult Post([FromBody] VoterDto voterDto)
        {
            var entity = _voterMapper.ToEntity(voterDto);
            _repository.Add(entity);

            return Ok();
        }

        [HttpPost("{id}/vote")]
        public IActionResult Post([FromRoute] int id, [FromBody] int candidateId)
        {
            _voteService.Vote(id, candidateId);
            return Ok();
        }
    }
}
