
export const sortEventTime = (taskA, taskB) => {
  return;
};

export const sortEventPrice = (sourcedTripEvents) => {
  sourcedTripEvents.sort(function (a, b) {
    return b - a;
  });
  return sourcedTripEvents;
};


