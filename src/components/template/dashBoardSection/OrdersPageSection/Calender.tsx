"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views,
  Navigate,
} from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/en-gb";
import "@/app/Calendar.css"; // Custom CSS file
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(BigCalendar);

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [view, setView] = useState<any>(Views.MONTH);
  const [currentDate, setCurrentDate] = useState<Date>(
    moment(new Date()).toDate()
  );
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const initialEvents = [
      {
        id: 1,
        title: "Hand Bag",
        start: new Date(2024, 6, 18),
        end: new Date(2024, 6, 18),
      },
      {
        id: 2,
        title: "School Bag",
        start: new Date(2024, 6, 19),
        end: new Date(2024, 6, 19),
      },
      {
        id: 3,
        title: "Shopping bag",
        start: new Date(2024, 6, 22),
        end: new Date(2024, 6, 22),
      },
    ];

    setEvents(initialEvents);
  }, []);

  const handlePrev = (date: Date): Date => {
    if (view === Views.DAY) {
      setCurrentDate(moment(date).subtract(1, "d").toDate());
      return moment(date).subtract(1, "d").toDate();
    } else if (view === Views.MONTH) {
      setCurrentDate(moment(date).subtract(1, "M").toDate());
      return moment(date).subtract(1, "M").toDate();
    } else if (view === Views.WEEK) {
      setCurrentDate(moment(date).subtract(1, "w").toDate());
      return moment(date).subtract(1, "w").toDate();
    }
    return date;
  };

  const handleNext = (date: Date): Date => {
    if (view === Views.DAY) {
      setCurrentDate(moment(date).add(1, "d").toDate());
      return moment(date).add(1, "d").toDate();
    } else if (view === Views.MONTH) {
      setCurrentDate(moment(date).add(1, "M").toDate());
      return moment(date).add(1, "M").toDate();
    } else if (view === Views.WEEK) {
      setCurrentDate(moment(date).add(1, "w").toDate());
      return moment(date).add(1, "w").toDate();
    }
    return date;
  };

  const handleCurrentMonth = (): void => {
    setCurrentDate(new Date());
  };

  const handleViewChange = (newView: any): void => {
    setView(newView);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleEventDrop = ({ event, start, end, isAllDay }: any) => {
    const updatedEvents = events.map((existingEvent) => {
      if (existingEvent.id === event.id) {
        return { ...existingEvent, start, end };
      }
      return existingEvent;
    });
    setEvents(updatedEvents);
  };

  const handleBookingSubmit = (newEvent: any) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen w-full p-4 py-9">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col gap-y-6 sm:gap-y-0 w-full mb-10 sm:flex-row items-center justify-center sm:justify-between">
            <h1 className="text-2xl font-semibold">
              {moment(currentDate).format("MMMM YYYY")}
            </h1>
            <div>
              <div className="relative inline-block">
                <button
                  type="button"
                  className="border border-slate-200 rounded-md py-1.5 capitalize text-left focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-between px-8 focus:ring-indigo-500"
                  onClick={toggleDropdown}
                >
                  <span>{view}</span>
                  <svg
                    className="ml-1 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.293l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute z-10 top-full left-0 w-full bg-white border border-slate-200 rounded-md shadow-sm py-1.5 text-left">
                    <span
                      className="block px-4 py-2 hover:bg-slate-100 cursor-pointer"
                      onClick={() => handleViewChange(Views.MONTH)}
                    >
                      Month
                    </span>
                    <span
                      className="block px-4 py-2 hover:bg-slate-100 cursor-pointer"
                      onClick={() => handleViewChange(Views.WEEK)}
                    >
                      Week
                    </span>
                    <span
                      className="block px-4 py-2 hover:bg-slate-100 cursor-pointer"
                      onClick={() => handleViewChange(Views.DAY)}
                    >
                      Day
                    </span>
                    <span
                      className="block px-4 py-2 hover:bg-slate-100 cursor-pointer"
                      onClick={() => handleViewChange(Views.AGENDA)}
                    >
                      Agenda
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="calender-main-container">
          <div className="calendar-container">
            <DnDCalendar
              localizer={localizer}
              events={events}
              // @ts-ignore
              startAccessor="start"
              // @ts-ignore
              endAccessor="end"
              style={{ height: "100%" }}
              view={view}
              onView={handleViewChange}
              date={currentDate}
              onNavigate={(date: any, action: any) => {
                if (action === Navigate.PREVIOUS) {
                  return handlePrev(date);
                } else if (action === Navigate.NEXT) {
                  return handleNext(date);
                }
                return date;
              }}
              onEventDrop={handleEventDrop}
              draggableAccessor={(event: any) => true}
            />
          </div>
        </div>

        <div className="calendar-navigation flex items-center mt-9 justify-center gap-x-5">
          <button onClick={() => setCurrentDate(handlePrev(currentDate))}>
            <ArrowLeft className="text-gray-400" />
          </button>
          <Button
            onClick={handleCurrentMonth}
            variant={"outline"}
            className="p-4 text-lg font-normal rounded-md"
          >
            Today
          </Button>
          <button onClick={() => setCurrentDate(handleNext(currentDate))}>
            <ArrowRight className="text-gray-400" />
          </button>
        </div>
      </div>
    </DndProvider>
  );
};

export default MyCalendar;
