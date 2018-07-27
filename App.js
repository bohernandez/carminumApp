import React from 'react';
import { Button, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Lyrics from './app/components/lyrics';

let listaCantos = [
  {
    title: "E. Canta Iglesia",
    lyric: "bundle-assets://pdf/canta_iglesia.pdf",
    mp3file: "url"
  },
  {
    title: "Pueblo de Reyes",
    lyric: "bundle-assets://pdf/pueblo_reyes.pdf",
    mp3file: "url"
  },
  {
    title: "Piedad Dm",
    lyric: "bundle-assets://pdf/pueblo_reyes.pdf",
    mp3file: "url"
  },
  {
    title: "Gloria Geombini",
    lyric: "bundle-assets://pdf/pueblo_reyes.pdf",
    mp3file: "url"
  },
  {
    title: "Antifona | Aleluya",
    lyric: "bundle-assets://pdf/pueblo_reyes.pdf",
    mp3file: "url"
  },
  {
    title: "Ofrenda",
    lyric: "bundle-assets://pdf/pueblo_reyes.pdf",
    mp3file: "url"
  }
];

class App extends React.Component {
  static navigationOptions = {
    title: 'Agenda',
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        {
          listaCantos.map(({title, lyric})=> (
            <Button
              key={title}
              title={title}
              onPress={() =>
                navigate('Lyric', { name: title, lyric: lyric })
              }
            />
          ))
        }
      </ScrollView>
    );
  }
}

export default createStackNavigator({
  Home: App,
  Lyric: Lyrics,
},{
  initialRouteName: 'Home',
}
);