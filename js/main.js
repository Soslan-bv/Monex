$(function () {
    $('.header__content-slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    })
})

document.addEventListener('scroll', e => {
    const screenHeight = window.screen.height
    const screenWidth = document.documentElement.clientWidth
    let navbar = document.getElementById('fixed').classList
    let headerNav = document.getElementById('header').classList
    let active = 'header__fixed-scrolled'
    let headerActive = 'header-scrolled'

    if (pageYOffset > screenHeight && screenWidth > 1200) {
        navbar.add(active)
        headerNav.remove(headerActive)
    } else {
        navbar.remove(active)
        headerNav.add(headerActive)
    }
}
)

$(function () {
    $('.burger').click(function () {
        $('.burger,.header,.header__nav,.header__fixed,body,.header__top-info__phone').toggleClass('active')
    })
    $('.header__link').click(function () {
        $('.burger,.header,.header__nav,.header__fixed,body,.header__top-info__phone').removeClass('active')
    })
})

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1)

        const scrollTarget = document.getElementById(href)

        const topOffSet = 0
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffSet

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
        })

    })
})