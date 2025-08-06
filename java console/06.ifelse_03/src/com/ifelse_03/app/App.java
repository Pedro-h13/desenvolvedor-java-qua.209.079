package com.ifelse_03.app;

import java.util.Scanner;

import java.util.Scanner;
public class App {
    public static void main(String[] args) throws Exception {
    // instancia do objeto Scanner    
  Scanner leia = new Scanner (System.in);

// declaracao de variaveis
String nome;
double nota;

// input
System.out.println("infirme o nome do aluno");
nome = leia.nextLine();
System.out.println("informe o nota do aluno");
nota = leia.nextDouble();
// output
if (nota >= 7) {
    System.out.println(nome + " esta aprovado");
}else if (nota >=5){
    System.out.println(nome + " esta em recuperacao");
}else {
        System.out.println(nome + " esta REPROVADO");  
}
leia.close();
}
}