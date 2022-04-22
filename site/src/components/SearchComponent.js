import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Row, Container} from 'reactstrap';

const Search = (props) => {
    return (
        <div className="row-content">
            <div class="d-flex justify-content-center">
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleText" className="mr-sm-2">Address</Label>
                <Input type="text" placeholder="" onChange={(event) => {props.saveAddress(event.target.value);
                                                                       }}/>
            </FormGroup>
            <Link to = {`/results`}>
                <Button>Submit</Button>
            </Link>
            </Form>
            </div>
        </div>
    );
};

export default Search;