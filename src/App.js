import Card from "./components/Card.js";
import Collapse from "./components/Collapse.js";
import "./Style.css"

function App() {
  return (
    <div className="row caontainer text-center">

      <div className="col">
        <Collapse linkTitle="Title 1">
          <Card title ="Title 1" paragraph="Lorem ipsum sit dolar" img="card1.jpg"></Card>
        </Collapse>
      </div>

      <div className="col">
        <Collapse linkTitle="Title 2">
          <Card title ="Title 2" paragraph ="Lorem ipsum" img="card4.jpg"></Card>
        </Collapse>
      </div>

      <div className="col">
        <Collapse linkTitle="Title 3">
          <Card  paragraph="Lorem ipsim sit dolar amet." img="card3.jpg"></Card>
        </Collapse>
      </div>
    
      
        
        
      
      

    
    </div>


  );
}

export default App;
