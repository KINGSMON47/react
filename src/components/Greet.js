import react from 'react'

// function Saeed() {
//     return <h1>Smon Studio</h1>
// }
 const Saeedsmon = props => {
 return (

     <div>
      <h1>Smon studio {props.name} </h1>
      {props.children}
     </div>
 )
}

export default Saeedsmon