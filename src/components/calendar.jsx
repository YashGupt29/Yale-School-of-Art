import CalendarBody from "./calendar/calendarBody";
import CalendarHeader from "./calendar/calendarHeader";

const Calendar = () => {
  return (
    <div className="bg-[#d89c0c] w-[40%] rounded-xl">
      <CalendarHeader />
      <CalendarBody />
    </div>
  );
};

export default Calendar;
