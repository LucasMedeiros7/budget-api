import { describe, expect, it } from 'vitest';
import { fetchUsers } from '../../src/services/api/fetch-users';

describe('Fetch Users', () => {
  it('Should be able fetch all users', async () => {
    const { users } = await fetchUsers();

    expect(users[0]).toHaveProperty('id');
    expect(users[0]).toHaveProperty('name');
    expect(users[0]).toHaveProperty('tax');
  });
});
