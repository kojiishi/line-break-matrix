var ahem = function (dir) {
  var url = dir + "AHEM____.TTF";
  if (window.FontFace) {
    var font = new FontFace("Ahem", "url(" + url + ")");
    document.fonts.add(font);
    return font.load();
  }

  var style = document.createElement("style");
  style.appendChild(document.createTextNode("@font-face{" +
    "font-family:Ahem;" +
    "src:url(" + url + ");}"));
  document.getElementsByTagName('head')[0].appendChild(style);

  if (document.fonts) {
    var ready = document.fonts.ready;
    if (ready)
      return ready;
  }

  console.log("Cannot determine fonts status, wait for 1sec.")
  // if (window.Promise) {
  //   return Promise(function (resolve, reject) {
  //     setTimeout(resolve, 1000);
  //   });
  // }

  return {
    then: function (onResolved) {
      setTimeout(onResolved, 1000);
    }
  }
}
