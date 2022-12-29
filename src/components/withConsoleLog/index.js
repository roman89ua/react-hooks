import React from 'react';

const withConsoleLog = (Component) => {
  return (prop) => {
    console.log('new functionality');
    return (
      <>
        <Component />
        <Component {...prop} />
        <Component {...prop} title='We can have influence on props  from High ordered component' />
      </>
    );
  };
};

export default withConsoleLog;
