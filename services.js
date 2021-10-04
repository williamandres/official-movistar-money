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

const commercialInformation = document.getElementById('commercial-information')
const myAccount = document.getElementById('my-account')
const payments = document.getElementById('payments')
const security = document.getElementById('security')

const commercialQuestions = document.getElementById('commercial-innformation-questions')
const accountQuestions = document.getElementById('my-account-questions')
const paymentsQuestions = document.getElementById('payments-questions')
const securityQuestions = document.getElementById('security-questions')


commercialInformation.addEventListener('click', commercialIn)

function commercialIn()
{
    commercialQuestions.classList.remove('dissapear-service')
    accountQuestions.classList.add('dissapear-service')
    paymentsQuestions.classList.add('dissapear-service')
    securityQuestions.classList.add('dissapear-service')
}

myAccount.addEventListener('click', accountButton)

function accountButton()
{
    accountQuestions.classList.remove('dissapear-service')
    commercialQuestions.classList.add('dissapear-service')
    paymentsQuestions.classList.add('dissapear-service')
    securityQuestions.classList.add('dissapear-service')
}

payments.addEventListener('click', paymentsButton);

function paymentsButton()
{
    paymentsQuestions.classList.remove('dissapear-service');
    commercialQuestions.classList.add('dissapear-service');
    accountQuestions.classList.add('dissapear-service');
    securityQuestions.classList.add('dissapear-service');

}


security.addEventListener('click', securitybutton)

function securitybutton()
{
    securityQuestions.classList.remove('dissapear-service')
    commercialQuestions.classList.add('dissapear-service')
    accountQuestions.classList.add('dissapear-service')
    paymentsQuestions.classList.add('dissapear-service')
}





