import { useMemo } from "react";
import Card from "../Item";

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
  const cardList = cards;

  const find = cardList.filter(function (result) {
    return (
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.tecnologies.toLowerCase().includes(query.toLowerCase())
    );
  });
  console.log(find);
  return find;
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
