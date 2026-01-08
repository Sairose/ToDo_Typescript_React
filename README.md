# Todo List Application

A simple todo list application built with React, TypeScript, and Tailwind CSS.

## Features

- Add new tasks to your todo list
- Mark tasks as complete with checkboxes
- Delete tasks from the list
- Input validation (prevents empty tasks)

## Tech Stack

- **React *** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library

## Installation

1. Clone or download this project
```bash
cd TodoUsingTRS
```

2. Install dependencies
```bash
npm install
```

## Usage

1. Start the development server
```bash
npm run dev
```

2. Open your browser and navigate to the URL displayed in the terminal (usually `http://localhost:5173`)

3. **Add Tasks**: Type a task in the input field and click "Add Task" or press Enter

4. **Complete Tasks**: Check the checkbox next to a task to mark it as complete

5. **Delete Tasks**: Click the trash icon to remove a task from the list

## Project Structure

## Components

### AddTodoList
- Handles task input from the user
- Prevents empty tasks from being added
- Clears the input field after adding a task
- Props: `setTodo` - Function to update the todo list

### DisplayList
- Displays all tasks in the todo list
- Allows marking tasks as complete
- Allows deleting tasks
- Props: `todo` - Array of task strings, `setTodo` - Function to update the todo list

### App
- Main component that manages the todo state
- Combines AddTodoList and DisplayList components
- Holds the central state for all tasks

