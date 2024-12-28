# React Tags

This is a React application built using Vite, TypeScript, and Tailwind CSS. The application allows users to add and remove tags, with state management handled by custom hooks.

## Features

- Fast development with Vite
- TypeScript support
- Tailwind CSS for styling
- Custom hooks for state management
- Add and remove tags functionality

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

```bash
   git clone <repository-url>
```

2. Navigate into the project directory:
```bash
cd react-tags
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and go to http://localhost:7000 to see your application.

## Project Structure
```bash
react-tags
├── index.html
├── src
│   ├── components
│   │   ├── Tags
│   │   │   ├── TagForm.tsx
│   │   │   ├── TagInput.tsx
│   │   │   ├── TagList.tsx
│   │   │   └── Tag.tsx
│   ├── context
│   │   └── TagContext.tsx
│   ├── hooks
│   │   └── useTagState.ts
│   ├── reducers
│   │   └── tagReducer.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Available Scripts
In the project directory, you can run:

`npm run dev`

Runs the app in the development mode.
Open `http://localhost:7000` to view it in the browser.

`npm run build`

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

`npm run serve`

Serves the production build locally.

`npm run test`

Runs the tests using Vitest.
