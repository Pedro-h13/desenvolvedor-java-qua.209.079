package com.ifelse.app;
import java.util.Scanner;
public class App {
    public static void main(String[] args) throws Exception {
  Scanner leia = new Scanner( System.in);

  // DECLARACAO DE VARIAVEIS
  String nome;
  int idade;
  
  // input
  System.out.println("informe seu nome");
  nome = leia.nextLine();
  System.out.println("infrme sua idade");
  idade = leia.nextInt();

  // ternario
  System.out.println(nome + (( idade >=18) ? " e maior de idade." :" e menor de idade."));

  leia.close();
    }
}
