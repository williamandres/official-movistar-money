const serviceLink1 = document.getElementById('services-description-link1')
const serviceLink2 = document.getElementById('services-description-link2')
const servicesDescription1 = document.getElementById('services-description1') 
const servicesDescription2 = document.getElementById('services-description2')
const servicesDescriptionLinkDecoration1 = document.getElementById('services-description-link-decoration')
const servicesDescriptionLinkDecoration2 = document.getElementById('services-description-link-decoration2')


serviceLink1.addEventListener('click', service)

function service()
{
    servicesDescription2.classList.add('dissapear-service')
    servicesDescription1.classList.remove('dissapear-service')
    servicesDescriptionLinkDecoration1.classList.remove('dissapear-service')
    servicesDescriptionLinkDecoration2.classList.add('dissapear-service')
    serviceLink1.classList.add('services-description-link-active')
    serviceLink1.classList.remove('services-description-link-inactive')
    serviceLink2.classList.add('services-description-link-inactive')
}

serviceLink2.addEventListener('click', service2)

function service2()
{
    servicesDescription1.classList.add('dissapear-service')
    servicesDescription2.classList.remove('dissapear-service')
    servicesDescriptionLinkDecoration1.classList.add('dissapear-service')
    servicesDescriptionLinkDecoration2.classList.remove('dissapear-service')
    serviceLink1.classList.add('services-description-link-active')
    serviceLink1.classList.remove('services-description-link-inactive')
    serviceLink2.classList.remove('services-description-link-inactive')
    serviceLink2.classList.add('services-description-link-active')
    serviceLink1.classList.remove('services-description-link-active')
    serviceLink1.classList.add('services-description-link-inactive')
    
}

/* ********************** services help section  ****************************** */

const commercialInformation = document.getElementById('commercial-information');
const myAccount = document.getElementById('my-account');
const payments = document.getElementById('payments');
const security = document.getElementById('security');

const serviceButton1Gray = document.getElementById('service-button1-gray');
const serviceButton1Blue = document.getElementById('service-button1-blue');
const serviceButton2Gray = document.getElementById('service-button2-gray');
const serviceButton2Blue = document.getElementById('service-button2-blue');
const serviceButton3Gray = document.getElementById('service-button3-gray');
const serviceButton3Blue = document.getElementById('service-button3-blue');
const serviceButton4Gray = document.getElementById('service-button4-gray');
const serviceButton4Blue = document.getElementById('service-button4-blue');


const commercialQuestions = document.getElementById('commercial-innformation-questions');
const accountQuestions = document.getElementById('my-account-questions');
const paymentsQuestions = document.getElementById('payments-questions');
const securityQuestions = document.getElementById('security-questions');

const serviceButtonName1 = document.getElementById('service-button-name1'); 
const serviceButtonName2 = document.getElementById('service-button-name2');
const serviceButtonName3 = document.getElementById('service-button-name3'); 
const serviceButtonName4 = document.getElementById('service-button-name4');


commercialInformation.addEventListener('click', commercialIn);

function commercialIn()
{
    commercialQuestions.classList.remove('dissapear-service');
    accountQuestions.classList.add('dissapear-service');
    paymentsQuestions.classList.add('dissapear-service');
    securityQuestions.classList.add('dissapear-service');

    serviceButton1Blue.classList.remove('dissapear-service');
    serviceButton2Gray.classList.remove('dissapear-service');
    serviceButton3Gray.classList.remove('dissapear-service');
    serviceButton4Gray.classList.remove('dissapear-service');

    serviceButton1Gray.classList.add('dissapear-service');
    serviceButton2Blue.classList.add('dissapear-service')
    serviceButton3Blue.classList.add('dissapear-service');
    serviceButton4Blue.classList.add('dissapear-service');

    serviceButtonName1.classList.add('service-help-button-name-blue');
    serviceButtonName1.classList.remove('service-help-button-name-gray');
    serviceButtonName2.classList.remove('service-help-button-name-blue');
    serviceButtonName2.classList.add('service-help-button-name-gray');
    serviceButtonName3.classList.add('service-help-button-name-gray');
    serviceButtonName3.classList.remove('service-help-button-name-blue');
    serviceButtonName4.classList.remove('service-help-button-name-blue');
    serviceButtonName4.classList.add('service-help-button-name-gray');
}

myAccount.addEventListener('click', accountButton)

function accountButton()
{
    accountQuestions.classList.remove('dissapear-service')
    commercialQuestions.classList.add('dissapear-service')
    paymentsQuestions.classList.add('dissapear-service')
    securityQuestions.classList.add('dissapear-service')

    serviceButton1Gray.classList.remove('dissapear-service');
    serviceButton2Gray.classList.add('dissapear-service');
    serviceButton3Gray.classList.remove('dissapear-service');
    serviceButton4Gray.classList.remove('dissapear-service');

    serviceButton1Blue.classList.add('dissapear-service');
    serviceButton2Blue.classList.remove('dissapear-service')
    serviceButton3Blue.classList.add('dissapear-service');
    serviceButton4Blue.classList.add('dissapear-service');

    serviceButtonName1.classList.remove('service-help-button-name-blue');
    serviceButtonName1.classList.add('service-help-button-name-gray');
    serviceButtonName2.classList.add('service-help-button-name-blue');
    serviceButtonName2.classList.remove('service-help-button-name-gray');
    serviceButtonName3.classList.add('service-help-button-name-gray');
    serviceButtonName3.classList.remove('service-help-button-name-blue');
    serviceButtonName4.classList.remove('service-help-button-name-blue');
    serviceButtonName4.classList.add('service-help-button-name-gray');
}

payments.addEventListener('click', paymentsButton);

function paymentsButton()
{
    paymentsQuestions.classList.remove('dissapear-service');
    commercialQuestions.classList.add('dissapear-service');
    accountQuestions.classList.add('dissapear-service');
    securityQuestions.classList.add('dissapear-service');

    serviceButton1Gray.classList.remove('dissapear-service');
    serviceButton2Gray.classList.remove('dissapear-service');
    serviceButton3Gray.classList.add('dissapear-service');
    serviceButton4Gray.classList.remove('dissapear-service');

    serviceButton1Blue.classList.add('dissapear-service');
    serviceButton2Blue.classList.add('dissapear-service')
    serviceButton3Blue.classList.remove('dissapear-service');
    serviceButton4Blue.classList.add('dissapear-service');

    serviceButtonName1.classList.remove('service-help-button-name-blue');
    serviceButtonName1.classList.add('service-help-button-name-gray');
    serviceButtonName2.classList.remove('service-help-button-name-blue');
    serviceButtonName2.classList.add('service-help-button-name-gray');
    serviceButtonName3.classList.remove('service-help-button-name-gray');
    serviceButtonName3.classList.add('service-help-button-name-blue');
    serviceButtonName4.classList.remove('service-help-button-name-blue');
    serviceButtonName4.classList.add('service-help-button-name-gray');

}


security.addEventListener('click', securitybutton)

function securitybutton()
{
    securityQuestions.classList.remove('dissapear-service');
    commercialQuestions.classList.add('dissapear-service');
    accountQuestions.classList.add('dissapear-service');
    paymentsQuestions.classList.add('dissapear-service');

    serviceButton1Gray.classList.remove('dissapear-service');
    serviceButton2Gray.classList.remove('dissapear-service');
    serviceButton3Gray.classList.remove('dissapear-service');
    serviceButton4Gray.classList.add('dissapear-service');

    serviceButton1Blue.classList.add('dissapear-service');
    serviceButton2Blue.classList.add('dissapear-service')
    serviceButton3Blue.classList.add('dissapear-service');
    serviceButton4Blue.classList.remove('dissapear-service');

    serviceButtonName1.classList.remove('service-help-button-name-blue');
    serviceButtonName1.classList.add('service-help-button-name-gray');
    serviceButtonName2.classList.remove('service-help-button-name-blue');
    serviceButtonName2.classList.add('service-help-button-name-gray');
    serviceButtonName3.classList.add('service-help-button-name-gray');
    serviceButtonName3.classList.remove('service-help-button-name-blue');
    serviceButtonName4.classList.add('service-help-button-name-blue');
    serviceButtonName4.classList.remove('service-help-button-name-gray');
}





