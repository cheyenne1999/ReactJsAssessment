// Filename - App.js

import React from "react";
import "./App.css";
import Navbar from './component/Navbar.js';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GooglePlacesAutocomplete from './component/GooglePlacesAutocomplete.js';
import DisplayInput from './component/Display.js';
import ContactUs from './component/Contact.js';

function App() {
	return (
		
		<div>
			<Navbar/>

                <Routes>
                    <Route path="/" element={<GooglePlacesAutocomplete />} />
                    <Route path="/display" element={<DisplayInput />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>

			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	);
}



export default App;
