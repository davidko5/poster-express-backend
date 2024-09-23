const express = require('express');
const router = express.Router();

router.get('/wakey-wakey', async (req, res) => {
  try {
    res.status(200).json({
      status: 200,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw 'error...  ';
  res.send('ok');
});

module.exports = router;
