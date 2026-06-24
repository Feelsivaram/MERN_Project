import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// without routing ****
// createRoot(document.getElementById('root')!).render(
// 	<StrictMode>
// 		<App />
// 	</StrictMode>,
// );

// With Routing ****
const renderRoot = document.getElementById('root')!;
ReactDOM.createRoot(renderRoot).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
