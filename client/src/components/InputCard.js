import React from "react";
import { Card, InputGroup, FormControl } from "react-bootstrap";
import AddButton from "./AddButton";
//import API from "../../utils/API";

function InputCard(){
    return (
        <div>            
            <Card className="input center">
                <Card.Header>Add A Student</Card.Header>
                <InputGroup className="mb-3 center">             
                    <FormControl
                    placeholder="First Name"
                    aria-label="First Name"
                    aria-describedby="basic-addon2"
                    />
                </InputGroup>     
                <InputGroup className="mb-3 center">             
                    <FormControl
                    placeholder="Last Name"
                    aria-label="Last Name"
                    aria-describedby="basic-addon2"
                    />
                </InputGroup>                            
                <AddButton />
            </Card>
            <br></br>
            <Card className="input center">
                <Card.Header>Add An Assignment</Card.Header>
                <InputGroup className="mb-3 center">             
                    <FormControl
                    placeholder="Standard Description"
                    aria-label="Standard Description"
                    aria-describedby="basic-addon2"
                    />
                </InputGroup>                               
                <AddButton />
            </Card>
        </div>
    )
}

export default InputCard;