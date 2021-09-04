(function(global){
  //Setup a namespace for our utility
  var ajaxUtils = {};
  //Returns an HTTP request (petición o solicitud) object
  function getRequestObject() {
    if (global.XMLHttpRequest) {
      return (new XMLHttpRequest());
    } else {
      global.alert("The page is not working correctely. Ajax is not supported!");
      return (null);
    }
  }

  //Makes an Ajax GET request to 'requestUrl'
  ajaxUtils.sendGetRequest = function (requestUrl,responseHandler) {
    var request = getRequestObject();
    request.onreadystatechange = function(){
      handleResponse(request, responseHandler);
    };
    request.open("GET",requestUrl,true);
    request.send(null); //for POST only
  };

  //Only calls user provided 'responseHandler'
  //Function if response is ready and not an error;
  function handleResponse(request,responseHandler) {
    if((request.readyState == 4) && (request.status == 200)) {
      responseHandler(request);
    }
  }

  //Expose utility to the global object
  global.$ajaxUtils = ajaxUtils;
})(window);
