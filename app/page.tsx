import Image from 'next/image';


export default function Home() {

  // const [todo, setTodo] = useState({
  //   title: '',
  //   description: ''
  // })

  // const handleChange = (e) =>{
  //   setTodo({
  //     ...todo,
  //     [e.target.name]: e.target.value
  //   })
  // }


  return (
    <>
      {/* <h2>Home Page</h2> */}
      {/* <form>
      <input type="text" name="title" placeholder='Type title' value={todo?.title}
      onChange={handleChange}/>
      <textarea name="description" placeholder='Type desc' value={todo?.description}
      onChange={handleChange}/>
      <div style={{marginTop: '30px'}}>
        <button>Add Todo</button>
      </div>
      </form> */}
      <div className='container-home'>
        <div className='container-text'>
          <h3>Home desdihn</h3>
          <p>DESCCC</p>
          <div className='container-button'>
          <button>
            Learn More
          </button>
          <button>
            Contact
          </button>
          </div>
        </div>
        <div className='container-image'>
        <Image src="/bird-portrait.jpg" alt="BIRD" width="500" height="200"/>
        </div>
      </div>
    </>
  )
}
