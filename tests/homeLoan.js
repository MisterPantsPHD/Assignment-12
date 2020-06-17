var formData = [
    {in: 'Provo' , res: 'Provo'},
    {in: 'Funky Town' , res: 'Funky Town'}
]

var formSubmit = function(browser,data) {
        hLObjects
        .click('@homeButton')
        .click('@nextButton')
        .setValue('@cityField' , data.in)
        .click('@nextButton')
        .click('@primaryHome')
        .click('@yesButton')
        .click('@yesButton')
        .click('@nextButton')
        .click('@excellentButton')  
        .click('@bothButton')
        .click('@nextButton')
        .click('@nextButton')
        .expect.element('@formOverview').text.to.contain(data.res)
        hLObjects
        .click('@startAgainButton')

}

var hLObjects
module.exports = {
    beforeEach: browser => {
     hLObjects = browser.page.homeLoanObjects()
     hLObjects.navigate()
},
    afterEach: browser => {
        browser.end

    },
    'Test': browser =>{
        browser
        formData.forEach(test => {
            formSubmit(browser , test)
            console.log(test.in)
            console.log(test.res)
        })
    }

}
