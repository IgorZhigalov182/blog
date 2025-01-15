let profileId: string;

describe('User goes to the profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then(profile => {
      profileId = profile.id;
      cy.visit(`/profile/${profile.id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('success opening profile', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
  });

  it('user edit profile', () => {
    const newName = 'igor';
    const newLastName = 'zhigalov';

    cy.updateProfile(newName, newLastName);
    cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
    cy.getByTestId('ProfileCard.lastname').should('have.value', newLastName);
  });
});
