"use client";

import React, { useState, useEffect } from "react";
import { Button, Dialog } from "@material-tailwind/react";
import "./feedback.css";

const Feedback = () => {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const handleFeedbackSubmit = () => {
    if (feedback === 0) {
      // Trigger animation for emojis if none are selected
      setAnimationClass("scale-animation");
      setTimeout(() => setAnimationClass(""), 500); // Reset animation class after animation ends
    } else {
      setOpen(false);
      onSubmit();
      setFeedback(0);
    }
  };

  const onSubmit = () => {
    setLoading(true);
    fetch("/api/feeback", {
      method: "POST",
      body: JSON.stringify({ rate: feedback }),
    })
      .then((res) => res.json())
      .finally(() => {
        setLoading(false);
        window.localStorage.setItem("rate", String(feedback));
      });
  };

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      if (!window.localStorage.getItem("rate") && count > 3) {
        setOpen(true);
      }
      setCount((state) => state + 1);

    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const key = window.setTimeout(() => {
        if(!window.localStorage.getItem("rate")) setOpen(true)
    }, 10000);
  }, []);

  return (
    <section
      className={`h-screen w-screen fixed backdrop-blur-sm  ${
        feedback > 0 ? "block" : "hidden"
      }`}
    >
      <Dialog
        className="bg-transparent flex justify-center items-center outline-none"
        open={open}
        handler={() => setOpen(false)}
        tabIndex={-1}
        style={{ border: "none !important" }}
      >
        <div className="relative m-5 h-max w-max select-none rounded-lg border border-gray-100 p-6 shadow-lg bg-white">
          <h6 className="text-xl font-extrabold text-secondary">
            Rate Your Experience
          </h6>
          <p className="mt-3" style={{ color: "black", fontSize: "1.1rem" }}>
            How satisfied are you with my portfolio?
          </p>

          <div className="mt-3 flex justify-between space-x-1">
            {[1, 2, 3, 4, 5].map((rating) => (
              <div
                key={rating}
                onClick={() => setFeedback(rating)}
                className={`flex h-12 w-16 cursor-pointer items-center justify-center rounded-md ${
                  feedback === rating ? "bg-amber-400" : "bg-amber-200"
                } text-xl font-bold hover:bg-amber-400 ${animationClass}`}
              >
                {rating === 1
                  ? "😤"
                  : rating === 2
                  ? "😒"
                  : rating === 3
                  ? "😐"
                  : rating === 4
                  ? "🙂"
                  : "😀"}
              </div>
            ))}
          </div>

          <div className="mt-2 flex justify-between text-sm text-gray-400 mb-5">
            <p style={{ fontSize: "1rem" }}>Not satisfied</p>
            <p style={{ fontSize: "1rem" }}>Very satisfied</p>
          </div>
          <Button
            variant="filled"
            size="sm"
            className="w-full bg-secondary p-1"
            onClick={handleFeedbackSubmit}
            loading={loading}
          >
            Submit Feedback
          </Button>
        </div>
      </Dialog>
    </section>
  );
};

export default Feedback;
