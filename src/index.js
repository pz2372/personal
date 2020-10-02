import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Splash from './Splash.js'


	if (document.cookie.split(';').some((item) => item.trim().startsWith('splash='))) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
	} else {
    document.cookie = "splash=splash-page-cookie";
		ReactDOM.render(
      <Splash/>,
      document.getElementById('root')
    )
    var textarea = document.getElementById('term');
    var text = 'cd personalWebsite.html   Press Enter';
    runner(0)
    window.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        window.location.reload(false);
      }
    });
  }
  
  function runner(i) {
    textarea.append(text.charAt(i));
    i++;
    setTimeout(
      function () {
        if (i < text.length){
          runner(i);
        } 
      }, Math.floor(Math.random() * 220) + 50);
  }



