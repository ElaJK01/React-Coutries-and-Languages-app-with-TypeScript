import React, { useCallback, useEffect, useState } from "react";
import { prop } from "ramda";
import Card from "./card";
import { mapIndexed, moveElementFn } from "../helpers";
import ListContainer from "./listContainer";
import ToPrintTitle from "./toPrintTitle";
import { continentObj } from "../types";

const ContinentsList: React.FC<{
  list: continentObj[];
}> = (props) => {
  const { list } = props;
  const [cards, setCards] = useState<continentObj[]>(list);

  useEffect(() => {
    setCards(list);
  }, [list]);

  const moveCard = useCallback(moveElementFn(setCards), []);

  const renderCard = useCallback(
    (card: continentObj, index: number) => (
      <Card
        key={index}
        index={index}
        id={prop("code", card)}
        moveCard={moveCard}
        title={prop("name", card)}
        content={
          <p>
            Code:
            {prop("code", card)}
          </p>
        }
        link={`/continents/${prop("code", card)}`}
      />
    ),
    []
  );

  return (
    <ListContainer>
      <ToPrintTitle title="Title: Continents list" />
      {mapIndexed((card, i) => renderCard(card, i), cards)}
    </ListContainer>
  );
};

export default ContinentsList;
