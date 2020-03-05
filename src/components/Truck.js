import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index';

const Truck = () => {


    return (
        <div>
            <div>

                <p><strong>Cuisine Type:</strong> </p>
                <p><strong>Average Customer Rating:</strong> </p>
                <p><strong>Current Location:</strong> </p>
                <p><strong>Current Location Depart Time:</strong></p>
                <p><strong>Next Location:</strong> </p>
                <p><strong>Next Location Arrival Time:</strong> </p>
            </div>
            <div>

                <p>{truck.cuisineType}</p>
                <p>{truck.customerRatingAvg}</p>
                <p>{truck.currentLocation.location}</p>
                <p>{truck.currentLocation.departureTime}</p>
                <p>{truck.nextLocation.location}</p>
                <p>{truck.nextLocation.arrivalTime}</p>
                <button onClick={submit(truck.id)}>{buttonText}</button>
            </div>

        </div>
    )

}

export default connect(
    state => state,
    actionCreators
)(Truck);