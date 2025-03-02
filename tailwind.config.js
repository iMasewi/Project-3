tailwind.config = {
    theme: {
        screens: {
            'sm' :'576px',
            // => @media (min-width: 576px) {...}

            'md' :'768px',
            // => @media (min-width: 768px) {...}

            'lg' :'992px',
            // => @media (min-width: 992px) {...}

            'xl' :'1240px',
            // => @media (min-width: 1200px) {...}

            '2xl': '1240px',
            // => @media (min-width: 1200px) {...}
        },
        extend: {
            colors:{
                primary: '#000000',
                secondary: '#00000099'
            }
        },
        fontFamily: {

        }
    }
}