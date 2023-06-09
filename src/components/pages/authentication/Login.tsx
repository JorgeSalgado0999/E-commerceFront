import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// import {IconEye, IconEyeOff} from "@/assets";
import {
	StyledInputText,
	StyledInputSubmit,
	Input,
	Button,
} from "@/components/UI/atoms/";
import UserContext, {UserContextType} from "@/context/UserContext";

import styles from "./Login.module.css";
// import {
// 	changePassword,
// 	getParams,
// 	getSession,
// 	logIn,
// 	logOut,
// } from "@/auth/AuthFuncs";

export const Login = () => {
	const navigate = useNavigate();
	const {User, SetUser} = useContext(UserContext) as UserContextType;
	const [role, setRole] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const logoColor = getComputedStyle(document.body).getPropertyValue(
		"--main-color"
	);
	const secondaryColor = getComputedStyle(document.body).getPropertyValue(
		"--secondary-text"
	);

	const handleSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		//dummy();
		// loginAWS();
	};

	// async function loginAWS() {
	// 	console.log("cognito login...");
	// 	try {
	// 		await logIn(email, password);
	// 		navigate("/");
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	return (
		<div className={`${styles.background}`}>
			<h2 className="text-center">Iniciar Sesión</h2>
			<div className={`${styles.formContainer}`}>
				<div className="row center-xs">
					<div
						className={`col-xs-11 col-sm-7 col-md-5 ${styles.main_component}`}
					>
						<div className={styles.logo}>
							{/* <LogoFull color={logoColor} size="70%" /> */}
						</div>
						<form className={styles.form} onSubmit={handleSubmit}>
							<Input
								placeholder="Correo"
								inputType="email"
								value={email}
								type="state"
								params={{setValue: setEmail}}
							/>
							<div className={styles.passwordContainer}>
								<div className={styles.passwordInput}>
									<Input
										placeholder="Contraseña"
										inputType={"text"}
										value={password}
										type="state"
										params={{setValue: setPassword}}
									/>
								</div>
							</div>

							{/* <div className={`${styles.checkbox}`}>
								<input
									type="checkbox"
									id="cbox2"
									value="second_checkbox"
								/>{" "}
								<label>Mantener inicio de sesión abierto</label>
							</div> */}

							<StyledInputSubmit
								customType="primary"
								type="submit"
								value="Iniciar Sesión"
							/>

							<Button
								text="Registarme"
								func={() => navigate("/register")}
								full={true}
							/>
						</form>
						{/* <Button text="verificar sesión" func={verifySession} full={false} />
						<Button text="Iniciar sesión" func={loginAWS} full={false} />
						<Button text="cerrar sesión " func={logOut} full={false} />
						<Button text="params" func={getParams} full={false} />
						<Button text="change password" func={changePassword} full={false} /> */}
						{/* <Button text="update" func={updateAtributes} full={false} /> */}
					</div>
				</div>
			</div>
		</div>
	);
};
