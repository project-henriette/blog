import React from 'react';

const ArticleHeading = ({category}) => (
  <div style={{ 
    backgroundColor: `#4d72bc`,
    borderRadius: `100%`,
    width: `150px`,
    height: `150px`,
    margin: `2rem 0 3rem 0`,
    display: `flex`,
    flexDirection: 'row',
    justifyContent: `center`,
    alignItems: `center`
    }}
  >
    <h4 style={{ color: `white`, margin: 0, padding: '1rem' }}>{category}</h4>
  </div>
);


export default ArticleHeading;