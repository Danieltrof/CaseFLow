namespace CaseFlow.Api.Models;

public class Customer
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string Phone { get; set; } = string.Empty;

    public string CompanyName { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    //One customer can have multiple cases
    public ICollection<Case> Cases { get; set; } = new List<Case>();
}