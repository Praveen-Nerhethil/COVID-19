import React,{Component} from 'react';

import Accordion from 'react-bootstrap/Accordion'
import Axios from 'axios';
import {Card ,Button} from 'react-bootstrap';

class StateDatas extends Component{
    constructor(){
        super();
        this.state= {
            stateData : {}
        }
    }
        componentDidMount(){
            Axios.get("https://data.covid19india.org/state_district_wise.json").then(response=>{
               // response.date
                this.setState({stateData:response.data});

        });
        
    }

    render(){
      let keys=Object.keys(this.state.stateData);
        return(
            <div className="row">
              <div className="col-md-12">
              <Accordion>
                {
                  keys.map((itm,ky)=>{
                    let districts =this.state.stateData[itm].districtData;
                    let district_keys =Object.keys(districts);

                    let total_active=0;
                    let total_confirmed=0;
                    let total_deaths=0;
                    let total_recover=0;
                    
                    let district_list =[];
                    for( let x in districts){
                      total_active += districts[x].active;
                      total_confirmed += districts[x].confirmed;
                      total_recover += districts[x].recovered;
                      total_deaths += districts[x].deceased;
                      let ob=districts[x]
                      ob["district_name"]=x;
                      district_list.push(ob);

                    }
                    console.log(district_list)
                    return(
                      <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} varient="primary" eventKey={ky}>
        {itm} - <span className="btn-dark p-1 mr-2"> Total Cases -{total_confirmed} </span> <span className="btn-dark p-1 mr-2"> Total Active -{total_active} </span> <span className="btn-dark p-1 mr-2"> Recoverd -{total_recover} </span> <span className="btn-dark p-1 mr-2"> Death -{total_deaths} </span>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={ky}>
      <Card.Body>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <td>district</td>
              <td>Confirmed</td>
              <td>Active</td>
              <td>Recovered</td>
              <td>Deaths</td>
            </tr>
          </thead>

          <tbody>
              {
                district_list.map((itm,ky)=>{
                  return(
                    <tr>
                      <td>{itm.district_name}</td>
                      <td>{itm.confirmed}</td>
                      <td>{itm.active}</td>
                      <td>{itm.confirmed}</td>
                      <td>{itm.deceased}</td>
                    </tr>
                  )
                })
              }        
          </tbody>
        </table>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
                    )
                  })
                }
  
</Accordion>
            </div>
          </div>
        )
      }
}

export default StateDatas;

