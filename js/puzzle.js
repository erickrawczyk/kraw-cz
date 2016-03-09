(function puzzle(){

  console.log("%cWelcome to DevTools!", "color:red; font-size: 18px;");
  console.log("%cThere might be a clue() lying around!", "color:blue; font-size: 14px;");
})();

function clue() {
  var rand = Math.round(Math.random() * 3);
  switch (rand) {
    case 0:
      console.log('%c' + "I lied I haven't built this yet", "color: red;");
      break;
    case 1:
      console.log('%c' + "I lied I haven't built this yet", "color: red;");
      console.log('');
      break;
    case 2:
      console.log('%c' + "I lied I haven't built this yet", "color: red;");
      console.log('');
      break;
    case 3:
      console.log('%c' + "I lied I haven't built this yet", "color: red;");
      console.log('');
      break;
  }
  return
}
