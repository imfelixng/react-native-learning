import React from 'react'
import PropTypes from 'prop-types';
import {
  ColorPropType,
  StyleSheet,
  ViewPropTypes,
  requireNativeComponent,
  processColor,
} from 'react-native';

const PieChart = (
  {
    data = [],
    strokeWidth = 0,
    strokeColor = 'transparent',
    style
  }
) => {
  const processedData = data.map(item => ({
    value: item.value,
    color: processColor(item.color),
    }));
  return (
    <NativePieChart
      strokeWidth = {strokeWidth}
      strokeColor = {strokeColor}
      style={[styles.container, style]}
      data={processedData}
    />
  );
}

const NativePieChart = requireNativeComponent('PieChart', PieChart);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
    value: PropTypes.number,
    color: ColorPropType,
    }),
    ).isRequired,
  strokeWidth: PropTypes.number,
  strokeColor: ColorPropType,
  ...ViewPropTypes,
}

export default PieChart
