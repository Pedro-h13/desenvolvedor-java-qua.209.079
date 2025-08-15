package com.quatropilares.app;

import java.util.Scanner;

import com.quatropilares.model.PessoaFisica;
import com.quatropilares.model.PessoaJuridica;
public class App {
    public static void main(String[] args) throws Exception {
       Scanner leia = new Scanner(System.in);

PessoaJuridica empreza = new PessoaJuridica(null,null,null,null,null,null);
PessoaFisica usuario = new PessoaFisica(null, null, null, null, null, null);


// input do usuario
System.out.println("informe os dados do usuario:\n");
System.out.println("informe o nome");
usuario.setNome(leia.nextLine());
System.out.println("informe o cpf");
usuario.setCpf(leia.nextLine());
System.out.println("informe a data de nascimento");
usuario.setDataNascimento(leia.nextLine());
System.out.println("informe o email");
usuario.setEmail(leia.nextLine());
System.out.println("informe o telefone");
usuario.setTelefone(leia.nextLine());
System.out.println("informe o endereço");
usuario.setEndereço(leia.nextLine());

// input da empreza
System.out.println("informe os dados do usuario:\n");
System.out.println("informe o nome");
usuario.setNome(leia.nextLine());
System.out.println("informe o cpf");
usuario.setCpf(leia.nextLine());
System.out.println("informe a data de nascimento");
usuario.setDataNascimento(leia.nextLine());
System.out.println("informe o email");
usuario.setEmail(leia.nextLine());
System.out.println("informe o telefone");
usuario.setTelefone(leia.nextLine());
System.out.println("informe o endereço");
usuario.setEndereço(leia.nextLine());

// out do usuario
System.out.println("informaçoes do usuario:\n");
System.out.println("nome: " + usuario.getNome());
System.out.println("cpf: " + usuario.getCpf());
System.out.println("data de nascimento: " + usuario.getDataNascimento());
System.out.println("email: " + usuario.getEmail());
System.out.println("telefone: " + usuario.getTelefone());
System.out.println("endereço: " + usuario.getEndereço());

// output da empeza
System.out.println("informaçoes da empeza\n");
System.out.println("razao social: " + empreza.getRazaoSocial());
System.out.println("nome da empreza: " + empreza.getNomeFantasma());
System.out.println("cnpj da empreza: " + empreza.getCnpj());
System.out.println("email da empreza: " + empreza.getEmail());
System.out.println("telefone ds empreza: " + empreza.getTelefone());
System.out.println("endereço da empreza: " + empreza.getEndereço());

leia.close();
    }
}
