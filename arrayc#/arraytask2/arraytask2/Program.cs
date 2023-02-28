namespace arraytask2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Verilmis ededler siyahisinda reqemlerinin sayi 2-den boyuk olan ededlerin cemini tapan alqoritm

            int [] numbers = { 2, 6, 90, 76, 32, 875, 9948 };
            int sum = 0;

            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] > 99)
                {
                    sum += numbers[i];
                };

            }

            Console.WriteLine(sum);
        }
    }
}