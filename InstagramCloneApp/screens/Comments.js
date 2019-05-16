import { SafeAreaView, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import NavigationBar from '../components/NavigationBar';

const Comments = (
  {
    style = null,
    comments,
    onClose,
    onSubmitComment,
  }
) => {
  return (
    <View style={style}>
      <NavigationBar
        title="Comments"
        leftText="Close"
        onPressLeftText={onClose}
      />
      <CommentInput
        placeholder="Leave a comment"
        onSubmit={onSubmitComment}
      />
      <CommentList items={comments} />
    </View>
  )
}

Comments.propTypes = {
  style: ViewPropTypes.style,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func.isRequired,
};

export default Comments;