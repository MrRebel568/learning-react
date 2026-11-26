import React, { useEffect, useState } from "react";
import { Play, Pause, RotateCcw, Timer } from "lucide-react";

const MODES = {
  pomodoro: {
    label: "Pomodoro",
    seconds: 25 * 60,
    message: "Time to focus",
  },
  shortBreak: {
    label: "Short Break",
    seconds: 5 * 60,
    message: "Take a short break",
  },
  longBreak: {
    label: "Long Break",
    seconds: 15 * 60,
    message: "Take a long break",
  },
};

const PomodoroPage = () => {
  const [mode, setMode] = useState("pomodoro");
  const [secondsLeft, setSecondsLeft] = useState(MODES.pomodoro.seconds);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timerID = setInterval(() => {
      setSecondsLeft((currentValue) => {
        if (currentValue <= 1) {
          setIsRunning(false);
          return 0;
        } else {
          return currentValue - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerID); // yeh tab chalenga jab naya aayenga aur pura na jaayenga
  }, [isRunning]);

  const changeTimer = (nextMove) => {
    setMode(nextMove);
    setSecondsLeft(MODES[nextMove].seconds);
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSecondsLeft(MODES[mode].seconds);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning((current) => !current);
  };

  const formatTimer = (totalSeconds) => {
    const min = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${String(min).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Pomodoro Timer</h1>
        <p className="text-sm text-gray-500">Focus karo, phir break lo</p>
      </div>

      {/* Timer Card */}
      <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        {/* Mode Tabs */}
        <div className="mb-8 flex justify-center gap-2 rounded-xl bg-gray-100 p-1">
          <button
            onClick={() => changeTimer("pomodoro")}
            type="button"
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium ${
              mode === "pomodoro"
                ? "bg-blue-600 text-white"
                : "text-gray-600 transition hover:bg-white"
            }`}
          >
            Pomodoro
          </button>
          <button
            onClick={() => changeTimer("shortBreak")}
            type="button"
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium ${
              mode === "shortBreak"
                ? "bg-blue-600 text-white"
                : "text-gray-600 transition hover:bg-white"
            }`}
          >
            Short Break
          </button>
          <button
            onClick={() => changeTimer("longBreak")}
            type="button"
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium ${
              mode === "longBreak"
                ? "bg-blue-600 text-white"
                : "text-gray-600 transition hover:bg-white"
            }`}
          >
            Long Break
          </button>
        </div>

        {/* Timer Circle */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-60 w-60 flex-col items-center justify-center rounded-full border-8 border-blue-100 sm:h-72 sm:w-72">
            <Timer className="mb-2 h-6 w-6 text-blue-600" />
            <p className="text-6xl font-bold tracking-tight text-gray-800 sm:text-7xl">
              {formatTimer(secondsLeft)}
            </p>
            <p className="mt-2 text-sm font-medium text-gray-500">
              {MODES[mode].message}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={toggleTimer}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            {isRunning ? (
              <>
                <Pause className="h-5 w-5" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-5 w-5" />
                Start
              </>
            )}
          </button>
          <button
            type="button"
            onClick={resetTimer}
            aria-label="Reset timer"
            className="rounded-lg border border-gray-300 p-3 text-gray-600 transition hover:bg-gray-100"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroPage;
