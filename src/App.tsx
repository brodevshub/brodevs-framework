import { defineElement } from '@lordicon/element';
import Home from '@pages/home/Home.tsx';
import Lottie from 'lottie-web';
import './App.css';

export default function App(): JSX.Element {
	defineElement(Lottie.loadAnimation);
	return <Home />
}
