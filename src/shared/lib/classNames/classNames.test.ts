import { classNames } from './classNames';

describe('classnames', () => {
  test('with only first params', () => {
    expect(classNames('testClass')).toBe('testClass');
  });
  test('with additional class', () => {
    expect(classNames('testClass', {}, ['add'])).toBe('testClass add');
  });
  test('with mods', () => {
    const expected = 'testClass add active hover';
    expect(classNames('testClass', { active: true, hover: true }, ['add'])).toBe(expected);
  });

  test('with mods (true/false)', () => {
    const expected = 'testClass add active';
    expect(classNames('testClass', { active: true, scrollable: false }, ['add'])).toBe(expected);
  });

  test('with mods undefinded', () => {
    const expected = 'testClass add active';
    expect(
      classNames('testClass', { active: true, scrollable: undefined, light: null }, ['add'])
    ).toBe(expected);
  });
});
