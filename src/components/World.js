import React,{Component} from 'react'
import Axios from 'axios';

class World extends Component{
    constructor(){
        super();
        this.state= {
            data : []
        }
    }
        componentDidMount(){
            Axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
               // response.date
                this.setState({data:response.data});

        });
        
    }
    render(){
        return(
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <td>Country</td>
                            <td>Total Case</td>
                            <td>Recoverd</td>
                            <td>Death</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((itm,ky)=>{
                                return(
                                    <tr>
                                        <td>{itm.country}
                                            <img style={{width :'28px' , marginLeft:'10px'}} src={itm.countryInfo.flag} /></td>
                                        <td>{itm.cases}</td>
                                        <td>{itm.recovered}</td>
                                        <td>{itm.deaths}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default World;