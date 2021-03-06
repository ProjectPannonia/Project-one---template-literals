(() => {
    const scripts = ["js/loggedInTopmenuHandler.js", "js/loginHandler.js", "js/loginAndSignupHandler.js", "js/userRegistration.js", "js/userLoginHandler.js", "js/existingListsHandler.js", "js/userSettings.js", "js/createToDoList.js"];
    scripts.forEach((path) => {
        include(path);
    });
    htmlGenerator();
})();

function htmlGenerator() {
    const body = document.querySelector('body');
    const mainDivNames = ["sign_log_in|", "sign_up|hide", "log_in|hide", "logged_in|hide"];

    const wrapperDiv = (
        `
        <div id="wrapper">
            ${mainDivNames.map((name) =>  
                `
                <div id=${name.split("|")[0]} class=${name.split("|")[1]}>
                    ${generateMainDivInner(name.split("|")[0])}
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
    const labelTextAndBtnValue = ["Already signed up?|Log In", "Don't have an account?|Sign up!"];
    console.log(labelTextAndBtnValue[0].split("|")[1]);
    const divInner = (
        `
        <h2>My to-do application</h2>
        <form>
            ${labelTextAndBtnValue.map((textAndVal) => 
                `
                <label for="">${textAndVal.split("|")[0]}</label>
                <input type="button" value="${textAndVal.split("|")[1]}">
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
    const idTextType = ["email_log|Email|text", "psw_log|Password|password"];

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
        <form>
            <input type="button" value="My list">
            <input type="button" value="Settings">
            <input type="button" value="Log out">
        </form>
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
            template = generateAccountSettingsDiv();
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
            result = (
                `<form>
                    <input id="existing_lists_btn" type="button" value="Existing lists">
                    <input type="button" value="Create new">
                </form>
                `
            );
            break;
        case "existing_lists":
            result = (
                `
                <h2>Existing lists</h2>
                <div id="registered_list_box"></div>
                `
            );
            break;
        case "create_new_list":
            result = getCreateNewListPage();
            break;
    }
    return result;
}
function getCreateNewListPage(){
    const template = (
        `
        <h2>Create new To-Do list</h2>
        <form>
            <label id='new_list_name_label'>Name:</label>
            <input id="new_list_name" type="text">

            <input id="save_list_name" type="button" value="Save">

            <label id='activity_name_label' for="activity_name" class="hide">Activity name:</label>
            <input id='activity_name' type="text" class="hide">
            <label id="datepicker_label" for="datepicker" class="hide">Deadline</label>
            <input id="datepicker" class="hide" type="text">
            <input id="add_activity_btn" type="button" class="hide" value="Add">
        </form>
        <p>Unnamed to-do list</p>
        <table id='new_list_Table'>
            <thead>
                <tr>
                    <th>Activity</th>
                    <th>Timestamp</th>
                    <th>Deadline</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        <input id="save_created_list" type="button" value="Save">
        `
    );
    return template;
}
function generateAccountSettingsDiv() {
    const template = (
        `
        <h2>Account settings</h2>
            <form id='settings_form'>
                <label>First name</label>
                <input type="text">
                <label>Last name</label>
                <input type="text">
                <label>Email</label>
                <input type="text">
                <label>Password</label>
                <input type="text">
                <label>Password</label>
                <input type="text">
                <input type="button" value="Modify">
            </form>
        `
    );
    return template;
}
function generateFooter() {
    const template = (
        `
        <h2>Created by: Adam Letenyei - <a href="">Project Pannonia</a></h2>    
        `
    );
    return template;
}

/* Date picker */

$( function() {
    $( "#datepicker" ).datepicker({
        minDate: 'today'
    });
});


/* Import js file */
function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('body').item(0).appendChild(script);
}
/*
include('js/loggedInTopmenuHandler.js');
include('js/loginHandler.js');
include('js/loginAndSignupHandler.js');
include('js/userRegistration.js');
include('js/userLoginHandler.js');
include('js/existingListsHandler.js');
include('js/userSettings.js');
include('js/createToDoList.js');
*/