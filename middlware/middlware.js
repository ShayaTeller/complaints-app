
const validateUser = () => (req, res, next) => {
  if (req.body.username) {
    console.log(req.body.username);
    next();
    return res.send(`succes`);
  }
  next()
};


export default validateUser