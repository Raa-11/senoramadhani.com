import type { Education } from "../models/education";

export const educations: Education[] = [
    {
        school: "Universitas Komputer Indonesia",
        location: "Bandung, ID",
        bachelor: "Bachelor of Science, Computer Science",
        period: [new Date(2017, 9), new Date(2021, 8)],
        gpa: [3.52, 4.00],
        honors: "Cumlaude"
    }
];