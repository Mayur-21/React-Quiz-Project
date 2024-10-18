const Quiz = require("./../models/quizModel");

exports.getAllQuizzs = async (req, res) => {
  try {
    // EXECUTE QUERY
    const quiz = await Quiz.find().select("-_id -__v");

    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      results: quiz.length,
      data: {
        quiz,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent" + err,
    });
  }
};
