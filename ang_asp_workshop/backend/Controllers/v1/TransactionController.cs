using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Database;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
//using backend.v1.Models;

namespace backend.Controllers.v1
{
    [Authorize]
    [Route("api/v1/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {

        private readonly DatabaseContext databaseContext;

        public TransactionController(DatabaseContext databaseContext)
        {
            this.databaseContext = databaseContext;
        }

    }
}