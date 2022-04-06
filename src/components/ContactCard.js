import React from "react";
const ContactCard=(props)=>{
    const{id,name,email}=props.contact;
    return(
        <div className="">
                <div className="">
                    <div className="">{id},{name}</div>
                    <div className="">{email}</div>
                </div>
                <button>Delete</button>
            </div>
    )
};

export default ContactCard;