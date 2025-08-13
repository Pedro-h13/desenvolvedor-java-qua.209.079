
 final public class PessoaFisica extends Pesssoa {
    // atributos
    public String nome;
    public String cpf;
    public String dataNacimento;

    public PessoaFisica(String nome, String cpf, String dataNacimento, String email, String telefone, String endereço) {
        super(email, telefone, endereço);
        this.nome = nome;
        this.cpf = cpf;
        this.dataNacimento = dataNacimento;

    }

    public String cumprimentar() {
        return "ola, meu nome e " + this.nome + " , nasci no dia " + this.dataNacimento + ", moro no endereço "
                + this.endereço + " meu telefone e " + this.telefone + " e meu email e" + this.email + ".";
    }

}
