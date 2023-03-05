using System;

namespace arrayresize
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] employers = new string[0];
            string answer = "yes";
            string newEmployee;
            string element = " ";
            int i = 0;

            do
            {
                Console.WriteLine("Enter new employee:");
                newEmployee=Console.ReadLine();
                element = newEmployee;
                Array.Resize(ref employers, employers.Length + 1);
                employers[i] = element; 
                i++;    
                Console.Write("do you want to continue?");
                answer=Console.ReadLine();



            } while (answer.ToLower()=="yes");

            foreach (var item in employers)
            {
                Console.WriteLine(item);
            }

        }
    }
}