(function() {
  document.body.style.background = "red";
  const cl = document.body.children.length;
  if (cl) {
    const p = document.createElement("p");
    p.innerHTML = "hello.";
    document.body.insertBefore(p, document.body.children[0]);
  }
  document.write("<p>hello.</p>");
})();
