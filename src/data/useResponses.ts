import { Responses } from 'types/responses';

import useApi from '../utils/useApi';

const useResponses = () => {
  const { data, ...rest } = useApi<Responses>('responses');

  return {
    responses: data || {},
    usernames: Object.keys(data || {}),
    ...rest,
  };
};

export default useResponses;
