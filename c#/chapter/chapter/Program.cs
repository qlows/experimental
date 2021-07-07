using System;
using static System.Console;
namespace chapter
{
    class Program
    {
        static void Main(string[] args)
        {
            int assignment1 = 76, assignment2 = 68,
              assignment3 = 90, assignment4 = 70;

            double totalMark = assignment1 * 0.15 + assignment2 * 0.25 +
                assignment3 * 0.3 + assignment4 * 0.3;
            WriteLine("Total Marks: " + totalMark);
            ReadLine();
            
        }
    }
}
