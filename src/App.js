
import { useEffect, useState } from "react";
import {  Col, Container, Jumbotron, Nav, Row,Tab} from "react-bootstrap";



const ImgCard=({ImgURL,ImgText})=>{
  return(
    <div style={{border:"2px solid black", padding:"5%" ,margin:"2%"}}>
      <img src={ImgURL} width="100%" alt="apicture"></img>
      <p>{ImgText}</p>
    </div>
)}

const ImgCards=({Contents})=>{
  return(
    Contents.map((Content)=>{
      return (
      <Col xs={12} sm={6} md={3} key={"card"+Content.id}>
        <ImgCard ImgURL={Content.ImgURL} ImgText={Content.ImgText}/>
      </Col>
)}))}



const App=()=>{
  const [CardObjects,SetCardObjects]=useState([]);

  function getDataFromServer(){
      const NewCardObject=
      {
        id:CardObjects.length,
        ImgURL:"./test_image.png",
        ImgText:"Some quick example text to build on the card title and make up the bulk of the card's content."
      }
      SetCardObjects([...CardObjects,NewCardObject])
  }
  
  useEffect(()=>{
    const options = {
      rootMargin: "0px 0px 200px 0px",
      threshold: 0
    }
    const callback = ([entry]) => {
      if (entry && entry.isIntersecting) {
        getDataFromServer()
      }
    }
    let observer = new IntersectionObserver(callback, options)
    observer.observe(document.querySelector(".observe"))
  
    //console.log(typeof document.querySelector(".observe"));
  })
  

  
  

  return(
    <div>
      <Container>
        <Jumbotron>
          <h1>Waterfall</h1>
          <p>This is my first React-bootstrap project</p>
        </Jumbotron>
        
      </Container>
      <Container>
        <Row>
          <Col xs={3} sm={4} md={2}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
              <Nav variant="pills" className="flex-column sticky-top" >
                <Nav.Item>
                  <Nav.Link eventKey="first">first</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">second</Nav.Link>
                </Nav.Item>
              </Nav>
            </Tab.Container>
          </Col>
          <Col xs={9} sm={8} md={10}>
            <Container>
              <Row>
                <ImgCards Contents={CardObjects}/>
                <h1 className="observe" style={{backgroundColor:"#f0f0f0"}}>loading ...</h1>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      

    </div>
  ) 
}


  





export default App;
