/* Author: 

*/
// Person Details
var persondetails = [];
var ulAll = [];
var i = 0;
var footer = document.querySelector('footer');
document.querySelector(".form-control input:first-of-type").addEventListener('click',fetchData);

// fetching of data
function fetchData (e) {
  e.preventDefault();
  var checked_gender = document.querySelector('input[name = "gender"]:checked');
  var checked_Terms = document.getElementById('Terms');
  console.log(checked_Terms);
  if(checked_gender != null) { var gdData = checked_gender.value;} 
  var person = {
  fName : document.querySelector("#firstName").value,
  lName : document.querySelector("#lastName").value,
  genderdata : gdData,
  addressdata : document.querySelector("#address").value
  }

// Validation of data
  if (person.fName.value == "" || person.lName.value == "" || person.genderdata == undefined ||
  checked_Terms.checked == false|| person.addressdata.value == "") { ErrorMsg(); }
  else {
  persondetails.push(person);
  alert("your Data submitted successfully");
  document.querySelector('form').reset();
  displayData();
  }
}

// Display Error Message
function ErrorMsg() { alert("fill the form first");}

// Display data
function displayData () {
  debugger;
  var ulNode = document.createElement("ul");

  for (var Characteristics in persondetails[persondetails.length-1]) {
    var liNode = document.createElement("li");
    liNode.textContent = (persondetails[persondetails.length-1][Characteristics]);
    ulNode.appendChild(liNode);
  }
  // Edit Anchor
  var liNode5 = document.createElement("li");
  var anchorNode1 = document.createElement("a");
  anchorNode1.textContent = 'Edit';
  liNode5.appendChild(anchorNode1);
  ulNode.appendChild(liNode5);
  anchorNode1.setAttribute("href","#FIXME");

// Delete Anchor
  var liNode6 = document.createElement("li");
  var anchorNode2 = document.createElement("a");
  anchorNode2.textContent = 'Delete';
  liNode6.appendChild(anchorNode2); 
  ulNode.appendChild(liNode6);
  anchorNode2.setAttribute("href","#FIXME");
 
  var footerNode = document.querySelector("footer");
  footerNode.appendChild(ulNode);
  anchorNode2.addEventListener('click',deleteData);
  anchorNode1.addEventListener('click',editData);
}

//  Edit data
function editData() {
  debugger;
  buttonClickedforEdit = true;
  var editDetails = [];
  var footerUl = document.querySelectorAll("footer ul:not(:first-child)");
  var firstName = document.querySelector("#firstName");
  var lastName = document.querySelector("#lastName");
  var Male = document.querySelector("#Male");
  var Female = document.querySelector("#Female");
  var Address = document.querySelector("#address");
  for(var k = 1; k < footerUl.length; k++) {
    ulAll.push(footerUl[k]);
  }
  for(var s = 0; s < footerUl.length; s++) {

    footerUl[s].onclick = function() {
      var editThisUl = ulAll.indexOf(this);
      for (var Characteristics in persondetails[editThisUl]) {
        editDetails.push(persondetails[editThisUl][Characteristics]);
        delete persondetails[editThisUl][Characteristics];
      }
      firstName.value = editDetails[0];
      lastName.value = editDetails[1];
     if(editDetails[2] == "Male") {
        Male.checked = true;
      } else {
        Female.checked = true;
      }
        Address.value = editDetails[3];
        i++;
        footer.removeChild(this);
    } 
  }
}
// Delete data
function deleteData() {
  debugger;
  var footerUl = document.querySelectorAll("footer ul:not(:first-child)");
  var footer = document.querySelector('footer');
  for(var li = 0; li < footerUl.length; li++) {
    footerUl[li].onclick = function() {
      footer.removeChild(this);
    }
  }
} 






















