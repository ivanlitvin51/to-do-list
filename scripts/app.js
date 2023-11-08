function prog() {
  let btnAdd = document.querySelector('button[id$="btn-add"]');
  let cnt = 0;
  let btnShow = document.getElementById("btn-show");
  let btnShowAll = document.getElementById("btn-show-all");
  //let btnShowDate = document.getElementById("btn-show-date");

  btnAdd.onclick = function () {
    cnt++;
    let nextDiv = document.createElement('text');
    let newP = document.createElement('p');
    let nextDate = document.createElement('input');
    nextDiv.textContent = `${cnt}. `;
    nextDiv.id = "nextDiv";
    nextDate.type = "text";
    nextDate.id = "date";
    document.body.appendChild(nextDiv);
    document.body.appendChild(nextDate);
    document.body.appendChild(newP);

    btnShow.onclick = function () {
      alert(nextDate.value);
    };

    btnShowAll.onclick = function () {
      let elements = document.querySelectorAll('input');
      for (let elem of elements) {
        alert(elem.value);
      }
    }

    // btnShowDate.onclick = function () {
    //   let elements = document.querySelectorAll('input');
    //   let num = +prompt("Какой номер?");
    //   }
    // }
  }
}

prog();
