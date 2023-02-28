using System;

namespace arraytask4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Verilmis adlar siyahisindaki adi 'A' herfi ile baslayanlarin sayini tapan alqoritm

            string [] names = { "Aqil", "Cemil", "Ferid", "Anar", "Arzu" };
            int counter = 0;

            for (int i = 0; i < names.Length; i++)
            {
                if (names[i][0] == 'A') 
                {
                    counter++;
                }
            }

            Console.WriteLine(counter);
        }
    }
}