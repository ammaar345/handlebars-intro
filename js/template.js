var templateSource = document.querySelector(".costTemplate").innerHTML;
var pricesAll = document.querySelector(".result2");
var pricesAll2 = document.querySelector(".result1")
// compile the template

var userTemplate = Handlebars.compile(templateSource);