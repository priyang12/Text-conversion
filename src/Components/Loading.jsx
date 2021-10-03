import { Fragment } from 'react';
import spinner from '../assets/spinner.gif';
// eslint-disable-next-line
export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: '200px',
        margin: '10rem auto',
        display: 'block',
      }}
      alt='loading...'
      data-testid='Loading'
    />
  </Fragment>
);
