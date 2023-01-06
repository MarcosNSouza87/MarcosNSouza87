import React from 'react';
import { Button } from './styles';

interface ButtonLinkProps {
  label: string;
  goTo: () => void;
  children?: React.ReactNode;
  isSelect?: boolean;
}

const ButtonLink = ({label,children,goTo, isSelect}:ButtonLinkProps) => {
  return (
    <Button className="menuLink" onClick={goTo} isSelect={isSelect}>
      {children}
      <div className="label">{label}</div>
    </Button>
  )
}

export default ButtonLink;