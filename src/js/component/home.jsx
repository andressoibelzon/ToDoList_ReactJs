import React, { useState } from "react";


//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	function addTask(e) {
		e.preventDefault()

		setList(list.concat(task))
		setTask("")
	}
	console.log(list);

	function deleteTask(index) {
		let reducedList = [...list];
		reducedList.splice(index);
		setList(reducedList)
	}
	console.log(list)

	return (
	
		<div className="container">
			<form onSubmit={addTask}>
			<input 
			type="text"
			className="text"
			onChange={(e)=>setTask(e.target.value)}
			value={task} 
			placeholder={"add task"}></input>
			<button
			disabled={task ? "" : "disabled"}>+</button>
			<ul>
				{list.map((t, index) => 
				<li key={index}>{t} 
				<button onClick={()=>deleteTask(index)}>x</button>
				</li>)}
			</ul>
			</form>
		</div>
	);
};

export default Home;
