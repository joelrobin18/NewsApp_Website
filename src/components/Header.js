import React,{useState} from "react";

function Header({ Logout}) {

  const [detail, setDetails] = useState({name:""})

  return (
    <div>
      <button className="logout-button" onClick={Logout}>
        Log Out
      </button>
    </div>
  );
}

export default Header;
