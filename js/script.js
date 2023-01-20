//Função JQuery que inicializará esse script somente quando o html estiver carregado, sempre usado quando se usa JQuery no projeto.

$(document).ready(function () {
  //Progress bar

  let containerA = document.getElementById("circleA"); //criando a variável que receberá os dados do elemento html de interesse.

  let circleA = new ProgressBar.Circle(containerA, {
    color: "#64DAF9",
    strokeWidth: 8, //largura do circulo
    duration: 1400,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() * 60);
      circle.setText(value);
    }, //O que vai fazer a animação do circle
  }); //Indicando o Objeto que receberá a configuração ProgressBar e o .Circle é o ícone que ele receberá. E dentro das chaves damos a estilização CSS ao elemento ProgressBar.

  let containerB = document.getElementById("circleB");

  let circleB = new ProgressBar.Circle(containerB, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 1600,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() * 254);
      circle.setText(value);
    },
  });

  let containerC = document.getElementById("circleC");

  let circleC = new ProgressBar.Circle(containerC, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 2000,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() * 32);
      circle.setText(value);
    },
  });

  let containerD = document.getElementById("circleD");

  let circleD = new ProgressBar.Circle(containerD, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 2200,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() * 5243);
      circle.setText(value);
    },
  });

  /*Iniciando o loader quando o usuário chega no elemento */

  let dataAreaOffset = $("#data-area").offset();
  let stop = 0;

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop();

    if (scroll > dataAreaOffset.top - 500 && stop == 0) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);

      stop = 1;
    }
  });
});
//Portofolio

$(".filter-btn").on("click", function () {
  let type = $(this).attr("id");
  let boxes = $(".project-box");

  $(".main-btn").removeClass("active");
  $(this).addClass("active");

  if (type == "dsgbtn") {
    eachBoxes("dsg", boxes);
  } else if (type == "devbtn") {
    eachBoxes("dev", boxes);
  } else if (type == "seobtn") {
    eachBoxes("seo", boxes);
  } else {
    eachBoxes("all", boxes);
  }
});
function eachBoxes(type, boxes) {
  if (type == "all") {
    $(boxes).fadeIn();
  } else {
    $(boxes).each(function () {
      if (!$(this).hasClass(type)) {
        $(this).fadeOut("slow");
      } else {
        $(this).fadeIn();
      }
    });
  }
}

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").toggle();
  });
});
