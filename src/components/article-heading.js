import React from 'react';

const ArticleHeading = ({tag}) => (
  <div style={{ 
    width: `7rem`,
    height: `3rem`,
    display: `flex`,
    flexDirection: 'row',
    justifyContent: `center`,
    alignItems: `center`,
    }}
  >
    <h4 style={{ color: `black`, margin: 0, padding: '1rem' }}>{tag}</h4>
  </div>
);


export default ArticleHeading;