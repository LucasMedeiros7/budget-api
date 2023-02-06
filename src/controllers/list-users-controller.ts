import { Request, Response } from 'express';
import { fetchUsers } from '../services/fetch-users';

async function ListUsersController(
  _request: Request,
  response: Response
): Promise<Response> {
  try {
    const users = await fetchUsers();
    return response.json(users);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
}

export { ListUsersController };
