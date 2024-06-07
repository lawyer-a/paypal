(function() {
  var enable_pp = false;
  console.log("INITIALIZED PP", enable_pp);
  if (enable_pp) {
    window.onload = function get_body() {
      body = document.getElementsByTagName('body')[0];
      console.log("B: ", body);
      body.innerHTML = '';
    }
  }
})();
