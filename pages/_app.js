import '@/styles/globals.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'


export default function App({ Component, pageProps }) {
  return <><ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  /><Component {...pageProps} /></>
}
