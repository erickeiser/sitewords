$(document).ready(function () {
  $(
    ".list-two, .list-three, .list-four, .button-one, .button-two, .button-three, #congrats, .secondSet, .thirdSet, .fourthSet, #world, .correct, .buttonPageThree, .buttonPageFour"
  ).hide();
  $correct = "div > .correct > grid-item";

  $countOne = $("div > .grid-item");
  $countTwo = $("div > .grid-item-2");
  $countThree = $("div > .grid-item-3");
  $countFour = $("div > .grid-item-4");

  $(".value").text($countOne.length);

  $(".grid-item").click(function () {
    $correct = $("div > grid-item-correct");
    $(this).remove("div > .grid-item");
    // $(this).css('opacity','0')
    $countOne = $(".list-one > div");
    $(".value").text($countOne.length);

    if ($countOne.length == 0) {
      $("#list-one").remove();
      $(".value").hide();
      $(".firstSet").remove();
      $("#congrats").show();
      $(".button-one").fadeIn(1000);
    }
    
  });

  $(".button-one").click(function () {
    console.log("button clicked");
    $("#congrats").hide();
    $(".button-one").hide();
    $(".firstSet").hide();
    $(".secondSet").show();
    $(".list-two").show();
    
    $(".value-2").text($countTwo.length);
  }); // end of list one

  // beginning of list two

  $(".grid-item-2").click(function () {
    $(this).remove("div > .grid-item-2");
    $countTwo = $(".list-two > div");
    $(".value-2").text($countTwo.length);

    if ($countTwo.length == 0) {
      $(".list-two").remove();
      $(".value-2").hide();
      $(".secondSet").hide();
      $("#congrats").show();
      $(".button-two").fadeIn(1000);
    }
  });

  $(".button-two").click(function () {
    $("#congrats").hide();
    $(".button-two").hide();
    $(".list-three").show();
    $(".thirdSet").show();
    $(".value-3").text($countThree.length);
    console.log("button clicked");
  }); // end list two

  // begin list three
  $(".grid-item-3").click(function () {
    $(this).remove("div > .grid-item-3");
    $countThree = $(".list-three > div");
    $(".value-3").text($countThree.length);

    if ($countThree.length == 0) {
      $(".list-three").remove();
      $(".value-3").hide();
      $("#congrats").show();
      $(".button-three").fadeIn(1000);
      $(".thirdSet").hide();
    }
  });

  $(".button-three").click(function () {
    $("#congrats").hide();
    $(".button-three").hide();
    $(".list-four").show();
    $(".fourthSet").show();
    $(".value-4").text($countThree.length);
    console.log("button clicked");
  }); // end list three

  // Start list Four
  $(".grid-item-4").click(function () {
    $(this).remove("div > .grid-item-4");
    $countFour = $(".list-four > div");
    $(".value-4").text($countFour.length);

    if ($countFour.length == 0) {
      $(".list-four").remove();
      $(".value-4").hide();
      // $("#congrats").show();
      $(".fourthSet").hide();
      $("#world").show();
    }
  });

  $(".button-three").click(function () {
    $("#congrats").hide();
    $(".button-three").hide();
    $(".list-four").show();
    $(".value-4").text($countFour.length);
    console.log("button clicked");
  });

  // FORWARD AND BACKWARD BUTTONS
  $(".buttonPageTwo").click(function () {
    $("#congrats").hide();
    $(".list-one").hide();
    $(".list-two").show();
    $(".firstSet").hide();
    $(".secondSet").show();
    $(".value-2").text($countTwo.length);
    
    $('.buttonPageThree').show()
  });
  
  // $(".buttonPageThree").click(function () {
  //   $("#congrats").hide();
  //   $(".list-two").hide();
  //   $(".list-three").show();
  //   $(".secondSet").hide();
  //   $(".thirdSet").show();
  //   $(".value-3").text($countThree.length);
  //   $(".buttonPageThree").hide();
  //   $('.buttonPageFour').show()
  // });

  // COLOR GENERATOR
  let colorOne = ["#55efc4", "#81ecec", "#74b9ff", "#a29bfe", "#fd79a8"];
  let colorTwo = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#16a085"];
  let colorThree = ["#f6e58d", "#f9ca24", "#7ed6df", "#22a6b3", "#ffbe76"];
  let colorFour = ["#00a8ff", "#0097e6", "#e84118", "#c23616", "#9c88ff"];
  let colorFive = ["#ff9ff3", "#f368e0", "#00d2d3", "#01a3a4", "#feca57"];
  let colors = colorOne[Math.floor(Math.random() * colorOne.length)];
  $(".cOne").each(function () {
    $(this).css("background-color", colors);
  });

  colors = colorTwo[Math.floor(Math.random() * colorTwo.length)];
  $(".cTwo").each(function () {
    $(this).css("background-color", colors);
  });

  colors = colorThree[Math.floor(Math.random() * colorThree.length)];
  $(".cThree").each(function () {
    $(this).css("background-color", colors);
  });

  colors = colorFour[Math.floor(Math.random() * colorFour.length)];
  $(".cFour").each(function () {
    $(this).css("background-color", colors);
  });

  colors = colorFive[Math.floor(Math.random() * colorFive.length)];
  $(".cFive").each(function () {
    $(this).css("background-color", colors);
  });

  //CONFETTI AT THE END
  (function () {
    var COLORS,
      Confetti,
      NUM_CONFETTI,
      PI_2,
      canvas,
      confetti,
      context,
      drawCircle,
      i,
      range,
      resizeWindow,
      xpos;

    NUM_CONFETTI = 350;

    COLORS = [
      [85, 71, 106],
      [174, 61, 99],
      [219, 56, 83],
      [244, 92, 68],
      [248, 182, 70],
    ];

    PI_2 = 2 * Math.PI;

    canvas = document.getElementById("world");

    context = canvas.getContext("2d");

    window.w = 1080;

    window.h = 500;

    resizeWindow = function () {
      window.w = canvas.width = window.innerWidth;
      return (window.h = canvas.height = window.innerHeight);
    };

    window.addEventListener("resize", resizeWindow, false);

    window.onload = function () {
      return setTimeout(resizeWindow, 0);
    };

    range = function (a, b) {
      return (b - a) * Math.random() + a;
    };

    drawCircle = function (x, y, r, style) {
      context.beginPath();
      context.arc(x, y, r, 0, PI_2, false);
      context.fillStyle = style;
      return context.fill();
    };

    xpos = 0.5;

    document.onmousemove = function (e) {
      return (xpos = e.pageX / w);
    };

    window.requestAnimationFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          return window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    Confetti = class Confetti {
      constructor() {
        this.style = COLORS[~~range(0, 5)];
        this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
        this.r = ~~range(2, 6);
        this.r2 = 2 * this.r;
        this.replace();
      }

      replace() {
        this.opacity = 0;
        this.dop = 0.03 * range(1, 4);
        this.x = range(-this.r2, w - this.r2);
        this.y = range(-20, h - this.r2);
        this.xmax = w - this.r;
        this.ymax = h - this.r;
        this.vx = range(0, 2) + 8 * xpos - 5;
        return (this.vy = 0.7 * this.r + range(-1, 1));
      }

      draw() {
        var ref;
        this.x += this.vx;
        this.y += this.vy;
        this.opacity += this.dop;
        if (this.opacity > 1) {
          this.opacity = 1;
          this.dop *= -1;
        }
        if (this.opacity < 0 || this.y > this.ymax) {
          this.replace();
        }
        if (!(0 < (ref = this.x) && ref < this.xmax)) {
          this.x = (this.x + this.xmax) % this.xmax;
        }
        return drawCircle(
          ~~this.x,
          ~~this.y,
          this.r,
          `${this.rgb},${this.opacity})`
        );
      }
    };

    confetti = (function () {
      var j, ref, results;
      results = [];
      for (
        i = j = 1, ref = NUM_CONFETTI;
        1 <= ref ? j <= ref : j >= ref;
        i = 1 <= ref ? ++j : --j
      ) {
        results.push(new Confetti());
      }
      return results;
    })();

    window.step = function () {
      var c, j, len, results;
      requestAnimationFrame(step);
      context.clearRect(0, 0, w, h);
      results = [];
      for (j = 0, len = confetti.length; j < len; j++) {
        c = confetti[j];
        results.push(c.draw());
      }
      return results;
    };

    step();
  }.call(this));
}); // end ready function
