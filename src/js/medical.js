window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('navbar-icon').addEventListener('click', () => {
        if (document.querySelector('.navbar-container').dataset.show === 'false') {
            document.querySelector('.navbar-container').dataset.show = 'true'
        } else {
            document.querySelector('.navbar-container').dataset.show = 'false'
        }
    })

    document.getElementById('navbar-close-button').addEventListener('click', () => {
        document.querySelector('.navbar-container').dataset.show = 'false'
    })

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', (event) => {
            if (event.srcElement.nextElementSibling.dataset.expand === 'false') {
                event.srcElement.nextElementSibling.dataset.expand = 'true'
                event.srcElement.nextElementSibling.style.height = document.querySelector('.faq-answer').firstElementChild.offsetHeight + 'px'
            } else {
                event.srcElement.nextElementSibling.dataset.expand = 'false'
                event.srcElement.nextElementSibling.style.height = '0px'   
            }
        })
    })
})