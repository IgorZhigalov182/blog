describe('User goes to the articles page', () => {
  beforeEach(() => {
    cy.login().then(() => cy.visit('articles'));
  });

  it('User gets article list', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  it('User select a category for which there are no articles', () => {
    cy.visit('articles&sort=createdAt&order=asc&type=QWERTYTEST');
    cy.getByTestId('ArticleListItem').should('not.exist');
  });
});
