import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

interface IOptions {
  method: string;
  body?: string;
}

interface IGetUrlParametersWithConfig {
  method: string;
  uri: Partial<URL>;
  body: object;
}

async function req<T>(endPoint: string, query?: object): Promise<T> {
  const { method, uri, body }: IGetUrlParametersWithConfig = getUrlWithParamsConfig(endPoint, query);

  const options: IOptions = {
    method,
  };

  if (Object.keys(body).length > 0) {
    options.body = JSON.stringify(body);
  }

  return fetch(Url.format(uri), options).then((res) => res.json());
}
export default req;
