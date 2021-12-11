import { ToDoProps } from "../../App";

/**
 * Returns true if tasks due date has passed the specified/todays date
 * @param {ToDoProps} task - Task object
 * @param {string} specifyDate - Optional date
 * @returns {boolean}
 */
export function isOverdue(
  task: ToDoProps,
  specifyDate: string | null = null
): boolean {
  let someDate;
  if (specifyDate === null) {
    someDate = new Date();
  } else {
    someDate = new Date(specifyDate);
  }
  const taskDay = parseInt(task.duedate.slice(8, 10));
  const taskMonth = parseInt(task.duedate.slice(5, 7));
  const taskYear = parseInt(task.duedate.slice(0, 4));

  const day = someDate.getDate();
  const month = someDate.getMonth() + 1;
  const year = someDate.getFullYear();
  return (
    taskYear < year ||
    (taskYear === year && taskMonth < month) ||
    (taskYear === year && taskMonth === month && taskDay < day)
  );
}
