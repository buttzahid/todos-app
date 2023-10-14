import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import Layout from './components/Layout';
const names = ["ali", "imran"]


const Home = () => {
  return (
    <Layout>
      <div className='App'>
        <ul>
          {
            names.map((n) => <li key={n}>{n}</li>)
          }
        </ul>
      </div>
    </Layout>
  )
}
export default Home