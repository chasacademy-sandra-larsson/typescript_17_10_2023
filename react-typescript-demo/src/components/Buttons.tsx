  // Typing events

  interface ButtonProps  {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  }

  const Button = (props: ButtonProps) => {
    return <button onClick={event => props.handleClick(event)}>Click</button>
  }

  export default Button