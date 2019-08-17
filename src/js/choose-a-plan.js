window.addEventListener('DOMContentLoaded', () => {
    var app = new Vue({
        el: '#choose-a-plan-container',
        name: 'choose-a-plan',
        components: {
            vuejsDatepicker
        },
        data () {
            return {
                step: 1,
                dateOfBirth: new Date(2016, 9, 16)
            }
        },
        methods: {
            submitForm () {
                // some function here
            }
        }
    })
})
