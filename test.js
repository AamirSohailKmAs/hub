      var editor = CodeMirror.fromTextArea(document.getElementById("textareaCode"), {
    mode: "htmlmixed",
    autoCloseTags: true,
    matchTags: {bothTags: true},
    matchBrackets: true,
    autoCloseBrackets: true,
    styleActiveLine: true,
    lineWrapping: true,
 autofocus: true, /* extra options start*/
 readOnly: false,
 undoDepth: 1000,
 historyEventDelay: 500,
 indentUnit: 2, /* default=2*/
 tabSize: 4, /* default=4*/
 indentWithTabs: false, /* default=false*/
 smartIndent: true, /* default=true*/
 direction: "ltr", /* "ltr" | "rtl" default=ltr*/
 rtlMoveVisually: false, /* default=false */
 showCursorWhenSelecting: true, /* default=false*/
lint: true,
 /* extra options end*/
// To highlight on scrollbars as well, pass annotateScrollbar in options
  // as below.
  highlightSelectionMatches: {showToken: /\w/, annotateScrollbar: true},
showTrailingSpace: true,
 lineNumbers: true,
 foldGutter: true,
 findPersistent: true,
    gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter", "breakpoints"],
    extraKeys: { "Ctrl-F11": function(cm) {cm.setOption("fullScreen", !cm.getOption("fullScreen"));},
"Esc": function(cm) {if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);},
"Ctrl-J": "toMatchingTag",
"Ctrl-Alt-K": function(cm) {cm.showHint({hint: CodeMirror.hint.anyword});},
"Ctrl-B": "findPersistent",
"Ctrl-K": function(cm) {cm.setOption("styleActiveLine", !cm.getOption("styleActiveLine"));},
"Ctrl-M": cm => CodeMirror.commands.clearSearch(cm),
"Ctrl-I": cm => CodeMirror.commands.unfoldAll(cm),
"Ctrl-E": cm => CodeMirror.commands.foldAll(cm),
"Ctrl-L": function(cm){ cm.foldCode(cm.getCursor()); }
}
  });
editor.on("keydown", function(cm, event) {
if(!(event.ctrlKey) && 
 (event.keyCode >= 65 && event.keyCode <=90) && !(event.altKey) && 
 (event.keyCode >= 65 && event.keyCode <=90) || 
 (event.keyCode >= 185 && event.keyCode <=222) ||
 (event.keyCode >= 46 && event.keyCode <=57) 
  ){
   CodeMirror.commands.autocomplete(cm, null, {completeSingle: false});
   }
if(event.keyCode > 8 && event.keyCode <222){
   CodeMirror.commands.clearSearch(cm);
   }
   });
     editor.setCursor({line: 2, ch: 2});/*doc.setCursor(pos:{line,ch}|number, ?ch: number, ?options:object);*/
     editor.foldCode(CodeMirror.Pos(3, 0));
  editor.foldCode(CodeMirror.Pos(6, 0));
  editor.foldCode(CodeMirror.Pos(9, 0));
  editor.foldCode(CodeMirror.Pos(10, 0));
  editor.foldCode(CodeMirror.Pos(12, 0));
  editor.foldCode(CodeMirror.Pos(16, 0));
  editor.foldCode(CodeMirror.Pos(20, 0));
  editor.foldCode(CodeMirror.Pos(24, 0));
  editor.foldCode(CodeMirror.Pos(28, 0));
/* kmas folding start with var editor or hoshi etc fold begin 0 range is less one 
mode can be written as mode: {name: "htmlmixed"},  */
function fullScreen() {
if (editor.getOption("fullScreen")) {editor.setOption("fullScreen", false);}
else {editor.setOption("fullScreen", true);}
}
function autoCloseTags() {
if (editor.getOption("autoCloseTags")) {editor.setOption("autoCloseTags", false);}
else {editor.setOption("autoCloseTags", true);}
}
function autoCloseBrackets() {
if (editor.getOption("autoCloseBrackets")) {editor.setOption("autoCloseBrackets", false);}
else {editor.setOption("autoCloseBrackets", true);}
}
function styleActiveLine() {
if (editor.getOption("styleActiveLine")) {editor.setOption("styleActiveLine", false);}
else {editor.setOption("styleActiveLine", true);}
}
function lineNumbers() {
if (editor.getOption("lineNumbers")) {editor.setOption("lineNumbers", false); editor.setOption("foldGutter", false);}
else {editor.setOption("lineNumbers", true);
editor.setOption("foldGutter", true);}
}
function foldGutter() {
if (editor.getOption("lineNumbers", true)) {
if (editor.getOption("foldGutter", true)) {editor.setOption("foldGutter", false);}
else {editor.setOption("foldGutter", true);}
}}
function lineWrapping() {
if (editor.getOption("lineWrapping")) {editor.setOption("lineWrapping", false);}
else {editor.setOption("lineWrapping", true);}
}
function leftLine() {
if (editor.getOption("gutters")) {editor.setOption("gutters", false);editor.setOption("lineNumbers", false);}
else {editor.setOption("gutters", ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "breakpoints"]);editor.setOption("lineNumbers", true);}
}
