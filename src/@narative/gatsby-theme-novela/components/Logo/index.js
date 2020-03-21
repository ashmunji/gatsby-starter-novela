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
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000"
        preserveAspectRatio="xMidYMid meet">
        <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
        </metadata>
        <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M0 500 l0 -500 500 0 500 0 0 500 0 500 -500 0 -500 0 0 -500z"/>
        </g>
    </svg>

  );
}