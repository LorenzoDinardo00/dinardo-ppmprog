import React from 'react';
import { Helmet } from 'react-helmet';

function Head() {
  return (
    <Helmet>
      <title>Il Corriere</title>
      <meta name="description" content="È importante sottolineare che questo sito è stato creato esclusivamente a scopo di studio e per un esame accademico e non ha altre intenzioni al di là di quello scopo. La sua creazione mira a fornire un esempio pratico di come potrebbe apparire una homepage di un giornale online, con tutti gli elementi tipici che la caratterizzano." />
    </Helmet>
  );
}

export default Head;
