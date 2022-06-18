function Todo(props) {
  return (
    <div>
      <div className='card'>
        {props.text}
        <h2>TITLE</h2>
        <div className='actions'>
          <button className='btn'>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
