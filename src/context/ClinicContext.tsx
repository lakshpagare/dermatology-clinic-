import React, { createContext, useContext, useState, useEffect } from "react";

interface Appointment {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}

interface ClinicContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  appointments: Appointment[];
  bookAppointment: (appt: Appointment) => void;
  bookingSuccess: boolean;
  setBookingSuccess: (status: boolean) => void;
  bookingModalOpen: boolean;
  setBookingModalOpen: (status: boolean) => void;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("belle_dark_mode");
    return saved === "true";
  });

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem("belle_appointments");
    return saved ? JSON.parse(saved) : [];
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("belle_dark_mode", String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const bookAppointment = (appt: Appointment) => {
    const updated = [...appointments, appt];
    setAppointments(updated);
    localStorage.setItem("belle_appointments", JSON.stringify(updated));
    setBookingSuccess(true);
  };

  return (
    <ClinicContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        appointments,
        bookAppointment,
        bookingSuccess,
        setBookingSuccess,
        bookingModalOpen,
        setBookingModalOpen
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = () => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error("useClinic must be used within a ClinicProvider");
  }
  return context;
};
