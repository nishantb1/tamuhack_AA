import React, { Component } from "react";
import { View, Alert, Text, Image } from "react-native";
import Leaderboard from "react-native-leaderboard";

export default class Avatar extends Component {
  state = {
    data: DATA
  };


  render() {
    const leaderboardProps = {
      labelBy: "name",
      sortBy: "score",
      data: this.state.data,
      icon: "iconUrl",
      evenRowColor: "#edfcf9",
      renderRow: (item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10
          }}
        >
          <Image
            source={{ uri: item.iconUrl }}
            style={{ width: 20, height: 40, borderRadius: 20, marginRight: 10 }}
          />
          <Text>{item.name}</Text>
          <Text>{item.score}</Text>
        </View>
      )
    };

    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* Header */}
        <View
          style={{
            paddingTop: 50,
            backgroundColor: "black",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 30, color: "white" }}>Points Leaderboard</Text>
        </View>
        
        {/* Leaderboard */}
        <Leaderboard {...leaderboardProps} />
      </View>
    );
  }
}

const DATA = [
  {
    name: "Rand",
    score: null,
    iconUrl:
      "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
  },
  {
    name: "Rand",
    score: 12,
    iconUrl:
      "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
  },
  {
    name: "Rand",
    score: 244,
    iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEPElEQVR4nO2aa4hVVRTHfzONWaaERWmXJAWRMhgK+hAViAVlUUGiUtGLsaIPgiYVPcQEH/jBDz38IFRQMRFWPr6oJEVpVuo4htPL0lE0LcUMX4Q26Y0F/w2Lw73nnjtn33MH8g+LO3uftdfaa++119577YHz+P+gDfgK+BYYWoVnJPCdqCmwzv0I3JfCMxsoiz4BWioY8bPjuZom4JjrwHrg+sT3EnAcOAecEN+LKUYY3UkT8LWUn9NvH7AUuFzfP1D9u8A9wFngX+CuhBH2u0Z/P9sMQ96S8oXAMnXSyn8Br8nAY+q04RV9PwrsdEbY9+dUNpkBNiAPAZ3AEWBlowyZlVDeDnyWcBXjCbD1scJ9C0YYJqnue+BlzXYYmEBf5u3w5/LxbmA5sAB4HHhBCkypx/3q5AZFLY9hwFZFqGAEWuTlBJ1RQAnle/Masq2CEk/mPjGwGfgdeBuYLKNnSsf2ChGvbkyQvxvNBRYDH2tUT6oDjcCFwG8yZEosoZ0SaJGoKDwlnT8BrbGEXuX2BJuhIvCrDDFXGxRL6CC5U/DXIrDFrcNeoKNC8MiMNgnY44RuitvfVN1PyIige7fq2uoVstsJsal+LM+o5PCGDrfwjb7J2nhDIsTage8aikcrcLd29T7Xn+TeVRWfVtkzzMAisdXpNkNWybC6olhJR/RX3aZo/up3cO96MegX4BHgAukIa7NT/cmN1RJoB79r3Wm1UbQHeBqYp7LNRG6UnH+urnCYC7Smnxcja7O2iswjzq1yz8icjKOY53Y3KoP8OXkN8XE8jfIii7vlgoW6HwaAId0RdGRS1GjXioZaitaqQ/XC2qwr0pC9DQ65adQb05A7EseEougUcHtMQ8Id/Z8aSblYmCpddgeaGFPwQRnyZArPIo2gpYhqIQvvS24jjoIhbqovSuE7KR7LutRCFt4x7robBcNcRvGKFL6F6qCljGohC2+7O0xGwy4JfZji8Lx0vhdT6Hw3OtWeCGKiBByWzqiL/TIl0EL2fYTqbwXeBPYDO+pMpLUoB7BfMkyW4Qagp5EpqBuBP6TA0kNdiZi/pR8ZweS1usetxy+AS2kQRii76O8MFkpvkhHhdpcVLWq7yN0/ysDrMfNZtV6i/gQuUd0EhckDCtdZsEkzEJJ+Nvp/S/Y4CsBoN/236NITynbkH9yPxyKTMU1lW2uFIZxYw5rpU5I7qxGId647w4XnvBkUiJvdLBg9qPrhWvQbU9p2iYwXtQ1yDtXhmtHwjpSf1sUqPEeXazw3hGi3UW3G6mHH6qbTBAx374H7lDkva19Iy3qUxBMeSw+5TEwrTcIo3af9XvBAxmO6b/NhM1wqiYt1+DvtZucZvTpV4p3lZsGCxaMMMIxL5I33KTt5HTBeESrcayxSvdHInTsGbgM+qpKVtFl7v6gNLxZsFpZo996sf+G4Mpr082Bg4z+QEzS4tJnQrQAAAABJRU5ErkJggg=="
  },
  {
    name: "Rand",
    score: 0,
    iconUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr27ZFBaclzKcxg2FgJh6xi3Z5-9vP_U1DPcB149bYXxlPKqv-"
  },
  {
    name: "Rand",
    score: 20,
    iconUrl: "https://static.witei.com/static/img/profile_pics/avatar4.png"
  },
  {
    name: "Rand",
    score: 69,
    iconUrl: "https://static.witei.com/static/img/profile_pics/avatar4.png"
  },
  {
    name: "Rand",
    score: 101,
    iconUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPis8NLdplTV1AJx40z-KS8zdgaSPaCfNINLtQ-ENdPvrtMWz"
  },
  {
    name: "Rand",
    score: 41,
    iconUrl: "http://ttsbilisim.com/wp-content/uploads/2014/09/20120807.png"
  },
  {
    name: "Rand",
    score: 80,
    iconUrl:
      "https://cdn.dribbble.com/users/223408/screenshots/2134810/me-dribbble-size-001-001_1x.png"
  },
  {
    name: "Rand",
    score: 22,
    iconUrl:
      "https://cdn.dribbble.com/users/223408/screenshots/2134810/me-dribbble-size-001-001_1x.png"
  },
  {
    name: "Rand",
    score: null,
    iconUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSlzi6GEickw2Ft62IdJTfXWsDFrOIbwXhzddXXt4FvsbNGhp"
  },
  {
    name: "Rand",
    score: 25,
    iconUrl:
      "https://landofblogging.files.wordpress.com/2014/01/bitstripavatarprofilepic.jpeg?w=300&h=300"
  },
  {
    name: "Rand",
    score: 30,
    iconUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr27ZFBaclzKcxg2FgJh6xi3Z5-9vP_U1DPcB149bYXxlPKqv-"
  }
];
