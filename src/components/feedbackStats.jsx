import { useContext } from "react";
import FeedbackContext from "../context/feedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //   average calc
  let averageRating =
    feedback.reduce((prev, cur) => {
      return prev + cur.rating;
    }, 0) / feedback.length;
  averageRating = averageRating.toFixed(1).replace(/[.]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {averageRating ? averageRating : 0}</h4>
    </div>
  );
}

export default FeedbackStats;
