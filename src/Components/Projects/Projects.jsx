import React from 'react';
import img1 from '../Images/Bloodbank.png'
import img2 from '../Images/Projectmng.png'
import img3 from '../Images/Attm.png'
import img4 from '../Images/Eventvista.png'
import img5 from '../Images/Letseat.png'
import img6 from '../Images/Packurbgs.png'
import '../Projects/Projects.css'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-2 g-4 m-3'>
      <MDBCol>
        <MDBCard className='fixed-card-size border border-dark'>
          <MDBCardImage
            src={img1}
            alt='...'
            position='top'
            className='fixed-image'
          />
          <MDBCardBody>
            <MDBCardTitle className='text-center mt-2'tag='h3' >CEC Blood Bank</MDBCardTitle>
            <MDBCardText>
            CEC BLOOD BANK is a website on blood donation management. The website can reduce time latency in blood donation. The website enables direct contact between donor and recipient
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='fixed-card-size border border-dark'>
          <MDBCardImage
            src={img2}
            alt='...'
            position='top'
            className='fixed-image'
          />
          <MDBCardBody>
            <MDBCardTitle className='text-center mt-2'tag='h3'>Project Management System</MDBCardTitle>
            <MDBCardText>
            The project seeks to streamline the entire project lifecycle, from inception to completion, by providing a centralized platform for students, project guides, and administrators.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='fixed-card-size border border-dark'>
          <MDBCardImage
            src={img3}
            alt='...'
            position='top'
            className='fixed-image'
          />
          <MDBCardBody>
            <MDBCardTitle className='text-center mt-2'tag='h3'>Animal Matters to Me</MDBCardTitle>
            <MDBCardText>
            Website for helping animals. Users can reserve the treatement, donate services, get guidelines about raising an animal, adopt animal through this website.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='fixed-card-size border border-dark'>
          <MDBCardImage
            src={img4}
            alt='...'
            position='top'
            className='fixed-image'
          />
          <MDBCardBody>
            <MDBCardTitle className='text-center mt-2'tag='h3'>Event Vista</MDBCardTitle>
            <MDBCardText>
             A website for hosting different events like wedding, engagement, birthday parties etc. People can book the events.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='fixed-card-size border border-dark'>
          <MDBCardImage
            src={img5}
            alt='...'
            position='top'
            className='fixed-image'
          />
          <MDBCardBody>
            <MDBCardTitle className='text-center mt-2'tag='h3'>Let's Eat</MDBCardTitle>
            <MDBCardText>
              A food delivery website for order food as online and customers can also book tables from their favorite resturants.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='fixed-card-size border border-dark'>
          <MDBCardImage
            src={img6}
            alt='...'
            position='top'
            className='fixed-image'
          />
          <MDBCardBody>
            <MDBCardTitle className='text-center mt-2'tag='h3'>Pack Your Bags</MDBCardTitle>
            <MDBCardText>
              A website for travel enthusiastics for posting their travel blogs about their travel adventures, tips, cultural, food etc. Also book some of the events like adventure, hotels.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}