import React from 'react';
import { v4 as uuidv4 } from 'uuid';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            chirp: '',
            myChirps: []
        };
    }

    componentDidMount() {
        this.setState({

            myChirps: [
                ...this.state.myChirps,
                { id: uuidv4(), username: 'MyNameIs21', chirp: 'Hi friends! Wuts up?' },
                { id: uuidv4(), username: 'GoJaguars2010', chirp: 'n2m wbu?' },
                { id: uuidv4(), username: 'HELLOWORLD365', chirp: 'n2m. Been super busy trying to code today...it is hard learning this stuff! I just love 2 chirp!' },
                { id: uuidv4(), username: 'GoJaguars2010', chirp: 'me too. I g2g though, ttyl!' },

            ]
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            username: '',
            chirp: '',
            myChirps: [...this.state.myChirps, { id: uuidv4(), username: this.state.username, chirp: this.state.chirp }]
        });
    }

    render() {
        return (

            <main className="container-fluid bg-light">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-6 mt-3 font-monospace">
                        <label className="display-6">Chirper</label>
                        <div className="input-group shadow bg-body rounded mt-3 mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input
                                className="form-control" placeholder="Username" aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={this.state.username}
                                onChange={e => this.setState({ username: e.target.value })}
                            />
                        </div>
                        <form className="form-group shadow bg-body rounded">
                            <textarea
                                placeholder="My chirp..."
                                value={this.state.chirp}
                                onChange={e => this.setState({ chirp: e.target.value })}
                                className="form-control"
                            />
                        </form>
                        <button onClick={e => this.handleSubmit(e)} className="btn-lg btn-primary shadow mt-3">
                            Chirp!
                        </button>
                    </div>
                </section>
                <br />
                <section className="row justify-content-center mt-3">
                    <div className="col-md-6 font-monospace">
                        <label className="display-6 mb-3">Timeline</label>
                        <ul className="list-group shadow bg-body rounded">
                            {this.state.myChirps.map(myChirp => (
                                <li className="list-group-item" key={`myChirps-chirp-${myChirp.id}`}>
                                    <span className="fw-bold fs-5 text-primary">@{myChirp.username}: </span>
                                    {myChirp.chirp}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <br />
                <br />
            </main>

        )
    }
}

export default App;