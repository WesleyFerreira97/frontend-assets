export interface ThemeProps {
    readonly theme: {
        colors: {
            primary: string
            secondary: string
            secondaryAlt: string
            neutral: string
            neutralAlt: string
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
