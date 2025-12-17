import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import AnimatedPage from '@site/src/components/AnimatedPage/AnimatedPage';

// Create a layout wrapper that uses AnimatedPage
const MDXLayout = (props) => {
  return (
    <AnimatedPage>
      {props.children}
    </AnimatedPage>
  );
};

export default {
  ...MDXComponents,
  wrapper: MDXLayout,
};