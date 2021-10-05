import React from 'react'
import s from './Wall.module.css'

const ROWS = [...Array(60)]
const CELLS = [...Array(10)]

const Wall = () => {
	return (
		<div className={s.container}>
			{ROWS.map((e, i) => (
				<div key={i} className={s.row}>
					{CELLS.map((f, j) => (
						<div key={j} className={s.brick}></div>
					))}
				</div>
			))}
		</div>
	)
}

export default Wall
