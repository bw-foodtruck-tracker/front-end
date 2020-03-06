import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';


const VendorPage = ({ DELETE_TRUCK, ADD_TRUCK, fetchTrucks, trucks }) => {

    useEffect(() => {
        fetchTrucks();
    }, []);

    const remove = id => event => {
        event.preventDefault();
        const newTrucks = trucks.filter(truck => {
            return truck.id !== id
        })
        ADD_TRUCK(newTrucks)
        DELETE_TRUCK(id)
    }

    return (
        <div>
            <div>

                {trucks.map(truck => (
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
                        </div>
                        <div>
                            <button onClick={remove(truck.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default connect(
    state => state,
    actionCreators
)(VendorPage);
