import React from 'react';
import logo from '../../assets/images/home/logo.svg';
import Image from 'next/image';
import { Input } from '../ui/input';
// import ReCAPTCHA from "react-google-recaptcha"
export default function Form() {
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <div className='w-full form'>
            <form action="">
                {/* <ReCAPTCHA  sitekey="6LcTpokqAAAAACTQ2dVs47O2dzCxV7MmI511EPb1" onChange={onChange}/> */}
                <label>
                    Name
                    <Input className='' type='text' placeholder='EX: mohamed yaocub'></Input>
                </label>
                <label>
                    Whats app number
                    <Input className='' type='tel' placeholder='Your whats app number'></Input>
                </label>
                <label>
                    Destniation (optional)
                    <Input className='' type='' placeholder='Choose your destination'></Input>
                </label>
                <label>
                    Arrive date (optional)
                    <Input className='' type='' placeholder='pick your arrive date to Makkah'></Input>
                </label>
                <button type='submit' className='submit'>Submit</button>
            </form>
        </div>
    );
}
