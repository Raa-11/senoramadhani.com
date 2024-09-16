export type WorkExperience = {
    company: string;
    location: string;
    position: string;
    type: "remote" | "onsite";
    time: "full-time" | "contract" | "freelance";
    period: [Date, Date | null];
    details: string[];
    technologies: string[];
};