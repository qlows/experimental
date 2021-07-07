using System;

namespace userinput
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter your name: ");//.Write stays in the same line
            string name = Console.ReadLine();
            Console.Write("Enter your age: ");
            string age = Console.ReadLine();
            Console.WriteLine("Hello " + name + " you are " + age + " years old.");

            Console.ReadLine();
        }
    }
}
