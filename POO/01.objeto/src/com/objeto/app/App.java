package com.objeto.app;

import java.util.Scanner;
public class App {
    public static void main(String[] args) throws Exception {
        // instancia a clsse Pessoa
        Pessoa usuario =  new Pessoa();
        Scanner leia = new Scanner(System.in);

        // define os valores do objeto
        System.out.println("imforme o nome");
        usuario.nome = leia.nextLine();
         System.out.println("imforme o idade");
          usuario.idade = leia.nextInt();
          System.out.println("imforme a altura");
           usuario.altura = leia.nextDouble();

        // output
        System.out.println(usuario.cumpString());
       usuario.exibirDados();

       leia.close();
    }
}
