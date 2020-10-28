import React, { Fragment, useState } from "react";

const AddPlayer = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try{
            const body = { description };
            const response = await fetch("/players", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.log(err.essage);
        }
    };
    return (
        <Fragment>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
};

export default AddPlayer;