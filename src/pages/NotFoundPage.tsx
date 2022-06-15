import React from 'react';
import { useDispatch } from 'react-redux';

import ActionCreator from '@store/actions';

const NotFoundPage: React.FC = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ActionCreator.setWarningMessage(
      {
        label: '404:',
        text: 'Запрошенный ресурс не был найден...'
      }
    ));
  });

  return (
    <p style={{ textAlign: 'center'}}>
      Кажется, такой страницы не существует...
    </p>
  )
};

export default NotFoundPage;
