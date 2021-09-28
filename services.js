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

