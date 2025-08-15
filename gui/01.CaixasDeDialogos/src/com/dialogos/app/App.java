package com.dialogos.app;

import javax.swing.JOptionPane;

import com.dialogos.model.Pessoa;

public class App {
    public static void main(String[] args) throws Exception {
// instancia pessoa
     Pessoa usuario = new Pessoa(null, 0);
     // caixa de input
usuario.setNome(JOptionPane.showInputDialog("informe seu nome:")

// cia de output 
JOptionPane.showMessageDialog(null, "nome" + usuario.getNome(), "sai", 0);


;


}
}
