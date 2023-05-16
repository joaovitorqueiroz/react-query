import {User} from '../../models';
import client from '../client';

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getUserList = () =>
  client.get<User[]>('/user').then(async res => {
    await delay(2000);
    return res.data;
  });

const getUserDetail = (id: string): Promise<User> =>
  client.get<User>(`/user/${id}`).then(async res => {
    await delay(2000);
    return res.data;
  });

export type EditUser = {
  id: string;
  name?: string;
  bio?: string;
};

const editUser = (user: EditUser) =>
  client.put(`/user/${user.id}`, user).then(async res => {
    await delay(200);
    return res.data;
  });

export {getUserList, getUserDetail, editUser};
