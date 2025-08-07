package com.atividade02.app;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception  {

Scanner leia = new Scanner(System.in);

double idade =0;
String nome;
int opcao=0;
System.out.print("informe o nome: ");
        nome = leia.nextLine();
        System.out.print("informe o idade");
        idade = leia.nextDouble();
// verificar idade
do{
    System.out.println("1 dracula. (+16)");
    System.out.println("2 super man (+10)");
    System.out.println("3 jurassic. (+12)");
    System.out.println("4 spider man. (livre)");
    System.out.println("5 a hora do mal. (+18)");
    opcao=leia.nextInt ();

    if (opcao ==1 && idade>=16){
        System.out.println("ingresso coprado");
    } else if ( opcao==2 && idade>=10) {
        System.out.println("ingresso coprado");
    } else if ( opcao==3 && idade>=12) {
        System.out.println("ingresso coprado");
    } else if ( opcao==4) {
        System.out.println("ingresso coprado");
    } else if ( opcao==5 && idade>=18) {
        System.out.println("ingresso coprado");
    } else {
        System.out.println("idade nao permitida");
    }

} while (opcao<1 && opcao>5);
    } 
 }
