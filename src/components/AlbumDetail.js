import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = ({ reading }) => {
   return (
    <Card>
      <Text>Created at: {reading.created_at}</Text>
      <Text>BG: {reading.openaps.enacted.bg}</Text>
    </Card>
  );
};

export default AlbumDetail;
