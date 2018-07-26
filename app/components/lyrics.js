import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

class Lyrics extends React.Component {
  constructor(props) {
      super(props);
      this.pdf = null;
    }
    /*static navigationOptions = {
      title: "Song",
    };*/
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('name'),
      };
    };
    render() {
      const { name, lyric } = this.props.navigation.state.params;
      const source = {uri: lyric, cache:false};

      return (
        <View style={styles.container}>
            <Pdf ref={(pdf)=>{this.pdf = pdf;}}
            source={source}
            onLoadComplete={(numberOfPages,filePath)=>{
                console.log(filePath);
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
    justifyContent: 'flex-start',
  },
  pdf: {
    flex:1,
    height: 200,
    width:Dimensions.get('window').width,
  }
});

export default Lyrics;
