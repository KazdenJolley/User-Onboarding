describe('User-Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    // Declare Variables
    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email')
    const passwordInput = () => cy.get('input[name=password')
    const checkbox = () => cy.get('input[name=terms]')
    const submitButton = () => cy.get('button[id=submit]')


    // Write Tests
    it('sanity check to make sure tests work', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('Test Name Input', () => {
        nameInput()
            .should('have.value', '')
            .type('Jonathan Richardson III')
            .should('have.value', 'Jonathan Richardson III')
    })

    it('Test Email Input', () => {
        emailInput()
            .should('have.value', '')
            .type('j.richardson@fakeemail.com')
            .should('have.value', 'j.richardson@fakeemail.com')
    })

    it('Test Password Input', () => {
        passwordInput()
            .should('have.value', '')
            .type('Password1')
            .should('have.value', 'Password1')
    })

    it('Test Checkbox', () => {
        checkbox()
            .check()
            .should('be.checked')
    })

    it('Test Submit Button', () => {
        nameInput().type('Johnny')
        submitButton().should('be.disabled')
        emailInput().type('j.bravo@cn.com')
        submitButton().should('be.disabled')
        passwordInput().type('P@ssword')
        submitButton().should('not.be.disabled')
        checkbox().check()
        submitButton().click()
        submitButton().should('be.disabled')
        nameInput().should('have.value', '')
        emailInput().should('have.value', '')
        passwordInput().should('have.value', '')
        checkbox().should('not.be.checked')
    })
})
