import SearchInput from "../SearchInput";
import logo from "../../assets/logo.svg";
import "./index.css";
import {memo} from "react";

const Header = memo(({onSearch}) => (
	<header className="Header">
		<img src={logo} className="Header-logo" alt="logo"/>
		<SearchInput onSearch={onSearch}/>
	</header>
));

export default Header;
