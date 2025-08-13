import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        // instancias
        Scanner leia = new Scanner(System.in);
        PessoaFisica usuario = new PessoaFisica(null, null, null, null, null, null);
        PessoaJuridica empresa = new PessoaJuridica(null, null, null, null, null, null);

        // imput do usuario
        System.out.println("\ndados do usuario");
        System.out.println("nome do usuario");
        usuario.nome = leia.nextLine();
        System.out.println("cpf");
        usuario.cpf = leia.nextLine();
        System.out.println("dataNascimento");
        usuario.dataNacimento = leia.nextLine();
        System.out.println("email");
        usuario.email = leia.nextLine();
        System.out.println("telefone");
        usuario.telefone = leia.nextLine();
        System.out.println("endereço");
        usuario.endereço = leia.nextLine();

        // empresa
        System.out.println("\ndados da empreza");
        System.out.println("razao social");
        empresa.razaoSocial = leia.nextLine();
        System.out.println("nome da empreza");
        empresa.nomeFantasia = leia.nextLine();
        System.out.println("cnpj");
        empresa.cnpj = leia.nextLine();
        System.out.println("email");
        empresa.email = leia.nextLine();
        System.out.println("telefone");
        empresa.telefone = leia.nextLine();
        System.out.println("endereço");
        empresa.endereço = leia.nextLine();

        // executor
        System.out.println(usuario.cumprimentar());
        System.out.println(empresa.cumprimentar());

        leia.close();

    }

}
