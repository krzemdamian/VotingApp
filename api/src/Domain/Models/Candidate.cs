﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Candidate
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Votes { get; set; }
    }
}
