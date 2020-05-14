var firstName = "";
var lastName = "";
var gender = "";
var address = "";
var terms = "";
var people = [];

document.querySelector("#submit").addEventListener("click", (e) => {
  
  firstName = document.querySelector("#firstName").value;
  lastName = document.querySelector("#lastName").value;
  gender = document.querySelector("input[name=gender]:checked");
  address = document.querySelector("#address").value;
  terms = document.querySelector("input[id=termsAndConditions]:checked");
  if (firstName == "") {
    alert("Enter your first name");
  } else if (lastName == "") {
    alert("Enter your last name");
  } else if (gender == null) {
    alert("Enter your gender");
  } else if (address == "") {
    alert("Enter your home address");
  } else if (terms == null) {
    alert("Please accept our terms and conditions");
  } else {
    gender = gender.value;
    save(firstName, lastName, gender, address);
  }
});

function save(fName, lName, sex, add) {
  var obj = {
    first: fName,
    last: lName,
    gen: sex,
    ad: add,
  };
  people.push(obj);
  //localStorage.setItem("peopleArray", people);
  alert("Congratulations your data was submitted successfully !!!!");
  document.querySelector("form").reset();
  display(people);
}

function display(peo) {
  let item = peo[peo.length - 1];
  let html =
    '<ul class="ulClass" id="dataHead1"><li>%firstname%</li><li>%lastname%</li><li>%gender%</li><li>%address%</li><li><a href="#fixme">EDIT</a></li><li><a href="#fixme" onclick="delete()">DELETE</a></li></ul>';
  html = html.replace("%firstname%", item.first);
  html = html.replace("%lastname%", item.last);
  html = html.replace("%gender%", item.gen);
  html = html.replace("%address%", item.ad);
  document.querySelector("footer").insertAdjacentHTML("beforeend", html);
  var formData = document.querySelectorAll(".ulClass");

  formData.forEach((element) => {
    element.addEventListener("click", mutate);
  });
}

function mutate(e) {
  let typeOfButton = e.target.innerHTML;
  if (typeOfButton == "EDIT") {
    edit(e);
  } else if (typeOfButton == "DELETE") {
    deleteElement(e);
  }
}
function deleteElement(e) {
  e.target.parentElement.parentElement.remove();
}

function edit(element) {
  deleteElement(element);
  let editable = element.target.parentElement.parentElement;
  let editableChildren = Array.from(editable.children);
  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let address = document.querySelector("#address");

  firstName.value = editableChildren[0].innerHTML;
  lastName.value = editableChildren[1].innerHTML;
  address.value = editableChildren[3].innerHTML;
  if (editableChildren[2].innerHTML == "Male") {
    document.querySelector("#Male").checked = true;
  } else {
    document.querySelector("#Female").checked = true;
  }
  terms.checked = true;
}
