import React from "react";
import styles from "../../../styles/BookingCard.css";
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react'
import BookingCardStay from "../BookingCard/BookingCardStay";
import BookingCardPackages from "../BookingCard/BookingCardPackages";
import BookingCardThings from "../BookingCard/BookingCardThings";
import BookingCardCar from '../BookingCard/BookingCardCar'
import BookingCardFlight from '../BookingCard/BookingCardFlight'


const BookingCard = () => {
  return (
    <div className="Booking-card-container">
      <Tabs >
        <TabList className="Booking-card-tabs">
          <Tab className="Booking-card-tab">Stay</Tab>
          <Tab className="Booking-card-tab">Flight</Tab>
          <Tab className="Booking-card-tab">Cars</Tab>
          <Tab className="Booking-card-tab">Packages </Tab>
          <Tab className="Booking-card-tab">Things to do</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <BookingCardStay/>
          </TabPanel>
          <TabPanel>
            <BookingCardFlight/>
          </TabPanel>
          <TabPanel>
            <BookingCardCar/>
          </TabPanel>
          <TabPanel>
            <BookingCardPackages/>
          </TabPanel>
          <TabPanel>
            <BookingCardThings/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default BookingCard;
