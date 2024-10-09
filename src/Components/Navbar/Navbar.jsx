import logo from '../../assets/logo.png'
import './Navbar.css'
function Navbar(){
    return(
        <>
            <div className="Nav">
                <img src={logo} alt="" />
                {/* <input id='search' type="text" placeholder='Find your SuperHero.....' /> */}
            </div>
        </>
    )
}

export default Navbar;