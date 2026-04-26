namespace CaseFlow.Api.Models;

public class Case
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string Status { get; set; } = "New";

    public string Priority { get; set; } = "Medium";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? DueDate { get; set; }

    public int CustomerId { get; set; }

    public Customer Customer { get; set; } = null!;
}