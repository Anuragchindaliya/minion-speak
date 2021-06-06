var btnTranslate = document.querySelector("#btnTranslate");
var txtinput = document.querySelector("#txt-input");
var output = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";
var error_msg = document.querySelector("#error_msg")
var input_error = document.querySelector("#input_error")


function constructURL(text) {
  text = encodeURI(text)
  return serverURL + "?text=" + decodeURI(text);
}
function errorhandler(error) {
  
  console.log("error occurred ", error);
  alert("something went wrong with server! try again after some time");
}

function handleClickEvent() {
  //   output.innerText = "bananan lahanuag " + txtinput.value;

  var inputTxt = txtinput.value; //taking input
  if ((inputTxt == "")) {
    input_error.innerText="Please fill this input box";
    setTimeout(()=>input_error.innerText="",4000)
    
    // setInterval(()=>input_error.innerText="",2000);
    
  } else {
    
    fetch(constructURL(inputTxt)) //process
      .then((response) => response.json())
      .then(
        (json) => {
          if(json.contents){
            output.textContent = json.contents.translated
          }else{
            output.textContent = json.error.message
          }
          
         } //output
        // (json) => console.log(json.contents.translated)
      )
      .catch(errorhandler);
  }
}
btnTranslate.addEventListener("click", handleClickEvent);

