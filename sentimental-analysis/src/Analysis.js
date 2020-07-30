import React, { Component } from 'react';
import Sentiment from 'sentiment'
import 'bootstrap/dist/css/bootstrap.min.css';


const sentiment = new Sentiment();

class Analysis extends Component{


    state={
        comment:'',
        feel:'',
        img:''
    };


   changeText=(e)=>{
        
        const city = e.target.value;
        const result=sentiment.analyze(city);
        console.log(result)

        if(result.score<0){
            //console.log('negative')
            this.setState({comment:result.score,feel:'negative',img:"https://img.icons8.com/emoji/48/000000/frowning-face.png"})
        }
        else if(result.score>0){
            //console.log('positive')
            
            this.setState({comment:result.score,feel:'positive',img:"https://img.icons8.com/emoji/48/000000/slightly-smiling-face.png"})
        }else{
            //console.log('neutral')
            this.setState({comment:result.score,feel:'neutral'})
        }

    

    }

    // analyze=(e)=>{
    //     const result=sentiment.analyze(e.target.value);
    //     console.log(result)

    //     if(result.score<0){
    //         console.log('negative')
    //         this.setState({comment:'negative'})
    //     }
    //     if(result.score>0){
    //         console.log('positive')
            
    //         this.setState({comment:'positive'})
    //     }else{
    //         console.log('neutral')
    //         this.setState({comment:'neutral'})
    //     }

       


    // }


    render(){
        return(
            <div className="py-5">
                <h1 className="py-5">Sentimental Analysis </h1>
                <textarea className="form-control py-5" onChange={this.changeText} itemType="text" />
               
        <p className="">{this.state.comment}</p>
        <img className="" src={this.state.img} alt="" />
        <p>{this.state.feel}</p>
                </div>
        );
    }
}


export default Analysis;