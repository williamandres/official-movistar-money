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
    servicesArrowDown6.classList.remove('dissapear-service');
    servicesArrowUp6.classList.add('dissapear-service');
    servicesArrowDown7.classList.remove('dissapear-service');
    servicesArrowUp7.classList.add('dissapear-service');
    servicesArrowDown8.classList.remove('dissapear-service');
    servicesArrowUp8.classList.add('dissapear-service');
    servicesArrowDown9.classList.remove('dissapear-service');
    servicesArrowUp9.classList.add('dissapear-service');
    servicesArrowDown10.classList.remove('dissapear-service');
    servicesArrowUp10.classList.add('dissapear-service'); 
    servicesArrowDown11.classList.remove('dissapear-service');
    servicesArrowUp11.classList.add('dissapear-service');

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
    servicesLineGray6.classList.remove('dissapear-service');
    servicesLineOrange6.classList.add('dissapear-service');
    servicesLineGray7.classList.remove('dissapear-service');
    servicesLineOrange7.classList.add('dissapear-service');
    servicesLineGray8.classList.remove('dissapear-service');
    servicesLineOrange8.classList.add('dissapear-service');
    servicesLineGray9.classList.remove('dissapear-service');
    servicesLineOrange9.classList.add('dissapear-service'); 
    servicesLineGray10.classList.remove('dissapear-service');
    servicesLineOrange10.classList.add('dissapear-service'); 
    servicesLineGray11.classList.remove('dissapear-service');
    servicesLineOrange11.classList.add('dissapear-service');

    commercialInformationAnswer1.classList.toggle('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');
    commercialInformationAnswer6.classList.add('dissapear-service');
    commercialInformationAnswer7.classList.add('dissapear-service');
    commercialInformationAnswer8.classList.add('dissapear-service');
    commercialInformationAnswer9.classList.add('dissapear-service');
    commercialInformationAnswer10.classList.add('dissapear-service');
    commercialInformationAnswer11.classList.add('dissapear-service');
    
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
    servicesArrowDown6.classList.remove('dissapear-service');
    servicesArrowUp6.classList.add('dissapear-service');
    servicesArrowDown7.classList.remove('dissapear-service');
    servicesArrowUp7.classList.add('dissapear-service');
    servicesArrowDown8.classList.remove('dissapear-service');
    servicesArrowUp8.classList.add('dissapear-service');
    servicesArrowDown9.classList.remove('dissapear-service');
    servicesArrowUp9.classList.add('dissapear-service');
    servicesArrowDown10.classList.remove('dissapear-service');
    servicesArrowUp10.classList.add('dissapear-service');
    servicesArrowDown11.classList.remove('dissapear-service');
    servicesArrowUp11.classList.add('dissapear-service');


    commercialInformationAnswer2.classList.toggle('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');
    commercialInformationAnswer6.classList.add('dissapear-service');
    commercialInformationAnswer7.classList.add('dissapear-service');
    commercialInformationAnswer8.classList.add('dissapear-service');
    commercialInformationAnswer9.classList.add('dissapear-service');
    commercialInformationAnswer10.classList.add('dissapear-service');
    commercialInformationAnswer11.classList.add('dissapear-service');
    
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
    servicesLineGray6.classList.remove('dissapear-service');
    servicesLineOrange6.classList.add('dissapear-service');
    servicesLineGray7.classList.remove('dissapear-service');
    servicesLineOrange7.classList.add('dissapear-service');
    servicesLineGray8.classList.remove('dissapear-service');
    servicesLineOrange8.classList.add('dissapear-service');
    servicesLineGray9.classList.remove('dissapear-service');
    servicesLineOrange9.classList.add('dissapear-service'); 
    servicesLineGray10.classList.remove('dissapear-service');
    servicesLineOrange10.classList.add('dissapear-service'); 
    servicesLineGray11.classList.remove('dissapear-service');
    servicesLineOrange11.classList.add('dissapear-service');
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
    servicesArrowDown6.classList.remove('dissapear-service');
    servicesArrowUp6.classList.add('dissapear-service');
    servicesArrowDown7.classList.remove('dissapear-service');
    servicesArrowUp7.classList.add('dissapear-service');
    servicesArrowDown8.classList.remove('dissapear-service');
    servicesArrowUp8.classList.add('dissapear-service');
    servicesArrowDown9.classList.remove('dissapear-service');
    servicesArrowUp9.classList.add('dissapear-service');
    servicesArrowDown10.classList.remove('dissapear-service');
    servicesArrowUp10.classList.add('dissapear-service'); 
    servicesArrowDown11.classList.remove('dissapear-service');
    servicesArrowUp11.classList.add('dissapear-service');
    

    commercialInformationAnswer3.classList.toggle('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');
    commercialInformationAnswer6.classList.add('dissapear-service');
    commercialInformationAnswer7.classList.add('dissapear-service');
    commercialInformationAnswer8.classList.add('dissapear-service');
    commercialInformationAnswer9.classList.add('dissapear-service');
    commercialInformationAnswer10.classList.add('dissapear-service');
    commercialInformationAnswer11.classList.add('dissapear-service');

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
    servicesLineGray6.classList.remove('dissapear-service');
    servicesLineOrange6.classList.add('dissapear-service');
    servicesLineGray7.classList.remove('dissapear-service');
    servicesLineOrange7.classList.add('dissapear-service');
    servicesLineGray8.classList.remove('dissapear-service');
    servicesLineOrange8.classList.add('dissapear-service');
    servicesLineGray9.classList.remove('dissapear-service');
    servicesLineOrange9.classList.add('dissapear-service'); 
    servicesLineGray10.classList.remove('dissapear-service');
    servicesLineOrange10.classList.add('dissapear-service'); 
    servicesLineGray11.classList.remove('dissapear-service');
    servicesLineOrange11.classList.add('dissapear-service');
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
    servicesArrowDown6.classList.remove('dissapear-service');
    servicesArrowUp6.classList.add('dissapear-service');
    servicesArrowDown7.classList.remove('dissapear-service');
    servicesArrowUp7.classList.add('dissapear-service');
    servicesArrowDown8.classList.remove('dissapear-service');
    servicesArrowUp8.classList.add('dissapear-service');
    servicesArrowDown9.classList.remove('dissapear-service');
    servicesArrowUp9.classList.add('dissapear-service');
    servicesArrowDown10.classList.remove('dissapear-service');
    servicesArrowUp10.classList.add('dissapear-service');
    servicesArrowDown11.classList.remove('dissapear-service');
    servicesArrowUp11.classList.add('dissapear-service');
    

    commercialInformationAnswer4.classList.toggle('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');
    commercialInformationAnswer6.classList.add('dissapear-service');
    commercialInformationAnswer7.classList.add('dissapear-service');
    commercialInformationAnswer8.classList.add('dissapear-service');
    commercialInformationAnswer9.classList.add('dissapear-service');
    commercialInformationAnswer10.classList.add('dissapear-service');
    commercialInformationAnswer11.classList.add('dissapear-service');

    
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
    servicesLineGray6.classList.remove('dissapear-service');
    servicesLineOrange6.classList.add('dissapear-service');
    servicesLineGray7.classList.remove('dissapear-service');
    servicesLineOrange7.classList.add('dissapear-service');
    servicesLineGray8.classList.remove('dissapear-service');
    servicesLineOrange8.classList.add('dissapear-service');
    servicesLineGray9.classList.remove('dissapear-service');
    servicesLineOrange9.classList.add('dissapear-service');
    servicesArrowDown10.classList.remove('dissapear-service');
    servicesArrowUp10.classList.add('dissapear-service');  
    servicesLineGray11.classList.remove('dissapear-service');
    servicesLineOrange11.classList.add('dissapear-service');
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
    servicesArrowDown6.classList.remove('dissapear-service');
    servicesArrowUp6.classList.add('dissapear-service');
    servicesArrowDown7.classList.remove('dissapear-service');
    servicesArrowUp7.classList.add('dissapear-service');
    servicesArrowDown8.classList.remove('dissapear-service');
    servicesArrowUp8.classList.add('dissapear-service');
    servicesArrowDown9.classList.remove('dissapear-service');
    servicesArrowUp9.classList.add('dissapear-service');
    servicesArrowDown10.classList.remove('dissapear-service');
    servicesArrowUp10.classList.add('dissapear-service');
    servicesArrowDown11.classList.remove('dissapear-service');
    servicesArrowUp11.classList.add('dissapear-service');

    commercialInformationAnswer5.classList.toggle('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer6.classList.add('dissapear-service');
    commercialInformationAnswer7.classList.add('dissapear-service');
    commercialInformationAnswer8.classList.add('dissapear-service');
    commercialInformationAnswer9.classList.add('dissapear-service');
    commercialInformationAnswer10.classList.add('dissapear-service');
    commercialInformationAnswer11.classList.add('dissapear-service');

    
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
    servicesLineGray6.classList.remove('dissapear-service');
    servicesLineOrange6.classList.add('dissapear-service');
    servicesLineGray7.classList.remove('dissapear-service');
    servicesLineOrange7.classList.add('dissapear-service');
    servicesLineGray8.classList.remove('dissapear-service');
    servicesLineOrange8.classList.add('dissapear-service');
    servicesLineGray9.classList.remove('dissapear-service');
    servicesLineOrange9.classList.add('dissapear-service'); 
    servicesLineGray10.classList.remove('dissapear-service');
    servicesLineOrange10.classList.add('dissapear-service');
    servicesLineGray11.classList.remove('dissapear-service');
    servicesLineOrange11.classList.add('dissapear-service');
}


/* ****** */  



/* ***commercial-information-question6/answer6  *** */

const servicesArrowUp6 = document.getElementById('services-arrow-up6'); 
const servicesArrowDown6 = document.getElementById('services-arrow-down6');

const commercialInformationQuestion6 = document.getElementById('commercial-information-question6');
const commercialInformationAnswer6 = document.getElementById('commercial-information-answer6'); 

const servicesLineOrange6 = document.getElementById('services-line-orange6'); 
const servicesLineGray6 = document.getElementById('services-line-gray6');


commercialInformationQuestion6.addEventListener('click', extendInformation6)

function extendInformation6(){

    servicesArrowDown6.classList.toggle('dissapear-service');
    servicesArrowUp6.classList.toggle('dissapear-service');
    servicesArrowDown1.classList.remove('dissapear-service');
    servicesArrowUp1.classList.add('dissapear-service');
    servicesArrowDown2.classList.remove('dissapear-service');
    servicesArrowUp2.classList.add('dissapear-service');
    servicesArrowDown3.classList.remove('dissapear-service');
    servicesArrowUp3.classList.add('dissapear-service');
    servicesArrowDown4.classList.remove('dissapear-service');
    servicesArrowUp4.classList.add('dissapear-service');
    servicesArrowDown5.classList.remove('dissapear-service');
    servicesArrowUp5.classList.add('dissapear-service');
    servicesArrowDown7.classList.remove('dissapear-service');
    servicesArrowUp7.classList.add('dissapear-service');
    servicesArrowDown8.classList.remove('dissapear-service');
    servicesArrowUp8.classList.add('dissapear-service');
    servicesArrowDown9.classList.remove('dissapear-service');
    servicesArrowUp9.classList.add('dissapear-service');
    servicesArrowDown10.classList.remove('dissapear-service');
    servicesArrowUp10.classList.add('dissapear-service');
    servicesArrowDown11.classList.remove('dissapear-service');
    servicesArrowUp11.classList.add('dissapear-service');

    commercialInformationAnswer6.classList.toggle('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');
    commercialInformationAnswer7.classList.add('dissapear-service');
    commercialInformationAnswer8.classList.add('dissapear-service');
    commercialInformationAnswer9.classList.add('dissapear-service');
    commercialInformationAnswer10.classList.add('dissapear-service');
    commercialInformationAnswer11.classList.add('dissapear-service');


    
    servicesLineGray6.classList.toggle('dissapear-service');
    servicesLineOrange6.classList.toggle('dissapear-service');
    servicesLineGray1.classList.remove('dissapear-service');
    servicesLineOrange1.classList.add('dissapear-service');
    servicesLineGray2.classList.remove('dissapear-service');
    servicesLineOrange2.classList.add('dissapear-service');
    servicesLineGray3.classList.remove('dissapear-service');
    servicesLineOrange3.classList.add('dissapear-service');
    servicesLineGray4.classList.remove('dissapear-service');
    servicesLineOrange4.classList.add('dissapear-service');
    servicesLineGray5.classList.remove('dissapear-service');
    servicesLineOrange5.classList.add('dissapear-service');
    servicesLineGray7.classList.remove('dissapear-service');
    servicesLineOrange7.classList.add('dissapear-service');
    servicesLineGray8.classList.remove('dissapear-service');
    servicesLineOrange8.classList.add('dissapear-service');
    servicesLineGray9.classList.remove('dissapear-service');
    servicesLineOrange9.classList.add('dissapear-service'); 
    servicesLineGray10.classList.remove('dissapear-service');
    servicesLineOrange10.classList.add('dissapear-service');
    servicesLineGray11.classList.remove('dissapear-service');
    servicesLineOrange11.classList.add('dissapear-service');
}


/* ****** */



/* ***commercial-information-question7/answer7 *** */

const servicesArrowUp7 = document.getElementById('services-arrow-up7'); 
const servicesArrowDown7 = document.getElementById('services-arrow-down7');

const commercialInformationQuestion7 = document.getElementById('commercial-information-question7');
const commercialInformationAnswer7 = document.getElementById('commercial-information-answer7'); 

const servicesLineOrange7 = document.getElementById('services-line-orange7'); 
const servicesLineGray7 = document.getElementById('services-line-gray7');


commercialInformationQuestion7.addEventListener('click', extendInformation7)

function extendInformation7(){

    servicesArrowDown7.classList.toggle('dissapear-service');
    servicesArrowUp7.classList.toggle('dissapear-service');
    servicesArrowDown1.classList.remove('dissapear-service');
    servicesArrowUp1.classList.add('dissapear-service');
    servicesArrowDown2.classList.remove('dissapear-service');
    servicesArrowUp2.classList.add('dissapear-service');
    servicesArrowDown3.classList.remove('dissapear-service');
    servicesArrowUp3.classList.add('dissapear-service');
    servicesArrowDown4.classList.remove('dissapear-service');
    servicesArrowUp4.classList.add('dissapear-service');
    servicesArrowDown5.classList.remove('dissapear-service');
    servicesArrowUp5.classList.add('dissapear-service');
    servicesArrowDown6.classList.remove('dissapear-service');
    servicesArrowUp6.classList.add('dissapear-service');
    servicesArrowDown8.classList.remove('dissapear-service');
    servicesArrowUp8.classList.add('dissapear-service');
    servicesArrowDown9.classList.remove('dissapear-service');
    servicesArrowUp9.classList.add('dissapear-service');
    servicesArrowDown10.classList.remove('dissapear-service');
    servicesArrowUp10.classList.add('dissapear-service');
    servicesArrowDown11.classList.remove('dissapear-service');
    servicesArrowUp11.classList.add('dissapear-service');

    commercialInformationAnswer7.classList.toggle('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');
    commercialInformationAnswer6.classList.add('dissapear-service');
    commercialInformationAnswer8.classList.add('dissapear-service');
    commercialInformationAnswer9.classList.add('dissapear-service');
    commercialInformationAnswer10.classList.add('dissapear-service');
    commercialInformationAnswer11.classList.add('dissapear-service');

    
    servicesLineGray7.classList.toggle('dissapear-service');
    servicesLineOrange7.classList.toggle('dissapear-service');
    servicesLineGray1.classList.remove('dissapear-service');
    servicesLineOrange1.classList.add('dissapear-service');
    servicesLineGray2.classList.remove('dissapear-service');
    servicesLineOrange2.classList.add('dissapear-service');
    servicesLineGray3.classList.remove('dissapear-service');
    servicesLineOrange3.classList.add('dissapear-service');
    servicesLineGray4.classList.remove('dissapear-service');
    servicesLineOrange4.classList.add('dissapear-service');
    servicesLineGray5.classList.remove('dissapear-service');
    servicesLineOrange5.classList.add('dissapear-service');
    servicesLineGray6.classList.remove('dissapear-service');
    servicesLineOrange6.classList.add('dissapear-service');
    servicesLineGray8.classList.remove('dissapear-service');
    servicesLineOrange8.classList.add('dissapear-service');
    servicesLineGray9.classList.remove('dissapear-service');
    servicesLineOrange9.classList.add('dissapear-service'); 
    servicesLineGray10.classList.remove('dissapear-service');
    servicesLineOrange10.classList.add('dissapear-service');
    servicesLineGray11.classList.remove('dissapear-service');
    servicesLineOrange11.classList.add('dissapear-service');
}


/* ****** */


/* ***commercial-information-question8/answer8 *** */

const servicesArrowUp8 = document.getElementById('services-arrow-up8'); 
const servicesArrowDown8 = document.getElementById('services-arrow-down8');

const commercialInformationQuestion8 = document.getElementById('commercial-information-question8');
const commercialInformationAnswer8 = document.getElementById('commercial-information-answer8'); 

const servicesLineOrange8 = document.getElementById('services-line-orange8'); 
const servicesLineGray8 = document.getElementById('services-line-gray8');


commercialInformationQuestion8.addEventListener('click', extendInformation8)

function extendInformation8(){

    servicesArrowDown8.classList.toggle('dissapear-service');
    servicesArrowUp8.classList.toggle('dissapear-service');
    servicesArrowDown1.classList.remove('dissapear-service');
    servicesArrowUp1.classList.add('dissapear-service');
    servicesArrowDown2.classList.remove('dissapear-service');
    servicesArrowUp2.classList.add('dissapear-service');
    servicesArrowDown3.classList.remove('dissapear-service');
    servicesArrowUp3.classList.add('dissapear-service');
    servicesArrowDown4.classList.remove('dissapear-service');
    servicesArrowUp4.classList.add('dissapear-service');
    servicesArrowDown5.classList.remove('dissapear-service');
    servicesArrowUp5.classList.add('dissapear-service');
    servicesArrowDown6.classList.remove('dissapear-service');
    servicesArrowUp6.classList.add('dissapear-service');
    servicesArrowDown7.classList.remove('dissapear-service');
    servicesArrowUp7.classList.add('dissapear-service');
    servicesArrowDown9.classList.remove('dissapear-service');
    servicesArrowUp9.classList.add('dissapear-service');
    servicesArrowDown10.classList.remove('dissapear-service');
    servicesArrowUp10.classList.add('dissapear-service');
    servicesArrowDown11.classList.remove('dissapear-service');
    servicesArrowUp11.classList.add('dissapear-service');

    commercialInformationAnswer8.classList.toggle('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');
    commercialInformationAnswer6.classList.add('dissapear-service');
    commercialInformationAnswer9.classList.add('dissapear-service');
    commercialInformationAnswer10.classList.add('dissapear-service');
    commercialInformationAnswer11.classList.add('dissapear-service');

    
    servicesLineGray8.classList.toggle('dissapear-service');
    servicesLineOrange8.classList.toggle('dissapear-service');
    servicesLineGray1.classList.remove('dissapear-service');
    servicesLineOrange1.classList.add('dissapear-service');
    servicesLineGray2.classList.remove('dissapear-service');
    servicesLineOrange2.classList.add('dissapear-service');
    servicesLineGray3.classList.remove('dissapear-service');
    servicesLineOrange3.classList.add('dissapear-service');
    servicesLineGray4.classList.remove('dissapear-service');
    servicesLineOrange4.classList.add('dissapear-service');
    servicesLineGray5.classList.remove('dissapear-service');
    servicesLineOrange5.classList.add('dissapear-service');
    servicesLineGray6.classList.remove('dissapear-service');
    servicesLineOrange6.classList.add('dissapear-service');
    servicesLineGray7.classList.remove('dissapear-service');
    servicesLineOrange7.classList.add('dissapear-service');
    servicesLineGray9.classList.remove('dissapear-service');
    servicesLineOrange9.classList.add('dissapear-service'); 
    servicesLineGray10.classList.remove('dissapear-service');
    servicesLineOrange10.classList.add('dissapear-service');
    servicesLineGray11.classList.remove('dissapear-service');
    servicesLineOrange11.classList.add('dissapear-service');
    
}


/* ****** */





/* ***commercial-information-question9/answer9 *** */

const servicesArrowUp9 = document.getElementById('services-arrow-up9'); 
const servicesArrowDown9 = document.getElementById('services-arrow-down9');

const commercialInformationQuestion9 = document.getElementById('commercial-information-question9');
const commercialInformationAnswer9 = document.getElementById('commercial-information-answer9'); 

const servicesLineOrange9 = document.getElementById('services-line-orange9'); 
const servicesLineGray9 = document.getElementById('services-line-gray9');


commercialInformationQuestion9.addEventListener('click', extendInformation9)

function extendInformation9(){

    servicesArrowDown9.classList.toggle('dissapear-service');
    servicesArrowUp9.classList.toggle('dissapear-service');
    servicesArrowDown1.classList.remove('dissapear-service');
    servicesArrowUp1.classList.add('dissapear-service');
    servicesArrowDown2.classList.remove('dissapear-service');
    servicesArrowUp2.classList.add('dissapear-service');
    servicesArrowDown3.classList.remove('dissapear-service');
    servicesArrowUp3.classList.add('dissapear-service');
    servicesArrowDown4.classList.remove('dissapear-service');
    servicesArrowUp4.classList.add('dissapear-service');
    servicesArrowDown5.classList.remove('dissapear-service');
    servicesArrowUp5.classList.add('dissapear-service');
    servicesArrowDown6.classList.remove('dissapear-service');
    servicesArrowUp6.classList.add('dissapear-service');
    servicesArrowDown7.classList.remove('dissapear-service');
    servicesArrowUp7.classList.add('dissapear-service');
    servicesArrowDown8.classList.remove('dissapear-service');
    servicesArrowUp8.classList.add('dissapear-service');
    servicesArrowDown10.classList.remove('dissapear-service');
    servicesArrowUp10.classList.add('dissapear-service');
    servicesArrowDown11.classList.remove('dissapear-service');
    servicesArrowUp11.classList.add('dissapear-service');

    commercialInformationAnswer9.classList.toggle('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');
    commercialInformationAnswer6.classList.add('dissapear-service');
    commercialInformationAnswer7.classList.add('dissapear-service');
    commercialInformationAnswer8.classList.add('dissapear-service');
    commercialInformationAnswer10.classList.add('dissapear-service');
    commercialInformationAnswer11.classList.add('dissapear-service');
    

    
    servicesLineGray9.classList.toggle('dissapear-service');
    servicesLineOrange9.classList.toggle('dissapear-service');
    servicesLineGray1.classList.remove('dissapear-service');
    servicesLineOrange1.classList.add('dissapear-service');
    servicesLineGray2.classList.remove('dissapear-service');
    servicesLineOrange2.classList.add('dissapear-service');
    servicesLineGray3.classList.remove('dissapear-service');
    servicesLineOrange3.classList.add('dissapear-service');
    servicesLineGray4.classList.remove('dissapear-service');
    servicesLineOrange4.classList.add('dissapear-service');
    servicesLineGray5.classList.remove('dissapear-service');
    servicesLineOrange5.classList.add('dissapear-service');
    servicesLineGray6.classList.remove('dissapear-service');
    servicesLineOrange6.classList.add('dissapear-service');
    servicesLineGray7.classList.remove('dissapear-service');
    servicesLineOrange7.classList.add('dissapear-service');
    servicesLineGray8.classList.remove('dissapear-service');
    servicesLineOrange8.classList.add('dissapear-service');
    servicesLineGray10.classList.remove('dissapear-service');
    servicesLineOrange10.classList.add('dissapear-service');
    servicesLineGray11.classList.remove('dissapear-service');
    servicesLineOrange11.classList.add('dissapear-service');
}


/* ****** */



/* ***commercial-information-question10/answer10 *** */

const servicesArrowUp10 = document.getElementById('services-arrow-up10'); 
const servicesArrowDown10 = document.getElementById('services-arrow-down10');

const commercialInformationQuestion10 = document.getElementById('commercial-information-question10');
const commercialInformationAnswer10 = document.getElementById('commercial-information-answer10'); 

const servicesLineOrange10 = document.getElementById('services-line-orange10'); 
const servicesLineGray10 = document.getElementById('services-line-gray10');


commercialInformationQuestion10.addEventListener('click', extendInformation10)

function extendInformation10(){

    servicesArrowDown10.classList.toggle('dissapear-service');
    servicesArrowUp10.classList.toggle('dissapear-service');
    servicesArrowDown1.classList.remove('dissapear-service');
    servicesArrowUp1.classList.add('dissapear-service');
    servicesArrowDown2.classList.remove('dissapear-service');
    servicesArrowUp2.classList.add('dissapear-service');
    servicesArrowDown3.classList.remove('dissapear-service');
    servicesArrowUp3.classList.add('dissapear-service');
    servicesArrowDown4.classList.remove('dissapear-service');
    servicesArrowUp4.classList.add('dissapear-service');
    servicesArrowDown5.classList.remove('dissapear-service');
    servicesArrowUp5.classList.add('dissapear-service');
    servicesArrowDown6.classList.remove('dissapear-service');
    servicesArrowUp6.classList.add('dissapear-service');
    servicesArrowDown7.classList.remove('dissapear-service');
    servicesArrowUp7.classList.add('dissapear-service');
    servicesArrowDown8.classList.remove('dissapear-service');
    servicesArrowUp8.classList.add('dissapear-service');
    servicesArrowDown9.classList.remove('dissapear-service');
    servicesArrowUp9.classList.add('dissapear-service');
    servicesArrowDown11.classList.remove('dissapear-service');
    servicesArrowUp11.classList.add('dissapear-service');

    commercialInformationAnswer10.classList.toggle('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');
    commercialInformationAnswer6.classList.add('dissapear-service');
    commercialInformationAnswer7.classList.add('dissapear-service');
    commercialInformationAnswer8.classList.add('dissapear-service');
    commercialInformationAnswer9.classList.add('dissapear-service');
    commercialInformationAnswer11.classList.add('dissapear-service');
    

    
    servicesLineGray10.classList.toggle('dissapear-service');
    servicesLineOrange10.classList.toggle('dissapear-service');
    servicesLineGray1.classList.remove('dissapear-service');
    servicesLineOrange1.classList.add('dissapear-service');
    servicesLineGray2.classList.remove('dissapear-service');
    servicesLineOrange2.classList.add('dissapear-service');
    servicesLineGray3.classList.remove('dissapear-service');
    servicesLineOrange3.classList.add('dissapear-service');
    servicesLineGray4.classList.remove('dissapear-service');
    servicesLineOrange4.classList.add('dissapear-service');
    servicesLineGray5.classList.remove('dissapear-service');
    servicesLineOrange5.classList.add('dissapear-service');
    servicesLineGray6.classList.remove('dissapear-service');
    servicesLineOrange6.classList.add('dissapear-service');
    servicesLineGray7.classList.remove('dissapear-service');
    servicesLineOrange7.classList.add('dissapear-service');
    servicesLineGray8.classList.remove('dissapear-service');
    servicesLineOrange8.classList.add('dissapear-service');
    servicesLineGray9.classList.remove('dissapear-service');
    servicesLineOrange9.classList.add('dissapear-service');
    servicesLineGray11.classList.remove('dissapear-service');
    servicesLineOrange11.classList.add('dissapear-service');
    
}


/* ****** */


/* ***commercial-information-question11/answer11 *** */

const servicesArrowUp11 = document.getElementById('services-arrow-up11'); 
const servicesArrowDown11 = document.getElementById('services-arrow-down11');

const commercialInformationQuestion11 = document.getElementById('commercial-information-question11');
const commercialInformationAnswer11 = document.getElementById('commercial-information-answer11'); 

const servicesLineOrange11 = document.getElementById('services-line-orange11'); 
const servicesLineGray11 = document.getElementById('services-line-gray11');


commercialInformationQuestion11.addEventListener('click', extendInformation11)

function extendInformation11(){

    servicesArrowDown11.classList.toggle('dissapear-service');
    servicesArrowUp11.classList.toggle('dissapear-service');
    servicesArrowDown1.classList.remove('dissapear-service');
    servicesArrowUp1.classList.add('dissapear-service');
    servicesArrowDown2.classList.remove('dissapear-service');
    servicesArrowUp2.classList.add('dissapear-service');
    servicesArrowDown3.classList.remove('dissapear-service');
    servicesArrowUp3.classList.add('dissapear-service');
    servicesArrowDown4.classList.remove('dissapear-service');
    servicesArrowUp4.classList.add('dissapear-service');
    servicesArrowDown5.classList.remove('dissapear-service');
    servicesArrowUp5.classList.add('dissapear-service');
    servicesArrowDown6.classList.remove('dissapear-service');
    servicesArrowUp6.classList.add('dissapear-service');
    servicesArrowDown7.classList.remove('dissapear-service');
    servicesArrowUp7.classList.add('dissapear-service');
    servicesArrowDown8.classList.remove('dissapear-service');
    servicesArrowUp8.classList.add('dissapear-service');
    servicesArrowDown9.classList.remove('dissapear-service');
    servicesArrowUp9.classList.add('dissapear-service');
    servicesArrowDown10.classList.remove('dissapear-service');
    servicesArrowUp10.classList.add('dissapear-service');

    commercialInformationAnswer11.classList.toggle('dissapear-service');
    commercialInformationAnswer1.classList.add('dissapear-service');
    commercialInformationAnswer2.classList.add('dissapear-service');
    commercialInformationAnswer3.classList.add('dissapear-service');
    commercialInformationAnswer4.classList.add('dissapear-service');
    commercialInformationAnswer5.classList.add('dissapear-service');
    commercialInformationAnswer6.classList.add('dissapear-service');
    commercialInformationAnswer7.classList.add('dissapear-service');
    commercialInformationAnswer8.classList.add('dissapear-service');
    commercialInformationAnswer9.classList.add('dissapear-service');
    commercialInformationAnswer10.classList.add('dissapear-service');
    

    
    servicesLineGray11.classList.toggle('dissapear-service');
    servicesLineOrange11.classList.toggle('dissapear-service');
    servicesLineGray1.classList.remove('dissapear-service');
    servicesLineOrange1.classList.add('dissapear-service');
    servicesLineGray2.classList.remove('dissapear-service');
    servicesLineOrange2.classList.add('dissapear-service');
    servicesLineGray3.classList.remove('dissapear-service');
    servicesLineOrange3.classList.add('dissapear-service');
    servicesLineGray4.classList.remove('dissapear-service');
    servicesLineOrange4.classList.add('dissapear-service');
    servicesLineGray5.classList.remove('dissapear-service');
    servicesLineOrange5.classList.add('dissapear-service');
    servicesLineGray6.classList.remove('dissapear-service');
    servicesLineOrange6.classList.add('dissapear-service');
    servicesLineGray7.classList.remove('dissapear-service');
    servicesLineOrange7.classList.add('dissapear-service');
    servicesLineGray8.classList.remove('dissapear-service');
    servicesLineOrange8.classList.add('dissapear-service');
    servicesLineGray9.classList.remove('dissapear-service');
    servicesLineOrange9.classList.add('dissapear-service');
    servicesLineGray10.classList.remove('dissapear-service');
    servicesLineOrange10.classList.add('dissapear-service');
    
}


/* ****** */



/* -------------------------------------------------------------------------------------------------- */



/* *** services help section / Question and Answer interctivity / My Account section  *** */


/* *** My Account question12/answer12  *** */

const servicesHelpDataQuestions2 = document.getElementById('services-help-data-questions2')

const servicesArrowUp12 = document.getElementById('services-arrow-up12'); 
const servicesArrowDown12 = document.getElementById('services-arrow-down12');

const myAccountQuestion12 = document.getElementById('my-account-question12');
const myAccountAnswer12 = document.getElementById('my-account-answer12'); 

const servicesLineOrange12 = document.getElementById('services-line-orange12'); 
const servicesLineGray12 = document.getElementById('services-line-gray12');

myAccountQuestion12.addEventListener('click', extendInformation12)

function extendInformation12()
{
    servicesArrowDown12.classList.toggle('dissapear-service');
    servicesArrowUp12.classList.toggle('dissapear-service');
    servicesArrowDown13.classList.remove('dissapear-service');
    servicesArrowUp13.classList.add('dissapear-service');
    servicesArrowDown14.classList.remove('dissapear-service');
    servicesArrowUp14.classList.add('dissapear-service');
    servicesArrowDown15.classList.remove('dissapear-service');
    servicesArrowUp15.classList.add('dissapear-service'); 
    servicesArrowDown16.classList.remove('dissapear-service');
    servicesArrowUp16.classList.add('dissapear-service');

    myAccountAnswer12.classList.toggle('dissapear-service');
    myAccountAnswer13.classList.add('dissapear-service');
    myAccountAnswer14.classList.add('dissapear-service');
    myAccountAnswer15.classList.add('dissapear-service');
    myAccountAnswer16.classList.add('dissapear-service');

    servicesLineGray12.classList.toggle('dissapear-service');
    servicesLineOrange12.classList.toggle('dissapear-service');
    servicesLineGray13.classList.remove('dissapear-service');
    servicesLineOrange13.classList.add('dissapear-service');
    servicesLineGray14.classList.remove('dissapear-service');
    servicesLineOrange14.classList.add('dissapear-service');
    servicesLineGray15.classList.remove('dissapear-service');
    servicesLineOrange15.classList.add('dissapear-service');
    servicesLineGray16.classList.remove('dissapear-service');
    servicesLineOrange16.classList.add('dissapear-service');

    servicesHelpDataQuestions2.classList.toggle('services-help-data-questions2-click');

    servicesHelpDataQuestions2.classList.remove('service-height14');
}

/* ****** */


/* *** My Account question13/answer13  *** */

const servicesArrowUp13 = document.getElementById('services-arrow-up13'); 
const servicesArrowDown13 = document.getElementById('services-arrow-down13');


const myAccountQuestion13 = document.getElementById('my-account-question13');
const myAccountAnswer13 = document.getElementById('my-account-answer13'); 

const servicesLineOrange13 = document.getElementById('services-line-orange13'); 
const servicesLineGray13 = document.getElementById('services-line-gray13');

myAccountQuestion13.addEventListener('click', extendInformation13);

function extendInformation13()
{
    servicesArrowDown13.classList.toggle('dissapear-service');
    servicesArrowUp13.classList.toggle('dissapear-service');
    servicesArrowDown12.classList.remove('dissapear-service');
    servicesArrowUp12.classList.add('dissapear-service');
    servicesArrowDown14.classList.remove('dissapear-service');
    servicesArrowUp14.classList.add('dissapear-service');
    servicesArrowDown15.classList.remove('dissapear-service');
    servicesArrowUp15.classList.add('dissapear-service'); 
    servicesArrowDown16.classList.remove('dissapear-service');
    servicesArrowUp16.classList.add('dissapear-service');


    myAccountAnswer13.classList.toggle('dissapear-service');
    myAccountAnswer12.classList.add('dissapear-service'); 
    myAccountAnswer14.classList.add('dissapear-service');   
    myAccountAnswer15.classList.add('dissapear-service');
    myAccountAnswer16.classList.add('dissapear-service');

    servicesLineGray13.classList.toggle('dissapear-service');
    servicesLineOrange13.classList.toggle('dissapear-service');
    servicesLineGray12.classList.remove('dissapear-service');
    servicesLineOrange12.classList.add('dissapear-service');
    servicesLineGray14.classList.remove('dissapear-service');
    servicesLineOrange14.classList.add('dissapear-service');
    servicesLineGray15.classList.remove('dissapear-service');
    servicesLineOrange15.classList.add('dissapear-service');
    servicesLineGray16.classList.remove('dissapear-service');
    servicesLineOrange16.classList.add('dissapear-service');

    servicesHelpDataQuestions2.classList.remove('services-help-data-questions2-click');

    servicesHelpDataQuestions2.classList.remove('service-height14')
}

/* ****** */


/* *** My Account question14/answer14  *** */

const servicesArrowUp14 = document.getElementById('services-arrow-up14'); 
const servicesArrowDown14 = document.getElementById('services-arrow-down14');


const myAccountQuestion14 = document.getElementById('my-account-question14');
const myAccountAnswer14 = document.getElementById('my-account-answer14'); 

const servicesLineOrange14 = document.getElementById('services-line-orange14'); 
const servicesLineGray14 = document.getElementById('services-line-gray14');

myAccountQuestion14.addEventListener('click', extendInformation14)

function extendInformation14()
{
    servicesArrowDown14.classList.toggle('dissapear-service');
    servicesArrowUp14.classList.toggle('dissapear-service');
    servicesArrowDown12.classList.remove('dissapear-service');
    servicesArrowUp12.classList.add('dissapear-service');
    servicesArrowDown13.classList.remove('dissapear-service');
    servicesArrowUp13.classList.add('dissapear-service');
    servicesArrowDown15.classList.remove('dissapear-service');
    servicesArrowUp15.classList.add('dissapear-service');
    servicesArrowDown16.classList.remove('dissapear-service');
    servicesArrowUp16.classList.add('dissapear-service');

    myAccountAnswer14.classList.toggle('dissapear-service');
    myAccountAnswer12.classList.add('dissapear-service');
    myAccountAnswer13.classList.add('dissapear-service');
    myAccountAnswer15.classList.add('dissapear-service');
    myAccountAnswer16.classList.add('dissapear-service');


    servicesLineGray14.classList.toggle('dissapear-service');
    servicesLineOrange14.classList.toggle('dissapear-service');
    servicesLineGray12.classList.remove('dissapear-service');
    servicesLineOrange12.classList.add('dissapear-service');
    servicesLineGray13.classList.remove('dissapear-service');
    servicesLineOrange13.classList.add('dissapear-service');
    servicesLineGray15.classList.remove('dissapear-service');
    servicesLineOrange15.classList.add('dissapear-service');
    servicesLineGray16.classList.remove('dissapear-service');
    servicesLineOrange16.classList.add('dissapear-service');

    servicesHelpDataQuestions2.classList.remove('services-help-data-questions2-click');
    
    servicesHelpDataQuestions2.classList.toggle('service-height14');
}

/* ****** */



/* *** My Account question15/answer15  *** */

const servicesArrowUp15 = document.getElementById('services-arrow-up15'); 
const servicesArrowDown15 = document.getElementById('services-arrow-down15');


const myAccountQuestion15 = document.getElementById('my-account-question15');
const myAccountAnswer15 = document.getElementById('my-account-answer15'); 

const servicesLineOrange15 = document.getElementById('services-line-orange15'); 
const servicesLineGray15 = document.getElementById('services-line-gray15');

myAccountQuestion15.addEventListener('click', extendInformation15)

function extendInformation15()
{
    servicesArrowDown15.classList.toggle('dissapear-service');
    servicesArrowUp15.classList.toggle('dissapear-service');
    servicesArrowDown12.classList.remove('dissapear-service');
    servicesArrowUp12.classList.add('dissapear-service');
    servicesArrowDown13.classList.remove('dissapear-service');
    servicesArrowUp13.classList.add('dissapear-service');
    servicesArrowDown14.classList.remove('dissapear-service');
    servicesArrowUp14.classList.add('dissapear-service');
    servicesArrowDown16.classList.remove('dissapear-service');
    servicesArrowUp16.classList.add('dissapear-service')


    myAccountAnswer15.classList.toggle('dissapear-service');
    myAccountAnswer12.classList.add('dissapear-service');
    myAccountAnswer13.classList.add('dissapear-service');
    myAccountAnswer14.classList.add('dissapear-service');
    myAccountAnswer16.classList.add('dissapear-service');


    servicesLineGray15.classList.toggle('dissapear-service');
    servicesLineOrange15.classList.toggle('dissapear-service');
    servicesLineGray12.classList.remove('dissapear-service');
    servicesLineOrange12.classList.add('dissapear-service');
    servicesLineGray13.classList.remove('dissapear-service');
    servicesLineOrange13.classList.add('dissapear-service');
    servicesLineGray14.classList.remove('dissapear-service');
    servicesLineOrange14.classList.add('dissapear-service');
    servicesLineGray16.classList.remove('dissapear-service');
    servicesLineOrange16.classList.add('dissapear-service');

    servicesHelpDataQuestions2.classList.remove('services-help-data-questions2-click');
    
    servicesHelpDataQuestions2.classList.remove('service-height14');
}

/* ****** */


/* *** My Account question16/answer16  *** */

const servicesArrowUp16 = document.getElementById('services-arrow-up16'); 
const servicesArrowDown16 = document.getElementById('services-arrow-down16');


const myAccountQuestion16 = document.getElementById('my-account-question16');
const myAccountAnswer16 = document.getElementById('my-account-answer16'); 

const servicesLineOrange16 = document.getElementById('services-line-orange16'); 
const servicesLineGray16 = document.getElementById('services-line-gray16');

myAccountQuestion16.addEventListener('click', extendInformation16)

function extendInformation16()
{
    servicesArrowDown16.classList.toggle('dissapear-service');
    servicesArrowUp16.classList.toggle('dissapear-service');
    servicesArrowDown12.classList.remove('dissapear-service');
    servicesArrowUp12.classList.add('dissapear-service');
    servicesArrowDown13.classList.remove('dissapear-service');
    servicesArrowUp13.classList.add('dissapear-service');
    servicesArrowDown14.classList.remove('dissapear-service');
    servicesArrowUp14.classList.add('dissapear-service');
    servicesArrowDown15.classList.remove('dissapear-service');
    servicesArrowUp15.classList.add('dissapear-service')


    myAccountAnswer16.classList.toggle('dissapear-service');
    myAccountAnswer12.classList.add('dissapear-service');
    myAccountAnswer13.classList.add('dissapear-service');
    myAccountAnswer14.classList.add('dissapear-service');
    myAccountAnswer15.classList.add('dissapear-service');


    servicesLineGray16.classList.toggle('dissapear-service');
    servicesLineOrange16.classList.toggle('dissapear-service');
    servicesLineGray12.classList.remove('dissapear-service');
    servicesLineOrange12.classList.add('dissapear-service');
    servicesLineGray13.classList.remove('dissapear-service');
    servicesLineOrange13.classList.add('dissapear-service');
    servicesLineGray14.classList.remove('dissapear-service');
    servicesLineOrange14.classList.add('dissapear-service');
    servicesLineGray15.classList.remove('dissapear-service');
    servicesLineOrange15.classList.add('dissapear-service');

    servicesHelpDataQuestions2.classList.remove('services-help-data-questions2-click');
    
    servicesHelpDataQuestions2.classList.remove('service-height14');
}

/* ****** */



/* -------------------------------------------------------------------------------------------------- */



/* *** services help section / Question and Answer interctivity / My Account section  *** */


/* *** Payments question17/answer17  *** */

const servicesArrowUp17 = document.getElementById('services-arrow-up17'); 
const servicesArrowDown17 = document.getElementById('services-arrow-down17');


const paymentsQuestion17 = document.getElementById('payments-question17');
const paymentsAnswer17 = document.getElementById('payments-answer17'); 

const servicesLineOrange17 = document.getElementById('services-line-orange17'); 
const servicesLineGray17 = document.getElementById('services-line-gray17');

const servicesPaymentsClick = document.getElementById('servicesPaymentsClick')

paymentsQuestion17.addEventListener('click', extendInformation17);


function extendInformation17()
{
    servicesArrowDown17.classList.toggle('dissapear-service');
    servicesArrowUp17.classList.toggle('dissapear-service');
    servicesArrowDown18.classList.remove('dissapear-service');
    servicesArrowUp18.classList.add('dissapear-service');
    servicesArrowDown19.classList.remove('dissapear-service');
    servicesArrowUp19.classList.add('dissapear-service');
    servicesArrowDown20.classList.remove('dissapear-service');
    servicesArrowUp20.classList.add('dissapear-service');

    paymentsAnswer17.classList.toggle('dissapear-service');
    paymentsAnswer18.classList.add('dissapear-service');
    paymentsAnswer19.classList.add('dissapear-service');
    paymentsAnswer20.classList.add('dissapear-service');
    paymentsAnswer21.classList.add('dissapear-service');

    servicesLineGray17.classList.toggle('dissapear-service');
    servicesLineOrange17.classList.toggle('dissapear-service');
    servicesLineGray18.classList.remove('dissapear-service');
    servicesLineOrange18.classList.add('dissapear-service');
    servicesLineGray19.classList.remove('dissapear-service');
    servicesLineOrange19.classList.add('dissapear-service');
    servicesLineGray20.classList.remove('dissapear-service');
    servicesLineOrange20.classList.add('dissapear-service');
    servicesLineGray21.classList.remove('dissapear-service');
    servicesLineOrange21.classList.add('dissapear-service');

    servicesPaymentsClick.classList.add('services-payments-click');
}


/* ****** */


/* *** Payments question18/answer18  *** */

const servicesArrowUp18 = document.getElementById('services-arrow-up18'); 
const servicesArrowDown18 = document.getElementById('services-arrow-down18');


const paymentsQuestion18 = document.getElementById('payments-question18');
const paymentsAnswer18 = document.getElementById('payments-answer18'); 

const servicesLineOrange18 = document.getElementById('services-line-orange18'); 
const servicesLineGray18 = document.getElementById('services-line-gray18');

paymentsQuestion18.addEventListener('click', extendInformation18);


function extendInformation18()
{
    servicesArrowDown18.classList.toggle('dissapear-service');
    servicesArrowUp18.classList.toggle('dissapear-service');
    servicesArrowDown17.classList.remove('dissapear-service');
    servicesArrowUp17.classList.add('dissapear-service');
    servicesArrowDown19.classList.remove('dissapear-service');
    servicesArrowUp19.classList.add('dissapear-service');
    servicesArrowDown20.classList.remove('dissapear-service');
    servicesArrowUp20.classList.add('dissapear-service');
    servicesArrowDown21.classList.remove('dissapear-service');
    servicesArrowUp21.classList.add('dissapear-service');
    
    paymentsAnswer18.classList.toggle('dissapear-service');
    paymentsAnswer17.classList.add('dissapear-service');
    paymentsAnswer19.classList.add('dissapear-service');
    paymentsAnswer20.classList.add('dissapear-service');
    paymentsAnswer21.classList.add('dissapear-service');

    servicesLineGray18.classList.toggle('dissapear-service');
    servicesLineOrange18.classList.toggle('dissapear-service');
    servicesLineGray17.classList.remove('dissapear-service');
    servicesLineOrange17.classList.add('dissapear-service');
    servicesLineGray19.classList.remove('dissapear-service');
    servicesLineOrange19.classList.add('dissapear-service');
    servicesLineGray20.classList.remove('dissapear-service');
    servicesLineOrange20.classList.add('dissapear-service');
    servicesLineGray21.classList.remove('dissapear-service');
    servicesLineOrange21.classList.add('dissapear-service');

    servicesPaymentsClick.classList.remove('services-payments-click');
}


/* ****** */


/* *** Payments question19/answer19  *** */

const servicesArrowUp19 = document.getElementById('services-arrow-up19'); 
const servicesArrowDown19 = document.getElementById('services-arrow-down19');


const paymentsQuestion19 = document.getElementById('payments-question19');
const paymentsAnswer19 = document.getElementById('payments-answer19'); 

const servicesLineOrange19 = document.getElementById('services-line-orange19'); 
const servicesLineGray19 = document.getElementById('services-line-gray19');

paymentsQuestion19.addEventListener('click', extendInformation19);


function extendInformation19()
{
    servicesArrowDown19.classList.toggle('dissapear-service');
    servicesArrowUp19.classList.toggle('dissapear-service');
    servicesArrowDown17.classList.remove('dissapear-service');
    servicesArrowUp17.classList.add('dissapear-service');
    servicesArrowDown18.classList.remove('dissapear-service');
    servicesArrowUp18.classList.add('dissapear-service');
    servicesArrowDown20.classList.remove('dissapear-service');
    servicesArrowUp20.classList.add('dissapear-service');
    servicesArrowDown21.classList.remove('dissapear-service');
    servicesArrowUp21.classList.add('dissapear-service');
    
    paymentsAnswer19.classList.toggle('dissapear-service');
    paymentsAnswer17.classList.add('dissapear-service');
    paymentsAnswer18.classList.add('dissapear-service');
    paymentsAnswer20.classList.add('dissapear-service');
    paymentsAnswer21.classList.add('dissapear-service');

    servicesLineGray19.classList.toggle('dissapear-service');
    servicesLineOrange19.classList.toggle('dissapear-service');
    servicesLineGray17.classList.remove('dissapear-service');
    servicesLineOrange17.classList.add('dissapear-service');
    servicesLineGray18.classList.remove('dissapear-service');
    servicesLineOrange18.classList.add('dissapear-service');
    servicesLineGray20.classList.remove('dissapear-service');
    servicesLineOrange20.classList.add('dissapear-service');
    servicesLineGray21.classList.remove('dissapear-service');
    servicesLineOrange21.classList.add('dissapear-service');

    servicesPaymentsClick.classList.remove('services-payments-click');
}


/* ****** */


/* *** Payments question20/answer20  *** */

const servicesArrowUp20 = document.getElementById('services-arrow-up20'); 
const servicesArrowDown20 = document.getElementById('services-arrow-down20');


const paymentsQuestion20 = document.getElementById('payments-question20');
const paymentsAnswer20 = document.getElementById('payments-answer20'); 

const servicesLineOrange20 = document.getElementById('services-line-orange20'); 
const servicesLineGray20 = document.getElementById('services-line-gray20');

paymentsQuestion20.addEventListener('click', extendInformation20);


function extendInformation20()
{
    servicesArrowDown20.classList.toggle('dissapear-service');
    servicesArrowUp20.classList.toggle('dissapear-service');
    servicesArrowDown17.classList.remove('dissapear-service');
    servicesArrowUp17.classList.add('dissapear-service');
    servicesArrowDown18.classList.remove('dissapear-service');
    servicesArrowUp18.classList.add('dissapear-service');
    servicesArrowDown19.classList.remove('dissapear-service');
    servicesArrowUp19.classList.add('dissapear-service');
    servicesArrowDown21.classList.remove('dissapear-service');
    servicesArrowUp21.classList.add('dissapear-service');
    
    paymentsAnswer20.classList.toggle('dissapear-service');
    paymentsAnswer17.classList.add('dissapear-service');
    paymentsAnswer18.classList.add('dissapear-service');
    paymentsAnswer19.classList.add('dissapear-service');
    paymentsAnswer21.classList.add('dissapear-service');

    servicesLineGray20.classList.toggle('dissapear-service');
    servicesLineOrange20.classList.toggle('dissapear-service');
    servicesLineGray17.classList.remove('dissapear-service');
    servicesLineOrange17.classList.add('dissapear-service');
    servicesLineGray18.classList.remove('dissapear-service');
    servicesLineOrange18.classList.add('dissapear-service');
    servicesLineGray19.classList.remove('dissapear-service');
    servicesLineOrange19.classList.add('dissapear-service');
    servicesLineGray21.classList.remove('dissapear-service');
    servicesLineOrange21.classList.add('dissapear-service');

    servicesPaymentsClick.classList.remove('services-payments-click');
}


/* ****** */ 


/* *** Payments question21/answer21  *** */

const servicesArrowUp21 = document.getElementById('services-arrow-up21'); 
const servicesArrowDown21 = document.getElementById('services-arrow-down21');


const paymentsQuestion21 = document.getElementById('payments-question21');
const paymentsAnswer21 = document.getElementById('payments-answer21'); 

const servicesLineOrange21 = document.getElementById('services-line-orange21'); 
const servicesLineGray21 = document.getElementById('services-line-gray21');

paymentsQuestion21.addEventListener('click', extendInformation21);


function extendInformation21()
{
    servicesArrowDown21.classList.toggle('dissapear-service');
    servicesArrowUp21.classList.toggle('dissapear-service');
    servicesArrowDown17.classList.remove('dissapear-service');
    servicesArrowUp17.classList.add('dissapear-service');
    servicesArrowDown18.classList.remove('dissapear-service');
    servicesArrowUp18.classList.add('dissapear-service');
    servicesArrowDown19.classList.remove('dissapear-service');
    servicesArrowUp19.classList.add('dissapear-service');
    servicesArrowDown20.classList.remove('dissapear-service');
    servicesArrowUp20.classList.add('dissapear-service');
    
    paymentsAnswer21.classList.toggle('dissapear-service');
    paymentsAnswer17.classList.add('dissapear-service');
    paymentsAnswer18.classList.add('dissapear-service');
    paymentsAnswer19.classList.add('dissapear-service');
    paymentsAnswer20.classList.add('dissapear-service');

    servicesLineGray21.classList.toggle('dissapear-service');
    servicesLineOrange21.classList.toggle('dissapear-service');
    servicesLineGray17.classList.remove('dissapear-service');
    servicesLineOrange17.classList.add('dissapear-service');
    servicesLineGray18.classList.remove('dissapear-service');
    servicesLineOrange18.classList.add('dissapear-service');
    servicesLineGray19.classList.remove('dissapear-service');
    servicesLineOrange19.classList.add('dissapear-service');
    servicesLineGray20.classList.remove('dissapear-service');
    servicesLineOrange20.classList.add('dissapear-service');

    servicesPaymentsClick.classList.remove('services-payments-click');
}

/* ****** */






/* -------------------------------------------------------------------------------------------------- */



/* *** services help section / Question and Answer interctivity / Security section  *** */


/* *** Security question22/answer22  *** */



const servicesArrowUp22 = document.getElementById('services-arrow-up22'); 
const servicesArrowDown22 = document.getElementById('services-arrow-down22');


const securityQuestion22 = document.getElementById('security-question22');
const securityAnswer22 = document.getElementById('security-answer22'); 

const servicesLineOrange22 = document.getElementById('services-line-orange22'); 
const servicesLineGray22 = document.getElementById('services-line-gray22');

const securityClick = document.getElementById('security-click');

securityQuestion22.addEventListener('click', extendInformation22);



function extendInformation22() 
{
    servicesArrowDown22.classList.toggle('dissapear-service');
    servicesArrowUp22.classList.toggle('dissapear-service');
    servicesArrowDown23.classList.remove('dissapear-service');
    servicesArrowUp23.classList.add('dissapear-service'); 
    servicesArrowDown24.classList.remove('dissapear-service');
    servicesArrowUp24.classList.add('dissapear-service');  

    securityAnswer22.classList.toggle('dissapear-service');
    securityAnswer23.classList.add('dissapear-service');

    servicesLineGray22.classList.toggle('dissapear-service');
    servicesLineOrange22.classList.toggle('dissapear-service');
    servicesLineGray23.classList.remove('dissapear-service');
    servicesLineOrange23.classList.add('dissapear-service');

    securityClick.classList.toggle('security-click');
    securityClick.classList.remove('security-click2');

}


/* ****** */ 



/* *** Security question23/answer23  *** */


const servicesArrowUp23 = document.getElementById('services-arrow-up23'); 
const servicesArrowDown23 = document.getElementById('services-arrow-down23');




const securityQuestion23 = document.getElementById('security-question23');
const securityAnswer23 = document.getElementById('security-answer23'); 


const servicesLineOrange23 = document.getElementById('services-line-orange23'); 
const servicesLineGray23 = document.getElementById('services-line-gray23');



securityQuestion23.addEventListener('click', extendInformation23);


function extendInformation23() 
{
    servicesArrowDown23.classList.toggle('dissapear-service');
    servicesArrowUp23.classList.toggle('dissapear-service'); 
    servicesArrowDown22.classList.remove('dissapear-service');
    servicesArrowUp22.classList.add('dissapear-service'); 
    servicesArrowDown24.classList.remove('dissapear-service');
    servicesArrowUp24.classList.add('dissapear-service'); 

    securityAnswer23.classList.toggle('dissapear-service');
    securityAnswer22.classList.add('dissapear-service');
    securityAnswer24.classList.add('dissapear-service');

    servicesLineGray23.classList.toggle('dissapear-service');
    servicesLineOrange23.classList.toggle('dissapear-service');
    servicesLineGray22.classList.remove('dissapear-service');
    servicesLineOrange22.classList.add('dissapear-service');
    servicesLineGray24.classList.remove('dissapear-service');
    servicesLineOrange24.classList.add('dissapear-service');

    securityClick.classList.remove('security-click');
    securityClick.classList.toggle('security-click2');

}


/* ****** */



/* *** Security question24/answer24  *** */


const servicesArrowUp24 = document.getElementById('services-arrow-up24'); 
const servicesArrowDown24 = document.getElementById('services-arrow-down24');


const securityQuestion24 = document.getElementById('security-question24');
const securityAnswer24 = document.getElementById('security-answer24'); 

const servicesLineOrange24 = document.getElementById('services-line-orange24'); 
const servicesLineGray24 = document.getElementById('services-line-gray24');



securityQuestion24.addEventListener('click', extendInformation24);


function extendInformation24() 
{
    servicesArrowDown24.classList.toggle('dissapear-service');
    servicesArrowUp24.classList.toggle('dissapear-service'); 
    servicesArrowDown22.classList.remove('dissapear-service');
    servicesArrowUp22.classList.add('dissapear-service'); 
    servicesArrowDown23.classList.remove('dissapear-service');
    servicesArrowUp23.classList.add('dissapear-service'); 

    securityAnswer24.classList.toggle('dissapear-service');
    securityAnswer22.classList.add('dissapear-service');
    securityAnswer23.classList.add('dissapear-service');

    servicesLineGray24.classList.toggle('dissapear-service');
    servicesLineOrange24.classList.toggle('dissapear-service');
    servicesLineGray22.classList.remove('dissapear-service');
    servicesLineOrange22.classList.add('dissapear-service');
    servicesLineGray23.classList.remove('dissapear-service');
    servicesLineOrange23.classList.add('dissapear-service');

    securityClick.classList.remove('security-click');
    securityClick.classList.remove('security-click2');

}


/* ****** */











