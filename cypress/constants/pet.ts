/* eslint-disable prettier/prettier */
import { PetInterface } from '../types';

// eslint-disable-next-line prettier/prettier
export const PET: PetInterface = {
  id: 10,
  name: 'puppy',
  category: {
    id: 1,
    name: 'Dogs',
  },
  photoUrls: ['photo_url'],
  tags: [
    {
      id: 0,
      name: 'dog',
    },
  ],
  status: 'available',
};
