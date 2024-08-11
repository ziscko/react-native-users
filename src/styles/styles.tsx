import {StyleSheet} from 'react-native'

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  smallText: {
    fontSize: 12,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  pb2: {
    paddingBottom: 10,
  },
})

export const homeScreenStyles = StyleSheet.create({
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userId: {
    width: 50,
    fontSize: 16,
  },
  userName: {
    width: 100,
    fontSize: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  avatarImg: {
    width: 200,
    height: 200,
    margin: 'auto',
  },
  createdAt: {
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 20,
    color: '#888',
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
})

export const userScreenStyles = StyleSheet.create({
  userInfo: {
    fontSize: 16,
    padding: 5,
  },
})
