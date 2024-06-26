import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./app/App"
import store from "./app/store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
