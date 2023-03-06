export class TreeNode {
    id: string;
    children: TreeNode[] = [];

    constructor(id: string) {
        this.id = id
    }

    addChild(n: TreeNode) {
        this.children.push(n)
    }

    removeChild(id: string) {
        this.children = this.children.filter(x => x.id != id)
    }


}
