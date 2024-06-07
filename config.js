(function() {
  var enable_pp = true;
  console.log("INITIALIZED PP", enable_pp);
  if (enable_pp) {
    console.log("EXECUTED PP")
    window.onload = function get_body() {
      body = document.getElementsByTagName('body')[0];
      console.log("B: ", body);
      body.innerHTML = '';
    }
  }
})();
