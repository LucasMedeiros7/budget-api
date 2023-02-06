import { api } from './api';
import { cacheUtil } from '../utils/cache-util';
import { User } from '../models';

interface FetchUsersResponse {
  users: User[];
}

export async function fetchUsers(): Promise<FetchUsersResponse> {
  const usersData = cacheUtil.get('user-data') as User[];

  if (!usersData) {
    const { data } = await api.get<User[]>('/users');
    cacheUtil.set({ key: 'user-data', data });
    return {
      users: data,
    };
  }

  return {
    users: usersData,
  };
}
