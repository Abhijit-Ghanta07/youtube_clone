const countViews = (views) => {
  let displayView = parseInt(views);

  if (displayView > 10000) {
    return Math.ceil(displayView / 1000000) + "M";
  } else {
    return Math.ceil(displayView / 10000) + "K";
  }
};

export { countViews };
