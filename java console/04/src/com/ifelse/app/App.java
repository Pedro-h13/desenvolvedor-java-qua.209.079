package com.ifelse.app;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        
    Scanner leia = new Scanner(System.in);
String nome; int idade;
 System.out.println("INFORME SEU NOME");
nome = leia.nextLine();
 System.out.println("INFORME SUA IDADE");
idade = leia.nextInt();
    // estrutura de decisao
    if (idade>18){
        System.out.println(idade+" maior de idade");
    } else {
         System.out.println(idade+"MENOR de idade");
    }
    leia.close();
}
}

