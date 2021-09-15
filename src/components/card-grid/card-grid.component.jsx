import React from 'react';
import './card-grid.styles.css';
import { Card } from '../card/card.component';

export const CardGrid = (props) => {

    return (
        <div className="card-grid">
            {props.users.map((user) => <Card user={user} key={user.id}> </Card>)}
        </div>
        )
};