import {
    ActivityIndicator,
    Text,
    ViewPropTypes,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

const Feed = ({ style = null, commentsForItem, onPressComments }) => {

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [items, setItems] = React.useState([]);


  React.useEffect(() => {
    (
      async () => {
        try {
          const itemsFetch = await fetchImages();
          setLoading(false);
          setItems(itemsFetch);
        } catch (error) {
          console.log(error);
          setLoading(false);
          setError(true);
        }
      }
    )();
  }, [])

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error...</Text>;
  }

  return (
    <View style={style}>
      <CardList
        items={items}
        commentsForItem={commentsForItem}
        onPressComments = { onPressComments }
      />
    </View>
  );

}

Feed.propTypes = {
  style: ViewPropTypes.style,
  commentsForItem: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.string),
    ).isRequired,
  onPressComments: PropTypes.func.isRequired,
}

export default Feed;