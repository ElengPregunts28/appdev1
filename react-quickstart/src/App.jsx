function MyButton() {
  function handleClick() {
    alert('You clicked!');
  }

  return (
    <button onClick = {handleClick}>
      Click.
    </button>
  );
}

export default MyButton