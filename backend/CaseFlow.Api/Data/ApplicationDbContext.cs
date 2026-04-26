using CaseFlow.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CaseFlow.Api.Data;

//The bridge between C# code and the database

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Customer> Customers { get; set; }
}