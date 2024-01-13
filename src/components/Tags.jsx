import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Tags = ({ raza, colorBadge}) => {
  return (
    <>
      <h5 className="raza">
      <Badge variant={colorBadge}>{raza}</Badge>
       
      </h5>
    </>
  );
}

export default Tags;
