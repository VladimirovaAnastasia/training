import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргумента: getPokemons и пустой объект, на выходе получить объект с полями pathname, protocol и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента: getPokemons и объект {name: Pikachu}, на выходе получить объект с полями pathname, protocol и query {name: Pikachu}', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });
});
