import React from 'react'

const Home = () => {
    return (
        <main className='container text-white'>
            <section className='p-5 text-center bg-light-dark rounded'>
                <h1>Stock Prediction Portal</h1>
                <p className='lead '>This stock prediction application utilizes machine learning techniques, specifically employing Keras, TensorFlow, and LSTM models, integrated within the Django framework. It forecasts future stock prices by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
                <a href="" className='btn btn-info'>Login</a>
            </section>
        </main>
    )
}

export default Home