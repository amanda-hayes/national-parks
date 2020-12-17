import React from 'react';
import parks from '../ParkInfo/parks.json'

const Home = () => {
    return (
        <div>
            <h1>This is the homepage!</h1>
            <p>I love parks!</p>
            {
                parks.map((item, index) => {
                    return (
                        <div>
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Home;