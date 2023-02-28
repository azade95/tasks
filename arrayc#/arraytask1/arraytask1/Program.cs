namespace arraytask1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Verilmis ededler siyahisindaki 3-e bolunen ededlerin ededi oratsini tapan alqoritm

            int [] numbers ={ 23, 87, 45, 34, 16, 78};
            int sum = 0;
            int counter = 0;

            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] % 3 == 0)
                {
                    sum += numbers[i];
                   counter++;
                }


            }

            Console.WriteLine(sum / counter);
        }
    }
}