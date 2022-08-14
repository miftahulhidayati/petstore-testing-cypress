import { PET } from '../../constants';
import { PetInterface } from '../../types';
PET.status = 'sold';

describe('GET /pet/findByStatus API', () => {
  beforeEach(() => {
    cy.createPet(PET);
  });

  afterEach(() => {
    cy.deletePet(PET.id);
  });

  it('should return 200 when a valid status is entered', () => {
    cy.request('GET', `/pet/findByStatus?status=sold`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  // skipping for now, needs to be fixed
  xit('should return an array with the pet found', () => {
    cy.request('GET', `/pet/findByStatus?status=sold`).then((response) => {
      expect(doesObjectExsistsInArray(response.body, PET)).to.be.true;
    });
  });
  it('shoild return array when the pet is found', () => {
    cy.request('GET', `/pet/findByStatus?status=sold`).then((response) => {
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.a('array');
    });
  });

  it('should return 200 & an empty array when the tag is invalid', () => {
    cy.deletePet(PET.id);
    cy.request({
      method: 'GET',
      url: `/pet/findByStatus?status=buy`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal([]);
    });
  });
});

function doesObjectExsistsInArray(
  pets: PetInterface[],
  pet: PetInterface,
): boolean {
  return pets.includes(pet);
}
