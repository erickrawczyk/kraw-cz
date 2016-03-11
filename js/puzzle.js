(function puzzle(){
  console.log("%cSnooping around, are you?", "color:red; font-size: 24px;");
  console.log("%cAre you one of those %cdevelopers?", "color:blue; font-size: 18px;", "color:red; font-size: 18px; font-style:italic;");
  console.log("%cFollow the trail of breadcrumbs() and you might find something!", "color:green; font-size: 14px;");
})();

function breadcrumbs() {
  var rand = Math.round(Math.random() * 3);
  switch (rand) {
    case 0:
      console.log('%c' + "I'm sorry I lied I haven't built this yet :(", "color: red;");
      break;
    case 1:
      console.log('%c' + "I'm sorry I lied I haven't built this yet :(", "color: red;");
      break;
    case 2:
      console.log('%c' + "I'm sorry I lied I haven't built this yet :(", "color: red;");
      break;
    case 3:
      console.log('%c' + "I'm sorry I lied I haven't built this yet :(", "color: red;");
      break;
  }
  return
}
