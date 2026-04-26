using CaseFlow.Api.Data;
using CaseFlow.Api.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CaseFlow.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DashboardController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public DashboardController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet("summary")]
    public async Task<ActionResult<DashboardSummaryDto>> GetSummary()
    {
        var summary = new DashboardSummaryDto
        {
            TotalCustomers = await _context.Customers.CountAsync(),
            TotalCases = await _context.Cases.CountAsync(),
            OpenCases = await _context.Cases.CountAsync(c => c.Status != "Closed" && c.Status != "Completed"),
            HighPriorityCases = await _context.Cases.CountAsync(c => c.Priority == "High" || c.Priority == "Critical")
        };

        return Ok(summary);
    }
}