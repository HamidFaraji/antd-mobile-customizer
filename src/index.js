import React from 'react';
import { StyleSheet } from 'react-native';
import * as antComponents from 'antd-mobile/lib/index.native';
import styleComposer from './style-composer';
import antStyles from './ant-themes';
import styles from './styles';
import extraStylesRules from './extra-styles-rules';

const globalizedComponents = {};

Object.keys(antComponents).forEach((componentName) => {
  let style = {};
  const Component = antComponents[componentName];
  const defaultStyle = antStyles[componentName] || {};
  const newStyle = styles[componentName] || {};
  const extraStyle = extraStylesRules[componentName] || {};

  globalizedComponents[componentName] = (props) => {
    style = styleComposer(defaultStyle, newStyle, props.styles, extraStyle, props);

    return (
      <Component {...props} styles={StyleSheet.create(style)} />
    );
  };
});

module.exports = globalizedComponents;
