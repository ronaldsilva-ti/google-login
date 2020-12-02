import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//Google Login
import { GoogleLogin } from 'react-google-login';


function App() {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [fotoPerfil,setFotoPerfil] = useState('');
  const [mostraDados, setmostraDados] = useState(false)



  function responseGoogle(response){
    console.log(response)
    setName(response.profileObj.name)
    setEmail(response.profileObj.email)
    setFotoPerfil(response.profileObj.imageUrl);
    setmostraDados(true);

  }


  return (
    <div className="App">
      <h1>Login Google</h1>
      <GoogleLogin
        clientId="clientId"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
     />
     <hr/>

    {
      mostraDados && (
        <>
          <p>Nome: {name}</p>
          <p>E-mail:{email}</p>
          <p>
            <img src={fotoPerfil} alt={name} />
          </p>
        </>

      )
    }
     
    </div>
  );
}

export default App;
