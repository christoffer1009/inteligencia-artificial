"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
class TreeNode {
    constructor(id, pai) {
        this.filhos = [];
        this.id = id;
        this.pai = pai;
    }
    adicionaFilho(n) {
        this.filhos.push(n);
    }
    removeFilho(id) {
        this.filhos = this.filhos.filter((x) => x.id != id);
    }
}
exports.TreeNode = TreeNode;
