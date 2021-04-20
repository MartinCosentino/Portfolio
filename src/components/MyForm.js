import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (

            // <div className="form__container">



            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/myybrwep"
                method="POST"
            >
                <div className="form-group">
                    <br />
                    <label for="email" style={{ color: "black" }}>Email address:</label>
                    <input type="email" name="email" className=" form-control" id="email" placeholder="name@example.com" />

                    <label for="text" style={{ color: "black" }}>Subject:</label>
                    <input type="text" name="subject" className=" form-control" id="text" />

                    <label style={{ color: "black" }}>Message:</label>
                    <textarea className=" form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <br />


                {status === "SUCCESS" ? <h5 style={{ color: "black", paddingLeft: "3.5rem", font: "Lobster, cursive;" }}>Enviado, <br /> Gracias.</h5> : <button className=" form__button btn btn-dark" value="Send" type="submit">Submit</button>}
                {status === "ERROR" && <p style={{ color: "black", fontFamily: "'Lobster', cursive;" }}>Ooops! There was an error.</p>}
            </form>

        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}