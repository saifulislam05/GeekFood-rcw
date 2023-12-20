import React from "react";
import FeedbackCard from "./FeedbackCard";
import feedbackData from "../../Data/Feedback.json";

const Feedback = () => {
 
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            {feedbackData.map((data, index) => (
              <FeedbackCard
                key={index}
                data={data}
              />
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
