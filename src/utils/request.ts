import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endPoint: string) {
  const uri = Url.format(getUrlWithParamsConfig(endPoint));
  return fetch(uri).then((res) => res.json());
}
export default req;
