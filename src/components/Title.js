import React from 'react';
import withConsoleLog from './withConsoleLog';

const Title = ({ title = 'Simple title' }) => <h1>{title}</h1>;

export default withConsoleLog(Title);
