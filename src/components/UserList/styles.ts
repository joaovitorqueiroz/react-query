import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFlatList: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 24,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
