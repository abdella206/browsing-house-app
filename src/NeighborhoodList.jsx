import React from 'react';
import { Link } from 'react-router-dom'

const NeighborhoodList = props => (
    <>
        <h1 className='hood'>Your Recommended Neighborhoods</h1>

        <div className="Tripflex">
                
            <Link to={`/show/`}> {' '}
            
                <h1 className="tripname"> {props.lists[0]}</h1>
            </Link>

            <div className="mytriptwo">

                <ul>
                    <p className='p'>91: Transportation</p>
                    <br />
                    <p className='p'>85: Daily Life</p>
                    <br />
                    <p className='p'>80: Community</p>
                </ul>

            </div>

            <h1 className="tripname"> {props.lists[1]}</h1>
            <div className="mytrips">

                <ul>
                    <p className="p">86: Transportation</p>
                    <br />
                    <p className='p'>82:Daily Life</p>
                    <br />
                    <p className='p'>87: Community</p>
                </ul>

            </div>


            <h1 className="tripname"> {props.lists[2]}</h1>


            <div className="mytripthree">

                <ul>
                    <p className='p' >85: Transportation</p>
                    <br />
                    <p className='p'>87: Daily Life</p>
                    <br />
                    <p className='p'>82: Community</p>
                </ul>
            </div>



            {/* 
            <ul>
                    <li>Transportation</li>
                        <br/>
                    <li>Daily Life</li>
                        <br/>
                    <li>Community</li>
                </ul> */}





        </div>









    </>

)

/*<button>Go!</button><div className="park">ParkSlope</div>
<button>Go!</button><div className="bed">Bed Stuy</div>
<button>Go!</button><div className="green">Green Point</div>*/



export default NeighborhoodList;
