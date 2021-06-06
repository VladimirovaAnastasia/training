import toCapitalizeFirstLe from './example';

describe('toCapitalizeFirstLe', () => {
  test('Должна принимать строку c пробелом и возвращать строку c пробелом', () => {
    const str = toCapitalizeFirstLe(' ');

    expect(str).toEqual(' ');
  });

  test('Должна принимать пустую строку и возвращать пустую строку', () => {
    const str = toCapitalizeFirstLe('');

    expect(str).toEqual('');
  });

  test('Должна принимать строку из цифр и вернуть ту же строку', () => {
    const str = toCapitalizeFirstLe('1234534');

    expect(str).toEqual('1234534');
  });

  test('Должна принимать строку и возвращать ее в формате: 1 буква - заглавная, остальные - строчные', () => {
    const str = toCapitalizeFirstLe('Я ЛЮБЛЮ РЕАКТ!');

    expect(str).toEqual('Я люблю реакт!');
  });

  test('Должна принимать строку и возвращать ее в формате: 1 буква - заглавная, остальные - строчные', () => {
    const str = toCapitalizeFirstLe('я люблю реакт!');

    expect(str).toEqual('Я люблю реакт!');
  });

  test('Должна принимать строку и возвращать ее в формате: 1 буква - заглавная, остальные - строчные', () => {
    const str = toCapitalizeFirstLe('я ЛюБлЮ рЕакТ!');

    expect(str).toEqual('Я люблю реакт!');
  });
});
