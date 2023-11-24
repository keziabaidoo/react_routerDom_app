import { NavLink, Outlet, Link } from "react-router-dom"

function AboutPageLayput() {
    return (
        <>

         <div style={{ marginBottom: "1.5rem"}}>Welcome To The About Page</div>
        <nav>
        <Link to= '/about'>history</Link>
          &nbsp; | &nbsp;
         <NavLink to= 'mission'>mission</NavLink>

        </nav>
        <main style={{ marginTop: "1rem"}}>
        <Outlet />

        </main>
        </>
    )
}



export default AboutPageLayput