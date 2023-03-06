import javax.print.attribute.standard.MediaSize;
import java.util.ArrayList;
import java.util.Optional;

public class Busca {
    static public Optional<No> buscaAmplitude(No no, int objetivo) {
        ArrayList<No> abertos = new ArrayList<No>();
        ArrayList<No> fechados = new ArrayList<No>();
        No atual;
        abertos.add(no);
        while (abertos.stream().count() > 0){
            atual = abertos.get(0);
            abertos.remove(0);

            if (atual.value == objetivo){
                return Optional.of(atual);
            } else {
              atual.filhos.forEach(f -> abertos.add(f));
              fechados.add(atual);
              abertos.remove(atual);
            }
        }

//        throw new RuntimeException("nao encontrado") ;
        return Optional.empty();
    }
}
