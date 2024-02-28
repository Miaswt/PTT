const textConfig = {
  text1: '"I open at the Close"',
  text3: "Will you go on a date with me?",
  text5: "Nah",
  text6: "Yes ^^",
  text7: "Congratulation! Your choice is very good :D",
  text10: "Why don't you text me yet baby boo?",
  text12: "Apparate!",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      // title: textConfig.text1,
      text: textConfig.text2,
      // imageUrl: "img/goldenSnitch.png",
      // imageWidth: 280,
      // imageHeight: 280,
      html: "<div><img src='img/goldenSnitch.png'/><h2>'I open at the Close'</h2></div>",
      background: 'transparent',
      imageAlt: "Custom image",
      confirmButtonText:"Aparecium",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    
    $("#no").css("position", "absolute");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    // var audio = new Audio("sound/tick.mp3");
    // audio.play();
    // $("#gifImage").css("display", 'none');
    // $("#yes").css("display", 'none');
    // $("#no").css("display", 'none');
    // $("#text3").css("display", 'none');
    // $("#text4").css("display", 'none');
    // Swal.fire({
    //   // title: textConfig.text7,
    //   html: true,
    //   width: 900,
    //   height: 500,
    //   padding: "3em",
    //   html: '<div><img src="img/goldenSnitch.png"/></div>',
    //   // imageUrl: "img/goldenSnitch.png",
    //   background: "transparent",
    //   showCancelButton: false,
    //   // confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   // confirmButtonColor: "#fe8a71",
    //   cancelButtonColor: "#f6cd61",
    //   showConfirmButton: false,
    //   // confirmButtonText: textConfig.text8,
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      // text: textConfig.text10,
      // html: true,
      width: 900,
      padding: "3em",
      html: "<p style='font-size: 25px'>Why don't you text me yet cutie?</p>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text12,
      onClose: () => {
        window.location = "http://fb.com";
      },
    })
    // .then((result) => {
      
    //   if (result.value) {
        
    //     Swal.fire({
    //       width: 900,
    //       confirmButtonText: textConfig.text12,
    //       background: '#fff url("img/iput-bg.jpg")',
    //       title: textConfig.text10,
    //       text: textConfig.text11,
    //       confirmButtonColor: "#83d0c9",
    //       onClose: () => {
    //         window.location = "http://fb.com";
    //       },
    //     });
    //   }
    // });
    
    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
