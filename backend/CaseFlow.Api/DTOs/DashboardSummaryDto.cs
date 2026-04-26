namespace CaseFlow.Api.DTOs;

public class DashboardSummaryDto
{
    public int TotalCustomers { get; set; }

    public int TotalCases { get; set; }

    public int OpenCases { get; set; }

    public int HighPriorityCases { get; set; }
}