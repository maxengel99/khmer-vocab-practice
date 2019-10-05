export const verbs = [
  "to_buy",
  "to_close",
  "to_come_from",
  "to_cry",
  "to_dance",
  "to_drink",
  "to_eat",
  "to_have",
  "to_help",
  "to_learn",
  "to_like",
  "to_open",
  "to_play",
  "to_read",
  "to_ride",
  "to_run",
  "to_sleep",
  "to_speak",
  "to_swim",
  "to_teach",
  "to_teach",
  "to_walk",
  "to_watch",
  "to_write"
];

export function createVerbImageMap(){
  let verbImageMap = {};

  verbs.forEach(verb => {
    verbImageMap[verb] =`../Images/Verbs/${verb}.jpg`;
  });

  return verbImageMap;
}

