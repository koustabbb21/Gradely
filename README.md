# Gradely

A beautiful, minimalist, and responsive Single-Page Application (SPA) designed to help students track and manage their academic performance with precision.

## Features

- **CGPA Calculator**: Aggregate your performance across all semesters to determine your cumulative grade point average with effortless accuracy.
- **SGPA Calculator**: Focus on your current progress. Input individual course credits and grades (including support for 0-credit Pass/Fail subjects) to discover your semester performance.
- **Single Page Architecture**: Seamlessly navigate between the Welcome, CGPA, and SGPA screens without reloading the page.
- **Minimalist Aesthetic**: A highly refined, clean user interface tailored for focus and ease of use, powered by Tailwind CSS.

## Tech Stack

- **HTML5**: Semantic and accessible structure.
- **Vanilla JavaScript**: Lightweight state management, dynamic DOM manipulation, and calculation logic.
- **Tailwind CSS**: Rapid, utility-first styling with custom design tokens.

## Getting Started

Since Gradely.io is a pure vanilla web application with no complex build steps, getting started is incredibly simple!

1. Clone the repository:
   ```bash
   git clone https://github.com/koustabbb21/Gradely.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Gradely
   ```
3. Open `index.html` in your favorite web browser.

_(Note: An active internet connection is required the first time you load the page to fetch the Tailwind CSS CDN and Material Symbols font)._

## Project Structure

```text
├── index.html       # The core application structure and all view templates
├── app.js           # Navigation logic, calculation algorithms, and dynamic DOM rendering
├── style.css        # Custom CSS animations and overrides
```

## Grading Scale

The SGPA calculator supports the standard 10-point grading scale:

- **O** (Outstanding): 10 Points
- **A+** (Excellent): 9 Points
- **A** (Very Good): 8 Points
- **B+** (Good): 7 Points
- **B** (Above Average): 6 Points
- **C** (Average): 5 Points
- **P** (Pass): 4 Points
- **F** (Fail): 0 Points

_(For 0-credit subjects, only 'P' and 'F' grades are available, and they do not affect total grade points)._
