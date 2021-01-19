import React, { useState } from 'react'

type Props = {
  saveTodo: (formData: ITodo | any) => void
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()
  const [name, setName] = useState<string | undefined>()
  const [description, setDescription] = useState<string | undefined>()

  const handleSubmit = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault()
    saveTodo(formData);
    setName('')
    setDescription('')
  }

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => handleSubmit(e, formData)}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' value={name} />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} type='text' id='description' value={description} />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false} >Add Todo</button>
    </form>
  )
}

export default AddTodo
