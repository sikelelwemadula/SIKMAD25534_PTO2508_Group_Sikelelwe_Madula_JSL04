# JSL04 Kanban Board with Modal

A responsive Kanban board web app. This project is part of an ongoing cycle where we are required to refractor previous code as we continue building this kanban board.

The aim is to have a completely responsive app design once we have completed all 5 projects and the Portfolio Piece for the JSL course.

## Technologies 
 ◆HTML
 ◆CSS
 ◆JavaScript.

## Features

- **3 column board** (TODO, DOING, DONE).
- **Task cards** displayed in column lists.
- **Add/edit task modal** (dialog form).
- Responsive design for tablet/mobile with stacked. columns and smaller task cards.
- Basic focus styling reset for buttons/inputs.
- Modal for information storage.

## Files

- `index.html` — main page structure and modal form
- `styles.css` — layout, responsive breakpoints, modal and form styling
- `scripts.js` — task UI interactions and modal logic
- `assets/` — icons and images

## Development

- The board uses a grid layout in `.card-column-main` with repeating columns.
- Task cards are `.task-div` elements inside `.tasks-container`.
- Clicking the add-task triggers the `dialog` with `#task-form`.
- The form includes inputs for title, description, and status.
- The modal uses `dialog` and `#task-modal::backdrop` for overlay.

## Responsive behavior

- **Desktop**: 3 column board, fixed sidebar.
- **Tablet (<=1023px)**: sidebar hidden, 2-column stacked board with smaller cards.
- **Mobile (<=576px)**: single-column board, compact task cards and modal form.

## Styling notes

- Set `* { box-sizing: border-box; }` for consistent sizing.
- Use `width: 100%; max-width: 100%;` on form controls for responsive selects.
- Customize modal width using `min(420px, calc(100vw - 32px))`.

## Usage

1. Open `index.html` in your browser.
2. Add tasks using the modal form.
3. Resize the window to test responsive behavior.

## Contributions 

Please note, this is a CodeSpace project. If you are viewing this file you do not have permission to make any changes. This is strictly an education aid.
