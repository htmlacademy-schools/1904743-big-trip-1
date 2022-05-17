
export const sortEventTime = (eventA, eventB) => eventB.duration - eventA.duration;

export const sortEventPrice = (eventA, eventB) => eventB.price - eventA.price;

export const sortEvents = (eventA, eventB) => eventA.dates - eventB.dates;

