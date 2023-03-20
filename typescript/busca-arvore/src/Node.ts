export class TreeNode {
  id: string;
  pai: TreeNode | null;
  filhos: TreeNode[] = [];

  constructor(id: string, pai: TreeNode | null) {
    this.id = id;
    this.pai = pai;
  }

  adicionaFilho(n: TreeNode) {
    this.filhos.push(n);
  }

  removeFilho(id: string) {
    this.filhos = this.filhos.filter((x) => x.id != id);
  }
}
