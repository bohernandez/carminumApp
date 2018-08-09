import React from 'react';
import { Button, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Lyrics from './app/components/lyrics';

let listaCantos = [
  {
    title: "E. Canta Iglesia",
    lyric: "bundle-assets://pdf/canta_Iglesia.pdf",
    mp3file: "url"
  },
  {
    title: "Pueblo de Reyes",
    lyric: "bundle-assets://pdf/pueblo_de_reyes.pdf",
    mp3file: "url"
  },
  {
    title: "Piedad | Gloria",
    lyric: "bundle-assets://pdf/piedad_gloria.pdf",
    mp3file: "url"
  },
  {
    title: "Antifona | Aleluya",
    lyric: "bundle-assets://pdf/aleluya.pdf",
    mp3file: "url"
  },
  {
    title: "Ofrenda",
    lyric: "bundle-assets://pdf/ofertorio.pdf",
    mp3file: "url"
  },
  {
    title: "Santo",
    lyric: "bundle-assets://pdf/santo_roma.pdf",
    mp3file: "url"
  },
  {
    title: "Padre Nuestro",
    lyric: "bundle-assets://pdf/padre_nuestro.pdf",
    mp3file: "url"
  },
  {
    title: "Cordero Mejia",
    lyric: "bundle-assets://pdf/cordero_mejia.pdf",
    mp3file: "url"
  },
  {
    title: "Comunion",
    lyric: "bundle-assets://pdf/comunion.pdf",
    mp3file: "url"
  },
  {
    title: "Final",
    lyric: "bundle-assets://pdf/final.pdf",
    mp3file: "url"
  },
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