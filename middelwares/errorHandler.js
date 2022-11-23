const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = "Internal Server Error";

  console.log(err);

  if (err.name === "invalid_input") {
    code = 400;
    message = "Data not found";
  } else if (err.name === "data_not_found") {
    code = 404;
    message = "Data Not Found";
  } else if (err.status === "failure") {
    code = err.code;
    message = err.message;
  } else if (err.name === "invalid_subtitue") {
    code = 404;
    message = err.message;
  }

  res.status(code).json({ message });
};

module.exports = errorHandler;
