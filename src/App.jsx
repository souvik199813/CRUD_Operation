import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeCrud from './Component/HomeCrud'
import CreateStudent from './Component/CreateStudent'
import Users from './Component/Users'
import EditUser  from './Component/EditUser'

export const App = () => {
  return (
    <div>
        <BrowserRouter>
          <HomeCrud/>
           <Routes>
              <Route path="/cuser" element={<CreateStudent/>}/>
              <Route path="/u" element={<Users/>}/>
              <Route path="/e/:index" element={<EditUser/>}/>
           </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App