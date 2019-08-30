(function changeValue() {editor.setValue("<!DOCTYPE html>
<html>
<body>
<style>
.html {border-radius: 16px;}
</style>
<p id="kmars">Click the button to change the layout of this paragraph</p>


<a href="/2010/07/demo-v5.0.html">Demo v 5.0</a>
<button onclick="myFunction()">Click Me!</button>

<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>



<svg class="html" height="300" width="200">
  <polygon points="0,0 120,0 200,80 200,300 0,300" style="fill:red;" />
  Sorry, your browser does not support inline SVG.
</svg>
<svg class="html" height="300" width="200">
  <polygon points="0,0 120,0 200,80 200,300 0,300" style="fill:lime;" />
  Sorry, your browser does not support inline SVG.
</svg>
<svg class="html" height="300" width="200">
  <polygon points="0,0 120,0 200,80 200,300 0,300" style="fill:blue;" />
  Sorry, your browser does not support inline SVG.
</svg>
<script>
function myFunction() {
    var x = document.getElementById("kmars");
    x.style.fontSize = "30px"; 
    x.style.color = "lime"; 
}
</script>
<script>
(function changeValue() {editor.setValue("<p>kmas</p>");})();
</script>
</body>
</html>");})();
submitTryit();
/*window.onload = function() {
  setTimeout(hoshi, 1000);
}*/
