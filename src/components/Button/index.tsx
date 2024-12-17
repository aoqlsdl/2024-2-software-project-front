import React from 'react'
import * as s from './styles'

interface Props {
    width?: number
    height?: number
    marginBottom?: number
    padding?: number
    border?: string
    rad?: number
    font?: number
    color?: string
    bg?: string
    children?: React.ReactNode
    func?: () => void
    disabled?: boolean
    className?: string
}

const Button: React.FC<Props> = ({
    width,
    height,
    marginBottom,
    padding,
    border,
    rad,
    font,
    color,
    bg,
    children,
    func,
    disabled = false,
    className = '',
}) => {
    return (
        <>
            <s.Container
                width={width}
                height={height}
                marginBottom={marginBottom}
                padding={padding}
                border={border}
                rad={rad}
                font={font}
                color={color}
                bg={bg}
                onClick={!disabled ? func : undefined}
                disabled={disabled}
                className={`${className} ${disabled ? 'disabled' : ''}`}
            >
                {children}
            </s.Container>
        </>
    )
}

export default Button
