import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('one param', () => {
    const params = getQueryParams({ search: 'TypeScript' });
    expect(params).toBe('?search=TypeScript');
  });

  test('some params', () => {
    const params = getQueryParams({ search: 'TypeScript', order: 'desc' });
    expect(params).toBe('?search=TypeScript&order=desc');
  });
  test('some params with undefinded', () => {
    const params = getQueryParams({ search: 'TypeScript', order: undefined });
    expect(params).toBe('?search=TypeScript');
  });
});
