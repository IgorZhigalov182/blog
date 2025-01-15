/// <reference types="cypress" />

import * as commonComands from './commands/common';
import * as profileComands from './commands/profile';
import * as articleComands from './commands/article';
import * as commentsComands from './commands/comments';
import * as ratingComands from './commands/rating';

Cypress.Commands.addAll(commonComands);
Cypress.Commands.addAll(profileComands);
Cypress.Commands.addAll(articleComands);
Cypress.Commands.addAll(commentsComands);
Cypress.Commands.addAll(ratingComands);

export {};
