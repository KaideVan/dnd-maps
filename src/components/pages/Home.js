import React from 'react';
import { Redirect } from 'react-router-dom';
import MessageBox from '../MessageBox.js'

class Home extends React.Component {

    state={
        worldCode:'',
        toDashboard: false,
        errorMessage: ''
    }

    onChange = (e) => {
        this.setState(
            {
                worldCode: e.target.value
            }
        );
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.worldCode == '') {
            this.setState({
                errorMessage: 'Enter a world code.'
            });
        }
        else if (this.state.worldCode.toLowerCase() == 'citia') {  //temp code. in the future check if world codes exist.
            this.setState({
                errorMessage: '',
                toDashboard: true
            });
        } else {
            this.setState({
                errorMessage: `'${this.state.worldCode}' does not exist. Did you mispell your world code?`
            });
        }
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to={`/dnd-maps/${this.state.worldCode}`}/>
            
        }

        return (
            <div style={bgStyle}>
                <div className={"container h-100"}>
                    <div className={"row h-100 justify-content-center align-items-center"}>
                        <form onSubmit={this.onSubmit} className={"col-lg-8 col-6 col-xs-4"} style={paperStyle}>
                        <div className={"form-group"}>
                            <label for={"formGroupExampleInput"} style={handWriting}>Enter world code:</label>
                            <div className={"input-group"}>
                                <input type={"text"} class={"form-control"} id={"formGroupExampleInput"} placeholder={"Eg. 'CITIA'"} value={this.state.title} onChange={this.onChange}/>
                                
                                <div className={"input-group-append"}>
                                    <input type={"submit"} className={"btn btn-danger"} value={"Go"}/>
                                </div>
                            </div>
                            <MessageBox message={this.state.errorMessage} />
                        </div>
                        </form>   
                    </div>
                </div>
            </div>
        );
    }
}


//images
const paperImageURL = 'https://i.pinimg.com/originals/47/b5/67/47b567ff37393b5c564cbe1186e90662.jpg';
const bgImageURL = '/images/woodBackgroundImage.jpg';

const handWriting = {
    fontFamily: `'Courgette', 'cursive'`,
    marginBottom: '15px'
}

const paperStyle = {
    backgroundImage: `url(${paperImageURL})`,
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'cover',
    padding: '25px',
    boxShadow: '5px 10px 10px rgba(0,0,0,0.5)',
    color: '#000',
    fontWeight: '500',
    fontSize: '2.5em',
    textAlign: 'center',
    border: '1px solid #1f1715',
    borderTop: '1px solid #473d2b',
}

const bgStyle = {
    backgroundImage: `url(${bgImageURL})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    color: 'white'
}

export default Home;
