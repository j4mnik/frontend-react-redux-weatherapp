import React from 'react';
import './signin.css';

const Signin = ({ onRouteChange }) => {
    return (
        <main className="signin_menu">
            <article className="vh-100 dt w-100 signin">
                <div className="dtc v-mid tc white ph3">
                    <h2 className="f1 fw5 lh-title tc white">Weather App</h2>
                    <h2 className="f3 fw4 lh-copy white tc">built in React & Redux</h2>
                    <article className="br2 ba dark-gray b--black-10 bg-black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
                        <div className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f3 fw5 lh-copy black-70 tc">Log in</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="uname">Username</label>
                                    <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-75" type="text" name="uname" id="uname" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-75" type="password" name="password" id="password" />
                                </div>
                            </fieldset>
                            <div className="pa2">
                                <input
                                    onClick={() => onRouteChange('home')}
                                    className="ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f5 dib"
                                    type="submit"
                                    value="Sign in" />
                                <div className='pa2'>
                                    <input
                                        onClick={() => onRouteChange('register')}
                                        className="ph3 pv2 input-reset ba b--transparent white grow pointer f5 dib register_button shadow-5"
                                        type="submit"
                                        value="Register" />
                                </div>
                            </div>
                            <div className="lh-copy mt3">
                                <a href="#0" className="f5 link underline dim white db">Continue as a guest</a>
                            </div>
                        </div>
                    </article>
                </div>
            </article>
            <div className="vh-25 dt w-100 bottom tc ">
                <h2 className="f2 fw4 pa2 ph5 white">See more my projects ✋</h2>
                <a className="f5 link dim ph4 pv3 mb2 dib white bg-light-blue" href="https://github.com/j4mnik" target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </main>
    );
}


export default Signin;