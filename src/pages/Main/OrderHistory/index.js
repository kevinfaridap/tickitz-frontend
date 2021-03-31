import React from 'react'
import Footer from '../../../components/Footer'
import Navbarin from '../../../components/NavbarIn'
import OrderHistoryJumbotron from  '../../../components/OrderHistoryJumbotron'

function OrderHistory() {
    return (
        <div>
            <Navbarin />
            <OrderHistoryJumbotron/>
            <Footer />
        </div>
    )
}

export default OrderHistory
