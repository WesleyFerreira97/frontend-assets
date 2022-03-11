import React, { ClassAttributes, createElement, HTMLAttributes } from 'react'
import { TextViewWrap } from './style'

interface TextViewProps extends HTMLAttributes<HTMLHeadElement> {
    tag: string
    type?: string
    children?: string | React.ReactNode
}

export function TextView({tag, children, ...props}: TextViewProps) {
	const Tag = tag || 'h1'

	return (
		<TextViewWrap>
			{createElement(Tag, {...props, className: 'text'}, children)}
		</TextViewWrap>
	)
}
