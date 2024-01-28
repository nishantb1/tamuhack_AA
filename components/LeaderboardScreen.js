import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Leaderboard from 'react-native-leaderboard';

const LeaderboardScreen = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      import ('./users.json')
        .then(({default: users }) => {
          const leaderboardData = users.map((user, index) => ({
            userName: user.username,
            highScore: user.points,
            key: index,
          }));
          setData(leaderboardData);
        })
        .catch(err => {
          console.error('Failed to load users data', err);
        })
    }, []);

      return (
        <View style={{flex: 1, paddingTop: 50, paddingHorizontal: 20}}>
            <Leaderboard
                data={data}
                sortBy='highScore'
                labelBy='userName'/>
        </View>
      );
};

export default LeaderboardScreen;