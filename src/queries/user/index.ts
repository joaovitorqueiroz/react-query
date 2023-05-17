import {useQuery, useMutation} from '@tanstack/react-query';
import {getUserList, getUserDetail, editUser} from '../../services/api/user';

const QUERY_KEY_USER_LIST = 'user-list';

const useGetUserList = () => {
  return useQuery([QUERY_KEY_USER_LIST], getUserList);
};

const QUERY_KEY_USER_Details = 'user-details';

const useGetUserDetails = (id: string) => {
  return useQuery([QUERY_KEY_USER_Details, id], () => getUserDetail(id));
};

const useEditUser = () => {
  return useMutation({mutationFn: editUser});
};

export {useGetUserList, useGetUserDetails, useEditUser};
