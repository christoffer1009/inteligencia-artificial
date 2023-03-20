import { TreeNode } from "./Node";

export class QuebraCabeca {
  id: string;
  estado: number[];
  idPai: string | null;
  filhos: QuebraCabeca[];
  geracao: number;

  constructor(id: string, estado: number[], pai: QuebraCabeca | null) {
    this.id = id;
    this.estado = estado;
    this.idPai = pai ? pai.id : null;
    this.filhos = [];
    this.geracao = pai ? pai.geracao + 1 : 0;
  }

  adicionaFilho(id: string, estado: number[], pai: QuebraCabeca | null) {
    this.filhos.push(new QuebraCabeca(id, estado, pai));
  }

  removeFilho(id: string) {
    this.filhos = this.filhos.filter((x) => x.id != id);
  }

  geraFilhos() {
    let esquerda = this.moveEsquerda();
    if (esquerda)
      this.adicionaFilho(`${this.id}.${this.filhos.length}`, esquerda, this);

    let direita = this.moveDireita();
    if (direita)
      this.adicionaFilho(`${this.id}.${this.filhos.length}`, direita, this);

    let cima = this.moveCima();
    if (cima)
      this.adicionaFilho(`${this.id}.${this.filhos.length}`, cima, this);

    let baixo = this.moveBaixo();
    if (baixo)
      this.adicionaFilho(`${this.id}.${this.filhos.length}`, baixo, this);
  }

  moveEsquerda() {
    let temp = [...this.estado];
    let vazio = temp.indexOf(0);
    if (vazio != 2 && vazio != 5 && vazio != 8) {
      [temp[vazio], temp[vazio + 1]] = [temp[vazio + 1], temp[vazio]];
      return temp;
    }
    return null;
  }

  moveDireita() {
    let temp = [...this.estado];
    let vazio = temp.indexOf(0);
    if (vazio != 0 && vazio != 3 && vazio != 6) {
      [temp[vazio], temp[vazio - 1]] = [temp[vazio - 1], temp[vazio]];
      return temp;
    }
    return null;
  }

  moveCima() {
    let temp = [...this.estado];
    let vazio = temp.indexOf(0);
    if (vazio != 6 && vazio != 7 && vazio != 8) {
      [temp[vazio], temp[vazio + 3]] = [temp[vazio + 3], temp[vazio]];
      return temp;
    }
    return null;
  }

  moveBaixo() {
    let temp = [...this.estado];
    let vazio = temp.indexOf(0);
    if (vazio != 0 && vazio != 1 && vazio != 2) {
      [temp[vazio], temp[vazio - 3]] = [temp[vazio - 3], temp[vazio]];
      return temp;
    }
    return null;
  }

  estadoIgual(q: QuebraCabeca): Boolean {
    return (
      this.estado.length === q.estado.length &&
      this.estado.every((element, index) => element === q.estado[index])
    );
  }
}
