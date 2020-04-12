// var count=0;
// var lowerbtn = document.querySelector(".lower-count");
// lowerbtn.addEventListener("click",()=>{
//     if(count > 0){
//         count--;
//         document.querySelector(".counter p").innerText = count;
//     }
//     else{
//         lowerbtn.disabled = true;
//         lowerbtn.classList.add("opacButton");
//     }
    
// });
// document.querySelector(".add-count").addEventListener("click",()=>{
//     if(count>0){
//         lowerbtn.disabled = false;
//         lowerbtn.classList.remove("opacButton");
//     }
//     count++;
//     document.querySelector(".counter p").innerText = count;
// });


// document.querySelector(".counter p").innerText = count;








// Selecting Required Buttons to Count
const buttons = Array.from(document.querySelectorAll('button'));
let countContainer = document.querySelector('.counter p');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		if(e.target.classList.contains('add-count')) {
			countContainer.innerText++;
		} else if(e.target.classList.contains('lower-count')) {
			if(countContainer.innerText == 0) {
				e.preventDefault();
			} else {
				countContainer.innerText --;
			}
		}
})
})











