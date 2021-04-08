import React, {useState} from "react";
import "./index.css";

const Home= () => {
    const [apples,setApples] = useState(0);
    const [oranges,setOranges] = useState(0);
    const [grapes,setGrapes] = useState(0);
    return(
        <div className="container-fluid">
            <h1>HomePage</h1>
            <div className="row">
                <h2>All Items</h2>
                {/* <div className=""> */}
                    <div className="col">
                        <div className="box "> 
                            <h3>APPLE</h3>
                            <h1>{apples}</h1>
                            <div>
                                <button onClick={() => setApples(apples + 1)}>+</button>
                                <button onClick={() => setApples(apples - 1)}>-</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box"> 
                            <h3>ORANGE</h3>
                            <h1>{oranges}</h1>
                            <div>
                                <button onClick={() => setOranges(oranges + 1)}>+</button>
                                <button onClick={() => setOranges(oranges - 1)}>-</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box "> 
                            <h3>GRAPES</h3>
                            <h1>{grapes}</h1>
                            <div>
                                <button onClick={() => setGrapes(grapes + 1)}>+</button>
                                <button onClick={() => setGrapes(grapes - 1)}>-</button>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
        

    )
}
export default Home;