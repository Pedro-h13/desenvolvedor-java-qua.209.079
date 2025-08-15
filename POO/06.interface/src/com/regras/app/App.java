package com.regras.app;

import java.util.Scanner;

import com.regras.model.Conta;

public class App {
    public static void main(String[] args) throws Exception {
        Conta cc = new Conta(null, null, "1234-5", "12345-6", 0);
 Scanner leia = new Scanner(System.in);

// declaraçao de variaveis
int opcao;  
double valor;

do {
    // menu

    System.out.println(" 1 exibir dados");
  System.out.println(" 2 fazer saque");
  System.out.println(" 3 fazer deposito");
  System.out.println(" 4 sair");

System.out.println("digite"); 

opcao = leia.nextInt();

switch (opcao){
    case 1:
cc.exibirDados();
        
        break;
case 2:
System.out.println("digite o valor do saque");
valor = leia.nextDouble();
valor = leia.nextDouble();
System.out.println( valor<=0?"valor invalido":"saque" + cc.fazerSaquer(valor));
break;
case 3:
System.out.println("digite o valor do deposito");
valor = leia.nextDouble();
System.out.println( valor<=0?"valor invalido":"DEPOSITO" + cc.fazerDeposito(valor));
break;
case 4:
System.out.println("rogama finazado");
break;
    default:
    System.out.println("digieuma opcao valida");
        break; 
}






} while ( opcao != 4 );
    




    }
}
