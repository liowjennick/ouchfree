window.addEventListener('DOMContentLoaded', () => {
    var app = new Vue({
        el: '#details-container',
        name: 'detailspage',
        components: {
            vuejsDatepicker
        },
        data () {
            return {
                dateOfBirth: new Date(2016, 9, 16)
            }
        }
    })
})