import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	const [isToggleOn, setIsToggleOn] = useState(false)
	const toggleInfoVisibility = () => {
		if (isToggleOn) {
			setIsToggleOn(false)
		} else {
			setIsToggleOn(true)
		}
	}

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button onClick={toggleInfoVisibility} className="btn">
					{isToggleOn ? '-' : '+'}
				</button>
			</header>
			{isToggleOn && <p>{info}</p>}
		</article>
	)
}

export default Question
