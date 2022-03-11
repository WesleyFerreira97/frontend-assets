import React, { MouseEvent } from 'react'
import { ButtonDefault } from './style'

interface ButtonProps {
    children: string | React.ReactChild;
    bgColor?: string;
    onClick?: () => void;
}

export function Button(props: ButtonProps) {
	const { children, onClick, ...rest } = props
	return (
		<>
			<ButtonDefault {...rest} onClick={onClick}>{children}</ButtonDefault>
		</>
	)
}
