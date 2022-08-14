import { generateRandomUsername } from '../../support/generate-random-username';

const USERNAME = generateRandomUsername();

describe('DELETE /user/{username} API', () => {
  beforeEach(() => {
    cy.loginUser(USERNAME);
  });

  afterEach(() => {
    cy.deleteUser(USERNAME);
  });

  it('should return 200 when the user is successfully deleted', () => {
    cy.request('DELETE', `/user/${USERNAME}`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('should return 404 when the username does not exist', () => {
    cy.request({
      method: 'DELETE',
      url: `/user/${USERNAME}123`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
