import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PostDate } from '../actions';
import Select from 'react-select';


class Booking extends Component {
    constructor(){
        super()

        

        this.state={
           
            phone:'',
            date:'',
            email:'',
            subject:'',
            selectedOption: []
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangPhone = this.handleChangPhone.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangEmail = this.handleChangEmail.bind(this);
        this.handleChangSubject = this.handleChangSubject.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

 
       
    }

    handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };

    handleChangeName(event){
        this.setState({name:event.target.value});
        console.log(event.target.value);
    }

    handleChangPhone(event){
        this.setState({phone:event.target.value});
    }
    handleChangeDate(event){
      this.setState({date:event.target.value});
    }
    handleChangEmail(event){
        this.setState({email:event.target.value});
    }
    handleChangSubject(event){
        this.setState({subject:event.target.value});
    }

    handleSubmit(event){
        this.props.PostDate(
            this.state.selectedOption,
            this.state.phone,
            this.state.date,
            this.state.email,
            this.state.subject
        );

       

        
        
    }
    

    
    
    render(){
      const { selectedOption } = this.state;
      const options = [
        { value: '10:30', label: '10:30' },
        { value: '02:30', label: '02:30' },
        { value: '06:30', label: '06:30' },
        { value: '09:30', label: '09:30' }
      ];
        return(
            <div className="container">
              <h2>Booking Details Page</h2>

                <form>
                <label className="d-block w-100" >Movie Time</label>
                    <div className="form-group">
                    
                    <Select className="d-block"
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={options}
                    />
                        
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.handleChangPhone}
                            id="phone" />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date"
                            className="form-control"
                            value={this.state.date}
                            onChange={this.handleChangeDate}
                            id="date" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleChangEmail}
                            id="title" required/>
                    </div>
                    <div className="form-group">
                        <label>No of Seats</label>
                        <input type="number"
                            className="form-control"
                            value={this.state.subject}
                            onChange={this.handleChangSubject}
                            id="title" />
                    </div>
                    <Link to='/ticketbooked'>
                    <button type="submit" className="btn btn-success"
                    onClick={this.handleSubmit}>
                        Submit
                    </button>
                    </Link>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){


    return bindActionCreators({PostDate},dispatch)
}


export default connect(null,mapDispatchToProps)(Booking);