describe('Cermati Registration Flow', () => {
  let userData;

  before(() => {
    //DECLARE FIXTURE FOR TEST DATA
    cy.fixture('dummyUser.json').then((user) => {
      userData = user;
    });
  });

  beforeEach(() => {
    // Before each scenario, do this action which is to open the web
    cy.visit('https://www.cermati.com/app/gabung');
  });

  it('Succesfully Register User', () => {
    
    // Check initial state of the application, button should be disabled
    cy.get('#__next > main > div > div.superapp-container.content > div > button')
      .should('be.disabled');
    
    // Fill out the registration data using the fixture
    cy.get('#mobilePhone').type(userData.phone);
    cy.get('#email').type(userData.email);
    cy.get('#firstName').type(userData.firstName);
    cy.get('#lastName').type(userData.lastName);

    // Check the daftar button which should be enabled
    cy.get('#__next > main > div > div.superapp-container.content > div > button')
      .should('not.be.disabled')
    //  .click();
    //  If assertion is correct the click the button, but since this is only a test I will not be using the click function
  });
});