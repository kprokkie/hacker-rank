class Trie {
    constructor() {
        this.leaf = false;
        this.children = [];
    }
}

function insertToTrie (root, key) {

}

function boggle() {
    const boggle = [
        ['G', 'I', 'Z'],
        ['U', 'E', 'K'],
        ['Q', 'S', 'E']
    ];

    // 1. Step
    const dictionary = ['GEEKS', 'FOR', 'QUIZ', 'GEET'];
    const root = new Trie();

    for (let i = 0; i < dictionary.length; i++) {
        insertToTrie(root, dictionary[i]);
    }





}

