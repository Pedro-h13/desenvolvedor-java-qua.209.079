package com.atividade01.app;
import java.util.Scanner;

public class App {

    public static void main(String[] args) throws Exception {

        Scanner leia = new Scanner(System.in);

        double peso,altura,resultado;
        String nome;
    int opcao=0;
        
// verifificar o peso e altura
do { 
    System.out.println("1-novo calculo");
    System.out.println("2-sair");
    opcao=leia.nextInt();

    if (opcao ==1){
        leia.nextLine();
        System.out.print("informe o nome: ");
        nome = leia.nextLine();
        System.out.print("informe o peso");
        peso = leia.nextDouble();
        System.out.print("informe a altura");
        altura = leia.nextDouble();
         resultado = peso/(altura*altura);
        

    if (resultado< 18.5) {
    System.out.println("condicao atual magreza, seu imc e; "+ resultado);
} else if(resultado >= 18.5 && resultado<=24.9){
     System.out.println("condicao atual normal, seu imc e; "+ resultado);
} else if(resultado >= 25 && resultado<=29.9){
     System.out.println("condicao atual sobrepeco, seu imc e; "+ resultado);
}else if(resultado >= 30 && resultado<=39.9){
     System.out.println("condicao atual obecidade, seu imc e; "+ resultado);
}else if(resultado > 40){
     System.out.println("condicao atuaL obecidade grave, seu imc e; "+ resultado);
}
    }
    // todo 
    
}while (opcao !=2);
        }
        }
       

