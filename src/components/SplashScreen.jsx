import {useEffect} from 'react';
 
import './SplashScreen.css';
import {  useNavigate } from 'react-router-dom';

function SplashScreen () {
    const navigate = useNavigate ();

    useEffect(() => {
        setTimeout(() => {
            navigate('/home');

        }, 2000);
    }, [navigate]);


    return (
        <div className="splash-conrainer">
            
        </div>
    );
}

export default SplashScreen;