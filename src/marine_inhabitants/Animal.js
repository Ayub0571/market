// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../fishCss/fish.css";
// import "../App.css"
// import firebase from "../firebase/firebase";
// import {doc, getDoc} from "firebase/firestore";
// import Container from "react-bootstrap/Container";
// import {Row, Col} from "react-bootstrap";




// const Animal = () => {
//   const location = useLocation();
  
//   const [data, setData] = useState({ name: "", img: "", description: "", id : ''});
//   const ref = firebase.firestore().collection("fish");

  

//   useEffect(() => {
//     const search = {};
//     location.search
//       .substring(1)
//       .split("&")
//       .forEach((el) => {
//         const tmp = el.split("=");
//         search[tmp[0]] = tmp[1];

        
//       });
       
      
      
//       const docRef = doc(firebase.firestore(), "fish", search.id)
//       getDoc(docRef).then(response => {
//         setData({...response.data(),id: response.id});
        
//       }) .catch(error => {
//         console.log(error)
//       })
  

  
 
  
//   }, []);

//   return (
//     <Container>
//       <Row>          
//         <div className="animal">

//         <Col xl={2} lg={2} md={2} sm={2} xs={2}>
            
//               <div>
//                 <h1>{data.name}</h1>
//               <p>Discription</p>
//               <img src={data.img}/>
//               <p>
//                 {data.description}
//               </p>
//             </div>
         
            
//            </Col></div>
//       </Row>    
//     </Container>
//   );
// };
// export { Animal };