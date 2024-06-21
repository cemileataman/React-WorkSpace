import React from "react";
//Fragment

export const users = [
  {
    username: "ahmet",
    password: "1",
  },
  {
    username: "ayşe",
    password: "2",
  },
];
function Login() {
  return (
    <div>
      <div>
        <p>Kullanıcı Adını</p>
        <input type="text"></input>
      </div>
      <div>
        <p>Şifreniz: </p>
        <input type="text"></input>
      </div>

      <button>Giriş</button>
    </div>
  );
}

export default Login;
