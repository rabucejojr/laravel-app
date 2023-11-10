import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { CustomModal } from ".";

function Calendar() {
    const [events, setEvents] = useState({
        title: "",
        name: "",
    });
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
            <CustomModal
                open={isModalOpen}
                handleClose={handleCloseModal}
                handleAddEvent={handleAddEvent}
                event={title}
                date={date}
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
                dateClick={handleOpenModal}
            />
        </>
    );
}

export default Calendar;
