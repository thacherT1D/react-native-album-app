import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { readings: [] };

  componentWillMount() {
    axios.get('https://thachert1d-nightscout.herokuapp.com/api/v1/devicestatus')
      // .then(response => console.log(response.data[0]));
      // .then(response => this.setState({ readings: response.data }));
      .then(response => this.setState({ readings: response.data }));
  }

  renderReadings() {
    return this.state.readings.map(reading =>
      <AlbumDetail key={reading._id} reading={reading} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderReadings()}
      </View>
    );
  }
}

export default AlbumList;
