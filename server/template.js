export default ({ body, title, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <link rel="stylesheet" href="./public/bundle.css" />
      </head>

      <body>
        <div id="root">${body}</div>
      </body>

      <script src="./public/bundle.js"></script>
    </html>
  `;
};
