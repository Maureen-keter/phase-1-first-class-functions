function receivesAFunction(callback){
callback();
}
function callingBack(){
    console.log("icalling");
}
receivesAFunction(callingBack);


function returnsANamedFunction() {
    function namingFunction() {
      console.log("This is a named function.");
    }
    return namingFunction;
  }

  returnsANamedFunction()


  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  returnsAnAnonymousFunction()