// components/TodoList.js
import { Grid } from "@material-ui/core";
import TodoCard from "./TodoCard"; // Import the TodoCard component
import Proptypes from "prop-types";

const TodoList = ({ todos, onDeleteTodo, onEditTodo }) => {
  return (
    <Grid container spacing={2}>
      {todos.map((todo) => (
        <Grid item key={todo.id} xs>
          <TodoCard
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
          />
        </Grid>
      ))}
    </Grid>
  );
};

TodoList.propTypes = {
  todos: Proptypes.object,
  onDeleteTodo: Proptypes.func,
  onEditTodo: Proptypes.func,
};

export default TodoList;
