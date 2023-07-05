/* eslint-disable no-unused-vars */
import {useState} from 'react'

// eslint-disable-next-line react/prop-types
const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo (value, category);        //adicionar todo
        setValue("");        //limpar campos
        setCategory("");        //limpar campos
    }
  return (
    <div className='todo-form'>
        <h2>Criar Tarefas: </h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Digite o titulo" 
            value={value}
            onChange={(e) =>setValue(e.target.value)} />
            <select 
            value={category} 
            onChange={(e) =>setCategory(e.target.value)}>
                <option value="">Selecione uma Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>                
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm
