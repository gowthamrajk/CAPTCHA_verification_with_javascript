const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector("input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-txt");

let allCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
                     'P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d',
                     'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                     't','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9];

function getCaptcha()
{
	$("#alert").show();
	for(let i = 0; i < 6; i++)
	{
		let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
		captcha.innerText += `${randomChar}`;
	}
}

$(".reload-btn").click(function(){
	captcha.innerText = "";
	getCaptcha();
});

checkBtn.addEventListener("click",e=>{
	e.preventDefault();
	statusTxt.style.display = "block";
	let inputVal = inputField.value.split(' ').join(' ');
	if(inputVal == captcha.innerText)
	{
		statusTxt.style.color = "#083b15";
		statusTxt.innerText = "Captcha matched 👍 You are not a robot 👏";
		$("#alert").hide();
		setTimeout(()=>{
			statusTxt.style.display = "";
			inputField.value = "";
			captcha.innerText = "";
			getCaptcha();
		}, 6000);
	}
	else
	{
		statusTxt.style.color = "#a61111";
		$("#alert").hide();
		statusTxt.innerText = "Captcha not matched 👎 Please try again !!!";
	}
})

getCaptcha();