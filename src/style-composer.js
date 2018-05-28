function styleComposer(defaultStyle, newStyle, inlineStyle = {}, extraStyle, componentProps) {
  const composedStyle = {};

  Object.keys(defaultStyle).forEach((prop) => {
    let extraStyles = {};

    if (extraStyle[prop]) {
      Object.keys(extraStyle[prop]).forEach((item) => {
        if (componentProps[item]) {
          extraStyles = {
            ...extraStyles,
            ...newStyle[extraStyle[prop][item]]
          };
        }
      });
    }

    composedStyle[prop] = {
      ...defaultStyle[prop],
      ...newStyle[prop],
      ...inlineStyle[prop],
      ...extraStyles,
    };
  });

  return composedStyle;
}

export default styleComposer;
