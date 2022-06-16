import React from 'react';
import { useDispatch } from 'react-redux';

import Logo from '@components/Logo';
import ActionCreator from '@store/actions';

const NotFoundPage: React.FC = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ActionCreator.setWarningMessage(
      {
        label: '😥',
        text: '404 - The requested resource was not found...'
      }
    ));
  });

  return (
    <>
      <Logo enableLink />
      <h1 className="visually-hidden">404 page</h1>
      <p style={{ textAlign: 'center'}}>
        {'It seems there isn\'t such page...'}
      </p>
    </>
  )
};

export default NotFoundPage;
