export type Education = {
    school: string;
    location: string;
    bachelor: string;
    period: [Date, Date | null];
    gpa: [number, number | null];
    honors: string | null;
};