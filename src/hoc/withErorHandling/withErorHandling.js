import React, { Component } from 'react'
import Auxiliary from '../Auxiliary/Auxiliary'
import Modal from '../../components/UI/Modal/Modal'

const withErorHandling = (Wrapcomponent, axios) => {
    
    return class extends Component {
        state={
            error:null
        }
            componentWillMount(){
               this.reqinterceptors=axios.interceptors.request.use(req =>{
                    this.setState({error:null})
                    return req
                    })
                  this.respinterceptors=  axios.interceptors.response.use(res => res, error =>{
                this.setState({error:error})
                })
        }
componentWillUnmount(){
    axios.interceptors.request.eject(this.reqinterceptors)
    axios.interceptors.response.eject(this.respinterceptors)
}



        closeErrorHandler =()=>{
            this.setState=({
                error:null
            })
        }

        render() {
            return (
                <Auxiliary>
                    <Modal show={this.state.error}
                    closeHandler={this.closeErrorHandler}>
                        {this.state.error ? this.state.error.message:null}
                    </Modal>
                    <Wrapcomponent {...this.props} />
                </Auxiliary>

            )
        }

    }

}
export default withErorHandling