import { TreeNode } from "./Node";
import { QuebraCabeca } from "./QuebraCabeca";

const encontra = (n: TreeNode, objetivo: string): TreeNode[] => {
  let visitados: TreeNode[] = [];
  let descobertos: TreeNode[] = [];
  let caminhoMorto: TreeNode[] = [];
  let atual: TreeNode = n;
  descobertos.unshift(n);

  while (descobertos.length > 0) {
    // console.log("ATUAL", atual.id);
    // console.log("DESCO", descobertos);
    // console.log("VISIT", visitados);
    // console.log("MORTO", caminhoMorto);

    if (atual.id == objetivo) {
      visitados.push(atual);
      // console.log("FIM SUCESSO", visitados);
      return visitados;
    }

    if (!descobertos.includes(atual)) {
      descobertos.unshift(atual);
      atual.filhos.forEach((x) => {
        descobertos.unshift(x);
      });
      visitados.push(atual);
      atual = descobertos[0];
    } else if (descobertos.includes(atual) && !visitados.includes(atual)) {
      if (atual.filhos.length > 0) {
        atual.filhos.forEach((x) => {
          descobertos.unshift(x);
        });
        visitados.push(atual);
      } else {
        descobertos.shift();
        caminhoMorto.push(atual);
      }
      atual = descobertos[0];
    } else if (descobertos.includes(atual) && visitados.includes(atual)) {
      descobertos.shift();
      visitados.pop();
      atual = descobertos[0];
    }
  }

  return visitados;
};

const resolve = (n: QuebraCabeca, objetivo: QuebraCabeca): QuebraCabeca[] => {
  let abertos: QuebraCabeca[] = [];
  let fechados: QuebraCabeca[] = [];
  let atual: QuebraCabeca = n;
  abertos.unshift(n);

  while (abertos.length > 0) {
    console.log("ATUAL", atual.id);
    console.log("ABERTOS", abertos);
    console.log("FECHADOS", fechados);

    if (atual.estadoIgual(objetivo)) {
      abertos.push(atual);
      console.log("FIM SUCESSO", abertos);
      return abertos;
    }

    if (!abertos.includes(atual)) {
      console.log("aqui");

      descobertos.unshift(atual);
      atual.filhos.forEach((x) => {
        descobertos.unshift(x);
      });
      visitados.push(atual);
      atual = descobertos[0];
      atual.geraFilhos();
    } else if (descobertos.includes(atual) && !visitados.includes(atual)) {
      console.log("aqui2");

      if (atual.filhos.length > 0) {
        atual.filhos.forEach((x) => {
          descobertos.unshift(x);
        });
        visitados.push(atual);
      } else {
        descobertos.shift();
        caminhoMorto.push(atual);
      }
      atual = descobertos[0];
      atual.geraFilhos();
    } else if (descobertos.includes(atual) && visitados.includes(atual)) {
      console.log("aqui3");

      descobertos.shift();
      visitados.pop();
      atual = descobertos[0];
      atual.geraFilhos();
    }
  }

  return visitados;
};

const a = new QuebraCabeca("1", [1, 2, 3, 4, 5, 6, 7, 8, 0], null);
const t = new QuebraCabeca("Objetivo", [1, 2, 3, 4, 5, 6, 7, 0, 8], null);

//  1 2 3
//  4 5 6
//  7 8 0

// const res: QuebraCabeca[] = resolve(a, t);
