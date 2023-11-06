import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { CustomModal } from ".";
import { Button } from "@mui/material";

function Calendar() {
    const [events, setEvents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEventAdd = (info) => {
        setEvents([
            ...events,
            { title: info.event.title, date: info.event.startStr },
        ]);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddEvent = (event) => {
        setEvents([...events, event]);
    };
    return (
        <>
            <Button variant="contained" color="primary" onClick={handleOpenModal}>Add Event</Button>
            <CustomModal
                open={isModalOpen}
                handleClose={handleCloseModal}
                handleAddEvent={handleAddEvent}
            />
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                events={events}
                editable={true}
                selectable={true}
                select={(info) => console.log(info)}
                eventAdd={handleEventAdd}
            />
        </>
    );
}

export default Calendar;
