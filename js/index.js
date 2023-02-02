window.onload = function () {
  var odiv = document.getElementById("change-div");
  var t = null;
  var alpha = 0;
  var bShow = true;
  var ray = "";

  ray = setInterval(function () {
    if (bShow) {
      rayMove(100);
    } else {
      rayMove(50);
    }

    bShow = !bShow;

    function rayMove(iTarget) {
      if (t) clearInterval(t);
      t = setInterval(function () {
        startOP(odiv, iTarget);
      }, 30);
    }

    function startOP(obj, utarget) {
        var speed = 0;
        if (alpha < utarget) {
          speed = 2;
        } else {
          speed = -2;
        }
        alpha += speed;
        
        obj.style.filter = "alpha(opacity:" + alpha + ")"; //基于IE的
        obj.style.opacity = parseInt(alpha) / 100;
    }
  }, 1500);
};
