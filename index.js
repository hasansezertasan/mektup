const title = document.getElementById("title");
const description = document.getElementById("description");
const submitButton = document.getElementById("copyToClipboard");
const urlParams = new URLSearchParams(window.location.search);
let path = window.location.origin + window.location.pathname;

function updateURL() {
  // Update Document Title
  document.title = title.value + " : " + description.value;
  // Generate Query Params
  var params = new URLSearchParams({
    title: title.value,
    description: description.value,
  });

  let query = params.toString();
  fileName = path.split("/");
  fileName = fileName[fileName.length - 1];
  // Update URL
  history.pushState({}, null, fileName + "?" + query);
}

window.addEventListener("load", (event) => {
  title.value = urlParams.get("title") || "";
  description.value = urlParams.get("description") || "";
});
title.addEventListener("input", (event) => {
  updateURL();
});
description.addEventListener("input", (event) => {
  updateURL();
});
submitButton.addEventListener("click", (event) => {
  navigator.clipboard.writeText(document.location.href);
});

/* START: JQuery Auto Resize */
jQuery.fn.extend({
  autoHeight: function () {
    function autoHeight_(element) {
      return jQuery(element).css({
        'height': 'auto',
        'overflow-y': 'hidden'
      }).height(element.scrollHeight);
    }
    return this.each(function () {
      autoHeight_(this).on('input', function () {
        autoHeight_(this);
      });
    });
  }
});
$('#description').autoHeight();
/* END: JQuery Auto Resize */ 