import React from "react";
import Button from "../components/button";
import Zurag1 from '../assets/amjilt.jpg';
import './home.css';
import { Link } from 'react-router-dom';

const Home1 = ()=>{
    return(
        <div className="body">
                <div className="title">
                    <h1>TITLE1</h1>
                    <div className="title1"></div>
                    <h4>Lorem ipsum dolorntore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit consectetur facere nam delestias sit consectetur facere nam delectus corpoti inventore molestias sit consectetur facere nam delectus corpo quos mollitia velit iste at ea, quam dolor fugiat possimus</h4>
                <Link to={"/red"}><Button variant='red' text='MORE' img={Zurag1} /></Link>
            </div>
            <div className="title2">  
                 <h1>TITLE2</h1>
                <div className="title2_1"></div>
                    <h4>Lorem ipsum dolorntore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit con facere nam delectus coctus corpoti inventore molestias sit consectetur facere nam delectus corpoti inventore molestias sit consectetur facere nam delectus corpo quos mollitia velit iste at ea, quam dolor fugiat possioctus corpoti inventore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit consectetur facere nam delectus corpoti inventore molestias sit consectetur facere nam delectus corpo quos mollitia velit iste at ea, quam dolor fugiat possimus</h4>
                    <Link to={"/lime"}><Button variant='lime' text='MORE' img={Zurag1} /></Link>
            </div>
            <div className="title3">
                <h1>TITLE3</h1>
            <div className="title3_1"></div>
                    <h4>Lorem ipsum dolorntore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit consectur facere nam delectus corpoti inventore molestias sit consectetur facere nam delectus corpo quos mollitia velit iste at ea, quam dolor fugiat possiore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit consectetur facere nam delectus coctus corpoti inventore molestias sit consectetur facere nam delectus corpoti inventore molestias sit consectetur facere nam delectus corpo quos mollitia velit iste at ea, quam dolor fugiat possimus</h4>
                 <Link to={"/blue"}><Button variant='blue' text='MORE' img={Zurag1} /></Link>
            </div>
        </div>
    );
};
export default Home1;



