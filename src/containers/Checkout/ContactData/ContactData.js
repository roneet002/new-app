import React, { Component } from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../../components/UI/Button/Button'
import classes from '../ContactData/ContactData.module.css'
import axios from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Name'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touchedtouched:false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter your Email Address'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Street'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Country'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            pincode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your Pincode'
                },
                value: '',
                validation:{
                    required:true,
                    minLength:5,
                    maxLength:6
                },
                valid:false,
                touched:false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'chepeast', displayValue: 'Cheapest' }
                    ]
                },
                validation:{},
                value:'',
                valid:true

            }
        },
        formIsValid : false,
        loading: false
    }

    ordersbtHandler = (evt) => {
        evt.preventDefault()
        this.setState({
            loading: true
        })
        const formData = {};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }
        const order = {
            ingredient: this.props.ingredient,
            price: this.props.price,
            orderData : formData
        }
        axios.post('/order.json', order)
            .then(response => {
                this.setState({
                    loading: false
                })
                this.props.history.push('/')
                // console.log(response)
            }).catch(error => {
                this.setState({
                    loading: false
                })
                console.log(error)
            })

    }
    InputChangedHandler = (event, inputindentifier) => {
        const udpateform = { ...this.state.orderForm }
        const updateformElement = { ...udpateform[inputindentifier] }
        updateformElement.value = event.target.value
        updateformElement.valid = this.checkvalidationHandler(updateformElement.value, updateformElement.validation)
         updateformElement.touched = true
        udpateform[inputindentifier] = updateformElement
        let formIsValid = true
        for(let inputindentifier in udpateform){
            formIsValid = udpateform[inputindentifier].valid && formIsValid
        }
                this.setState({ orderForm: udpateform,
                formIsValid:formIsValid
            })
    }
    checkvalidationHandler = (value, rule)=>{
    let isValid=false
    if(rule.required){
        isValid = value.trim() !==''
        
    }
    if(rule.minLength){
        isValid = value.length >= rule.minLength && isValid
    }
    if(rule.maxLength){
        isValid = value.length <= rule.maxLength && isValid
    }
    return isValid
    }
    render() {
        const formElementArray = []
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]

            })
        }

        


        let form = (<form onSubmit={this.ordersbtHandler}>
            {formElementArray.map(formElement => {
                    return (<Input elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        key={formElement.id}
                        changed={(event) => this.InputChangedHandler(event, formElement.id)}
                        invalid={!formElement.config.valid}
                        shouldvalidate={formElement.config.validation}
                        touched = {formElement.config.touched}
                        />)
                })}
            <Button btnType="Success" disabled={!this.state.formIsValid}>Order</Button>
        </form>)


        if (this.state.loading) {form = <Spinner />}
        return (

            <Auxiliary>
                <div className={classes.center}>
                    <h4>Enter Your Contact Details</h4>
                    {form}
                </div>
            </Auxiliary>
        )
    }

}



export default ContactData