# Calculator Project

Welcome to the Calculator project! This exercise will help you practice your HTML, CSS, and JavaScript skills while building a functional calculator application.

## Project Setup

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in.
2. Click the '+' icon in the top right corner and select "New repository".
3. Name your repository (e.g., "calculator-project").
4. Choose to make it public or private.
5. Initialize with a README if you want (we'll create one locally in this guide).
6. Click "Create repository".

### 2. Clone the Repository Using GitKraken

1. Open GitKraken.
2. Click "File" > "Clone Repo".
3. Choose "GitHub.com" as the source.
4. Select the repository you just created.
5. Choose where to clone it on your local machine.
6. Click "Clone the repo!".

### 3. Project Structure

Create the following files in your local repository:

- `index.html`
- `styles.css`
- `script.js`

## Development Process

Follow these steps to build your Calculator application:

### 1. Create the HTML Structure

Create the basic HTML structure for your calculator in `index.html`. Include:
- A display area to show the current input and result
- Buttons for digits (0-9)
- Buttons for basic operations (+, -, *, /)
- A button for decimal point (.)
- An equals button (=)
- A clear button (C)

### 2. Style Your Calculator

Add CSS styles in `styles.css` to make your calculator visually appealing. Consider:
- The overall layout of the calculator (grid or flexbox can be useful here)
- Styling for the display area
- Styling for the buttons (consider different styles for number buttons and operation buttons)
- Responsive design to ensure it looks good on different screen sizes

### 3. Implement Basic Functionality

In `script.js`, start implementing the calculator's functionality:
- Select necessary DOM elements
- Add event listeners to the buttons
- Implement functions to handle number input
- Implement functions to handle operation input
- Update the display as the user interacts with the calculator

### 4. Implement Calculation Logic

Add the core calculation functionality:
- Implement a function to perform calculations based on the input
- Handle the equals button to perform the calculation and display the result
- Implement error handling for invalid operations (e.g., division by zero)

### 5. Implement Clear Functionality

Add the ability to clear the calculator:
- Implement a function to reset the calculator state
- Connect this function to the clear button

### 6. Implement Decimal Point Functionality

Add support for decimal numbers:
- Allow users to input decimal points
- Ensure that multiple decimal points can't be added to a single number

## Bonus Features

If you complete the basic requirements, try adding these features:

1. Keyboard support (allow users to use their keyboard to input numbers and operations)
2. Additional operations (square root, exponents, etc.)
3. A history of calculations
4. Ability to handle more complex expressions with parentheses

## Git Workflow

As you work on your project, follow this Git workflow:

1. Create a new branch for each feature:
   ```
   git checkout -b feature/add-button-layout
   ```

2. Make your changes and test them.

3. Stage your changes:
   ```
   git add .
   ```

4. Commit your changes with a meaningful message:
   ```
   git commit -m "Add button layout for calculator"
   ```

5. Push your branch to GitHub:
   ```
   git push origin feature/add-button-layout
   ```

6. Create a pull request on GitHub to merge your feature branch into the main branch.

7. After reviewing, merge the pull request and delete the feature branch.

8. Pull the latest changes to your local main branch:
   ```
   git checkout main
   git pull origin main
   ```

## Tips

- Break down the project into small, manageable tasks.
- Commit your changes frequently.
- Use meaningful commit messages that describe what you've done.
- Test your application thoroughly as you develop.
- Don't be afraid to use online resources, but make sure you understand the code you're using.
- If you get stuck, refer to the SPOILERS.md file for hints, but try to solve problems on your own first.

## Submission

When you've completed the project:

1. Ensure all your changes are committed and pushed to GitHub.
2. Deploy your project to GitHub Pages or another hosting service.
3. Update this README with:
    - A brief description of your project
    - Any challenges you faced and how you overcame them
    - What you learned from this project
    - A link to the live demo of your application

Good luck, and happy coding!