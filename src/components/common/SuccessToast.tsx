import Toastify from 'toastify-js'

export const SuccessToast = (message: string) => Toastify({
  text: message,
  duration: 3000,
  gravity: 'top', // `top` or `bottom`
  position: 'right', // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    display: 'flex',
    alignItems: 'center',
    color: 'green',
    padding: '20px',
    boxSizing: 'border-box',
    background: 'lightgreen',
    position: 'absolute',
    width: '300px',
    height: '50px',
    borderRadius: '10px',
  },
  offset: {
    y: '120px',
    x: '20px',
  },
})