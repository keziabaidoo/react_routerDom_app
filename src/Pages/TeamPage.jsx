import React from 'react'
import { Outlet } from 'react-router-dom';

function TeamPage() {
    return (
      <>
      <h2>Meet the team</h2>
      
      <main style={{marginTop: "1.5rem"}}>
      <Outlet />

      </main>

      </>

    )
}

export default TeamPage;
