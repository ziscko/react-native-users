import React, {useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type User = {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
};

const apiURL = 'https://6663665862966e20ef0c7f22.mockapi.io/api/v1';

function App(): React.JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiURL}/products`)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data -->', error);
        setLoading(false);
      });
  }, []);

  const userCounter = useMemo(() => users.length, [users]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text style={styles.header}>API Users</Text>
          <Text style={styles.subHeader}>Total users: {userCounter}</Text>
          <FlatList
            data={users}
            keyExtractor={item => item?.id}
            renderItem={({item}) => (
              <View style={styles.userRow}>
                <Text style={styles.userId}>{item.id}</Text>
                <Text style={styles.userName}>{item.name}</Text>
                <Image
                  style={styles.avatar}
                  source={{uri: item.avatar}}
                  alt="User Avatar"
                />
                <Text style={styles.createdAt}>
                  {new Date(item.createdAt).toDateString()}
                </Text>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
  createdAt: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default App;
