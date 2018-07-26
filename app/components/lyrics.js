import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';

class Lyrics extends React.Component {
    static navigationOptions = {
      title: 'Songs',
    };
    render() {
      const { navigate } = this.props.navigation;
      const { name, lyric } = this.props.navigation.state.params;
      const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};

      return (
        <View style={StyleSheet.container}>
          <Text>Title {name}</Text>
          <Text>Letra {lyric}</Text>
          <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf} />
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
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
  }
});

export default Lyrics;
