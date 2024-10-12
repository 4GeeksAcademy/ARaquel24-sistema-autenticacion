import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Form from "../component/form";
import { Navigate } from "react-router-dom";
import Registrarse from "../component/resgistarse";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			{store.auth ? <Navigate to = '/demo' /> :<Form /> }
			<Link to="/registarse">
				<button className="btn btn-success m-3" >Registrarse</button>
			</Link>
		</div>
	);
};
