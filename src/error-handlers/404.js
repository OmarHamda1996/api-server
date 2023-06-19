const handle404Error = (req, res) => {
    res.status(404).json({ message: 'Not found' });
  };
  
  module.exports = handle404Error;
  