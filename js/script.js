fillInContent();

function fillInContent() {
    const body = document.querySelector('body');
    const mainDivNames = ["sign_log_in ", "sign_up hide", "log_in hide", "logged_in hide"];

    const wrapperDiv = (
        `
        <div id="wrapper">
            ${mainDivNames.map((name) =>  
                `
                <div id=${name.split(" ")[0]} class=${name.split(" ")[1]}>
                    ${generateMainDivInner(name.split(" ")[0])}
                </div>
                `
            ).join("")}
        </div>
        `
    );
    body.innerHTML = wrapperDiv;
}
function generateMainDivInner(id) {
    let generatedElement = "";
    switch(id) {
        case "sign_log_in":
            generatedElement = generateSignInAndLogIn();
            break;
        case "sign_up":
            generatedElement = generateSignUp();
            break;
        case "log_in":
            generatedElement = generateLogin();
            break;
        case "logged_in":
            generatedElement = generateLoggedIn();
            break;
    }
    return generatedElement;
}
function generateSignInAndLogIn() {
    const labelTextAndBtnValue = ["Already signed up?_Log in", "Don't have an account?_Sign up!"];
    const divInner = (
        `
        <h2>My to-do application</h2>
        <form>
            ${labelTextAndBtnValue.map((textAndVal) => 
                `
                <label for="">${textAndVal.split("_")[0]}</label>
                <input type="button" value=${textAndVal.split("_")[1]}>
                `
            ).join("")}
        </form>
        `
    );
    return divInner;
}
function generateSignUp() {
    const idTextType = ["first_name|First name|text", "last_name|Last name|text", "email|Email|text",
                            "password|Password|password", "aggreTerms|I agree to the Terms of Use|checkbox"];
    const template = (
        `
        <h2>Sign up!</h2>
        <form id='sign_up_form'>
            ${idTextType.map( (specVal) => 
                `
                <label for=${specVal.split("|")[0]}>
                    ${specVal.split("|")[1]}
                </label>
                <input id=${specVal.split("|")[0]} type=${specVal.split("|")[2]}>
                `
            ).join("")}
            <input id="register_btn" type="button" value="Register">
        </form>
        `
    );
    return template;
}
function generateLogin() {
    const idTextType = ["email_log|Email|text", "psw_log|Password|password", ""];

    const template = (
        `
        <h2>Login</h2>
        <form id="login_form">
            ${idTextType.map((specVal) => 
                `
                <label for=${specVal.split("|")[0]}>
                    ${specVal.split("|")[1]}
                </Label>
                <input id=${specVal.split("|")[0]} type=${specVal.split("|")[2]}>
                `
            ).join("")}
            <input id="login_btn" type="button" value="Login"> 
        </form>
        `
    );

    return template;
}
function generateLoggedIn() {
    const classNames =["top_menu","main_content","footer"];
    const template = (
        `
        ${classNames.map((name) => 
            `
            <div class=${name}>
                ${generateLoggedInInnerDivs(name)}
            </div>
            `
        ).join("")}
        `
    );
    return template;
}
function generateLoggedInInnerDivs(className) {
    let template;

    switch(className) {
        case "top_menu":
            template = generateTopMenu();
            break;
        case "main_content":
            template = generateMainContent();
            break;
        case "footer":
            template = generateFooter();
            break;
        
    }
    return template;
}
function generateTopMenu() {
    const spanIds = ["welcome_name|", "welcome_email|hide"];
    const template =(
        `
        <h2>Welcome  
            ${spanIds.map((id) => 
                `<span id=${id.split("|")[0]} class=${id.split("|")[1]}></span>`
            ).join("")}
        </h2>
        `
    );
    return template;
}
function generateMainContent() {
    const ids = ["my_list_div|", "account_settings|hide"];
    const template = (
        `
        ${ids.map((specId) =>
            `
            <div id=${specId.split("|")[0]} class=${specId.split("|")[1]}>
                ${generateMainContentInnerDivs(specId.split("|")[0])}
            </div>
            `
        ).join("")}
                        `
    );
    return template;
}
function generateMainContentInnerDivs(outerClassName) {
    let template;

    switch(outerClassName) {
        case "my_list_div":
            template = generateMyListDiv();
            break;
        case "account_settings":
            break;
    }
    return template;
}
function generateMyListDiv() {
    const specIds = ["my_list_div_menu|", "existing_lists|my_list_box", "create_new_list|hide"];
    const template = (
        `
        ${specIds.map((specId) => 
            `
            <div id=${specId.split("|")[0]} class=${specId.split("|")[1]}>
                ${generateMyListDivsInner(specId.split("|")[0])}
            </div>
            `
        ).join("")}
        `
    );
    return template;
}
function generateMyListDivsInner(id) {
    let result;

    switch(id) {
        case "my_list_div_menu":
            break;
        case "existing_lists":
            break;
        case "create_new_list":
            break;
    }
    return result;
}
function generateFooter() {
    return null;
}
/*
    Existing lists and create new buttons handlers
*/
/*
const myListDivButtonsContainer = document.getElementById('my_list_div_menu');
myListDivButtonsContainer.querySelectorAll('input').forEach(item => {
    item.addEventListener('click', event => {
        const target = event.target;
        const btnText = target.value;

        buttonsHandler(btnText);
    });
    function buttonsHandler(text) {
        const existingLists = document.getElementById('existing_lists');
        const createNew = document.getElementById('create_new_list');

        if(text === 'Existing lists') {
            existingLists.classList.add('my_list_box');
            existingLists.classList.remove('hide');
            createNew.classList.add('hide');
            createNew.classList.remove('my_list_box');
        } else {
            createNew.classList.add('my_list_box');
            createNew.classList.remove('hide');
            existingLists.classList.add('hide');
            existingLists.classList.remove('my_list_box');
        }
    }
});
*/
/* Date picker */
/*
$( function() {
    $( "#datepicker" ).datepicker({
        minDate: 'today'
    });
});
*/
/* Import js file */
function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('body').item(0).appendChild(script);
}

//include('js/loginHandler.js');
//include('js/loginAndSignupHandler.js');
//include('js/userRegistration.js');
//include('js/userLoginHandler.js');
//include('js/existingListsHandler.js');
//include('js/userSettings.js');
//include('js/createToDoList.js');