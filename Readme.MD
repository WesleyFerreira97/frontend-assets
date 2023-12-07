#Assets Front End

## - React


- [Layout Grid e Container - Projeto BG Next Theme](https://github.com/WesleyFerreira97/BG-next-theme/tree/main/src/components/Layout) 
    - [Types do Grid](https://github.com/WesleyFerreira97/BG-next-theme/blob/main/src/types/grid.ts)
- [Stitches Config](https://github.com/WesleyFerreira97/BG-next-theme/blob/main/stitches.config.ts) 
    - **Contém :** Breakpoints, nomenclatura de cores, importação de fontes local e do Google
    - **Utils -**  Fortalece o css com utils personalizadas, alguns utils podem ser declaradas com seus respectivos breakpoints ex :
    -- `   themeFontSize: {
                    xs: "2rem",
                    md: "2.5rem",
                    lg: "3rem",
                },`
    - Contém :  gapXY, gridColumns, themeFont, themeFontSize
- [Menu Sidebar](https://github.com/WesleyFerreira97/BG-next-theme/blob/main/src/components/MenuSidebar/index.tsx)
    - Feito com Context API, podem ser inseridas diversas sidebars com suas respectivas direções de entrada setadas em suas props
    -[Hook useSidebarMenu](https://github.com/WesleyFerreira97/BG-next-theme/blob/main/src/hooks/useSidebarMenu.ts) utilizado em conjunto para aplicar animações de entrada e saida, além de ocultar o scroll do body quando a sidebar estiver aberta
- [Aplicação simples do Redux em um carrinho de compras](https://github.com/WesleyFerreira97/BG-next-theme/tree/main/src/reduceres)
- [Reset CSS em stitches e personalização do framework swiper (carousel)](https://github.com/WesleyFerreira97/BG-next-theme/blob/main/src/styles/Global.ts)
