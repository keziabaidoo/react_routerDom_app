import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
// import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Notfound from "./Pages/Notfound";
import AboutPageLayout from "./Pages/AboutPageLayout";
import TeamPage from "./Pages/TeamPage";
import Team from "./Pages/Team";



function App() {
  return (
    <>
      <Nav />

<div style={{padding: "1rem 1.5rem"}}> 
<Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutPageLayout />}>
          <Route
            index
            // path="history"
            element={
              <div >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit ad odio veritatis obcaecati iusto modi deleniti,
                molestiae voluptates nihil vero optio fugit quibusdam beatae
                commodi reiciendis perferendis dolores cupiditate rem.
              </div>
            }
          ></Route>
          <Route
            path="mission"
            element={
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore neque sint laborum excepturi, deserunt aut veniam
                consequatur sit ullam voluptate maxime, natus sequi quam eveniet
                esse reiciendis commodi, beatae enim?
              </div>
            }
          ></Route>
        </Route>

        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/team" element={<TeamPage />}>

          <Route index element= {<Team />} />
        </Route>

        <Route path="*" element={<Notfound />}></Route>
      </Routes>
</div>
      
    </>
  );
}

export default App;
