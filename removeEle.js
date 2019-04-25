(function() {
  let $ = function(el) {
    return document.querySelector(el);
  };
  console.log(" start ");
  let par1 = $("#sinaadToolkitBox0");
  let par2 = $("#map");
  if ((par1, par2)) {
    document.body.removeChild(par1);
    document.body.removeChild(par2);
  }
})();
