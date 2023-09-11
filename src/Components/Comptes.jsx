import React from 'react'

const myComponent = () => {
  const spacing = 10; // Example value

  // Correct usage of the style prop
  const customStyle = {
    marginRight: spacing + 'em',
    // Add other style properties as needed
  };

  return (
    <div style={customStyle}>
      
    </div>
  );
};

function Comptes() {
  return (
    <div>
      <form action="" >
                <label htmlFor="login"></label>
        <input type="text" id='login' required/>
                <label htmlFor="password"></label>
        <input type="password" id='password' required />
        <input type="submit" value="connexion" />
        </form>
    </div>
  )
}

export default Comptes