import request from 'supertest';
import { app } from '../app';
import { describe, expect, it } from 'vitest';

describe('[ POST ] /budget', () => {
  it('should return 400 when userId is not provided', async () => {
    const response = await request(app)
      .post('/budget')
      .send({ productsId: [1, 2, 3] });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'UserId is required!' });
  });

  it('should return 400 when productsId is not provided', async () => {
    const response = await request(app).post('/budget').send({ userId: 1 });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message:
        'ProductsId is required, please provide at least one product id!',
    });
  });

  it('should return 200 and the budget calculation', async () => {
    const response = await request(app)
      .post('/budget')
      .send({ userId: 1, productsId: [1, 2, 3] });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('total_budget');
  });
});
