import React from 'react';

const App = ({handleChange, answer, handleSubmit}) => {
  const appStyles = {
    color: 'red'
  }
  return (
    <div className="App">
      <form>
        Addition: <input id="value1" type="number" onChange={handleChange} name="value1" />
         + <input id="value2" onChange={handleChange} name="value2" />
        <button type="submit" onClick={handleSubmit}>ADD</button>
      </form>
      <br />
      <p id="answer" style={appStyles}>Answer: {answer}</p>
    </div>
  );
}

App.defaultProps = {
  answer: ''
}

export default App;
