import React from "react";
class AddContact extends React.Component{
    render(){
        return(
            <div className="">
                <h2>AddContact</h2>
                <form className="">
                    <div className="">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="enter name here"/>
                    </div>
                    <div className="">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="enter email here"/>
                    </div>
                    <button className="">Add Details</button>
                </form>
            </div>
        );
    }
}
export default AddContact