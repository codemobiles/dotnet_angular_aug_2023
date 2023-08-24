using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Database;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using backend.v1.Models;

namespace backend.Controllers.v1
{
    // [Authorize]
    [Route("api/v1/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {

        private readonly DatabaseContext databaseContext;

        public TransactionController(DatabaseContext databaseContext)
        {
            this.databaseContext = databaseContext;
        }

        [HttpGet]
        public IActionResult GetTransactions()
        {
            // var result = databaseContext.Transactions.OrderByDescending(p => p.Timestamp).ToList();
            var result = databaseContext.Transactions
            .FromSqlRaw("SELECT t.transaction_id, t.subtotal, t.discount, " +
            "t.shipping_cost, t.tax_percent, t.total, t.paid, t.change," +
            "t.order_list, t.payment_type, t.payment_detail, t.seller_id," +
            "t.buyer_id, t.comment, t.timestamp, u.Username employee_id " +
            "FROM Transactions t LEFT JOIN Users u ON t.employee_id = u.ID order by t.timestamp desc").ToList();
            return Ok(result);
        }

    }
}