import java.util.ArrayList;
import java.util.stream.Collectors;

public class No {
    public String id;
    public Integer value;
    public ArrayList<No> filhos;
    public No(String id, int value) {
        this.id = id;
        this.value = value;
        this.filhos = new ArrayList<No>();
    }
    public void adicionaFilho(No no){
        this.filhos.add(no);
    }
    public void removeFilho(String id){
        this.filhos = new ArrayList<No>( this.filhos.stream().filter(f -> f.id != id).collect(Collectors.toList()));
    }

    @Override
    public String toString() {
        return "No{" +
                "id='" + id + '\'' +
                ", value=" + value +
                '}';
    }
}
