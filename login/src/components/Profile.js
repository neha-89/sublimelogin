import React, { useState} from "react";

export default function Profile() {
	const [file, setFile] = useState();
	const data = JSON.stringify(localStorage.getItem('data'));
    console.log(data);
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
				password :
			</p>
		</div>

	);
}


