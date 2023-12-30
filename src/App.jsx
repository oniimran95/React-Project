import { useState } from 'react'
import './App.css'
import Users from './components/Users';

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [textarea, setTextarea] = useState("The content of a textarea goes in the value attribute The content of a textarea goes in the value attribute The content of a textarea goes in the value attribute");

  // const users = [
  //   {
  //     name:'shamim',
  //     email:'shamim@gmail.com',
  //     phone:'017827389'
  //   },
  //   {
  //     name:'shamim',
  //     email:'shamim@gmail.com',
  //     phone:'017827389'
  //   },
  //   {
  //     name:'shamim',
  //     email:'shamim@gmail.com',
  //     phone:'017827389'
  //   },
  // ]

  const handletext = (e) => {
    setTextarea(e.target.value);
  }

    const [inputs, setInputs] = useState({});


    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInputs (values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setUsers(prev => ([
        ...prev,
        inputs
      ]))
      setInputs({});
    }



  return (
    <>
      {/* <input onKeyUp={(e) => setName(e.target.value)} type="text" placeholder='Enter name' />
      <h2>Name: {name}</h2> */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <Users users={users}/>
      <br />
      <form action="">
        <textarea onChange={handletext} value={textarea} name="textarea" id="" cols="30" rows="10"></textarea>
      </form>

      <form onSubmit={handleSubmit}>
        <div className="block">
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' id='name' value={inputs.name || ""} onChange={handleChange} />
        </div>
        
        <div className="block">
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' id='email' value={inputs.email || ""} onChange={handleChange}/>
        </div>
        
        <div className="block">
          <label htmlFor="phone">Phone:</label>
          <input type="text" name='phone' id='phone' value={inputs.phone || ""} onChange={handleChange}/>
        </div>
        
        <input type="submit" name="" id="" />
      </form>

    </>
  )
}

export default App
