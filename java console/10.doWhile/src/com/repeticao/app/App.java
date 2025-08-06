package com.repeticao.app;

import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner leia = new Scanner(System.in);

String nome;
int idade =0;
int opcao =0 ;
double altura =01;

// faca...enquanto
do {
    // TODO
    System.out.println("1 - registra nova entrada");
    System.out.println("2 - sair do progama");
    System.out.println("3 - inforeme a opcao desejada");
    opcao = leia.nextInt();

    // verifica a idade e a altura

    if(opcao == 1) { 
        // TODO 
        leia.nextLine ();
        System.out.println("informe o nome");
        nome = leia.nextLine();
        System.out.println("informe a idade");
        idade = leia.nextInt();
        System.out.println("informe a altura");
        altura = leia.nextDouble();
    }
else if (opcao != 2) {
System.out.println("informe opcao invalida");
} 
if (idade >=12 && altura >= 1.25) {
    System.out.println("autorizado");
} else{
    System.out.println(" nao autorizado");
}

} while(opcao !=2);


        leia.close();
    }
}
