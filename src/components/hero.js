import React from 'react';
import { Navbar, Button, Image } from 'react-bootstrap';
import { FaCheckCircle, FaStar, FaThumbsUp, FaEye, FaHeart } from 'react-icons/fa'; // for the green tick icon
import { IoIosPerson } from 'react-icons/io'; // for the purple person icon

const HeroSection = () => {
    return (
        <div style={{ position: 'relative' }}>
            <div style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1461301214746-1e109215d6d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                height: '50vh',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                {/* You can add content here */}
            </div>
            <div style={{
                position: 'absolute',
                top: '45vh',
                left: '10%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="https://media.licdn.com/dms/image/D4D03AQEXdD5HHqzN3g/profile-displayphoto-shrink_800_800/0/1667373388482?e=2147483647&v=beta&t=3OsbjB3Clq9SXxS5hiXldylkaEX03X3FbtmNpyTMDVo" alt="Profile" style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        border: '3px solid black'
                    }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <h2 style={{ fontWeight: 'bold' }}>Anuj Gosalia</h2>
                            <IoIosPerson style={{ color: 'purple' }} />
                            <FaCheckCircle style={{ color: 'green' }} />
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                                <Button variant="light" style={{ borderRadius: '15px', color: 'grey', borderColor: 'grey', width: '70px', height: '40px' }}>
                                    <b>6482</b>
                                </Button>
                                <span style={{ fontSize: 'small' }}>Followers</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                                <Button variant="light" style={{ borderRadius: '15px', color: 'grey', borderColor: 'grey', width: '70px', height: '40px' }}>
                                    <b>245</b>
                                </Button>
                                <span style={{ fontSize: 'small' }}>Following</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>




        </div>
    );
}

export default HeroSection;
