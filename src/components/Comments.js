import React, { Component } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiSubdirectoryLeft } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi';

export default class comments extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-8">
                        <h3 className="comments-title" style={{ marginBottom: "50px", marginTop: "30px" }} >Comments</h3>
                        <div className="input-group">
                            <div className="input-group-append">
                                <div className="icon-comment"><BsFillPersonFill size={40} /></div>
                            </div>
                            <input className="comment-box" placeholder="Type your comments" style={{ width: "600px", marginLeft: "10px", textAlign: "center" }} />
                            <div className="input-group-append">
                                <button className="btn btn-custom" type="submit" style={{ backgroundColor: "#02487a", color: "white", borderTopRightRadius: "8px", borderBottomRightRadius: "8px" }}>
                                    <BiSubdirectoryLeft size={30} />
                                </button>
                            </div>
                        </div>

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



                    <div className="col-4">
                        <h3 className="side-title" style={{ marginTop: "30px", }}>Related</h3>

                        <div className="input-group" style={{ marginTop: "30px" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BV3VpybFRoOdzVLPjn49I7i51Y13t8UnGA&usqp=CAU" width="200px" style={{ paddingRight: "10px" }} />
                            <div className="sub-description">
                                <p className="side-title" style={{ fontWeight: "800", fontSize: "20px" }}>FRONT_END</p>
                                <p>I am still breathing</p>
                            </div>
                        </div>

                        <div className="input-group" style={{ marginTop: "30px" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BV3VpybFRoOdzVLPjn49I7i51Y13t8UnGA&usqp=CAU" width="200px" style={{ paddingRight: "10px" }} />
                            <div className="sub-description">
                                <p className="side-title" style={{ fontWeight: "800", fontSize: "20px" }}>FRONT_END</p>
                                <p>I am still breathing</p>
                            </div>
                        </div>

                        <div className="input-group" style={{ marginTop: "30px" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BV3VpybFRoOdzVLPjn49I7i51Y13t8UnGA&usqp=CAU" width="200px" style={{ paddingRight: "10px" }} />
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
