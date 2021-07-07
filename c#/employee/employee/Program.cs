using System;
using static System.Console;
using System.Threading.Tasks;
namespace employee
{
    public class Employee
    {
        private int employeeID;
        private string firstName;
        private string lastName;
        private string jobTitle;
        private double salary;

        public Employee()
        {
            employeeID = 0;
            firstName = "";
            lastName = "";
            jobTitle = "";
            salary = 0;
        }
        public Employee(int empID, string fName, string lName, string jTitle, double sal)
        {
            employeeID = empID;
            firstName = fName;
            lastName = lName;
            jobTitle = jTitle;
            salary = sal;
        }
        public int EmployeeID
        {
            get;
            set;
        }
        public int FirstName
        {
            get;
            set;
        }
        public int LastName
        {
            get;
            set;
        }
        public int JobTitle
        {
            get;
            set;
        }
        public int Salary
        {
            get;
            set;
        }
        public override string ToString()
        {
            string result = " ==========================\n ";
            result += "Employee ID ========> " + EmployeeID + "\n";
            result += "First Name ========> " + FirstName+ "\n";
            result += "Last Name ========> " + LastName + "\n";
            result += "Job Title ========> " + JobTitle + "\n";
            result += " ==========================\n " + employeeID + "\n";

            return result;
        }
    }
}
