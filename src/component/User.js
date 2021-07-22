import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    static defaultProps={
        name:"bilgi yok",
        departman:"bilgi yok",
        salary:"bilgi yok"
    }
    render(props) {
        //destrunting
        const{name,departman,salary}=this.props;
        return (
            <div className = "col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline">{name}</h4>
                        <i className="far fa-trash-alt" style= {{cursor:"pointer"}}></i>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Maaş: {salary}</p>
                        <p className="card-text">Departman: {departman}</p>
                    </div>
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
