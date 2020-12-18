import React, { Component } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiSubdirectoryLeft } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi';
import { InputGroup, FormControl } from 'react-bootstrap';
export default class comments extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="comments-title" style={{ marginBottom: "50px", marginTop: "30px" }} >Comments</h3>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default"><BsFillPersonFill size={20} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                            <InputGroup.Prepend>
                                <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04"><BiSubdirectoryLeft size={20} /></button>
                            </InputGroup.Prepend>
                        </InputGroup>

                        <div className="input-group" style={{ marginTop: "50px" }}>
                            <div className="input-group-append">
                                <div className="icon-other"><BsFillPersonFill size={40} /></div>
                                <h6 className="user-name" style={{ padding: "10px" }}>Crystal</h6>
                                <span className="comment-date" style={{ padding: "10px" }} > 20 / 12 / 2020</span>
                                <FiHeart size={20} style={{ color: "red" }} />
                            </div>
                            <p className="mock-review">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>


                        <div className="input-group" style={{ marginTop: "50px" }}>
                            <div className="input-group-append">
                                <div className="icon-other"><BsFillPersonFill size={40} /></div>
                                <h6 className="user-name" style={{ padding: "10px" }}>Nusorn</h6>
                                <span className="comment-date" style={{ padding: "10px" }} > 20 / 12 / 2020</span>
                                <FiHeart size={20} style={{ color: "red" }} />
                            </div>
                            <p className="mock-review">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                    </div>



                    <div className="col-4 ">
                        <h3 className="side-title" style={{ marginTop: "30px", }}>Related</h3>

                        <div className="input-group" style={{ marginTop: "30px" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BV3VpybFRoOdzVLPjn49I7i51Y13t8UnGA&usqp=CAU" width="200px" style={{ paddingRight: "10px" }} alt=""/>
                            <div className="sub-description">
                                <p className="side-title" style={{ fontWeight: "800", fontSize: "20px" }}>FRONT_END</p>
                                <p>I am still breathing</p>
                            </div>
                        </div>

                        <div className="input-group" style={{ marginTop: "30px" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BV3VpybFRoOdzVLPjn49I7i51Y13t8UnGA&usqp=CAU" width="200px" style={{ paddingRight: "10px" }} alt="" />
                            <div className="sub-description">
                                <p className="side-title" style={{ fontWeight: "800", fontSize: "20px" }}>FRONT_END</p>
                                <p>I am still breathing</p>
                            </div>
                        </div>

                        <div className="input-group" style={{ marginTop: "30px" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BV3VpybFRoOdzVLPjn49I7i51Y13t8UnGA&usqp=CAU" width="200px" style={{ paddingRight: "10px" }} alt=""/>
                            <div className="sub-description">
                                <p className="side-title" style={{ fontWeight: "800", fontSize: "20px" }}>FRONT_END</p>
                                <p>I am still breathing</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}
