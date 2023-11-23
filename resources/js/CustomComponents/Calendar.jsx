import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { CustomModal } from ".";

function Calendar() {
    const [events, setEvents] = useState({
        title: "",
        date: "",
    });
    const [date, setDate] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dateClicked = (info) => {
        setDate(info.startStr);
    }
    const handleEventAdd = (info) => {
        setEvents([
            ...events,
            { title: info.event.title, date: info.event.startStr },
        ]);
    };

    const handleOpenModal = (info) => {
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
                header="Add Event"
                // title={title}
                date={date}
                clickedDate={date}
            />
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                events={events}
                editable={true}
                selectable={true}
                select={dateClicked}
                eventAdd={handleEventAdd}
                dateClick={handleOpenModal}
            />
        </>
    );
}

export default Calendar;
