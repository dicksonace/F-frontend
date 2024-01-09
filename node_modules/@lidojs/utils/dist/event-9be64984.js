const isMouseEvent = (event) => {
    return Boolean((event.clientX || event.clientX === 0) &&
        (event.clientY || event.clientY === 0));
};
const isTouchEvent = (event) => {
    return Boolean(event.touches && event.touches.length);
};
const getPosition = (event) => {
    if (isTouchEvent(event)) {
        return event.touches[0];
    }
    return event;
};

export { isTouchEvent as a, getPosition as g, isMouseEvent as i };
