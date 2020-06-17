module.exports = {
    url: 'http://localhost:3000/#/',
    elements: {
        homeButton: 'button.home-btn',
        nextButton: 'button[name="nextButton"]',

        loanType: 'select#loanTypes',
            loanOptionHP: 'option[value="Home Purchase"]',
            loanOptionR: 'option[value="Refinance"]',
            loanOptionHE: 'option[value="Home Equity"]',
        propertyType: 'select#propertyTypes',
            propOptionSFH: 'option[value="Single Family Home"]',
            propOptionTH: 'option[value="Town Home"]',
            propOptionC: 'option[value="Condo"]',
            propOptionMFD: 'option[value="Multi Family Dwelling"]',
            propOptionMH: 'option[value="Mobile Dwelling"]',

        cityField: 'input[name="city"]',

        primaryHome: 'button[value="Primary Home"]',
        rentalProperty: 'button[value="Rental Property"]',
        secondaryHome: 'button[value="Secondary Home"]',

        yesButton: 'button[name="yesButton"]',
        noButton: 'button[name="noButton"]',

        priceField: 'input[name="price"]',
        paymentField: 'input[name="down"]',

        excellentButton: 'button[value="excellent"]',
        goodButton: 'button[value="good"]',
        fairButton: 'button[value="fair"]',
        poorButton: 'button[value="poor"]',

        noBOrFButton: 'button[value="Has never been in bankruptcy"]',
        bankruptcyButton: 'button[value="Has had bankruptcy before"]',
        forclosureButton: 'button[value="Has had a foreclosure before"]',
        bothButton: 'button[value="Has had both a foreclosure and a bankruptcy"]',

        addressField: 'input#addressOne',
        addressFieldCont: 'input#addressTwo',
        cityStreetZipField: 'input#addressThree',
        firstNameField: 'input#first',
        lastNameField: 'input#last',
        emailField: 'input#email',
        startAgainButton: 'button[name="restartButton"]',
        sendButton: 'button[name="sendButton"]',
        formOverview: 'body'
    }


}