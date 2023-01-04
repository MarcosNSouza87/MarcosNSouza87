import React from 'react';
import { Button } from './styles';

interface ButtonLinkProps {
  label: string;
  goTo: () => void;
  children?: React.ReactNode;
}

const ButtonLink = ({label,children,goTo}:ButtonLinkProps) => {
  return (
    <Button className="menuLink" onClick={goTo}>
      {children}
      <div className="label">{label}</div>
    </Button>
  )
}

export default ButtonLink;