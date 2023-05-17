import {useQuery} from '@tanstack/react-query';
import {getTime} from '../../services/api/time';

const QUERY_KEY_GET_TIME = 'get-time';

const useGetTime = () => {
  return useQuery({
    queryKey: [QUERY_KEY_GET_TIME],
    queryFn: getTime,
    refetchInterval: 1000,
  });
};

export {useGetTime};
