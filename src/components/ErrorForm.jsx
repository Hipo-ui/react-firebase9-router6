const ErrorForm = ({error}) => {
  return (
    <>
    {error && <span>{error.message}</span>}
    </>
  )
}

export default ErrorForm