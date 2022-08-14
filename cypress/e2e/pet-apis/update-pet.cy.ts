import { PET } from '../../constants';

describe('PUT /pet API', () => {
  beforeEach(() => {
    cy.createPet(PET);
  });

  afterEach(() => {
    cy.deletePet(PET.id);
  });

  it('should return 200 when the pet is successfully updated', () => {
    const PET_UPDATED = {
      id: 10,
      name: 'kitten',
      category: {
        id: 1,
        name: 'Cats',
      },
      tags: [
        {
          id: 0,
          name: 'cat',
        },
      ],
      status: 'available',
    };
    cy.request('PUT', `/pet`, PET_UPDATED).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('should return 500 when the petId does not exist', () => {
    const PET_UPDATED = {
      id: 1000000000000000000000000000000000,
      name: 'kitten',
      category: {
        id: 1,
        name: 'Cats',
      },
      tags: [
        {
          id: 0,
          name: 'cat',
        },
      ],
      status: 'available',
    };
    cy.deletePet(PET.id);
    cy.request({
      method: 'PUT',
      url: `/pet`,
      body: PET_UPDATED,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(500);
    });
  });

  xit('should return 400 when the petId is invalid', () => {
    const PET_UPDATED = {
      id: `abc`,
      name: 'kitten',
      category: {
        id: 1,
        name: 'Cats',
      },
      tags: [
        {
          id: 0,
          name: 'cat',
        },
      ],
      status: 'available',
    };
    cy.request({
      method: 'PUT',
      url: `/pet`,
      body: PET_UPDATED,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
