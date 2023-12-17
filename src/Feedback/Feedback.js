import React from "react";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            
            <FeedbackCard/>
            <FeedbackCard/>
            <FeedbackCard/>
            <FeedbackCard/>
            <FeedbackCard/>
            <FeedbackCard/>
            <FeedbackCard/>
            <FeedbackCard/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
