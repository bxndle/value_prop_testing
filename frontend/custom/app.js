window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createE 1lement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '1825684530987316');
 fbq('track', 'PageView');
</script>

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
