import React, { Component } from 'react'
import Auxiliary from '../hoc/Auxiliary/Auxiliary'
import Order from '../components/Order/Order'
import axios from '../axios-order'
import withErorHandling from '../hoc/withErorHandling/withErorHandling'

class Orders extends Component {
    state = {
        order: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/order.json').then(res => {
            console.log(res.data)
            const fetchOrder = []
            for (let key in res.data) {
                fetchOrder.push({
                    ...res.data[key],
                    id: key
                })
            }

            this.setState({ loading: false, order: fetchOrder })
        }).catch(err => {
            this.setState({ loading: false })
        })
    }
    render() {

        return (
            <Auxiliary>
                {
                    this.state.order.map(order => {
                        return (
                            <Order key={order.id}
                                ingredient={order.ingredient}
                                price={order.price} />
                        )
                    })

                }
            </Auxiliary>
        )
    }
}

export default withErorHandling(Orders, axios)