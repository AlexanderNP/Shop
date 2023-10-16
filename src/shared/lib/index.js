export const getPage = ({ body = ``, title = ``, meta = [] }) => {
  const metaTags = meta.map(tag => `<meta name="${tag.name}" content="${tag.content}">`).join("\n")
  return `
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        ${metaTags}
        <title>${title}</title>
        <script src="/src/app/App.js" defer type="module"></script>
      </head>
      <body>
        ${body}
      </body>
    </html>
  `
}

export const commonComponentProps = {
  label: "",
  extraClasses: {},
  extraAttrs:{},
  getCN:(baseClass, extraClasses) => {
    let classes = baseClass;
    
    for (let className in extraClasses) {
      if (extraClasses[className]) {
        classes += ' ' + className;
      }
    }
    
    return classes;
  }
};

export const getAttrs = (extraAttrs) => {
  const attrs = {};
  if (extraAttrs) {
    for (const key in extraAttrs) {
      attrs[key] = extraAttrs[key];
    }
  }
  return attrs;
};
