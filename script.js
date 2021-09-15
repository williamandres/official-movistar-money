const featuresLink1 = document.getElementById('features-link1')
const featuresLink2 = document.getElementById('features-link2')
const featuresLinkDecoration1 = document.getElementById('features-link-decoration1')
const featuresLinkDecoration2 = document.getElementById('features-link-decoration2')

featuresLink1.addEventListener('click',change)

function change()
{
    
    featuresLink1.classList.remove('features-link-inactive')
    featuresLink1.classList.add('features-link-active')
    featuresLink2.classList.add('features-link-inactive')
    featuresLinkDecoration1.classList.remove('dissapear-element') 
    featuresLinkDecoration2.classList.add('dissapear-element')
}


featuresLink2.addEventListener('click', change2)

function change2()
{
    
    featuresLink2.classList.remove('features-link-inactive')
    featuresLink2.classList.add('features-link-active')
    featuresLink1.classList.add('features-link-inactive')
    featuresLinkDecoration1.classList.add('dissapear-element')
    featuresLinkDecoration2.classList.remove('dissapear-element') 
}