namespace arrayresizetask
{
    internal class Program
    {
        static void Main(string[] args)
        {
            bool flag = true;
            int i = 0;
            Console.WriteLine("Please enter the size of the array");
            int sizeArray = Convert.ToInt32(Console.ReadLine());
            int[] numbers = new int[0];
            do
            {
                Console.WriteLine("Enter element ");
                int element = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine(element);
                numbers[i] = element;
                i++;
                Array.Resize(ref numbers, numbers.Length + 1);
                Console.WriteLine("Do you want to continue? ");
                string answer = Console.ReadLine();
                if (!(answer == "y" || answer == "Y"))
                {
                    flag = false;
                    Console.WriteLine(".......exiting");
                }

            } while (flag);

            foreach (var item in numbers)
            {
                Console.Write(item);
            }
        }
    }
}