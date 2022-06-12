const Row = ({ onChange, onRemove, option }) => {
  return (
    <div>
      <input
        type='text'
        value={option}
        onChange={e => onChange('option', e.target.value)}
        placeholder='Opcion'
      />
      <button onClick={onRemove}>Eliminar</button>
    </div>
  )
}

export { Row }
