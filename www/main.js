$(document).ready(function () {
  $(".text").textillate({
    loop: true,
    sync: true,
    in: {
      effect: "bounceIn",
    },

    out: {
      effect: "bounceOut",
    },
  });
  var siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 900,
    height: 200,
    autoStart: true,
  });

  $(".siri-message").textillate({
    loop: true,
    sync: true,
    in: {
      effect: "fadeInUp",
      sync: true,
    },

    out: {
      effect: "fadeOutDown",
      sync: true,
    },
  });
});
