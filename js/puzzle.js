(function puzzle(){
  console.log("%cSnooping around, are you?", "color:red; font-size: 24px;");
  console.log("%cAre you one of those %cdevelopers?", "color:blue; font-size: 18px;", "color:red; font-size: 18px; font-style:italic;");
  console.log("%cFollow the trail of breadcrumbs() and you might find something!", "color:green; font-size: 14px;");
})();

function breadcrumbs() {
  return console.log('%c' + "I lied I haven't built this yet 😢 I'm so sorry ", "color: red;");
}
