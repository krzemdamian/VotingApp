using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.V1.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.V1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiVersion("1.0")]
    public class CandidatesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<CandidateDto>> Get()
        {
            var mockData = new CandidateDto[]
            {
                new CandidateDto() {Id = 0, Name = "Candidate 1", Votes = 0},
                new CandidateDto() {Id = 1, Name = "Candidate 2", Votes = 1},
                new CandidateDto() {Id = 2, Name = "Candidate 3", Votes = 2},
            };

            return Ok(mockData);
        }

        [HttpPost]
        public void Post([FromBody] string value)
        {
        }
    }
}
