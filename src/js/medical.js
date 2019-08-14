window.addEventListener('DOMContentLoaded', () => {
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