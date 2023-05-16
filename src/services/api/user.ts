const BASE_URL = 'https://6461a41f185dd9877e4045e7.mockapi.io';

const getUserList = () => fetch(`${BASE_URL}/user`);

const getUserDetail = (id: string) => fetch(`${BASE_URL}/user/${id}`);

export default {getUserList, getUserDetail};
