package com.objeto.app;

public class Pessoa {
// atributos
public String nome;
public int idade;
public double altura;

//construtores
    public Pessoa() {
    }

    public Pessoa(String nome, int idade, double altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

// metodo
public void exibirDados() {
    System.out.println("nome: "+ this.nome);
    System.out.println("nome: "+ this.idade);
    System.out.println("nome: "+ this.altura + " metros");
}

public String cumpString(){
    return "ola, meu nome e " + this.nome + ", tenho" + this.idade + " anos, e tenho " + this.altura + " metros de altura.";
}
}
