import React, { useCallback, useEffect, useState } from "react";
import { prop } from "ramda";
import Card from "./card";
import { mapIndexed, moveElementFn } from "../helpers";
import ListContainer from "./listContainer";
import ToPrintTitle from "./toPrintTitle";

type listProps = {
  list: {}[];
};

const CountriesList: React.FC<listProps> = ({ list }: listProps) => {
  const [cards, setCards] = useState(list);

  useEffect(() => {
    setCards(list);
  }, [list]);

  const moveCard = useCallback(moveElementFn(setCards), []);

  const renderCard = useCallback(
    (card, index) => (
      <Card
        key={index}
        index={index}
        id={card.code}
        moveCard={moveCard}
        title={card.name}
        content={
          <div>
            <h4>Data</h4>
            <ul style={{ listStyleType: "none" }}>
              <li>Code: {card.code}</li>
              <li>Currency: {card.currency}</li>
              <li>
                Languages:{" "}
                <ul style={{ listStyleType: "none" }}>
                  {mapIndexed(
                    (lang, i) => (
                      <li key={i}>{prop("name", lang)}</li>
                    ),
                    card.languages
                  )}
                </ul>
              </li>
              <li>Emoji: {card.emoji}</li>
              <li>Capital: {card.capital}</li>
            </ul>
          </div>
        }
        link={`/countries/${card.code}`}
        color="lightseagreen"
      />
    ),
    [list]
  );

  return (
    <ListContainer>
      <ToPrintTitle title="Title: Countries list" />
      {mapIndexed((card, index) => renderCard(card, index), cards)}
    </ListContainer>
  );
};

export default CountriesList;
