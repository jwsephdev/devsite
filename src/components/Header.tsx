import './css/Header.css'

let MainWord  = "Hi!"
let ScndWord = "JOSEPH CHRISTIAN PIOQUINTO"
let pWord = "Computer Engineering student @ AdNU | Web/Game Development"

function Header() {
  return(
    <>
      <div className='TabContainer'>
        <div className='controlpanel'>
            <div className='red'></div>
            <div className='yellow'></div>
            <div className='green'></div>
        </div>
        
        <div className='headerContent'>
            <h1>{MainWord} <span>i'm</span></h1>
            <h1>{ScndWord}</h1>
            <p>{pWord}</p>
        </div>
        
      </div>
        
    </>
    
  );
}

export default Header
