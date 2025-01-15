describe('User goes to the articles page', () => {
  beforeEach(() => {
    cy.login().then(() => cy.visit('articles'));
  });

  it('User gets article list', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  // На стабах (фикстурах)
  it('User gets article list', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  it('User select a category for which there are sno articles', () => {
    cy.visit('articles&sort=createdAt&order=asc&type=QWERTYTEST');
    cy.getByTestId('ArticleListItem').should('not.exist');
  });

  it.skip('Failed test (for skip)', () => {
    cy.visit('articles&sort=createdAt&order=asc&type=QWERTYTEST');
    cy.getByTestId('TEST').should('exist');
  });
});
