

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className='p-5 bg-[#FC4100]'>
     <div className="container">
      <div className="menu_row flex justify-between items-center">
        <div className="logo_col text-[35px]font-bold font-poppins text-black">Logo</div>
        <div className="menu">
            <ul className='flex gap-5 text-xl font-poppins font-semibold text-black'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Aobut">Aobut</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Help">Help</Link></li>
                <li><Link to="/contarck">Contrack</Link></li>
            </ul>
        </div>
      </div>
     </div>
    </nav>
    </>
  )
}
export default Navbar
