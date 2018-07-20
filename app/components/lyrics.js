import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
class Lyrics extends React.Component {
    static navigationOptions = {
      title: 'Songs',
    };
    render() {
      const { navigate } = this.props.navigation;
      const { name, lyric } = this.props.navigation.state.params;
      return (
        <View style={StyleSheet.container}>
          <Text>Title {name}</Text>
          <Text>Letra {lyric}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Lyrics;
