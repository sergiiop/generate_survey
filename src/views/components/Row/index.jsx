const Row = ({ onRemove, name, onChange }) => {
  return (
    <div>
      <input
        name={name}
        type='text'
        placeholder='Opcion'
        onChange={e => onChange('option', e.target.value)}
      />
      <button onClick={onRemove}>Eliminar</button>
    </div>
  )
}

export { Row }
