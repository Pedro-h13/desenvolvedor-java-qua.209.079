final public class PessoaJuridica extends Pesssoa {
    // atributos
    public String razaoSocial;
    public String nomeFantasia;
    public String cnpj;

    public PessoaJuridica(String razaoSocial, String nomeFantasia, String cnpj, String email, String telefone,
            String endereço) {
        super(email, telefone, endereço);
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
    }

    public String cumprimentar() {
        return "ola, somos da empreza e " + this.nomeFantasia + " , de razao social " + this.razaoSocial
                + ", cujo snpj e"
                + this.cnpj + " nosso email e " + this.email + " nosso telefone de contato e" + this.telefone
                + " endereço e." + this.endereço;
    }

}
