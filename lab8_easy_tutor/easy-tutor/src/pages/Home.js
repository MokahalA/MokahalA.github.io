import React from 'react'
import '../styles/Home.css'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai'
import { BiTime } from 'react-icons/bi'


function Home(){

  function filter(){
    // Declare variables
    var listElements, input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    
    listElements = document.getElementById('listElements');

    listElements.style.display = '';
    if(input.value === ''){
      listElements.style.display = 'none';
    }


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }

  function showList(){
    var listElements;
    listElements = document.getElementById('listElements');
    listElements.style.display = '';
  }


  return (
      <div className="body">
        <h1 id="body-text">Get better grades.</h1>     
        <div id="searchDropdownDiv">
          <InputGroup id="searchDropdown" className="mb-3" >
            <FormControl
              id="myInput"
              placeholder="What subject do you need help with?"
              aria-label="What subject do you need help with?"
              aria-describedby="basic-addon2"
              onChange = {filter}
            />
            <InputGroup.Append>
              <Button id="showList" variant="dark" onClick={showList}>       
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <div id="listElements" style={{display: "none"}}> 
            <ul id="myUL">
              <li><a href="/biology">Biology</a></li>
              <li><a href="/chemistry">Chemistry</a></li> 
              <li><a href="/math">Math</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer">
        <div className="row text-center">
          <div id="location" className="col-md-4">
            <p className="footer-info"> <BsFillHouseDoorFill /> 150 Louis-Pasteur Private, Ottawa, ON, Canada </p>
          </div>
          <div id="contact" className="col-md-4">
            <p className="footer-info"> <AiFillMail /> easytutor@mail.com </p> 
          </div>
        <div id="hours" className="col-md-4">
          <p className="footer-info"><BiTime /> Hours: 9:00 AM - 3:00 PM <br></br> Monday to Friday</p>

        </div>

        </div>
      </div>
    </div>
  )
}


export default Home;
