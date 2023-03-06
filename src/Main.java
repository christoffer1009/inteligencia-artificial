import java.util.Optional;

public class Main {
    public static void main(String[] args) {

        No a = new No("A", 1);
        No b = new No("B", 2);
        No c = new No("C", 3);
        No d = new No("D", 4);
        No e = new No("E", 5);
        No f = new No("F", 6);
        No g = new No("G", 7);

        a.adicionaFilho(b);
        a.adicionaFilho(c);
        b.adicionaFilho(d);
        b.adicionaFilho(e);
        c.adicionaFilho(f);
        c.adicionaFilho(g);

        Optional<No> optres = Busca.buscaAmplitude(a, 1);
        if (optres.isPresent())
            System.out.println(optres.get());
        else System.out.println("Não encontrado!");
    }
}