import { useMemo } from "react";
import Card  from "../CardProject";

type CardProps = {
  id: number;
  //   imgCard:ReactNode;
  title: string;
  description: string;
  developer_link: string;
  production_link: string;
  tecnologies: string;
};
type CardListProps = {
  cards: CardProps[];
  query: string;
};

const filter = (cards: CardProps[], query: string) => {
  return cards.filter((card) => card.title.toLowerCase().includes(query) );
};

export const CardList = ({ cards, query }: CardListProps) => {
  const filtered = useMemo(() => filter(cards, query), [cards, query]);
  return (
    <>
      {filtered.map((card) => (
        <Card item={card} key={card.id} />
      ))}
    </>
  );
};