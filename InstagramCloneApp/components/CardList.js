import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { getImageFromId } from '../utils/api';
import Card from './Card';

const CardList = ({ items, commentsForItem, onPressComments }) => {
  const keyExtractor = ({ id }) => id.toString();
  const renderItem = ({ item: { id, author } }) => (
    <Card
      fullname={author}
      image={
        {
          uri: getImageFromId(id),
        }
      }
      linkText={`${commentsForItem[id] ? commentsForItem[id].length : 0} Comments`}
      onPressLinkText={() => onPressComments(id)}
    />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={commentsForItem} // Flatlist re-render when add new comment for item
    />
  )
}

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  commentsForItem: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.string),
  ).isRequired,
  onPressComments: PropTypes.func.isRequired,
}

export default CardList;