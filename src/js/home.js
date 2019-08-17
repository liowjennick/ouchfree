window.addEventListener('DOMContentLoaded', () => {
    var app = new Vue({
        el: '#homepage-container',
        name: 'homepage',
        components: {
            vuejsDatepicker
        },
        data () {
            return {
                dateOfBirth: new Date(2016, 9, 16)
            }
        }
    })

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

    document.querySelector('.button-container').querySelectorAll('.green-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.cta-content').dataset.steps = "2"
        })
    })

    document.querySelector('.cta-close-button').addEventListener('click', () => {
        document.querySelector('.cta-content').dataset.steps = "1"
    })
})