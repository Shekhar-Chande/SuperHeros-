import logo from '../../assets/logo.png'
import './Navbar.css'
function Navbar(){
    return(
        <>
            <div className="Nav">
                <img src={logo} alt="" />
                <input type="text" placeholder='Find your SuperHero.....' />
            </div>
        </>
    )
}

export default Navbar;