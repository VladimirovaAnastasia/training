import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endPoint: string, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endPoint, query));
  return fetch(uri).then((res) => res.json());
}
export default req;
