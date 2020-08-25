import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from "./UserProfile"
import Anemeties from './Anemeties';


function App() {
  return (
    <div className="App">
          <header className="App-header">

        <div class="flexColumn">
                 <UserProfile />
                  <Anemeties />
        </div>
          </header>
    </div>
  );
}

function colla () {
    
        var coll = document.getElementsByClassName("collapsible");
        var i;

    for (i = 0; i < coll.length;i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

}

export default App;
