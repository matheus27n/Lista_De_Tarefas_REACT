// eslint-disable-next-line react/prop-types
const Filter = ({filter, setFilter, setOrder}) => {
  return (
    <div className="filter">
        <h2>Filtar:</h2>
        <div className="fiter-options">
            <div>
                <p>Status: </p>
                <select 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todos</option>
                        <option value="completos">Completos</option>
                        <option value="incompletos">Incompletos</option>
                </select>
            </div>
            <div>
                <p>Ordem Alfatabetica:</p>
                <button onClick={() => setOrder("Asc")}>Asc</button>
                <button onClick={() => setOrder("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter
