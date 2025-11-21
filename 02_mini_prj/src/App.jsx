import Cards from './components/Cards'
import userprofile from './components/Users.jsx'
const App = () => {
  console.log(userprofile)
  return (
    <div className="parent">
    {
    userprofile.map((item,idx)=>{
      return(
      <Cards key={idx} data = {item} />
      )
    })
    }
    </div>
  )
}

export default App
