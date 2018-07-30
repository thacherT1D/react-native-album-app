import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// class AlbumList extends Component {
//   state = { albums: [] };
//
//   componentWillMount() {
//     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
//       .then(response => this.setState({ albums: response.data }));
//   }
//
//   renderAlbums() {
//     return this.state.albums.map(album =>
//       <AlbumDetail key={album.title} album={album} />
//     );
//   }
//
//   render() {
//     console.log(this.state);
//     return (
//       <View>
//         {this.renderAlbums()}
//       </View>
//     );
//   }
// }

class AlbumList extends Component {
  componentWillMount() {
    axios.get('https://thachert1d-nightscout.herokuapp.com/api/v1/devicestatus')
      .then(response => console.log(response.data));
  }
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}


export default AlbumList;
