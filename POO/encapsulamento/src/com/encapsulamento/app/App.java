package com.encapsulamento.app;

import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        // instanciar classe Pessoa
        Scanner leia = new Scanner(System.in);
        Pessoa usuario = new Pessoa();

// imputs 
System.out.println("informe o nome");
usuario.setNome(leia.nextLine());
System.out.println("informe sua iade");
usuario.setIdade(leia.nextInt());

// output
System.out.println("Nome: "+ usuario.getNome());
System.out.println("idade: "+ usuario.getIdade());
        leia.close();
    }
}
