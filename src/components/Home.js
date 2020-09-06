import React from 'react';

import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();

    return (
        <React.Fragment>
            <div className="card text-center">

                <div className="card-body">
                    <h5 className="card-title">Hello!</h5>
                    <p className="card-text">Welcome to my react hooks practise!</p>
                    <p className="card-text">In this app I tried include the examples for each hooks from React tutorial. This app is my learning app. So don't judge me hard :)</p>
                    <button
                        type="button" className="btn btn-outline-primary"
                        onClick={() => history.push("/useState")}
                    >
                        Let's get started
                    </button>
                </div>

            </div>




        </React.Fragment>
    )
}