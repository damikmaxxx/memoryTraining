import { useEffect } from "react";

export const RANDOM_METHOD = "RANDOM_METHOD";
export const FINISH_TRAINING = "FINISH_TRAINING";

export const translateMethodText = {
    RANDOM_METHOD:"случайный"
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function* trainingWithCard(method, folder) {
  let correct = 0;
  let incorrect = 0;
  let rate = null;
  let activeCards = folder.cards
  
  let temp = []
  
  switch (method) {
    case RANDOM_METHOD:
      while (true) {
        
        const randCard = activeCards[getRandomInt(0, activeCards.length)];
        temp.push(randCard.id)
        // console.log(temp, activeCards)
        // console.log(activeCards.length);
        let remember = yield { randCard, rate };

        if (remember === FINISH_TRAINING) {
            return { correct, incorrect };
        }
        if (remember) {
            correct++;
          }
        else {
            incorrect++;
        }

        rate = correct/ (incorrect+correct) * 100;

        activeCards = activeCards.filter(item => {
            for(t in temp){
                if (item.id == temp[t]) return false
            }
            return true
        })
        

        if (!activeCards.length){
            return { correct, incorrect };
        }
        
        
      }
  }
}
