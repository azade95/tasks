using System;

namespace arraytask3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Vermilmis ededler siyahisindaki en boyuk eded ve en kicik ededin ededi ortasini tapan alqoritm

            int[] numbers = { 58, 19, 8, 84, 67, 77, 23, 90 };
            int min = numbers[0];
            int max = numbers[0];

            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] < min)
                {
                    min = numbers[i];
              

                };



                if (numbers[i] > max)
                {
                    max = numbers[i];
                  };


            }
            Console.WriteLine((max + min) / 2);
        }
    }
}