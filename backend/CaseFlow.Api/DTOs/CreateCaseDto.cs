namespace CaseFlow.Api.DTOs;

public class CreateCaseDto
{
    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string Priority { get; set; } = "Medium";

    public DateTime? DueDate { get; set; }

    public int CustomerId { get; set; }
}