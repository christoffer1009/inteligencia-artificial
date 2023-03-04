import { TreeNode } from "./Node";

const find = (n: TreeNode, objetivo: string): TreeNode[] => {
    let visitados: TreeNode[] = []
    let descobertos: TreeNode[] = []
    let caminhoMorto: TreeNode[] = [];
    let atual: TreeNode = n;
    descobertos.unshift(n)

    while (descobertos.length > 0) {
        console.log("ATUAL", atual.id);
        console.log("DESCO", descobertos);
        console.log("VISIT", visitados);
        console.log("MORTO", caminhoMorto);

        if (atual.id == objetivo) {

            visitados.push(atual)
            console.log("FIM SUCESSO", visitados);
            return visitados
        }

        if (!descobertos.includes(atual)) {
            descobertos.unshift(atual)
            atual.children.forEach(x => {
                descobertos.unshift(x)
            });
            visitados.push(atual)
            atual = descobertos[0]
        } else if (descobertos.includes(atual) && !visitados.includes(atual)) {
            if (atual.children.length > 0) {
                atual.children.forEach(x => {
                    descobertos.unshift(x)
                });
                visitados.push(atual)
            } else {
                descobertos.shift()
                caminhoMorto.push(atual)
            }
            atual = descobertos[0]
        } else if (descobertos.includes(atual) && visitados.includes(atual)) {
            descobertos.shift()
            visitados.pop()
            atual = descobertos[0]
        }

    }

    return visitados
}


const a = new TreeNode('A')
const b = new TreeNode("B");
const c = new TreeNode("C");
const d = new TreeNode("D");
const e = new TreeNode("E");
const f = new TreeNode("F");
const g = new TreeNode("G");
const h = new TreeNode("H");
const i = new TreeNode("I");
const j = new TreeNode("J")

a.addChild(b)
a.addChild(c)
b.addChild(d)
b.addChild(e)
c.addChild(f)
c.addChild(g)
e.addChild(h)

const res: TreeNode[] = find(a, "G");
console.log(res);
