/**
 Testing the details header component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import DetailsHeader from '../components/details/DetailsHeader';
import ProfileHeader from '../components/details/ProfileHeader';

class DetailsHeaderTest extends Component {

    render() {
        return (
            <div style={styles.base}>
                <header>
                    <h1>Details Header Testing</h1>
                </header>
                <section>
                    <h2>Details Header</h2>
                    <DetailsHeader src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A"
                        rounded
                        header="Hisham Zahran"
                        subHeader="Wenta 3amel eh a5barak tmam el7amdulelah ?ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssslkdlskdlkslkdls"
                        type="profile"
                        size="md"
                        id="1" />
                </section>
                <section>
                    <h2>Profile Header</h2>
                    <ProfileHeader src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A"
                        rounded
                        header="Hisham Zahran"
                        subHeader="Wenta 3amel eh a5barak tmam el7amdulelah ?ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssslkdlskdlkslkdls"
                        type="profile"
                        size="lg"
                        id="1" />
                </section>
            </div >
        );
    }
}

const styles = {
    base: {
        padding: '10px',
    }
}

DetailsHeaderTest = Radium(DetailsHeaderTest);
export default DetailsHeaderTest;
