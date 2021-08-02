import React, { Component } from 'react'
import PropTypes from 'prop-types'



class User extends Component {
    state = { 
        isVisiable : false
    }
    static defaultProps={
        name:"bilgi yok",
        departman:"bilgi yok",
        salary:"bilgi yok"
}

onClickEvent=(e)=>{
   this.setState({
       isVisiable : !this.state.isVisiable
   })
}


// constructor(props){
//     super(props);

//     this.state={
//         isVisiable : false
//     }
// }
render() {
        //destrunting
        const{name,departman,salary}=this.props;
        const{isVisiable}=this.state;
        return (
            <div className = "col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline " onClick={this.onClickEvent}>{name}</h4>
                        <i className="far fa-trash-alt" style= {{cursor:"pointer"}}></i>
                    </div>
                    {isVisiable ? <div className="card-body">
                        <p className="card-text">Maaş: {salary}</p>
                        <p className="card-text">Departman: {departman}</p>
                        
                    </div> : null
                    }
                    
                </div>
                
            </div>
        )
    }
}

User.propTypes={
    name:PropTypes.string.isRequired,
    salary:PropTypes.string.isRequired,
    departman:PropTypes.string.isRequired
}
export default User;
