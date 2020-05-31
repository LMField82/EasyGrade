import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";



function App () {

    return (
        <div>
          
            <Router>
                <div> 
                    <Switch>
                    
                        {/* <Route exact path={["/","/signup"]} component={SignUp} />
                    
                        <Route exact path="/signin" component={SignIn} /> */}
                        
                        <Route exact path="/home" component={Home} />
                        
                        {/* <Route exact path="/students" component={Students} /> */}
                </Switch> 
                   
                </div>
            </Router> 
        </div>
    )
}

export default App;