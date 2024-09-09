import "./index.scss";

import { createRoot } from "react-dom/client";

import App from "./App";

const root = document.createElement('div');
root.style.display = 'contents';
document.body.appendChild(root);

createRoot(root).render(<App />);
