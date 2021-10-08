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




















