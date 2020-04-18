import React, { Component } from 'react'
import styles from './Layout.module.css'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Header from '../../components/Toolbar/Header'
import SideDrawer from '../../components/Toolbar/SideDrawer/SideDrawer'

class Layout extends Component{
    state={
    backdrop:false
    }
    hideBackdropHandler=()=>{
    this.setState({
        backdrop:false
    })
}
DrawerToggleHandler=()=>{
this.setState((prevState)=>{
    return {backdrop:!prevState.backdrop}
})

}

    render(){
        return(
            <Auxiliary>
                <Header DrawerToggleHandler={this.DrawerToggleHandler} />
                <SideDrawer
                hideBackdropHandler={this.hideBackdropHandler}
                open={this.state.backdrop}
                />
            <main className={styles.center}>
                {this.props.children}
            </main>
            </Auxiliary>
            
            
                )

            }
}

export default Layout

