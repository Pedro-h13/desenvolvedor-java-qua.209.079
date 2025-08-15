package com.quatropilares.model;

final public class PessoaJuridica extends Pessoa{
private String razaoSocial;
private String nomeFantasma;
private String cnpj;



    public PessoaJuridica(String razaoSocial, String nomeFantasma, String cnpj, String telefone, String email, String endereço) {
        super(telefone, email, endereço);
        this.razaoSocial = razaoSocial;
        this.nomeFantasma = nomeFantasma;
        this.cnpj = cnpj;
    }

    public String getRazaoSocial() {
        return this.razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public String getNomeFantasma() {
        return this.nomeFantasma;
    }

    public void setNomeFantasma(String nomeFantasma) {
        this.nomeFantasma = nomeFantasma;
    }

    public String getCnpj() {
        return this.cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }


}
