import React from "react";
import { Col, FormCheck, ListGroup, Row } from "react-bootstrap";

interface Props{
    taskDescription: string;
}

export default class TaskComponent extends React.Component<Props>{
    render (){
        return(
            <ListGroup>
                <ListGroup.Item action variant='secondary' className="mb-2">
                    <Row>
                        <Col sm='1'>
                            <FormCheck></FormCheck>                                        
                        </Col>
                        <Col>
                            <span>(taskDescription)</span>
                        </Col>
                    </Row>
                </ListGroup.Item>                                    
            </ListGroup>  
        )
    }

}