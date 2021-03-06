window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function urlencodeFormData(fd){
    var s = '';
    function encode(s){ return encodeURIComponent(s).replace(/%20/g,'+'); }
    for(var pair of fd.entries()){
        if(typeof pair[1]=='string'){
            s += (s?'&':'') + encode(pair[0])+'='+encode(pair[1]);
        }
    }
    return s;
}

var submitForm = function (value) {
  var formElement = document.querySelector("#signup-form");
  var data = new FormData(formElement);

  data.append('value_prop', value.toString());

  var request = new XMLHttpRequest();
  request.open("POST", "/api/signup");
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.send(urlencodeFormData(data));

  location.reload();
}

var submitEmail = function (value) {
  var email = document.querySelector("#email-signup-form").elements[0].value;
  var url = '/api/justemail/' + email + '/' + value.toString();

  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.send();

  location.reload();
}

var button = document.getElementById('submit-button');
button.addEventListener(
  'click',
  function() {
    fbq('track', 'joinBeta', {
      value_prop: value_prop_id
    });
  },
  false
);
