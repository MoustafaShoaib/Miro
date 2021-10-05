import signup from "../../pageObject/signup";
import * as faker from "faker";

const signupPageObject = new signup();
Cypress.on("uncaught:exception", (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});

describe("signup UI flow", function () {
	beforeEach(() => {
		cy.clearCookies();
	});
	describe("signup UI Happy Flows", function () {
		it("signup successfully with valid data", function () {
			cy.navigateToMiroSite();

			cy.enterName(faker.name.findName());
			cy.enterWorkEmail(faker.internet.email());
			cy.enterPassword(faker.internet.password());

			signupPageObject.agreeToTerms_checkBox().click();
			signupPageObject.agreeToUpdates_checkBox().click();
			signupPageObject.getStartedNow_button().click();

			signupPageObject
				.checkYourEmail_text()
				.should("have.text", "Check your email");
		});

		it("signup successfully with valid data & without subscription to updates", function () {
			cy.navigateToMiroSite();

			cy.enterName(faker.name.findName());
			cy.enterWorkEmail(faker.internet.email());
			cy.enterPassword(faker.internet.password());

			signupPageObject.agreeToTerms_checkBox().click();
			signupPageObject.getStartedNow_button().click();

			signupPageObject
				.checkYourEmail_text()
				.should("have.text", "Check your email");
		});
	});
	describe("signup UI unhappy Flows", function () {
		it("missing username", function () {
			cy.navigateToMiroSite();

			cy.enterWorkEmail(faker.internet.email());
			cy.enterPassword(faker.internet.password());

			signupPageObject.agreeToTerms_checkBox().click();
			signupPageObject.agreeToUpdates_checkBox().click();
			signupPageObject.getStartedNow_button().click();

			signupPageObject
				.name_validation_message()
				.should("have.text", "Please enter your name.");
		});

		it("missing email", function () {
			cy.navigateToMiroSite();

			cy.enterName(faker.name.findName());
			cy.enterPassword(faker.internet.password());

			signupPageObject.agreeToTerms_checkBox().click();
			signupPageObject.agreeToUpdates_checkBox().click();
			signupPageObject.getStartedNow_button().click();

			signupPageObject
				.email_validation_message()
				.should("have.text", "Please enter your email address.");
		});
		it("missing password", function () {
			cy.navigateToMiroSite();

			cy.enterName(faker.name.findName());
			cy.enterWorkEmail(faker.internet.email());

			signupPageObject.agreeToTerms_checkBox().click();
			signupPageObject.agreeToUpdates_checkBox().click();
			signupPageObject.getStartedNow_button().click();

			signupPageObject
				.password_empty_validation_message()
				.should("have.text", "Please enter your password.\n\t\t\t");
		});

		it("enter weak password", function () {
			cy.navigateToMiroSite();

			cy.enterName(faker.name.findName());
			cy.enterWorkEmail(faker.internet.email());
			cy.enterPassword(faker.random.alphaNumeric(2));

			signupPageObject.agreeToTerms_checkBox().click();
			signupPageObject.agreeToUpdates_checkBox().click();
			signupPageObject.getStartedNow_button().click();

			signupPageObject
				.password_validation_message()
				.should("have.text", "Please use 8+ characters for secure password");
		});

		it("enter invalid workEmail", function () {
			cy.navigateToMiroSite();

			cy.enterName(faker.name.findName());
			cy.enterWorkEmail(faker.random.alphaNumeric(10));
			cy.enterPassword(faker.internet.password());

			signupPageObject.agreeToTerms_checkBox().click();
			signupPageObject.agreeToUpdates_checkBox().click();
			signupPageObject.getStartedNow_button().click();

			signupPageObject
				.email_validation_message()
				.should("have.text", "The email you entered is incorrect.");
		});

		it("missing to agree to miro terms checkbox", function () {
			cy.navigateToMiroSite();

			cy.enterName(faker.name.findName());
			cy.enterWorkEmail(faker.internet.email());
			cy.enterPassword(faker.internet.password());

			signupPageObject.agreeToUpdates_checkBox().click();
			signupPageObject.getStartedNow_button().click();
			signupPageObject
				.terms_validation_message()
				.should("have.text", "Please agree with the Terms to sign up.");
		});
	});
});
