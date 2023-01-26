import { NextApiRequest, NextApiResponse } from 'next';
import APIHandler from '../APIHandler';

describe('APIHandler', () => {
  let apiHandler: APIHandler;
  let req: NextApiRequest;
  let res: NextApiResponse | any;

  beforeEach(() => {
    apiHandler = new APIHandler();
    req = { method: 'GET' } as NextApiRequest;

    res = {
      status: jest.fn(() => res),
      end: jest.fn(() => res),
      json: jest.fn(() => res)
    } as NextApiResponse | any;
  });

  it('should return a 400 status code for GET requests', async () => {
    await apiHandler.handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a 400 status code for POST requests', async () => {
    req.method = 'POST';
    await apiHandler.handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a 400 status code for PUT requests', async () => {
    req.method = 'PUT';
    await apiHandler.handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a 400 status code for DELETE requests', async () => {
    req.method = 'DELETE';
    await apiHandler.handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.end).toHaveBeenCalled();
	});
});