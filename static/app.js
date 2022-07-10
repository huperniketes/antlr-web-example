// var TodoLexer = require('generated-parser/todoLexer');
// var TodoParser = require('generated-parser/todoParser');

import todoLexer from './generated-parser/todoLexer.js';
import todoParser from './generated-parser/todoParser.js';

window.document.getElementById("parse").addEventListener("click", function () {
    var input = document.getElementById("code").value;
    var chars =  new antlr4.InputStream(input);
    var lexer = new todoLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new todoParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.elements();
    console.log("Parsed: "+ tree);
    updateTree(tree, parser.ruleNames);
});