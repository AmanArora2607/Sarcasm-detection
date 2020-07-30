import React, { Component } from 'react';
import pd from 'paralleldots'
import 'bootstrap/dist/css/bootstrap.min.css';


 pd.apiKey='UzjNVGajBXW6HsiOCqrlSLocaLKSUeX5oZJGcEpKWYw';


class Sarcasm extends Component{


    state={
        comment:'',
        feel:'',
        img1:''
    };

    detectSarcasm= async (e)=>{
        e.preventDefault();
        const text=e.target.elements.sentance.value;
        console.log(text)

        pd.sarcasm(text,'en')
        .then(res=>{
            this.setState({comment:res})
        })
        
    }

  


    render(){
        return(
            <div className="py-5">
                <h1 className="py-5">Sarcasm Detection</h1>
                <form onSubmit={this.detectSarcasm}>

                <div className="form-group">
    <textarea className="form-control py-5" type="text" name="sentance" placeholder="Enter the string"/>
    </div>
    <div className="form-group ">
    <button className="btn btn-success">Get </button>
    </div>
                </form>
        <p>{this.state.comment}</p>

                </div>
        );
    }
}


export default Sarcasm;