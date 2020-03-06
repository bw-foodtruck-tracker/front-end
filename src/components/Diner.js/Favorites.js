import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Truck from './Truck';





const Favorites = ({trucks, fetchTrucks}) => {


    useEffect(() => {
        fetchTrucks();
    }, []);

    return (
        <div>
            <div>
                {trucks.map(item => (
                    <Truck truck={item} buttonText='Remove' />
                ))}

            </div>
        </div>
    )


}

export default connect(
    state => state,
    actionCreators
)(Favorites);