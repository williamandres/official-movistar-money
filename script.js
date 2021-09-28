/* ********************** Features section  ****************************** */

const featuresLink1 = document.getElementById('features-link1')
const featuresLink2 = document.getElementById('features-link2')
const featuresLinkDecoration1 = document.getElementById('features-link-decoration1')
const featuresLinkDecoration2 = document.getElementById('features-link-decoration2')
const featuresImg1 = document.getElementById('features-img1')
const featuresImg2 = document.getElementById('features-img2')
const featuresImgContainer1 = document.getElementById('features-image-container1')
const featuresImgContainer2 = document.getElementById('features-image-container2')
const featuresTitle1 = document.getElementById('features-title1')
const featuresTitle2 = document.getElementById('features-title2')
const featuresList1 = document.getElementById('features-list1')
const featuresList2 = document.getElementById('features-list2')
const featuresAlert = document.getElementById('features-alert')
const features = document.getElementById('features') 
const featuresNotificationContainer = document.getElementById('features-notification-container')

featuresLink1.addEventListener('click',change)

function change()
{
    
    featuresLink1.classList.remove('features-link-inactive')
    featuresLink1.classList.add('features-link-active')
    featuresLink2.classList.add('features-link-inactive')
    featuresLinkDecoration1.classList.remove('dissapear-element') 
    featuresLinkDecoration2.classList.add('dissapear-element')
    featuresImg1.classList.remove('dissapear-element')
    featuresImg2.classList.add('dissapear-element')
    featuresImgContainer1.classList.remove('dissapear-element')
    featuresImgContainer2.classList.add('dissapear-element')
    featuresTitle1.classList.remove('dissapear-element')
    featuresTitle2.classList.add('dissapear-element')
    featuresList1.classList.remove('dissapear-element')
    featuresList2.classList.add('dissapear-element')
    featuresAlert.classList.remove('dissapear-element')
    featuresNotificationContainer.classList.remove('dissapear-element')    
}


featuresLink2.addEventListener('click', change2)

function change2()
{
    
    featuresLink2.classList.remove('features-link-inactive')
    featuresLink2.classList.add('features-link-active')
    featuresLink1.classList.add('features-link-inactive')
    featuresLinkDecoration1.classList.add('dissapear-element')
    featuresLinkDecoration2.classList.remove('dissapear-element')
    featuresImg1.classList.add('dissapear-element')
    featuresImg2.classList.remove('dissapear-element')
    featuresImgContainer1.classList.add('dissapear-element')
    featuresImgContainer2.classList.remove('dissapear-element')
    featuresTitle1.classList.add('dissapear-element') 
    featuresTitle2.classList.remove('dissapear-element')
    featuresList1.classList.add('dissapear-element')
    featuresList2.classList.remove('dissapear-element')
    featuresAlert.classList.add('dissapear-element')
    featuresNotificationContainer.classList.add('dissapear-element')  
}

/* ***************** */


/* ********************** Form-Contact section  ****************************** */

/* ***************** */


/* ********************** Services section  ****************************** */

/* ***************** */
