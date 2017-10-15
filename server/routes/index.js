var express = require('express');
var requestHandler = require('../public/requestHandler.bundle.js');

const router = express.Router();

router.get('*', (req, res) => {
  const data = requestHandler(req.location);
  console.log(data);
  if (data.context.status === 404) {
      res.status(404);
    }
    if (data.context.status === 302) {
      return res.redirect(302, data.context.url);
    }
    res.render('index', {initialState: data.initialState, reactComponent: data.reactComponent });
});

module.exports = router;
