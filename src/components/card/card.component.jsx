import React from 'react';
import './card.styles.css';
export const Card = (props) => {
    return (
        <div className="card">
            <img src={`https://robohash.org/${props.user.id}.png`} alt='Robohash'/>
            <h5>Name : {props.user.name}</h5>
            <h5>Email: {props.user.email}</h5>
            <h5>Phone: {props.user.phone}</h5>
            <h5>Company: {props.user.company.name}</h5>
        </div>
        );
};