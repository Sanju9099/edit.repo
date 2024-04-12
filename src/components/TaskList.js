import React from 'react';
import TasksListItems from './TaskListItem';
import './TaskList.css'

export default function TasksList(props) {
  return (
    <ul>
      {props.items.map((item) => {
        return (
          <TasksListItems
            key={item.id}
            id={item.id}
            onDelete={props.onDeleteItem}
          >
            {item.text}
          </TasksListItems>
        );
      })}
    </ul>
  );
}