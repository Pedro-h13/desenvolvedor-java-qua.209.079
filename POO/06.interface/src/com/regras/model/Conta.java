package com.regras.model;

import com.regras.interfaces.Iconta;

public class Conta implements Iconta {
    private String titular;
    private String cpf;
    private String agencia;
    private String nConta;
    private double saldo;

    public Conta(String titular, String cpf, String agencia, String nConta, double saldo) {
        this.titular = titular;
        this.cpf = cpf;
        this.agencia = agencia;
        this.nConta = nConta;
        this.saldo = saldo;
    }

    public String getTitular() {
        return this.titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public String getCpf() {
        return this.cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getAgencia() {
        return this.agencia;
    }

    public void setAgencia(String agencia) {
        this.agencia = agencia;
    }

    public String getNConta() {
        return this.nConta;
    }

    public void setNConta(String nConta) {
        this.nConta = nConta;
    }

    public double getSaldo() {
        return this.saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    @Override
    public void exibirDados() {
        // TODO Auto-generated method stub
        System.out.println("Nome do titular: + this.titular");
        System.out.println("cpf do titular: + this.cpf");
        System.out.println("Agencia: + this.agencia");
        System.out.println("Saldo da conta: " + String.format("%.2f", this.saldo));

    }

    @Override
    public double fazerDeposito(double valor) {
        // TODO Auto-generated method stub
        this.saldo += valor;
        return this.saldo;
    }

    @Override
    public double fazerSaquer(double valor) {
        // TODO Auto-generated method stub
        this.saldo -= valor;
        return this.saldo;
    }

}
