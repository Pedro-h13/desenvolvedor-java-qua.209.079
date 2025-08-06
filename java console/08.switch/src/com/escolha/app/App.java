package com.escolha.app;

import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner leia = new Scanner(System.in);

int x, y;
double result;
String operacao;

System.out.print("informe o valo de x");
x = leia.nextInt();
System.out.print("informe o valo de y");
y = leia.nextInt();
//limpeza
// menu
System.out.println("escolha a operacao");
System.out.println("1- Somar.");
System.out.println("2- subtrair.");
System.out.println("3- multiplicar.");
System.out.println("4- dividir.");







// escolha caso
switch (operacao) {
    case "1":
    result = x=y;
    System.out.print("o resultado da soma e:"+result);
    
    case "2":
 result = x-y;
  System.out.print("o resultado da subtracao e:"+result);

   case "3":
 result = x*y;
  System.out.print("o resultado da multiplicacao e:"+result);

 case "4":
 result = x/y;
 System.out.print("o resultado da divisao e: + resul");
 break;
 defalt:
 System.out.println("Operador invalido");





    }

    leia.close();
}
