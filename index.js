// Variables
const my_title = document.getElementById("my_title");
const my_letter = document.getElementById("my_letter");
// Query String when page is loaded
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let path = window.location.origin + window.location.pathname;
let full_url = document.location.href;

function updateValues() {
  var my_title_value = my_title.value;
  var my_letter_value = my_letter.value;
  // Update Title
  document.title = my_title_value + " : " + my_letter_value;

  // Generate Query Params
  var params = new URLSearchParams({
    my_title: my_title_value,
    my_letter: my_letter_value,
  });

  // Full path
  // Generate Query String with params
  let query = params.toString();
  // Get file name
  file_name = path.split("/");
  file_name = file_name[file_name.length - 1];

  //console.log(query);
  //console.log(path)
  //console.log(path+"?"+query)
  full_url = path + "?" + query;

  // Update URL
  history.pushState({}, null, file_name + "?" + query);
}

window.addEventListener("load", (event) => {
  //console.log(queryString);
  var my_title_value = urlParams.get("my_title") || "";
  var my_letter_value = urlParams.get("my_letter") || "";

  // Update Title
  my_title.value = my_title_value;
  //console.log(my_title);

  // Update Letter
  my_letter.value = my_letter_value;
  //console.log(my_letter);

  // Update Values if any
  if (my_title_value != "" || my_letter_value != "") {
    updateValues();
  }
});

function copyToClipboard() {
  navigator.clipboard.writeText(document.location.href);
}
