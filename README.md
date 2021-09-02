## Introduction
Hi there! Please follow the instructions below to set up the test project.

## Instruction
1. Download the bundle file from the email attachment on your computer
2. Clone the project using command: `git clone react-test.bundle`
3. Install JavaScript dependencies using `yarn install`
4. Run the project using command `yarn start`

## Tasks
1. Make a data-request inside the `getContent` method (look at the `useLoadContent` hook). Load info about of first 10 characters
2. Call `getContent` method on search field submit with proper search value
3. Display picture of each character from fetched data inside `ContentList` component
4. Apply styles to header to make it stay fixed on top of the page, independent of content scroll position
5. Bonus: Create `FetchMoreButton` component and `fetchMore` method inside the `useLoadContent` hook. It should be displayed only in case there are more items available. When the user clicks on this button then pull 10 more items.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
