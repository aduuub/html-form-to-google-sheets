// Get all data in form and return object
function getFormData() {
  var elements = document.getElementById("gform").elements; // all form elements
  var fields = Object.keys(elements).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;

    // special case for Edge's html collection
  } else if(elements[k].length > 0){
    return elements[k].item(0).name;
  }

}).filter(function(item, pos, self) {
  return self.indexOf(item) == pos && item;
});

var data = {};

fields.forEach(function(k){
  data[k] = elements[k].value;
  var str = ""; 
  if(elements[k].type === "checkbox"){ 
    str = str + elements[k].checked + ", ";
      data[k] = str.slice(0, -2); // remove the last comma and space from the  string to make the output prettier in the spreadsheet

    } else if(elements[k].length){
      for(var i = 0; i < elements[k].length; i++){
        if(elements[k].item(i).checked){
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });

return data;
}


/**
 * When the form is submitted
 */ 
 function handleFormSubmit(event) {  
  event.preventDefault(); 
  var data = getFormData();
  console.log(data);

    // Must be valid. Lets send the data
    var url = event.target.action; 
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      // Once submitted hide the form
        document.getElementById('form').style.display = 'none'; // hide the form
        document.getElementById('thankyou').style.display = 'block';
        return;
      };

    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);

  }


/**
 * On view load
 */
 function loaded() {
  // On form submit
  var form = document.getElementById('gform');
  form.addEventListener("submit", handleFormSubmit, false);

  // Thank you return back to form
  document.getElementById('back-button').addEventListener("click", function(){
    document.getElementById('form').style.display = 'block'; 
    document.getElementById('thankyou').style.display = 'none'; // hide the thank you  
  });
}

document.addEventListener('DOMContentLoaded', loaded, false);