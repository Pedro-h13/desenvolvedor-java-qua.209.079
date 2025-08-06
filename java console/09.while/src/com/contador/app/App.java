package com.contador.app;




public class App {
    public static void main(String[] args) throws Exception {
        Scanner leia = new Scanner(System.in);

        int n;

        System.out.print("informe um numero inferior:");
        n = leia.nextInt();

        // enquanto
        while (n > 0 ){
            System.out.println(n);
            n--;
        }
leia.close();
    }
}
