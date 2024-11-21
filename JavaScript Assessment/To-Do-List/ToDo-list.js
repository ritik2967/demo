let array = [];

function ToDo() {
  let a = document.getElementById("val1").value;

  array.push(a);

  let html = "";

  array.map((item, index) => {
    html +=
      " <li>  " +
      (index + 1) +
      " " +
      item +
      "<i class='fa-solid fa-trash delete' style='color: #d50707;'  id='" +
      index +
      "'></i></li>";
  });

  document.getElementById("ToDo-list").innerHTML = html;
  document.getElementById("val1").value = "";

  document.querySelectorAll(".delete").forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item.id);
      array = array.filter((el, index) => index != Number(item.id));
      let html = "";
      array.map((item, index) => {
        html +=
          " <li>  " +
          (index + 1) +
          " " +
          item +
          "<i class='fa-solid fa-trash delete' style='color: #d50707;'  id='" +
          index +
          "'></i></li>";
      });
      document.getElementById("ToDo-list").innerHTML = html;
    });
  });
}
