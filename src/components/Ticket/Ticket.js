import React from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countriesData: {
                Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
                Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
                US: ["Los Angles", "San Diego", "Chicago"],
            },
            mainCountryCities: [],
            firstName:"",
            lastName:"",
            email:"",
            phoneNumber:""
        }
    }
    firstNameChangeHandler(e){
       this.setState({firstName: e.target.value})

    }
    lastNameChangeHandler(e){
        this.setState({lastName: e.target.value})
        
    }
    phoneNumberChangeHandler(e){
        this.setState({phoneNumber: e.target.value})
        
    }
    emailChangeHandler(e){
        this.setState({email: e.target.value})
    }
    countriSelectHandler(e){
        console.log(e.target.value);
        let mainCountri = e.target.value;
        console.log(mainCountri)
        this.setState({ mainCountryCities: this.state.countriesData[mainCountri]})





        // if(e.target.value === "Iran"){
        //     return (
        //         this.setState({
        //             mainCountryCities: this.state.countriesData.Iran
        
        //         })
        //     )
        // } 
        // if(e.target.value === "Turkey"){
        //     return (
        //         this.setState({
        //             mainCountryCities: this.state.countriesData.Turkey
        
        //         })
        //     )
        // }  
        // if(e.target.value === "US"){
        //     return (
        //         this.setState({
        //             mainCountryCities: this.state.countriesData.US
        
        //         })
        //     )
        // } 
     
    }
  
  

    render() {
        console.log(this.state.mainCountryCities)
        return (
            <div className="container">
                <div className="col-md-6 box">
                    <input value={this.state.firstName} onChange={(e)=>{this.firstNameChangeHandler(e)}} className="fnameInput" placeholder="First Name" />
                </div>

                <div className="col-md-6 box">
                    <input value={this.state.lastName} onChange={(e)=>{this.lastNameChangeHandler(e)}} className="lnameInput" placeholder="Last Name" />
                </div>
                <div className="col-md-6 box">
                    <input value={this.state.phoneNumber} onChange={(e)=>{this.phoneNumberChangeHandler(e)}} className="phoneInput" placeholder="Phone Number" />
                </div>
                <div className="col-md-6 box">
                    <input value={this.state.email} onChange={(e)=>{this.emailChangeHandler(e)}} className="emailInput" placeholder="Email" />
                </div>
                <div className="col-md-6 box">
                    <select onChange={(e)=>{this.countriSelectHandler(e)}} className="countrySelect">
                        <option value="-1">Please Select ...</option>
                        <option className="option" value="Iran" >Iran</option>
                        <option className="option" value="Turkey">Turkey</option>
                        <option className="option" value="US">United State</option>
                    </select>
                </div>
                <div className="col-md-6 box">
                    <select className="citySelect">
                            <option value="-1">Please Select City</option>
                            {this.state.mainCountryCities.length && this.state.mainCountryCities.map((mainCountryCity,index)=>{
                                 return(<option key={index} value={mainCountryCity}  className="option">{mainCountryCity}</option>)
                            })}
                            
                            
                    </select>
                </div>
                <div className="col-md-12 box">
                    <button className="btn">Book a ticket</button>
                </div>
            </div>

        )
    }
}
