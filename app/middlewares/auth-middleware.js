const middleware = (req, res, next) => {
  console.log("Headers: ",req.headers);
  next();
};

module.exports = middleware;
