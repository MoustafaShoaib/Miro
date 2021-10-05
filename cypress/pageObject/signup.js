class signup {
	signupTitle() {
		cy.get(".signup__title-form");
		return cy.get(".signup__title-form");
	}

	name_textField() {
		return cy.get("#name").click();
	}

	workEmail_textField() {
		return cy.get("#email").click();
	}
	password_textField() {
		return cy.get("#password");
	}

	agreeToTerms_checkBox() {
		return cy.get(
			":nth-child(1) > .mr-checkbox-1 > .mr-checkbox-1__wrap > .mr-checkbox-1__check > .mr-checkbox-1__icon"
		);
	}

	agreeToUpdates_checkBox() {
		return cy.get(
			".signup__checkbox-list > :nth-child(2) > .mr-checkbox-1 > .mr-checkbox-1__wrap > .mr-checkbox-1__check"
		);
	}

	checkYourEmail_text() {
		return cy.get(".signup__title-form");
	}

	getStartedNow_button() {
		return cy.get(".signup__submit");
	}
	email_validation_message() {
		return cy.get("#emailError");
	}

	password_empty_validation_message() {
		return cy.get(".js-empty-password");
	}

	name_validation_message() {
		return cy.get("#nameError");
	}

	password_validation_message() {
		return cy.get("#password-hint > #signup-form-password");
	}
	terms_validation_message() {
		return cy.get("#termsError");
	}
}

export default signup;
