function ahemFont(dir) {
    return loadFont("Ahem", dir + "AHEM____.TTF");
}

function testfwFont(dir) {
    return loadFont("testfw", dir + "CSSFWOrientationTest.otf");
}

function loadFont(name, url) {
  // Try CSS Font Loading API
  if (window.FontFace) {
    var font = new FontFace(name, "url(" + url + ")");
    document.fonts.add(font);
    return font.load();
  }

  // Try CSS Fonts next
  var style = document.createElement("style");
  style.appendChild(document.createTextNode("@font-face{" +
    "font-family:" + name + ";" +
    "src:url(" + url + ");}"));
  document.getElementsByTagName('head')[0].appendChild(style);

  if (document.fonts) {
    var ready = document.fonts.ready;
    if (ready)
      return ready;
  }

  // Last resort, wait for 1 sec using Promise
  if (false && window.Promise) {
    console.log("Cannot determine fonts status, wait for 1sec using Promise.")
    return Promise(function (resolve, reject) {
      setTimeout(resolve, 1000);
    });
  }

  // Last resort, wait for 1 sec for IE.
  console.log("Cannot determine fonts status, wait for 1sec.")
  return {
    then: function (onResolved) {
      setTimeout(onResolved, 1000);
    }
  }
}
