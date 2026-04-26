using CaseFlow.Api.Data;
using CaseFlow.Api.DTOs;
using CaseFlow.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CaseFlow.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CasesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CasesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<CaseDto>>> GetCases()
    {
        var cases = await _context.Cases
            .Include(c => c.Customer)
            .OrderByDescending(c => c.CreatedAt)
            .Select(c => new CaseDto
            {
                Id = c.Id,
                Title = c.Title,
                Description = c.Description,
                Status = c.Status,
                Priority = c.Priority,
                CreatedAt = c.CreatedAt,
                DueDate = c.DueDate,
                CustomerId = c.CustomerId,
                CustomerName = c.Customer.Name
            })
            .ToListAsync();

        return Ok(cases);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<CaseDto>> GetCase(int id)
    {
        var caseItem = await _context.Cases
            .Include(c => c.Customer)
            .Where(c => c.Id == id)
            .Select(c => new CaseDto
            {
                Id = c.Id,
                Title = c.Title,
                Description = c.Description,
                Status = c.Status,
                Priority = c.Priority,
                CreatedAt = c.CreatedAt,
                DueDate = c.DueDate,
                CustomerId = c.CustomerId,
                CustomerName = c.Customer.Name
            })
            .FirstOrDefaultAsync();

        if (caseItem == null)
        {
            return NotFound();
        }

        return Ok(caseItem);
    }

    [HttpPost]
    public async Task<ActionResult<CaseDto>> CreateCase(CreateCaseDto dto)
    {
        var customerExists = await _context.Customers.AnyAsync(c => c.Id == dto.CustomerId);

        if (!customerExists)
        {
            return BadRequest("Customer does not exist.");
        }

        var caseItem = new Case
        {
            Title = dto.Title,
            Description = dto.Description,
            Priority = dto.Priority,
            DueDate = dto.DueDate,
            CustomerId = dto.CustomerId
        };

        _context.Cases.Add(caseItem);
        await _context.SaveChangesAsync();

        var createdCase = await _context.Cases
            .Include(c => c.Customer)
            .Where(c => c.Id == caseItem.Id)
            .Select(c => new CaseDto
            {
                Id = c.Id,
                Title = c.Title,
                Description = c.Description,
                Status = c.Status,
                Priority = c.Priority,
                CreatedAt = c.CreatedAt,
                DueDate = c.DueDate,
                CustomerId = c.CustomerId,
                CustomerName = c.Customer.Name
            })
            .FirstAsync();

        return CreatedAtAction(nameof(GetCase), new { id = caseItem.Id }, createdCase);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCase(int id, UpdateCaseDto dto)
    {
        var caseItem = await _context.Cases.FindAsync(id);

        if (caseItem == null)
        {
            return NotFound();
        }

        var customerExists = await _context.Customers.AnyAsync(c => c.Id == dto.CustomerId);

        if (!customerExists)
        {
            return BadRequest("Customer does not exist.");
        }

        caseItem.Title = dto.Title;
        caseItem.Description = dto.Description;
        caseItem.Status = dto.Status;
        caseItem.Priority = dto.Priority;
        caseItem.DueDate = dto.DueDate;
        caseItem.CustomerId = dto.CustomerId;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpPatch("{id}/status")]
    public async Task<IActionResult> UpdateCaseStatus(int id, [FromBody] string status)
    {
        var caseItem = await _context.Cases.FindAsync(id);

        if (caseItem == null)
        {
            return NotFound();
        }

        caseItem.Status = status;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCase(int id)
    {
        var caseItem = await _context.Cases.FindAsync(id);

        if (caseItem == null)
        {
            return NotFound();
        }

        _context.Cases.Remove(caseItem);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}