import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormScreen from './components/FormScreen';
import PreviewScreen from './components/PreviewScreen';
import { UserData } from './types/user';

function App() {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    phoneNumber: '',
    position: '',
    description: '',
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <FormScreen userData={userData} setUserData={setUserData} />
          }
        />
        <Route
          path="/preview"
          element={<PreviewScreen userData={userData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;