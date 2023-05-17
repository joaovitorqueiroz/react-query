import {useQuery} from '@tanstack/react-query';
import {getUserList} from '../../services/api/user';

const QUERY_KEY_USER_LIST = 'user-list';

const useGetUserList = () => {
  return useQuery([QUERY_KEY_USER_LIST], getUserList);
};

export {useGetUserList};
