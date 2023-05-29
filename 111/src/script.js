document.write("我是 何欣儒 ")
var count = 0;
    var counterElement = document.getElementById("counter");

    function increment() {
      count+=2;
      counterElement.textContent = count;
    }