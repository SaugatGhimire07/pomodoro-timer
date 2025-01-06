# Pomodoro Timer

A simple Pomodoro Timer built using React and Vite. This app allows users to start, pause, and reset a timer for Pomodoro work sessions, short breaks, and long breaks.

## Features

- Start, pause, and reset the timer.
- Switch between Pomodoro (25 minutes), Short Break (5 minutes), and Long Break (10 minutes).
- Display the current time in the browser's title bar.

## Technologies Used

- **React**: For building the user interface and managing the app state.
- **Vite**: A fast and modern build tool for React applications.
- **Font Awesome**: Used for the icons in the interface.

## Live Demo

- https://saugatghimire07.github.io/pomodoro-timer/

## What I've Learned

### useState Hook

- The useState hook is used to add state to functional components in React. In this project, I used useState to manage the timer state (time left), the selected interval (Pomodoro, Short Break, Long Break), and the start/pause functionality. The hook returns a state variable and a function to update that variable.

### useEffect Hook

- The useEffect hook allows you to perform side effects in function components, such as fetching data, updating the document title, or setting up a timer. In this project, I used useEffect to update the document title with the remaining time, as well as to start and stop the timer when needed.

### Props

- Props (short for "properties") allow data to be passed from a parent component to a child component. In this project, I passed props like the timer settings and the current interval state between components (e.g., Interval, Timer, StartStop). This allowed me to manage the UI and logic of the timer across multiple components.
