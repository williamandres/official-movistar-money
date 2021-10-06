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



commercialInformation.addEventListener('click', commercialIn)

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





/* *** services help section / Question and Answer interctivity / Commercial information section  *** */

/* ***commercial-information-question1/answer1  *** */

const servicesArrowDown1 = document.getElementById('services-arrow-down1'); 
const servicesArrowUp1 = document.getElementById('services-arrow-up1');

const commercialInformationQuestion1 = document.getElementById('commercial-information-question1');
const commercialInformationAnswer1 = document.getElementById('commercial-information-answer1');

const servicesLineGray1 = document.getElementById('services-line-gray1');
const servicesLineOrange1 = document.getElementById('services-line-orange1');


commercialInformationQuestion1.addEventListener('click', extendInformation);

function extendInformation(){

    servicesArrowDown1.classList.toggle('dissapear-service');
    servicesArrowUp1.classList.toggle('dissapear-service');
    servicesArrowUp2.classList.add('dissapear-service');
    servicesArrowDown2.classList.remove('dissapear-service');
    servicesArrowDown3.classList.remove('dissapear-service');
    servicesArrowUp3.classList.add('dissapear-service');
    servicesArrowDown4.classList.remove('dissapear-service');
    servicesArrowUp4.classList.add('dissapear-service');
    servicesArrowDown5.classList.remove('dissapear-service');
    servicesArrowUp5.classList.add('dissapear-service');

    servicesLineOrange1.classList.toggle('dissapear-service');
    servicesLineGray1.classList.toggle('dissapear-service');
    servicesLineGray2.classList.remove('dissapear-service');
    servicesLineOrange2.classList.add('dissapear-service');
    servicesLineGray3.classList.remove('dissapear-service');
    servicesLineOrange3.classList.add('dissapear-service');
    servicesLineGray4.classList.remove('dissapear-service');
    servicesLineOrange4.classList.add('dissapear-service');
    servicesLineGray5.classList.remove('dissapear-service');
    servicesLineOrange5.classList.add('dissapear-service');

    commercialInformationAnswer1.classList.toggle('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');
    
}
/* ****** */


/* ***commercial-information-question2/answer2  *** */

const servicesArrowUp2 = document.getElementById('services-arrow-up2'); 
const servicesArrowDown2 = document.getElementById('services-arrow-down2');

const commercialInformationQuestion2 = document.getElementById('commercial-information-question2');
const commercialInformationAnswer2 = document.getElementById('commercial-information-answer2'); 

const servicesLineOrange2 = document.getElementById('services-line-orange2'); 
const servicesLineGray2 = document.getElementById('services-line-gray2');


commercialInformationQuestion2.addEventListener('click', extendInformation2)

function extendInformation2()
{
    servicesArrowUp2.classList.toggle('dissapear-service');
    servicesArrowDown2.classList.toggle('dissapear-service');
    servicesArrowDown1.classList.remove('dissapear-service');
    servicesArrowUp1.classList.add('dissapear-service');
    servicesArrowDown3.classList.remove('dissapear-service');
    servicesArrowUp3.classList.add('dissapear-service');
    servicesArrowDown4.classList.remove('dissapear-service');
    servicesArrowUp4.classList.add('dissapear-service');
    servicesArrowDown5.classList.remove('dissapear-service');
    servicesArrowUp5.classList.add('dissapear-service');


    commercialInformationAnswer2.classList.toggle('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');
    
    servicesLineGray2.classList.toggle('dissapear-service');
    servicesLineOrange2.classList.toggle('dissapear-service');
    servicesLineGray1.classList.remove('dissapear-service');
    servicesLineOrange1.classList.add('dissapear-service');
    servicesLineGray3.classList.remove('dissapear-service');
    servicesLineOrange3.classList.add('dissapear-service');
    servicesLineGray4.classList.remove('dissapear-service');
    servicesLineOrange4.classList.add('dissapear-service');
    servicesLineGray5.classList.remove('dissapear-service');
    servicesLineOrange5.classList.add('dissapear-service');
}
/* ****** */



/* ***commercial-information-question3/answer3  *** */

const servicesArrowUp3 = document.getElementById('services-arrow-up3'); 
const servicesArrowDown3 = document.getElementById('services-arrow-down3');

const commercialInformationQuestion3 = document.getElementById('commercial-information-question3');
const commercialInformationAnswer3 = document.getElementById('commercial-information-answer3'); 

const servicesLineOrange3 = document.getElementById('services-line-orange3'); 
const servicesLineGray3 = document.getElementById('services-line-gray3');

commercialInformationQuestion3.addEventListener('click', extendInformation3)

function extendInformation3()
{
    servicesArrowDown3.classList.toggle('dissapear-service');
    servicesArrowUp3.classList.toggle('dissapear-service');
    servicesArrowDown1.classList.remove('dissapear-service');
    servicesArrowUp1.classList.add('dissapear-service');
    servicesArrowDown2.classList.remove('dissapear-service');
    servicesArrowUp2.classList.add('dissapear-service');
    servicesArrowDown4.classList.remove('dissapear-service');
    servicesArrowUp4.classList.add('dissapear-service');
    servicesArrowDown5.classList.remove('dissapear-service');
    servicesArrowUp5.classList.add('dissapear-service');
    

    commercialInformationAnswer3.classList.toggle('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');

    servicesLineGray3.classList.toggle('dissapear-service');
    servicesLineOrange3.classList.toggle('dissapear-service');
    servicesLineGray1.classList.remove('dissapear-service');
    servicesLineOrange1.classList.add('dissapear-service');
    servicesLineGray2.classList.remove('dissapear-service');
    servicesLineOrange2.classList.add('dissapear-service');
    servicesLineGray4.classList.remove('dissapear-service');
    servicesLineOrange4.classList.add('dissapear-service');
    servicesLineGray5.classList.remove('dissapear-service');
    servicesLineOrange5.classList.add('dissapear-service');
    
}

/* ****** */



/* ***commercial-information-question4/answer4  *** */

const servicesArrowUp4 = document.getElementById('services-arrow-up4'); 
const servicesArrowDown4 = document.getElementById('services-arrow-down4');

const commercialInformationQuestion4 = document.getElementById('commercial-information-question4');
const commercialInformationAnswer4 = document.getElementById('commercial-information-answer4'); 

const servicesLineOrange4 = document.getElementById('services-line-orange4'); 
const servicesLineGray4 = document.getElementById('services-line-gray4');


commercialInformationQuestion4.addEventListener('click', extendInformation4)

function extendInformation4(){

    servicesArrowDown4.classList.toggle('dissapear-service');
    servicesArrowUp4.classList.toggle('dissapear-service');
    servicesArrowDown1.classList.remove('dissapear-service');
    servicesArrowUp1.classList.add('dissapear-service');
    servicesArrowDown2.classList.remove('dissapear-service');
    servicesArrowUp2.classList.add('dissapear-service');
    servicesArrowDown3.classList.remove('dissapear-service');
    servicesArrowUp3.classList.add('dissapear-service');
    servicesArrowDown5.classList.remove('dissapear-service');
    servicesArrowUp5.classList.add('dissapear-service');

    commercialInformationAnswer4.classList.toggle('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');

    
    servicesLineGray4.classList.toggle('dissapear-service');
    servicesLineOrange4.classList.toggle('dissapear-service');
    servicesLineGray1.classList.remove('dissapear-service');
    servicesLineOrange1.classList.add('dissapear-service');
    servicesLineGray2.classList.remove('dissapear-service');
    servicesLineOrange2.classList.add('dissapear-service');
    servicesLineGray3.classList.remove('dissapear-service');
    servicesLineOrange3.classList.add('dissapear-service');
    servicesLineGray5.classList.remove('dissapear-service');
    servicesLineOrange5.classList.add('dissapear-service');
}

/* ****** */


/* ***commercial-information-question5/answer5  *** */

const servicesArrowUp5 = document.getElementById('services-arrow-up5'); 
const servicesArrowDown5 = document.getElementById('services-arrow-down5');

const commercialInformationQuestion5 = document.getElementById('commercial-information-question5');
const commercialInformationAnswer5 = document.getElementById('commercial-information-answer5'); 

const servicesLineOrange5 = document.getElementById('services-line-orange5'); 
const servicesLineGray5 = document.getElementById('services-line-gray5');


commercialInformationQuestion5.addEventListener('click', extendInformation5)

function extendInformation5(){

    servicesArrowDown5.classList.toggle('dissapear-service');
    servicesArrowUp5.classList.toggle('dissapear-service');
    servicesArrowDown1.classList.remove('dissapear-service');
    servicesArrowUp1.classList.add('dissapear-service');
    servicesArrowDown2.classList.remove('dissapear-service');
    servicesArrowUp2.classList.add('dissapear-service');
    servicesArrowDown3.classList.remove('dissapear-service');
    servicesArrowUp3.classList.add('dissapear-service');
    servicesArrowDown4.classList.remove('dissapear-service');
    servicesArrowUp4.classList.add('dissapear-service');

    commercialInformationAnswer5.classList.toggle('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');

    
    servicesLineGray5.classList.toggle('dissapear-service');
    servicesLineOrange5.classList.toggle('dissapear-service');
    servicesLineGray1.classList.remove('dissapear-service');
    servicesLineOrange1.classList.add('dissapear-service');
    servicesLineGray2.classList.remove('dissapear-service');
    servicesLineOrange2.classList.add('dissapear-service');
    servicesLineGray3.classList.remove('dissapear-service');
    servicesLineOrange3.classList.add('dissapear-service');
    servicesLineGray4.classList.remove('dissapear-service');
    servicesLineOrange4.classList.add('dissapear-service');
}


/* ****** */

















