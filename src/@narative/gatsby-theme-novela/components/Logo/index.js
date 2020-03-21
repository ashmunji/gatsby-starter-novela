import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!--
      with a large viewBox the circle looks small
      as it is using user units for the r attribute:
      4 resolved against 100 as set in the viewBox
      -->
      <circle cx="5%" cy="5%" r="4" fill={fill}/>
    </svg>

  );
}