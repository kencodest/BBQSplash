let emailCollectorForm = document.getElementById("emailCollector")

emailCollectorForm.addEventListener("submit", function(event){
    //prevent default behaviour
    event.preventDefault()

    let ourFormData = new FormData(event.target)

    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")

    // console.log(validateEmail(userEmailAddress))

    if (validateEmail(userEmailAddress)) {
        console.log(userEmailAddress)
        let updatedHtmlContent = `
            <h2 class="content-header">Congratulations, ${userFirstName}!</h2>
            <p class="content-main">You are on your way to becoming a BBQ Master!</p>
            <p class="fine-print">Additionally, you will get weekly BBQ tips sent to: <strong>${userEmailAddress}</strong></p>
    `
        // userEmailAddress.classList.add("email-color")      

        let ourMainContent = document.getElementById("mainContent")
        // let ourMainContent = document.getElementsByClassName("content") //this returns a nodeList and not an element
        //to use it with innerHTML, you have to use ourMainContent[0].innerHTML
        //this way we can access the first element in the nodeList

    ourMainContent.innerHTML = updatedHtmlContent

    }
    


})

//Email validation function
function validateEmail(email){
    
    //the regex
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(email.match(mailformat)){
        // alert("You have entered a valid email address")
        // document.form1.text1.focus();
        return true
    }else {
        document.getElementById("email-error").textContent = "Please enter a valid email address"
        document.getElementById("email").classList.add("active")
        return false
    }
}

/*Footer*/
const date = new Date()
const year = date.getFullYear()
document.querySelector('.footer-secondary').innerHTML = `<p><span>&copy;</span> ${year} All Rights Reserved | <a target="_blank" href="https://github.com/kencodest/BBQSplash">kencodest</a></p>`