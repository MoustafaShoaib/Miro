import signup from "../pageObject/signup";
const pageObject = new signup();

Cypress.Commands.add("navigateToMiroSite", () => {
	cy.visit("https://miro.com/signup/");
    pageObject.signupTitle().should("have.text", "Get started free today");
});

Cypress.Commands.add("enterName", (Name) => {
    pageObject.name_textField().clear();
    pageObject.name_textField().type(Name);
});

Cypress.Commands.add("enterWorkEmail", (workEmail) => {
	pageObject.workEmail_textField().clear();
	pageObject.workEmail_textField().type(workEmail);
});

Cypress.Commands.add("enterPassword", (password) => {
	pageObject.password_textField().clear();
	pageObject.password_textField().type(password);
});