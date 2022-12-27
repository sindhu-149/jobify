import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {Register,Landing,Error,ProtectedRoute} from "./Pages"
import {
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob
} from './Pages/dashboard'

function App() {
  return (
    <div>
        <BrowserRouter>
         
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <SharedLayout/>
              </ProtectedRoute>
            }>
              <Route index element={<Stats/>}></Route>
              <Route path="all-jobs" element={<AllJobs/>}></Route>
              <Route path="add-job" element={<AddJob/>}></Route>
              <Route path="profile" element={<Profile/>}></Route>
            </Route>
            <Route path="/register" element={<Register/>} />
            <Route path="/landing" element={<Landing />} />
            <Route path="*" element={<Error />} />            
          </Routes>
        </BrowserRouter>
    
    </div>
   
  );
}

export default App;
