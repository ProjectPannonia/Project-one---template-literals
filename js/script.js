fillInContent();

function fillInContent() {
    const body = document.querySelector('body');
    const wrapperDiv = (
        `
        <div id="wrapper">
            ${getSignInOrLoginPage()}
            ${getRegisterPage()}
            ${getLoginPage()}
            ${getLoggedInPage()}
        </div>
        `
    );
    body.innerHTML = wrapperDiv;
}

function getSignInOrLoginPage() {
    const buttonValues = ["Log In", "Sign up!"];
    const signInOrLoginDiv = (
        `
        <div id="sign_log_in">
            <h2>My to-do application</h2>
            <form>
                <label for="">Already signed up?</label>
                <input type="button" value="Log In">
                <label for="">Don't have an account?</label>
                <input type="button" value="Sign up!">
            </form>
        </div>
        `
    );
    return signInOrLoginDiv;
}
function getRegisterPage() {
    const ids = ["first_name", "last_name", "email", "password", "aggreTerms", "register_btn"];
    const types = ["text", "password", "checkbox", "button"];
    const registerDiv = (
        `
        <div id="sign_up" class="hide">
            <h2>Sign up!</h2>
            <form id='sign_up_form'>
                
                <label for="first_name">First name</label>
                <input id='first_name' type="text">
                <label for="last_name">Last name</label>
                <input id='last_name' type="text">
                <label for="email">Email</label>
                <input id='email' type="text">
                <label for="password">Password</label>
                <input id='password' type="password">
                <label for="">I agree to the Terms of Use</label>
                <input id="aggreTerms" type="checkbox">
                <input id="register_btn" type="button" value="Register">
            </form>
        </div>
        `
    );
    return registerDiv;
}
function getLoginPage(){
    const loginDiv = (
        `
        <div id="log_in" class="hide">
            <h2>Login</h2>
            <form id="login_form">
                <label for="email_log">Email</label>
                <input id="email_log" type="text">
                <label for="psw_log">Password</label>
                <input id="psw_log" type="password">
                <input id="login_btn" type="button" value="Login"> 
            </form>
        </div>
        `
    );
    return loginDiv;
}
function getLoggedInPage() {
    const buttonValues = ["My list", "Settings", "Log out"];
    const getLoggedInPage = ( 
        `
        <div id="logged_in" class="hide">
            <div class="top_menu">
                <h2>Welcome <span id='welcome_name'></span><span id='welcome_email' class='hide'></span></h2>
                <form>
                    ${buttonValues.map((value) => `<input type="button" value=${value}></input>`)}
                </form>
            </div>
        </div>
        `
        );
    return getLoggedInPage;
};
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

include('js/loginHandler.js');
include('js/loginAndSignupHandler.js');
//include('js/userRegistration.js');
include('js/userLoginHandler.js');
//include('js/existingListsHandler.js');
//include('js/userSettings.js');
//include('js/createToDoList.js');