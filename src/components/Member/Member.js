import React from 'react';
import './Member.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Member = (props) => {
    const { name, img, mobile, email, income } = props.member;
    const [isPaid, setIsPaid] = useState(false);

    let addBtn = <button
        onClick={() => { props.handleAddMember(props.member); setIsPaid(true) }}
        className="addBtn" ><FontAwesomeIcon icon={faPlus} /> Add</button>

    if (isPaid) {
        addBtn = <button className="added" disabled><FontAwesomeIcon icon={faCheckCircle} /> Added</button>;
    }

    return (
        <div className="member">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="info">
                <h2> {name} </h2><br />
                <p> Phone: {mobile} </p>
                <p>Email: {email} </p>
                <p>Monthly Income: ${income} </p><br />
                {addBtn}

            </div>
        </div>
    );
};

export default Member;