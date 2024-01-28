import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Leaderboard from 'react-native-leaderboard';

const LeaderboardScreen = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      import('./users.json')
        .then(({ default: users }) => {
          const leaderboardData = users.map((user, index) => ({
            userName: user.username,
            highScore: user.points,
            key: index,
          }));
          setData(leaderboardData);
        })
        .catch(err => {
          console.error('Failed to load users data', err);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Leaderboard</Text>
            <Leaderboard
                data={data}
                sortBy='highScore'
                labelBy='userName'
                icon='iconUrl' 
                evenRowColor='#f8f8f8' 
                oddRowColor='#fff' 
                style={styles.leaderboard}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#F7F7F7', 
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        paddingBottom: 20, 
        textAlign: 'center', 
    },
    leaderboard: {
        borderRadius: 10, 
        overflow: 'hidden', 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },
});

export default LeaderboardScreen;
