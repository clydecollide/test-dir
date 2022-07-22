function onChangeHandler(selectObject) {
  var value = selectObject.value;
  console.log(value);
}

document.addEventListener("readystatechange", (event) => {
  let select = document.getElementById("npc-select");
  console.log(select);
  console.log(characters);
});
