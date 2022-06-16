import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type TButtonProps = {
  title: string,
  clickHandler?: () => void,
  url?: string
};

const Button: React.FC<TButtonProps> = ({title, clickHandler, url}) => {

  const location = useLocation();

  const isActive = Boolean(location.pathname === url)

  return (
    <>
      {
        url ?
        <Link to={url} className={`button ${isActive ? 'button--active' : ''}`}>{title}</Link>
        :
        <button type="button" className="button" onClick={clickHandler}>{title}</button>
      }
    </>
  );
}

export default Button;
