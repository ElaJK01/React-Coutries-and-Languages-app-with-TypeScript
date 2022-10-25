import React, { useCallback, useEffect, useState } from "react";
import { prop } from "ramda";
import Card from "./card";
import { mapIndexed, moveElementFn } from "../helpers";
import ListContainer from "./listContainer";
import ToPrintTitle from "./toPrintTitle";
import { languagesObj } from "../types";

const LanguagesList: React.FC<{
  list: languagesObj[];
}> = (props) => {
  const { list } = props;

  const [cards, setCards] = useState<languagesObj[]>(list);

  useEffect(() => {
    setCards(list);
  }, [list]);

  const moveCard = useCallback(moveElementFn(setCards), []);

  const renderCard = useCallback(
    (card: languagesObj, index: number) => (
      <Card
        key={index}
        index={index}
        id={prop("code", card)}
        title={prop("name", card)}
        content={
          <div>
            <p>
              Code:
              {prop("code", card)}
            </p>
          </div>
        }
        moveCard={moveCard}
        link={`/languages/${prop("code", card)}`}
        color="lightgreen"
      />
    ),
    [list]
  );
  return (
    <ListContainer>
      <ToPrintTitle title="Title: Languages list" />
      {mapIndexed((card, index) => renderCard(card, index), cards)}
    </ListContainer>
  );
};

export default LanguagesList;
