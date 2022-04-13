import React, { useState} from "react";

export default function Profile() {
	const [file, setFile] = useState();
    const userData = JSON.parse(localStorage.getItem("userdata"));
	console.log(userData);
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}
   
	return (
		<div className="App">
			<h2>Add Image:</h2>
			<input type="file" onChange={handleChange} />
			<img src={file} />
            <p>firstName : 
				lastName : 
				email :
				phone :
			</p>
		</div>

	);
}


