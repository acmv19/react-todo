import React from "react";
import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

function TodoListItem(props) {
  return (
    <div>
      <li className={styles.ListItem}>
        {props.todo.title} &nbsp; &nbsp;
        <button type="button" onClick={() => props.onRemoveTodo(props.todo.id)}>
          {" "}
          Remove{" "}
        </button>
      </li>
    </div>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
