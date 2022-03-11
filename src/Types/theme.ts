export interface ThemeProps {
    readonly theme: {
        colors: {
            primary: string
            secondary: string
            neutral: string
            white: string
            gray: string
        }
    },
    readonly breakpoints: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
        xxl: number
    }
}
