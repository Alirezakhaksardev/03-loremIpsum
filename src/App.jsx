import { useState } from 'react'
import data from './data'
import './App.css'

function App() {

  const [count , setCount] = useState(1);
  const [text , setText] = useState([])
  const handleSubmit = e => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count <= 0) amount = 1
    if(count > 4) amount = 4
    setText(data.slice(0,amount))
  }

  return (
    <>
      <div className='section-center'>
        <h4>لورم ساز خوشگل و زیبا</h4>
        <form className='lorem' onSubmit={handleSubmit}>
          <label htmlFor="total">تعداد پاراگراف</label>
          <input type="number" id='total' max={4} min={1}
            value={count} onChange={(e) => setCount(e.target.value)} 
            name='total' />
          <button type='submit'>بساز</button>
        </form>
        <article className='lorem-text'>
          {
            text.map((item,index) => (
              
                <p key={index}>
                  {item}
                </p>
              
            ))
          }
        </article>
      </div>
    </>
  )
}

export default App
