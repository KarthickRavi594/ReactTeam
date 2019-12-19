import React, { Component } from 'react'
import axios from "axios";

class Connect extends Component {

    constructor(props) {

        super(props);

        this.state = {  

           ProductDetails:[]

        }

    }

    componentDidMount() {


        axios.get("http://localhost:5000/")


            .then(res => {


                console.log('Response -> ', res.data);


                this.setState({ ProductDetails : res.data })


                console.log('Array -> ', this.state.ProductDetails);


            })


    }


    render() {


        let li = this.state.ProductDetails.map((item, index) => {


            return (


                <div key={index}>


                    <li key={index}>{item.id}</li>


                    <li key={index}>{item.Name}</li>


                    <li key={index}>{item.Description}</li>


                    <li key={index}>{item.Image}</li>


                    <li key={index}>{item.Price}</li>


                    <li key={index}>{item.Quantity}</li>


                </div>


            )


        })


        return (



            <div>


                <ul className="List">


                    {li}


                </ul>


                {/* {this.state.apiResponse} */}


                {/* <h1>{this.state.apiResponse}</h1> */}


            </div>



        )


    }


}

 

export default Connect;