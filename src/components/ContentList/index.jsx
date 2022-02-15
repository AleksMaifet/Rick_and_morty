import {memo} from "react";
import "./index.css";

const ContentList = memo(({content}) => {
	return (
		<div className='containerContent'>
			<ul className='contentWrapper'>
				{content.map(({id, name, image}) => {
					return <li className='contentItem' key={id}>
						<p>{name}</p>
						<img className='itemImg' alt='logo' src={image}/>
					</li>
				})}
			</ul>
		</div>
	);
});

export default ContentList;
