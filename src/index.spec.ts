import { server } from './index';

describe('server', () => {
  it('shouls return 1', () => {
    const response = server();

    expect(response).toBe(1);
  });
});
