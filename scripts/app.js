function prog() {
  let btnAdd = document.getElementById("btn-add");
  let cnt = 0;
  let btnShow = document.getElementById("show")

  btnAdd.onclick = function () {
    cnt++;
    let newP = document.createElement('p');
    let nextDate = document.createElement('input');
    nextDate.type = "text";
    nextDate.id = "nextDate";
    document.body.appendChild(newP);
    document.body.appendChild(nextDate);

    btnShow.onclick = function () {
      alert(nextDate.value);
    };
  };
}

prog();
