package com.quatropilares.model;

abstract public class Pessoa {
    // atributos
    private String email;
private String telefone;
private String endereço;

    public Pessoa(String email, String telefone, String endereço) {
        this.email = email;
        this.telefone = telefone;
        this.endereço = endereço;

    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return this.telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEndereço() {
        return this.endereço;
    }

    public void setEndereço(String endereço) {
        this.endereço = endereço;
    }

}
