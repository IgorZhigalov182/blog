import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Routing', () => {
  describe('User is not authorized', () => {
    it('Route to the main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Route to the profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Route to the not existing page', () => {
      cy.visit('/qwertyqwertyqwerty');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });

  describe('User is authorized', () => {
    beforeEach(() => cy.login());

    it('Route to the profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('Route to the articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlePage')).should('exist');
    });
  });
});
