module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'shop': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        'button':'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
      },
      height: {
        'small':'2px',
        '128': '32rem',
        '108':'28rem',
      },
      width:{
        '108':'28rem',
        '128':'32rem',
      },  
       colors: {
        'violet-lg': 'rgb(109 40 217)',
        'violet-md': 'rgb(139 92 246)',
        'violet-sm': 'rgb(196 181 253)',
        'violet-xs': 'rgb(245 243 255)',
        'blue-lg':'rgb(29 78 216)',
        'blue-md':'rgb(59 130 246)',
        'gray-white':'#f4f5f6',
        'body-gray':"#dce1e4",
        'stone-50':'#f4f4f5',
        'stone-600':'#57534e',
        'stone-700':'#44403c',
        'stone-500':'#78716c',
        'stone-800':'#292524',
      },
      boxShadow: {
        'all': 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
        'op': 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
        'inner-hard':' rgb(204, 219, 232) 6px 3px 0px 0px inset, rgba(255, 255, 255, 0.5) -5px -5px 0px 0px inset',

      },
      transitionDuration: {
        '0': '0ms',
        '3000': '3000ms',
      }
    },
  },
  plugins: [],
}
