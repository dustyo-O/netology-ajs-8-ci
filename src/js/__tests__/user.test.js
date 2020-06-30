import { loadUser } from '../user';

import { httpGet } from '../http';

jest.mock('../http');

test('loadUser', () => {
  httpGet.mockReturnValue('{}');

  loadUser(1);

  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});
