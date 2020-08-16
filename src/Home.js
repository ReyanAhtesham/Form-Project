import React, { useEffect } from 'react';
import './App.css';
import { motion } from "framer-motion"
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

function Home() {
    useEffect(() =>{
        M.AutoInit();
    }, [])
  return (
      <div>
    <motion.div
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
    initial={{
        opacity:0,
        x:0,
        y:0,
        scale:1
    }}
    animate={{
        opacity:1,
        x:0,
        y:0,
        scale:1,
        }}
    transition={{
        duration:2
    }}
    >
    <div className="cards">

    </div>
    </motion.div>
    <motion.circle
  cx={500}
  animate={{ cx: [null, 100, 200] }}
  transition={{ duration: 3, times: [0, 0.2, 1] }}
>
    <div>
        
  <div class="row text-black">
    <form class="col s12" >
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          This is an inline input field:
          <div class="input-field inline">
            <input id="email_inline" type="email" class="validate"/>
            <label for="email_inline">Email</label>
            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </div>
      <div>
          select a date
      <input type="text" class="datepicker"/>
      </div>
      <div>
          define yourself in tags
      <div class="chips"></div>
      </div>
      <div>
      <form action="#">
    <p class="range-field">
      <input type="range" id="test5" min="0" max="300" 
      onChange={(e) => console.log(e.target.value)}
      />
    </p>
  </form>
  </div>
    </form>
  </div>
</div>
</motion.circle>
    </div>
  );
}

export default Home;
