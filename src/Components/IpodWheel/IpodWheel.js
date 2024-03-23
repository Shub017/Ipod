import React, { useEffect } from 'react';
import styles from './IpodWheel.module.css';
import ZingTouch from 'zingtouch';

export default function IpodWheel(props) {
    const { pressOKButtonEventHandler, menuNavigationAngle, MENUEventHandler } = props;

    // Define the tap gesture handler
    const okTaphandler = (e) => {
        pressOKButtonEventHandler();
    }

    const MENUHandler = (e) => {
        console.log('MENU tapped');
        MENUEventHandler();
    }

    useEffect(() => {
        const myElement = document.getElementById('Wheel');

        if (!myElement) {
            return; // Return early if the element is not found
        }

        try {
            // Create a new Region instance specifying the element and preventDefault option
            const ztRegion = new ZingTouch.Region(myElement, false, true);

            // Define the rotate gesture handler
            const rotateHandler = (e) => {
                menuNavigationAngle(e.detail.angle);
            };

            // Bind the rotate gesture to the region
            ztRegion.bind(myElement, 'rotate', rotateHandler);

            // Return a cleanup function to unbind the event when the component is unmounted
            return () => {
                ztRegion.unbind(myElement, 'rotate');
            };
        } catch (error) {
            console.warn('Error setting up ZingTouch Region:', error);
        }
    }, [menuNavigationAngle]); // Include menuNavigationAngle in the dependency array

    return (
        <div className={styles.wheelContainer}>
            <div className={styles.wheel} id='Wheel'></div>
            <img src='https://cdn-icons-png.flaticon.com/128/4402/4402628.png' className={styles.backwardArrow} alt="Backward Arrow" />
            <img src='https://cdn-icons-png.flaticon.com/128/660/660276.png' className={styles.ForwardArrow} alt="Forward Arrow" />
            <img src='https://cdn-icons-png.flaticon.com/128/27/27223.png' className={styles.Play} alt="Play" />
            <p className={styles.Menu} id='MENU' onClick={() => { MENUHandler() }}>MENU</p>
            <div className={styles.OkButton} id='okButton' onClick={() => { okTaphandler() }}></div>
        </div>
    );
}
