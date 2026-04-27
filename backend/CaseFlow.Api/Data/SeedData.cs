using CaseFlow.Api.Models;
using Microsoft.AspNetCore.Identity;

namespace CaseFlow.Api.Data;

public static class SeedData
{
    public static async Task SeedUsersAsync(IServiceProvider serviceProvider)
    {
        var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
        var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();

        string[] roles = ["Admin", "Manager", "Employee"];

        foreach (var role in roles)
        {
            if (!await roleManager.RoleExistsAsync(role))
            {
                await roleManager.CreateAsync(new IdentityRole(role));
            }
        }

        await CreateUserIfNotExists(
            userManager,
            "admin@caseflow.com",
            "Admin",
            "User",
            "Admin123!",
            "Admin"
        );

        await CreateUserIfNotExists(
            userManager,
            "manager@caseflow.com",
            "Manager",
            "User",
            "Manager123!",
            "Manager"
        );

        await CreateUserIfNotExists(
            userManager,
            "employee@caseflow.com",
            "Employee",
            "User",
            "Employee123!",
            "Employee"
        );
    }

    private static async Task CreateUserIfNotExists(
        UserManager<ApplicationUser> userManager,
        string email,
        string firstName,
        string lastName,
        string password,
        string role)
    {
        var existingUser = await userManager.FindByEmailAsync(email);

        if (existingUser != null)
        {
            return;
        }

        var user = new ApplicationUser
        {
            UserName = email,
            Email = email,
            FirstName = firstName,
            LastName = lastName
        };

        var result = await userManager.CreateAsync(user, password);

        if (result.Succeeded)
        {
            await userManager.AddToRoleAsync(user, role);
        }
    }
}