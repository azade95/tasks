namespace _1marchtask
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("enter number from 10 to 20:");
            string number = Console.ReadLine();
            int num = Convert.ToInt32(number);

            if (num <= 10 || num >= 20)
            {
                Console.Write("Do you want to continue? yes or no?");
                string answer = Console.ReadLine();
                if (answer == "yes")
                {
                    do
                    {
                        Console.Write("enter number from 10 to 20:");
                         number = Console.ReadLine();
                    } while (10 < num && num< 20);
                        num = Convert.ToInt32(number);

                    if (num % 2 == 0)
                    {
                        Console.WriteLine("cutdur");
                    }
                    else
                    {
                        Console.WriteLine("tekdir");


                    }
                }
                else if (answer == "no")
                {
                    Console.WriteLine("finish");
                }
            }

            




        }
    }
}