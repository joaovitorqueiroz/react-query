import React from 'react';
import {Image, StyleSheet} from 'react-native';

const user = {
  createdAt: '2023-05-14T12:50:12.164Z',
  name: 'Kenny Connelly',
  avatar:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/182.jpg',
  bio: 'Quam quasi dolor fuga deserunt tenetur sed ab tempore voluptatem. Id quidem aliquid vel beatae dolore. Nam deserunt ratione perferendis aut pariatur. Voluptatem maxime esse sed quae itaque. Neque esse at praesentium voluptatum magnam.',
  id: '4',
};

const Avatar = () => {
  return <Image style={styles.avatar} source={{uri: user.avatar}} />;
};

const styles = StyleSheet.create({
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
});
export default Avatar;
