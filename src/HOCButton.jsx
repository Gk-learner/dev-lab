function HOCButton({buttonName, onClick}) {
  return (
    <div onClick={onClick}>{buttonName}</div>
  )
}

export default HOCButton