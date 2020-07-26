import React from 'react';
import './Shop.css';
import Member from '../Member/Member';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10=fakeData;
    const [members, setMembers]=useState(first10);
    const [cart, setCart]=useState([]);
    //console.log(members)
    const handleAddMember=(member)=>{
        //console.log('member added', member);
        const newCart =[...cart, member];
          setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="members">
                {
                   members.map(mem=> <Member 
                     handleAddMember={handleAddMember}
                    member={mem} ></Member> )
                }   
            </div>
            <div className="members-count">
                 
                     {
                         <Cart cart={cart} ></Cart>
                     }
                 
            </div>
            
        </div>
    );
};

export default Shop;