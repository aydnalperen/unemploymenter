import React from 'react';
import Layout from '../components/layout'

export const getServerSideProps = async (ctx) =>{

    const {params} = ctx

    const res = await fetch(
        'http://api.worldbank.org/v2/country/tur/indicator/SL.UEM.TOTL.ZS?format=json'
    )
    let result = await res.json()

    return {
        props :{
            allResults : result[1].map((year) => year.value)
        }
    }
}  
const Home = ({allResults})=> {
    return (
        <>
            <Layout>
            <h1>All Posts</h1>
            {allResults?.map((post, idx) => (
                <div key={idx}>{post}</div>))}
            </Layout>
        </>
    )
}
export default Home