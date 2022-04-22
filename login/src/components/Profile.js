import React, { useState} from "react";

export default function Profile() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}
	const user = JSON.parse(localStorage.getItem('user'));
            
	return (
		<div className="App">
			<h2>Add Image:</h2>
			<input type="file" onChange={handleChange} />
			<img src={file} />
            <ul><li>firstName :{user.firstName}</li>
			<li>lastName :{user.lastName}</li>
			<li>email :{user.email}</li>
			<li>phone :{user.phone}</li>
			</ul>
				
				
				
		
		</div>

	);
}


