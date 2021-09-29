import React from 'react';
import './register.css';

const Register = ({ onRouteChange }) => {
    return (
        <main>
            <article className="vh-100 dt w-100">
                <div className="dtc v-mid tc white ph3 ph4-l">
                    <div className="pb3 mh2 register shadow-5">
                        <h1 className="f4 bg-near-black white mv0 pv2 ph3">Let's get started</h1>
                        <div className="tr pa2">
                            <input
                                onClick={() => onRouteChange('signin')}
                                className="ph3 br1 pv2 input-reset ba b--black white bg-black hover-bg-transparent hover-black pointer f5 dib"
                                type="submit"
                                value="Return" />
                        </div>
                        <div className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f3 fw7 pa2 fw6 lh-copy black tc">Sign up</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6 black" htmlFor="uname">Username</label>
                                    <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-75" type="text" name="uname" id="uname" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6 black" htmlFor="password">Password</label>
                                    <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-75" type="password" name="password" id="password" />
                                </div>
                            </fieldset>
                            <div className="pa2">
                                <input
                                    onClick={() => onRouteChange('home')}
                                    className="ph3 pv2 input-reset ba b--black white bg-black grow pointer f5 dib"
                                    type="submit"
                                    value="Sign up" />
                            </div>
                        </div>

                    </div>
                </div>
            </article>
            <div>
            </div>
        </main>
    );
}


export default Register;