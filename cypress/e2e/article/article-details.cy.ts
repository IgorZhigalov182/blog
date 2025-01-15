let articleId = '';

describe('User goes to the article page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then(article => {
      articleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });

  afterEach(() => cy.removeArticle(articleId));

  it('User sees article content', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });

  it('User sees article recommendations list', () => {
    cy.getByTestId('ArticleRecommendationList').should('exist');
  });

  it('User write a comment', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });

  // Пример на фикстурах (стабах)
  it('User send star feedback', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRating(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
});
