import { NavLink } from "react-router-dom"


function About() {
    return (
        <>
         <div>Welcome To The About Page</div>
         <nav>
        <NavLink to= 'history'>history</NavLink>
          &nbsp; | &nbsp;
         <NavLink to= 'mision'>mission</NavLink>

        </nav>
        </>
    )
}



export default About