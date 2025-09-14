
# Flatiron Vinyl Vault

**Flatiron Vinyl Vault** is a React-based Single Page Application (SPA) for browsing, adding, and managing classic and new vinyl records. Built as a summative lab for Flatiron School's software engineering program, this project demonstrates full CRUD functionality, API integration, testing, and React Router use.

## Live Demo

[View Screenshots](https://imgur.com/a/j8mEZE6)

GitHub Repository: [github.com/walbeck85/course_5_summative_lab](https://github.com/walbeck85/course_5_summative_lab/tree/main)

---

## Features

- View a list of vinyl records pulled from an API
- Add new records via a validated form
- Filter and sort by genre
- Edit record prices inline as an admin
- Remove records from the archive
- Navigate across pages using React Router

## Technologies Used

- React (v19)
- Vite (v7)
- React Router DOM
- Vitest and React Testing Library
- JSON Server (mock backend)
- CSS Modules

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/walbeck85/course_5_summative_lab.git
cd course_5_summative_lab
npm install
```

Start the development server and JSON server:

```bash
npm run dev       # React front-end
npm run server    # JSON backend (port 3000)
```

## File Structure

```
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   └── RecordForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   └── Admin.jsx
│   ├── hooks/
│   │   └── useProductFilter.js
│   ├── App.jsx
│   ├── main.jsx
│   └── __tests__/
│       ├── App.test.jsx
│       ├── Home.test.jsx
│       ├── Shop.test.jsx
│       ├── Admin.test.jsx
│       ├── ProductCard.test.jsx
│       ├── ProductList.test.jsx
│       └── RecordForm.test.jsx
```

## Running Tests

Tests are written using Vitest and React Testing Library.

To run all tests:

```bash
npm test
```

Tests are located in the `src/__tests__/` directory and cover the core functionality of each component and page.

## Contributing

Pull requests are welcome. For major changes, please open an issue to discuss what you would like to change.

Before submitting a pull request, ensure your code:

- Passes all tests (`npm test`)
- Includes relevant comments and follows the file's existing style