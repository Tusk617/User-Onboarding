describe("Testing our inputs and submitting our form", function() {
    beforeEach(function() {
        cy.visit("http://localhost:3000/")
    })
    it("Adding tests to input", function() {
        cy.get("input[name='name']")
            .type("Kory Hacker")
            .should("have.value", "Kory Hacker");
        cy.get("input[name='email']")
            .type("kory.hacker@gmail.com")
            .should("have.value", "kory.hacker@gmail.com");
        cy.get("input[name='password']")
            .type("password123")
            .should("have.value", "password123");
        cy.get("select[name='role']")
            .select("Mage")
            .should("have.value", "Mage");
        cy.get("input[name='terms']").check()
            .should("be.checked");
        cy.get('#submitButton').click();
    })
})