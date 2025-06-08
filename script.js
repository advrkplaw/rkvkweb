    $(document).ready(function() {
      myVivus = new Vivus('devists', {
        duration: 350,
        type: 'oneByOne',
        animTimingFunction: Vivus.EASE_OUT_BOUNCE,
        onReady: function() {
          console.log("Starting Animation");
        }
      }, function() {
        console.log("Animation Over");
        $('#devists path').css({
          "fill-opacity": "1",
          "transition": "fill-opacity"
        });
        $('.wcs-text').css({
          "opacity": "1"
        });
      });
      $('body').on('click', "#devists", function(event) {
        event.preventDefault();
        console.log("Redrawing");
        $(this).find("path").css({
          "fill-opacity": "0"
        });
        myVivus
          .stop()
          .reset()
          .play();
      });
    });