import React,{Component} from 'react'
import {Card} from 'react-bootstrap'
import StateDatas from './StateDatas';
import Axios from 'axios';


class India extends Component{

    constructor(){
        super();
        this.state= {
            data : []
        }
    }
    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            // response.date
             this.setState({data:response.data});

     });    
    }
    render(){

        
        return(
            <div className="ind">
                <div className='col-md-12'>
                    <img src="https://www.countryflags.io/in/flat/64.png"></img>
                    <h3>INDIA</h3>
                </div>
                
                 <div className='col-md-12'>
                
                    <div className='row'>
                        <div className='col-md-3'>
                        <Card className='badge badge-danger' bg="danger" style={{ width: '18rem' }}>
                           
                            <Card.Body className='text-center'>
                              <Card.Title>TOTAL</Card.Title>
                              <h3>{this.state.data.cases}</h3>
                              <Card.Text>
                                [Total case in india]
                              </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='badge badge-danger' bg="warning" style={{ width: '18rem' }}>
                           
                           <Card.Body className='text-center'>
                             <Card.Title>ACTIVE</Card.Title>
                             <h3>{this.state.data.active}</h3>
                             <Card.Text>
                               [Active Case Today : {this.state.data.todayCases} ]
                             </Card.Text>
                           </Card.Body>
                           </Card>
                           </div>
                        <div className='col-md-3'>
                        <Card className='badge badge-danger' bg="success" style={{ width: '18rem' }}>
                           
                           <Card.Body className='text-center'>
                             <Card.Title>RECOVERY</Card.Title>
                             <h3>{this.state.data.recovered}</h3>
                             <Card.Text>
                               [Recovery Case Today : {this.state.data.todayRecovered}]
                             </Card.Text>
                           </Card.Body>
                           </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='badge badge-danger' bg="info" style={{ width: '18rem' }}>
                           
                           <Card.Body className='text-center'>
                             <Card.Title>DEATH</Card.Title>
                             <h3>{this.state.data.deaths}</h3>
                             <Card.Text>
                               [Death Today : {this.state.data.todayDeaths}]
                             </Card.Text>
                           </Card.Body>
                           </Card>
                        </div>
                    </div>
                </div> 
                <div className='col-md-12'>
                     <StateDatas/>
                 </div>  
            </div>
        )
    }
}

export default India;