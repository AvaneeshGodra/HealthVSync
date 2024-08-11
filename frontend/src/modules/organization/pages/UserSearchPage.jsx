import { Container } from "@mui/material";
import React, { useState } from "react";
import { useRef } from "react";
import { networkOperations } from "../../../shared/services/api-client";
import axios from "axios";
import Profile from "../../user/components/Profile";
const UserSearchPage = ({data}) => {

  const usersearchRef = useRef();
  const [name, setName] = useState();
  const [allImage, setAllimage] = useState(null);
 const [send,setSend]=useState();

  const search = async () => {
    const userid = {
      Mid: usersearchRef.current.value,
      id: usersearchRef.current.value
    };
    try {
      const response = await axios.post(
       process.env.REACT_APP_USERCARD,
        userid
      );

     
      if (response.data.true == "true") {
        setName(response.data.usercard.name);
       
        getImage(userid);
        // setSend(response.data.usercard)
        
        localStorage.setItem('send', JSON.stringify(response.data.usercard));
     
      } else {
        setName("enter valid user");
        setAllimage(null);
      }
    } catch (err) {
      setName("enter valid user");
    }
  };
  const getImage = async (userid) => {
    const result = await axios.post(process.env.REACT_APP_GETIMAGE, userid);
    setAllimage(result.data.data);
   
  };

  const baseURL = process.env.REACT_APP_BASEURL; // LOCAL IMAGE STORE
  if (allImage == null) {
    return (
      <>
        {/* <Container className=" mt-5 " style={{ transform: "scale(1.2)" }}>
          <div class="input-group "> */}
            <input
              ref={usersearchRef}
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button
              onClick={search}
              type="button"
              class="btn btn-outline-primary"
            >
              search
            </button>

            {name}
            <br />

           
          {/* </div>
        </Container> */}
      </>
    );
  } else {
   
    return (
      <>
      
        {/* <Container className=" mt-5 " style={{ transform: "scale(1.2)" }}>
          <div class="input-group ">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/> */}
            <input
              ref={usersearchRef}
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          
            <button
              onClick={search}
              type="button"
              class="btn btn-outline-primary"
            >
              search
            </button>
           {/* <h3>{name}</h3> */}
            
           
          {/* </div>
        </Container> */}
        <br/>

        
        <Profile data={JSON.parse(localStorage.getItem('send'))} orgdata={data} num="1"/>
      </>
    );
  }
};

export default UserSearchPage;
