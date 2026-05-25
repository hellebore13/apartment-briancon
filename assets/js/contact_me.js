$(function() {
  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {},
    submitSuccess: function($form, event) {
      event.preventDefault();

      var $form = $("#contactForm");
      var username = $("input#username").val();
      var isFrench = document.documentElement.lang === "fr";
      var $button = $("#sendMessageButton");

      if (username !== "") {
        return;
      }

      $button.prop("disabled", true);

      $.ajax({
        url: $form.attr("action"),
        type: "POST",
        dataType: "json",
        data: $form.serialize(),
        cache: false,
        success: function() {
          $("#success").html("<div class='alert alert-success'>");
          $("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $("#success > .alert-success")
            .append("<strong>" + (isFrench ? "Votre demande a ete envoyee." : "Your inquiry has been sent.") + "</strong>");
          $("#success > .alert-success").append("</div>");
          $form.trigger("reset");
        },
        error: function() {
          $("#success").html("<div class='alert alert-danger'>");
          $("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $("#success > .alert-danger")
            .append($("<strong>").text(isFrench ?
              "La demande n'a pas pu etre envoyee. Veuillez reessayer ou ecrire directement a hellebore13@gmail.com." :
              "The inquiry could not be sent. Please try again or email hellebore13@gmail.com directly."));
          $("#success > .alert-danger").append("</div>");
        },
        complete: function() {
          setTimeout(function() {
            $button.prop("disabled", false);
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

$("#name").focus(function() {
  $("#success").html("");
});
