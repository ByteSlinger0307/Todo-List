# React ToDo List App

A simple yet functional ToDo list application built using React.js. This project allows users to add, manage, and delete tasks with ease, providing a clean and intuitive user interface.

## Description

This ToDo List app helps users to keep track of their daily tasks in an organized way. It allows users to:
- Add tasks with a title and description.
- Display the tasks in a list format.
- Delete tasks once completed or no longer needed.
  
The app is built using modern React.js features, including functional components and the `useState` hook for state management. It’s a great starter project to demonstrate React basics while maintaining a visually appealing design.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ByteSlinger0307/Todo-List.git
    cd Todo-List
    ```

2. **Install the required dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

   The app will be available at `http://localhost:3000`.

## Features

- **Add Tasks**: Enter a title and description for the task and add it to your list.
- **Display Tasks**: All tasks are displayed with their title and description in a list format.
- **Delete Tasks**: Easily delete tasks from the list when completed.
- **Responsive Design**: The UI is responsive and works well on both desktop and mobile screens.

## Steps Involved

1. **Task Input**:
   - A simple form allows users to enter a task title and description.
   - Tasks are stored in the app's state using the `useState` hook.
  
2. **Task List**:
   - Tasks are displayed in a list format, each with a delete button for removal.
   - Tasks are dynamically rendered from the state using `map()`.

3. **Task Management**:
   - Each task has a unique key and can be deleted by interacting with the "Delete" button, which removes the task from the state.

## Usage

1. Clone the repository and install the necessary dependencies using `npm install`.
2. Run the app locally using `npm start` to open the development server.
3. You can add a new task by entering a title and description, then click the **"Add Task"** button.
4. View your tasks below the form and delete any by clicking the **"Delete"** button.

## Example Code

Below is an example of how the task list is rendered dynamically:

```javascript
let renderTask = <h2>No Task Added</h2>;

if(mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
        return (
            <li key={i} className='flex items-center justify-between mb-8'>
                <div className='flex items-center justify-between mb-5 w-2/3'>
                    <h5 className='text-2xl font-semibold'>{t.title}</h5>
                    <h6 className='text-lg font-medium'>{t.desc}</h6>
                </div>
                <button onClick={() => deletHandler(i)} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
            </li>
        );
    });
}

## Future Improvements

1. Persist Data: Store tasks in a database or use local storage to persist tasks between sessions
2. Edit Tasks: Add functionality to edit existing tasks.
3. Filter and Search: Implement filtering and search functionalities to easily find tasks

## Visual Improvements
The UI is designed to be minimalistic and clean, focusing on functionality while still being visually appealing. It includes:

1. Modern font styles and sizes for task titles and descriptions.
2. Buttons styled with a focus on accessibility and usability.
3. A responsive layout ensuring a smooth experience on both desktop and mobile.

## Contributors

- [Krish Dubey](https://github.com/ByteSlinger0307)

## Contact

- **Name**: Krish Dubey
- **Email**: [dubeykrish0208@gmail.com](mailto:dubeykrish0208@gmail.com)
- **GitHub**: [ByteSlinger0307](https://github.com/ByteSlinger0307)
- 
## License
This project is licensed under the MIT License.

