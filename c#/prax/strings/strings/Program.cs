using static System.Console;
namespace practice1
{
    class Program
    {
        static void Main(string[] args)
        {
            string characterName = "John";
            int characterAge;
            characterAge = 70;

            WriteLine("There once was a man named " + characterName);
            WriteLine("He was " + characterAge +" years old");
            WriteLine("He really liked the name " + characterName);
            WriteLine("But he didn't like being " + characterAge);
            ReadLine();
        }
    }
}
