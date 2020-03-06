import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as actionCreators from '../store/actions/index';
import Truck from './Truck';



const SearchPage = ({trucks, ADD_TRUCK, fetchTrucks}) => {

    useEffect(()=>{
        fetchTrucks();
    },[fetchTrucks])

    const submit = (formValue, actions) => {
        if(formValue.options === 'cuisineType'){
            const newTrucks = trucks.filter(truck => {
                return truck.cuisineType.toLowerCase().includes(formValue.value.toLowerCase())
            })
            ADD_TRUCK(newTrucks)
        }else if (formValue.options === 'customerRatingAvg'){
            const newTrucks = trucks.filter(truck => {
                return truck.customerRatingAvg >= Number(formValue.value)
            })
            ADD_TRUCK(newTrucks)
        }
        fetchTrucks(formValue);
        actions.resetForm();
    }

    return (
        <div>
            <div>
                <Formik
                    initialValues={{
                        options: '',
                        value: ''
                    }}
                    onSubmit={submit}
                    render={props => {
                        return (
                            <Form >
                                <Field component='select' name='options' >
                                    <option>Search By</option>
                                    <option value='cuisineType'>Cuisine Type</option>
                                    <option value='customerRatingAvg'>Average Rating</option>
                                    <option value='radSize'>Distance</option>
                                </Field>
                                <Field name='value' type='text' placeholder='search' />
                                <button type='submit'>Search</button>
                            </Form>
                        )
                    }} />
                <div >
                    {trucks.map(truck => (
                        <Truck truck={truck} buttonText='Add to Fav' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(SearchPage);