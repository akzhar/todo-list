import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ActionCreator from '@store/actions';

const InputField: React.FC = () => {

  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const enterKeyHandler = (evt: KeyboardEvent) => {
    const enterPressed = Boolean(evt.key === 'Enter');
    const inputHasFocus = Boolean(document.activeElement?.id === inputRef.current?.id);
    const inputHasValue = Boolean(inputRef.current?.value);
    if(enterPressed && inputRef.current && inputHasFocus && inputHasValue) {
      dispatch(ActionCreator.createTask({ text: inputRef.current.value }));
      dispatch(ActionCreator.setInfoMessage({ label: '😊', text: 'New task was added to the list' }));
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', enterKeyHandler);
    return () => {
      window.removeEventListener('keydown', enterKeyHandler);
    }
  }, []);

  return (
    <div className="input-field">
      <input type="text" id="task-input" data-testid="task-input" placeholder="What needs to be done?" ref={inputRef} />
    </div>
  );
};

export default InputField;
