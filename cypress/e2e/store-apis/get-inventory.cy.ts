import { ORDER } from '../../constants';

describe('GET /store/inventory API', () => {
  beforeEach(() => {
    cy.createOrder(ORDER);
  });

  it('should return 200 when the inventory is successfully returned', () => {
    cy.request('GET', `/store/inventory`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('should return an object with inventory count by status', () => {
    cy.request('GET', `/store/inventory`).then((response) => {
      assert.isNotNull(response.body, 'is not null');
      // expect(response.body).to.have.property(
      //   'sold',
      //   'string',
      //   'unavailable',
      //   'avialable',
      //   'Avalible',
      //   'pending',
      //   'avaliable',
      //   'pending',
      //   'available',
      //   'Not Available',
      //   'ex ipsum',
      //   'status',
      // );
    });
  });
});
